import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { StaticImage } from "@/components/ui/static-image";
import { SPHERE_IMAGES } from "@/lib/constants/collection";
import { IMAGE_QUALITY, SITE } from "@/lib/constants/landing";

export const metadata: Metadata = {
	title: "Installations",
	description: `${SITE.name} — sphere installation studies in stoneware.`,
};

export default function InstallationsPage() {
	return (
		<>
			<SiteHeader />
			<main className="min-h-screen bg-brand-paper">
				<section
					aria-labelledby="installations-heading"
					className="surface-light relative scroll-mt-24 border-b border-brand-line px-5 py-20 md:px-10 md:py-28"
				>
					<div className="relative mx-auto max-w-[1600px]">
						<MotionReveal className="max-w-2xl">
							<SectionLabel>Installation</SectionLabel>
							<h1
								id="installations-heading"
								className="heading-editorial mt-5 text-3xl font-light md:mt-6 md:text-4xl lg:text-[2.65rem]"
							>
								Spheres
							</h1>
						</MotionReveal>

						<div
							className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 lg:gap-8"
							role="list"
						>
							{SPHERE_IMAGES.map((image) => (
								<div
									key={image.src}
									role="listitem"
									className="mb-6 break-inside-avoid lg:mb-8"
								>
									<div className="overflow-hidden border border-brand-line bg-brand-white">
										<StaticImage
											src={image.src}
											alt={image.alt}
											width={image.width}
											height={image.height}
											quality={IMAGE_QUALITY.gallery}
											className="h-auto w-full object-contain"
											sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
										/>
									</div>
								</div>
							))}
						</div>

						<MotionReveal className="mt-16 text-center md:mt-20">
							<Button
								href="/contact"
								variant="primary"
								className="!border-brand-ink/20 !bg-brand-ink !text-brand-white hover:!bg-brand-stone hover:!border-brand-stone"
							>
								Commission an installation
							</Button>
						</MotionReveal>
					</div>
				</section>
			</main>
			<SiteFooter />
		</>
	);
}
