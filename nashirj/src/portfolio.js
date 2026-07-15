/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Nashir's Portfolio",
  description:
    "Brooklyn-based software engineer, jazz bassist, composer, climber, and enjoyer of (most) things.",
  og: {
    title: "Nashir Janmohamed Portfolio",
    type: "website",
    url: "http://www.nashirj.com/",
  },
};

//Home Page
const greeting = {
  title: "Nashir Janmohamed",
  logo_name: "nashirj",
  subTitle:
    "Brooklyn-based software engineer, jazz bassist, composer, climber, and enjoyer of (most) things.",
  githubProfile: "https://github.com/nashirj",
};

const homeBio = {
  photo: "/pictures/nashir.jpg",
  resumeLinks: [
    { label: "CV", href: "/pdfs/Nashir-Janmohamed-CV.pdf" },
    { label: "Technical Résumé", href: "/pdfs/nashir-cs-resume.pdf" },
    { label: "Music Résumé", href: "/pdfs/nashir-music-resume.pdf" },
  ],
  links: {
    ksc: "https://www.nasa.gov/centers/kennedy/home/index.html",
    gsfc: "https://www.nasa.gov/goddard",
    ucfAI: "https://ucfai.org/",
    thesisAdvisor: "https://www.eecs.ucf.edu/~gitars/",
    chessAutomaton: "https://ucfai.github.io/knightros-gambit/index.html",
  },
  entryPoints: [
    {
      label: "Technical",
      path: "/technical",
      blurb: "Software projects, hardware, and papers.",
    },
    {
      label: "Music",
      path: "/music",
      blurb: "Groups, performances, recordings, and transcriptions.",
    },
    {
      label: "Outdoors",
      path: "/outdoors",
      blurb: "Climbing, hiking, and Climbr.",
    },
  ],
};

// Technical Page
const technicalProjects = [
  {
    id: "ridesio",
    title: "Ridesio",
    image: "/pictures/ridesio.jpg",
    imageAlt: "Ridesio app screenshot",
  },
  {
    id: "discretemath",
    title: "discretemath",
    image: "/pictures/dmgui.png",
    imageAlt: "discretemath GUI",
  },
  {
    id: "smc-robotics",
    title: "Santa Monica College Robotics Club",
    image: "/pictures/robots.jpg",
    imageAlt: "SMC Robotics Club VEX robot",
  },
  {
    id: "med3d",
    title: "Med3D (LA Hacks 2020)",
    videoEmbedId: "fnNXSTg8DJc",
  },
  {
    id: "vulcanet",
    title: "Vulcanet (SD Hacks 2019)",
  },
  {
    id: "rust-rsa",
    title: "Rust RSA",
  },
];

const technicalLinks = {
  ridesio: "https://www.ridesio.com/",
  ridesioAward:
    "https://blog.codepath.org/2020-codepath-org-fall-semester-demo-day-ios-winners-announced/?utm_content=149195058&utm_medium=social&utm_source=linkedin&hss_channel=lcp-18305024",
  discretemathRepo: "https://github.com/nashirj/discrete-math-algorithms",
  discretemathNotebook:
    "https://github.com/nashirj/discrete-math-algorithms/blob/master/demo.ipynb",
  smcRoboticsTeam: "https://smcrobotics.github.io",
  smcRoboticsScript:
    "https://github.com/nashirj/create-vex-controller-documentation",
  med3d: "https://devpost.com/software/med3d",
  thingiverse: "https://www.thingiverse.com/",
  coronavirusValves:
    "https://www.theverge.com/2020/3/17/21184308/coronavirus-italy-medical-3d-print-valves-treatments",
  vulcanet: "https://devpost.com/software/vulcanet-wildfire-detection-network",
  rustRsa: "https://github.com/DarthGeek01/Rust-RSA",
  rsaWiki: "https://en.wikipedia.org/wiki/RSA_(cryptosystem)#Operation",
  chiSquared: "https://en.wikipedia.org/wiki/Chi-squared_test",
  otherProjects: "https://github.com/nashirj",
};

const technicalPapers = {
  clamp: "/pdfs/NASA_Micro_G_NExT_Quintessence_CLaMP.pdf",
  ntrsPendulumModeling: "https://ntrs.nasa.gov/citations/20205004568",
  ntrsPendulumControl: "https://ntrs.nasa.gov/citations/20205009993",
  ntrsRassor: "https://ntrs.nasa.gov/citations/20210020239",
};

const microGNext = {
  image: "/quintessence-images/team-5.jpg",
  imageAlt: "Quintessence team at NASA Johnson Space Center",
  jsc: "https://www.nasa.gov/centers/johnson/about/index.html",
  nbl: "https://www.nasa.gov/image-feature/neutral-buoyancy-laboratory",
};

