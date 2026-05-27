"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HERO_IMAGE, IMAGE_QUALITY } from "@/lib/constants/landing";
import { GrainOverlay } from "@/components/ui/grain-overlay";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
	return (
		<section
			aria-label="Hero"
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
					className="object-cover object-center opacity-90"
					sizes="100vw"
					priority
					quality={IMAGE_QUALITY.hero}
				/>
			</motion.div>
			<GrainOverlay opacity="medium" className="z-[1]" />
			<div
				className="absolute inset-0 z-[2] bg-gradient-to-t from-brand-charcoal via-brand-charcoal/40 to-brand-charcoal/20"
				aria-hidden
			/>
			<div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-px bg-gradient-to-r from-transparent via-brand-white/12 to-transparent" />

			<div className="relative z-10 flex min-h-[100dvh] flex-col justify-end px-5 pb-28 pt-24 md:px-10 md:pb-20 lg:px-14">
				<div className="mx-auto">
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
