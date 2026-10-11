"use client";
import Image from "next/image";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const steps = [
  { title: "Choose a candidate", text: "Bayesian optimization selects a candidate embedding using expected improvement. Its surrogate model learns from earlier attempts and their test feedback.", box: [150, 210, 650, 475] },
  { title: "Turn it into a prompt", text: "The auxiliary language model combines the candidate with the initial prompt and fixed instruction embeddings to produce a readable prompt.", box: [1385, 650, 400, 180] },
  { title: "Generate the code", text: "The base language model receives that prompt and generates code for the task.", box: [1405, 210, 365, 272] },
  { title: "Evaluate and update", text: "The generated code runs against the task’s tests. That feedback updates the surrogate model and informs the next candidate.", box: [864, 26, 390, 230] },
];
export default function MethodWalkthrough() {
  const [step, setStep] = useState(0);
  const [instant, setInstant] = useState(false);
  return <section className="method-walkthrough" aria-label="BODE-GEN method walkthrough" data-instant={instant}>
    <div className="method-figure">
      <Image src="/images/research-details/bode-gen-method.png" width={2046} height={885} sizes="(max-width: 691px) calc(100vw - 48px), 644px" alt="Original BODE-GEN diagram: optimization selects embeddings, an auxiliary model constructs a prompt, the base model generates code, and test evaluation feeds back into optimization." />
      <svg viewBox="0 0 2046 885" aria-hidden="true">{steps.map((item, index) => <rect key={item.title} x={item.box[0]} y={item.box[1]} width={item.box[2]} height={item.box[3]} rx="24" className="method-highlight" data-active={index === step} vectorEffect="non-scaling-stroke" />)}</svg>
    </div>
    <div className="method-controls">
      <span aria-hidden="true">{step + 1} / {steps.length}</span>
      <button type="button" aria-label="Previous method step" disabled={step === 0} onClick={e => { setInstant(e.detail === 0); setStep(step - 1); }}><FiArrowLeft aria-hidden="true" /></button>
      <button type="button" aria-label="Next method step" disabled={step === steps.length - 1} onClick={e => { setInstant(e.detail === 0); setStep(step + 1); }}><FiArrowRight aria-hidden="true" /></button>
    </div>
    <div className="method-explanations" aria-live="polite" aria-atomic="true">
      {steps.map((item, index) => <div className="method-explanation" key={item.title} data-active={index === step} aria-hidden={index !== step}><h4>{item.title}</h4><p>{item.text}</p></div>)}
    </div>
    <p className="research-source">Original <a href="https://arxiv.org/html/2512.15076v1#S1.F1" target="_blank" rel="noopener noreferrer">Figure 1</a>, with highlights explaining §3.2. The highlights illustrate the sequence; they do not show a running experiment.</p>
  </section>;
}
