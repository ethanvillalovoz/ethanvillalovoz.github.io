"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import Hint from "./Hint";

const subscribeToHydration = () => () => {};
const getClientHydrationSnapshot = () => true;
const getServerHydrationSnapshot = () => false;

export default function ThemeToggle() {
	const [instant, setInstant] = useState(false);
	const transition = useRef<ViewTransition | null>(null);
	const button = useRef<HTMLButtonElement>(null);
	const pendingTheme = useRef<string | null>(null);
	const cleanup = useRef<(() => void) | null>(null);
	const deadline = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
	const changeSequence = useRef(0);
	const { resolvedTheme, systemTheme, setTheme } = useTheme();
	const mounted = useSyncExternalStore(
		subscribeToHydration,
		getClientHydrationSnapshot,
		getServerHydrationSnapshot,
	);
	useEffect(() => {
		const stop = () => cleanup.current?.();
		// Root snapshots suppress hit testing. End the reveal before resolving a
		// snapshot-targeted click, then deliver it to the actual link or button.
		const onClick = (event: MouseEvent) => {
			if (!transition.current || event.target !== document.documentElement || event.detail === 0) return;
			const activeTransition = transition.current;
			stop();
			event.preventDefault();
			event.stopPropagation();
			// skipTransition releases the captured elements asynchronously. Waiting
			// for finished restores real hit testing without guessing at rectangles.
			void activeTransition.finished.then(() => {
				const control = document.elementFromPoint(event.clientX, event.clientY)?.closest<HTMLAnchorElement | HTMLButtonElement>("a[href], button:not(:disabled)");
				if (!control) return;
				if (event.button === 0) control.focus({ preventScroll: true });
				control.dispatchEvent(new MouseEvent(event.type, {
					bubbles: true, cancelable: true, view: window,
					clientX: event.clientX, clientY: event.clientY,
					button: event.button, buttons: event.buttons,
					ctrlKey: event.ctrlKey, metaKey: event.metaKey,
					shiftKey: event.shiftKey, altKey: event.altKey,
					detail: control === button.current ? 0 : event.detail,
				}));
			}, () => {});
		};
		window.addEventListener("click", onClick, true);
		window.addEventListener("auxclick", onClick, true);
		const onVisibility = () => { if (document.hidden) stop(); };
		const reduced = matchMedia("(prefers-reduced-motion: reduce)");
		document.addEventListener("visibilitychange", onVisibility);
		window.addEventListener("resize", stop);
		reduced.addEventListener("change", stop);
		return () => {
			stop();
			window.removeEventListener("click", onClick, true);
			window.removeEventListener("auxclick", onClick, true);
			document.removeEventListener("visibilitychange", onVisibility);
			window.removeEventListener("resize", stop);
			reduced.removeEventListener("change", stop);
		};
	}, []);
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
			ref={button}
			type="button"
			data-instant={instant}
			onClick={(event) => {
				const interrupted = transition.current !== null;
				const immediate = interrupted || event.detail === 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !document.startViewTransition;
				setInstant(immediate);
				const sequence = ++changeSequence.current;
				const nextTheme = (pendingTheme.current ?? resolvedTheme) === "dark" ? "light" : "dark";
				cleanup.current?.();
				pendingTheme.current = nextTheme;
				const updateTheme = () => {
					if (sequence === changeSequence.current) setTheme(nextTheme === systemTheme ? "system" : nextTheme);
				};
				if (immediate) {
					flushSync(updateTheme);
					pendingTheme.current = null;
					return;
				}
				const rect = event.currentTarget.getBoundingClientRect();
				const x = rect.left + rect.width / 2;
				const y = rect.top + rect.height / 2;
				const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
				const root = document.documentElement;
				// Set the geometry before capture, so the first rendered frame is clipped
				// at the icon too. CSS owns the reveal for the entire snapshot lifecycle.
				root.style.setProperty("--theme-reveal-x", `${x}px`);
				root.style.setProperty("--theme-reveal-y", `${y}px`);
				root.style.setProperty("--theme-reveal-radius", `${radius}px`);
				root.dataset.themeReveal = "true";
				const nextTransition = document.startViewTransition(() => flushSync(updateTheme));
				transition.current = nextTransition;
				const finish = () => {
					if (transition.current !== nextTransition) return;
					nextTransition.skipTransition();
					clearTimeout(deadline.current);
					transition.current = null;
					pendingTheme.current = null;
					cleanup.current = null;
					delete root.dataset.themeReveal;
					root.style.removeProperty("--theme-reveal-x");
					root.style.removeProperty("--theme-reveal-y");
					root.style.removeProperty("--theme-reveal-radius");
				};
				cleanup.current = finish;
				// A stalled or backgrounded browser snapshot must never cover the live page.
				deadline.current = setTimeout(() => { flushSync(updateTheme); finish(); }, 1000);
				void nextTransition.ready.catch(finish);
				void nextTransition.finished.then(finish, finish);
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
