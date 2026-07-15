import React, { useState } from "react";
import "./GalleryGrid.css";
import Lightbox from "../lightbox/Lightbox";

const SECTION_TITLES = {
  jsc: "Onsite Testing at Johnson Space Center",
  prototype: "Prototype Development",
};

const SECTION_ORDER = ["jsc", "prototype"];

export default function GalleryGrid({ items, theme }) {
  const [openIndex, setOpenIndex] = useState(null);

  const bySection = SECTION_ORDER.map((section) => ({
    section,
    title: SECTION_TITLES[section],
    images: items.filter((item) => item.section === section),
  }));

  return (
    <div className="gallery-wrapper">
      {bySection.map(({ section, title, images }) => (
        <div key={section} className="gallery-section">
          <h3 className="gallery-section-title" style={{ color: theme.text }}>
            {title}
          </h3>
          <div className="gallery-grid">
            {images.map((image) => {
              const index = items.indexOf(image);
              return (
                <button
                  key={image.id}
                  type="button"
                  className="gallery-thumb-button"
                  onClick={() => setOpenIndex(index)}
                  aria-label={`Open image: ${image.caption}`}
                >
                  <img
                    className="gallery-thumb-image"
                    src={image.thumb}
                    alt={image.caption}
                    loading="lazy"
                  />
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {openIndex !== null && (
        <Lightbox
          items={items}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onPrev={() =>
            setOpenIndex((current) => (current - 1 + items.length) % items.length)
          }
          onNext={() => setOpenIndex((current) => (current + 1) % items.length)}
        />
      )}
    </div>
  );
}
