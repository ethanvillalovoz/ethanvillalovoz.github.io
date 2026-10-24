import AnimatedLabel from "./AnimatedLabel";
import { FiCode, FiGlobe, FiLink, FiVideo } from "react-icons/fi";
import { SiGithub, SiYoutube } from "react-icons/si";
import type { ResearchResource } from "@/data/research";
import { site } from "@/data/site";


const resourceOrder = ["Website", "Paper", "arXiv", "Code", "Video"];

function resourceAppearance(resource: ResearchResource) {
	const hostname = new URL(resource.href, site.url).hostname.replace(/^www\./, "");
	switch (resource.label) {
		case "Website": return { Icon: FiGlobe, brand: undefined };
		case "Paper":
		case "arXiv": return { Icon: null, brand: undefined };
		case "Code": return { Icon: hostname === "github.com" ? SiGithub : FiCode, brand: undefined };
		case "Video": return hostname === "youtube.com" || hostname === "youtu.be"
			? { Icon: SiYoutube, brand: "youtube" }
			: { Icon: FiVideo, brand: undefined };
		default: return { Icon: FiLink, brand: undefined };
	}
}

export default function PublicationResources({ resources, label, shortTitle }: { resources: ResearchResource[]; label: string; shortTitle: string }) {
	const rank = (resource: ResearchResource) => {
		const index = resourceOrder.indexOf(resource.label);
		return index < 0 ? resourceOrder.length : index;
	};
	return (
		<nav className="portfolio-work-resources" aria-label={label}>
			{[...resources].sort((a, b) => rank(a) - rank(b)).map((resource) => {
				const { Icon, brand } = resourceAppearance(resource);
				return (
					<a key={`${resource.label}-${resource.href}`} href={resource.href} target="_blank" rel="noopener noreferrer" className="portfolio-link" aria-label={resource.label === "Paper" ? `PDF: ${shortTitle}` : undefined}>
						{Icon && <Icon className="portfolio-resource-mark" data-brand={brand} aria-hidden="true" />}
						<AnimatedLabel arrow={false}>{resource.label === "Paper" ? "PDF" : resource.label}</AnimatedLabel>
					</a>
				);
			})}
		</nav>
	);
}
