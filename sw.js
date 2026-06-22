// Kana Master - Service Worker
// Cachet het "app-shell" (HTML, data.js, iconen) zodat de quiz-onderdelen ook offline werken.
// Cloud-functies (Supabase, leaderboard, marktplaats) blijven gewoon het netwerk nodig hebben.

const CACHE_NAAM = 'kana-master-v1';
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

    // Alleen verzoeken binnen dit domein cachen. Supabase, Google Fonts en de
    // unpkg-CDN (cross-origin) altijd gewoon via het netwerk laten gaan.
    if (url.origin !== self.location.origin || event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request).then((cached) => {
            const netwerkFetch = fetch(event.request)
                .then((response) => {
                    const kopie = response.clone();
                    caches.open(CACHE_NAAM).then((cache) => cache.put(event.request, kopie));
                    return response;
                })
                .catch(() => cached); // offline: val terug op de cache

            // Cache-first voor snelheid en offline-gebruik, met verversing op de achtergrond.
            return cached || netwerkFetch;
        })
    );
});
