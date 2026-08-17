import type { ResearchAuthor } from "@/data/research";

export default function PublicationAuthors({
	authors,
	className,
}: {
	authors: ResearchAuthor[];
	className: string;
}) {
	return (
		<p className={className}>
			{authors.map((author, index) => (
				<span key={author.name}>
					{author.isEthan ? (
						<strong>
							{author.href ? (
								<a
									href={author.href}
									target="_blank"
									rel="noopener noreferrer"
									className="portfolio-link"
								>
									{author.name}
								</a>
							) : (
								author.name
							)}
						</strong>
					) : author.href ? (
						<a
							href={author.href}
							target="_blank"
							rel="noopener noreferrer"
							className="portfolio-link"
						>
							{author.name}
						</a>
					) : (
						author.name
					)}
					{index < authors.length - 1 ? ", " : ""}
				</span>
			))}
		</p>
	);
}
