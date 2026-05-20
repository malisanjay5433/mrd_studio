"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FEATURED_SPHERES } from "@/lib/constants/collection";
import { IMAGE_QUALITY } from "@/lib/constants/landing";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { StaticImage } from "@/components/ui/static-image";

const ease = [0.22, 1, 0.36, 1] as const;

export function InstallationSection() {
	return (
		<section
			id="installation"
			aria-labelledby="installation-heading"
			className="surface-elevated scroll-mt-24 border-b border-brand-line"
		>
			<div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28">
				<MotionReveal className="max-w-2xl">
					<SectionLabel>Installation</SectionLabel>
					<h2
						id="installation-heading"
						className="heading-editorial mt-6 text-3xl font-light md:mt-8 md:text-4xl"
					>
						Spheres
					</h2>
					<Link href="/installations" className="link-underline mt-10 inline-block">
						View full installation
					</Link>
				</MotionReveal>

				<div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
					{FEATURED_SPHERES.map((image, i) => (
						<motion.div
							key={image.src}
							initial={{ opacity: 0, y: 12 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-5%" }}
							transition={{ duration: 0.6, delay: (i % 3) * 0.05, ease }}
						>
							<div className="relative aspect-square overflow-hidden rounded-luxury border border-brand-line bg-brand-raised">
								<StaticImage
									src={image.src}
									alt={image.alt}
									width={image.width}
									height={image.height}
									quality={IMAGE_QUALITY.section}
									className="h-full w-full object-cover"
									sizes="(max-width: 768px) 50vw, 33vw"
								/>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
