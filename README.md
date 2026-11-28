# MikroQR

MikroQR, QR kodlarını tasarlamak ve mevcut görsellerin üzerine yerleştirmek için tarayıcıda çalışan, kurulum gerektirmeyen bir araçtır. Hiçbir veri sunucuya gönderilmez.

## Kullanım

**Yerelde:** ZIP'i çıkarıp `index.html` dosyasını güncel bir tarayıcıda açın.

**GitHub Pages ile yayınlamak (önerilen):**
1. ZIP'i çıkarın. **Klasörün içindeki** dosyaları (`index.html`, `lib`, `icons`, `yerlestirici`, `sw.js`, `manifest.webmanifest`, `README.md`) deponuzun ana dizinine yükleyin.
2. Depoda **Settings → Pages** bölümüne gidin.
3. *Source* olarak **Deploy from a branch**, branch olarak **main** ve klasör olarak **/ (root)** seçip kaydedin.
4. Bir dakika içinde `https://<kullanici>.github.io/<depo>/` adresinde açılır.

Yayınlandıktan sonra telefonda ve bilgisayarda tarayıcının **Yükle / Ana ekrana ekle** seçeneğiyle uygulama gibi kurulabilir; internet olmadan da çalışır.

## Araçlar

### QR Stüdyosu
- İçerik türleri: metin/bağlantı, Wi-Fi, e-posta, telefon
- 21 modül biçimi (yan yana gelen şerit, kapsül ve akışkan biçimler birbirine bağlanır)
- 14 hazır şablon, 12 renk çifti, renk geçişi (yatay, dikey, çapraz, radyal)
- Göz (finder) dış çerçeve ve iç nokta stilleri, ayrı göz rengi
- Çağrı etiketi çerçevesi (SCAN ME, TARA, MENÜ, WI-FI, QR KART veya özel metin)
- Görselin içine QR gömme ve örnek arka planlar
- **Vektör SVG** ve PNG (512 – 4096 px) dışa aktarma, panoya kopyalama, paylaşma
- Okunabilirlik kontrolü; tarayıcı destekliyorsa gerçek tarama testi
- Geri al / yinele, çoklu proje kaydı, son oturumu otomatik hatırlama
- Açık / koyu tema

### Görsel Yerleştirici
- QR'ı seçtiğin bölgeye yerleştirir, görselin geri kalanı değişmez
- Sürükleyerek taşıma, dört köşeden boyutlandırma, ok tuşları, 9 noktalı hızlı konum
- Stüdyoda tasarladığın QR'ı doğrudan kullanır ya da basit bir QR üretir
- PNG, JPEG, WebP; orijinal, yarım ve 2 kat çözünürlük
- Görsel seçme, sürükle-bırak, Ctrl+V ile yapıştırma

## Klavye kısayolları
`Ctrl/Cmd + Z` geri al · `Ctrl/Cmd + Shift + Z` yinele · `Ctrl/Cmd + S` tasarımı kaydet

## Proje yapısı

```text
MikroQR/
├── index.html                 # Ana uygulama: QR Stüdyosu ve Yerleştirici kabuğu
├── yerlestirici/
│   └── index.html             # Görsel Yerleştirici
├── lib/
│   ├── qrcode.js              # Yerel QR üretim motoru
│   └── qrcode_UTF8.js         # UTF-8 desteği
├── icons/                     # Uygulama ikonları
├── manifest.webmanifest       # Yüklenebilir uygulama tanımı
├── sw.js                      # Çevrimdışı çalışma
└── README.md
```

## Notlar
- Çok stilize tasarımların taranabilirliği garanti edilmez. Halka, Çerçeveli, Yıldız, Artı, Çapraz ve Mozaik biçimleri ile Daire göz stili arayüzde uyarı verir. Basmadan önce farklı telefonlarla test edin.
- Ters renkli (açık kod, koyu zemin) QR'ları bazı eski okuyucular okuyamaz.
- Tarama testi `BarcodeDetector` API'sine bağlıdır (Chrome, Edge). Desteklenmiyorsa telefon kamerasıyla deneyin.
- Güncelleme yaptığınızda `sw.js` içindeki `VERSION` değerini artırın; böylece kurulu uygulamalar yeni sürümü alır.
- QR üretim kütüphanesi qrcode-generator 1.4.4'tür (MIT); lisans bildirimi kaynak dosyada korunmuştur. "QR Code", DENSO WAVE INCORPORATED'ın tescilli markasıdır.
