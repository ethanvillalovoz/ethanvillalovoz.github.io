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
				// World Labs (Real) Palette
				primary: "#1A1A1A",         // Dark Charcoal (Buttons/Logo)
				"primary-light": "#8E8E9E", // Muted Slate/Lavender (Subheadings)
				"primary-dark": "#000000",  // Pure Black
				card: "var(--card)",
			},
			borderRadius: {
				xl: "1.25rem",
				"2xl": "1.5rem",
				"3xl": "2rem",
			},
			boxShadow: {
				soft: "0 4px 24px 0 rgba(0, 0, 0, 0.05)", // Very subtle shadow
			},
			transitionProperty: {
				spacing: "margin, padding",
			},
			fontFamily: {
				sans: ["Inter", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
				serif: ["Times New Roman", "Times", "serif"], // Added for that elegant look
			},
		},
	},
	plugins: [],
} satisfies Config;
