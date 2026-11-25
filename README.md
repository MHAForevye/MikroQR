# MikroQR

MikroQR, QR kod tasarımını ve mevcut görsellere QR yerleştirmeyi tek bir arayüzde birleştiren, tarayıcıda çalışan yerel bir araçtır.

## Başlatma

1. ZIP dosyasını bir klasöre çıkarın.
2. `index.html` dosyasını güncel bir tarayıcıda açın.
3. Üst bölümden **QR Stüdyosu** veya **Görsel Yerleştirici** aracına geçin.

Kurulum veya sunucu gerekmez. QR üretim motoru `lib/` altında yerel olarak paketlenmiştir; temel kullanım için CDN/internet bağlantısı gerekmez.

## Araçlar

### QR Stüdyosu
- QR içeriği ve hata düzeltme seviyesi
- Çok sayıda modül biçimi ve hazır tasarım dili
- Finder dış/iç form ayarları
- Renk paleti ve gradient seçenekleri
- Modül boyutu, kalınlığı, aralığı, köşe yumuşaklığı ve varyasyon
- CTA çerçevesi ve quiet-zone ayarı
- Arka plan görseli yükleme ve QR desenini görsele gömme
- PNG ve temel SVG dışa aktarma
- Yerel proje kaydı, geri/ileri ve tarama riski simülasyonu

### Görsel Yerleştirici
- Görsele QR ekleme; görselin geri kalanı korunur
- QR'ı fareyle/dokunarak taşıma ve köşeden boyutlandırma
- Ok tuşlarıyla ince konum ayarı ve 9 noktalı hızlı konum
- QR içeriği, hata düzeltme, modül/finder stili, renk ve saydam zemin ayarları
- Quiet-zone ve köşe yuvarlaklığı
- PNG, JPEG ve WebP; orijinal, yarım ve 2x çözünürlük seçenekleri
- Görsel seçme, sürükle-bırak ve panodan yapıştırma
- Tarayıcı destekliyorsa yerleşik QR okuyucuyla gerçek tarama kontrolü

## Proje yapısı

```text
MikroQR/
├── index.html                 # Birleşik ana arayüz ve QR Stüdyosu
├── lib/
│   ├── qrcode.js              # Yerel QR üretim motoru
│   └── qrcode_UTF8.js         # UTF-8 desteği
├── yerlestirici/
│   └── index.html             # Görsel Yerleştirici aracı
└── README.md
```

## Notlar

- Her iki araç da tarayıcı içinde çalışır; yüklenen görseller bir sunucuya gönderilmez.
- QR Stüdyosu'ndaki **Görsel tarama simülasyonu** sezgisel bir risk kontrolüdür, gerçek kamera/decoder testi değildir.
- Görsel Yerleştirici'deki gerçek tarama testi `BarcodeDetector` API'sine bağlıdır; bu API desteklenmiyorsa telefon kamerasıyla ayrıca test edin.
- Çok stilize QR tasarımlarının taranabilirliği garanti edilmez. Üretim öncesinde farklı telefonlarla test önerilir.
- QR üretim kütüphanesi qrcode-generator 1.4.4'tür ve MIT lisanslıdır; lisans bildirimi kaynak dosyanın başında korunmuştur.
