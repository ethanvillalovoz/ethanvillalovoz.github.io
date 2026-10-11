"use client";

import { useState } from "react";

function parseInteger(value: string) {
  if (!/^-?\d+$/.test(value)) return null;
  const number = Number(value);
  return Number.isSafeInteger(number) ? number : null;
}

export default function UnitsDigitExample() {
  const [a, setA] = useState("14");
  const [b, setB] = useState("-15");
  const first = parseInteger(a);
  const second = parseInteger(b);
  const valid = first !== null && second !== null;
  const left = first === null ? null : Math.abs(first) % 10;
  const right = second === null ? null : Math.abs(second) % 10;

  return <div className="note-example">
    <div className="note-inputs">
      <label htmlFor="multiply-a">Integer a<input id="multiply-a" type="text" inputMode="text" spellCheck={false} value={a} onChange={(e) => setA(e.target.value)} aria-invalid={first === null} aria-describedby="multiply-help" /></label>
      <label htmlFor="multiply-b">Integer b<input id="multiply-b" type="text" inputMode="text" spellCheck={false} value={b} onChange={(e) => setB(e.target.value)} aria-invalid={second === null} aria-describedby="multiply-help" /></label>
    </div>
    <div className="note-equation" aria-live="polite" aria-atomic="true">
      {valid ? <><span>{left}</span><span className="note-operator">×</span><span>{right}</span><span className="note-operator">=</span><strong>{left! * right!}</strong></> : <span className="note-input-error">Use whole numbers between −9,007,199,254,740,991 and 9,007,199,254,740,991.</span>}
    </div>
    <p id="multiply-help" className="note-small">Change either number to see its units digit and the resulting product.</p>
    <pre className="note-code"><code><span className="note-code-keyword">function</span>{" multiply(a, b) {\n  return (Math.abs(a) % 10) * (Math.abs(b) % 10);\n}"}</code></pre>
  </div>;
}
