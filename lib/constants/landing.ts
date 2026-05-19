import {
	COLLECTION_2015_2020,
	COLLECTION_2021_2025,
	type CollectionPiece,
} from "@/lib/constants/collection";

export const SITE = {
	name: "Rajlaxmi",
	tagline: "Handcrafted ceramics for slow living",
	description:
		"Editorial studio ceramics — dinnerware, vessels, and kiln-fired objects with earthy glazes and quiet luxury.",
} as const;

/** Default aspect for catalogue stills when a piece omits explicit dimensions. */
export const STUDIO_PHOTO = {
	width: 5184,
	height: 3456,
} as const;

export const IMAGE_QUALITY = {
	hero: 82,
	section: 72,
	gallery: 68,
	ctaBackdrop: 60,
	headerStrip: 58,
} as const;

/** Header filmstrip — quiet harvest editorial frames. */
export const HEADER_FILMSTRIP = [
	"/quiet-harvest/quiet-harvest-05.png",
	"/quiet-harvest/quiet-harvest-10.png",
	"/quiet-harvest/quiet-harvest-12.png",
	"/quiet-harvest/quiet-harvest-18.png",
	"/quiet-harvest/quiet-harvest-22.png",
] as const;

export const STUDIO_FRAMES = {
	hero: "/tableware/tableware-07.png",
	ctaAtmosphere: "/quiet-harvest/quiet-harvest-11.png",
} as const;

export type NavItem = { label: string; href: string };

export const PRIMARY_NAV: NavItem[] = [
	{ label: "Collection", href: "/collection" },
	{ label: "Installation", href: "/installations" },
	{ label: "Gallery", href: "#gallery" },
	{ label: "Contact", href: "/contact" },
];

export const FOOTER_NAV: NavItem[] = [
	{ label: "Collection", href: "/collection" },
	{ label: "2015–2020", href: "/collection/2015-2020" },
	{ label: "2021–2025", href: "/collection/2021-2025" },
	{ label: "Installation", href: "/installations" },
	{ label: "Contact", href: "/contact" },
];

export const FOOTER_LEGAL = {
	copyright:
		"All images, artwork, and written content on this site are © Rajlaxmi Sonawane. Reproduction, distribution, or use without prior written permission is prohibited.",
	disclaimer:
		"Glaze colours and dimensions may vary slightly from photographs. Commissions are subject to kiln availability and agreed timelines.",
} as const;

export type ProductItem = {
	title: string;
	description: string;
	href: string;
	image: { src: string; alt: string; width: number; height: number };
};

/** @deprecated Use COLLECTION_2021_2025 — kept for legacy imports. */
export type { CollectionPiece };
export const COLLECTION_ITEMS: CollectionPiece[] = COLLECTION_2021_2025;

const FEATURED_TABLEWARE_SLUGS = [
	"serving-set",
	"irish-coffee-set",
	"red-set",
	"casserole",
] as const;

/** Homepage featured — tableware 2015–2020. */
export const PRODUCTS: ProductItem[] = FEATURED_TABLEWARE_SLUGS.map((slug) => {
	const item = COLLECTION_2015_2020.find((c) => c.slug === slug);
	if (!item) {
		throw new Error(`COLLECTION_2015_2020 missing slug: ${slug}`);
	}
	return {
		title: item.title,
		description: item.description,
		href: `/collection/2015-2020#${slug}`,
		image: item.image,
	};
});

export type GalleryItem = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

export const GALLERY: GalleryItem[] = [
	{
		src: "/quiet-harvest/quiet-harvest-01.png",
		alt: "Quiet harvest — warm cream glaze on sand linen with dried botanicals",
		width: 1402,
		height: 1122,
	},
	{
		src: "/quiet-harvest/quiet-harvest-07.png",
		alt: "Quiet harvest — speckled ivory vessel on stacked dark wood",
		width: 554,
		height: 692,
	},
	{
		src: "/quiet-harvest/quiet-harvest-03.png",
		alt: "Quiet harvest — sage green glaze on a speckled plate with terracotta rim",
		width: 707,
		height: 532,
	},
	{
		src: "/quiet-harvest/quiet-harvest-02.png",
		alt: "Quiet harvest — forest teal and moss glaze with sandy highlights",
		width: 1122,
		height: 1402,
	},
	{
		src: "/quiet-harvest/quiet-harvest-10.png",
		alt: "Quiet harvest — olive and butter glaze on a dark wood pedestal",
		width: 1402,
		height: 1122,
	},
	{
		src: "/quiet-harvest/quiet-harvest-16.png",
		alt: "Quiet harvest — moss and sand glaze on weathered wood",
		width: 695,
		height: 537,
	},
];

export type SocialLink = {
	label: string;
	href: string;
	handle: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
	{
		label: "Instagram",
		href: "https://instagram.com/mrud.studio",
		handle: "@mrud.studio",
	},
	{
		label: "Email",
		href: "mailto:hello@example.com",
		handle: "hello@example.com",
	},
];

export const HERO_IMAGE = {
	src: STUDIO_FRAMES.hero,
	alt: "Serving set — stoneware tableware, Rajlaxmi",
	width: 1409,
	height: 1116,
} as const;

export const CTA_BACKDROP = {
	src: STUDIO_FRAMES.ctaAtmosphere,
	width: 1183,
	height: 1330,
} as const;
