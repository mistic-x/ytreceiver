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

def extract_video_id(url: str):
    match = re.search(r"(?:v=|\/)([0-9A-Za-z_-]{11}).*", url)
    return match.group(1) if match else None

# Легально получаем название видео через официальный API Ютуба (за это не банят)
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
    video_id = extract_video_id(url)
    if not video_id:
        raise HTTPException(status_code=400, detail="Нужна корректная ссылка на YouTube")
    
    title = get_youtube_title(url)
    
    # Мощные серверы Piped API
    instances = [
        "https://pipedapi.kavin.rocks",
        "https://pipedapi.tokhmi.xyz",
        "https://api.piped.projectsegfau.lt",
        "https://piped-api.lunar.icu",
        "https://pipedapi.smnz.de"
    ]
    
    for instance in instances:
        try:
            print(f"Пытаемся подключиться к: {instance}")
            api_url = f"{instance}/streams/{video_id}"
            req = urllib.request.Request(api_url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
            with urllib.request.urlopen(req, timeout=8) as response:
                data = json.loads(response.read().decode())
                
                download_links = []
                
                # Ищем целые видео со звуком
                for stream in data.get("videoStreams", []):
                    if not stream.get("videoOnly", False):
                        download_links.append({
                            "quality": stream.get("quality", "HD"),
                            "format": stream.get("format", "mp4").lower(),
                            "url": stream.get("url")
                        })
                        
                # Ищем аудио
                for stream in data.get("audioStreams", []):
                    download_links.append({
                        "quality": "Аудио",
                        "format": stream.get("format", "m4a").lower(),
                        "url": stream.get("url")
                    })
                    break # Одного аудио хватит
                    
                # Ищем видео без звука
                for stream in data.get("videoStreams", []):
                    if stream.get("videoOnly", True):
                        download_links.append({
                            "quality": f"{stream.get('quality')} (Без звука)",
                            "format": stream.get("format", "mp4").lower(),
                            "url": stream.get("url")
                        })

                # Фильтруем дубликаты
                unique_links = list({v['quality']:v for v in download_links}.values())
                
                if unique_links:
                    print(f"УСПЕХ! Сервер {instance} отдал ссылки.")
                    return {
                        "status": "success",
                        "video_details": {
                            "title": title,
                            "duration": "Загружено" 
                        },
                        "download_links": unique_links[:5]
                    }
        except Exception as e:
            # ТЕПЕРЬ МЫ ВИДИМ ОШИБКИ В ЛОГАХ RENDER
            print(f"ОШИБКА на сервере {instance}: {e}")
            continue
            
    # Если мы дошли сюда, значит все серверы отказали
    print("КРИТИЧЕСКАЯ ОШИБКА: Все серверы Piped API недоступны.")
    raise HTTPException(status_code=400, detail="Все серверы-помощники сейчас перегружены. Попробуйте через пару минут!")

app.mount("/", StaticFiles(directory=".", html=True), name="static")
