const defaultTheme = require("tailwindcss/defaultTheme");

/** Rajlaxmi brand sheet — white, sand, beige, clay, terracotta, charcoal */
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
					sand: "#C9C1B5",
					beige: "#E8E1D4",
					clay: "#7A6B5F",
					terracotta: "#BA5F45",
					charcoal: "#1A1816",
					raised: "#222020",
					rule: "#2E2B28",
				},
				/** Legacy aliases — map to brand for gradual migration */
				heath: {
					ink: "#1A1816",
					muted: "#7A6B5F",
					subtle: "#9A9085",
					paper: "#E8E1D4",
					canvas: "#1A1816",
					rule: "#2E2B28",
				},
				earth: {
					cream: "#E8E1D4",
					beige: "#E8E1D4",
					sand: "#C9C1B5",
					clay: "#7A6B5F",
					terracotta: "#BA5F45",
					burnt: "#8F4A36",
				},
				terracotta: {
					DEFAULT: "#BA5F45",
					muted: "#9E5340",
					deep: "#7D3F2F",
					subtle: "rgba(186, 95, 69, 0.22)",
				},
				cream: "#E8E1D4",
				sand: "#C9C1B5",
				charcoal: "#1A1816",
				stone: "#7A6B5F",
			},
			fontFamily: {
				sans: ["var(--font-manrope)", ...defaultTheme.fontFamily.sans],
				display: ["var(--font-outfit)", ...defaultTheme.fontFamily.sans],
			},
			boxShadow: {
				soft: "0 4px 28px -8px rgba(0, 0, 0, 0.4)",
				lift: "0 24px 56px -24px rgba(0, 0, 0, 0.55)",
				glow: "0 0 0 1px rgba(255, 255, 255, 0.06), 0 12px 40px -16px rgba(0, 0, 0, 0.5)",
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
					"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
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
