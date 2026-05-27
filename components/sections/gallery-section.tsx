"use client";

import Image from "next/image";
import { GALLERY, IMAGE_QUALITY } from "@/lib/constants/landing";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionLabel } from "@/components/ui/section-label";

export function GallerySection() {
	const featuredItem = GALLERY[0];

	return (
		<section
			id="gallery"
			aria-labelledby="gallery-heading"
			className="surface-dark scroll-mt-24 border-b border-brand-line px-5 py-20 md:px-10 md:py-28"
		>
			<div className="mx-auto max-w-[1600px]">
				<MotionReveal className="max-w-2xl">
					<SectionLabel>Gallery</SectionLabel>
					<h2
						id="gallery-heading"
						className="heading-editorial mt-5 text-3xl font-light md:mt-6 md:text-4xl"
					>
						Quiet harvest
					</h2>
				</MotionReveal>

				<MotionReveal className="mt-14 max-w-3xl" delay={0.08}>
					<div className="overflow-hidden rounded-luxury border border-brand-line bg-brand-raised">
						<div className="relative w-full">
							<Image
								src={featuredItem.src}
								alt={featuredItem.alt}
								width={featuredItem.width}
								height={featuredItem.height}
								quality={IMAGE_QUALITY.gallery}
								className="h-auto w-full object-cover"
								sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
							/>
						</div>
					</div>
				</MotionReveal>
			</div>
		</section>
	);
}
