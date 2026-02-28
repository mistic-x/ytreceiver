// --- СЛОВАРЬ ПЕРЕВОДОВ (25 ЯЗЫКОВ) ---
const translations = {
    en: {
        title: "YTReceiver", subtitle: "Free High Quality YouTube Downloader", placeholder: "Paste your YouTube video link", downloadBtn: "Download", notice: "Copyrighted content is not available for download with this tool. ⓘ", loading: "Processing video, please wait...", disclaimerBox: "- YTReceiver is a free, web-based YouTube downloader and is not affiliated with any software or paid products.", bestTitle: "Best YouTube Downloader", bestDesc: "YTReceiver is one of the best YouTube video downloaders for MP3 and MP4 formats. It offers a free, easy-to-use tool that allows you to save videos (up to 1080p) and audio with just one click.", fastTitle: "Fastest YouTube video downloader", fastDesc: "Downloading YouTube videos has never been faster with YTReceiver. In just a few seconds, you can save your favorite videos to your device.", deviceTitle: "Download YouTube videos for Android and iOS", deviceDesc: "Whether you're using an Android or an iPhone, YTReceiver makes downloading YouTube videos straightforward. Simply paste the video URL, select your preferred format, and your videos will be saved.", faqTitle: "Frequently Asked Questions", q1: "1. Where downloads are saved?", a1: "Once you've downloaded a YouTube video using YTReceiver, it's usually stored in the default 'Downloads' folder on your device.", q2: "2. How to download YouTube Videos in MP3?", a2: "After pasting the link and clicking Download, you're then presented with the Download page to select various formats for your video, including MP3.", q3: "3. How long does it take to download videos using YTReceiver?", a3: "The time it takes to download videos is determined by the file size and video quality you pick. For HD or 4K videos, it may take a few minutes.", footerText: "YTReceiver.com — the best YouTube Video Downloader | © 2026 by justsameguy_", footerDisclaimer: "This service is not affiliated with YouTube. This website does NOT host or store any videos on its servers.", dynamicDownload: "DOWNLOAD", dynamicDuration: "Duration: ", dynamicError: "Error", dynamicErrorDesc: "Could not fetch data. Check the link."
    },
    ru: {
        title: "YTReceiver", subtitle: "Бесплатный загрузчик видео с YouTube", placeholder: "Вставьте ссылку на YouTube видео", downloadBtn: "Скачать", notice: "Материалы, защищенные авторским правом, недоступны для скачивания. ⓘ", loading: "Обработка видео, пожалуйста подождите...", disclaimerBox: "- YTReceiver — это бесплатный веб-загрузчик YouTube, не связанный с платными продуктами.", bestTitle: "Лучший загрузчик YouTube", bestDesc: "Сохраняйте видео (до 1080p) и аудио в один клик абсолютно бесплатно.", fastTitle: "Самый быстрый загрузчик", fastDesc: "Всего за несколько секунд вы можете сохранить любимые видео на свое устройство.", deviceTitle: "Для Android и iOS", deviceDesc: "Просто вставьте ссылку, выберите формат, и видео будет сохранено.", faqTitle: "Часто задаваемые вопросы", q1: "1. Куда сохраняются файлы?", a1: "Обычно они сохраняются в стандартную папку «Загрузки» на вашем устройстве.", q2: "2. Как скачать в MP3?", a2: "На странице загрузки выберите формат MP3 или M4A.", q3: "3. Сколько времени занимает скачивание?", a3: "Зависит от размера файла. Для HD видео это может занять несколько минут.", footerText: "YTReceiver.com — лучший загрузчик видео | © 2026 by justsameguy_", footerDisclaimer: "Этот сервис не связан с YouTube. Сайт НЕ хранит видео на своих серверах.", dynamicDownload: "СКАЧАТЬ", dynamicDuration: "Длительность: ", dynamicError: "Ошибка", dynamicErrorDesc: "Не удалось получить данные. Проверьте ссылку."
    },
    uk: {
        title: "YTReceiver", subtitle: "Безкоштовний завантажувач відео з YouTube", placeholder: "Вставте посилання на відео YouTube", downloadBtn: "Завантажити", notice: "Матеріали, захищені авторським правом, недоступні для завантаження. ⓘ", loading: "Обробка відео, зачекайте...", disclaimerBox: "- YTReceiver — це безкоштовний веб-завантажувач YouTube, не пов'язаний з платними продуктами.", bestTitle: "Найкращий завантажувач YouTube", bestDesc: "Зберігайте відео (до 1080p) та аудіо в один клік абсолютно безкоштовно.", fastTitle: "Найшвидший завантажувач", fastDesc: "Лише за кілька секунд ви можете зберегти улюблені відео на свій пристрій.", deviceTitle: "Для Android та iOS", deviceDesc: "Просто вставте посилання, виберіть формат, і відео буде збережено.", faqTitle: "Часті запитання", q1: "1. Куди зберігаються файли?", a1: "Зазвичай вони зберігаються у стандартну папку «Завантаження» на вашому пристрої.", q2: "2. Як завантажити в MP3?", a2: "На сторінці завантаження оберіть формат MP3 або M4A.", q3: "3. Скільки часу займає завантаження?", a3: "Залежить від розміру файлу. Для HD відео це може зайняти кілька хвилин.", footerText: "YTReceiver.com — найкращий завантажувач | © 2026 by justsameguy_", footerDisclaimer: "Цей сервіс не пов'язаний з YouTube. Сайт НЕ зберігає відео на своїх серверах.", dynamicDownload: "ЗАВАНТАЖИТИ", dynamicDuration: "Тривалість: ", dynamicError: "Помилка", dynamicErrorDesc: "Не вдалося отримати дані. Перевірте посилання."
    },
    es: {
        title: "YTReceiver", subtitle: "Descargador de videos de YouTube gratuito", placeholder: "Pega el enlace de tu video de YouTube", downloadBtn: "Descargar", notice: "El contenido con derechos de autor no está disponible para descargar. ⓘ", loading: "Procesando video, por favor espera...", disclaimerBox: "- YTReceiver es un descargador gratuito y no está afiliado a ningún producto de pago.", bestTitle: "El mejor descargador de YouTube", bestDesc: "Guarda videos (hasta 1080p) y audio con un solo clic.", fastTitle: "El descargador más rápido", fastDesc: "En pocos segundos podrás guardar tus videos favoritos en tu dispositivo.", deviceTitle: "Descargar videos para Android e iOS", deviceDesc: "Simplemente pega el enlace, selecciona el formato y tu video se guardará.", faqTitle: "Preguntas Frecuentes", q1: "1. ¿Dónde se guardan las descargas?", a1: "Por lo general, en la carpeta de 'Descargas' de tu dispositivo.", q2: "2. ¿Cómo descargar videos en MP3?", a2: "Después de hacer clic en Descargar, selecciona el formato MP3 o M4A.", q3: "3. ¿Cuánto tiempo tarda?", a3: "Depende del tamaño del archivo. Para videos HD puede tardar unos minutos.", footerText: "YTReceiver.com — el mejor descargador de YouTube | © 2026 by justsameguy_", footerDisclaimer: "Este servicio no está afiliado a YouTube. Este sitio NO aloja videos en sus servidores.", dynamicDownload: "DESCARGAR", dynamicDuration: "Duración: ", dynamicError: "Error", dynamicErrorDesc: "No se pudieron obtener los datos. Revisa el enlace."
    },
    de: {
        title: "YTReceiver", subtitle: "Kostenloser YouTube Video Downloader", placeholder: "Fügen Sie Ihren YouTube-Link ein", downloadBtn: "Herunterladen", notice: "Urheberrechtlich geschützte Inhalte können nicht heruntergeladen werden. ⓘ", loading: "Video wird verarbeitet, bitte warten...", disclaimerBox: "- YTReceiver ist ein kostenloser Web-Downloader und mit keinem kostenpflichtigen Produkt verbunden.", bestTitle: "Bester YouTube Downloader", bestDesc: "Speichern Sie Videos (bis zu 1080p) und Audio mit nur einem Klick.", fastTitle: "Der schnellste Downloader", fastDesc: "In wenigen Sekunden können Sie Ihre Lieblingsvideos auf Ihrem Gerät speichern.", deviceTitle: "Für Android und iOS", deviceDesc: "Fügen Sie einfach den Link ein, wählen Sie das Format und das Video wird gespeichert.", faqTitle: "Häufig gestellte Fragen", q1: "1. Wo werden Downloads gespeichert?", a1: "Normalerweise im Standardordner 'Downloads' auf Ihrem Gerät.", q2: "2. Wie lade ich in MP3 herunter?", a2: "Wählen Sie auf der Download-Seite das MP3- oder M4A-Format aus.", q3: "3. Wie lange dauert der Download?", a3: "Abhängig von der Dateigröße. Bei HD-Videos kann es einige Minuten dauern.", footerText: "YTReceiver.com — der beste YouTube Downloader | © 2026 by justsameguy_", footerDisclaimer: "Dieser Dienst ist nicht mit YouTube verbunden. Diese Website hostet KEINE Videos auf ihren Servern.", dynamicDownload: "DOWNLOAD", dynamicDuration: "Dauer: ", dynamicError: "Fehler", dynamicErrorDesc: "Daten konnten nicht abgerufen werden. Überprüfen Sie den Link."
    },
    fr: {
        title: "YTReceiver", subtitle: "Téléchargeur vidéo YouTube gratuit", placeholder: "Collez le lien de votre vidéo YouTube", downloadBtn: "Télécharger", notice: "Le contenu protégé par des droits d'auteur ne peut pas être téléchargé. ⓘ", loading: "Traitement de la vidéo en cours...", disclaimerBox: "- YTReceiver est un téléchargeur gratuit et n'est affilié à aucun produit payant.", bestTitle: "Le meilleur téléchargeur YouTube", bestDesc: "Enregistrez des vidéos (jusqu'à 1080p) et de l'audio en un seul clic.", fastTitle: "Le téléchargeur le plus rapide", fastDesc: "En quelques secondes, vous pouvez enregistrer vos vidéos préférées.", deviceTitle: "Pour Android et iOS", deviceDesc: "Collez simplement le lien, sélectionnez le format et votre vidéo sera enregistrée.", faqTitle: "Questions fréquemment posées", q1: "1. Où sont enregistrés les téléchargements ?", a1: "Généralement dans le dossier 'Téléchargements' par défaut de votre appareil.", q2: "2. Comment télécharger en MP3 ?", a2: "Sur la page de téléchargement, sélectionnez le format MP3 ou M4A.", q3: "3. Combien de temps prend le téléchargement ?", a3: "Dépend de la taille du fichier. Pour les vidéos HD, cela peut prendre quelques minutes.", footerText: "YTReceiver.com — le meilleur téléchargeur | © 2026 by justsameguy_", footerDisclaimer: "Ce service n'est pas affilié à YouTube. Ce site n'héberge AUCUNE vidéo.", dynamicDownload: "TÉLÉCHARGER", dynamicDuration: "Durée: ", dynamicError: "Erreur", dynamicErrorDesc: "Impossible de récupérer les données. Vérifiez le lien."
    },
    zh: {
        title: "YTReceiver", subtitle: "免费的高清YouTube视频下载器", placeholder: "粘贴您的YouTube视频链接", downloadBtn: "下载", notice: "受版权保护的内容无法使用此工具下载。 ⓘ", loading: "正在处理视频，请稍候...", disclaimerBox: "- YTReceiver是一个免费的YouTube下载器，不隶属于任何付费产品。", bestTitle: "最好的YouTube下载器", bestDesc: "只需一键即可保存视频（最高1080p）和音频。", fastTitle: "最快的视频下载器", fastDesc: "只需几秒钟，您就可以将喜欢的视频保存到您的设备中。", deviceTitle: "适用于Android和iOS", deviceDesc: "只需粘贴链接，选择格式，视频即会保存。", faqTitle: "常见问题", q1: "1. 下载的内容保存在哪里？", a1: "通常保存在您设备默认的“下载”文件夹中。", q2: "2. 如何下载MP3格式的视频？", a2: "点击下载后，在下载页面选择MP3或M4A格式。", q3: "3. 下载需要多长时间？", a3: "取决于文件大小和质量。高清视频可能需要几分钟。", footerText: "YTReceiver.com — 最好的视频下载器 | © 2026 by justsameguy_", footerDisclaimer: "此服务不隶属于YouTube。本网站不在其服务器上托管或存储任何视频。", dynamicDownload: "下载", dynamicDuration: "时长：", dynamicError: "错误", dynamicErrorDesc: "无法获取数据，请检查链接。"
    },
    id: {
        title: "YTReceiver", subtitle: "Pengunduh Video YouTube Gratis", placeholder: "Tempel tautan video YouTube Anda", downloadBtn: "Unduh", notice: "Konten berhak cipta tidak tersedia untuk diunduh. ⓘ", loading: "Memproses video, harap tunggu...", disclaimerBox: "- YTReceiver adalah pengunduh web gratis dan tidak berafiliasi dengan produk berbayar apa pun.", bestTitle: "Pengunduh YouTube Terbaik", bestDesc: "Simpan video (hingga 1080p) dan audio hanya dengan satu klik.", fastTitle: "Pengunduh Tercepat", fastDesc: "Hanya dalam beberapa detik, Anda dapat menyimpan video favorit ke perangkat Anda.", deviceTitle: "Untuk Android dan iOS", deviceDesc: "Cukup tempel tautan, pilih format, dan video akan disimpan.", faqTitle: "Pertanyaan yang Sering Diajukan", q1: "1. Di mana unduhan disimpan?", a1: "Biasanya di folder 'Unduhan' default pada perangkat Anda.", q2: "2. Bagaimana cara mengunduh MP3?", a2: "Di halaman unduhan, pilih format MP3 atau M4A.", q3: "3. Berapa lama waktu yang dibutuhkan?", a3: "Tergantung pada ukuran file. Untuk video HD, mungkin memakan waktu beberapa menit.", footerText: "YTReceiver.com — Pengunduh YouTube Terbaik | © 2026 by justsameguy_", footerDisclaimer: "Layanan ini tidak berafiliasi dengan YouTube. Situs ini TIDAK menghosting video.", dynamicDownload: "UNDUH", dynamicDuration: "Durasi: ", dynamicError: "Kesalahan", dynamicErrorDesc: "Tidak dapat mengambil data. Periksa tautan."
    },
    pt: {
        title: "YTReceiver", subtitle: "Baixador de Vídeos do YouTube Grátis", placeholder: "Cole o link do seu vídeo do YouTube", downloadBtn: "Baixar", notice: "Conteúdo protegido por direitos autorais não pode ser baixado. ⓘ", loading: "Processando vídeo, aguarde...", disclaimerBox: "- O YTReceiver é um baixador gratuito e não é afiliado a produtos pagos.", bestTitle: "O Melhor Baixador do YouTube", bestDesc: "Salve vídeos (até 1080p) e áudio com apenas um clique.", fastTitle: "O mais rápido", fastDesc: "Em poucos segundos você pode salvar seus vídeos favoritos.", deviceTitle: "Para Android e iOS", deviceDesc: "Basta colar o link, escolher o formato e o vídeo será salvo.", faqTitle: "Perguntas Frequentes", q1: "1. Onde os downloads são salvos?", a1: "Geralmente na pasta padrão 'Downloads' do seu dispositivo.", q2: "2. Como baixar em MP3?", a2: "Na página de download, selecione o formato MP3 ou M4A.", q3: "3. Quanto tempo demora?", a3: "Depende do tamanho do arquivo. Vídeos em HD podem levar alguns minutos.", footerText: "YTReceiver.com — o melhor baixador | © 2026 by justsameguy_", footerDisclaimer: "Este serviço não é afiliado ao YouTube. Este site NÃO hospeda vídeos.", dynamicDownload: "BAIXAR", dynamicDuration: "Duração: ", dynamicError: "Erro", dynamicErrorDesc: "Não foi possível obter os dados. Verifique o link."
    },
    th: {
        title: "YTReceiver", subtitle: "ดาวน์โหลดวิดีโอ YouTube ฟรี", placeholder: "วางลิงก์วิดีโอ YouTube ของคุณ", downloadBtn: "ดาวน์โหลด", notice: "เนื้อหาที่มีลิขสิทธิ์ไม่สามารถดาวน์โหลดได้ ⓘ", loading: "กำลังประมวลผลวิดีโอ โปรดรอ...", disclaimerBox: "- YTReceiver เป็นโปรแกรมดาวน์โหลดฟรี และไม่มีส่วนเกี่ยวข้องกับผลิตภัณฑ์ที่ต้องชำระเงิน", bestTitle: "โปรแกรมดาวน์โหลด YouTube ที่ดีที่สุด", bestDesc: "บันทึกวิดีโอ (สูงสุด 1080p) และเสียงด้วยการคลิกเพียงครั้งเดียว", fastTitle: "ดาวน์โหลดเร็วที่สุด", fastDesc: "เพียงไม่กี่วินาที คุณก็สามารถบันทึกวิดีโอโปรดลงในอุปกรณ์ได้", deviceTitle: "สำหรับ Android และ iOS", deviceDesc: "เพียงวางลิงก์ เลือกรูปแบบ แล้ววิดีโอจะถูกบันทึก", faqTitle: "คำถามที่พบบ่อย", q1: "1. ดาวน์โหลดถูกบันทึกไว้ที่ไหน?", a1: "โดยปกติจะอยู่ในโฟลเดอร์ 'ดาวน์โหลด' เริ่มต้นของอุปกรณ์ของคุณ", q2: "2. วิธีดาวน์โหลด MP3", a2: "ในหน้าดาวน์โหลด ให้เลือกรูปแบบ MP3 หรือ M4A", q3: "3. ใช้เวลานานแค่ไหน?", a3: "ขึ้นอยู่กับขนาดไฟล์ สำหรับวิดีโอ HD อาจใช้เวลาสักครู่", footerText: "YTReceiver.com — โปรแกรมดาวน์โหลดที่ดีที่สุด | © 2026 by justsameguy_", footerDisclaimer: "บริการนี้ไม่มีส่วนเกี่ยวข้องกับ YouTube เว็บไซต์นี้ไม่ได้โฮสต์วิดีโอใดๆ", dynamicDownload: "ดาวน์โหลด", dynamicDuration: "ระยะเวลา: ", dynamicError: "ข้อผิดพลาด", dynamicErrorDesc: "ไม่สามารถดึงข้อมูลได้ โปรดตรวจสอบลิงก์"
    },
    tr: {
        title: "YTReceiver", subtitle: "Ücretsiz YouTube Video İndirici", placeholder: "YouTube video bağlantınızı yapıştırın", downloadBtn: "İndir", notice: "Telif hakkıyla korunan içerikler indirilemez. ⓘ", loading: "Video işleniyor, lütfen bekleyin...", disclaimerBox: "- YTReceiver ücretsiz bir web indiricisidir ve ücretli ürünlerle bağlantısı yoktur.", bestTitle: "En İyi YouTube İndirici", bestDesc: "Videoları (1080p'ye kadar) ve sesi tek tıklamayla kaydedin.", fastTitle: "En hızlı indirici", fastDesc: "Sadece birkaç saniye içinde favori videolarınızı kaydedebilirsiniz.", deviceTitle: "Android ve iOS için", deviceDesc: "Sadece bağlantıyı yapıştırın, formatı seçin ve video kaydedilsin.", faqTitle: "Sıkça Sorulan Sorular", q1: "1. İndirilenler nereye kaydedilir?", a1: "Genellikle cihazınızın varsayılan 'İndirilenler' klasörüne.", q2: "2. MP3 olarak nasıl indirilir?", a2: "İndirme sayfasında MP3 veya M4A formatını seçin.", q3: "3. İndirme ne kadar sürer?", a3: "Dosya boyutuna bağlıdır. HD videolar birkaç dakika sürebilir.", footerText: "YTReceiver.com — en iyi indirici | © 2026 by justsameguy_", footerDisclaimer: "Bu hizmet YouTube'a bağlı değildir. Bu site video BARINDIRMAZ.", dynamicDownload: "İNDİR", dynamicDuration: "Süre: ", dynamicError: "Hata", dynamicErrorDesc: "Veri alınamadı. Bağlantıyı kontrol edin."
    },
    vi: {
        title: "YTReceiver", subtitle: "Trình tải xuống video YouTube miễn phí", placeholder: "Dán liên kết video YouTube của bạn", downloadBtn: "Tải xuống", notice: "Không thể tải xuống nội dung có bản quyền. ⓘ", loading: "Đang xử lý video, vui lòng đợi...", disclaimerBox: "- YTReceiver là một trình tải xuống miễn phí và không liên kết với các sản phẩm trả phí.", bestTitle: "Trình tải xuống YouTube tốt nhất", bestDesc: "Lưu video (lên đến 1080p) và âm thanh chỉ bằng một cú nhấp chuột.", fastTitle: "Nhanh nhất", fastDesc: "Chỉ trong vài giây, bạn có thể lưu video yêu thích của mình.", deviceTitle: "Dành cho Android và iOS", deviceDesc: "Chỉ cần dán liên kết, chọn định dạng và video sẽ được lưu.", faqTitle: "Câu hỏi thường gặp", q1: "1. Tải xuống được lưu ở đâu?", a1: "Thường nằm trong thư mục 'Tải xuống' mặc định trên thiết bị của bạn.", q2: "2. Làm cách nào để tải xuống MP3?", a2: "Trên trang tải xuống, chọn định dạng MP3 hoặc M4A.", q3: "3. Mất bao lâu?", a3: "Phụ thuộc vào kích thước tệp. Video HD có thể mất vài phút.", footerText: "YTReceiver.com — trình tải xuống tốt nhất | © 2026 by justsameguy_", footerDisclaimer: "Dịch vụ này không liên kết với YouTube. Trang web này KHÔNG lưu trữ video.", dynamicDownload: "TẢI XUỐNG", dynamicDuration: "Thời lượng: ", dynamicError: "Lỗi", dynamicErrorDesc: "Không thể lấy dữ liệu. Kiểm tra liên kết."
    },
    nl: {
        title: "YTReceiver", subtitle: "Gratis YouTube Video Downloader", placeholder: "Plak je YouTube videolink", downloadBtn: "Downloaden", notice: "Auteursrechtelijk beschermde inhoud kan niet worden gedownload. ⓘ", loading: "Video verwerken, even geduld...", disclaimerBox: "- YTReceiver is een gratis downloader en is niet gelieerd aan betaalde producten.", bestTitle: "Beste YouTube Downloader", bestDesc: "Sla video's (tot 1080p) en audio op met slechts één klik.", fastTitle: "De snelste downloader", fastDesc: "In een paar seconden kunt u uw favoriete video's opslaan.", deviceTitle: "Voor Android en iOS", deviceDesc: "Plak de link, selecteer het formaat en je video wordt opgeslagen.", faqTitle: "Veelgestelde Vragen", q1: "1. Waar worden downloads opgeslagen?", a1: "Meestal in de standaardmap 'Downloads' op uw apparaat.", q2: "2. Hoe download ik in MP3?", a2: "Selecteer op de downloadpagina het MP3- of M4A-formaat.", q3: "3. Hoe lang duurt het?", a3: "Afhankelijk van de bestandsgrootte. HD-video's kunnen enkele minuten duren.", footerText: "YTReceiver.com — de beste downloader | © 2026 by justsameguy_", footerDisclaimer: "Deze service is niet gelieerd aan YouTube. Deze site host GEEN video's.", dynamicDownload: "DOWNLOADEN", dynamicDuration: "Duur: ", dynamicError: "Fout", dynamicErrorDesc: "Kan gegevens niet ophalen. Controleer de link."
    },
    ar: {
        title: "YTReceiver", subtitle: "برنامج تنزيل فيديو يوتيوب مجاني", placeholder: "الصق رابط فيديو يوتيوب هنا", downloadBtn: "تنزيل", notice: "المحتوى المحمي بحقوق الطبع والنشر غير متاح للتنزيل. ⓘ", loading: "جاري معالجة الفيديو، يرجى الانتظار...", disclaimerBox: "- YTReceiver أداة مجانية ولا تنتمي إلى أي منتجات مدفوعة.", bestTitle: "أفضل برنامج تنزيل", bestDesc: "احفظ مقاطع الفيديو (حتى 1080p) والصوت بنقرة واحدة.", fastTitle: "الأسرع على الإطلاق", fastDesc: "في ثوانٍ معدودة يمكنك حفظ فيديوهاتك المفضلة.", deviceTitle: "لأنظمة Android و iOS", deviceDesc: "فقط الصق الرابط، اختر الصيغة، وسيتم حفظ الفيديو.", faqTitle: "أسئلة مكررة", q1: "1. أين يتم حفظ التنزيلات؟", a1: "عادةً في مجلد 'التنزيلات' الافتراضي بجهازك.", q2: "2. كيف أقوم بتنزيل MP3؟", a2: "في صفحة التنزيل، اختر صيغة MP3 أو M4A.", q3: "3. كم يستغرق التنزيل؟", a3: "يعتمد على حجم الملف. قد تستغرق مقاطع الفيديو عالية الدقة بضع دقائق.", footerText: "YTReceiver.com — أفضل برنامج تنزيل | © 2026 by justsameguy_", footerDisclaimer: "هذه الخدمة غير تابعة ليوتيوب. هذا الموقع لا يستضيف أي مقاطع فيديو.", dynamicDownload: "تنزيل", dynamicDuration: "المدة: ", dynamicError: "خطأ", dynamicErrorDesc: "تعذر جلب البيانات. تحقق من الرابط."
    },
    cs: {
        title: "YTReceiver", subtitle: "Zdarma YouTube Video Downloader", placeholder: "Vložte odkaz na video YouTube", downloadBtn: "Stáhnout", notice: "Obsah chráněný autorskými právy nelze stáhnout. ⓘ", loading: "Zpracování videa, čekejte prosím...", disclaimerBox: "- YTReceiver je bezplatný stahovač a není spojen s žádnými placenými produkty.", bestTitle: "Nejlepší YouTube Downloader", bestDesc: "Uložte videa (až 1080p) a zvuk jedním kliknutím.", fastTitle: "Nejrychlejší", fastDesc: "Za pár sekund si můžete uložit svá oblíbená videa.", deviceTitle: "Pro Android a iOS", deviceDesc: "Stačí vložit odkaz, vybrat formát a video se uloží.", faqTitle: "Často kladené otázky", q1: "1. Kam se stahují soubory?", a1: "Obvykle do výchozí složky 'Stažené soubory' ve vašem zařízení.", q2: "2. Jak stáhnout MP3?", a2: "Na stránce pro stahování vyberte formát MP3 nebo M4A.", q3: "3. Jak dlouho to trvá?", a3: "Závisí na velikosti souboru. U HD videí to může trvat několik minut.", footerText: "YTReceiver.com — nejlepší stahovač | © 2026 by justsameguy_", footerDisclaimer: "Tato služba není spojena s YouTube. Tato stránka NEHOSTUJE videa.", dynamicDownload: "STÁHNOUT", dynamicDuration: "Délka: ", dynamicError: "Chyba", dynamicErrorDesc: "Nepodařilo se načíst data. Zkontrolujte odkaz."
    },
    pl: {
        title: "YTReceiver", subtitle: "Darmowy program do pobierania z YouTube", placeholder: "Wklej link do filmu z YouTube", downloadBtn: "Pobierz", notice: "Pobieranie materiałów chronionych prawem autorskim jest niedostępne. ⓘ", loading: "Przetwarzanie wideo, proszę czekać...", disclaimerBox: "- YTReceiver to darmowe narzędzie, niezwiązane z płatnymi produktami.", bestTitle: "Najlepszy downloader YouTube", bestDesc: "Zapisuj filmy (do 1080p) i audio jednym kliknięciem.", fastTitle: "Najszybszy downloader", fastDesc: "W kilka sekund zapiszesz swoje ulubione filmy na urządzeniu.", deviceTitle: "Dla Androida i iOS", deviceDesc: "Wklej link, wybierz format i film zostanie zapisany.", faqTitle: "Często zadawane pytania", q1: "1. Gdzie zapisywane są pliki?", a1: "Zazwyczaj w domyślnym folderze 'Pobrane' na Twoim urządzeniu.", q2: "2. Jak pobrać w MP3?", a2: "Na stronie pobierania wybierz format MP3 lub M4A.", q3: "3. Ile to trwa?", a3: "Zależy od rozmiaru pliku. W przypadku HD może to potrwać kilka minut.", footerText: "YTReceiver.com — najlepszy downloader | © 2026 by justsameguy_", footerDisclaimer: "Ta usługa nie jest powiązana z YouTube. Ta strona NIE przechowuje filmów.", dynamicDownload: "POBIERZ", dynamicDuration: "Czas trwania: ", dynamicError: "Błąd", dynamicErrorDesc: "Nie udało się pobrać danych. Sprawdź link."
    },
    jv: {
        title: "YTReceiver", subtitle: "Ngundhuh Video YouTube Gratis", placeholder: "Tempel link video YouTube sampeyan", downloadBtn: "Undhuh", notice: "Konten sing duwe hak cipta ora bisa diundhuh. ⓘ", loading: "Mroses video, mangga enteni...", disclaimerBox: "- YTReceiver iku pengundhuh gratis lan ora berafiliasi karo produk mbayar.", bestTitle: "Pengundhuh YouTube Paling Apik", bestDesc: "Simpen video (nganti 1080p) lan audio mung sak klik.", fastTitle: "Paling Cepet", fastDesc: "Ing sawetara detik, sampeyan bisa nyimpen video favorit.", deviceTitle: "Kanggo Android lan iOS", deviceDesc: "Cukup tempel link, pilih format, lan video bakal disimpen.", faqTitle: "Pitakonan sing Sering Ditakokake", q1: "1. Ing ngendi undhuhan disimpen?", a1: "Biasane ing folder 'Undhuhan' gawan ing piranti sampeyan.", q2: "2. Kepiye carane ngundhuh MP3?", a2: "Ing kaca undhuhan, pilih format MP3 utawa M4A.", q3: "3. Suwene suwene?", a3: "Gumantung ing ukuran file. Kanggo video HD, bisa njupuk sawetara menit.", footerText: "YTReceiver.com — pengundhuh paling apik | © 2026 by justsameguy_", footerDisclaimer: "Layanan iki ora ana hubungane karo YouTube. Situs iki ORA nyimpen video.", dynamicDownload: "UNDHUH", dynamicDuration: "Durasi: ", dynamicError: "Kesalahan", dynamicErrorDesc: "Ora bisa entuk data. Priksa link."
    },
    hi: {
        title: "YTReceiver", subtitle: "मुफ्त YouTube वीडियो डाउनलोडर", placeholder: "अपना YouTube वीडियो लिंक पेस्ट करें", downloadBtn: "डाउनलोड", notice: "कॉपीराइट की गई सामग्री डाउनलोड के लिए उपलब्ध नहीं है। ⓘ", loading: "वीडियो प्रोसेस हो रहा है, कृपया प्रतीक्षा करें...", disclaimerBox: "- YTReceiver एक मुफ़्त डाउनलोडर है और किसी भी सशुल्क उत्पाद से संबद्ध नहीं है।", bestTitle: "सर्वश्रेष्ठ YouTube डाउनलोडर", bestDesc: "केवल एक क्लिक से वीडियो (1080p तक) और ऑडियो सहेजें।", fastTitle: "सबसे तेज़", fastDesc: "कुछ ही सेकंड में आप अपने पसंदीदा वीडियो सहेज सकते हैं।", deviceTitle: "Android और iOS के लिए", deviceDesc: "बस लिंक पेस्ट करें, प्रारूप चुनें, और वीडियो सहेजा जाएगा।", faqTitle: "अक्सर पूछे जाने वाले प्रश्न", q1: "1. डाउनलोड कहाँ सहेजे जाते हैं?", a1: "आमतौर पर आपके डिवाइस के डिफ़ॉल्ट 'डाउनलोड' फ़ोल्डर में।", q2: "2. MP3 में कैसे डाउनलोड करें?", a2: "डाउनलोड पृष्ठ पर, MP3 या M4A प्रारूप चुनें।", q3: "3. इसमें कितना समय लगता है?", a3: "फ़ाइल के आकार पर निर्भर करता है। HD वीडियो में कुछ मिनट लग सकते हैं।", footerText: "YTReceiver.com — सर्वश्रेष्ठ डाउनलोडर | © 2026 by justsameguy_", footerDisclaimer: "यह सेवा YouTube से संबद्ध नहीं है। यह साइट कोई वीडियो होस्ट नहीं करती है।", dynamicDownload: "डाउनलोड", dynamicDuration: "अवधि: ", dynamicError: "त्रुटि", dynamicErrorDesc: "डेटा प्राप्त नहीं किया जा सका। लिंक जाचें।"
    },
    ja: {
        title: "YTReceiver", subtitle: "無料のYouTube動画ダウンローダー", placeholder: "YouTubeの動画リンクを貼り付け", downloadBtn: "ダウンロード", notice: "著作権で保護されたコンテンツはダウンロードできません。 ⓘ", loading: "動画を処理しています。お待ちください...", disclaimerBox: "- YTReceiverは無料のダウンローダーであり、有料製品とは関係ありません。", bestTitle: "最高のYouTubeダウンローダー", bestDesc: "ワンクリックで動画（最大1080p）と音声を保存します。", fastTitle: "最速のダウンローダー", fastDesc: "数秒で、お気に入りの動画をデバイスに保存できます。", deviceTitle: "AndroidとiOS用", deviceDesc: "リンクを貼り付け、フォーマットを選択するだけで動画が保存されます。", faqTitle: "よくある質問", q1: "1. ダウンロード先はどこですか？", a1: "通常は、デバイスのデフォルトの「ダウンロード」フォルダです。", q2: "2. MP3をダウンロードするには？", a2: "ダウンロードページで、MP3またはM4Aフォーマットを選択します。", q3: "3. どのくらい時間がかかりますか？", a3: "ファイルサイズによって異なります。HD動画には数分かかる場合があります。", footerText: "YTReceiver.com — 最高のダウンローダー | © 2026 by justsameguy_", footerDisclaimer: "このサービスはYouTubeとは関係ありません。このサイトは動画をホストしていません。", dynamicDownload: "ダウンロード", dynamicDuration: "長さ: ", dynamicError: "エラー", dynamicErrorDesc: "データを取得できませんでした。リンクを確認してください。"
    },
    it: {
        title: "YTReceiver", subtitle: "Downloader di video YouTube gratuito", placeholder: "Incolla il link del video di YouTube", downloadBtn: "Scarica", notice: "Il contenuto protetto da copyright non può essere scaricato. ⓘ", loading: "Elaborazione del video, attendere...", disclaimerBox: "- YTReceiver è un downloader gratuito e non è affiliato con prodotti a pagamento.", bestTitle: "Il miglior downloader di YouTube", bestDesc: "Salva video (fino a 1080p) e audio con un solo clic.", fastTitle: "Il più veloce", fastDesc: "In pochi secondi puoi salvare i tuoi video preferiti sul tuo dispositivo.", deviceTitle: "Per Android e iOS", deviceDesc: "Basta incollare il link, selezionare il formato e il video verrà salvato.", faqTitle: "Domande frequenti", q1: "1. Dove vengono salvati i download?", a1: "Di solito nella cartella 'Download' predefinita del tuo dispositivo.", q2: "2. Come scaricare in MP3?", a2: "Nella pagina di download, seleziona il formato MP3 o M4A.", q3: "3. Quanto tempo ci vuole?", a3: "Dipende dalle dimensioni del file. Per i video HD possono volerci alcuni minuti.", footerText: "YTReceiver.com — il miglior downloader | © 2026 by justsameguy_", footerDisclaimer: "Questo servizio non è affiliato a YouTube. Questo sito NON ospita video.", dynamicDownload: "SCARICA", dynamicDuration: "Durata: ", dynamicError: "Errore", dynamicErrorDesc: "Impossibile recuperare i dati. Controlla il link."
    },
    ko: {
        title: "YTReceiver", subtitle: "무료 YouTube 동영상 다운로더", placeholder: "YouTube 동영상 링크를 붙여넣으세요", downloadBtn: "다운로드", notice: "저작권이 있는 콘텐츠는 다운로드할 수 없습니다. ⓘ", loading: "동영상을 처리 중입니다. 잠시만 기다려주세요...", disclaimerBox: "- YTReceiver는 무료 다운로더이며 유료 제품과 관련이 없습니다.", bestTitle: "최고의 YouTube 다운로더", bestDesc: "클릭 한 번으로 동영상(최대 1080p) 및 오디오를 저장하세요.", fastTitle: "가장 빠른 다운로더", fastDesc: "몇 초 만에 좋아하는 동영상을 기기에 저장할 수 있습니다.", deviceTitle: "Android 및 iOS용", deviceDesc: "링크를 붙여넣고 형식을 선택하기만 하면 동영상이 저장됩니다.", faqTitle: "자주 묻는 질문", q1: "1. 다운로드는 어디에 저장되나요?", a1: "일반적으로 기기의 기본 '다운로드' 폴더에 저장됩니다.", q2: "2. MP3를 다운로드하는 방법은?", a2: "다운로드 페이지에서 MP3 또는 M4A 형식을 선택하세요.", q3: "3. 시간이 얼마나 걸리나요?", a3: "파일 크기에 따라 다릅니다. HD 동영상은 몇 분 정도 걸릴 수 있습니다.", footerText: "YTReceiver.com — 최고의 다운로더 | © 2026 by justsameguy_", footerDisclaimer: "이 서비스는 YouTube와 관련이 없습니다. 이 사이트는 동영상을 호스팅하지 않습니다.", dynamicDownload: "다운로드", dynamicDuration: "시간: ", dynamicError: "오류", dynamicErrorDesc: "데이터를 가져올 수 없습니다. 링크를 확인하세요."
    },
    hu: {
        title: "YTReceiver", subtitle: "Ingyenes YouTube videó letöltő", placeholder: "Illessze be a YouTube videó linkjét", downloadBtn: "Letöltés", notice: "A szerzői joggal védett tartalom nem tölthető le. ⓘ", loading: "Videó feldolgozása, kérem várjon...", disclaimerBox: "- Az YTReceiver egy ingyenes letöltő, és nem áll kapcsolatban fizetős termékekkel.", bestTitle: "A legjobb YouTube letöltő", bestDesc: "Mentsen videókat (akár 1080p) és hangot egyetlen kattintással.", fastTitle: "A leggyorsabb", fastDesc: "Néhány másodperc alatt elmentheti kedvenc videóit készülékére.", deviceTitle: "Android és iOS rendszerekhez", deviceDesc: "Csak illessze be a linket, válassza ki a formátumot, és a videó mentésre kerül.", faqTitle: "Gyakran Ismételt Kérdések", q1: "1. Hová menti a letöltéseket?", a1: "Általában az eszköz alapértelmezett 'Letöltések' mappájába.", q2: "2. Hogyan tölthető le MP3-ban?", a2: "A letöltési oldalon válassza az MP3 vagy M4A formátumot.", q3: "3. Mennyi ideig tart?", a3: "A fájl méretétől függ. HD videók esetén néhány percet vehet igénybe.", footerText: "YTReceiver.com — a legjobb letöltő | © 2026 by justsameguy_", footerDisclaimer: "Ez a szolgáltatás nem áll kapcsolatban a YouTube-bal. Ez az oldal NEM tárol videókat.", dynamicDownload: "LETÖLTÉS", dynamicDuration: "Időtartam: ", dynamicError: "Hiba", dynamicErrorDesc: "Nem sikerült lekérni az adatokat. Ellenőrizze a linket."
    },
    ro: {
        title: "YTReceiver", subtitle: "Descărcător gratuit de videoclipuri YouTube", placeholder: "Lipiți linkul videoclipului YouTube", downloadBtn: "Descărcare", notice: "Conținutul protejat de drepturi de autor nu poate fi descărcat. ⓘ", loading: "Procesare videoclip, vă rugăm așteptați...", disclaimerBox: "- YTReceiver este un descărcător gratuit și nu este afiliat cu produse plătite.", bestTitle: "Cel mai bun descărcător", bestDesc: "Salvați videoclipuri (până la 1080p) și audio cu un singur clic.", fastTitle: "Cel mai rapid", fastDesc: "În doar câteva secunde puteți salva videoclipurile preferate.", deviceTitle: "Pentru Android și iOS", deviceDesc: "Lipiți linkul, selectați formatul și videoclipul va fi salvat.", faqTitle: "Întrebări Frecvente", q1: "1. Unde sunt salvate descărcările?", a1: "De obicei în folderul 'Descărcări' implicit al dispozitivului dvs.", q2: "2. Cum se descarcă în MP3?", a2: "Pe pagina de descărcare, selectați formatul MP3 sau M4A.", q3: "3. Cât durează?", a3: "Depinde de dimensiunea fișierului. Pentru videoclipuri HD poate dura câteva minute.", footerText: "YTReceiver.com — cel mai bun descărcător | © 2026 by justsameguy_", footerDisclaimer: "Acest serviciu nu este afiliat cu YouTube. Acest site NU găzduiește videoclipuri.", dynamicDownload: "DESCĂRCARE", dynamicDuration: "Durată: ", dynamicError: "Eroare", dynamicErrorDesc: "Nu s-au putut prelua datele. Verificați linkul."
    },
    ms: {
        title: "YTReceiver", subtitle: "Pemuat Turun Video YouTube Percuma", placeholder: "Tampal pautan video YouTube anda", downloadBtn: "Muat Turun", notice: "Kandungan berhak cipta tidak tersedia untuk dimuat turun. ⓘ", loading: "Memproses video, sila tunggu...", disclaimerBox: "- YTReceiver ialah pemuat turun percuma dan tidak bergabung dengan produk berbayar.", bestTitle: "Pemuat Turun Terbaik", bestDesc: "Simpan video (sehingga 1080p) dan audio dengan hanya satu klik.", fastTitle: "Paling Pantas", fastDesc: "Dalam beberapa saat, anda boleh menyimpan video kegemaran anda.", deviceTitle: "Untuk Android dan iOS", deviceDesc: "Hanya tampal pautan, pilih format, dan video akan disimpan.", faqTitle: "Soalan Lazim", q1: "1. Di mana muat turun disimpan?", a1: "Biasanya dalam folder 'Muat Turun' lalai pada peranti anda.", q2: "2. Bagaimana untuk memuat turun dalam MP3?", a2: "Pada halaman muat turun, pilih format MP3 atau M4A.", q3: "3. Berapa lamakah masa yang diambil?", a3: "Bergantung pada saiz fail. Untuk video HD, ia mungkin mengambil masa beberapa minit.", footerText: "YTReceiver.com — pemuat turun terbaik | © 2026 by justsameguy_", footerDisclaimer: "Perkhidmatan ini tidak bergabung dengan YouTube. Tapak ini TIDAK mengehoskan video.", dynamicDownload: "MUAT TURUN", dynamicDuration: "Tempoh: ", dynamicError: "Ralat", dynamicErrorDesc: "Tidak dapat mengambil data. Semak pautan."
    },
    el: {
        title: "YTReceiver", subtitle: "Δωρεάν πρόγραμμα λήψης βίντεο YouTube", placeholder: "Επικολλήστε τον σύνδεσμο βίντεο YouTube", downloadBtn: "Λήψη", notice: "Περιεχόμενο που προστατεύεται από πνευματικά δικαιώματα δεν είναι διαθέσιμο για λήψη. ⓘ", loading: "Επεξεργασία βίντεο, παρακαλώ περιμένετε...", disclaimerBox: "- Το YTReceiver είναι δωρεάν και δεν συνδέεται με προϊόντα επί πληρωμή.", bestTitle: "Το καλύτερο πρόγραμμα λήψης", bestDesc: "Αποθηκεύστε βίντεο (έως 1080p) και ήχο με ένα μόνο κλικ.", fastTitle: "Το πιο γρήγορο", fastDesc: "Σε λίγα δευτερόλεπτα μπορείτε να αποθηκεύσετε τα αγαπημένα σας βίντεο.", deviceTitle: "Για Android και iOS", deviceDesc: "Επικολλήστε τον σύνδεσμο, επιλέξτε μορφή και το βίντεο θα αποθηκευτεί.", faqTitle: "Συχνές Ερωτήσεις", q1: "1. Πού αποθηκεύονται οι λήψεις;", a1: "Συνήθως στον προεπιλεγμένο φάκελο 'Λήψεις' της συσκευής σας.", q2: "2. Πώς να κατεβάσετε σε MP3;", a2: "Στη σελίδα λήψης, επιλέξτε μορφή MP3 ή M4A.", q3: "3. Πόσος χρόνος χρειάζεται;", a3: "Εξαρτάται από το μέγεθος αρχείου. Για βίντεο HD ίσως χρειαστούν μερικά λεπτά.", footerText: "YTReceiver.com — το καλύτερο πρόγραμμα λήψης | © 2026 by justsameguy_", footerDisclaimer: "Αυτή η υπηρεσία δεν συνδέεται με το YouTube. Αυτός ο ιστότοπος ΔΕΝ φιλοξενεί βίντεο.", dynamicDownload: "ΛΗΨΗ", dynamicDuration: "Διάρκεια: ", dynamicError: "Σφάλμα", dynamicErrorDesc: "Δεν ήταν δυνατή η λήψη δεδομένων. Ελέγξτε τον σύνδεσμο."
    }
};

