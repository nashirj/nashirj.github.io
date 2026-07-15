import React from "react";
import "./TechnicalContent.css";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import {
  technicalProjects,
  technicalLinks,
  technicalPapers,
  microGNext,
} from "../../portfolio";

const projectDescriptions = {
  ridesio: (
    <p>
      <a href={technicalLinks.ridesio} target="_blank" rel="noopener noreferrer">
        Ridesio
      </a>{" "}
      is a rideshare bulletin board iOS app (written in Swift) for college
      campuses that lets users request or post upcoming rides. Ridesio
      provides a communal, sustainable way of ridesharing for college
      students. Ridesio won{" "}
      <a
        href={technicalLinks.ridesioAward}
        target="_blank"
        rel="noopener noreferrer"
      >
        2nd Place in CodePath's Virtual Demo Day 2020
      </a>
      .
    </p>
  ),
  "smc-robotics": (
    <p>
      I spent a lot of my free time in the 2019-2020 academic year working on
      programming robots and leading operations for the{" "}
      <a
        href={technicalLinks.smcRoboticsTeam}
        target="_blank"
        rel="noopener noreferrer"
      >
        robotics team
      </a>{" "}
      at Santa Monica College. The SMC robotics club participated in the VEX
      robotics competition, and I wrote a{" "}
      <a
        href={technicalLinks.smcRoboticsScript}
        target="_blank"
        rel="noopener noreferrer"
      >
        python script
      </a>{" "}
      to parse a header file in our robot source code to generate a key
      bindings doc in the interest of improving QOL for the drivers and
      programmers (and to make a tool that could be used by the wider VEX
      community).
    </p>
  ),
  med3d: (
    <p>
      I built (along with Ariel Young, Justin Lin, and Tiffany Chieu) a{" "}
      <a href={technicalLinks.med3d} target="_blank" rel="noopener noreferrer">
        platform
      </a>{" "}
      for doctors to request 3D printed tools that are community sourced and
      vetted. This project took influence from the{" "}
      <a
        href={technicalLinks.thingiverse}
        target="_blank"
        rel="noopener noreferrer"
      >
        thingiverse
      </a>{" "}
      platform/UI and from the story about{" "}
      <a
        href={technicalLinks.coronavirusValves}
        target="_blank"
        rel="noopener noreferrer"
      >
        volunteers producing 3D-printed valves for life-saving coronavirus
        treatments
      </a>
      .
    </p>
  ),
  vulcanet: (
    <p>
      After seeing firsthand how devastating wildfires were to California
      over the past few years, I built (along with Ariel Young, Justin Lin,
      and Tiffany Chieu){" "}
      <a
        href={technicalLinks.vulcanet}
        target="_blank"
        rel="noopener noreferrer"
      >
        an IoT mesh network that aggregates sensor data and
        detects/predicts the likelihood of wildfires given various
        environmental parameters
      </a>
      . We used an open source mesh network and ESP8266 microcontrollers
      with various sensors (temperature, humidity, pressure, etc.) to
      communicate with an Arduino, stored the collected data in a database,
      wrote a risk prediction algorithm using Python, and displayed the
      prediction results in a cross platform smartphone app using Flutter.
    </p>
  ),
};

export default function TechnicalContent(props) {
  const theme = props.theme;

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="technical-main">
        <h1 className="technical-title" style={{ color: theme.text }}>
          Technical
        </h1>

        <p>
          For the past couple years since I started working full time, I
          haven't worked much on personal projects. Below are some things
          I worked on in the past!
        </p>

        <section className="technical-section">
          <h2 style={{ color: theme.text }}>Projects</h2>
          {technicalProjects.map((project) => (
            <div className="technical-row" key={project.id}>
              <div className="technical-row-text">
                <h3 style={{ color: theme.text }}>{project.title}</h3>
                {projectDescriptions[project.id]}
              </div>
              <div className="technical-row-media">
                {project.videoEmbedId && (
                  <div className="technical-video-container">
                    <iframe
                      src={`https://www.youtube.com/embed/${project.videoEmbedId}`}
                      title={project.title}
                      allowFullScreen
                    />
                  </div>
                )}
                {project.image && (
                  <img
                    className="technical-row-image"
                    src={project.image}
                    alt={project.imageAlt}
                  />
                )}
              </div>
            </div>
          ))}
          <p>
            Please feel free to check out my other projects on my{" "}
            <a
              href={technicalLinks.otherProjects}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
        </section>

        <section className="technical-section">
          <h2 style={{ color: theme.text }}>Hardware</h2>
          <p>
            I have experience working with ROS, Lego Mindstorms EV3, FIRST
            Robotics hardware (and Roborio), VEX robotics hardware (and v5
            Robot Brain), Raspberry Pi, Arduino, and I also built a desktop
            computer to triple boot Windows, Ubuntu, and Hackintosh.
          </p>
        </section>

        <section className="technical-section">
          <h2 style={{ color: theme.text }}>Technical Papers</h2>
          <p>
            I enjoy technical writing, and have experience using LaTeX to
            prepare documentation and technical papers.
          </p>
          <ul className="technical-papers-list">
            <li>
              A redacted version of the design proposal that earned{" "}
              <Link to="/quintessence">Quintessence</Link> a trip to NASA's
              Johnson Space Center:{" "}
              <a
                href={technicalPapers.clamp}
                target="_blank"
                rel="noopener noreferrer"
              >
                CLaMP
              </a>
              .
            </li>
            <li>
              An abstract describing a project that used{" "}
              <a
                href={technicalPapers.ntrsPendulumModeling}
                target="_blank"
                rel="noopener noreferrer"
              >
                machine learning for dynamical modeling of a flexible
                inverted pendulum robotic system
              </a>
              .
            </li>
            <li>
              A paper describing a project focused on{" "}
              <a
                href={technicalPapers.ntrsPendulumControl}
                target="_blank"
                rel="noopener noreferrer"
              >
                modeling and control of a flexible inverted pendulum robotic
                system
              </a>
              .
            </li>
            <li>
              An abstract describing{" "}
              <a
                href={technicalPapers.ntrsRassor}
                target="_blank"
                rel="noopener noreferrer"
              >
                development of a sensing capability
              </a>{" "}
              for a NASA robot, RASSOR.
            </li>
          </ul>
        </section>

        <section className="technical-section">
          <h2 style={{ color: theme.text }}>NASA Micro-G NExT</h2>
          <div className="technical-row">
            <div className="technical-row-text">
              <p>
                In 2018-2019, I worked on a NASA design project with fellow
                community college students. My team traveled to the{" "}
                <a
                  href={microGNext.jsc}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Johnson Space Center
                </a>{" "}
                in Houston, where I was the test conductor and taught NASA
                divers how to use the team's device for testing in the{" "}
                <a
                  href={microGNext.nbl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Neutral Buoyancy Laboratory
                </a>
                .
              </p>
              <Link to="/quintessence" className="technical-quintessence-link">
                Read more about the project: Quintessence &rarr;
              </Link>
            </div>
            <div className="technical-row-media">
              <img
                className="technical-row-image"
                src={microGNext.image}
                alt={microGNext.imageAlt}
              />
            </div>
          </div>
        </section>
      </div>
    </Fade>
  );
}
