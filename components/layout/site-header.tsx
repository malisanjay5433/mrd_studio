import Link from "next/link";
import { PRIMARY_NAV, SITE } from "@/lib/constants/landing";
import { BrandMark } from "./brand-mark";

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 border-b border-brand-line bg-brand-beige/90 backdrop-blur-xl">
			<div className="mx-auto flex max-w-[1600px] flex-col items-center gap-5 px-5 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:py-7 sm:text-left md:px-10 md:py-8 lg:px-12">
				<Link
					href="/"
					className="shrink-0 transition-opacity duration-500 ease-luxury hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-terracotta/50"
					aria-label={`${SITE.name} — home`}
				>
					<BrandMark variant="dark" size="sm" />
				</Link>
				<nav
					aria-label="Primary"
					className="flex w-full max-w-full flex-wrap justify-center gap-x-6 gap-y-2 pb-0.5 sm:w-auto sm:flex-nowrap sm:justify-end sm:gap-x-10 md:gap-x-11 lg:gap-x-14"
				>
					{PRIMARY_NAV.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="nav-editorial-link shrink-0 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.3em] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-terracotta/50 md:text-xs md:tracking-[0.32em]"
						>
							{item.label}
						</Link>
					))}
				</nav>
			</div>
		</header>
	);
}
