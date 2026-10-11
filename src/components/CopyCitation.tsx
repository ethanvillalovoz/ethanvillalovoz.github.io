"use client";
import { useEffect, useRef, useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";
export default function CopyCitation({ citation, title }: { citation: string; title: string }) {
  const [status, setStatus] = useState({ text: "", id: 0 });
  const sequence = useRef(0);
  const [instant, setInstant] = useState(false);
  useEffect(() => () => { sequence.current++; }, []);
  useEffect(() => {
    if (!status.id || status.text !== "Copied") return;
    let remaining = 2500, started = performance.now();
    let timer: ReturnType<typeof setTimeout>;
    const resume = () => { if (document.hidden) return; started = performance.now(); timer = setTimeout(() => setStatus(current => ({ ...current, text: "" })), remaining); };
    const visibility = () => { clearTimeout(timer); if (document.hidden) remaining = Math.max(0, remaining - (performance.now() - started)); else resume(); };
    resume(); document.addEventListener("visibilitychange", visibility);
    return () => { clearTimeout(timer); document.removeEventListener("visibilitychange", visibility); };
  }, [status.id, status.text]);
  return <div className="citation-action">
    <button type="button" className="citation-copy" aria-label={`Copy BibTeX citation for ${title}`} data-instant={instant} data-copied={status.text === "Copied"} onClick={async event => {
      setInstant(event.detail === 0); const id = ++sequence.current;
      let text = "Copied"; try { await navigator.clipboard.writeText(citation); } catch { text = "Copy failed. Select the citation below to copy it."; }
      if (sequence.current === id) setStatus({ text, id });
    }}><span className="citation-idle"><FiCopy aria-hidden="true" />Copy citation</span><span className="citation-done" aria-hidden="true"><FiCheck />Copied</span></button>
    <span className="sr-only" role="status">{status.text}</span>
    {status.text.startsWith("Copy failed") && <div className="citation-fallback"><p>{status.text}</p><pre tabIndex={0}>{citation}</pre></div>}
  </div>;
}
