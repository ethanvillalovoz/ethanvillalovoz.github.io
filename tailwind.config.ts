import type { Config } from "tailwindcss";

const waymoTeal = {
	50: "#e0fcf8",
	100: "#b3f6ec",
	200: "#80f0e0",
	300: "#4debd4",
	400: "#1ae6c8",
	500: "#00BFAE", // Waymo teal
	600: "#009e8f",
	700: "#007e71",
	800: "#005e53",
	900: "#003e36",
};

const waymoBlue = {
	50: "#e3f0fa",
	100: "#b3d6f2",
	200: "#80bceb",
	300: "#4da2e3",
	400: "#1a88dc",
	500: "#003366", // Waymo blue
	600: "#002a55",
	700: "#002144",
	800: "#001733",
	900: "#000d22",
};

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
				primary: waymoTeal[500],
				"primary-light": waymoTeal[300],
				"primary-dark": waymoBlue[500],
				teal: waymoTeal,
				blue: waymoBlue,
			},
			borderRadius: {
				xl: "1.25rem",
				"2xl": "1.5rem",
				"3xl": "2rem",
			},
			boxShadow: {
				soft: "0 4px 24px 0 rgba(0, 191, 174, 0.1)",
			},
			transitionProperty: {
				spacing: "margin, padding",
			},
		},
	},
	plugins: [],
} satisfies Config;
