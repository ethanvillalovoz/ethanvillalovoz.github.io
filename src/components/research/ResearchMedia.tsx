"use client";

import { useEffect, useId, useRef, useState, type MouseEvent, type PointerEvent } from "react";
import Image from "next/image";
import { FiX } from "react-icons/fi";
import type { ResearchPublication } from "@/data/research";

function isOutsideDialog(event: MouseEvent<HTMLDialogElement> | PointerEvent<HTMLDialogElement>) {
  const bounds = event.currentTarget.getBoundingClientRect();
  return event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
}

export default function ResearchMedia({ publication, index }: { publication: ResearchPublication; index: number }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const restoreScrollPadding = useRef<(() => void) | null>(null);
  const startedOnBackdrop = useRef(false);
  const figureId = useId();
  const [keyboardInteraction, setKeyboardInteraction] = useState(false);

  useEffect(() => () => restoreScrollPadding.current?.(), []);

  return (
    <>
      <button
        type="button"
        className="portfolio-work-media portfolio-figure-trigger"
        aria-label={`Enlarge ${publication.shortTitle} figure`}
        aria-haspopup="dialog"
        aria-controls={figureId}
        title="Enlarge figure"
        onClick={(event) => {
          const dialog = dialogRef.current;
          if (!dialog || dialog.open) return;

          restoreScrollPadding.current?.();
          const root = document.documentElement;
          const property = "--figure-scroll-lock-padding";
          const previousValue = root.style.getPropertyValue(property);
          const previousPriority = root.style.getPropertyPriority(property);
          const scrollbarWidth = Math.max(0, window.innerWidth - root.getBoundingClientRect().width);

          // Measure before showModal hides the scrollbar; CSS applies this only while open.
          root.style.setProperty(property, `calc(${getComputedStyle(root).paddingRight} + ${scrollbarWidth}px)`);
          restoreScrollPadding.current = () => {
            if (previousValue) {
              root.style.setProperty(property, previousValue, previousPriority);
            } else {
              root.style.removeProperty(property);
            }
            restoreScrollPadding.current = null;
          };

          startedOnBackdrop.current = false;
          setKeyboardInteraction(event.detail === 0);
          dialog.showModal();
        }}
      >
        <Image
          src={publication.image}
          alt={publication.imageAlt}
          width={800}
          height={500}
          unoptimized
          loading={index === 0 ? "eager" : "lazy"}
          sizes="(max-width: 691px) calc(100vw - 48px), 180px"
          className="portfolio-work-image"
        />
      </button>
      <dialog
        ref={dialogRef}
        id={figureId}
        className="portfolio-figure-dialog"
        aria-labelledby={`${figureId}-title`}
        data-keyboard={keyboardInteraction}
        onClose={(event) => {
          if (!event.currentTarget.open) restoreScrollPadding.current?.();
        }}
        onKeyDown={() => setKeyboardInteraction(true)}
        onPointerDown={(event) => {
          setKeyboardInteraction(false);
          startedOnBackdrop.current = event.target === event.currentTarget && isOutsideDialog(event);
        }}
        onClick={(event) => {
          if (startedOnBackdrop.current && event.target === event.currentTarget && isOutsideDialog(event)) {
            event.currentTarget.close();
          }
          startedOnBackdrop.current = false;
        }}
      >
        <div className="portfolio-figure-header">
          <h2 id={`${figureId}-title`}>{publication.imageTitle}</h2>
          <button
            type="button"
            className="portfolio-figure-control"
            aria-label="Close enlarged figure"
            onClick={() => dialogRef.current?.close()}
          >
            <FiX aria-hidden="true" />
          </button>
        </div>
        <div className="portfolio-figure-canvas">
          <Image
            src={publication.image}
            alt={publication.imageAlt}
            width={800}
            height={500}
            unoptimized
            loading="lazy"
            className="portfolio-figure-image"
          />
        </div>
      </dialog>
    </>
  );
}
