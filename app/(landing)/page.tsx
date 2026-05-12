import type { Metadata } from "next";
import { HeaderFilmstrip } from "@/components/layout/header-filmstrip";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { CraftsmanshipSection } from "@/components/sections/craftsmanship-section";
import { CtaSection } from "@/components/sections/cta-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProductShowcaseSection } from "@/components/sections/product-showcase-section";
import { SITE } from "@/lib/constants/landing";

function siteUrl(): string {
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
	title: {
		absolute: `${SITE.name} — Handmade ceramics`,
	},
	description: SITE.description,
	openGraph: {
		title: `${SITE.name} — Handmade ceramics`,
		description: SITE.description,
		url: siteUrl(),
		type: "website",
		locale: "en-US",
	},
};

export default function LandingPage() {
	const url = siteUrl();
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: SITE.name,
		description: SITE.description,
		url,
		sameAs: ["https://instagram.com/mrud.studio"],
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<SiteHeader />
			<HeaderFilmstrip />
			<main className="min-h-screen">
				<HeroSection />
				<AboutSection />
				<ProductShowcaseSection />
				<CraftsmanshipSection />
				<GallerySection />
				<CtaSection />
			</main>
			<SiteFooter />
		</>
	);
}
