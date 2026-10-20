import { teachingExperiences } from "@/data/research";
import TextLink from "@/components/TextLink";
import OrganizationLink from "@/components/OrganizationLink";
import { FiArrowUpRight } from "react-icons/fi";
import { SiYoutube } from "react-icons/si";
import Image from "next/image";

const institutionLinks: Record<string, { href: string; iconSrc: string }> = {
	"Georgia Institute of Technology": {
		href: "https://www.gatech.edu/",
		iconSrc: "/images/organizations/gatech.ico",
	},
	"Washington State University": {
		href: "https://wsu.edu/",
		iconSrc: "/images/organizations/washington-state.svg",
	},
};

const teachingGroups = Array.from(new Set(teachingExperiences.map((entry) => entry.institution))).map((institution) => ({
	institution,
	experiences: teachingExperiences.filter((entry) => entry.institution === institution),
}));

export default function TeachingSection() {
	return (
		<section id="teaching" className="portfolio-section" aria-labelledby="teaching-heading">
			<h2 id="teaching-heading" className="portfolio-section-label">
				Teaching
			</h2>
			<div className="teaching-groups">
				{teachingGroups.map(({ institution, experiences }) => (
					<section className="teaching-institution" key={institution} aria-label={institution}>
						<h3 className="teaching-institution-name">
							<OrganizationLink {...institutionLinks[institution]}>{institution}</OrganizationLink>
						</h3>
						<ol className="teaching-list">
							{experiences.map((experience) => {
								const title = experience.tutorial?.title ?? "";
								const lastSpace = title.lastIndexOf(" ");
								return (
								<li key={`${experience.course}-${experience.term}`} className="teaching-row">
									<div className="teaching-role-heading">
										<h4 className="teaching-role">{experience.role}</h4>
										<p className="teaching-term">{experience.term}</p>
									</div>
									<p className="teaching-course">
										{experience.href ? (
											<TextLink href={experience.href}>{experience.course}</TextLink>
										) : experience.course}
									</p>
									{experience.tutorial && (
										<div className="teaching-tutorial">
											<a href={experience.tutorial.href} target="_blank" rel="noopener noreferrer"
												className="portfolio-link teaching-tutorial-preview"
												aria-label={`Watch tutorial: ${experience.tutorial.title} (${experience.tutorial.duration})`}>
												<span className="teaching-tutorial-poster">
													<Image src="/images/teaching/gaussian-quadratic-form.jpg" alt="" width={480} height={360} unoptimized className="teaching-tutorial-poster-image" />
													<span className="teaching-tutorial-play" aria-hidden="true">▶</span>
												</span>
												<SiYoutube className="portfolio-resource-mark" data-brand="youtube" aria-hidden="true" />
												<span className="teaching-tutorial-label">
													<span className="portfolio-link-text">{title.slice(0, lastSpace + 1)}</span>
													<span className="teaching-tutorial-ending">
														<span className="portfolio-link-text">{title.slice(lastSpace + 1)}</span>
														<FiArrowUpRight className="link-outbound-arrow" aria-hidden="true" />
														<span className="teaching-tutorial-duration">{experience.tutorial.duration}</span>
													</span>
												</span>
											</a>
										</div>
									)}
								</li>
								);
							})}
						</ol>
					</section>
				))}
			</div>
		</section>
	);
}
