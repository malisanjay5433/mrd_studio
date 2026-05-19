"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HERO_IMAGE, IMAGE_QUALITY, SITE } from "@/lib/constants/landing";
import { GrainOverlay } from "@/components/ui/grain-overlay";
import { Button } from "@/components/ui/button";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
	hidden: {},
	show: {
		transition: { staggerChildren: 0.11, delayChildren: 0.35 },
	},
};

const item = {
	hidden: { opacity: 0, y: 32 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.88, ease },
	},
};

export function HeroSection() {
	return (
		<section
			aria-labelledby="hero-heading"
			className="relative min-h-[100dvh] w-full overflow-hidden bg-brand-charcoal"
		>
			<motion.div
				className="absolute inset-0"
				initial={{ scale: 1.08 }}
				animate={{ scale: 1 }}
				transition={{ duration: 1.5, ease }}
			>
				<Image
					src={HERO_IMAGE.src}
					alt={HERO_IMAGE.alt}
					fill
					className="object-cover object-center"
					sizes="100vw"
					priority
					quality={IMAGE_QUALITY.hero}
				/>
			</motion.div>
			<GrainOverlay opacity="medium" className="z-[1]" />
			<div
				className="absolute inset-0 z-[2] bg-gradient-to-t from-brand-charcoal/75 via-brand-charcoal/25 to-transparent"
				aria-hidden
			/>
			<div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-px bg-gradient-to-r from-transparent via-brand-white/18 to-transparent" />

			<div className="relative z-10 flex min-h-[100dvh] flex-col justify-end px-5 pb-12 pt-28 md:px-10 md:pb-16 lg:px-14">
				<motion.div
					variants={container}
					initial="hidden"
					animate="show"
					className="tone-dark max-w-[1600px]"
				>
					<motion.p variants={item} className="label-caps">
						{SITE.name}
					</motion.p>
					<motion.h1
						id="hero-heading"
						variants={item}
						className="heading-display-xl mt-6 max-w-4xl text-balance md:mt-8 lg:max-w-5xl"
					>
						{SITE.tagline}
					</motion.h1>
					<motion.p
						variants={item}
						className="body-editorial mt-8 max-w-lg md:mt-10"
					>
						{SITE.description}
					</motion.p>
					<motion.div
						variants={item}
						className="mt-10 flex flex-wrap items-center gap-4 md:mt-12 md:gap-6"
					>
						<Button href="/collection" variant="ghostOnDark" className="!px-7">
							View collection
						</Button>
						<Button
							href="/contact"
							variant="ghostOnDark"
							className="!border-brand-white/20 !bg-transparent hover:!bg-brand-white/8"
						>
							Studio inquiry
						</Button>
					</motion.div>
				</motion.div>

				<div className="mx-auto mt-16 md:mt-20">
					<a
						href="#about"
						className="flex flex-col items-center gap-3 text-brand-sand/85 transition hover:text-brand-white"
						aria-label="Scroll to about section"
					>
						<ScrollIndicator />
					</a>
				</div>
			</div>
		</section>
	);
}
