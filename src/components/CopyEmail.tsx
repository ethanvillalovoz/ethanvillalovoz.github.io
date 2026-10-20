"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";
import Hint from "./Hint";

const email = "ethan.villalovoz@gmail.com";

export default function CopyEmail({ punctuation = true }: { punctuation?: boolean }) {
  const [feedback, setFeedback] = useState({ result: "", sequence: 0, instant: false });
  const [visible, setVisible] = useState(false);
  const sequence = useRef(0);
  useEffect(() => () => { sequence.current++; }, []);

  useEffect(() => {
    if (!feedback.sequence) return;
    let remaining = 2400;
    let started = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const resume = () => {
      if (remaining <= 0 || document.hidden) return;
      started = performance.now();
      timer = setTimeout(() => { remaining = 0; setVisible(false); }, remaining);
    };
    const visibility = () => {
      if (document.hidden) {
        clearTimeout(timer);
        if (started) remaining = Math.max(0, remaining - (performance.now() - started));
        started = 0;
      } else resume();
    };
    resume();
    document.addEventListener("visibilitychange", visibility);
    return () => { clearTimeout(timer); document.removeEventListener("visibilitychange", visibility); };
  }, [feedback.sequence]);

  const copy = async (event: MouseEvent<HTMLButtonElement>) => {
    const current = ++sequence.current;
    const instant = event.detail === 0;
    let result = "Copied";
    try { await navigator.clipboard.writeText(email); }
    catch { result = "Couldn’t copy. Select the address to copy it."; }
    if (current !== sequence.current) return;
    setFeedback({ result, sequence: current, instant });
    setVisible(true);
  };

  const copied = visible && feedback.result === "Copied";
  return <span className="portfolio-copy-email">
    <Hint label="Copy email address" disabled={visible}>
      <button type="button" className="portfolio-link portfolio-copy-button" onClick={copy}
        data-copied={copied} data-instant={feedback.instant} aria-label={`Copy ${email} to clipboard`}>
        <span className="portfolio-copy-address" aria-hidden="true"><span className="portfolio-link-text">{email}</span><FiCopy className="portfolio-copy-mark" /></span>
        <span className="portfolio-copy-success" aria-hidden="true"><FiCheck /> Email copied</span>
      </button>
    </Hint>{punctuation && "."}
    <span className="portfolio-copy-status" data-state={visible && !copied ? "failed" : "idle"} data-instant={feedback.instant} aria-hidden="true">
      {feedback.result !== "Copied" ? feedback.result : ""}
    </span>
    <span className="sr-only" role="status" aria-live="polite" aria-atomic="true">{visible ? feedback.result : ""}</span>
  </span>;
}
