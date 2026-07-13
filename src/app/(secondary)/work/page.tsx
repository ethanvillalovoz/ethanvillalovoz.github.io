import type { Metadata } from "next";
import Image from "next/image";
import { WorkCardVideo } from "@/components/WorkCardVideo";
import { absoluteUrl, personReference, site } from "@/data/site";
import { workItems, type WorkItem } from "@/data/work";

const workDescription =
	"Robotics research, autonomous-driving tools, AI agent projects, and technical writing by Ethan Villalovoz.";

export const metadata: Metadata = {
	title: "Work",
	description: workDescription,
	alternates: {
		canonical: "/work/",
	},
	openGraph: {
		title: `Work | ${site.name}`,
		description: workDescription,
		url: `${site.url}/work/`,
		siteName: site.name,
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

const workType = {
	Writing: "TechArticle",
	Research: "ScholarlyArticle",
	Project: "SoftwareSourceCode",
} as const;

const workCollectionJsonLd = {
	"@context": "https://schema.org",
	"@type": "CollectionPage",
	"@id": `${site.url}/work/#collection`,
	url: `${site.url}/work/`,
	name: `Work | ${site.name}`,
	description: workDescription,
	author: personReference,
	mainEntity: {
		"@type": "ItemList",
		itemListOrder: "https://schema.org/ItemListOrderDescending",
		numberOfItems: workItems.length,
		itemListElement: workItems.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			url: absoluteUrl(item.href),
			item: {
				"@type": workType[item.kind],
				name: item.title,
				url: absoluteUrl(item.href),
				description: item.description,
				image: absoluteUrl(item.image),
				author: personReference,
			},
		})),
	},
};

function WorkCard({ item, index }: { item: WorkItem; index: number }) {
	return (
		<li
			className="work-card work-page-fade"
			style={{ animationDelay: `${60 + index * 35}ms` }}
		>
			<a
				href={item.href}
				target={item.openInNewTab === false ? undefined : "_blank"}
				rel={item.openInNewTab === false ? undefined : "noopener noreferrer"}
				className="work-card-link"
				aria-label={`Open ${item.title}`}
			>
				<span className="work-card-media">
					{item.imageVariant === "prompt-stack" ? (
						<span className="work-card-prompt-stack">
							<span className="work-card-prompt-panel">
								<Image
									src={item.image}
									alt={item.imageAlt}
									width={1000}
									height={270}
									quality={90}
									sizes="(min-width: 1024px) 46vw, (min-width: 640px) 96vw, 200vw"
									loading="eager"
									className="work-card-prompt-image work-card-prompt-image-original"
								/>
							</span>
							<span className="work-card-prompt-panel">
								<Image
									src={item.image}
									alt="BODE-GEN optimized prompt with explicit examples and edge cases"
									width={1000}
									height={270}
									quality={90}
									sizes="(min-width: 1024px) 46vw, (min-width: 640px) 96vw, 200vw"
									loading="eager"
									className="work-card-prompt-image work-card-prompt-image-optimized"
								/>
							</span>
						</span>
					) : item.video ? (
						<WorkCardVideo
							fit={item.imageFit}
							label={item.imageAlt}
							poster={item.image}
							src={item.video}
						/>
					) : (
						<Image
							src={item.image}
							alt={item.imageAlt}
							width={800}
							height={500}
							quality={90}
							sizes="(min-width: 1024px) 23vw, (min-width: 640px) 48vw, 100vw"
							{...(index === 0
								? { preload: true }
								: { loading: index === 1 ? "eager" : "lazy" })}
							unoptimized={item.unoptimized ?? item.image.endsWith(".svg")}
							className={`work-card-image${item.imageFit === "contain" ? " work-card-image-contain" : ""}`}
						/>
					)}
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
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(workCollectionJsonLd) }}
			/>
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
		</>
	);
}
