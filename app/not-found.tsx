import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";

export default function NotFound() {
	return (
		<>
			<SiteHeader />
			<main className="min-h-screen">
				<section className="surface-dark flex min-h-[60vh] flex-col items-center justify-center px-5 py-20 text-center">
					<p className="label-caps text-black">404</p>
					<h1 className="heading-editorial mt-6 text-3xl font-light">
						Page not found
					</h1>
					<div className="mt-10">
						<Button href="/" variant="primary">
							Home
						</Button>
					</div>
					<Link
						href="/contact"
						className="mt-6 text-[10px] uppercase tracking-[0.22em] text-black transition hover:text-black"
					>
						Contact
					</Link>
				</section>
			</main>
			<SiteFooter />
		</>
	);
}
