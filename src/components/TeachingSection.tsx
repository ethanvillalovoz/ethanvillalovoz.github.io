import { teachingExperiences } from "@/data/research";
import TextLink from "@/components/TextLink";
import OrganizationLink from "@/components/OrganizationLink";

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
		<section id="teaching" className="portfolio-section portfolio-fade" style={{ animationDelay: "500ms" }} aria-labelledby="teaching-heading">
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
							{experiences.map((experience) => (
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
								</li>
							))}
						</ol>
					</section>
				))}
			</div>
		</section>
	);
}
