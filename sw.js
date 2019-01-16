self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('saints-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/bars.html',
        '/main.html',
        '/manifest.json',
        '/news.html',
        '/next.html',
        '/previous.html',
        '/sw.js',
        '/json/bars.json',
        '/json/nextgames.json',
        '/json/previousgames.json',
        '/assets/arrow-back.png',
        '/assets/arrow-forward.png',
        '/assets/bar.png',
        '/assets/home.png',
        '/assets/main.css',
        '/assets/news.png',
        '/assets/rams.png',
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});