
self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service worker activado');
});

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request).catch(() => new Response('Offline')));
});
