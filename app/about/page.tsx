import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { SITE } from "@/lib/constants/landing";

export const metadata: Metadata = {
	title: "About",
	description: `About ${SITE.artist} — ${SITE.description}`,
};

export default function AboutPage() {
	return (
		<>
			<SiteHeader />
			<main className="min-h-screen">
				<AboutSection />
			</main>
			<SiteFooter />
		</>
	);
}
