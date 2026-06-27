// Kana Master - Service Worker
// Cachet het "app-shell" (HTML, data.js, iconen) als OFFLINE-VANGNET — niet als
// snelheidstruc. Strategie: NETWERK-EERST. Zolang je online bent, krijg je altijd
// de nieuwste versie van de server; de cache wordt alleen gebruikt als het netwerk
// echt niet bereikbaar is. (V1 deed dit andersom — "cache-eerst" — waardoor
// updates op de server onzichtbaar bleven totdat iemand de cache handmatig wiste.
// Dat was de oorzaak van het "oude bugs komen terug"-probleem.)

const CACHE_NAAM = 'kana-master-v2'; // <- elke keer dat dit bestand verandert, ruimt de browser de oude cache (v1) automatisch op.
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
    self.skipWaiting(); // activeer de nieuwe versie meteen, wacht niet tot alle tabbladen gesloten zijn
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAAM).map((k) => caches.delete(k))))
    );
    self.clients.claim(); // neem direct de controle over openstaande tabbladen over
});

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Alleen verzoeken binnen dit domein afhandelen. Supabase, Google Fonts en de
    // unpkg-CDN (cross-origin) altijd gewoon rechtstreeks via het netwerk laten gaan.
    if (url.origin !== self.location.origin || event.request.method !== 'GET') return;

    event.respondWith(
        fetch(event.request)
            .then((response) => {
                // Vers van het netwerk: dit IS de waarheid. Cache bijwerken voor de volgende
                // keer dat het netwerk een keer niet beschikbaar is, en direct teruggeven.
                const kopie = response.clone();
                caches.open(CACHE_NAAM).then((cache) => cache.put(event.request, kopie));
                return response;
            })
            .catch(() => caches.match(event.request)) // alleen bij ECHTE offline-situaties terugvallen op de cache
    );
});
