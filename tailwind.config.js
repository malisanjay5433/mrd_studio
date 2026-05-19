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
					white: "#FFFFFF",
					paper: "#F9F8F6",
					mist: "#F1F0ED",
					line: "#E6E4DF",
					muted: "#8C8A86",
					ink: "#171717",
					stone: "#5A5854",
					sand: "#B5B1AA",
					beige: "#F9F8F6",
					clay: "#5A5854",
					sage: "#7A7D78",
					terracotta: "#5A5854",
					charcoal: "#111111",
					raised: "#FFFFFF",
					rule: "#E6E4DF",
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
				soft: "0 1px 3px rgba(17, 17, 17, 0.04), 0 8px 24px -12px rgba(17, 17, 17, 0.08)",
				lift: "0 2px 8px rgba(17, 17, 17, 0.06), 0 16px 40px -16px rgba(17, 17, 17, 0.1)",
				glow: "0 0 0 1px rgba(17, 17, 17, 0.06)",
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
