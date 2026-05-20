import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { GrainOverlay } from "@/components/ui/grain-overlay";
import { SITE } from "@/lib/constants/landing";

export function AboutSection() {
	return (
		<section
			id="about"
			aria-labelledby="about-heading"
			className="surface-elevated relative scroll-mt-24 border-b border-brand-line"
		>
			<GrainOverlay opacity="subtle" />
			<div className="relative mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28">
				<MotionReveal className="max-w-2xl">
					<SectionLabel>About me</SectionLabel>
					<h2
						id="about-heading"
						className="heading-editorial mt-6 text-3xl font-light md:mt-8 md:text-4xl lg:text-[2.35rem]"
					>
						{SITE.artist}
					</h2>
					<p className="body-editorial mt-10">
						RAAJLAKSHMI is an Indian contemporary artist working across ceramics
						and painting. Drawn to multiple mediums from an early stage in her
						practice, she explores form, texture, and quiet emotional resonance
						through minimal visual language.
					</p>
					<p className="body-editorial mt-6">
						Having lived and worked in Europe, her practice has evolved through
						exposure to diverse artistic and cultural environments, shaping a
						sensibility that balances restraint with intimacy. Her work often
						reflects a dialogue between materiality and stillness — where
						handcrafted objects become contemplative forms rather than decorative
						ones.
					</p>
					<p className="body-editorial mt-6">
						Choosing ceramics and painting as her primary modes of expression,
						RAAJLAKSHMI creates pieces that investigate simplicity, tactility, and the
						subtle poetry of everyday forms.
					</p>
				</MotionReveal>
			</div>
		</section>
	);
}
