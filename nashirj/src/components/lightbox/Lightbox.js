import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./Lightbox.css";

export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const dialogRef = useRef(null);
  const item = items[index];

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (dialogRef.current) {
      dialogRef.current.focus();
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft") {
        onPrev();
      } else if (event.key === "ArrowRight") {
        onNext();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  const handleScrimClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className="lightbox-scrim" onClick={handleScrimClick}>
      <div
        className="lightbox-dialog"
        role="dialog"
        aria-modal="true"
        aria-label={item.caption}
        ref={dialogRef}
        tabIndex={-1}
      >
        <button
          type="button"
          className="lightbox-close"
          onClick={onClose}
          aria-label="Close"
        >
          <i className="fas fa-times" aria-hidden="true"></i>
        </button>

        <button
          type="button"
          className="lightbox-nav lightbox-prev"
          onClick={onPrev}
          aria-label="Previous image"
        >
          <i className="fas fa-chevron-left" aria-hidden="true"></i>
        </button>

        <img
          className="lightbox-image"
          src={item.full}
          alt={item.caption}
        />

        <button
          type="button"
          className="lightbox-nav lightbox-next"
          onClick={onNext}
          aria-label="Next image"
        >
          <i className="fas fa-chevron-right" aria-hidden="true"></i>
        </button>

        <div className="lightbox-caption">
          <p>{item.caption}</p>
          <span className="lightbox-counter">
            {index + 1} / {items.length}
          </span>
        </div>
      </div>
    </div>,
    document.body
  );
}
