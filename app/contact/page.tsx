import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { SITE, SOCIAL_LINKS } from "@/lib/constants/landing";

export const metadata: Metadata = {
	title: "Contact",
	description: `Contact ${SITE.name}.`,
};

const email = SOCIAL_LINKS.find((link) => link.label === "Email")!;

export default function ContactPage() {
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

						<ul className="mx-auto mt-10 max-w-sm">
							<li>
								<MotionReveal>
									<Link
										href={email.href}
										className="group flex flex-col items-center gap-4 px-5 py-10 text-center"
									>
										<div className="card-luxury flex w-full flex-col items-center gap-4 px-4 py-10">
											<span
												className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-line bg-brand-sand/80 text-brand-terracotta transition duration-500 group-hover:border-brand-terracotta group-hover:bg-brand-terracotta/10"
												aria-hidden
											>
												<Mail size={20} strokeWidth={1.25} />
											</span>
											<span className="font-display text-lg font-medium tracking-tight text-black transition group-hover:text-brand-terracotta">
												{email.handle}
											</span>
											<span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black">
												{email.label}
											</span>
										</div>
									</Link>
								</MotionReveal>
							</li>
						</ul>
					</div>
				</section>
			</main>
			<SiteFooter />
		</>
	);
}
