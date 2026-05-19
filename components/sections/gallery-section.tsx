"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GALLERY, IMAGE_QUALITY } from "@/lib/constants/landing";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionLabel } from "@/components/ui/section-label";

const ease = [0.22, 1, 0.36, 1] as const;

export function GallerySection() {
	return (
		<section
			id="gallery"
			aria-labelledby="gallery-heading"
			className="surface-mist scroll-mt-24 border-b border-brand-line px-5 py-20 md:px-10 md:py-28"
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
					<p className="body-editorial mt-8 max-w-xl">
						Colour studies from 2020–2025 — cream and sand through sage, teal,
						olive, and moss — compositions in soft light and organic spacing.
					</p>
				</MotionReveal>

				<div
					className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 lg:gap-6"
					role="list"
				>
					{GALLERY.map((item, i) => (
						<motion.div
							key={`${item.src}-${i}`}
							role="listitem"
							className="mb-5 break-inside-avoid lg:mb-6"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-5%" }}
							transition={{ duration: 0.65, delay: (i % 3) * 0.05, ease }}
						>
							<div className="group relative overflow-hidden border border-brand-line bg-brand-white">
								<div className="relative w-full">
									<Image
										src={item.src}
										alt={item.alt}
										width={item.width}
										height={item.height}
										quality={IMAGE_QUALITY.gallery}
										className="h-auto w-full object-cover transition-transform duration-[1.15s] ease-luxury group-hover:scale-[1.05]"
										sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
									/>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
