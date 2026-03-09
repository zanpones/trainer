const CACHE = "treino-app"

const urls = [
"login.html",
"menu.html",
"style.css"
]

self.addEventListener("install", e => {

e.waitUntil(

caches.open(CACHE)
.then(cache => cache.addAll(urls))

)

})

self.addEventListener("fetch", e => {

e.respondWith(

caches.match(e.request)
.then(response => response || fetch(e.request))

)

})
