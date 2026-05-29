import type { CollectionPiece } from "@/lib/constants/collection";
import { IMAGE_QUALITY } from "@/lib/constants/landing";
import { StaticImage } from "@/components/ui/static-image";

type CollectionGridProps = {
	items: CollectionPiece[];
};

export function CollectionGrid({ items }: CollectionGridProps) {
	return (
		<ul
			className="relative mt-10 grid list-none grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
			role="list"
		>
			{items.map((item) => (
				<li key={item.slug}>
						<article id={item.slug} className="scroll-mt-28">
							<div className="card-luxury">
								<div className="relative aspect-[4/5] bg-brand-sand/80">
									<StaticImage
										src={item.image.src}
										alt={item.image.alt}
										width={item.image.width}
										height={item.image.height}
										quality={IMAGE_QUALITY.section}
										className="h-full w-full object-contain object-center p-4"
										sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
									/>
								</div>
								<div className="border-t border-brand-line px-4 py-4">
									<h2 className="font-display text-sm font-medium tracking-tight text-black md:text-base">
										{item.title}
									</h2>
								</div>
							</div>
						</article>
				</li>
			))}
		</ul>
	);
}
