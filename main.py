import re
import json
import urllib.request
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
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

# Функция для вытаскивания ID видео (например, dQw4w9WgXcQ) из любой ссылки
def extract_video_id(url: str):
    match = re.search(r"(?:v=|\/)([0-9A-Za-z_-]{11}).*", url)
    return match.group(1) if match else None

@app.get("/api/get-video-info")
async def get_video_info(url: str):
    video_id = extract_video_id(url)
    if not video_id:
        raise HTTPException(status_code=400, detail="Нужна корректная ссылка на YouTube")
    
    # Список публичных серверов-помощников (если один упадет, код пойдет к следующему)
    instances = [
        "https://vid.puffyan.us",
        "https://invidious.jing.rocks",
        "https://invidious.nerdvpn.de"
    ]
    
    data = None
    for instance in instances:
        api_url = f"{instance}/api/v1/videos/{video_id}"
        try:
            # Стучимся к чужому серверу
            req = urllib.request.Request(api_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=5) as response:
                data = json.loads(response.read().decode())
                break # Если получилось, выходим из цикла
        except Exception:
            continue # Если сервер не ответил, пробуем следующий
            
    if not data:
        raise HTTPException(status_code=400, detail="Не удалось обойти защиту. Попробуйте позже или другое видео.")

    # Форматируем длительность (секунды в MM:SS)
    length_sec = data.get("lengthSeconds", 0)
    mins, secs = divmod(length_sec, 60)
    
    download_links = []
    
    # 1. Ищем готовые целые видео (MP4)
    for f in data.get("formatStreams", []):
        if f.get("container") == "mp4":
            download_links.append({
                "quality": f.get("qualityLabel", "HD"),
                "format": "mp4",
                "url": f.get("url")
            })
            
    # 2. Ищем Аудио
    for f in data.get("adaptiveFormats", []):
        if f.get("type", "").startswith("audio/mp4"):
            download_links.append({
                "quality": "Аудио",
                "format": "m4a",
                "url": f.get("url")
            })
            break # Нам хватит одного хорошего аудио файла
            
    # 3. Ищем видео без звука
    for f in data.get("adaptiveFormats", []):
        if f.get("type", "").startswith("video/mp4") and f.get("qualityLabel"):
            download_links.append({
                "quality": f"{f.get('qualityLabel')} (Без звука)",
                "format": "mp4",
                "url": f.get("url")
            })

    # Убираем дубликаты
    unique_links = []
    seen = set()
    for link in download_links:
        if link["quality"] not in seen:
            seen.add(link["quality"])
            unique_links.append(link)

    # Отдаем данные нашему фронтенду в привычном для него виде
    return {
        "status": "success",
        "video_details": {
            "title": data.get("title", "Неизвестное видео"),
            "duration": f"{mins}:{secs:02d}"
        },
        "download_links": unique_links[:5]
    }

app.mount("/", StaticFiles(directory=".", html=True), name="static")
