const V='oborot-v1',F=['./','index.html','manifest.json','icons/icon-192.png','icons/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x))))));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(n=>{if(new URL(e.request.url).origin===location.origin){const cl=n.clone();caches.open(V).then(c=>c.put(e.request,cl))}return n}).catch(()=>caches.match('index.html'))))});
