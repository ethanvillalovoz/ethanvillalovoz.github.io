import type { Metadata } from "next";
import Image from "next/image";
import { WorkCardVideo } from "@/components/WorkCardVideo";
import { absoluteUrl, site } from "@/data/site";

const projectDescription =
	"A Washington State University capstone for HackerEarth combining semantic retrieval, DBpedia knowledge-graph context, and LLM response generation.";

const repositoryUrl =
	"https://github.com/ethanvillalovoz/knowledge-graph-rag-assistant";
const demoUrl = "https://www.youtube.com/watch?v=YWdR3FAdq1o";
const reportPath = "/data/capstone/report.pdf";

export const metadata: Metadata = {
	title: "Knowledge Graph RAG Assistant",
	description: projectDescription,
	alternates: {
		canonical: "/rag/",
	},
	openGraph: {
		title: `Knowledge Graph RAG Assistant | ${site.name}`,
		description: projectDescription,
		url: `${site.url}/rag/`,
		siteName: site.name,
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "/images/projects/rag-poster.webp",
				width: 1280,
				height: 720,
				alt: "Knowledge Graph RAG retrieval workspace",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Knowledge Graph RAG Assistant | Ethan Villalovoz",
		description: projectDescription,
		creator: "@ethanvillalovoz",
		images: ["/images/projects/rag-poster.webp"],
	},
};

const team: readonly {
	name: string;
	url: string;
	id?: string;
}[] = [
	{
		name: "Molly Iverson",
		url: "https://www.linkedin.com/in/mollyiverson",
	},
	{
		name: "Ethan Villalovoz",
		url: `${site.url}/`,
		id: site.personId,
	},
	{
		name: "Chandler Juego",
		url: "https://www.linkedin.com/in/chandlerjuego/",
	},
	{
		name: "Adam Shtrikman",
		url: "https://www.linkedin.com/in/adamshtrikman/",
	},
] as const;

const projectJsonLd = {
	"@context": "https://schema.org",
	"@type": "SoftwareSourceCode",
	"@id": `${site.url}/rag/#software`,
	name: "Knowledge Graph RAG Assistant",
	description: projectDescription,
	url: `${site.url}/rag/`,
	codeRepository: repositoryUrl,
	image: absoluteUrl("/images/projects/rag-poster.webp"),
	dateCreated: "2025",
	programmingLanguage: ["Python", "TypeScript", "SPARQL"],
	runtimePlatform: ["Docker", "FastAPI", "React"],
	applicationCategory: "DeveloperApplication",
	creator: team.map((member) => ({
		"@type": "Person",
		...(member.id ? { "@id": member.id } : {}),
		name: member.name,
		url: member.url,
	})),
	maintainer: {
		"@type": "Person",
		"@id": site.personId,
		name: site.name,
		url: `${site.url}/`,
	},
	sponsor: {
		"@type": "Organization",
		name: "HackerEarth",
		url: "https://www.hackerearth.com/",
	},
	citation: absoluteUrl(reportPath),
};

const performanceRows = [
	["Natural-language processing", "33.40 ms"],
	["Knowledge graph", "1,367.73 ms"],
	["Vector search", "4,133.53 ms"],
	["Language model", "2,079.70 ms"],
	["End to end", "7,615.07 ms"],
] as const;

function TeamLinks() {
	return (
		<>
			{team.map((member, index) => (
				<span key={member.name}>
					{index > 0 && (index === team.length - 1 ? ", and " : ", ")}
					<a
						href={member.id ? "/" : member.url}
						target={member.id ? undefined : "_blank"}
						rel={member.id ? undefined : "noopener noreferrer"}
						className="portfolio-link"
					>
						{member.name}
					</a>
				</span>
			))}
		</>
	);
}

