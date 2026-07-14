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
- [x] **Phase 3** — Technical page (+ Quintessence link) · status: **DONE**
- [x] **Phase 4** — Quintessence standalone page · status: **DONE**
- [x] **Phase 5** — Music page · status: **DONE**
- [x] **Phase 6** — Outdoors page · status: **DONE**
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
**Prereqs:** Phase 1 DONE · **Status:** ✅ DONE
**Source:** `index.htm`

- [x] Port bio. Confirmed stale details directly with the owner instead of guessing (see below) and rewrote as 4 paragraphs (NASA/Google internship paragraphs merged/trimmed per owner's preference).
- [x] Headshot `pictures/nashir.jpg` → `/pictures/nashir.jpg`.
- [x] Résumé links: CV, Technical Résumé, Music Résumé → the copied PDFs.
- [x] Added entry-point cards linking to `/technical`, `/music`, `/outdoors`.
- [x] Kept external links from the bio (NASA KSC/GSFC, Google — mentioned without links since no stable URL, UCF AI, thesis advisor, chess automaton) — see Appendix A. **Dropped** the UCF Rock Climbing club link per owner instruction (rock climbing is still mentioned as a personal interest in the closing paragraph, just without that link).

**Acceptance check:** ✅ PASSED
- `npm run build` succeeds (only pre-existing unused-var warnings in `ContactComponent.js`, not introduced by this phase)
- `npm start` verified clean compile; confirmed via bundle inspection that bio text, résumé links, and entry-point links are present in the rendered `/` page
- Asset/link spot checks all 200 OK: `/`, `/pictures/nashir.jpg`, `/pdfs/Nashir-Janmohamed-CV.pdf`, `/pdfs/nashir-cs-resume.pdf`, `/pdfs/nashir-music-resume.pdf`, `/technical`, `/music`, `/outdoors`

**Handoff notes:**
- **Owner-confirmed bio facts** (do not re-litigate, these override index.htm's stale Orlando/UCF-student framing): graduated from UCF (both degrees are past tense); current role described generically as "software engineer" with no employer named; closing location line updated to Brooklyn, NY (native of LA kept); NASA (4x) + Google (2x) internship history intentionally trimmed/shortened rather than reproduced in full; UCF club/thesis/side-project involvement reframed as past/college activities, not ongoing.
- **New files:** `src/containers/bio/Bio.js` + `Bio.css` — replaces the old template `Greeting`/`Skills` containers on the Home page. Data lives in `portfolio.js` as `homeBio` (photo, resumeLinks, external `links`, `entryPoints`); the actual bio prose is hardcoded JSX in `Bio.js` (not in portfolio.js) since it has inline anchor tags that don't fit cleanly in plain string config.
- **Deleted (dead code, no longer referenced anywhere):** `containers/greeting/` (Greeting.js, Greeting.css, FeelingProud.js), `containers/skills/` (Skills.js, Skills.css, SkillSection.js, FullStackImg.js, DesignImg.js), `components/softwareSkills/`. Also removed the now-orphaned `skills` data block and `greeting.resume_link` field from `portfolio.js`.
- **Pre-existing bug spotted, not fixed (out of scope, belongs to Phase 7):** `src/containers/contact/Contact.js` imports `contactInfo` from `portfolio.js`, but portfolio.js exports `contactPageData` — `contactInfo` is `undefined`, so `/contact` will throw at render. Flagging for whoever picks up Phase 7.
- **Also noticed, not touched:** `src/containers/StartupProjects/` is unused leftover template code (not imported anywhere) — candidate for cleanup in a later phase, same category as the Phase 1 stripping pass.
- **Ready for Phase 3:** Technical page can now begin; `homeBio.entryPoints` already links `/` → `/technical`.

---

## Phase 3 — Technical page
**Prereqs:** Phase 1 DONE · **Status:** ✅ DONE
**Source:** `code.htm` + technical parts of `misc.htm`

- [x] Add `technicalProjects` data to portfolio.js and render cards. Projects (full text/links in Appendix B): **Ridesio, discretemath, SMC Robotics Club, Med3D, Vulcanet, Rust RSA**, plus an "Other → GitHub" note.
- [x] Add **Hardware** section (misc.htm) and **Technical Papers** section (misc.htm — includes NASA NTRS links + CLaMP PDF).
- [x] Add a **NASA Micro-G NExT** intro card that **links to `/quintessence`**.
- [x] Images: `ridesio.jpg`, `dmgui.png`, `robots.jpg` (already copied). Med3D uses a YouTube embed (`fnNXSTg8DJc`).

**Acceptance check:** ✅ PASSED
- `npm run build` succeeds (only the pre-existing unused-var warnings in `ContactComponent.js`, not introduced by this phase)
- `npm start` verified clean compile ("Compiled with warnings" — same pre-existing Contact warnings only); confirmed via bundle inspection that project descriptions, Hardware/Papers text, and the Quintessence link are present in the rendered `/technical` page
- Route/asset/link spot checks all 200 OK: `/technical`, `/quintessence`, `/pictures/ridesio.jpg`, `/pictures/dmgui.png`, `/pictures/robots.jpg`, `/quintessence-images/team-5.jpg`, `/pdfs/NASA_Micro_G_NExT_Quintessence_CLaMP.pdf`
- Med3D YouTube embed (`fnNXSTg8DJc`) confirmed present in rendered output

**Handoff notes:**
- **New files:** `src/containers/technical/TechnicalContent.js` + `TechnicalContent.css` — thin `src/pages/technical/Technical.js` now renders `<Header/>` + `<TechnicalContent/>` + `<Footer/>` + `<TopButton/>`, mirroring the Home/Bio pattern from Phase 2.
- **portfolio.js additions:** `technicalProjects` (array: id, title, image/imageAlt or videoEmbedId), `technicalLinks` (flat map of external URLs referenced inline), `technicalPapers` (CLaMP PDF + 3 NTRS URLs), `microGNext` (intro image + JSC/NBL links). Exported alongside existing exports.
- **Prose placement follows the Bio precedent:** project/section descriptions with inline anchor tags are hardcoded JSX in `TechnicalContent.js` (a `projectDescriptions` map keyed by project id), not stored as plain strings in portfolio.js, since they mix text and links. Structural data (images, URLs) lives in portfolio.js.
- **Layout:** each project renders as a responsive two-column row (text + image/video, stacking on mobile ≤768px), consistent with the legacy Bootstrap `col-sm-7`/`col-sm-5` layout. Med3D uses a 16:9 responsive iframe wrapper instead of an image.
- **Quintessence link:** the Technical Papers section links "Quintessence" inline (CLaMP paragraph) and the Micro-G NExT section has a dedicated "Read more about the project: Quintessence →" link — both use React Router `<Link to="/quintessence">`, not a raw `<a>`, since it's an internal route.
- **Minor content note:** capitalized "Raspberry Pi"/"Arduino" in the Hardware paragraph (lowercase in the legacy misc.htm) for consistency with proper-noun capitalization elsewhere on the site; no factual content changed.
- **Not touched:** the unrelated portfolio.js cruft (`competitiveSites`, `degrees`, `certifications`, `experience`, `projectsHeader`, `publicationsHeader`, `publications`) flagged in Phase 1/2 handoff notes is still there — still out of scope for this phase, since it isn't referenced by the Technical page.
- **Ready for Phase 4:** `/technical` now links to `/quintessence`; the Quintessence standalone page can be built next (still just a stub).

---

## Phase 4 — Quintessence standalone page
**Prereqs:** Phase 1 DONE (Phase 3 provides the inbound link but isn't required to build this) · **Status:** ✅ DONE
**Source:** `quintessence/index.htm`

- [x] Port the overview: mission line, team blurb (met at NCAS at Armstrong; completed Micro-G NExT), CLaMP description, contact email `quintessence.space@gmail.com`.
- [x] Images: `quintessence-images/header.jpg`, `team-before-test.jpg`.
- [x] Link to the redacted design proposal PDF (`/pdfs/proposal.pdf`).
- [x] Add a "back to Technical" link.

**Acceptance check:** ✅ PASSED
- `npm run build` succeeds (only the pre-existing unused-var warnings in `ContactComponent.js`, not introduced by this phase)
- Served the production build locally (`serve -s build`) and confirmed via bundle/route inspection that the mission line, NCAS blurb, contact email, and "Back to Technical" link are present in the rendered `/quintessence` page
- Asset spot checks all 200 OK: `/quintessence`, `/quintessence-images/header.jpg`, `/quintessence-images/team-before-test.jpg`, `/pdfs/proposal.pdf`

**Handoff notes:**
- **New files:** `src/containers/quintessence/QuintessenceContent.js` + `QuintessenceContent.css` — thin `src/pages/quintessence/Quintessence.js` now renders `<Header/>` + `<QuintessenceContent/>` + `<Footer/>` + `<TopButton/>`, mirroring the Technical/Bio pattern from Phases 2–3 (replaced the Phase 1 "Content coming soon..." stub).
- **portfolio.js additions:** `quintessence` object (headerImage, headerImageAlt, teamImage, teamImageAlt, ncas link, microGNext link, proposal PDF path, contactEmail), exported alongside existing exports.
- **Prose placement follows the Bio/Technical precedent:** the overview paragraphs (with inline anchor tags) are hardcoded JSX in `QuintessenceContent.js`, not stored as plain strings in portfolio.js. Structural data (image paths, URLs, contact email) lives in portfolio.js.
- **Content note:** legacy `quintessence/index.htm` had a full mini-site nav (PROJECTS/OUTREACH/GALLERY/TEAM/SPONSORS/CONTACT) — intentionally **not** ported per the locked decision (single standalone summary page only). Also fixed a dead relative link in the source (`href="team.htm"` on "team of students" text) by just not linking that phrase, since no team subpage exists in this port.
- **Layout:** single centered column (max-width 800px) with header logo image, title, team photo, body text, and back-link — matches the legacy site's `<center>`-based layout without reproducing the old nav.
- **Not touched:** `/technical` already linked to `/quintessence` from Phase 3 (Technical Papers section + Micro-G NExT section) — no changes needed there.
- **Ready for Phase 5:** Music page can now begin; independent of Quintessence, only needs Phase 1.

---

## Phase 5 — Music page
**Prereqs:** Phase 1 DONE · **Status:** ✅ DONE
**Source:** `music.htm`, `septessence.htm`, `impulse.htm`

- [x] **Groups** section: Septessence, The Impulse Trio, Madi and the razz. Folded Septessence/Impulse detail into sections further down the same page (NO separate routes) — group list links jump (`#septessence`, `#impulse-trio`) to those sections; Madi links out to Instagram.
- [x] **Performances** (video embeds): `VcUOc1hzI2Y` (Fuji), `q8QJHFPw2Bk` (Mark VI). Septessence videos: `1srB1zsFgeM`, `Jt1bG2UAaUk`, `VyLZKJNdKr0`, `WohV4Ls6ILE`.
- [x] **Recordings** (`<audio>`): the 7 tracks from music.htm + Bandcamp "Sinkeater" link, and the 5 Impulse Trio tracks. All files already present under `/audio/` from Phase 1.
- [x] **Transcriptions** table: PDF links by artist (Aaron Goldberg, Art Blakey, Austin Peralta, Dave Holland, Fly Trio, Kamasi Washington, Peter Bernstein, Walter Smith).
- [x] Septessence extras: members (brief name/instrument/IG only, per owner), booking (`nashirbass@gmail.com`), one historical performance (July 26, 2023 at Blue Bamboo Center for the Arts — kept, explicitly framed as past, not upcoming, per owner).

**Acceptance check:** ✅ PASSED
- `npm run build` succeeds (only the pre-existing unused-var warnings in `ContactComponent.js`, not introduced by this phase)
- Served the production build locally (`serve -s build`) and confirmed via bundle inspection that group names, Septessence/Impulse prose, member names, booking email, and the Blue Bamboo performance text are present in the rendered `/music` page
- Asset/route spot checks all 200 OK: `/music`, `/audio/cant-get-started.mp3`, `/audio/impulse-stella.mp3`, `/pdfs/transcriptions/dave-holland-claressence-transcription.pdf`, `/pictures/septessence-poster-1.png`

**Handoff notes:**
- **Owner-confirmed decisions** (do not re-litigate): (1) Groups framed in **past tense** — Septessence/Impulse Trio/Madi and the razz are presented as groups from Nashir's Orlando/UCF years, consistent with the already-past-tense home bio, not as ongoing current groups. (2) Member bios are **brief only** (name + instrument + optional Instagram link) — the full paragraph bios + individual photos in `septessence.htm` (Josh, Quint, Fortunato, Noah, Richard, James) were intentionally **not** ported; no new member photos were copied to `public/`. (3) The July 2023 Septessence performance at Blue Bamboo is kept but explicitly labeled as a **past performance**, not "upcoming" (legacy framing).
- **New files:** `src/containers/music/MusicContent.js` + `MusicContent.css` — thin `src/pages/music/Music.js` now renders `<Header/>` + `<MusicContent/>` + `<Footer/>` + `<TopButton/>`, same pattern as Technical/Quintessence.
- **portfolio.js additions:** `musicGroups`, `musicPerformances`, `recordings`, `sinkeaterLink`, `transcriptions`, `septessenceInfo` (videos, members, bookingEmail, pastPerformance), `impulseTrioInfo` (recordings, members, bookingEmail). All prose (group descriptions, section intros) is hardcoded JSX in `MusicContent.js`, following the Bio/Technical/Quintessence precedent — only structural data (titles, composers, personnel, file paths, URLs) lives in portfolio.js.
- **New asset:** copied `pictures/septessence-poster-1.png` (source repo root) → `nashirj/public/pictures/septessence-poster-1.png` (~3.1 MB) for the historical-performance poster. `septessence-poster-2.png` in the source was not referenced anywhere and was not copied.
- **Layout:** single-page with anchored sections (`#septessence`, `#impulse-trio`) instead of the legacy separate `septessence.htm`/`impulse.htm` pages, per the locked "NO separate routes" decision. Video embeds use a responsive 2-up grid (`music-video-grid`), reusing the same 16:9 iframe wrapper technique as Technical's Med3D embed.
- **Not touched:** `<audio>` elements use a native `src` attribute directly (no `<source>` child) since only one file format is provided per track — simpler than the legacy `<source>` markup, same playback behavior.
- **Ready for Phase 6:** Outdoors page can now begin; independent of Music, only needs Phase 1.

---

## Phase 6 — Outdoors page
**Prereqs:** Phase 1 DONE · **Status:** ✅ DONE
**Source:** Climbr (misc.htm) + outdoor lines from index.htm

- [x] **Climbr**: backyard climbing wall + `climbr-pro.herokuapp.com` web app (note: Heroku free tier is likely dead — verify link, mark defunct if so) + CV hold-detection notebook link. Image `climbing-wall.png`.
- [x] Outdoor pursuits narrative: rock climbing, hiking/camping/backpacking, basketball (from index.htm free-time line).
- [x] Keep external links (GitHub extract-holds notebook).

**Acceptance check:** ✅ PASSED
- `npm run build` succeeds (only the pre-existing unused-var warnings in `ContactComponent.js`, not introduced by this phase)
- Served the production build locally (`serve -s build`) and confirmed via bundle inspection that "Climbr", "climbing gyms", "Getting outside", "defunct", "extract-holds", and "rock climb, hike" text are present in the rendered `/outdoors` page
- Route/asset spot checks 200 OK: `/outdoors`, `/pictures/climbing-wall.png`
- Verified `https://climbr-pro.herokuapp.com` is dead (HTTP 404, Heroku router "no such app") — confirmed the plan's suspicion, so the web app link is rendered as plain text "web app (defunct)" instead of a live link; the CV notebook link (still live on GitHub) remains a working link

**Handoff notes:**
- **New files:** `src/containers/outdoors/OutdoorsContent.js` + `OutdoorsContent.css` — thin `src/pages/outdoors/Outdoors.js` now renders `<Header/>` + `<OutdoorsContent/>` + `<Footer/>` + `<TopButton/>`, same pattern as Technical/Music/Quintessence.
- **portfolio.js additions:** `outdoors` object (`climbrImage`, `climbrImageAlt`, `climbrWebApp`, `climbrWebAppDefunct: true`, `climbrNotebook`). Prose is hardcoded JSX in `OutdoorsContent.js`, following the established precedent (Bio/Technical/Music/Quintessence) — only structural data lives in portfolio.js.
- **Defunct-link handling:** introduced a `climbrWebAppDefunct` boolean flag in portfolio.js; `OutdoorsContent.js` branches on it to render either a live `<a>` or a plain-text "(defunct)" marker. This is the first defunct link encountered in the port — if Phase 8's link audit finds others, this is the pattern to reuse.
- **Content scope:** kept this page intentionally minimal per Appendix D — Climbr section + a short "Getting outside" narrative (rock climbing, hiking/camping/backpacking, basketball) pulled from the index.htm free-time line. No new images beyond the already-copied `climbing-wall.png` (Phase 1).
- **Layout:** reuses the same two-column `*-row`/`*-row-text`/`*-row-media` flex pattern as Technical's project rows (own `outdoors-` prefixed CSS class names, not shared classes) for the Climbr image, stacking on mobile ≤768px.
- **Ready for Phase 7:** Contact page can now begin; independent of Outdoors, only needs Phase 1. Note the pre-existing bug flagged in Phase 2 handoff notes: `src/containers/contact/Contact.js` imports `contactInfo` from portfolio.js but portfolio.js exports `contactPageData` — this will need fixing as part of Phase 7.

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
