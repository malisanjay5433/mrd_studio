import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const base =
	"inline-flex items-center justify-center rounded-sm px-8 py-3.5 text-[10px] font-semibold uppercase tracking-[0.22em] transition-all duration-500 ease-luxury focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-terracotta/80";

const variants = {
	primary:
		"border border-brand-white/90 bg-brand-white text-brand-charcoal hover:border-brand-terracotta hover:bg-brand-terracotta hover:text-brand-white",
	secondary:
		"border border-brand-white/35 bg-transparent text-brand-white hover:border-brand-white hover:bg-brand-white/10",
	ghostOnDark:
		"border border-brand-white/35 bg-brand-white/8 text-brand-white hover:border-brand-white/55 hover:bg-brand-white/12",
} as const;

type Variant = keyof typeof variants;

type Props = {
	children: ReactNode;
	variant?: Variant;
	className?: string;
	href?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export function Button({
	children,
	variant = "primary",
	className = "",
	href,
	type = "button",
	...rest
}: Props) {
	const cls = `${base} ${variants[variant]} ${className}`.trim();
	if (href) {
		return (
			<Link href={href} className={cls} prefetch={false}>
				{children}
			</Link>
		);
	}
	return (
		<button type={type} className={cls} {...rest}>
			{children}
		</button>
	);
}
