import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CollectionGrid } from "@/components/collection/collection-grid";
import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { COLLECTION_2015_2020 } from "@/lib/constants/collection";
import { SITE } from "@/lib/constants/landing";

export const metadata: Metadata = {
	title: "Collection 2015–2020",
	description: `${SITE.name} — tableware lines from 2015 to 2020.`,
};

export default function Collection2015Page() {
	return (
		<>
			<SiteHeader />
			<main className="min-h-screen bg-brand-paper">
				<section
					aria-labelledby="era-2015-heading"
					className="surface-light relative scroll-mt-24 border-b border-brand-line px-5 py-20 md:px-10 md:py-28"
				>
					<div className="relative mx-auto max-w-[1600px]">
						<MotionReveal className="max-w-2xl">
							<SectionLabel>Collection · 2015–2020</SectionLabel>
							<h1
								id="era-2015-heading"
								className="heading-editorial mt-5 text-3xl font-light md:mt-6 md:text-4xl lg:text-[2.65rem]"
							>
								2015–2020
							</h1>
						</MotionReveal>
						<CollectionGrid items={COLLECTION_2015_2020} />
						<MotionReveal className="mt-16 flex flex-wrap gap-4 md:mt-20">
							<Button
								href="/collection/2021-2025"
								variant="primary"
								className="!border-brand-ink/15 !bg-brand-ink !text-brand-white hover:!bg-brand-stone"
							>
								View 2021–2025
							</Button>
							<Button
								href="/collection"
								variant="primary"
								className="!border-brand-line !bg-transparent !text-brand-ink hover:!bg-brand-mist"
							>
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
