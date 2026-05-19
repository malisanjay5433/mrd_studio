import Image, { type ImageProps } from "next/image";

type StaticImageProps = ImageProps & {
	/** When true, image fills its positioned parent (same as next/image fill). */
	fill?: boolean;
};

/**
 * Catalogue / installation still — no hover zoom, no drag, no pinch-zoom on the image.
 */
export function StaticImage({ className = "", draggable = false, ...props }: StaticImageProps) {
	return (
		<Image
			{...props}
			draggable={draggable}
			className={`image-static select-none ${className}`.trim()}
		/>
	);
}
