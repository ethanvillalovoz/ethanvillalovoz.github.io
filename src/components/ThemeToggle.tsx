"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

const subscribeToHydration = () => () => {};
const getClientHydrationSnapshot = () => true;
const getServerHydrationSnapshot = () => false;

export default function ThemeToggle() {
	const { resolvedTheme, setTheme } = useTheme();
	const mounted = useSyncExternalStore(
		subscribeToHydration,
		getClientHydrationSnapshot,
		getServerHydrationSnapshot,
	);
	const isNight = resolvedTheme === "dark";
	const targetTheme = isNight ? "light" : "dark";
	const accessibleLabel = mounted
		? `Switch to ${targetTheme} theme`
		: "Toggle color theme";

	return (
		<button
			type="button"
			onClick={() => setTheme(targetTheme)}
			className="portfolio-theme-toggle"
			aria-label={accessibleLabel}
			title={accessibleLabel}
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
