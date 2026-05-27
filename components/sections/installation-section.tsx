"use client";

import Link from "next/link";
import { FEATURED_INSTALLATIONS } from "@/lib/constants/collection";
import { IMAGE_QUALITY } from "@/lib/constants/landing";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { StaticImage } from "@/components/ui/static-image";

export function InstallationSection() {
	const featuredInstallation = FEATURED_INSTALLATIONS[0];

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
						Installations
					</h2>
					<p className="body-editorial mt-6">Sample description</p>
					<Link href="/installations" className="link-underline mt-10 inline-block">
						View full installation
					</Link>
				</MotionReveal>

				<MotionReveal className="mt-14 max-w-3xl" delay={0.08}>
					<div className="relative aspect-[4/3] overflow-hidden rounded-luxury border border-brand-line bg-brand-raised">
						<StaticImage
							src={featuredInstallation.src}
							alt={featuredInstallation.alt}
							width={featuredInstallation.width}
							height={featuredInstallation.height}
							quality={IMAGE_QUALITY.section}
							className="h-full w-full object-cover"
							sizes="(max-width: 768px) 100vw, 768px"
						/>
					</div>
				</MotionReveal>
			</div>
		</section>
	);
}
