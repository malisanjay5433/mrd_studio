import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { StaticImage } from "@/components/ui/static-image";
import { COLLECTION_ERAS } from "@/lib/constants/collection";
import { IMAGE_QUALITY, SITE } from "@/lib/constants/landing";

export const metadata: Metadata = {
	title: "Collection",
	description: `${SITE.name} — tableware and studio ceramics across 2015–2025.`,
};

export default function CollectionHubPage() {
	return (
		<>
			<SiteHeader />
			<main className="min-h-screen bg-brand-paper">
				<section
					aria-labelledby="collection-hub-heading"
					className="surface-light relative scroll-mt-24 border-b border-brand-line px-5 py-20 md:px-10 md:py-28"
				>
					<div className="relative mx-auto max-w-[1600px]">
						<MotionReveal className="max-w-2xl">
							<SectionLabel>Collection</SectionLabel>
							<h1
								id="collection-hub-heading"
								className="heading-editorial mt-5 text-3xl font-light md:mt-6 md:text-4xl lg:text-[2.65rem]"
							>
								Collection
							</h1>
						</MotionReveal>

						<ul className="mt-14 grid list-none gap-10 md:grid-cols-2 md:gap-12">
							{COLLECTION_ERAS.map((era, i) => (
								<li key={era.slug}>
									<MotionReveal delay={i * 0.08}>
										<Link
											href={era.href}
											className="group block border border-brand-line bg-brand-white transition-colors duration-500 hover:border-brand-muted/40"
										>
											<div className="relative aspect-[5/4] bg-brand-paper">
												<StaticImage
													src={era.cover.src}
													alt={era.cover.alt}
													width={era.cover.width}
													height={era.cover.height}
													quality={IMAGE_QUALITY.section}
													className="h-full w-full object-contain object-center p-8"
													sizes="(max-width: 768px) 100vw, 50vw"
												/>
											</div>
											<div className="border-t border-brand-line px-6 py-6 md:px-8 md:py-7">
												<p className="label-caps">{era.subtitle}</p>
												<h2 className="heading-editorial mt-3 text-2xl font-light md:text-3xl">
													{era.title}
												</h2>
												<p className="mt-2 text-xs uppercase tracking-[0.2em] text-brand-muted">
													{era.count} pieces
												</p>
											</div>
										</Link>
									</MotionReveal>
								</li>
							))}
						</ul>
					</div>
				</section>
			</main>
			<SiteFooter />
		</>
	);
}
