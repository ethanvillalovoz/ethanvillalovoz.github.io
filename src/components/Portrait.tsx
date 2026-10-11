"use client";

import Image from "next/image";
import portrait from "../../public/images/EthanVillalovozPic-optimized.jpg";
import { useEffect, useRef } from "react";

export default function Portrait() {
  const image = useRef<HTMLImageElement>(null);
  const motion = useRef({ x: 0, y: 0, vx: 0, vy: 0, tx: 0, ty: 0, frame: 0, time: 0 });
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const reset = () => { cancelAnimationFrame(motion.current.frame); motion.current.frame = 0; if (image.current) image.current.style.transform = ""; };
    reduced.addEventListener("change", reset);
    return () => { reset(); reduced.removeEventListener("change", reset); };
  }, []);
  const animate = (now: number) => {
    const m = motion.current;
    const dt = Math.min((now - (m.time || now - 16)) / 1000, .032); m.time = now;
    for (const axis of ["x", "y"] as const) {
      const velocity = axis === "x" ? "vx" : "vy";
      const target = axis === "x" ? "tx" : "ty";
      m[velocity] += ((m[target] - m[axis]) * 240 - m[velocity] * 24) * dt;
      m[axis] += m[velocity] * dt;
    }
    if (image.current) image.current.style.transform = `rotateX(${m.x}deg) rotateY(${m.y}deg)`;
    if (Math.abs(m.tx - m.x) + Math.abs(m.ty - m.y) + Math.abs(m.vx) + Math.abs(m.vy) > .015) m.frame = requestAnimationFrame(animate);
    else { m.frame = 0; m.time = 0; }
  };
  const start = () => { if (!motion.current.frame) motion.current.frame = requestAnimationFrame(animate); };
  return <span className="portfolio-portrait" onPointerMove={(event) => {
    if (event.pointerType !== "mouse" || !matchMedia("(hover: hover) and (pointer: fine)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = event.currentTarget.getBoundingClientRect();
    motion.current.tx = -((event.clientY - r.top) / r.height - .5) * 12;
    motion.current.ty = ((event.clientX - r.left) / r.width - .5) * 12; start();
  }} onPointerLeave={() => { motion.current.tx = 0; motion.current.ty = 0; start(); }}>
    <Image ref={image} src={portrait} placeholder="blur" alt="Portrait of Ethan Villalovoz" width={112} height={112} sizes="(max-width: 599px) 64px, 72px" quality={90} priority className="portfolio-profile-image" />
  </span>;
}
