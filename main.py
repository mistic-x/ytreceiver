import re
import json
import urllib.request
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import mimetypes

mimetypes.add_type('text/css', '.css')
mimetypes.add_type('application/javascript', '.js')

app = FastAPI(title="YouTube Downloader API")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

def get_youtube_title(url: str):
    try:
        oembed_url = f"https://www.youtube.com/oembed?url={url}&format=json"
        req = urllib.request.Request(oembed_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=3) as response:
            return json.loads(response.read().decode()).get("title", "YouTube Видео")
    except:
        return "YouTube Видео"

@app.get("/api/get-video-info")
async def get_video_info(url: str):
    if "youtube.com" not in url and "youtu.be" not in url:
        raise HTTPException(status_code=400, detail="Нужна корректная ссылка на YouTube")
    
    title = get_youtube_title(url)
    print(f"Пробуем пробить через Cobalt: {url}")
    
    try:
        cobalt_url = "https://api.cobalt.tools/api/json"
        # Настройки для Cobalt (просим лучшее качество)
        payload = json.dumps({
            "url": url,
            "vQuality": "1080" 
        }).encode('utf-8')
        
        # Притворяемся нормальным браузером
        req = urllib.request.Request(cobalt_url, data=payload, headers={
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            'Origin': 'https://cobalt.tools',
            'Referer': 'https://cobalt.tools/'
        })
        
        with urllib.request.urlopen(req, timeout=15) as response:
            data = json.loads(response.read().decode())
            
            if data.get("status") == "error":
                raise Exception(data.get("text", "Отказ от Cobalt"))
                
            # Cobalt возвращает готовую прямую ссылку на скачивание
            download_url = data.get("url")
            
            print("УСПЕХ! Cobalt отдал ссылку.")
            return {
                "status": "success",
                "video_details": {
                    "title": title,
                    "duration": "Готово"
                },
                "download_links": [
                    {
                        "quality": "Лучшее доступное качество",
                        "format": "mp4",
                        "url": download_url
                    }
                ]
            }
            
    except Exception as e:
        print(f"КРИТИЧЕСКАЯ ОШИБКА COBALT: {e}")
        raise HTTPException(status_code=400, detail="Все защиты активированы. Скачивание временно невозможно.")

app.mount("/", StaticFiles(directory=".", html=True), name="static")
