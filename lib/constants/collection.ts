/** Collection eras, tableware 2015–2020, studio work 2021–2025, and sphere installations. */

export type CollectionPiece = {
	slug: string;
	title: string;
	description: string;
	image: { src: string; alt: string; width: number; height: number };
};

const TABLEWARE_PHOTO = { width: 1400, height: 1120 } as const;

/** Tableware 2015–2020 — `public/tableware/` (sorted archive names). */
export const COLLECTION_2015_2020: CollectionPiece[] = [
	{
		slug: "editorial-still",
		title: "Editorial still",
		description: "Studio composition — tableware lines in soft natural light.",
		image: {
			src: "/tableware/tableware-01.png",
			alt: "Tableware editorial still — ceramics on linen",
			width: 1448,
			height: 1086,
		},
	},
	{
		slug: "casserole",
		title: "Casserole",
		description: "Lidded stoneware vessel for oven-to-table serving.",
		image: {
			src: "/tableware/tableware-02.png",
			alt: "Casserole — handmade stoneware with lid",
			width: 1411,
			height: 1115,
		},
	},
	{
		slug: "green-bowls",
		title: "Green bowls",
		description: "Glazed bowl set — muted green tones for everyday meals.",
		image: {
			src: "/tableware/tableware-03.png",
			alt: "Green bowls — stoneware bowl set",
			width: 1404,
			height: 1120,
		},
	},
	{
		slug: "irish-coffee-set",
		title: "Irish coffee set",
		description: "Tall cups and saucers composed for layered drinks.",
		image: {
			src: "/tableware/tableware-04.png",
			alt: "Irish coffee set — stoneware cups and saucers",
			width: 1407,
			height: 1118,
		},
	},
	{
		slug: "jar",
		title: "Jar",
		description: "Lidded jar for pantry storage and table display.",
		image: {
			src: "/tableware/tableware-05.png",
			alt: "Ceramic jar — lidded stoneware storage",
			width: 1401,
			height: 1123,
		},
	},
	{
		slug: "red-set",
		title: "Red set",
		description: "Copper-red glazed tableware — cups, bowls, and plates.",
		image: {
			src: "/tableware/tableware-06.png",
			alt: "Red tableware set — copper red stoneware",
			width: 1413,
			height: 1113,
		},
	},
	{
		slug: "serving-set",
		title: "Serving set",
		description: "Serving pieces for shared meals — generous rims and steady bases.",
		image: {
			src: "/tableware/tableware-07.png",
			alt: "Serving set — stoneware serving pieces",
			width: 1409,
			height: 1116,
		},
	},
	{
		slug: "urchin-set",
		title: "Urchin set",
		description: "Textured forms inspired by sea urchins — sculptural table accents.",
		image: {
			src: "/tableware/tableware-08.png",
			alt: "Urchin set — textured stoneware tableware",
			width: 1402,
			height: 1122,
		},
	},
];

