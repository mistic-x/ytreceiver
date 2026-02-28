from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles # <-- Добавили этот импорт
import yt_dlp
import uvicorn
import mimetypes

# Чиним баг Windows с чтением CSS и JS файлов
mimetypes.add_type('text/css', '.css')
mimetypes.add_type('application/javascript', '.js')

app = FastAPI(title="YouTube Downloader API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/get-video-info")
async def get_video_info(url: str):
    if "youtube.com" not in url and "youtu.be" not in url:
        raise HTTPException(status_code=400, detail="Нужна корректная ссылка на YouTube")
    
    ydl_opts = {
            'quiet': True,
            'no_warnings': True,
            'cookiefile': 'cookies.txt', # Куки работают, оставляем!
            # МАГИЮ АНДРОИДА УБРАЛИ, чтобы вернуть целые видео
            'skip_download': True,
            'ignoreerrors': True
        }
    
    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(url, download=False)
            
            if not info:
                raise Exception("YouTube заблокировал запрос. Нужны новые cookies.")
            
            download_links = []
            
            # 1. Ищем форматы, где сразу есть И видео, И звук
            for f in info.get('formats', []):
                # Проверяем, что кодеки существуют и не равны 'none'
                if f.get('vcodec') != 'none' and f.get('acodec') != 'none':
                    download_links.append({
                        "quality": f.get('resolution', 'HD'),
                        "format": f.get('ext', 'mp4'),
                        "url": f.get('url')
                    })
            
            # 2. Ищем аудио отдельно
            audio_formats = [f for f in info.get('formats', []) if f.get('acodec') != 'none' and f.get('vcodec') == 'none']
            if audio_formats:
                best_audio = sorted(audio_formats, key=lambda x: x.get('abr', 0))[-1]
                download_links.append({
                    "quality": "Аудио",
                    "format": "m4a",
                    "url": best_audio.get('url')
                })

            # 3. ЕСЛИ нормальных видео нет (осталось только аудио или пусто), 
            # берем видео БЕЗ ЗВУКА, чтобы сайт выдал хоть что-то
            if len(download_links) <= 1: 
                for f in info.get('formats', []):
                    if f.get('vcodec') != 'none' and f.get('acodec') == 'none':
                        download_links.append({
                            "quality": f.get('resolution', 'HD') + " (Без звука)",
                            "format": f.get('ext', 'mp4'),
                            "url": f.get('url')
                        })

            if not download_links:
                 raise Exception("Не найдено прямых ссылок для скачивания.")

            # Фильтруем дубликаты и оставляем 4 лучших варианта
            unique_links = list({v['quality']:v for v in download_links}.values())[::-1][:4]

            return {
                "status": "success",
                "video_details": {
                    "title": info.get('title', 'Неизвестное видео'),
                    "duration": info.get('duration_string', '??:??')
                },
                "download_links": unique_links
            }
            
    except Exception as e:
        print(f"Ошибка: {e}")
        raise HTTPException(status_code=400, detail=str(e))

# <-- ДОБАВИЛИ ЭТУ СТРОКУ (обязательно после @app.get) -->
# Она говорит серверу: "Всё остальное ищи в текущей папке и отдавай как файлы (HTML, CSS, JS)"
app.mount("/", StaticFiles(directory=".", html=True), name="static")

if __name__ == "__main__":

    uvicorn.run(app, host="127.0.0.1", port=8000)



