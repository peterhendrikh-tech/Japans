// Kana Master - Service Worker
// Strategie: NETWORK-FIRST voor het app-shell. Je krijgt dus altijd de nieuwste
// versie zodra er internet is; de cache is puur een offline-vangnet.
// Cloud-functies (Supabase, leaderboard, marktplaats) blijven het netwerk nodig hebben.

const CACHE_NAAM = 'kana-master-v3'; // ← Bump dit nummer bij elke release!
const APP_SHELL = [
    './',
    './index.html',
    './data.js',
    './manifest.json',
    './icon-192.png',
    './icon-512.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAAM).then((cache) => cache.addAll(APP_SHELL)).catch((e) => console.warn('SW install: kon niet alles cachen', e))
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAAM).map((k) => caches.delete(k))))
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Alleen verzoeken binnen dit domein afhandelen. Supabase, Google Fonts en de
    // unpkg-CDN (cross-origin) altijd gewoon via het netwerk laten gaan.
    if (url.origin !== self.location.origin || event.request.method !== 'GET') return;

    // NETWORK-FIRST: probeer altijd eerst het netwerk (verse versie),
    // schrijf het resultaat naar de cache, en val alleen offline terug op de cache.
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                if (response && response.ok) {
                    const kopie = response.clone();
                    caches.open(CACHE_NAAM).then((cache) => cache.put(event.request, kopie));
                }
                return response;
            })
            .catch(() => caches.match(event.request).then((cached) => cached || caches.match('./index.html')))
    );
});