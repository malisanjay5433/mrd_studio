import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { StaticImage } from "@/components/ui/static-image";
import { INSTALLATION_IMAGES } from "@/lib/constants/collection";
import { IMAGE_QUALITY, SITE } from "@/lib/constants/landing";

export const metadata: Metadata = {
	title: "Installation",
	description: `${SITE.name} — installation photography.`,
};

export default function InstallationsPage() {
	return (
		<>
			<SiteHeader />
			<main className="min-h-screen">
			<section
				aria-labelledby="installation-heading"
				className="surface-elevated scroll-mt-24 px-5 py-12 md:px-10 md:py-16"
			>
				<div className="mx-auto max-w-[1600px]">
					<MotionReveal>
						<SectionLabel>Installation</SectionLabel>
						<h1
							id="installation-heading"
							className="heading-editorial mt-4 text-3xl font-light md:text-4xl"
						>
							Installations
						</h1>
					</MotionReveal>

					<div
						className="mt-10 columns-2 gap-4 sm:columns-2 md:columns-3 md:gap-6"
						role="list"
					>
						{INSTALLATION_IMAGES.map((image) => (
							<div
								key={image.src}
								role="listitem"
								className="mb-4 break-inside-avoid md:mb-6"
							>
								<div className="card-luxury overflow-hidden">
									<StaticImage
										src={image.src}
										alt={image.alt}
										width={image.width}
										height={image.height}
										quality={IMAGE_QUALITY.gallery}
										className="h-auto w-full object-contain"
										sizes="(max-width: 640px) 50vw, 33vw"
									/>
								</div>
							</div>
						))}
					</div>

					<MotionReveal className="mt-12 text-center">
						<Button href="/contact" variant="primary">
							Inquire
						</Button>
					</MotionReveal>
				</div>
			</section>
			</main>
			<SiteFooter />
		</>
	);
}
