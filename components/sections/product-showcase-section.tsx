"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { IMAGE_QUALITY, PRODUCTS } from "@/lib/constants/landing";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { StaticImage } from "@/components/ui/static-image";

const ease = [0.22, 1, 0.36, 1] as const;

export function ProductShowcaseSection() {
	return (
		<section
			id="collection"
			aria-labelledby="products-heading"
			className="surface-light scroll-mt-24 border-b border-brand-line px-5 py-20 md:px-10 md:py-28"
		>
			<div className="mx-auto max-w-[1600px]">
				<MotionReveal className="max-w-2xl">
					<SectionLabel>Collection</SectionLabel>
					<h2
						id="products-heading"
						className="heading-editorial mt-5 text-3xl font-light md:mt-6 md:text-4xl lg:text-[2.65rem]"
					>
						Tableware · 2015–2020
					</h2>
				</MotionReveal>

				<ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
					{PRODUCTS.map((product, i) => (
						<li key={product.title}>
							<motion.div
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-10%" }}
								transition={{ duration: 0.7, delay: i * 0.06, ease }}
							>
								<Link
									href={product.href}
									className="group block overflow-hidden border border-brand-line bg-brand-white transition-colors duration-500 hover:border-brand-muted/35"
								>
									<div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-brand-paper">
										<StaticImage
											src={product.image.src}
											alt={product.image.alt}
											width={product.image.width}
											height={product.image.height}
											quality={IMAGE_QUALITY.section}
											className="h-full w-full object-contain object-center p-6"
											sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
										/>
									</div>
									<div className="border-t border-brand-line px-5 py-6">
										<h3 className="font-display text-lg font-medium tracking-tight text-brand-ink">
											{product.title}
										</h3>
									</div>
								</Link>
							</motion.div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
