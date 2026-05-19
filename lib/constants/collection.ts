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

const STUDIO_PHOTO = { width: 5184, height: 3456 } as const;

/** Studio catalogue 2021–2025 — `public/studio2/`. */
export const COLLECTION_2021_2025: CollectionPiece[] = [
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
		image: { src: "/studio2/studio2-02.jpg", alt: "Casserole — reduction-fired stoneware, titanium glaze", ...STUDIO_PHOTO },
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
		image: { src: "/studio2/studio2-04.jpg", alt: "Cereal bowl — reduction-fired stoneware, copper red", ...STUDIO_PHOTO },
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
		image: { src: "/studio2/studio2-07.jpg", alt: "Ceramic jar — reduction-fired stoneware with lid", ...STUDIO_PHOTO },
	},
	{
		slug: "milk-pot",
		title: "Milk pot",
		description:
			"A compact pourer — balanced handle and soft satin surface for the table.",
		image: { src: "/studio2/studio2-08.jpg", alt: "Milk pot — handmade stoneware pourer", ...STUDIO_PHOTO },
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
		image: { src: "/studio2/studio2-11.jpg", alt: "Nesting bowls — stoneware stack", ...STUDIO_PHOTO },
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
		image: { src: "/studio2/studio2-15.jpg", alt: "Tea light holder — handmade stoneware", ...STUDIO_PHOTO },
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
		image: { src: "/studio2/studio2-17.jpg", alt: "Twin vase — handmade stoneware vessel", ...STUDIO_PHOTO },
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
		cover: COLLECTION_2021_2025[15].image,
		count: COLLECTION_2021_2025.length,
	},
] as const;

const SPHERE_COUNT = 58;

/** Sphere installation studies — `public/spheres/` from Projects archive. */
export const SPHERE_IMAGES: CollectionPiece["image"][] = Array.from(
	{ length: SPHERE_COUNT },
	(_, i) => {
		const n = String(i + 1).padStart(2, "0");
		return {
			src: `/spheres/sphere-${n}.jpg`,
			alt: `Sphere installation — sculptural stoneware study ${i + 1}`,
			width: STUDIO_PHOTO.width,
			height: STUDIO_PHOTO.height,
		};
	},
);

/** Homepage installation preview — curated sphere indices. */
export const FEATURED_SPHERE_INDICES = [5, 11, 18, 24, 31, 40] as const;

export const FEATURED_SPHERES = FEATURED_SPHERE_INDICES.map((i) => ({
	...SPHERE_IMAGES[i - 1],
}));
