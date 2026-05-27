import { COLLECTION_2021_2025, type CollectionPiece } from "@/lib/constants/collection";

export const SITE = {
	artist: "Raajlakshmi",
	name: "Raajlakshmi",
	description:
		"Handcrafted ceramics and contemporary art by Raajlakshmi.",
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
} as const;

export const STUDIO_FRAMES = {
	hero: "/hero/hero-banner.png",
	ctaAtmosphere: "/quiet-harvest/quiet-harvest-11.png",
} as const;

export type NavItem = { label: string; href: string };

export const PRIMARY_NAV: NavItem[] = [
	{ label: "About me", href: "/#about" },
	{ label: "Collection", href: "/collection" },
	{ label: "Installation", href: "/installations" },
	{ label: "Contact", href: "/contact" },
];

export const FOOTER_NAV: NavItem[] = [
	{ label: "About me", href: "/#about" },
	{ label: "Collection", href: "/collection" },
	{ label: "2015–2020", href: "/collection/2015-2020" },
	{ label: "2021–2025", href: "/collection/2021-2025" },
	{ label: "Installation", href: "/installations" },
	{ label: "Contact", href: "/contact" },
];

/** @deprecated Use COLLECTION_2021_2025 — kept for legacy imports. */
export type { CollectionPiece };
export const COLLECTION_ITEMS: CollectionPiece[] = COLLECTION_2021_2025;

/** Homepage collection preview. */
export const COLLECTION_FEATURE = {
	description: "Sample description",
	href: "/collection",
	image: {
		src: "/tableware/tableware-01.png",
		alt: "Tableware editorial still — ceramics on linen",
		width: 1448,
		height: 1086,
	},
} as const;

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
		label: "Email",
		href: "mailto:connect@raajlakshmi.com",
		handle: "connect@raajlakshmi.com",
	},
];

export const HERO_IMAGE = {
	src: STUDIO_FRAMES.hero,
	alt: "Marbled ceramic spheres in sand — installation by Raajlakshmi",
	width: 1024,
	height: 949,
} as const;

export const CTA_BACKDROP = {
	src: STUDIO_FRAMES.ctaAtmosphere,
	width: 1183,
	height: 1330,
} as const;
