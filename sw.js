// MikroQR servis çalışanı: çevrimdışı kullanım için. Sürümü değiştirince önbellek yenilenir.
const VERSION = 'mikroqr-v3';
const ASSETS = [
  './', './index.html', './yerlestirici/index.html',
  './lib/qrcode.js', './lib/qrcode_UTF8.js',
  './manifest.webmanifest', './icons/icon.svg', './icons/icon-192.png', './icons/icon-512.png'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  // Önce ağ, olmazsa önbellek: güncellemeler hemen görünür, çevrimdışı da çalışır.
  e.respondWith(
    fetch(req).then(res => {
      const copy = res.clone();
      caches.open(VERSION).then(c => c.put(req, copy)).catch(() => {});
      return res;
    }).catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
  );
});