/** Quiet harvest 2021–2025 — `public/quiet-harvest-catalog/`. */
export const COLLECTION_2021_2025: CollectionPiece[] = [
	{
		slug: "quiet-harvest-01",
		title: "Quiet harvest · 1",
		description: "Quiet harvest series — studio ceramics 2021–2025.",
		image: {
			src: "/quiet-harvest-catalog/quiet-harvest-01.png",
			alt: "Quiet harvest — ceramic still life 1",
			width: 1402,
			height: 1122,
		},
	},
	{
		slug: "quiet-harvest-02",
		title: "Quiet harvest · 2",
		description: "Quiet harvest series — studio ceramics 2021–2025.",
		image: {
			src: "/quiet-harvest-catalog/quiet-harvest-02.png",
			alt: "Quiet harvest — ceramic still life 2",
			width: 1122,
			height: 1402,
		},
	},
	{
		slug: "quiet-harvest-03",
		title: "Quiet harvest · 3",
		description: "Quiet harvest series — studio ceramics 2021–2025.",
		image: {
			src: "/quiet-harvest-catalog/quiet-harvest-03.png",
			alt: "Quiet harvest — ceramic still life 3",
			width: 707,
			height: 532,
		},
	},
	{
		slug: "quiet-harvest-04",
		title: "Quiet harvest · 4",
		description: "Quiet harvest series — studio ceramics 2021–2025.",
		image: {
			src: "/quiet-harvest-catalog/quiet-harvest-04.png",
			alt: "Quiet harvest — ceramic still life 4",
			width: 705,
			height: 542,
		},
	},
	{
		slug: "quiet-harvest-05",
		title: "Quiet harvest · 5",
		description: "Quiet harvest series — studio ceramics 2021–2025.",
		image: {
			src: "/quiet-harvest-catalog/quiet-harvest-05.png",
			alt: "Quiet harvest — ceramic still life 5",
			width: 1402,
			height: 1122,
		},
	},
	{
		slug: "quiet-harvest-07",
		title: "Quiet harvest · 7",
		description: "Quiet harvest series — studio ceramics 2021–2025.",
		image: {
			src: "/quiet-harvest-catalog/quiet-harvest-07.png",
			alt: "Quiet harvest — ceramic still life 7",
			width: 554,
			height: 692,
		},
	},
	{
		slug: "quiet-harvest-08",
		title: "Quiet harvest · 8",
		description: "Quiet harvest series — studio ceramics 2021–2025.",
		image: {
			src: "/quiet-harvest-catalog/quiet-harvest-08.png",
			alt: "Quiet harvest — ceramic still life 8",
			width: 556,
			height: 696,
		},
	},
	{
		slug: "quiet-harvest-09",
		title: "Quiet harvest · 9",
		description: "Quiet harvest series — studio ceramics 2021–2025.",
		image: {
			src: "/quiet-harvest-catalog/quiet-harvest-09.png",
			alt: "Quiet harvest — ceramic still life 9",
			width: 640,
			height: 509,
		},
	},
	{
		slug: "quiet-harvest-10",
		title: "Quiet harvest · 10",
		description: "Quiet harvest series — studio ceramics 2021–2025.",
		image: {
			src: "/quiet-harvest-catalog/quiet-harvest-10.png",
			alt: "Quiet harvest — ceramic still life 10",
			width: 1402,
			height: 1122,
		},
	},
	{
		slug: "quiet-harvest-11",
		title: "Quiet harvest · 11",
		description: "Quiet harvest series — studio ceramics 2021–2025.",
		image: {
			src: "/quiet-harvest-catalog/quiet-harvest-11.png",
			alt: "Quiet harvest — ceramic still life 11",
			width: 1183,
			height: 1330,
		},
	},
	{
		slug: "quiet-harvest-13",
		title: "Quiet harvest · 13",
		description: "Quiet harvest series — studio ceramics 2021–2025.",
		image: {
			src: "/quiet-harvest-catalog/quiet-harvest-13.png",
			alt: "Quiet harvest — ceramic still life 13",
			width: 1402,
			height: 1122,
		},
	},
	{
		slug: "quiet-harvest-14",
		title: "Quiet harvest · 14",
		description: "Quiet harvest series — studio ceramics 2021–2025.",
		image: {
			src: "/quiet-harvest-catalog/quiet-harvest-14.png",
			alt: "Quiet harvest — ceramic still life 14",
			width: 1402,
			height: 1122,
		},
	},
	{
		slug: "quiet-harvest-16",
		title: "Quiet harvest · 16",
		description: "Quiet harvest series — studio ceramics 2021–2025.",
		image: {
			src: "/quiet-harvest-catalog/quiet-harvest-16.png",
			alt: "Quiet harvest — ceramic still life 16",
			width: 695,
			height: 537,
		},
	},
	{
		slug: "quiet-harvest-21",
		title: "Quiet harvest · 21",
		description: "Quiet harvest series — studio ceramics 2021–2025.",
		image: {
			src: "/quiet-harvest-catalog/quiet-harvest-21.jpg",
			alt: "Quiet harvest — ceramic still life 21",
			width: 397,
			height: 375,
		},
	},
	{
		slug: "quiet-harvest-22",
		title: "Quiet harvest · 22",
		description: "Quiet harvest series — studio ceramics 2021–2025.",
		image: {
			src: "/quiet-harvest-catalog/quiet-harvest-22.png",
			alt: "Quiet harvest — ceramic still life 22",
			width: 467,
			height: 561,
		},
	},
	{
		slug: "quiet-harvest-23",
		title: "Quiet harvest · 23",
		description: "Quiet harvest series — studio ceramics 2021–2025.",
		image: {
			src: "/quiet-harvest-catalog/quiet-harvest-23.jpg",
			alt: "Quiet harvest — ceramic still life 23",
			width: 467,
			height: 560,
		},
	},
];

export const COLLECTION_ERAS = [
	{
		slug: "2015-2020",
		title: "2015–2020",
		subtitle: "Tableware",
		description:
			"Early tableware lines — reduction-fired stoneware, editorial sets, and glaze studies from the first studio years.",
		href: "/collection/2015-2020",
		cover: COLLECTION_2015_2020[6].image,
		count: COLLECTION_2015_2020.length,
	},
	{
		slug: "2021-2025",
		title: "2021–2025",
		subtitle: "Studio catalogue",
		description:
			"Dinnerware, vessels, and kiln-fired objects — the full studio catalogue with copper red, cobalt, and titanium glazes.",
		href: "/collection/2021-2025",
		cover: COLLECTION_2021_2025[0].image,
		count: COLLECTION_2021_2025.length,
	},
] as const;

/** Installation photography — `public/installations/`. */
export const INSTALLATION_IMAGES: CollectionPiece["image"][] = [
	{
		src: "/installations/installation-01.png",
		alt: "Installation — sculptural ceramics in situ",
		width: 1122,
		height: 1402,
	},
	{
		src: "/installations/installation-02.png",
		alt: "Installation — stoneware spheres and vessels",
		width: 1023,
		height: 1537,
	},
	{
		src: "/installations/installation-03.png",
		alt: "Installation — ceramic forms on plinth",
		width: 1122,
		height: 1040,
	},
];

/** @deprecated Use INSTALLATION_IMAGES */
export const SPHERE_IMAGES = INSTALLATION_IMAGES;

/** Homepage installation preview — all installation images. */
export const FEATURED_INSTALLATIONS = INSTALLATION_IMAGES;

/** @deprecated Use FEATURED_INSTALLATIONS */
export const FEATURED_SPHERES = FEATURED_INSTALLATIONS;
