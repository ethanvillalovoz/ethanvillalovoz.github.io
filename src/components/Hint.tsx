"use client";

import { cloneElement, useEffect, useId, useRef, useState, type ReactElement } from "react";

let warmUntil = 0;

/** Delayed pointer hints; immediate keyboard hints and handoff between controls. */
export default function Hint({ label, children, disabled = false }: {
  label: string;
  children: ReactElement<{ "aria-describedby"?: string }>;
  disabled?: boolean;
}) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [instant, setInstant] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const clear = () => { if (timer.current) clearTimeout(timer.current); };
  const close = () => {
    clear();
    if (open) warmUntil = Date.now() + 800;
    setOpen(false);
  };
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  return (
    <span className="portfolio-hint-anchor"
      onPointerEnter={(event) => {
        if (disabled || event.pointerType !== "mouse" || !matchMedia("(hover: hover)").matches) return;
        clear();
        const warm = Date.now() < warmUntil;
        setInstant(warm);
        timer.current = setTimeout(() => setOpen(true), warm ? 0 : 450);
      }}
      onPointerLeave={close}
      onFocusCapture={(event) => {
        if (!disabled && event.target.matches(":focus-visible")) {
          clear(); setInstant(true); setOpen(true);
        }
      }}
      onBlurCapture={close}
      onClickCapture={close}
      onKeyDown={(event) => { if (event.key === "Escape") close(); }}
    >
      {cloneElement(children, { "aria-describedby": !disabled && open ? id : undefined })}
      <span id={id} role="tooltip" className="portfolio-hint" data-open={open && !disabled} data-instant={instant} aria-hidden={!open || disabled}>{label}</span>
    </span>
  );
}
