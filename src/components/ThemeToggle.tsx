"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
	const { resolvedTheme, setTheme } = useTheme();
	const isNight = resolvedTheme === "dark";

	return (
		<button
			type="button"
			onClick={() => setTheme(isNight ? "light" : "dark")}
			className="portfolio-theme-toggle"
			aria-label="Toggle color theme"
			title="Toggle color theme"
		>
			<Image
				src="/images/theme/sun.svg"
				alt=""
				width={21}
				height={21}
				priority
				className="portfolio-theme-icon-day"
			/>
			<Image
				src="/images/theme/moon.svg"
				alt=""
				width={24}
				height={25}
				priority
				className="portfolio-theme-icon-night"
			/>
		</button>
	);
}
