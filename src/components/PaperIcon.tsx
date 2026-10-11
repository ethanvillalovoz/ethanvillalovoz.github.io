export default function PaperIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11.5 2.5H5a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7" />
      <path className="paper-icon-fold" d="M11.5 2.5 16 7h-3.5a1 1 0 0 1-1-1Z" />
      <path d="M7 10h6M7 13h6" />
    </svg>
  );
}
