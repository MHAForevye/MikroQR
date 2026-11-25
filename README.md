# QR Görsel Yerleştirici (Gelişmiş)

Kurulum yok, internet gerekmez.

1. Bu klasörü zipten çıkar.
2. `index.html` dosyasını tarayıcıda aç (çift tıkla).
3. Görsel seç, QR'ın yerini sahnede seç, sürükleyip boyutlandır, "Kaydet"e bas.

## Özellikler
- QR görselin tamamını değil, seçtiğin bölgeyi kaplar; çevresi olduğu gibi kalır
- Dokunarak yerleştirme, sürükleme, köşeden boyutlandırma, ok tuşlarıyla ince ayar
- 9 noktalı hızlı konum (köşeler, kenarlar, orta)
- Nokta stili (kare, yuvarlak köşe, nokta), köşe gözü stili, kutu köşe yuvarlaklığı
- Renkler, saydam zemin, kenar boşluğu, hata düzeltme seviyesi
- PNG / JPEG / WebP, orijinal / yarım / 2 kat çözünürlük
- Taranabilirlik testi (Chrome ve Edge'de yerleşik QR okuyucuyla)
- Ayarlar tarayıcıda hatırlanır; görsel yükleme sürükle-bırak ve yapıştırma (Ctrl+V) destekler

## Dosyalar
- `index.html` uygulamanın kendisi
- `lib/` QR üretim kütüphanesi (qrcode-generator 1.4.4, MIT)
