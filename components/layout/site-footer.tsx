import Link from "next/link";
import { FOOTER_NAV, SITE, SOCIAL_LINKS } from "@/lib/constants/landing";
import { BrandMark } from "./brand-mark";

export function SiteFooter() {
	const year = new Date().getFullYear();
	return (
		<footer
			id="visit"
			className="surface-light border-t border-brand-clay/25 px-5 py-16 md:px-10 md:py-20"
		>
			<div className="mx-auto flex max-w-[1600px] flex-col gap-14 md:flex-row md:items-start md:justify-between">
				<div>
					<BrandMark variant="dark" size="sm" />
					<p className="body-editorial mt-6 max-w-xs text-sm">{SITE.description}</p>
				</div>
				<div className="flex flex-col gap-12 sm:flex-row sm:gap-20">
					<div>
						<p className="label-caps">Navigate</p>
						<ul className="mt-5 space-y-3 text-sm text-brand-clay/90">
							{FOOTER_NAV.map((item) => (
								<li key={item.href}>
									<Link
										href={item.href}
										className="transition-colors duration-500 hover:text-brand-charcoal"
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div>
						<p className="label-caps">Connect</p>
						<ul className="mt-5 space-y-3 text-sm text-brand-clay/90">
							{SOCIAL_LINKS.map((s) => (
								<li key={s.href}>
									<Link
										href={s.href}
										target={s.href.startsWith("http") ? "_blank" : undefined}
										rel={
											s.href.startsWith("http")
												? "noopener noreferrer"
												: undefined
										}
										className="transition-colors duration-500 hover:text-brand-charcoal"
									>
										{s.handle}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<p className="mx-auto mt-16 max-w-[1600px] text-center text-[10px] uppercase tracking-[0.2em] text-brand-clay/65">
				© {year} {SITE.name} · Handcrafted ceramics
			</p>
		</footer>
	);
}
