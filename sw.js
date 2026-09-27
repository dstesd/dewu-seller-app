/* 自毁型 Service Worker（v39 起 App 永久移除离线缓存机制）：
   旧版本残留的 SW 在 iOS 上会缓存损坏导致 App 卡死在登录页。
   浏览器检查 SW 更新时下载本文件 → 激活后删除全部缓存 → 注销自己 → 刷新所有已打开页面。
   之后 App 变为纯网页加载，永远不再受 SW 缓存问题影响。 */
self.addEventListener('install', function () {
  self.skipWaiting();
});
self.addEventListener('activate', function (event) {
  event.waitUntil(
    (async function () {
      try {
        var keys = await caches.keys();
        await Promise.all(
          keys.map(function (k) {
            return caches.delete(k);
          })
        );
      } catch (e) {}
      try {
        await self.registration.unregister();
      } catch (e) {}
      try {
        var clientList = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
        for (var i = 0; i < clientList.length; i++) {
          try {
            clientList[i].navigate(clientList[i].url);
          } catch (e) {}
        }
      } catch (e) {}
    })()
  );
});
// 故意不监听 fetch 事件：所有请求直接走网络，不做任何缓存拦截
