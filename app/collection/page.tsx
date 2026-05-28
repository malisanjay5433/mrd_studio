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
	description: `${SITE.name} — tableware and studio ceramics.`,
};

export default function CollectionHubPage() {
	return (
		<>
			<SiteHeader />
			<main className="min-h-screen">
			<section
				aria-labelledby="collection-hub-heading"
				className="surface-dark scroll-mt-24 px-5 py-12 md:px-10 md:py-16"
			>
				<div className="mx-auto max-w-[1600px]">
					<MotionReveal>
						<SectionLabel>Collection</SectionLabel>
						<h1
							id="collection-hub-heading"
							className="heading-editorial mt-4 text-3xl font-light md:text-4xl"
						>
							Collection
						</h1>
					</MotionReveal>

					<ul className="mt-10 grid list-none gap-6 md:grid-cols-2 md:gap-8">
						{COLLECTION_ERAS.map((era, i) => (
							<li key={era.slug}>
								<MotionReveal delay={i * 0.08}>
									<Link href={era.href} className="group block">
										<div className="card-luxury">
											<div className="relative aspect-[5/4] bg-brand-beige/80">
												<StaticImage
													src={era.cover.src}
													alt={era.cover.alt}
													width={era.cover.width}
													height={era.cover.height}
													quality={IMAGE_QUALITY.section}
													className="h-full w-full object-contain object-center p-6 transition-transform duration-[1.1s] ease-luxury group-hover:scale-[1.02]"
													sizes="(max-width: 768px) 100vw, 50vw"
												/>
											</div>
											<div className="border-t border-brand-line px-5 py-5">
												<p className="label-caps">
													{era.subtitle}
												</p>
												<h2 className="heading-editorial mt-2 text-xl font-light text-black md:text-2xl">
													{era.title}
												</h2>
												<p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-black">
													{era.count} pieces
												</p>
											</div>
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
