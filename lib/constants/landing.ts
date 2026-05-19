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

/**
 * JPEG quality for next/image — hero highest; sections lower to save bandwidth.
 */
export const IMAGE_QUALITY = {
	hero: 82,
	section: 72,
	gallery: 68,
	ctaBackdrop: 60,
	/** Thin header filmstrip — small decode cost */
	headerStrip: 58,
} as const;

/**
 * Product catalogue (`public/studio2/`) — sorted A→Z from Projects archive.
 * Tableware editorial PNGs (`public/tableware/`) — header filmstrip only.
 * Installations (`public/studio/`) — craft & CTA atmosphere.
 */
export const HEADER_FILMSTRIP = [
	"/tableware/tableware-03.png",
	"/tableware/tableware-04.png",
	"/tableware/tableware-05.png",
	"/tableware/tableware-06.png",
	"/tableware/tableware-07.png",
] as const;

/** Hero, craft, and CTA frames — catalogue + installations. */
export const STUDIO_FRAMES = {
	hero: "/studio2/studio2-16.jpg",
	craftWide: "/studio/studio-01.png",
	craftDetail: "/studio/studio-02.png",
	ctaAtmosphere: "/studio/studio-03.png",
} as const;

export type NavItem = { label: string; href: string };

export const PRIMARY_NAV: NavItem[] = [
	{ label: "Collection", href: "/projects" },
	{ label: "Craft", href: "#craft" },
	{ label: "Gallery", href: "#gallery" },
	{ label: "Contact", href: "/contact" },
];

export const FOOTER_NAV: NavItem[] = [
	{ label: "Collection", href: "/projects" },
	{ label: "Contact", href: "/contact" },
	{ label: "Visit", href: "#visit" },
];

export type ProductItem = {
	title: string;
	description: string;
	href: string;
	image: { src: string; alt: string; width: number; height: number };
};

/** Full studio catalogue — `public/studio2/studio2-NN.jpg` (see file header comment). */
export type CollectionPiece = {
	slug: string;
	title: string;
	description: string;
	image: { src: string; alt: string; width: number; height: number };
};