const quintessence = {
  headerImage: "/quintessence-images/header.jpg",
  headerImageAlt: "Quintessence logo",
  teamImage: "/quintessence-images/team-before-test.jpg",
  teamImageAlt: "Quintessence team before testing at NASA",
  ncas: "https://stemgateway.nasa.gov/public/s/course-offering/a0Bt0000004l8d3EAA/nasa-community-college-aerospace-scholars-ncas",
  microGNext: "https://microgravityuniversity.jsc.nasa.gov/about-micro-g-next.cfm",
  proposal: "/pdfs/proposal.pdf",
  contactEmail: "quintessence.space@gmail.com",
};

const galleryImage = (name, caption, section) => ({
  id: name,
  thumb: `/quintessence-images/gallery/thumbs/${name}.jpg`,
  full: `/quintessence-images/gallery/full/${name}.jpg`,
  caption,
  section,
});

const quintessenceGallery = [
  // Section: Onsite Testing at Johnson Space Center
  galleryImage("clayton-anderson-1", "Clayton Anderson, former astronaut", "jsc"),
  galleryImage("clayton-anderson-2", "Clayton Anderson, former astronaut", "jsc"),
  galleryImage("clayton-anderson-3", "Clayton Anderson, former astronaut", "jsc"),
  galleryImage("diver-debrief-1", "Debriefing divers on proper usage of tool", "jsc"),
  galleryImage("diver-debrief-2", "Debriefing divers on proper usage of tool", "jsc"),
  galleryImage("diver-debrief-3", "Debriefing divers on proper usage of tool", "jsc"),
  galleryImage(
    "divers-post-testing",
    "Divers discussing impressions of tool usability and performance",
    "jsc"
  ),
  galleryImage("divers", "Divers in the NBL prior to testing", "jsc"),
  galleryImage("jsc-everyone", "Micro-G NExT test week 1 participants in front of NBL", "jsc"),
  galleryImage("team-2", "Quintessence", "jsc"),
  galleryImage("team-3", "Quintessence", "jsc"),
  galleryImage("team-4", "Quintessence", "jsc"),
  galleryImage("team-5", "Quintessence", "jsc"),
  galleryImage("team-w-friends", "Quintessence with coop interns at Johnson Space Center", "jsc"),
  galleryImage("team-w-spacesuit", "Quintessence with a used spacesuit at the NBL spacesuit lab", "jsc"),
  galleryImage(
    "team-mission-control",
    "Quintessence in JSC's mission control, watching ISS operations in real time",
    "jsc"
  ),
  galleryImage("team-w-divers", "Quintessence with NBL divers after testing", "jsc"),
  galleryImage("testing-1", "Quintessence in NBL control room during testing", "jsc"),
  galleryImage("testing-2", "Quintessence in NBL control room during testing", "jsc"),
  galleryImage("testing-3", "Quintessence in NBL control room during testing", "jsc"),
  galleryImage("nbl", "The NBL, where the CLaMP was tested", "jsc"),
  // Section: Prototype Development
  galleryImage(
    "clamp-ceta",
    "The CLaMP being tested by team member Alex Miyoshi in the Fullerton College pool",
    "prototype"
  ),
  galleryImage(
    "clamp-handrail-1",
    "The CLaMP being tested by team member Alex Miyoshi in the Fullerton College pool",
    "prototype"
  ),
  // Legacy caption for this image was a copy-paste error referencing the CLaMP test
  // stand; the file is actually an FEA render. Flagged for owner review.
  galleryImage("finite-element-analysis", "Finite element analysis of the CLaMP", "prototype"),
  galleryImage("yaw-v3", "Final version of yaw mechanism", "prototype"),
  galleryImage("yaw-v2", "Second version of yaw mechanism", "prototype"),
  galleryImage("yaw-v1", "First version of yaw mechanism", "prototype"),
  galleryImage("arm-v4", "Final version of arm mechanism", "prototype"),
  galleryImage("arm-v3", "Third version of arm mechanism", "prototype"),
  galleryImage("arm-v2", "Second version of arm mechanism", "prototype"),
  galleryImage("arm-v1", "First version of arm mechanism", "prototype"),
  galleryImage("screw-knob-new", "New version of screw knob", "prototype"),
  galleryImage("screw-knob-old", "Old version of screw knob", "prototype"),
  galleryImage("clamp-knob-new", "New version of clamp knob", "prototype"),
  galleryImage("clamp-knob-old", "Old version of clamp knob", "prototype"),
  galleryImage("final-clamp-poc", "Final proof of concept rendition of CLaMP", "prototype"),
];

