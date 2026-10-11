"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useRef, useState, useSyncExternalStore } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import Hint from "./Hint";

const subscribeToHydration = () => () => {};
const getClientHydrationSnapshot = () => true;
const getServerHydrationSnapshot = () => false;

export default function ThemeToggle() {
	const [instant, setInstant] = useState(false);
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
			data-instant={instant}
            onClick={(event) => {
                setInstant(event.detail === 0);
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
				const rect = event.currentTarget.getBoundingClientRect();
                const x = rect.left + rect.width / 2;
                const y = rect.top + rect.height / 2;
                const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
				const nextTransition = document.startViewTransition(() => {
					flushSync(updateTheme);
				});
				transition.current = nextTransition;
                void nextTransition.ready.then(() => {
                    if (sequence !== changeSequence.current) return;
                    document.documentElement.animate(
                        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
                        { duration: 340, easing: "cubic-bezier(0.22, 1, 0.36, 1)", pseudoElement: "::view-transition-new(root)" },
                    );
                }).catch(() => {});
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
