import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants/landing";

const THEME = "#121010";

export default function manifest(): MetadataRoute.Manifest {
	return {
		id: "/",
		name: `${SITE.name} — Handmade ceramics`,
		short_name: SITE.name,
		description: SITE.description,
		start_url: "/",
		scope: "/",
		display: "standalone",
		orientation: "portrait-primary",
		background_color: THEME,
		theme_color: THEME,
		categories: ["lifestyle", "design"],
		icons: [
			{
				src: "/icons/icon-192.png",
				sizes: "192x192",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "/icons/icon-512.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "/icons/icon-512.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "maskable",
			},
		],
	};
}
