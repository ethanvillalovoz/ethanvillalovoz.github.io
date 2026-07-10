import type { Metadata } from "next";
import Image from "next/image";
import { workItems, type WorkItem } from "@/data/work";

export const metadata: Metadata = {
	title: "Work",
	description: "Writing, research, and projects by Ethan Villalovoz.",
	openGraph: {
		title: "Work | Ethan Villalovoz",
		description: "Writing, research, and projects by Ethan Villalovoz.",
		url: "https://ethanvillalovoz.com/work/",
	},
};

function WorkCard({ item, index }: { item: WorkItem; index: number }) {
	const linkProps = {
		target: "_blank",
		rel: "noopener noreferrer",
	};

	return (
		<li
			className="work-card work-page-fade"
			style={{ animationDelay: `${100 + index * 70}ms` }}
		>
			<a
				href={item.href}
				{...linkProps}
				className="work-card-media"
				aria-label={`Open ${item.title}`}
			>
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
			</a>

			<div className="work-card-copy">
				<h2 className="work-card-title">
					<a href={item.href} {...linkProps} className="work-card-title-link maddie-link">
						{item.title}
					</a>
				</h2>
				<p className="work-card-meta">
					{item.date}, {item.kind}
				</p>
				<p className="work-card-description">{item.description}</p>
			</div>
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
