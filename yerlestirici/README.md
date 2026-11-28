# MikroQR – Görsel Yerleştirici

Kurulum yok, internet gerekmez. Ana uygulamanın (`../index.html`) içinde açılır; `yerlestirici/index.html` tek başına da çalışır.

1. Görsel seç (ya da sürükle-bırak, Ctrl+V).
2. QR'ın yerini sahnede seç, sürükle, köşelerden boyutlandır.
3. **Kaydet**'e bas.

## Özellikler
- QR yalnızca seçtiğin bölgeyi kaplar; görselin geri kalanı olduğu gibi kalır
- Taşıma, dört köşeden boyutlandırma, ok tuşları ve 9 noktalı hızlı konum
- QR kaynağı: Stüdyo tasarımı (ana uygulamadan gelir) ya da Basit QR
- Basit QR: nokta stili, göz stili, renkler, saydam zemin, kenar boşluğu, köşe yuvarlaklığı
- PNG / JPEG / WebP, orijinal / yarım / 2 kat çözünürlük
- Tarama testi (Chrome ve Edge'de yerleşik okuyucuyla)
- Ayarlar tarayıcıda hatırlanır

## Dosyalar
- `index.html` uygulamanın kendisi
- `../lib/` QR üretim kütüphanesi (qrcode-generator 1.4.4, MIT)
