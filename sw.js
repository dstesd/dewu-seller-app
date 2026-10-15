/* 自毁型 Service Worker（v39 起 App 永久移除离线缓存机制） */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (event) {
  event.waitUntil((async function () {
    try { var keys = await caches.keys(); await Promise.all(keys.map(function (k) { return caches.delete(k); })); } catch (e) {}
    try { await self.registration.unregister(); } catch (e) {}
    try { var cl = await self.clients.matchAll({ type: 'window', includeUncontrolled: true }); for (var i = 0; i < cl.length; i++) { try { cl[i].navigate(cl[i].url); } catch (e) {} } } catch (e) {}
  })());
});