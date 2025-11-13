self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open("spvahan-cache").then((cache) => {
      return cache.addAll([
        "/vehicle-app/",
        "/vehicle-app/index.html"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return resp || fetch(event.request);
    })
  );
});
