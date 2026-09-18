"use client";

import { useSyncExternalStore } from "react";

const query = "(prefers-color-scheme: dark)";
const getSystemSnapshot = () => window.matchMedia(query).matches;
const getServerSnapshot = () => false;

function subscribe(onChange: () => void) {
	const preference = window.matchMedia(query);
	preference.addEventListener("change", onChange);
	return () => preference.removeEventListener("change", onChange);
}

export default function SystemFavicon() {
	const isDark = useSyncExternalStore(subscribe, getSystemSnapshot, getServerSnapshot);
	const theme = isDark ? "dark" : "light";

	// React hoists this single owned link into <head>. A new key replaces the
	// icon on system changes without competing with Next's static metadata.
	// The server renders the light icon for crawlers and clients without JS.
	return (
		<link
			key={theme}
			rel="icon"
			type="image/png"
			sizes="96x96"
			href={`/images/identity/icon-${theme}-rounded-v3-96.png?v=1`}
		/>
	);
}
