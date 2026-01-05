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
				background: "rgb(var(--background) / <alpha-value>)",
				foreground: "rgb(var(--foreground) / <alpha-value>)",
				// Apple Style Palette
				primary: "rgb(var(--primary) / <alpha-value>)",
				"primary-foreground": "rgb(var(--primary-foreground) / <alpha-value>)",
				"primary-light": "rgb(var(--primary-light) / <alpha-value>)",
				"primary-dark": "rgb(var(--primary-dark) / <alpha-value>)",
				card: "rgb(var(--card) / <alpha-value>)",
			},
			borderRadius: {
				xl: "1.25rem",
				"2xl": "1.5rem",
				"3xl": "2rem",
			},
			boxShadow: {
				soft: "0 8px 30px rgba(0, 0, 0, 0.04)", // Apple-like soft shadow
				glass: "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
			},
			transitionProperty: {
				spacing: "margin, padding",
			},
			fontFamily: {
				sans: [
					"-apple-system",
					"BlinkMacSystemFont",
					"SF Pro Display",
					"Inter",
					"Segoe UI",
					"Roboto",
					"Helvetica",
					"Arial",
					"sans-serif",
				],
				serif: [
					"-apple-system",
					"BlinkMacSystemFont",
					"SF Pro Display",
					"Inter",
					"sans-serif",
				], // Override serif to use sans for consistency
			},
		},
	},
	plugins: [],
} satisfies Config;
