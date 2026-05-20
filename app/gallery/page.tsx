"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { GALLERY, IMAGE_QUALITY } from "@/lib/constants/landing";

const ease = [0.22, 1, 0.36, 1] as const;

export default function GalleryPage() {
	return (
		<>
			<SiteHeader />
			<main className="min-h-screen">
			<section
				aria-labelledby="gallery-page-heading"
				className="surface-dark scroll-mt-24 px-5 py-12 md:px-10 md:py-16"
			>
				<div className="mx-auto max-w-[1600px]">
					<MotionReveal>
						<SectionLabel>Gallery</SectionLabel>
						<h1
							id="gallery-page-heading"
							className="heading-editorial mt-4 text-3xl font-light md:text-4xl"
						>
							Quiet harvest
						</h1>
					</MotionReveal>

					<div
						className="mt-10 columns-2 gap-4 sm:columns-2 md:columns-3 md:gap-6"
						role="list"
					>
						{GALLERY.map((item, i) => (
							<motion.div
								key={`${item.src}-${i}`}
								role="listitem"
								className="mb-4 break-inside-avoid md:mb-6"
								initial={{ opacity: 0, y: 16 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-5%" }}
								transition={{ duration: 0.6, delay: (i % 3) * 0.04, ease }}
							>
								<div className="card-luxury overflow-hidden">
									<Image
										src={item.src}
										alt={item.alt}
										width={item.width}
										height={item.height}
										quality={IMAGE_QUALITY.gallery}
										className="h-auto w-full object-cover transition-transform duration-[1.2s] ease-luxury hover:scale-[1.02]"
										sizes="(max-width: 640px) 50vw, 33vw"
									/>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>
			</main>
			<SiteFooter />
		</>
	);
}
