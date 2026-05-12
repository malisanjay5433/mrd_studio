import type { Metadata } from "next";
import Link from "next/link";
import { AtSign, Mail, MapPin } from "lucide-react";
import { HeaderFilmstrip } from "@/components/layout/header-filmstrip";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { GrainOverlay } from "@/components/ui/grain-overlay";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { SITE, SOCIAL_LINKS } from "@/lib/constants/landing";

export const metadata: Metadata = {
	title: "Contact",
	description: `Reach ${SITE.name} for commissions, wholesale, studio visits, and inquiries.`,
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
			<HeaderFilmstrip />
			<main className="min-h-screen">
				<section
					aria-labelledby="contact-heading"
					className="surface-light relative scroll-mt-24 border-b border-brand-clay/20"
				>
					<GrainOverlay opacity="subtle" />
					<div className="relative mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28">
						<MotionReveal className="max-w-2xl">
							<SectionLabel>Contact</SectionLabel>
							<h1
								id="contact-heading"
								className="heading-editorial mt-6 text-3xl font-light md:mt-8 md:text-4xl lg:text-[2.35rem]"
							>
								Commissions &amp; studio inquiries
							</h1>
							<p className="body-editorial mt-10">
								For custom tableware, trade, wholesale, or visits, send a note with
								your timeline and how the pieces will be used. Restocks and markets
								are announced on Instagram first.
							</p>
						</MotionReveal>

						<ul className="relative mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-10">
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
												className="group relative flex flex-col items-center gap-5 rounded-sm border border-brand-clay/18 bg-brand-white/70 px-6 py-12 text-center shadow-soft transition-all duration-500 ease-luxury hover:-translate-y-0.5 hover:border-brand-terracotta/45 hover:shadow-lift md:gap-7 md:py-16 lg:py-20"
											>
												<span
													className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-clay/22 bg-brand-beige text-brand-charcoal transition duration-500 group-hover:border-brand-terracotta group-hover:bg-brand-terracotta group-hover:text-brand-white"
													aria-hidden
												>
													<Icon size={20} strokeWidth={1.25} />
												</span>
												<span className="font-display text-lg font-medium tracking-tight text-brand-charcoal transition duration-500 group-hover:text-brand-terracotta md:text-xl">
													{item.handle}
												</span>
												<span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-clay/75 transition duration-500 group-hover:text-brand-charcoal">
													{item.label}
												</span>
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
