export const SITE = {
	name: "MRUD STUDIO",
	tagline: "Handcrafted ceramics for slow living",
	description:
		"Editorial studio ceramics — dinnerware, vessels, and kiln-fired objects with earthy glazes and quiet luxury.",
} as const;

/**
 * Layout ratio for full-frame JPEGs (originals vary; this stabilizes `next/image` boxes).
 */
export const STUDIO_PHOTO = {
	width: 4032,
	height: 3024,
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
 * Product catalogue stills (`public/studio2/`) — sorted A→Z from archive names:
 * 01 bowl set · 02 casserole · 03 casserole set · 04 cereal bowl · 05 evening snack ·
 * 06 Irish coffee · 07 jar · 08 milk pot · 09 miniature pots · 10 mugs ·
 * 11 nesting bowls · 12 salad bowls · 13 table vase (barium) · 14 table vase (stony) ·
 * 15 tea light · 16 tea snack set · 17 twin vase.
 *
 * Each `studio2-NN` path appears only once across hero / products / gallery / strip / CTA.
 */
export const HEADER_FILMSTRIP = [
	"/studio2/studio2-07.jpg",
	"/studio2/studio2-08.jpg",
	"/studio2/studio2-11.jpg",
	"/studio2/studio2-13.jpg",
	"/studio2/studio2-15.jpg",
] as const;

/**
 * Workshop / candid frames — original `public/studio/` set (not the catalogue zip).
 */
export const STUDIO_FRAMES = {
	/** Full-bleed hero — catalogue editorial (tea snack set). */
	hero: "/studio2/studio2-16.jpg",
	craftWide: "/studio/studio-08.jpg",
	craftDetail: "/studio/studio-27.jpg",
	ctaAtmosphere: "/studio2/studio2-17.jpg",
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
			...STUDIO_PHOTO,
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
			...STUDIO_PHOTO,
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
			...STUDIO_PHOTO,
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

/** Masonry — pear studies: six curated colour stories (`public/pears/`). */
export const GALLERY: GalleryItem[] = [
	{
		src: "/pears/pears-01.png",
		alt: "Pear study — warm cream glaze, sand linen and dried botanicals",
		width: 1402,
		height: 1122,
	},
	{
		src: "/pears/pears-04.png",
		alt: "Pear study — speckled sand ivory on stacked dark wood",
		width: 554,
		height: 692,
	},
	{
		src: "/pears/pears-03.png",
		alt: "Pear study — mottled sage green on a speckled plate with terracotta rim",
		width: 1402,
		height: 1122,
	},
	{
		src: "/pears/pears-02.png",
		alt: "Pear study — forest teal and moss glaze with sandy highlights",
		width: 1402,
		height: 1122,
	},
	{
		src: "/pears/pears-07.png",
		alt: "Pear study — olive and butter glaze on a dark wood pedestal",
		width: 1402,
		height: 1122,
	},
	{
		src: "/pears/pears-10.png",
		alt: "Pear study — moss and sand glaze on weathered wood",
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
	alt: "Tea snack set — reduction-fired stoneware tableware, MRUD STUDIO",
	...STUDIO_PHOTO,
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
	...STUDIO_PHOTO,
} as const;