// Функция смены языка
let currentLang = localStorage.getItem('site_lang') || 'en';

function applyLanguage(lang) {
    // Переводим статические тексты
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    // Переводим плейсхолдер
    const urlInput = document.getElementById('video-url');
    if (urlInput) {
        urlInput.placeholder = translations[lang].placeholder;
    }
    // Сохраняем выбор в память браузера
    localStorage.setItem('site_lang', lang);
    document.documentElement.lang = lang;
    currentLang = lang;
}

// --- ЛОГИКА КАСТОМНОГО МЕНЮ ЯЗЫКОВ ---
const langBtn = document.getElementById('lang-menu-btn');
const langDropdown = document.getElementById('lang-dropdown');
const langOptions = document.querySelectorAll('.lang-option');

if (langBtn && langDropdown) {
    // Открытие/закрытие по клику на кнопку (глобус)
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('hidden');
    });

    // Закрытие меню, если кликнуть в любое другое место на сайте
    document.addEventListener('click', (e) => {
        if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
            langDropdown.classList.add('hidden');
        }
    });

    // Обработка выбора языка
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedLang = option.getAttribute('data-value');
            
            // Применяем язык
            applyLanguage(selectedLang);
            
            // Убираем подсветку у всех и красим только выбранный
            langOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            
            // Прячем меню
            langDropdown.classList.add('hidden');
        });
    });

    // Устанавливаем правильную подсветку при загрузке страницы
    const initOption = document.querySelector(`.lang-option[data-value="${currentLang}"]`);
    if (initOption) {
        initOption.classList.add('active');
    }
}

