/**
 * Minimal service worker — satisfies Chrome “installable PWA” criteria (fetch handler).
 * Does not cache offline shells; network-first for all requests.
 */
self.addEventListener("install", (event) => {
	event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
	event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
	event.respondWith(fetch(event.request));
});
