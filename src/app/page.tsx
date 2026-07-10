import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
	alternates: {
		canonical: "/",
	},
};

export default function HomePage() {
	return <HomePageClient />;
}
