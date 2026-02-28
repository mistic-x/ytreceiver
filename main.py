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
            'format': 'all', # Берем абсолютно всё, чтобы не было ошибки форматов
            'quiet': True,
            'no_warnings': True,
            'cookiefile': 'cookies.txt', 
            'extractor_args': {'youtube': {'client': ['android', 'web']}}, # ВОЗВРАЩАЕМ АНДРОИД (спасает от бана!)
            'skip_download': True,
            'ignoreerrors': True
        }
    
    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(url, download=False)
            
            if not info or 'formats' not in info:
                raise Exception("YouTube заблокировал запрос. Проверьте cookies.")
            
            download_links = []
            formats = info.get('formats', [])
            
            # 1. Пытаемся найти готовые видео со звуком (MP4)
            merged = [f for f in formats if str(f.get('vcodec', 'none')).lower() != 'none' and str(f.get('acodec', 'none')).lower() != 'none' and f.get('ext') == 'mp4']
            for f in merged:
                download_links.append({
                    "quality": f.get('resolution', 'HD'),
                    "format": "mp4",
                    "url": f.get('url')
                })
            
            # 2. Ищем лучшее Аудио
            audio = [f for f in formats if str(f.get('acodec', 'none')).lower() != 'none' and str(f.get('vcodec', 'none')).lower() == 'none']
            if audio:
                best_audio = sorted(audio, key=lambda x: x.get('abr', 0))[-1]
                download_links.append({
                    "quality": "Аудио",
                    "format": best_audio.get('ext', 'm4a'),
                    "url": best_audio.get('url')
                })
            
            # 3. Ищем видео БЕЗ ЗВУКА в высоком качестве (MP4)
            video_only = [f for f in formats if str(f.get('vcodec', 'none')).lower() != 'none' and str(f.get('acodec', 'none')).lower() == 'none' and f.get('ext') == 'mp4']
            if video_only:
                best_video = sorted(video_only, key=lambda x: x.get('height', 0), reverse=True)
                for f in best_video[:2]: # Берем 2 лучших качества
                    quality_name = f.get('resolution', f"{f.get('height', 'HD')}p")
                    download_links.append({
                        "quality": f"{quality_name} (Без звука)",
                        "format": "mp4",
                        "url": f.get('url')
                    })

            # Если вообще ничего не подошло (экстренный случай)
            if not download_links and formats:
                best_any = formats[-1]
                download_links.append({
                    "quality": "Доступный формат",
                    "format": best_any.get('ext', 'mp4'),
                    "url": best_any.get('url')
                })

            # Убираем дубликаты
            unique_links = list({v['quality']:v for v in download_links}.values())
            
            return {
                "status": "success",
                "video_details": {
                    "title": info.get('title', 'Неизвестное видео'),
                    "duration": info.get('duration_string', '??:??')
                },
                "download_links": unique_links[:5] # Отдаем топ 5 вариантов
            }
            
    except Exception as e:
        print(f"Ошибка: {e}")
        raise HTTPException(status_code=400, detail=str(e))

# <-- ДОБАВИЛИ ЭТУ СТРОКУ (обязательно после @app.get) -->
# Она говорит серверу: "Всё остальное ищи в текущей папке и отдавай как файлы (HTML, CSS, JS)"
app.mount("/", StaticFiles(directory=".", html=True), name="static")

if __name__ == "__main__":

    uvicorn.run(app, host="127.0.0.1", port=8000)




