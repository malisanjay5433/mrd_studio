import { SITE } from "@/lib/constants/landing";

type Props = {
	variant?: "dark" | "light";
	className?: string;
	size?: "sm" | "md" | "lg";
};

const textScale = {
	sm: "gap-2",
	md: "gap-2.5",
	lg: "gap-3",
};

const wordClass = {
	sm: "text-sm tracking-[0.08em] md:text-base md:tracking-[0.12em]",
	md: "text-base tracking-[0.1em] md:text-lg md:tracking-[0.14em]",
	lg: "text-lg tracking-[0.1em] md:text-2xl md:tracking-[0.12em]",
};

const subClass = {
	sm: "text-[8px] tracking-[0.32em] md:text-[9px]",
	md: "text-[9px] tracking-[0.32em] md:text-[10px]",
	lg: "text-[10px] tracking-[0.34em] md:text-xs",
};

const iconSize = {
	sm: "h-8 w-8 md:h-9 md:w-9",
	md: "h-10 w-10 md:h-11 md:w-11",
	lg: "h-14 w-14 md:h-16 md:w-16",
};

export function BrandMark({
	variant = "dark",
	className = "",
	size = "md",
}: Props) {
	const stroke = variant === "light" ? "#FFFFFF" : "#171717";
	const textMain =
		variant === "light" ? "text-brand-white" : "text-brand-charcoal";
	const textSub =
		variant === "light" ? "text-brand-sand" : "text-brand-clay";

	return (
		<div className={`flex flex-col items-start ${textScale[size]} ${className}`}>
			<svg
				viewBox="0 0 64 64"
				className={`shrink-0 ${iconSize[size]}`}
				aria-hidden
			>
				<title>{SITE.name} mark</title>
				<path
					d="M18 36c0-8 6.5-14 14-14s14 6 14 14v4c0 6-5.5 11-12 11h-4c-6.5 0-12-5-12-11v-4z"
					fill="none"
					stroke={stroke}
					strokeWidth="1.35"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M20 36h24"
					fill="none"
					stroke={stroke}
					strokeWidth="1.35"
					strokeLinecap="round"
				/>
				<path
					d="M12 38c2-6 8-10 14-10M52 38c-2-6-8-10-14-10"
					fill="none"
					stroke={stroke}
					strokeWidth="1.1"
					strokeLinecap="round"
					opacity="0.85"
				/>
				<path
					d="M14 44c3 4 8 6 13 6M50 44c-3 4-8 6-13 6"
					fill="none"
					stroke={stroke}
					strokeWidth="1"
					strokeLinecap="round"
					opacity="0.65"
				/>
			</svg>
			<div className="flex flex-col leading-none">
				<span
					className={`font-display font-medium ${wordClass[size]} ${textMain} max-w-[12rem] text-balance sm:max-w-none`}
				>
					{SITE.name}
				</span>
				<span
					className={`mt-2 font-semibold uppercase ${subClass[size]} ${textSub}`}
				>
					Studio
				</span>
			</div>
		</div>
	);
}
