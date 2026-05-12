import { Redis } from "@upstash/redis";

export function isUpstashConfigured(): boolean {
	return Boolean(
		process.env.UPSTASH_REDIS_REST_URL &&
		process.env.UPSTASH_REDIS_REST_TOKEN,
	);
}

export async function getProjectViewCounts(
	slugs: string[],
): Promise<Record<string, number>> {
	const empty = Object.fromEntries(slugs.map((s) => [s, 0])) as Record<
		string,
		number
	>;
	if (!isUpstashConfigured() || slugs.length === 0) {
		return empty;
	}
	const redis = Redis.fromEnv();
	const values = await redis.mget<number[]>(
		...slugs.map((s) => ["pageviews", "projects", s].join(":")),
	);
	return slugs.reduce((acc, slug, i) => {
		acc[slug] = values[i] ?? 0;
		return acc;
	}, empty);
}

export async function getProjectViewCount(slug: string): Promise<number> {
	if (!isUpstashConfigured()) {
		return 0;
	}
	const redis = Redis.fromEnv();
	return (
		(await redis.get<number>(["pageviews", "projects", slug].join(":"))) ?? 0
	);
}
