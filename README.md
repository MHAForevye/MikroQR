# Mikro QR & Kod — Desen ve Modül Stüdyosu

GitHub Pages üzerinde statik olarak çalışabilecek prototip.

## Çalıştırma
- `index.html` dosyasını bir web sunucusunda açın veya GitHub Pages ile yayınlayın.
- QR kod üretimi, `qrcode-generator` kütüphanesini CDN üzerinden yükler; ilk kullanımda internet gerekir.

## Özellikler
- 50+ modül şekli seçimi
- Payload ile QR üretimi ve ECC seçenekleri
- Modül ölçüsü, doluluk, gap, yumuşaklık, mikro varyasyon kontrolleri
- Finder formu ve iç form kontrolleri
- Renk seçimi ve palet swatch'ları
- Gradient seçeneği
- CTA çerçeveleri
- PNG ve temel SVG export
- Scan-test risk simülasyonu (gerçek tarama garantisi değildir)
- Cihaz üzerinde yerel proje kaydı
- Koyu tema (koyu QR + koyu önizleme), tek tıkla Açık/Koyu QR geçişi
- Responsive arayüz

## Notlar / sınırlamalar
Bu sürüm, master talimatın tasarım stüdyosu çekirdeğini çalışan prototip olarak uygular. Scan test bölümü gerçek decoder/kamera doğrulaması değil, heuristik uyarıdır. SVG export modül/finder geometrisini temel kareler olarak üretir; ek stil ve çerçeve seçeneklerinin tamamı SVG'ye yansıtılmaz. QR kütüphanesi CDN bağlantısına ihtiyaç duyar.

- Arka plan görseli yükleyip QR'ı görselin içine gömme (örnek arka planlar dahil)
