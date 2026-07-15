import React from "react";
import "./Bio.css";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting, homeBio } from "../../portfolio";

export default function Bio(props) {
  const theme = props.theme;
  const { photo, resumeLinks, links, entryPoints } = homeBio;

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="bio-main" id="bio">
        <div className="bio-photo-col">
          <img className="bio-photo" alt="Nashir Janmohamed" src={photo} />
          <p className="bio-resume-links">
            {resumeLinks.map((resume, i) => (
              <React.Fragment key={resume.label}>
                {i > 0 && <br />}
                <a
                  className="bio-resume-link"
                  style={{ color: theme.text }}
                  href={resume.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {resume.label}
                </a>
              </React.Fragment>
            ))}
          </p>
        </div>
        <div className="bio-text-col">
          <h1 className="bio-title" style={{ color: theme.text }}>
            {greeting.title}
          </h1>
          <p className="bio-subtitle" style={{ color: theme.secondaryText }}>
            {greeting.subTitle}
          </p>
          <SocialMedia theme={theme} />
          <div className="bio-paragraphs">
            <p>
              Hi. I'm Nashir! I'm a software engineer based in Brooklyn, NY,
              and an alumnus of UCLA (B.A. Jazz Studies, with an emphasis in
              bass performance and jazz composition) and the University of
              Central Florida (B.S. Computer Science). I'm passionate about
              deconstructing complex problems and finding efficient solutions
              to them, and particularly enjoy doing so with code.
            </p>
            <p>
              During my time at UCF, I was a seven-time NASA intern (six at{" "}
              <a href={links.ksc} target="_blank" rel="noopener noreferrer">
                KSC
              </a>{" "}
              and one at{" "}
              <a href={links.gsfc} target="_blank" rel="noopener noreferrer">
                GSFC
              </a>
              ), where I worked on projects ranging from Launch Control System
              software for the Artemis program, to research in flexible
              aerospace structures and robotic excavation, to machine learning
              data pipelines for spacecraft observation. I was also a
              two-time Google intern: my first internship was in video search/ranking
              quality and the second was on a Geo data team.
            </p>
            <p>
              While at UCF, I was involved with{" "}
              <a href={links.ucfAI} target="_blank" rel="noopener noreferrer">
                UCF AI
              </a>
              , completed an undergraduate thesis under the supervision of{" "}
              <a
                href={links.thesisAdvisor}
                target="_blank"
                rel="noopener noreferrer"
              >
                Dr. Sukthankar
              </a>
              , and worked on building a{" "}
              <a
                href={links.chessAutomaton}
                target="_blank"
                rel="noopener noreferrer"
              >
                chess-playing automaton powered by a custom chess AI
              </a>
              in my free time.
            </p>
            <p>
              I now live in Brooklyn, NY, but am a native of Los Angeles, CA.
              In my free time, I like to play basketball, rock climb,
              play/listen to music, go hiking/camping/backpacking, play
              video/board games, and read about space/tech/science/
              engineering/CS.
            </p>
          </div>
          <div className="bio-entry-points">
            {entryPoints.map((entry) => (
              <Link
                key={entry.path}
                to={entry.path}
                className="bio-entry-point"
                style={{ borderColor: theme.text }}
              >
                <span className="bio-entry-point-label" style={{ color: theme.text }}>
                  {entry.label}
                </span>
                <span
                  className="bio-entry-point-blurb"
                  style={{ color: theme.secondaryText }}
                >
                  {entry.blurb}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