// Outdoors Page
const outdoors = {
  climbrImage: "/pictures/climbing-wall.png",
  climbrImageAlt: "Backyard climbing wall",
  climbrWebApp: "https://github.com/nashirj/climbr",
  climbrNotebook:
    "https://github.com/nashirj/extract-holds/blob/master/extract_holds.ipynb",
};

// Music Page
const musicGroups = [
  {
    id: "septessence",
    name: "Septessence",
    subtitle: "an Orlando, FL–based jazz septet",
  },
  {
    id: "impulse-trio",
    name: "The Impulse Trio",
    subtitle: "an Orlando, FL–based jazz trio",
  },
  {
    id: "madi",
    name: "Madi and the razz",
    subtitle: "a pop/funk group",
    link: "https://www.instagram.com/madiandtherazz/",
  },
];

const musicPerformances = [
  {
    title: "Fuji",
    composer: "Samantha Boshnack",
    venue: "Live at Roth Hall (Crossroads), 2018",
    embedId: "VcUOc1hzI2Y",
  },
  {
    title: "Mark VI",
    composer: "David Quested",
    venue: "Live at UCLA's Music Library, 2017",
    embedId: "q8QJHFPw2Bk",
  },
];

const recordings = [
  {
    title: "I Can't Get Started",
    composer: "Ira Gershwin and Vernon Duke",
    personnel: "with Devin Daniels and Conor Malloy",
    audio: "/audio/cant-get-started.mp3",
  },
  {
    title: "Serendipity",
    composer: "Nashir Janmohamed",
    personnel: "performance and production by Nashir",
    audio: "/audio/serendipity.mp3",
  },
  {
    title: "All of You",
    composer: "Cole Porter",
    personnel: "with Devin Daniels and Conor Malloy",
    audio: "/audio/all-of-you.mp3",
  },
  {
    title: "Had to See",
    composer: "Nashir Janmohamed",
    personnel: "with Aaron Provisor and Conor Malloy",
    audio: "/audio/had-to-see.mp3",
  },
  {
    title: "Intro Song",
    composer: "Borne Visions",
    personnel: "with Terry Jones, Patrick Godfrey, and Kevin Rush",
    audio: "/audio/bv-intro-song.mp3",
  },
  {
    title: "Cindy's Song",
    composer: "Sara Sithi-Amnuai",
    personnel:
      "with Sara Sithi-Amnuai, Aaron Shaw, Zekkereya El-Magharbel, Ravi Campbell, Joel Wenhardt, and Daniel Sunshine",
    audio: "/audio/cindy-song.mp3",
  },
  {
    title: "Reflections",
    composer: "Thelonious Monk",
    personnel: "with the Vail Jazz Workshop, 2013",
    audio: "/audio/reflections.m4a",
  },
];

const sinkeaterLink = "https://kman925.bandcamp.com/album/sinkeater-purge";

const transcriptions = [
  {
    artist: "Aaron Goldberg",
    tracks: [
      {
        title: "Shed (Live in Paris)",
        pdf: "/pdfs/transcriptions/aaron-goldberg-shed-live-in-paris-transcription.pdf",
      },
      {
        title: "Shed (Home)",
        pdf: "/pdfs/transcriptions/aaron-goldberg-shed-trio-transcription.pdf",
      },
    ],
  },
  {
    artist: "Art Blakey",
    tracks: [
      {
        title: "Come Rain or Come Shine",
        pdf: "/pdfs/transcriptions/art-blakey-come-rain-come-shine-transcription.pdf",
      },
    ],
  },
  {
    artist: "Austin Peralta",
    tracks: [
      {
        title: "Ode to Love",
        pdf: "/pdfs/transcriptions/austin-peralta-ode-to-love-transcription.pdf",
      },
    ],
  },
  {
    artist: "Dave Holland",
    tracks: [
      {
        title: "Claressence",
        pdf: "/pdfs/transcriptions/dave-holland-claressence-transcription.pdf",
      },
      {
        title: "Lazy Snake",
        pdf: "/pdfs/transcriptions/dave-holland-lazy-snake-transcription.pdf",
      },
      {
        title: "The Balance",
        pdf: "/pdfs/transcriptions/dave-holland-the-balance-transcription.pdf",
      },
    ],
  },
  {
    artist: "Fly Trio",
    tracks: [
      {
        title: "State of the Union",
        pdf: "/pdfs/transcriptions/fly-trio-state-of-the-union-transcription.pdf",
      },
    ],
  },
  {
    artist: "Kamasi Washington",
    tracks: [
      {
        title: "Change of the Guard (leadsheet)",
        pdf: "/pdfs/transcriptions/kamasi-washington-change-of-the-guard-leadsheet.pdf",
      },
    ],
  },
  {
    artist: "Peter Bernstein",
    tracks: [
      {
        title: "Metamorphosis (as performed by Kendrick Scott)",
        pdf: "/pdfs/transcriptions/kendrick-scott-metamorphosis-transcription.pdf",
      },
    ],
  },
  {
    artist: "Walter Smith",
    tracks: [
      {
        title: "Himorme (leadsheet)",
        pdf: "/pdfs/transcriptions/walter-smith-iii-himorme-leadsheet.pdf",
      },
    ],
  },
];