export default function RagProjectPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
			/>
			<main className="rag-main">
				<article className="rag-container">
					<header className="rag-hero work-page-fade">
						<p className="rag-project-meta">
							Washington State University &middot; HackerEarth &middot; Spring 2025
						</p>
						<h1>Knowledge Graph RAG Assistant</h1>
						<p className="rag-deck">
							A senior capstone that combined semantic retrieval, structured
							knowledge-graph context, and an LLM response layer in one
							question-answering pipeline.
						</p>
						<p className="rag-team-line">
							Built by <TeamLinks />.
						</p>
						<nav className="rag-resource-links" aria-label="Project resources">
							<a
								href={repositoryUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="portfolio-link"
							>
								GitHub
							</a>
							<a
								href={reportPath}
								target="_blank"
								rel="noopener noreferrer"
								className="portfolio-link"
							>
								Final report
							</a>
							<a
								href={demoUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="portfolio-link"
							>
								Demo video
							</a>
						</nav>
					</header>

					<figure
						className="rag-demo-figure work-page-fade"
						style={{ animationDelay: "80ms" }}
					>
						<div className="rag-demo-frame">
							<WorkCardVideo
								label="Knowledge Graph RAG Assistant exposing semantic and graph retrieval evidence"
								poster="/images/projects/rag-poster.webp"
								src="/images/projects/rag-demo.mp4"
								fit="contain"
							/>
						</div>
						<figcaption>
							The maintained public release uses a deterministic fixture so the
							retrieval trace can be inspected without credentials or large local
							artifacts.
						</figcaption>
					</figure>

					<dl
						className="rag-facts work-page-fade"
						style={{ animationDelay: "100ms" }}
					>
						<div>
							<dt>10,000</dt>
							<dd>Wikipedia articles indexed</dd>
						</div>
						<div>
							<dt>7.615 s</dt>
							<dd>Measured average response</dd>
						</div>
						<div>
							<dt>4</dt>
							<dd>Student engineers</dd>
						</div>
					</dl>

					<div className="rag-sections work-page-fade" style={{ animationDelay: "120ms" }}>
						<section className="rag-section">
							<h2>The project</h2>
							<div className="rag-section-body">
								<p>
									HackerEarth asked the team to explore whether dense retrieval and a
									knowledge graph could supply complementary context to a
									retrieval-augmented generation system. We built a React and FastAPI application
									that routed a question through language processing, DBpedia lookups,
									FAISS search, and answer synthesis.
								</p>
								<p>
									The retrieval corpus combined 10,000 Wikipedia articles with custom
									class-note PDFs. The final handoff included Docker and Docker Compose
									configuration, automated tests, GitHub Actions, and system
									documentation.
								</p>
							</div>
						</section>

						<section className="rag-section">
							<h2>What I built</h2>
							<div className="rag-section-body">
								<p>
									My contribution centered on retrieval: I implemented text embeddings
									with SentenceTransformers, built the FAISS vector-search path, and
									contributed to the documentation used for delivery and maintenance.
								</p>
								<p>
									The maintained public fork now packages a deterministic demo path and
									an evidence-forward interface, making the architecture reviewable even
									when the original API credentials and multi-gigabyte corpus are absent.
								</p>
							</div>
						</section>

						<section className="rag-section">
							<h2>System design</h2>
							<div className="rag-section-body">
								<p>
									The chat handler coordinated two retrieval branches. The
									knowledge-graph handler queried structured entity relationships, while the
									vector-search handler embedded the question and retrieved semantically
									similar passages. Their context converged at the language-model handler
									for final response generation.
								</p>
								<figure className="rag-figure">
									<a
										href="/data/capstone/figures/system-architecture.png"
										target="_blank"
										rel="noopener noreferrer"
										className="rag-figure-link"
										aria-label="Open the system architecture figure at full size"
									>
										<Image
											src="/data/capstone/figures/system-architecture.png"
											alt="Component diagram connecting the React interface to chat, NLP, knowledge-graph, vector-search, embeddings, PDF, dataset, and LLM handlers"
											width={1950}
											height={1390}
											quality={90}
											sizes="(min-width: 1024px) 720px, calc(100vw - 48px)"
											className="rag-figure-image"
										/>
									</a>
									<figcaption>
										System architecture from the team&apos;s final report.
									</figcaption>
								</figure>
							</div>
						</section>

						<section className="rag-section">
							<h2>Measured performance</h2>
							<div className="rag-section-body">
								<p>
									An early end-to-end query took roughly 45 seconds. A model change and
									pipeline optimizations brought observed responses into the 6–8 second
									range, with vector search remaining the dominant cost in the final
									measurement.
								</p>
								<div className="rag-table-wrap">
									<table className="rag-performance-table">
										<caption>
											Average of three runs for &ldquo;Who is Alan Turing?&rdquo;
										</caption>
										<thead>
											<tr>
												<th scope="col">Stage</th>
												<th scope="col">Average</th>
											</tr>
										</thead>
										<tbody>
											{performanceRows.map(([stage, duration]) => (
												<tr key={stage}>
													<th scope="row">{stage}</th>
													<td>{duration}</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
						</section>

						<section className="rag-section">
							<h2>Original prototype</h2>
							<div className="rag-section-body rag-prototype-grid">
								<div>
									<p>
										The submitted capstone used a compact chat interface focused on the
										generated answer. The maintained demo at the top of this page is a
										later presentation layer that exposes the retrieval trace and source
										context without changing the project&apos;s underlying story.
									</p>
								</div>
								<figure className="rag-prototype-figure">
									<Image
										src="/data/capstone/figures/original-prototype.webp"
										alt="Original RAG capstone chat interface answering a question about Albert Einstein"
										width={1200}
										height={1373}
										quality={90}
										sizes="(min-width: 760px) 300px, calc(100vw - 48px)"
										className="rag-prototype-image"
									/>
									<figcaption>Original interface recorded in the final report.</figcaption>
								</figure>
							</div>
						</section>

						<section className="rag-section">
							<h2>Limitations</h2>
							<div className="rag-section-body">
								<ul className="rag-limitations">
									<li>
										Response relevance was assessed primarily through manual and client
										testing rather than a formal retrieval benchmark.
									</li>
									<li>
										Entity extraction was less reliable for complex questions involving
										multiple entities or relationships.
									</li>
									<li>
										The complete system depended on DBpedia, an LLM API, and local corpus
										artifacts that are not bundled with the public repository.
									</li>
									<li>
										A 7.6-second average response remained noticeable for an interactive
										assistant and left room for retrieval and caching work.
									</li>
								</ul>
							</div>
						</section>

						<section className="rag-section rag-record-section">
							<h2>Project record</h2>
							<div className="rag-section-body">
								<dl className="rag-record-list">
									<div>
										<dt>Team</dt>
										<dd><TeamLinks /></dd>
									</div>
									<div>
										<dt>Client partner</dt>
										<dd>
											<a
												href="https://www.linkedin.com/in/vikas-aditya-22a2841/"
												target="_blank"
												rel="noopener noreferrer"
												className="portfolio-link"
											>
												Vikas Aditya
											</a>
											, HackerEarth
										</dd>
									</div>
									<div>
										<dt>Faculty mentor</dt>
										<dd>
											<a
												href="https://parteekbhatia.com/"
												target="_blank"
												rel="noopener noreferrer"
												className="portfolio-link"
											>
												Parteek Kumar
											</a>
										</dd>
									</div>
									<div>
										<dt>Delivery</dt>
										<dd>Docker, Docker Compose, PyTest, and GitHub Actions</dd>
									</div>
								</dl>
								<nav className="rag-bottom-links" aria-label="Project record resources">
									<a href={reportPath} target="_blank" rel="noopener noreferrer" className="portfolio-link">
										Read the final report
									</a>
									<a href={repositoryUrl} target="_blank" rel="noopener noreferrer" className="portfolio-link">
										View the repository
									</a>
								</nav>
							</div>
						</section>
					</div>
				</article>
			</main>
		</>
	);
}
