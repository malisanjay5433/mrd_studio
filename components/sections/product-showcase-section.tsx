"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IMAGE_QUALITY, PRODUCTS } from "@/lib/constants/landing";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionLabel } from "@/components/ui/section-label";

const ease = [0.22, 1, 0.36, 1] as const;

export function ProductShowcaseSection() {
	return (
		<section
			id="collection"
			aria-labelledby="products-heading"
			className="surface-dark scroll-mt-24 border-b border-brand-rule px-5 py-20 md:px-10 md:py-28"
		>
			<div className="mx-auto max-w-[1600px]">
				<MotionReveal className="max-w-2xl">
					<SectionLabel>Product</SectionLabel>
					<h2
						id="products-heading"
						className="heading-editorial mt-5 text-3xl font-light md:mt-6 md:text-4xl lg:text-[2.65rem]"
					>
						Bowls, mugs &amp; tableware
					</h2>
					<p className="body-editorial mt-8 max-w-xl">
						A responsive edit of studio work — tactile rims, muted palettes, and
						forms composed for the table.
					</p>
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
									className="group block overflow-hidden rounded-sm border border-brand-white/10 bg-brand-raised shadow-soft transition-all duration-500 ease-luxury hover:-translate-y-1 hover:border-brand-white/18 hover:shadow-lift"
								>
									<div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-brand-charcoal/50">
										<Image
											src={product.image.src}
											alt={product.image.alt}
											width={product.image.width}
											height={product.image.height}
											quality={IMAGE_QUALITY.section}
											className="h-full w-full object-contain object-center p-6 transition-transform duration-[1.1s] ease-luxury group-hover:scale-[1.04]"
											sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
										/>
									</div>
									<div className="border-t border-brand-white/10 px-5 py-6">
										<h3 className="font-display text-lg font-medium tracking-tight text-brand-white transition-colors group-hover:text-brand-terracotta">
											{product.title}
										</h3>
										<p className="body-editorial mt-3 text-sm text-brand-sand/90">
											{product.description}
										</p>
										<span className="mt-4 inline-block text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-sand/60 transition group-hover:text-brand-white">
											Discover →
										</span>
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
