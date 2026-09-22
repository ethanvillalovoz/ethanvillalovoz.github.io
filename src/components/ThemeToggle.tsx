"use client";

import Image from "next/image";
import { useRef, useSyncExternalStore } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";

const subscribeToHydration = () => () => {};
const getClientHydrationSnapshot = () => true;
const getServerHydrationSnapshot = () => false;

export default function ThemeToggle() {
	const transition = useRef<ViewTransition | null>(null);
	const pendingTheme = useRef<string | null>(null);
	const changeSequence = useRef(0);
	const { resolvedTheme, systemTheme, setTheme } = useTheme();
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
			onClick={(event) => {
				const sequence = ++changeSequence.current;
				const nextTheme = (pendingTheme.current ?? resolvedTheme) === "dark" ? "light" : "dark";
				pendingTheme.current = nextTheme;
				transition.current?.skipTransition();
				const updateTheme = () => {
					if (sequence === changeSequence.current) setTheme(nextTheme === systemTheme ? "system" : nextTheme);
				};
				if (event.detail === 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !document.startViewTransition) {
					updateTheme();
					pendingTheme.current = null;
					return;
				}
				// Snapshot the two appearances so text and layout stay fixed during the fade.
				const nextTransition = document.startViewTransition(() => {
					flushSync(updateTheme);
				});
				transition.current = nextTransition;
				void nextTransition.finished.catch(() => {}).finally(() => {
					if (transition.current === nextTransition) {
						transition.current = null;
						pendingTheme.current = null;
					}
				});
			}}
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
