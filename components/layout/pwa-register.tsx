"use client";

import { useEffect } from "react";

/**
 * Registers the root service worker so Chromium-based browsers can treat the site as an installable PWA.
 * iOS Safari uses Add to Home Screen from the manifest + apple-touch-icon without relying on this.
 */
export function PwaRegister() {
	useEffect(() => {
		if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
			return;
		}
		const register = () => {
			navigator.serviceWorker.register("/sw.js").catch(() => {
				/* optional — registration fails on unsupported hosts */
			});
		};
		if (document.readyState === "complete") {
			register();
		} else {
			window.addEventListener("load", register, { once: true });
		}
	}, []);

	return null;
}
