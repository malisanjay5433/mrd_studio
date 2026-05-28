import "../global.css";
import { Manrope, Outfit } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@/components/layout/analytics";
import { PwaRegister } from "@/components/layout/pwa-register";
import { SITE } from "@/lib/constants/landing";

function siteOrigin(): string {
	const explicit = process.env.NEXT_PUBLIC_SITE_URL;
	if (explicit) {
		return explicit.replace(/\/$/, "");
	}
	if (process.env.VERCEL_URL) {
		return `https://${process.env.VERCEL_URL}`;
	}
	return "http://localhost:3000";
}

export const metadata: Metadata = {
	metadataBase: new URL(siteOrigin()),
	title: {
		default: `${SITE.name} — Handmade ceramics`,
		template: `%s | ${SITE.name}`,
	},
	description: SITE.description,
	applicationName: SITE.name,
	appleWebApp: {
		capable: true,
		title: SITE.name,
		statusBarStyle: "black-translucent",
	},
	openGraph: {
		title: `${SITE.name} — Handmade ceramics`,
		description: SITE.description,
		type: "website",
		locale: "en-US",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: `${SITE.name} — Handmade ceramics`,
		card: "summary_large_image",
	},
	icons: {
		icon: [
			{ url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
			{ url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
		],
		apple: "/icons/apple-touch-icon.png",
		shortcut: "/favicon.png",
	},
};

export const viewport: Viewport = {
	themeColor: "#C8C1B5",
	colorScheme: "light",
	width: "device-width",
	initialScale: 1,
};

const outfit = Outfit({
	subsets: ["latin"],
	variable: "--font-outfit",
	weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
	subsets: ["latin"],
	variable: "--font-manrope",
	weight: ["300", "400", "500", "600"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`scroll-smooth overflow-x-clip ${outfit.variable} ${manrope.variable}`}
		>
			<head>
				<Analytics />
			</head>
			<body
				className={`bg-brand-sand font-sans text-black antialiased ${
					process.env.NODE_ENV === "development" ? "debug-screens" : ""
				}`}
			>
				<PwaRegister />
				{children}
			</body>
		</html>
	);
}
