import React from "react";
import "./QuintessenceContent.css";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import { quintessence, quintessenceGallery } from "../../portfolio";
import GalleryGrid from "../../components/galleryGrid/GalleryGrid";

export default function QuintessenceContent(props) {
  const theme = props.theme;

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="quintessence-main">
        <img
          className="quintessence-header-image"
          src={quintessence.headerImage}
          alt={quintessence.headerImageAlt}
        />

        <h1 className="quintessence-title" style={{ color: theme.text }}>
          Creating and innovating technology for the benefit of space
          exploration
        </h1>

        <img
          className="quintessence-team-image"
          src={quintessence.teamImage}
          alt={quintessence.teamImageAlt}
        />

        <div className="quintessence-body">
          <p>
            "Quintessence" is a team of students that met during a NASA
            workshop (
            <a href={quintessence.ncas} target="_blank" rel="noopener noreferrer">
              National Community College Aerospace Scholars, NCAS
            </a>
            ) at Armstrong Flight Research Center.
          </p>
          <p>
            They completed NASA's{" "}
            <a
              href={quintessence.microGNext}
              target="_blank"
              rel="noopener noreferrer"
            >
              Micro-G NExT design challenge
            </a>{" "}
            with the CLaMP device.
          </p>
          <p>
            To learn more about the CLaMP, see a redacted version of the
            team's{" "}
            <a
              href={quintessence.proposal}
              target="_blank"
              rel="noopener noreferrer"
            >
              design proposal
            </a>
            .
          </p>
          <p>Contact: {quintessence.contactEmail}</p>
        </div>
      </div>

      <div className="quintessence-gallery-section">
        <h2 className="quintessence-gallery-title" style={{ color: theme.text }}>
          Gallery
        </h2>
        <GalleryGrid items={quintessenceGallery} theme={theme} />

        <Link to="/technical" className="quintessence-back-link">
          &larr; Back to Technical
        </Link>
      </div>
    </Fade>
  );
}
