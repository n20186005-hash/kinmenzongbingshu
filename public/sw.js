/* 金門總兵署遊客指南 — Service Worker（PWA 離線支援） */
const VERSION = 'v1.0.0';
const STATIC_CACHE = `kzbs-static-${VERSION}`;
const PAGE_CACHE = `kzbs-pages-${VERSION}`;

// 核心頁面（建置後的靜態路徑）
const CORE_PAGES = [
  '/',
  '/visit/',
  '/map/',
  '/houpu-night-walk/',
  '/nearby/',
  '/transport/',
  '/history/',
  '/offline.html',
];

const CORE_ASSETS = [
  '/manifest.webmanifest',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/icon.svg',
  '/icons/apple-touch-icon.png',
];

// 逐一加入，避免單一檔案失敗導致整批預快取失敗
const precache = async (cacheName, urls) => {
  const cache = await caches.open(cacheName);
  await Promise.allSettled(urls.map((url) => cache.add(new Request(url, { cache: 'reload' }))));
};

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      await Promise.all([precache(STATIC_CACHE, CORE_ASSETS), precache(PAGE_CACHE, CORE_PAGES)]);
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.filter((key) => key !== STATIC_CACHE && key !== PAGE_CACHE).map((key) => caches.delete(key)),
      );
      await self.clients.claim();
    })(),
  );
});

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});

const isSameOrigin = (url) => url.origin === self.location.origin;
const isAsset = (url) =>
  /\.(?:css|js|mjs|png|jpe?g|webp|avif|gif|svg|ico|woff2?|ttf|otf|json|webmanifest)$/i.test(url.pathname);

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (!isSameOrigin(url)) return; // 外部資源（Google Maps 等）交由瀏覽器直接處理

  // 導航請求：network-first，離線時回退快取頁面
  if (request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(request);
          const cache = await caches.open(PAGE_CACHE);
          cache.put(request, response.clone());
          return response;
        } catch (error) {
          const cache = await caches.open(PAGE_CACHE);
          const cached = (await cache.match(request)) || (await cache.match(url.pathname));
          if (cached) return cached;
          const offline = await caches.match('/offline.html');
          if (offline) return offline;
          throw error;
        }
      })(),
    );
    return;
  }

  // 靜態資源：stale-while-revalidate
  if (isAsset(url)) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(STATIC_CACHE);
        const cached = await cache.match(request);
        const network = fetch(request)
          .then((response) => {
            if (response && response.status === 200) cache.put(request, response.clone());
            return response;
          })
          .catch(() => cached);
        return cached || network;
      })(),
    );
  }
});