const septessenceInfo = {
  bookingEmail: "nashirbass@gmail.com",
  videos: [
    {
      title: "Fre(e)d",
      composer: "Nashir Janmohamed",
      embedId: "VyLZKJNdKr0",
    },
    {
      title: "Catching fireflies",
      composer: "Nashir Janmohamed",
      embedId: "1srB1zsFgeM",
    },
    {
      title: "Big House",
      composer: "Rick DiMuzio, arr. Nashir Janmohamed",
      embedId: "Jt1bG2UAaUk",
    },
    {
      title: "Processional",
      composer: "Dave Holland",
      embedId: "WohV4Ls6ILE",
    },
  ],
  members: [
    { name: "Joshua Mercado", role: "trumpet", ig: "https://www.instagram.com/josh.m_music/" },
    { name: "Quint Johnson", role: "alto/soprano sax", ig: "https://www.instagram.com/qj_music/" },
    { name: "Fortunato Occhino", role: "tenor sax", ig: "https://www.instagram.com/fro.music/" },
    { name: "Noah Charles III", role: "guitar" },
    { name: "Richard Drexler", role: "piano" },
    { name: "Nashir Janmohamed", role: "bass, bandleader" },
    { name: "James Fortune", role: "drums", ig: "https://www.instagram.com/_jamesfortune_/" },
  ],
  pastPerformance: {
    date: "July 26, 2023",
    venue: "Blue Bamboo Center for the Arts",
    link: "https://bluebambooartcenter.com/event/5165182/644015419/septessence",
    poster: "/pictures/septessence-poster-1.png",
    posterAlt: "Septessence performance poster, July 26, 2023",
  },
};

const impulseTrioInfo = {
  bookingEmail: "nashirbass@gmail.com",
  recordings: [
    {
      title: "State of the Union",
      composer: "Fly Trio",
      audio: "/audio/impulse-state-of-the-union.mp3",
    },
    {
      title: "I Hear a Rhapsody",
      composer: "George Fragos, Jack Baker, and Dick Gasparre",
      audio: "/audio/impulse-I-hear-a-rhapsody.mp3",
    },
    {
      title: "Stella by Starlight",
      composer: "Victor Young",
      audio: "/audio/impulse-stella.mp3",
    },
    {
      title: "Red Cross",
      composer: "Charlie Parker",
      audio: "/audio/impulse-red-cross.mp3",
    },
    {
      title: "Wayne's Thang",
      composer: "Kenny Garrett",
      audio: "/audio/impulse-waynes-thang.mp3",
    },
  ],
  members: [
    { name: "Noah Charles III", role: "guitar" },
    { name: "Nashir Janmohamed", role: "bass" },
    { name: "James Fortune", role: "drums", ig: "https://www.instagram.com/_jamesfortune_/" },
  ],
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/nashirj",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nashir-janmohamed/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/user/NashirBass",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:nashirbass@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/nashirj/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Goodreads",
    link: "https://www.goodreads.com/user/show/116376984-nashir",
    fontAwesomeIcon: "fa-goodreads", // Reference https://fontawesome.com/v5/icons/goodreads?f=brands&s=solid
    backgroundColor: "#372213", // Reference https://simpleicons.org/?q=instagram
  },
];

// Contact Page
const contactPageData = {
  title: "Contact",
  description:
    "Feel free to reach out about interesting projects, music, climbing, or whatever else is on your mind!",
  email: "nashirbass@gmail.com",
  location: "Brooklyn, NY, USA",
};

export {
  settings,
  seo,
  greeting,
  homeBio,
  technicalProjects,
  technicalLinks,
  technicalPapers,
  microGNext,
  quintessence,
  quintessenceGallery,
  outdoors,
  musicGroups,
  musicPerformances,
  recordings,
  sinkeaterLink,
  transcriptions,
  septessenceInfo,
  impulseTrioInfo,
  socialMediaLinks,
  contactPageData,
};
