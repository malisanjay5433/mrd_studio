import { PropsWithChildren } from "react";

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: any): any {
	return {
		h1: ({ children }: PropsWithChildren) => (
			<h1 className="font-display mt-2 text-3xl font-medium tracking-tight text-black sm:text-4xl md:text-center">
				{children}
			</h1>
		),
		h2: ({ children }: PropsWithChildren) => (
			<h2 className="text-black">{children}</h2>
		),
		...components,
	};
}
