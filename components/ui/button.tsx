import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const base =
	"inline-flex items-center justify-center rounded-full px-8 py-3.5 text-[10px] font-semibold uppercase tracking-[0.22em] transition-all duration-500 ease-luxury focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-terracotta/80 active:scale-[0.98]";

const variants = {
	primary:
		"border border-brand-terracotta bg-brand-terracotta text-black shadow-terracotta hover:border-brand-beige hover:bg-brand-beige hover:text-black",
	secondary:
		"border border-brand-line bg-brand-beige/80 text-black hover:border-black/30 hover:bg-brand-beige",
	ghostOnDark:
		"border border-black/20 bg-black/5 text-black hover:border-black/60 hover:bg-black/10 hover:text-black",
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
