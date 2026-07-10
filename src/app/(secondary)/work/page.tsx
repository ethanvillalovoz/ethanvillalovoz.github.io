import type { Metadata } from "next";
import Image from "next/image";
import { workItems, type WorkItem } from "@/data/work";

const workDescription = "Writing, research, and projects by Ethan Villalovoz.";

export const metadata: Metadata = {
	title: "Work",
	description: workDescription,
	alternates: {
		canonical: "/work/",
	},
	openGraph: {
		title: "Work | Ethan Villalovoz",
		description: workDescription,
		url: "https://ethanvillalovoz.com/work/",
		siteName: "Ethan Villalovoz",
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary",
		title: "Work | Ethan Villalovoz",
		description: workDescription,
		creator: "@ethanvillalovoz",
	},
};

function WorkCard({ item, index }: { item: WorkItem; index: number }) {
	return (
		<li
			className="work-card work-page-fade"
			style={{ animationDelay: `${100 + index * 70}ms` }}
		>
			<a
				href={item.href}
				target={item.openInNewTab === false ? undefined : "_blank"}
				rel={item.openInNewTab === false ? undefined : "noopener noreferrer"}
				className="work-card-link"
				aria-label={`Open ${item.title}`}
			>
				<span className="work-card-media">
					<Image
						src={item.image}
						alt={item.imageAlt}
						width={800}
						height={500}
						sizes="(min-width: 1024px) 23vw, (min-width: 640px) 48vw, 100vw"
						loading={index === 0 ? "eager" : "lazy"}
						unoptimized={item.image.endsWith(".svg")}
						className={`work-card-image${item.imageFit === "contain" ? " work-card-image-contain" : ""}`}
					/>
				</span>

				<div className="work-card-copy">
					<h2 className="work-card-title">
						<span className="work-card-title-link portfolio-link">
							{item.title}
						</span>
					</h2>
					<span className="work-card-meta">
						{item.date}, {item.kind}
					</span>
					<span className="work-card-description">{item.description}</span>
				</div>
			</a>
		</li>
	);
}

export default function WorkPage() {
	return (
		<main className="work-main">
			<div className="work-container">
				<header className="work-intro work-page-fade">
					<h1>Work</h1>
					<p>Writing, research, and projects.</p>
				</header>

				<ol className="work-grid">
					{workItems.map((item, index) => (
						<WorkCard key={item.title} item={item} index={index} />
					))}
				</ol>
			</div>
		</main>
	);
}
