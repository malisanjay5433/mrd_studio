import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CollectionGrid } from "@/components/collection/collection-grid";
import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { COLLECTION_2021_2025 } from "@/lib/constants/collection";
import { SITE } from "@/lib/constants/landing";

export const metadata: Metadata = {
	title: "Collection 2021–2025",
	description: `${SITE.name} — studio catalogue 2021–2025.`,
};

export default function Collection2021Page() {
	return (
		<>
			<SiteHeader />
			<main className="min-h-screen">
			<section
				aria-labelledby="era-2021-heading"
				className="surface-dark scroll-mt-24 px-5 py-12 md:px-10 md:py-16"
			>
				<div className="mx-auto max-w-[1600px]">
					<MotionReveal>
						<SectionLabel>Collection · 2021–2025</SectionLabel>
						<h1
							id="era-2021-heading"
							className="heading-editorial mt-4 text-3xl font-light md:text-4xl"
						>
							2021–2025
						</h1>
					</MotionReveal>
					<CollectionGrid items={COLLECTION_2021_2025} />
					<MotionReveal className="mt-12 flex flex-wrap gap-3">
						<Button href="/collection/2015-2020" variant="secondary">
							2015–2020
						</Button>
						<Button href="/collection" variant="ghostOnDark">
							All collections
						</Button>
					</MotionReveal>
				</div>
			</section>
			</main>
			<SiteFooter />
		</>
	);
}
