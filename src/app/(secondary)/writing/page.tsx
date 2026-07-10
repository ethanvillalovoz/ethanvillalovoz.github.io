import type { Metadata } from "next";
import Link from "next/link";
import { writingPosts } from "@/data/writing";

const writingDescription = "Technical notes and research writeups by Ethan Villalovoz.";

export const metadata: Metadata = {
	title: "Writing",
	description: writingDescription,
	alternates: {
		canonical: "/writing/",
	},
	openGraph: {
		title: "Writing | Ethan Villalovoz",
		description: writingDescription,
		url: "https://ethanvillalovoz.com/writing/",
		siteName: "Ethan Villalovoz",
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary",
		title: "Writing | Ethan Villalovoz",
		description: writingDescription,
		creator: "@ethanvillalovoz",
	},
};

export default function WritingPage() {
	return (
		<main className="writing-main">
			<div className="writing-index-container">
				<header className="work-intro work-page-fade">
					<h1>Writing</h1>
					<p>Technical notes and research writeups.</p>
				</header>

				<ol className="writing-list">
					{writingPosts.map((post, index) => (
						<li
							key={post.href}
							className="writing-entry work-page-fade"
							style={{ animationDelay: `${160 + index * 70}ms` }}
						>
							<Link href={post.href} className="writing-entry-link">
								<h2 className="writing-entry-title">
									<span className="writing-entry-title-link portfolio-link">
										{post.title}
									</span>{" "}
									<time dateTime={post.dateTime}>({post.date})</time>
								</h2>
								<p>{post.summary}</p>
							</Link>
						</li>
					))}
				</ol>
			</div>
		</main>
	);
}
