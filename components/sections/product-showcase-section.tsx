"use client";

import Link from "next/link";
import { COLLECTION_FEATURE, IMAGE_QUALITY } from "@/lib/constants/landing";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { StaticImage } from "@/components/ui/static-image";

export function ProductShowcaseSection() {
	return (
		<section
			id="collection"
			aria-labelledby="products-heading"
			className="surface-dark scroll-mt-24 border-b border-brand-line px-5 py-20 md:px-10 md:py-28"
		>
			<div className="mx-auto max-w-[1600px]">
				<MotionReveal className="max-w-2xl">
					<SectionLabel>Collection</SectionLabel>
					<h2
						id="products-heading"
						className="heading-editorial mt-5 text-3xl font-light md:mt-6 md:text-4xl lg:text-[2.65rem]"
					>
						Collection
					</h2>
					<p className="body-editorial mt-6">{COLLECTION_FEATURE.description}</p>
				</MotionReveal>

				<MotionReveal className="mt-14 max-w-3xl" delay={0.08}>
					<Link
						href={COLLECTION_FEATURE.href}
						className="group block overflow-hidden rounded-luxury border border-brand-line bg-brand-raised transition-colors duration-500 hover:border-brand-sand/25"
					>
						<div className="relative aspect-[4/3] overflow-hidden bg-brand-beige/80">
							<StaticImage
								src={COLLECTION_FEATURE.image.src}
								alt={COLLECTION_FEATURE.image.alt}
								width={COLLECTION_FEATURE.image.width}
								height={COLLECTION_FEATURE.image.height}
								quality={IMAGE_QUALITY.section}
								className="h-full w-full object-contain object-center p-8 transition-transform duration-[1.1s] ease-luxury group-hover:scale-[1.02]"
								sizes="(max-width: 768px) 100vw, 768px"
							/>
						</div>
					</Link>
				</MotionReveal>
			</div>
		</section>
	);
}
