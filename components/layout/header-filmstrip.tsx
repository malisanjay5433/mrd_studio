import Image from "next/image";
import { HEADER_FILMSTRIP, IMAGE_QUALITY } from "@/lib/constants/landing";

/**
 * Micro-gallery under nav — equal-width columns so the row always fills the viewport on mobile.
 */
export function HeaderFilmstrip() {
	const count = HEADER_FILMSTRIP.length;
	const colPct = Math.round(100 / count);

	return (
		<div
			className="grid w-full border-b border-brand-white/10 bg-brand-charcoal"
			style={{
				gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))`,
			}}
			aria-hidden
		>
			{HEADER_FILMSTRIP.map((src) => (
				<div
					key={src}
					className="relative h-11 min-h-[2.75rem] w-full min-w-0 overflow-hidden sm:h-12 md:h-14"
				>
					<Image
						src={src}
						alt=""
						fill
						quality={IMAGE_QUALITY.headerStrip}
						className="object-cover object-center"
						sizes={`${colPct}vw`}
					/>
					<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-charcoal/35 via-transparent to-brand-charcoal/20" />
				</div>
			))}
		</div>
	);
}
