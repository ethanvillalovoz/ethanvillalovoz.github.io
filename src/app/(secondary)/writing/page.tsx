import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, personReference, site } from "@/data/site";
import { writingPosts } from "@/data/writing";

const writingDescription =
	"Technical writing by Ethan Villalovoz on Bayesian optimization, LLM evaluation, robot learning, and AI agents.";

export const metadata: Metadata = {
	title: "Writing",
	description: writingDescription,
	alternates: {
		canonical: "/writing/",
	},
	openGraph: {
		title: `Writing | ${site.name}`,
		description: writingDescription,
		url: `${site.url}/writing/`,
		siteName: site.name,
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

const writingJsonLd = {
	"@context": "https://schema.org",
	"@type": "Blog",
	"@id": `${site.url}/writing/#blog`,
	url: `${site.url}/writing/`,
	name: `Writing | ${site.name}`,
	description: writingDescription,
	author: personReference,
	blogPost: writingPosts.map((post) => ({
		"@type": "TechArticle",
		headline: post.title,
		url: absoluteUrl(post.href),
		description: post.summary,
		datePublished: post.dateTime,
		image: absoluteUrl(post.image),
		author: personReference,
	})),
};

export default function WritingPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(writingJsonLd) }}
			/>
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
								style={{ animationDelay: `${70 + index * 40}ms` }}
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
		</>
	);
}
