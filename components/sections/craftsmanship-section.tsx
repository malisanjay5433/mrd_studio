import Image from "next/image";
import Link from "next/link";
import { CRAFTSMANSHIP_IMAGES, IMAGE_QUALITY } from "@/lib/constants/landing";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionLabel } from "@/components/ui/section-label";

export function CraftsmanshipSection() {
	return (
		<section
			id="craft"
			aria-labelledby="craft-heading"
			className="scroll-mt-24 border-b border-brand-rule bg-brand-charcoal"
		>
			<div className="mx-auto max-w-[1600px]">
				<div className="grid md:grid-cols-2">
					<MotionReveal className="relative min-h-[280px] md:min-h-[min(70vh,640px)]">
						<Image
							src={CRAFTSMANSHIP_IMAGES.wheel.src}
							alt={CRAFTSMANSHIP_IMAGES.wheel.alt}
							fill
							quality={IMAGE_QUALITY.section}
							className="object-cover object-[center_40%]"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</MotionReveal>
					<div className="surface-light flex flex-col justify-center px-5 py-14 md:px-12 md:py-20 lg:px-16">
						<MotionReveal delay={0.05}>
							<SectionLabel>Hands &amp; wheel</SectionLabel>
							<h2
								id="craft-heading"
								className="heading-editorial mt-6 text-3xl font-light md:mt-8 md:text-4xl"
							>
								From wedging to final fire
							</h2>
							<p className="body-editorial mt-10">
								Every line begins with the weight of clay and the speed of the
								wheel. We trim, burnish, and glaze with restraint — letting
								texture and silhouette do the talking.
							</p>
							<Link href="/contact" className="link-underline mt-12 inline-block">
								Join a workshop
							</Link>
						</MotionReveal>
					</div>
				</div>

				<div className="grid border-t border-brand-rule md:grid-cols-2 md:border-t-0">
					<div className="surface-light order-2 flex flex-col justify-center px-5 py-14 md:order-1 md:border-r md:border-brand-clay/25 md:px-12 md:py-20 lg:px-16">
						<MotionReveal>
							<SectionLabel>Kiln &amp; glaze</SectionLabel>
							<h2 className="heading-editorial mt-6 text-3xl font-light md:mt-8 md:text-4xl">
								Fire completes the story
							</h2>
							<p className="body-editorial mt-10">
								Temperature shifts bring depth to iron-bearing clays and soft
								opacities to satin whites. We document each cycle so the next
								batch stays intentional.
							</p>
							<Link href="/projects" className="link-underline mt-12 inline-block">
								See glaze studies
							</Link>
						</MotionReveal>
					</div>
					<MotionReveal
						delay={0.06}
						className="relative order-1 min-h-[280px] md:order-2 md:min-h-[min(70vh,640px)]"
					>
						<Image
							src={CRAFTSMANSHIP_IMAGES.glaze.src}
							alt={CRAFTSMANSHIP_IMAGES.glaze.alt}
							fill
							quality={IMAGE_QUALITY.section}
							className="object-cover object-center"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</MotionReveal>
				</div>
			</div>
		</section>
	);
}