export const COLLECTION_ITEMS: CollectionPiece[] = [
	{
		slug: "bowl-set",
		title: "Bowl set",
		description:
			"Reduction-fired stoneware with copper red glaze — nested bowls scaled for everyday meals.",
		image: {
			src: "/studio2/studio2-01.jpg",
			alt: "Bowl set — reduction-fired stoneware, copper red glaze",
			width: 1218,
			height: 597,
		},
	},
	{
		slug: "casserole",
		title: "Casserole",
		description:
			"A single lidded vessel — cobalt and titanium notes, shaped for slow cooking and serving.",
		image: {
			src: "/studio2/studio2-02.jpg",
			alt: "Casserole — reduction-fired stoneware, titanium glaze",
			...STUDIO_PHOTO,
		},
	},
	{
		slug: "casserole-set",
		title: "Casserole set",
		description:
			"Cobalt oxide and titanium glaze — lidded pair for oven-to-table use.",
		image: {
			src: "/studio2/studio2-03.jpg",
			alt: "Casserole set — reduction-fired stoneware with cobalt oxide and titanium glaze",
			...STUDIO_PHOTO,
		},
	},
	{
		slug: "cereal-bowl",
		title: "Cereal bowl",
		description:
			"Copper red reduction ware — a shallow rim and steady footing for morning ritual.",
		image: {
			src: "/studio2/studio2-04.jpg",
			alt: "Cereal bowl — reduction-fired stoneware, copper red",
			...STUDIO_PHOTO,
		},
	},
	{
		slug: "evening-snack",
		title: "Evening snack set",
		description:
			"Oxidation-fired earthenware with carved matte glaze — pieces for small gatherings.",
		image: {
			src: "/studio2/studio2-05.jpg",
			alt: "Evening snack set — oxidation-fired earthenware, carved matt glaze",
			...STUDIO_PHOTO,
		},
	},
	{
		slug: "irish-coffee",
		title: "Irish coffee set",
		description:
			"Stoneware with copper oxide and titanium glaze — tall cups meant for layered drinks.",
		image: {
			src: "/studio2/studio2-06.jpg",
			alt: "Irish coffee set — stoneware with copper oxide and titanium glaze",
			...STUDIO_PHOTO,
		},
	},
	{
		slug: "jar",
		title: "Jar",
		description:
			"Lidded storage — earthy body glaze with a quiet contrast at the rim.",
		image: {
			src: "/studio2/studio2-07.jpg",
			alt: "Ceramic jar — reduction-fired stoneware with lid",
			...STUDIO_PHOTO,
		},
	},
	{
		slug: "milk-pot",
		title: "Milk pot",
		description:
			"A compact pourer — balanced handle and soft satin surface for the table.",
		image: {
			src: "/studio2/studio2-08.jpg",
			alt: "Milk pot — handmade stoneware pourer",
			...STUDIO_PHOTO,
		},
	},
	{
		slug: "miniature-pots",
		title: "Miniature pots",
		description:
			"Reduction-fired stoneware — cobalt blue and milky white at intimate scale.",
		image: {
			src: "/studio2/studio2-09.jpg",
			alt: "Miniature pots — reduction-fired stoneware, cobalt blue and milky white",
			...STUDIO_PHOTO,
		},
	},
	{
		slug: "mugs",
		title: "Mugs",
		description:
			"Rutile and copper red — generous handles and a glaze that ages beautifully in use.",
		image: {
			src: "/studio2/studio2-10.jpg",
			alt: "Handmade mugs — reduction-fired stoneware with rutile and copper red",
			...STUDIO_PHOTO,
		},
	},
	{
		slug: "nesting-bowls",
		title: "Nesting bowls",
		description:
			"Stacking set — consistent clay body with tonal variation across sizes.",
		image: {
			src: "/studio2/studio2-11.jpg",
			alt: "Nesting bowls — stoneware stack",
			...STUDIO_PHOTO,
		},
	},
	{
		slug: "salad-bowls",
		title: "Salad bowls",
		description:
			"Cobalt blue with honey glaze — wide rim for sharing salads and fruit.",
		image: {
			src: "/studio2/studio2-12.jpg",
			alt: "Salad bowls — stoneware, cobalt blue and honey glaze",
			...STUDIO_PHOTO,
		},
	},
	{
		slug: "table-vase-barium",
		title: "Table vase — barium",
		description:
			"Vertical form with barium glaze character — for stems and single blooms.",
		image: {
			src: "/studio2/studio2-13.jpg",
			alt: "Table vase — reduction-fired stoneware, barium glaze",
			...STUDIO_PHOTO,
		},
	},
	{
		slug: "table-vase-stony",
		title: "Table vase — stony",
		description:
			"Stony matte surface and grounded silhouette — calm beside dinnerware.",
		image: {
			src: "/studio2/studio2-14.jpg",
			alt: "Table vase — stoneware, stony matte glaze",
			width: 1944,
			height: 2592,
		},
	},
	{
		slug: "tea-light",
		title: "Tea light",
		description:
			"A small holder for candlelight — thin walls and a soft flame glow.",
		image: {
			src: "/studio2/studio2-15.jpg",
			alt: "Tea light holder — handmade stoneware",
			...STUDIO_PHOTO,
		},
	},
	{
		slug: "tea-snack-set",
		title: "Tea snack set",
		description:
			"Reduction-fired editorial set — cups and plates composed for quiet hospitality.",
		image: {
			src: "/studio2/studio2-16.jpg",
			alt: "Tea snack set — reduction-fired stoneware tableware",
			width: 3456,
			height: 5184,
		},
	},
	{
		slug: "twin-vase",
		title: "Twin vase",
		description:
			"Paired necks, shared base — a sculptural accent for the table or shelf.",
		image: {
			src: "/studio2/studio2-17.jpg",
			alt: "Twin vase — handmade stoneware vessel",
			...STUDIO_PHOTO,
		},
	},
];

const FEATURED_COLLECTION_SLUGS = [
	"bowl-set",
	"mugs",
	"salad-bowls",
	"casserole-set",
] as const;

/** Featured work on the homepage — links anchor into `/projects`. */
export const PRODUCTS: ProductItem[] = FEATURED_COLLECTION_SLUGS.map((slug) => {
	const item = COLLECTION_ITEMS.find((c) => c.slug === slug);
	if (!item) {
		throw new Error(`COLLECTION_ITEMS missing slug: ${slug}`);
	}
	return {
		title: item.title,
		description: item.description,
		href: `/projects#${slug}`,
		image: item.image,
	};
});

export type GalleryItem = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

/** Masonry — Quiet harvest series (`public/quiet-harvest/`). */
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
	alt: "Tea snack set — reduction-fired stoneware tableware, Rajlaxmi",
	width: 3456,
	height: 5184,
} as const;

export const CRAFTSMANSHIP_IMAGES = {
	wheel: {
		src: STUDIO_FRAMES.craftWide,
		alt: "Ceramic craftsmanship — vessels and tableware in the studio",
	},
	glaze: {
		src: STUDIO_FRAMES.craftDetail,
		alt: "Glazed ceramic tableware — studio photography",
	},
} as const;

export const CTA_BACKDROP = {
	src: STUDIO_FRAMES.ctaAtmosphere,
	width: 1122,
	height: 1040,
} as const;
