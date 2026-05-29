import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const base =
	"inline-flex items-center justify-center rounded-full px-8 py-3.5 text-[10px] font-semibold uppercase tracking-[0.22em] transition-all duration-500 ease-luxury focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-terracotta/80 active:scale-[0.98]";

const variants = {
	primary:
		"border border-brand-terracotta bg-brand-terracotta text-brand-white shadow-terracotta hover:border-black hover:bg-black hover:text-brand-white",
	secondary:
		"border border-brand-line bg-brand-sand/80 text-black hover:border-brand-terracotta/40 hover:bg-brand-sand",
	ghostOnDark:
		"border border-brand-terracotta/30 bg-transparent text-black hover:border-brand-terracotta hover:bg-brand-terracotta/10 hover:text-brand-terracotta",
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
