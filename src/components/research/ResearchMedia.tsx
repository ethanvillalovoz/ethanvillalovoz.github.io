import Image from "next/image";
import type { ResearchPublication } from "@/data/research";

export default function ResearchMedia({ publication, index }: { publication: ResearchPublication; index: number }) {
  return (
    <div className="portfolio-work-media">
      <Image
        src={publication.image}
        alt={publication.imageAlt}
        width={800}
        height={500}
        unoptimized
        loading={index === 0 ? "eager" : "lazy"}
        sizes="(max-width: 691px) calc(100vw - 48px), 644px"
        className="portfolio-work-image"
      />
    </div>
  );
}
