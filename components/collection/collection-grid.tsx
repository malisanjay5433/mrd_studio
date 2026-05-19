import type { CollectionPiece } from "@/lib/constants/collection";
import { IMAGE_QUALITY } from "@/lib/constants/landing";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { StaticImage } from "@/components/ui/static-image";

type CollectionGridProps = {
	items: CollectionPiece[];
};

export function CollectionGrid({ items }: CollectionGridProps) {
	return (
		<ul
			className="relative mt-14 grid list-none gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10"
			role="list"
		>
			{items.map((item, i) => (
				<li key={item.slug}>
					<MotionReveal delay={(i % 3) * 0.05}>
						<article id={item.slug} className="scroll-mt-28">
							<div className="overflow-hidden border border-brand-line bg-brand-white">
								<div className="relative aspect-[4/5] bg-brand-paper">
									<StaticImage
										src={item.image.src}
										alt={item.image.alt}
										width={item.image.width}
										height={item.image.height}
										quality={IMAGE_QUALITY.section}
										className="h-full w-full object-contain object-center p-6"
										sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
									/>
								</div>
								<div className="border-t border-brand-line px-5 py-6">
									<h2 className="font-display text-lg font-medium tracking-tight text-brand-ink">
										{item.title}
									</h2>
									<p className="body-editorial mt-3 text-sm text-brand-muted">
										{item.description}
									</p>
								</div>
							</div>
						</article>
					</MotionReveal>
				</li>
			))}
		</ul>
	);
}
