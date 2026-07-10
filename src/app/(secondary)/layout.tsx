import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function SecondaryLayout({ children }: { children: ReactNode }) {
	return (
		<div className="secondary-site">
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}
