type Props = {
	className?: string;
	opacity?: "subtle" | "medium";
};

const opacityMap = {
	subtle: "opacity-[0.14]",
	medium: "opacity-[0.24]",
};

/** Matte film grain — pointer-events none for accessibility. */
export function GrainOverlay({
	className = "",
	opacity = "subtle",
}: Props) {
	return (
		<div
			className={`pointer-events-none absolute inset-0 bg-noise-faint mix-blend-multiply ${opacityMap[opacity]} ${className}`}
			aria-hidden
		/>
	);
}
