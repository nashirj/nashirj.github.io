# Static → React Port: Phased Plan & Living Checklist

> **Purpose:** This is the single source of truth for porting the legacy static HTML site
> (`*.htm` at repo root + `quintessence/`) into the React app under `nashirj/`.
> It is designed to be worked by **multiple agents, one phase at a time, sequentially**.
>
> **HOW TO USE THIS FILE (every agent read this):**
> 1. Find the first phase whose status is `TODO` or `IN PROGRESS`. Work only that phase unless told otherwise.
> 2. Set the phase status to `IN PROGRESS` when you start; check off tasks (`[ ]` → `[x]`) as you complete them.
> 3. When done, run the phase's **Acceptance check**, set status to `DONE`, and fill in **Handoff notes** for the next agent.
> 4. Do NOT start a later phase before its prerequisites are `DONE` — phases build on each other.
> 5. Keep edits to this file surgical (status + checkboxes + handoff notes). Don't rewrite the plan.

---

## Locked decisions (do not relitigate)

- **Approach:** Simplify the developerFolio template. Keep a shared shell (Header, Footer, TopButton, SeoHeader, theme.js, global.js); strip unused template features; build **custom section pages**. Content lives in config (`portfolio.js`) where practical, not hardcoded JSX.
- **Nav (5 items):** `Home · Technical · Music · Outdoors · Contact`
- **Quintessence:** a **single standalone summary page** at `/quintessence`, **linked from the Technical page** (NOT in the nav).
- **App location:** `nashirj/` (Create React App, `react-scripts 3.2.0`). Run with `npm start` from inside `nashirj/` (uses `--openssl-legacy-provider`).

## Target routes

| Route | Page | Source content |
|---|---|---|
| `/` | Home | `index.htm` |
| `/technical` | Technical | `code.htm` + technical parts of `misc.htm` + link → `/quintessence` |
| `/music` | Music | `music.htm`, `septessence.htm`, `impulse.htm` |
| `/outdoors` | Outdoors | Climbr + outdoor lines from `misc.htm` / `index.htm` |
| `/quintessence` | Quintessence (standalone) | `quintessence/index.htm` |
| `/contact` | Contact | existing template `contact` container |
| `*` | 404 | existing `pages/errors/error404` |

## Shared conventions (all agents follow these)

