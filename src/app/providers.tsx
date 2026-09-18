"use client";

import { ThemeProvider } from "next-themes";
import SystemFavicon from "@/components/SystemFavicon";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			disableTransitionOnChange
			enableSystem
			storageKey="ethan-theme"
		>
			<SystemFavicon />
			{children}
		</ThemeProvider>
	);
}