// Применяем язык при загрузке страницы
applyLanguage(currentLang);


// --- ОСНОВНАЯ ЛОГИКА ФОРМЫ (С умным кликандером) ---
document.getElementById('download-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const urlInput = document.getElementById('video-url').value;
    const loadingDiv = document.getElementById('loading');
    const resultDiv = document.getElementById('result');
    const submitBtn = document.getElementById('submit-btn');

    // Кликандер (Direct Link)
    const popunderUrl = 'https://google.com'; // В будущем замени на ссылку от Adsterra
    const lastAdClick = localStorage.getItem('lastAdClick');
    const now = new Date().getTime();
    const oneDay = 24 * 60 * 60 * 1000;

    if (!lastAdClick || (now - lastAdClick > oneDay)) {
        window.open(popunderUrl, '_blank');
        localStorage.setItem('lastAdClick', now);
    }

    loadingDiv.classList.remove('hidden');
    resultDiv.classList.add('hidden');
    submitBtn.disabled = true;

    try {
        const response = await fetch(`/api/get-video-info?url=${encodeURIComponent(urlInput)}`);
        
        if (!response.ok) {
            throw new Error('Server error');
        }

        const data = await response.json();

        // Рисуем кнопки с использованием текущего языка
        let buttonsHtml = data.download_links.map(link => `
            <a href="${link.url}" class="download-btn" target="_blank" rel="noopener noreferrer">
                ${translations[currentLang].dynamicDownload} ${link.format.toUpperCase()} — ${link.quality}
            </a>
        `).join('');

        resultDiv.innerHTML = `
            <h3>${data.video_details.title}</h3>
            <p>${translations[currentLang].dynamicDuration}${data.video_details.duration}</p>
            <div>
                ${buttonsHtml}
            </div>
        `;
        resultDiv.classList.remove('hidden');

    } catch (error) {
        resultDiv.innerHTML = `
            <h3 style="color: #d90000;">${translations[currentLang].dynamicError}</h3>
            <p>${translations[currentLang].dynamicErrorDesc}</p>
        `;
        resultDiv.classList.remove('hidden');
    } finally {
        loadingDiv.classList.add('hidden');
        submitBtn.disabled = false;
    }

});
