import React from "react";
import "./OutdoorsContent.css";
import { Fade } from "react-reveal";
import { outdoors } from "../../portfolio";

export default function OutdoorsContent(props) {
  const theme = props.theme;

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="outdoors-main">
        <h1 className="outdoors-title" style={{ color: theme.text }}>
          Outdoors
        </h1>

        <section className="outdoors-section">
          <h2 style={{ color: theme.text }}>Climbr</h2>
          <div className="outdoors-row">
            <div className="outdoors-row-text">
              <p>
                In 2020 (during quarantine), I was unable to go to climbing
                gyms, so my housemate and I built a climbing wall in our
                backyard. I also created a{" "}
                {(
                  <a
                    href={outdoors.climbrWebApp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    web app
                  </a>
                )}{" "}
                to save routes that we set on the wall. I also experimented
                with{" "}
                <a
                  href={outdoors.climbrNotebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  using computer vision to automate the process of
                  identifying holds on the wall
                </a>
                .
              </p>
            </div>
            <div className="outdoors-row-media">
              <img
                className="outdoors-row-image"
                src={outdoors.climbrImage}
                alt={outdoors.climbrImageAlt}
              />
            </div>
          </div>
        </section>

        <section className="outdoors-section">
          <h2 style={{ color: theme.text }}>Getting outside</h2>
          <p>
            In my free time, I like to rock climb, hike, camp, backpack, and
            play basketball.
          </p>
        </section>
      </div>
    </Fade>
  );
}
