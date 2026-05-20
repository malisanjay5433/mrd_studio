import type { Metadata } from "next";
import { SITE } from "@/lib/constants/landing";

export const metadata: Metadata = {
	title: "Gallery",
	description: `Gallery — ${SITE.description}`,
};

export default function GalleryLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
