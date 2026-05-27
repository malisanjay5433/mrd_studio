"use client";
import { ArrowLeft, AtSign, Eye, Mail } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Props = {
	project: {
		url?: string;
		title: string;
		description: string;
		repository?: string;
	};

	views: number;
};
export const Header: React.FC<Props> = ({ project, views }) => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	const links: { label: string; href: string }[] = [];
	if (project.repository) {
		links.push({
			label: "GitHub",
			href: `https://github.com/${project.repository}`,
		});
	}
	if (project.url) {
		links.push({
			label: "Website",
			href: project.url,
		});
	}
	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	const navClass =
		"text-brand-sand/85 hover:text-brand-white transition-colors";

	return (
		<header ref={ref} className="relative isolate bg-brand-charcoal">
			<div
				className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md duration-200 ${
					isIntersecting
						? "border-transparent bg-brand-charcoal/0"
						: "border-brand-white/10 bg-brand-charcoal/92"
				}`}
			>
				<div className="container mx-auto flex flex-row-reverse items-center justify-between p-6">
					<div className="flex justify-between gap-8">
						<span
							title="View counter for this page"
							className={`flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${navClass}`}
						>
							<Eye className="h-4 w-4" strokeWidth={1.25} />{" "}
							{Intl.NumberFormat("en-US", { notation: "compact" }).format(
								views,
							)}
						</span>
						<Link
							target="_blank"
							href="https://instagram.com/"
							aria-label="Instagram"
						>
							<AtSign className={`h-5 w-5 ${navClass}`} strokeWidth={1.25} />
						</Link>
						<Link href="mailto:connect@raajlakshmi.com" aria-label="Email studio">
							<Mail className={`h-5 w-5 ${navClass}`} strokeWidth={1.25} />
						</Link>
					</div>

					<Link
						href="/projects"
						className={navClass}
						aria-label="Back to collection"
					>
						<ArrowLeft className="h-6 w-6" strokeWidth={1.25} />
					</Link>
				</div>
			</div>
			<div className="tone-dark container relative mx-auto border-b border-brand-white/10 px-6 pb-20 pt-28 sm:pb-24 sm:pt-32">
				<div className="mx-auto max-w-3xl text-center lg:text-left">
					<h1 className="font-display text-4xl font-medium tracking-tight text-brand-white sm:text-5xl lg:text-6xl">
						{project.title}
					</h1>
					<p className="body-editorial mt-8 text-brand-sand/90">
						{project.description}
					</p>

					{links.length > 0 ? (
						<div className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-4 lg:justify-start">
							{links.map((link) => (
								<Link
									target="_blank"
									key={link.label}
									href={link.href}
									className="link-underline"
								>
									{link.label}
								</Link>
							))}
						</div>
					) : null}
				</div>
			</div>
		</header>
	);
};
