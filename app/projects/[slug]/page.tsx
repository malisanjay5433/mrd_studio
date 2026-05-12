import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { getProjectViewCount } from "@/util/pageviews";

export const dynamic = "force-dynamic";

type Props = {
	params: Promise<{ slug: string }>;
};

export default async function PostPage({ params }: Props) {
	const { slug } = await params;
	const project = allProjects.find((project) => project.slug === slug);

	if (!project) {
		notFound();
	}

	const views = await getProjectViewCount(slug);

	return (
		<div className="min-h-screen bg-brand-charcoal">
			<Header project={project} views={views} />
			<ReportView slug={project.slug} />

			<article className="surface-light prose prose-neutral prose-quoteless mx-auto max-w-3xl px-4 py-12 prose-headings:font-display prose-headings:font-medium prose-headings:text-brand-charcoal prose-p:text-brand-clay prose-a:border-b prose-a:border-brand-terracotta prose-a:text-brand-terracotta prose-a:no-underline prose-strong:text-brand-charcoal prose-code:rounded prose-code:bg-brand-raised prose-code:px-1 prose-code:text-brand-terracotta hover:prose-a:text-brand-charcoal">
				<Mdx code={project.body.code} />
			</article>
		</div>
	);
}
