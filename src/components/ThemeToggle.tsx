"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useRef, useSyncExternalStore } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import Hint from "./Hint";

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
		<>
		<meta name="theme-color" media="(prefers-color-scheme: light)" content={mounted && isNight ? "#171717" : "#fdfdfc"} />
		<meta name="theme-color" media="(prefers-color-scheme: dark)" content={mounted && !isNight ? "#fdfdfc" : "#171717"} />
		<Hint label={accessibleLabel}>
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
		>
			<FiSun className="portfolio-theme-icon-day" aria-hidden="true" />
			<FiMoon className="portfolio-theme-icon-night" aria-hidden="true" />
		</button>
		</Hint>
		</>
	);
}
