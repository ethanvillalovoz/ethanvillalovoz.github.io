"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { ResearchPublication } from "@/data/research";

export default function ResearchMedia({ publication, index }: { publication: ResearchPublication; index: number }) {
  const media = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = media.current;
    if (!element || matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    let animation: Animation | undefined;
    const observer = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      observer.disconnect();
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      // No hidden initial state: content stays visible without JS or observer support.
      animation = element.animate([
        { opacity: .55, clipPath: "inset(0 0 8% 0 round 10px)" },
        { opacity: 1, clipPath: "inset(0 0 0 0 round 10px)" },
      ], { duration: 320, easing: "cubic-bezier(0.23, 1, 0.32, 1)" });
    }, { threshold: .12 });
    const cancel = () => animation?.cancel();
    element.addEventListener("focusin", cancel);
    observer.observe(element);
    return () => { observer.disconnect(); cancel(); element.removeEventListener("focusin", cancel); };
  }, []);

  return (
    <div className="portfolio-work-media" ref={media}>
      <Image
        src={publication.image}
        alt={publication.imageAlt}
        width={800}
        height={500}
        quality={90}
        loading={index === 0 ? "eager" : "lazy"}
        sizes="(max-width: 691px) calc(100vw - 48px), 644px"
        className="portfolio-work-image"
      />
    </div>
  );
}
