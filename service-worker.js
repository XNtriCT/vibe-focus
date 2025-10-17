
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('vibe-focus-v1').then((cache) => {
      return cache.addAll(['./', './index.html', './app.html', './vibe-focus.js', './style.css']);
    })
  );
});
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((resp) => resp || fetch(e.request)));
});
