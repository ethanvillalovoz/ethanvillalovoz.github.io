"use client";

import { useEffect, useRef, type ReactNode } from "react";

const visitKey = "ethan-intro-seen";
let seenWithoutStorage = false;

export default function IntroArrival({ children }: { children: ReactNode }) {
  const header = useRef<HTMLElement>(null);
  const firstVisit = useRef<boolean | null>(null);
  useEffect(() => {
    // Keep the decision across Strict Mode's setup/cleanup cycle.
    if (firstVisit.current === null) {
      try {
        firstVisit.current = sessionStorage.getItem(visitKey) !== "1";
        sessionStorage.setItem(visitKey, "1");
      } catch { firstVisit.current = !seenWithoutStorage; }
      seenWithoutStorage = true;
    }
    if (header.current) header.current.dataset.entry = firstVisit.current ? "first-visit" : "return-visit";
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    if (!firstVisit.current || reduced.matches || !header.current) return;
    const animations = [...header.current.querySelectorAll<HTMLElement>(".portfolio-identity, .portfolio-profile-image, .portfolio-profile-links, .portfolio-intro-copy")].map((element) => element.animate(
      [{ opacity: 0, transform: "translateY(4px)" }, { opacity: 1, transform: "none" }],
      { duration: 220, delay: element.classList.contains("portfolio-intro-copy") ? 60 : element.classList.contains("portfolio-profile-links") ? 30 : 0, easing: "cubic-bezier(0.23, 1, 0.32, 1)", fill: "backwards" },
    ));
    const cancel = () => animations.forEach((animation) => animation.cancel());
    window.addEventListener("keydown", cancel);
    reduced.addEventListener("change", cancel);
    return () => { cancel(); window.removeEventListener("keydown", cancel); reduced.removeEventListener("change", cancel); };
  }, []);
  return <header ref={header} className="portfolio-intro">{children}</header>;
}
