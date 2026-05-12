import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
	className?: string;
};

/** Inherits label color from `.surface-dark` / `.surface-light` on an ancestor. */
export function SectionLabel({ children, className = "" }: Props) {
	return <p className={`label-caps ${className}`}>{children}</p>;
}
