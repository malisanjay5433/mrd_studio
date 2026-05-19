import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { GrainOverlay } from "@/components/ui/grain-overlay";

export function AboutSection() {
	return (
		<section
			id="about"
			aria-labelledby="about-heading"
			className="surface-light relative scroll-mt-24 border-b border-brand-clay/20"
		>
			<GrainOverlay opacity="subtle" />
			<div className="relative mx-auto grid max-w-[1600px] gap-14 px-5 py-20 md:grid-cols-2 md:gap-20 md:px-10 md:py-28 lg:gap-32">
				<MotionReveal>
					<div className="flex gap-6 md:gap-8">
						<span
							className="font-display text-4xl font-extralight leading-none tracking-[-0.04em] text-brand-clay/35 md:text-5xl"
							aria-hidden
						>
							01
						</span>
						<div className="min-w-0">
							<SectionLabel>About</SectionLabel>
							<h2
								id="about-heading"
								className="heading-editorial mt-6 text-3xl font-light md:mt-8 md:text-4xl lg:text-[2.35rem]"
							>
								Rajlaxmi Sonawane
							</h2>
							<p className="body-editorial mt-10">
								Rajlaxmi Sonawane is a contemporary artist exploring ceramics and
								painting through a minimal and tactile approach. Working across
								mediums, her practice is informed by an interest in material,
								form, and spatial quietness.
							</p>
						</div>
					</div>
				</MotionReveal>
				<MotionReveal delay={0.08}>
					<div className="flex gap-6 md:gap-8 md:pt-12 lg:pt-20">
						<span
							className="font-display text-4xl font-extralight leading-none tracking-[-0.04em] text-brand-clay/35 md:text-5xl"
							aria-hidden
						>
							02
						</span>
						<div className="min-w-0">
							<SectionLabel>Practice</SectionLabel>
							<h2 className="heading-editorial mt-6 text-3xl font-light md:mt-8 md:text-4xl lg:text-[2.35rem]">
								Between art and design
							</h2>
							<p className="body-editorial mt-10">
								After living and working in Europe, she developed a refined visual
								language influenced by contemporary design, architecture, and slow
								craftsmanship. Her work centres around understated forms and
								subtle textures that invite pause and reflection.
							</p>
							<p className="body-editorial mt-6">
								Through ceramics and painting, she creates objects and surfaces
								that exist between art, design, and emotion.
							</p>
						</div>
					</div>
				</MotionReveal>
			</div>
		</section>
	);
}
