const CACHE_NAME = 'ho-pos-cache-v2';
const ASSETS_TO_CACHE = [
  './pos.html',
  './manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // For Google Apps Script API calls, return a properly formatted JSON offline fallback
  if (e.request.url.includes('script.google.com') || e.request.url.includes('script.googleusercontent.com')) {
    // Only intercept GET requests. Let the browser handle POST requests natively to prevent Google 302 Redirect CORS bugs!
    if (e.request.method === 'GET') {
      e.respondWith(
        fetch(e.request).catch(() => new Response(JSON.stringify({ success: false, message: "Offline Mode" }), { headers: { 'Content-Type': 'application/json' } }))
      );
    }
    return;
  }

  // For app assets (pos.html, etc.), try Network first, then fallback to Cache
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