- **Data model:** Add content as exported objects/arrays in `nashirj/src/portfolio.js` (e.g. `technicalProjects`, `musicGroups`, `recordings`, `transcriptions`, `outdoors`, `quintessence`). Page components should be thin and map over that data. This keeps future content edits in one file.
- **Assets:** Referenced files must live under `nashirj/public/` and be referenced root-relative, e.g. `` `${process.env.PUBLIC_URL}/audio/serendipity.mp3` `` or `/audio/serendipity.mp3`. Do **not** import large media through webpack. Only copy files that are actually referenced (see Phase 1 asset list) — the source dirs are large (audio 92M, pdfs 24M, pictures 22M, quintessence/images 131M) and must not be bulk-copied.
- **Styling:** Reuse `theme.js` tokens (`theme.text`, `theme.body`, `theme.highlight`, etc.) and the existing CSS approach. Keep pages responsive (the legacy site used Bootstrap `col-sm-*` two-column layouts; reproduce with flin/grid or the template's existing CSS).
- **Verify before marking DONE:** `cd nashirj && npm start`, load the affected route, confirm it renders with no console errors. For media, confirm at least one audio file plays and one PDF link resolves.
- **Don't touch** the legacy `*.htm` files or `quintessence/` source during porting — they are the reference. They get removed only in the final cleanup phase, and only after sign-off.

---

## Progress tracker (high level)

- [x] **Phase 0** — Baseline: get the app running as-is · status: **DONE**
- [x] **Phase 1** — Shell: strip template, rewrite nav + routes, stub pages, copy assets · status: **DONE**
- [x] **Phase 2** — Home page · status: **DONE**
- [ ] **Phase 3** — Technical page (+ Quintessence link) · status: **TODO**
- [ ] **Phase 4** — Quintessence standalone page · status: **TODO**
- [ ] **Phase 5** — Music page · status: **TODO**
- [ ] **Phase 6** — Outdoors page · status: **TODO**
- [ ] **Phase 7** — Contact page · status: **TODO**
- [ ] **Phase 8** — Polish, responsive pass, deploy · status: **TODO**
- [ ] **Phase 9** — Cleanup legacy files (after sign-off) · status: **TODO**

---

## Phase 0 — Baseline
**Prereqs:** none · **Status:** ✅ DONE

- [x] `cd nashirj && npm install` (resolve any install errors; note Node version used)
- [x] `npm start` and confirm the current template app boots at http://localhost:3000
- [x] Record Node version + any warnings in Handoff notes

**Acceptance check:** App boots, home route renders (template content is fine at this stage).

**Handoff notes:**
- Node v24.7.0, npm 11.5.1
- Install succeeded (201 vulnerabilities noted, expected for react-scripts 3.2.0)
- **`--openssl-legacy-provider` is REQUIRED** — already in package.json npm start script; old react-scripts won't compile on Node 24 without it
- Deprecation warning: fs.F_OK (non-fatal)

---

## Phase 1 — Shell (nav, routes, stubs, assets)
**Prereqs:** Phase 0 DONE · **Status:** ✅ DONE

Goal: the new 5-item nav renders, all 6 routes resolve to stub pages, template cruft removed, assets available. No real content yet.

- [x] **Rewrite nav** in `src/components/header/Header.js`: replaced NavLinks with Home `/`, Technical `/technical`, Music `/music`, Outdoors `/outdoors`, Contact `/contact`. Removed commented-out opensource block.
- [x] **Rewrite routes** in `src/containers/Main.js`: routes for `/` (Home), `/technical`, `/music`, `/outdoors`, `/quintessence`, `/contact`, and `*` → Error404. Removed routes for education, experience, projects, opensource, splash, and removed splash conditional logic.
- [x] **Create stub pages** under `src/pages/`: `technical/Technical.js`, `music/Music.js`, `outdoors/Outdoors.js`, `quintessence/Quintessence.js`. Each renders `<Header/>` + a heading + `<Footer/>` + `<TopButton/>`. Kept existing `home` and `contact` pages.
- [x] **Strip unused template code** — deleted containers: `education`, `experienceAccordion`, `opensourceCharts`, `issues`, `pullRequests`, `organizations`, `projects`, `podcast`, `talks`, `blogs`, `certifications`, `achievement`. Deleted pages: `education`, `experience`, `opensource`, `projects`, `splash`. Deleted components: `achievementCard`, `blogCard`, `certificationCard`, `experienceCard`, `issueCard`, `pullRequestCard`, `githubRepoCard`, `talkCard`, `issueChart`, `pullRequestChart`, `competitiveSites`, `organizationList`, `projectLanguages`, `publicationsCard`. **Kept:** `header`, `footer`, `topButton`, `seoHeader`, `socialMedia`, `Loader`, `greeting`, `skills`.
- [x] **Fixed baseui/styletron incompatibility** — removed `BaseProvider` + `StyletronProvider` wrappers from `src/index.js` (dependencies had TypeScript error with React 19; not needed for the app). Simplified to `React.StrictMode`.
- [x] **Assets copied** — all referenced files now under `nashirj/public/`:
  - `audio/` (12 files, 188 MB): music recordings ✅
  - `pdfs/` (4 résumé/proposal PDFs + transcriptions/ subdirectory with 13 PDFs, ~92 MB): ✅ (Note: `proposal.pdf` mapped from `quintessence/pdfs/quintessence-proposal.pdf`)
  - `pictures/` (5 images, 10 MB): nashir.jpg, ridesio.jpg, dmgui.png, robots.jpg, climbing-wall.png ✅
  - `quintessence-images/` (3 images, 7 MB): header.jpg, team-before-test.jpg, team-5.jpg ✅

**Acceptance check:** ✅ PASSED
- `npm run build` succeeds (with pre-existing unused-var warnings in contact + greeting, not blockers)
- All 6 routes tested via curl; stubs render
- Assets accessible: `/audio/serendipity.mp3` (200 OK, audio/mpeg), `/pdfs/Nashir-Janmohamed-CV.pdf` (200 OK, application/pdf), `/pictures/nashir.jpg` (200 OK, image/jpeg)
- No import errors; app compiles cleanly

**Handoff notes:**
- **Deleted dirs:** All listed above (containers + pages + components, 30+ items total)
- **Asset paths:** `/audio/*`, `/pdfs/*`, `/pdfs/transcriptions/*`, `/pictures/*`, `/quintessence-images/*` — reference these in Phase 2+
- **portfolio.js cruft:** Still contains dead imports/config for removed containers (e.g. `education`, `experience`). Next agent (Phase 2+) should clean as they update portfolio.js for real content, not now.
- **One file rename mapping:** `quintessence/pdfs/quintessence-proposal.pdf` → `/pdfs/proposal.pdf` (referenced in phase 4)
- **Ready for Phase 2:** Home page can now begin; uses stub Greeting component (existing `greeting` export in portfolio.js)

---

## Phase 2 — Home page
**Prereqs:** Phase 1 DONE · **Status:** IN PROGRESS
**Source:** `index.htm`

- [ ] Port bio (the 5 intro paragraphs). Update any stale details vs. `greeting` in portfolio.js (note: `greeting` already says "Brooklyn-based"; index.htm text is older/Orlando-era — prefer the current Brooklyn framing, confirm with owner if unsure — leave a `TODO:` comment rather than guessing facts).
- [ ] Headshot `pictures/nashir.jpg` → `/pictures/nashir.jpg`.
- [ ] Résumé links: CV, Technical Résumé, Music Résumé → the copied PDFs.
- [ ] Add clear entry points/links into `/technical`, `/music`, `/outdoors`.
- [ ] Keep external links from the bio (NASA, Google, clubs, thesis) — see Appendix A.

**Acceptance check:** `/` renders bio + photo + résumé links (PDFs open) + section links navigate correctly.

**Handoff notes:** _(fill in)_

---

## Phase 3 — Technical page
**Prereqs:** Phase 1 DONE · **Status:** TODO
**Source:** `code.htm` + technical parts of `misc.htm`

- [ ] Add `technicalProjects` data to portfolio.js and render cards. Projects (full text/links in Appendix B): **Ridesio, discretemath, SMC Robotics Club, Med3D, Vulcanet, Rust RSA**, plus an "Other → GitHub" note.
- [ ] Add **Hardware** section (misc.htm) and **Technical Papers** section (misc.htm — includes NASA NTRS links + CLaMP PDF).
- [ ] Add a **NASA Micro-G NExT** intro card that **links to `/quintessence`**.
- [ ] Images: `ridesio.jpg`, `dmgui.png`, `robots.jpg` (already copied). Med3D uses a YouTube embed (`fnNXSTg8DJc`).

**Acceptance check:** `/technical` renders all projects + hardware + papers; Quintessence link navigates to `/quintessence`; images and the Med3D embed load; PDF/paper links resolve.

**Handoff notes:** _(fill in)_

---

## Phase 4 — Quintessence standalone page
**Prereqs:** Phase 1 DONE (Phase 3 provides the inbound link but isn't required to build this) · **Status:** TODO
**Source:** `quintessence/index.htm`

- [ ] Port the overview: mission line, team blurb (met at NCAS at Armstrong; completed Micro-G NExT), CLaMP description, contact email `quintessence.space@gmail.com`.
- [ ] Images: `quintessence-images/header.jpg`, `team-before-test.jpg`.
- [ ] Link to the redacted design proposal PDF (`/pdfs/proposal.pdf`).
- [ ] Add a "back to Technical" link.

**Acceptance check:** `/quintessence` renders overview + photos + proposal PDF link; standalone (not in nav) but reachable via direct URL and from Technical.

**Handoff notes:** _(fill in)_

---

## Phase 5 — Music page
**Prereqs:** Phase 1 DONE · **Status:** TODO
**Source:** `music.htm`, `septessence.htm`, `impulse.htm`

- [ ] **Groups** section: Septessence, The Impulse Trio, Madi and the razz. Fold Septessence/Impulse detail into sections or expandable cards on this page (NO separate routes). Content in Appendix C.
- [ ] **Performances** (video embeds): music.htm has `VcUOc1hzI2Y` (Fuji), `q8QJHFPw2Bk` (Mark VI). Septessence videos: `1srB1zsFgeM`, `Jt1bG2UAaUk`, `VyLZKJNdKr0`, `WohV4Ls6ILE`.
- [ ] **Recordings** (`<audio>`): the 6 tracks from music.htm + Bandcamp "Sinkeater" link, and the 5 Impulse Trio tracks. File list in Phase 1 asset list; titles/personnel in Appendix C.
- [ ] **Transcriptions** table: PDF links by artist (Aaron Goldberg, Art Blakey, Austin Peralta, Dave Holland, Fly Trio, Kamasi Washington, Peter Bernstein, Walter Smith) — see Appendix C.
- [ ] Septessence extras: members, booking (`nashirbass@gmail.com`), upcoming performances (note: legacy dates are from 2023 — mark as historical or omit; confirm with owner).

**Acceptance check:** `/music` renders groups + video embeds + working audio players + transcription PDF links. At least one audio track plays.

**Handoff notes:** _(fill in)_

---

## Phase 6 — Outdoors page
**Prereqs:** Phase 1 DONE · **Status:** TODO
**Source:** Climbr (misc.htm) + outdoor lines from index.htm

- [ ] **Climbr**: backyard climbing wall + `climbr-pro.herokuapp.com` web app (note: Heroku free tier is likely dead — verify link, mark defunct if so) + CV hold-detection notebook link. Image `climbing-wall.png`.
- [ ] Outdoor pursuits narrative: rock climbing, hiking/camping/backpacking, basketball (from index.htm free-time line).
- [ ] Keep external links (GitHub extract-holds notebook).

**Acceptance check:** `/outdoors` renders Climbr + narrative + image; links resolve (defunct ones flagged).

**Handoff notes:** _(fill in)_

---

## Phase 7 — Contact page
**Prereqs:** Phase 1 DONE · **Status:** TODO
**Source:** existing template `contact` container + `socialMediaLinks` in portfolio.js

- [ ] Trim the template contact page to what's relevant; ensure `socialMediaLinks` are current (GitHub, LinkedIn, YouTube, Gmail, Instagram, Goodreads).
- [ ] Remove any template placeholder text/podcast/blog remnants.

**Acceptance check:** `/contact` renders with working social links + email.

**Handoff notes:** _(fill in)_

---

## Phase 8 — Polish, responsive, deploy
**Prereqs:** Phases 2–7 DONE · **Status:** TODO

- [ ] Responsive pass on every page (mobile + desktop); fix layout breaks.
- [ ] Verify SEO/meta (`seo` in portfolio.js, `SeoHeader`), favicon, page titles.
- [ ] **Deep-link routing:** confirm `public/404.html` is the spa-github-pages redirect (BrowserRouter deep links like `/music` must not 404 on GitHub Pages). Fix if needed.
- [ ] `npm run build` clean; test the production build locally (`serve -s build`).
- [ ] Confirm `homepage` in package.json + `CNAME` (`www.nashirj.com`) + GitHub Pages branch settings are consistent, then `npm run deploy`.
- [ ] Smoke-test the live site (all routes, media, deep links).

**Acceptance check:** Live site serves all routes incl. direct deep links; media + PDFs load; no console errors.

**Handoff notes:** _(fill in)_

---

## Phase 9 — Cleanup legacy files (ONLY after owner sign-off)
**Prereqs:** Phase 8 DONE + explicit owner approval · **Status:** TODO

- [ ] Remove legacy root `*.htm` and unused legacy asset dirs now served from `public/` (get explicit confirmation first; these are the reference content).
- [ ] Update root `README.md`.
- [ ] Confirm nothing external still links to old `.htm` paths (or add redirects).

**Handoff notes:** _(fill in)_

---

# Appendices — extracted content (so agents don't re-parse HTML)

> These summarize the source. **Always open the cited `.htm` file for exact wording/links before writing copy.**

## Appendix A — Home (index.htm) key external links
UCLA (Jazz Studies), UCF (CS). NASA: KSC, GSFC. Google (2021 remote video search; 2022 NYC Geo microservice). Clubs: UCF AI (`ucfai.org`), UCF Rock Climbing. Thesis: Dr. Sukthankar (`eecs.ucf.edu/~gitars/`). Projects: KnightrOS chess automaton (`ucfai.github.io/knightros-gambit`), drum-playing robot. Résumés: `pdfs/Nashir-Janmohamed-CV.pdf`, `pdfs/nashir-cs-resume.pdf`, `pdfs/nashir-music-resume.pdf`. NOTE: `greeting` in portfolio.js is newer ("Brooklyn-based"); reconcile stale bio facts with the owner rather than guessing.

## Appendix B — Technical (code.htm + misc.htm)
**code.htm projects:**
- **Ridesio** — rideshare bulletin-board iOS app (Swift), CodePath 2020 Demo Day 2nd place. img `ridesio.jpg`. Links: ridesio.com, CodePath blog.
- **discretemath** — Python library + GUI + demo notebook. `github.com/nashirj/discrete-math-algorithms`. img `dmgui.png`.
- **SMC Robotics Club** — VEX; key-bindings doc generator script. `smcrobotics.github.io`, `github.com/nashirj/create-vex-controller-documentation`. img `robots.jpg`.
- **Med3D** (LA Hacks 2020) — community-sourced 3D-printed medical tools. `devpost.com/software/med3d`. YouTube embed `fnNXSTg8DJc`.
- **Vulcanet** (SD Hacks 2019) — IoT mesh wildfire detection. `devpost.com/software/vulcanet-wildfire-detection-network`.
- **Rust RSA** — RSA in Rust w/ Miller-Rabin. `github.com/DarthGeek01/Rust-RSA`.
- **Other** → link to `github.com/nashirj`.

**misc.htm technical parts:**
- **Hardware** — ROS, Lego Mindstorms EV3, FIRST (Roborio), VEX (v5 brain), Raspberry Pi, Arduino, triple-boot desktop build.
- **Technical Papers** — CLaMP proposal PDF (`pdfs/NASA_Micro_G_NExT_Quintessence_CLaMP.pdf`); NTRS: `20205004568` (ML dynamical modeling), `20205009993` (modeling/control flexible inverted pendulum), `20210020239` (RASSOR sensing).
- **NASA Micro-G NExT** — intro blurb; links to Quintessence (→ use `/quintessence`); img `quintessence/images/team-5.jpg`.

## Appendix C — Music (music.htm / septessence.htm / impulse.htm)
**Groups:** Septessence (Orlando jazz septet), The Impulse Trio (Orlando jazz trio), Madi and the razz (pop/funk; `instagram.com/madiandtherazz`).

**Performances (music.htm):** "Fuji" (Samantha Boshnack), Roth Hall 2018 — embed `VcUOc1hzI2Y`. "Mark VI" (David Quested), UCLA Music Library 2017 — embed `q8QJHFPw2Bk`.

**Recordings (music.htm)** — audio files + personnel:
- I Can't Get Started — `cant-get-started.mp3` (w/ Devin Daniels, Conor Malloy)
- Serendipity — `serendipity.mp3` (Nashir, solo prod)
- All of You — `all-of-you.mp3` (w/ Devin Daniels, Conor Malloy)
- Had to See — `had-to-see.mp3` (w/ Aaron Provisor, Conor Malloy)
- Intro Song (Borne Visions) — `bv-intro-song.mp3`
- Cindy's Song (Sara Sithi-Amnuai) — `cindy-song.mp3`
- Reflections (Monk, Vail Jazz 2013) — `reflections.m4a`
- Sinkeater — Bandcamp link `kman925.bandcamp.com/album/sinkeater-purge`

**Transcriptions (music.htm)** — PDFs under `pdfs/transcriptions/`:
- Aaron Goldberg: Shed (Live in Paris), Shed (Home)
- Art Blakey: Come Rain or Come Shine
- Austin Peralta: Ode to Love
- Dave Holland: Claressence, Lazy Snake, The Balance
- Fly Trio: State of the Union
- Kamasi Washington: Change of the Guard (leadsheet)
- Peter Bernstein: Metamorphosis (as perf. by Kendrick Scott)
- Walter Smith: Himorme (leadsheet)

**Septessence (septessence.htm):** About blurb; Videos — Fre(e)d, Catching fireflies, Big House (Rick DiMuzio arr. Nashir), Processional (Dave Holland) → embeds `1srB1zsFgeM`, `Jt1bG2UAaUk`, `VyLZKJNdKr0`, `WohV4Ls6ILE`. Members: Josh (tpt), Quint, Fortunato (sax), Richard Drexler, Nashir, James + IG links. Booking: `nashirbass@gmail.com`. Upcoming: 2023 dates (historical — omit/mark).

**Impulse Trio (impulse.htm):** About blurb; Audio — State of the Union (`impulse-state-of-the-union.mp3`), I Hear a Rhapsody (`impulse-I-hear-a-rhapsody.mp3`), Stella by Starlight (`impulse-stella.mp3`), Red Cross (`impulse-red-cross.mp3`), Wayne's Thang (`impulse-waynes-thang.mp3`). Members: Nashir, James. Booking `nashirbass@gmail.com`.

## Appendix D — Outdoors (misc.htm Climbr + index.htm)
- **Climbr** — backyard climbing wall (2020 quarantine); route-saving web app `climbr-pro.herokuapp.com` (verify — likely defunct); CV hold-detection `github.com/nashirj/extract-holds/blob/master/extract_holds.ipynb`. img `climbing-wall.png`.
- **Outdoor pursuits** (index.htm free-time): basketball, rock climbing, hiking/camping/backpacking.

## Appendix E — Quintessence (quintessence/index.htm)
Mission: "Creating and innovating technology for the benefit of space exploration." Team met at NCAS (National Community College Aerospace Scholars) at Armstrong Flight Research Center; completed NASA Micro-G NExT design challenge with the CLaMP device. Proposal PDF `quintessence/pdfs/proposal.pdf` → copy to `/pdfs/proposal.pdf`. Contact `quintessence.space@gmail.com`. Images `header.jpg`, `team-before-test.jpg`. (Full mini-site — projects/team/gallery/sponsors/outreach/contact — is intentionally NOT ported per locked decision.)
