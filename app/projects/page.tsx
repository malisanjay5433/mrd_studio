import type { Metadata } from "next";
import Image from "next/image";
import { HeaderFilmstrip } from "@/components/layout/header-filmstrip";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionLabel } from "@/components/ui/section-label";
import {
	COLLECTION_ITEMS,
	IMAGE_QUALITY,
	SITE,
} from "@/lib/constants/landing";

export const metadata: Metadata = {
	title: "Collection",
	description: `${SITE.name} — dinnerware, vessels, and kiln-fired tableware from the studio.`,
};

export default function ProjectsPage() {
	return (
		<>
			<SiteHeader />
			<HeaderFilmstrip />
			<main id="collection" className="min-h-screen">
				<section
					aria-labelledby="collection-heading"
					className="surface-dark relative scroll-mt-24 border-b border-brand-rule px-5 py-20 md:px-10 md:py-28"
				>
					<div className="relative mx-auto max-w-[1600px]">
						<MotionReveal className="max-w-2xl">
							<SectionLabel>Collection</SectionLabel>
							<h1
								id="collection-heading"
								className="heading-editorial mt-5 text-3xl font-light md:mt-6 md:text-4xl lg:text-[2.65rem]"
							>
								From the studio &amp; kiln
							</h1>
							<p className="body-editorial mt-8 max-w-xl">
								Dinnerware lines and vessels from our catalogue — each entry lists
								clay, glaze, and how we imagine it living on your table. Featured
								pieces on the home page link here by anchor.
							</p>
						</MotionReveal>

						<ul
							className="relative mt-14 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
							role="list"
						>
							{COLLECTION_ITEMS.map((item, i) => (
								<li key={item.slug}>
									<MotionReveal delay={(i % 3) * 0.05}>
										<article
											id={item.slug}
											className="scroll-mt-28"
										>
											<div className="group relative overflow-hidden rounded-sm border border-brand-white/10 bg-brand-raised shadow-soft transition-all duration-500 ease-luxury hover:border-brand-white/18 hover:shadow-lift">
												<div className="relative aspect-[4/5] overflow-hidden bg-brand-charcoal/50">
													<Image
														src={item.image.src}
														alt={item.image.alt}
														width={item.image.width}
														height={item.image.height}
														quality={IMAGE_QUALITY.section}
														className="h-full w-full object-contain object-center p-5 transition-transform duration-[1.1s] ease-luxury group-hover:scale-[1.04]"
														sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
													/>
												</div>
												<div className="border-t border-brand-white/10 px-5 py-6">
													<h2 className="font-display text-lg font-medium tracking-tight text-brand-white transition-colors group-hover:text-brand-terracotta">
														{item.title}
													</h2>
													<p className="body-editorial mt-3 text-sm text-brand-sand/90">
														{item.description}
													</p>
												</div>
											</div>
										</article>
									</MotionReveal>
								</li>
							))}
						</ul>

						<MotionReveal className="mt-16 text-center md:mt-20">
							<p className="body-editorial text-brand-sand/85">
								Custom sizes, trade orders, and glaze variations — by enquiry.
							</p>
							<div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-5">
								<Button href="/contact" variant="ghostOnDark">
									Contact the studio
								</Button>
								<Button
									href="/"
									variant="ghostOnDark"
									className="!border-brand-white/22 !bg-transparent"
								>
									Back to home
								</Button>
							</div>
						</MotionReveal>
					</div>
				</section>
			</main>
			<SiteFooter />
		</>
	);
}
