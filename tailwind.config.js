const defaultTheme = require("tailwindcss/defaultTheme");

/** Minimal gallery palette — paper, ink, hairline, stone accent */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./lib/**/*.{js,ts,jsx,tsx}",
		"./mdx-components.tsx",
		"content/**/*.mdx",
	],

	theme: {
		extend: {
			colors: {
				brand: {
					white: "#F5F5F5",
					paper: "#1A1816",
					mist: "#222020",
					line: "rgba(18, 16, 16, 0.12)",
					muted: "#8A7B6D",
					ink: "#F5F5F5",
					stone: "#C8C1B5",
					sand: "#C8C1B5",
					beige: "#D8D1C5",
					clay: "#8A7B6D",
					terracotta: "#B86143",
					charcoal: "#121010",
					raised: "#1E1C1A",
					rule: "rgba(18, 16, 16, 0.1)",
				},
				heath: {
					ink: "#171717",
					muted: "#8C8A86",
					subtle: "#A8A6A1",
					paper: "#F9F8F6",
					canvas: "#111111",
					rule: "#E6E4DF",
				},
				earth: {
					cream: "#F9F8F6",
					beige: "#F1F0ED",
					sand: "#B5B1AA",
					clay: "#5A5854",
					terracotta: "#5A5854",
					burnt: "#454340",
				},
				terracotta: {
					DEFAULT: "#5A5854",
					muted: "#6E6C68",
					deep: "#454340",
					subtle: "rgba(90, 88, 84, 0.12)",
				},
				cream: "#F9F8F6",
				sand: "#B5B1AA",
				charcoal: "#111111",
				stone: "#5A5854",
			},
			fontFamily: {
				sans: ["var(--font-manrope)", ...defaultTheme.fontFamily.sans],
				display: ["var(--font-outfit)", ...defaultTheme.fontFamily.sans],
			},
			boxShadow: {
				soft: "0 4px 24px -8px rgba(0, 0, 0, 0.45)",
				lift: "0 8px 32px -12px rgba(0, 0, 0, 0.55)",
				glow: "0 0 0 1px rgba(245, 245, 245, 0.08)",
				terracotta: "0 4px 20px -4px rgba(184, 97, 67, 0.35)",
			},
			borderRadius: {
				luxury: "0.75rem",
			},
			transitionTimingFunction: {
				luxury: "cubic-bezier(0.22, 1, 0.36, 1)",
			},
			transitionDuration: {
				luxury: "500ms",
			},
			typography: {
				DEFAULT: {
					css: {
						"code::before": {
							content: '""',
						},
						"code::after": {
							content: '""',
						},
					},
				},
				quoteless: {
					css: {
						"blockquote p:first-of-type::before": { content: "none" },
						"blockquote p:first-of-type::after": { content: "none" },
					},
				},
			},
			backgroundImage: {
				"gradient-radial":
					"radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
				"noise-faint":
					"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.02'/%3E%3C/svg%3E\")",
			},
			keyframes: {
				"fade-up": {
					"0%": { opacity: "0", transform: "translateY(18px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"fade-in-slow": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
			},
			animation: {
				"fade-up": "fade-up 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards",
				"fade-in-slow": "fade-in-slow 1.2s ease-out forwards",
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("tailwindcss-debug-screens"),
	],
};
