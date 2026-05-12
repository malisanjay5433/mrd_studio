import Image from "next/image";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Button } from "@/components/ui/button";
import {
	CTA_BACKDROP,
	IMAGE_QUALITY,
	SITE,
} from "@/lib/constants/landing";
import { GrainOverlay } from "@/components/ui/grain-overlay";

export function CtaSection() {
	return (
		<section
			aria-labelledby="cta-heading"
			className="relative overflow-hidden border-b border-brand-rule px-5 py-24 md:px-10 md:py-32"
		>
			<div className="pointer-events-none absolute inset-0" aria-hidden>
				<Image
					src={CTA_BACKDROP.src}
					alt=""
					fill
					quality={IMAGE_QUALITY.ctaBackdrop}
					className="object-cover object-center opacity-[0.35]"
					sizes="100vw"
				/>
			</div>
			<div
				className="absolute inset-0 bg-gradient-to-br from-brand-terracotta/88 via-brand-clay/85 to-brand-charcoal/96"
				aria-hidden
			/>
			<GrainOverlay opacity="subtle" />
			<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 to-transparent" />

			<div className="tone-dark relative z-10 mx-auto max-w-3xl text-center">
				<MotionReveal>
					<p className="label-caps">{SITE.name}</p>
					<h2
						id="cta-heading"
						className="mt-8 font-display text-3xl font-light leading-[1.15] tracking-[-0.02em] md:text-4xl lg:text-[2.75rem]"
					>
						Commission a set, book a visit, or explore the collection.
					</h2>
					<p className="body-editorial mx-auto mt-8 max-w-lg md:mt-10">
						Timelines follow the kiln. We reply to studio inquiries within a few
						days.
					</p>
					<div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-5">
						<Button href="/contact" variant="ghostOnDark">
							Get in touch
						</Button>
						<Button
							href="/projects"
							variant="ghostOnDark"
							className="!border-brand-white/22 !bg-transparent"
						>
							Browse work
						</Button>
					</div>
				</MotionReveal>
			</div>
		</section>
	);
}
