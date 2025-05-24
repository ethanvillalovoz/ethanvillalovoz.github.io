import type { Config } from "tailwindcss";

export default {
	darkMode: "class",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: "#9D2235", // WSU Crimson
				"primary-light": "#C94F5C", // Lighter Crimson
				"primary-dark": "#5E6A71", // WSU Gray
				card: "var(--card)",
			},
			borderRadius: {
				xl: "1.25rem",
				"2xl": "1.5rem",
				"3xl": "2rem",
			},
			boxShadow: {
				soft: "0 4px 24px 0 rgba(157, 34, 53, 0.1)", // subtle crimson shadow
			},
			transitionProperty: {
				spacing: "margin, padding",
			},
		},
	},
	plugins: [],
} satisfies Config;
