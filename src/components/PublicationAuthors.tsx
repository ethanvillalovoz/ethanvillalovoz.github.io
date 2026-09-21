import TextLink from "@/components/TextLink";
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
								<TextLink href={author.href}>{author.name}</TextLink>
							) : (
								author.name
							)}
						</strong>
					) : author.href ? (
						<TextLink href={author.href}>{author.name}</TextLink>
					) : (
						author.name
					)}
					{index < authors.length - 1 ? ", " : ""}
				</span>
			))}
		</p>
	);
}
