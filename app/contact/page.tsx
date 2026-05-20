import type { Metadata } from "next";
import Link from "next/link";
import { AtSign, Mail, MapPin } from "lucide-react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { SITE, SOCIAL_LINKS } from "@/lib/constants/landing";

export const metadata: Metadata = {
	title: "Contact",
	description: `Contact ${SITE.name}.`,
};

const studioVisitHref = `${SOCIAL_LINKS[1].href}?subject=${encodeURIComponent("Studio visit request")}`;

const studioVisit = {
	label: "Studio visits",
	handle: "Book a visit",
	href: studioVisitHref,
	icon: MapPin,
};

export default function ContactPage() {
	const channels = [
		{
			icon: AtSign,
			label: SOCIAL_LINKS[0].label,
			handle: SOCIAL_LINKS[0].handle,
			href: SOCIAL_LINKS[0].href,
		},
		{
			icon: Mail,
			label: SOCIAL_LINKS[1].label,
			handle: SOCIAL_LINKS[1].handle,
			href: SOCIAL_LINKS[1].href,
		},
		studioVisit,
	];

	return (
		<>
			<SiteHeader />
			<main className="min-h-screen">
			<section
				aria-labelledby="contact-heading"
				className="surface-elevated scroll-mt-24 px-5 py-12 md:px-10 md:py-16"
			>
				<div className="mx-auto max-w-[1600px]">
					<MotionReveal>
						<SectionLabel>Contact</SectionLabel>
						<h1
							id="contact-heading"
							className="heading-editorial mt-4 text-3xl font-light md:text-4xl"
						>
							Contact
						</h1>
					</MotionReveal>

					<ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
						{channels.map((item, i) => {
							const Icon = item.icon;
							return (
								<li key={item.label}>
									<MotionReveal delay={i * 0.06}>
										<Link
											href={item.href}
											target={
												item.href.startsWith("http") ? "_blank" : undefined
											}
											rel={
												item.href.startsWith("http")
													? "noopener noreferrer"
													: undefined
											}
											className="group flex flex-col items-center gap-4 px-5 py-10 text-center"
										>
											<div className="card-luxury flex w-full flex-col items-center gap-4 px-4 py-10">
												<span
													className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-line bg-brand-charcoal/80 text-brand-terracotta transition duration-500 group-hover:border-brand-terracotta group-hover:bg-brand-terracotta/15"
													aria-hidden
												>
													<Icon size={20} strokeWidth={1.25} />
												</span>
												<span className="font-display text-lg font-medium tracking-tight text-brand-white transition group-hover:text-brand-terracotta">
													{item.handle}
												</span>
												<span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-clay">
													{item.label}
												</span>
											</div>
										</Link>
									</MotionReveal>
								</li>
							);
						})}
					</ul>
				</div>
			</section>
			</main>
			<SiteFooter />
		</>
	);
}
