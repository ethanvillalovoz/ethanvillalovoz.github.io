import { FiArrowUpRight } from "react-icons/fi";

export default function AnimatedLabel({ children, arrow = true }: { children: string; arrow?: boolean }) {
  return <><span className="portfolio-link-text">{children}</span>{arrow && <FiArrowUpRight className="link-outbound-arrow" aria-hidden="true" />}</>;
}
