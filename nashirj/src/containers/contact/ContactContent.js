import React from "react";
import "./ContactContent.css";
import { Fade } from "react-reveal";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactPageData } from "../../portfolio";

export default function ContactContent(props) {
  const theme = props.theme;

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="contact-main">
        <h1 className="contact-title" style={{ color: theme.text }}>
          {contactPageData.title}
        </h1>

        <section className="contact-section">
          <p>{contactPageData.description}</p>
          <a
            className="contact-email"
            style={{ color: theme.text }}
            href={`mailto:${contactPageData.email}`}
          >
            {contactPageData.email}
          </a>
          <p className="contact-location">{contactPageData.location}</p>
          <SocialMedia theme={theme} />
        </section>
      </div>
    </Fade>
  );
}
