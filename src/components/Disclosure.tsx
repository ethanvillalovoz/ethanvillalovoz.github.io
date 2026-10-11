"use client";
import { useId, useRef, useState, type ReactNode } from "react";
import { FiChevronDown } from "react-icons/fi";
export default function Disclosure({ label, children }: { label: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [instant, setInstant] = useState(false);
  const id = useId();
  const trigger = useRef<HTMLButtonElement>(null);
  return <div className="publication-disclosure" data-open={open} data-instant={instant}>
    <button ref={trigger} type="button" className="disclosure-trigger" aria-expanded={open} aria-controls={id} onClick={event => { setInstant(event.detail === 0); setOpen(!open); }}><span>{label}</span><FiChevronDown aria-hidden="true" /></button>
    <div id={id} className="disclosure-grid" aria-hidden={!open} inert={!open} onKeyDown={event => { if (event.key === "Escape") { setInstant(true); setOpen(false); trigger.current?.focus(); } }}>
      <div className="disclosure-clip"><div className="disclosure-content">{children}</div></div>
    </div>
  </div>;
}
