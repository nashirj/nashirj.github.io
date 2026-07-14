import React from "react";
import "./MusicContent.css";
import { Fade } from "react-reveal";
import {
  musicGroups,
  musicPerformances,
  recordings,
  sinkeaterLink,
  transcriptions,
  septessenceInfo,
  impulseTrioInfo,
} from "../../portfolio";

function VideoEmbed({ title, composer, venue, embedId }) {
  return (
    <div className="music-video-card">
      <p className="music-video-caption">
        <strong>{title}</strong> &ndash; {composer}
        {venue && (
          <>
            <br />
            {venue}
          </>
        )}
      </p>
      <div className="music-video-container">
        <iframe
          src={`https://www.youtube.com/embed/${embedId}`}
          title={title}
          allowFullScreen
        />
      </div>
    </div>
  );
}

function RecordingRow({ title, composer, personnel, audio }) {
  return (
    <div className="music-recording-row">
      <p>
        <strong>{title}</strong> &ndash; {composer}
        <br />
        {personnel}
      </p>
      <audio controls src={audio}>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

function MembersList({ members }) {
  return (
    <ul className="music-members-list">
      {members.map((member) => (
        <li key={member.name}>
          {member.ig ? (
            <a href={member.ig} target="_blank" rel="noopener noreferrer">
              {member.name}
            </a>
          ) : (
            member.name
          )}{" "}
          ({member.role})
        </li>
      ))}
    </ul>
  );
}

export default function MusicContent(props) {
  const theme = props.theme;

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="music-main">
        <h1 className="music-title" style={{ color: theme.text }}>
          Music
        </h1>

        <section className="music-section">
          <h2 style={{ color: theme.text }}>Groups</h2>
          <p>
            During my time in Orlando studying at UCF, I played in a few
            groups:
          </p>
          <ul>
            {musicGroups.map((group) =>
              group.link ? (
                <li key={group.id}>
                  <a href={group.link} target="_blank" rel="noopener noreferrer">
                    {group.name}
                  </a>
                  , {group.subtitle}.
                </li>
              ) : (
                <li key={group.id}>
                  <a href={`#${group.id}`}>{group.name}</a>, {group.subtitle}.
                </li>
              )
            )}
          </ul>
        </section>

        <section className="music-section">
          <h2 style={{ color: theme.text }}>Performances</h2>
          <div className="music-video-grid">
            {musicPerformances.map((perf) => (
              <VideoEmbed key={perf.title} {...perf} />
            ))}
          </div>
        </section>

        <section className="music-section">
          <h2 style={{ color: theme.text }}>Recordings</h2>
          {recordings.map((rec) => (
            <RecordingRow key={rec.title} {...rec} />
          ))}
          <p>
            <strong>Sinkeater</strong> &ndash; with AJ Kluth, Chili Corder, and
            Anthony Lopez
            <br />
            <a href={sinkeaterLink} target="_blank" rel="noopener noreferrer">
              Listen on Bandcamp
            </a>
          </p>
        </section>

        <section className="music-section">
          <h2 style={{ color: theme.text }}>Transcriptions</h2>
          <div className="music-transcriptions-table">
            {transcriptions.map((entry) => (
              <div className="music-transcriptions-row" key={entry.artist}>
                <div className="music-transcriptions-artist">
                  <strong>{entry.artist}</strong>
                </div>
                <div className="music-transcriptions-tracks">
                  {entry.tracks.map((track, i) => (
                    <span key={track.pdf}>
                      <a href={track.pdf} target="_blank" rel="noopener noreferrer">
                        {track.title}
                      </a>
                      {i < entry.tracks.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="music-section" id="septessence">
          <h2 style={{ color: theme.text }}>Septessence</h2>
          <p>
            Septessence was a jazz septet, led by bassist Nashir Janmohamed,
            based in Orlando, FL. The band formed with fellow musicians from
            the UCF jazz program, and played a mix of original compositions
            by members of the band as well as arrangements of jazz standards
            and tunes from the jazz repertoire.
          </p>

          <h3 style={{ color: theme.text }}>Videos</h3>
          <div className="music-video-grid">
            {septessenceInfo.videos.map((video) => (
              <VideoEmbed key={video.title} {...video} />
            ))}
          </div>

          <h3 style={{ color: theme.text }}>Members</h3>
          <MembersList members={septessenceInfo.members} />

          <h3 style={{ color: theme.text }}>Booking</h3>
          <p>
            To book Septessence to play at your venue or event, contact
            Nashir Janmohamed at{" "}
            <a href={`mailto:${septessenceInfo.bookingEmail}`}>
              {septessenceInfo.bookingEmail}
            </a>
            .
          </p>

          <h3 style={{ color: theme.text }}>Past performance</h3>
          <p>
            {septessenceInfo.pastPerformance.date}:{" "}
            <a
              href={septessenceInfo.pastPerformance.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {septessenceInfo.pastPerformance.venue}
            </a>
          </p>
          <img
            className="music-poster-image"
            src={septessenceInfo.pastPerformance.poster}
            alt={septessenceInfo.pastPerformance.posterAlt}
          />
        </section>

        <section className="music-section" id="impulse-trio">
          <h2 style={{ color: theme.text }}>The Impulse Trio</h2>
          <p>
            The Impulse Trio was a jazz trio based in Orlando, FL, whose
            members met while studying jazz at UCF. The trio played a mix of
            original compositions by members of the band as well as
            arrangements of jazz standards.
          </p>

          <h3 style={{ color: theme.text }}>Recordings</h3>
          {impulseTrioInfo.recordings.map((rec) => (
            <RecordingRow key={rec.title} {...rec} />
          ))}

          <h3 style={{ color: theme.text }}>Members</h3>
          <MembersList members={impulseTrioInfo.members} />

          <h3 style={{ color: theme.text }}>Booking</h3>
          <p>
            To book The Impulse Trio to play at your venue or event, contact
            Nashir at{" "}
            <a href={`mailto:${impulseTrioInfo.bookingEmail}`}>
              {impulseTrioInfo.bookingEmail}
            </a>
            .
          </p>
        </section>
      </div>
    </Fade>
  );
}
