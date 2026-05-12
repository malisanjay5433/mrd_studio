import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { GrainOverlay } from "@/components/ui/grain-overlay";
import { Button } from "@/components/ui/button";

export default function NotFound() {
	return (
		<>
			<SiteHeader />
			<main className="min-h-[60vh]">
				<section className="surface-light relative border-b border-brand-clay/20">
					<GrainOverlay opacity="subtle" />
					<div className="relative mx-auto flex max-w-[1600px] flex-col items-center px-5 py-24 text-center md:px-10 md:py-32">
						<p className="label-caps">404</p>
						<h1 className="heading-editorial mt-8 max-w-md text-3xl font-light md:text-4xl">
							This page could not be found.
						</h1>
						<p className="body-editorial mx-auto mt-8 max-w-md text-brand-clay/90">
							The link may be outdated, or the page has moved.
						</p>
						<div className="mt-12">
							<Button href="/" variant="primary">
								Back to home
							</Button>
						</div>
						<Link
							href="/contact"
							className="body-editorial mt-6 text-sm text-brand-clay/80 underline-offset-4 transition hover:text-brand-terracotta hover:underline"
						>
							Contact the studio
						</Link>
					</div>
				</section>
			</main>
			<SiteFooter />
		</>
	);
}
