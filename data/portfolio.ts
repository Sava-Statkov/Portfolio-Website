export const navItems = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "publications", label: "Publications" },
  { id: "hobbies", label: "Hobbies" },
  { id: "contact", label: "Contact" }
] as const;

export type NavItem = (typeof navItems)[number];

export const profile = {
  name: "Sava Statkov",
  title: "AI Researcher & Software Engineer",
  specialization: "Machine learning systems, intelligent automation, and resilient product engineering.",
  statement:
    "I build scalable AI systems and software infrastructure focused on intelligent automation, applied machine learning, and modern distributed platforms.",
  location: "Sofia, Bulgaria",
  email: "mailto:savastatkov1@gmail.com",
  github: "https://github.com/Sava-Statkov",
  linkedin: "https://www.linkedin.com/in/sava-statkov-b991b3253/",
  cv: "/sava-statkov-cv.pdf",
  image: "/profile-portrait.svg",
  focusAreas: ["LLM systems", "Research tooling", "Platform engineering", "Reliable automation"]
} as const;

export const about = {
  paragraphs: [
    "Over the past several years, I have focused on hands-on learning through independent projects, research internships, and engineering work. I previously worked as a research intern at GATE Institute, where I explored EEG signal processing and computer vision systems for digital healthcare applications.",
    "Currently integrating a collaborative robot and computer vision system into a optical manufacturing workflow at Nick2000, focusing on automation pipelines and vision-based inspection systems for manufacturing precision.",
    "Alongside engineering work, I participate in conferences, scientific competitions, and independent research projects, with a strong interest in practical implementation and interdisciplinary collaboration. Long term, I hope to contribute to meaningful engineering and research projects that combine intelligent systems and measurable impact."
  ],
  principles: [
    {
      title: "Learning through implementation",
      description:
        "I learn best by building systems directly вЂ” combining experimentation, engineering, and practical problem solving through real-world projects."
    },
    {
      title: "Intelligent systems with purpose",
      description:
        "I am most interested in technology that interacts with physical environments and supports meaningful applications in healthcare, robotics, and automation."
    },
    {
      title: "Depth over surface-level knowledge",
      description:
        "I enjoy understanding systems deeply вЂ” from mathematical foundations and signal processing to implementation details and real deployment constraints."
    }
  ],
  interests: [
    "Robotics Engineering",
    "Industrial Automation",
    "Computer Vision",
    "Digital Healthcare",
    "EEG Signal Processing"
  ]
} as const;

export type Hobby = {
  icon: "music" | "sports" | "interests";
  title: string;
  description: string;
  audioLabel?: string;
  audioSrc?: string;
  composer?: string;
  pieceName?: string;
};

export const hobbies: Hobby[] = [
  {
    icon: "music",
    title: "Music",
    description:
      "I have played the piano since i was 7 and enjoy both classical and modern music. Playing piano has taught me patience and long-term consistency outside work.",
    audioLabel: "Listen to piano recording",
    audioSrc: "/piano-recording.mp3",
    composer: "Claude Debussy",
    pieceName: "Arabesque No. 1"
  },
  {
    icon: "sports",
    title: "Sports",
    description:
      "I enjoy staying physically active through ice skating, swimming, and strength training. Sports have been an important way for me to maintain and balance long hours spent working on technical projects."
  },
  {
    icon: "interests",
    title: "Personal Interests",
    description:
      "I enjoy strategic challenges such competitive strategy games. I also spend time experimenting with electronics and exploring emerging technologies."
  }
];

export type Project = {
  title: string;
  description: string;
  image: string;
  stack: string[];
  label: string;
};

export const projects: Project[] = [
  {
    title: "Synapse Vision Lab",
    description:
      "A performance-optimized, cross-platform neuro-computational software with a C++/Qt core for high-fidelity rendering of multi-channel EEG signal streams. The system translates raw neural data into structured frameworks through a performance-critical architectural design. This interface helps researchers visualize and understand complex brain activity effectively.",
    image: "/projects/EEG.png",
    stack: ["Qt", "C++", "FFT", "Wavelet Analysis", "ICA / PCA", "CMake"],
    label: "NEUROSCIENCE"
  },
  {
    title: "Collaborative robot system for optical manufacturing",
    description:
      "A precision industrial automation system for optical manufacturing, combining a collaborative robot and machine vision to reduce manual intervention during optical glass processing. Repeatable positioning, operator-safe automation, and reliable integration with vision-assisted quality control pipelines are provided for precision manufacturing.",
    image: "/projects/Robot.png",
    stack: ["FR Lua", "DI/DO control", "F/T sensing", "Peripheral synchronization", "Modbus TCP/RTU"],
    label: "INDUSTRIAL AUTOMATION"
  },
  {
    title: "Vision-Based Inspection System",
    description:
      "A precision computer vision system for automated optical element inspection and facet measurement using OpenCV pipelines, edge detection, and morphological analysis to validate dimensional tolerances and provide real-time measurement feedback for robotic manufacturing workflows.",
    image: "/projects/ComputerVision.png",
    stack: ["Canny Edge Detection", "Morphological Closing", "Gaussian Filtering", "Metric Calibration"],
    label: "COMPUTER VISION"
  }
];

export type Publication = {
  status: string;
  venue: string;
  title: string;
  authors: string;
  abstract: string;
  image: string;
  paper: string;
};

export const publications: Publication[] = [
  {
    status: "PENDING",
    venue: "Technical University Proceedings 2026",
    title: "International Conference on Automatics, Robotics and AI (ICARAI)",
    authors: "Sava Statkov, Simeon Stamboliyski, Georgi Hristov",
    abstract:
      "Vision-Guided Rotational Inspection for Facet Width Evaluation in Robotic Processing of Optical Elements” has been accepted for publication in the Proceedings of the Technical University of Sofia. The work presents an integrated robotic system for automated optical element processing.",
    image: "/publications/icarai.png",
    paper: "https://icarai.tu-sofia.bg/?p=home"
  },
  {
    status: "FINALIST",
    venue: "Competition",
    title: "Bulgarian Academy of Sciences - Young Talents 2026",
    authors: "Sava Statkov",
    abstract:
      "Research focused on collaborative robotics for automated optical facet processing, integrating measurement validation and robotic-assisted manufacturing workflows.",
    image: "/publications/MON.png",
    paper: "https://azbuki.bg/news/novini-2026/mon-dava-nachalo-na-konkursa-mladi-talanti/"
  },
  {
    status: "ACCEPTED",
    venue: "Journal - Science, Engineering and Education (SEE)",
    title: "University of Chemical Technology and Metallurgy - ITA 2025",
    authors: "Sava Statkov",
    abstract:
      "Developed a Python-based game framework using two-dimensional matrix operations for movement, collision detection, and gameplay logic.",
    image: "/publications/output-image.png",
    paper: "https://jsee.uctm.edu/index.php/see/article/view/189/168"
  }
];

export type ExperienceItem = {
  logo: string;
  logoFallback: string;
  role: string;
  company: string;
  duration: string;
  summary: string;
  achievements: string[];
  technologies: string[];
};

export const experience: ExperienceItem[] = [
  {
    logo: "/experience-logos/nick.png",
    logoFallback: "N",
    role: "Automation & Robotics",
    company: "NICK 2000",
    duration: "Dec 2025 - Present",
    summary: "Designing and integrating a collaborative robot system to automate precision faceting of optical elements with computer vision inspection.",
    achievements: [
      "Designing and integrating a collaborative robot system to automate the precision faceting of optical elements.",
      "Developing a computer vision inspection system using calibrated cameras to detect micro defects and verify geometric measurements."
    ],
    technologies: ["FR Lua", "Digital I/O Integration", "Force/Torque Control", "PTP & LIN Motions", "Modbus TCP/RTU", "Modular Script Architecture"]
  },
  {
    logo: "/experience-logos/gate.png",
    logoFallback: "G",
    role: "Research Intern",
    company: "GATE Institute",
    duration: "Jun 2025 - Jun 2026",
    summary: "Research on EEG processing and computer vision for digital healthcare applications.",
    achievements: [
      "Conducted research on EEG Signal Processing for evaluation of the resting state and Computer Vision for patient monitoring.",
      "Developed algorithms for anomaly detection, specifically focusing on fall detection and rapid movement analysis in clinical environments."
    ],
    technologies: ["Python (NumPy, SciPy, Matplotlib)", "MATLAB", "FFT & PSD", "ICA/PCA", "Signal Filtering Techniques", "OpenCV", "Large Datasets"]
  },
  {
    logo: "/experience-logos/school.png",
    logoFallback: "TJ",
    role: "App Developer (Volunteering)",
    company: "Language School \"Thomas Jefferson\"",
    duration: "Feb 2026 - May 2026",
    summary: "Developed an interactive kiosk application for touchscreen monitors to manage institutional schedules, announcements, and achievements.",
    achievements: [],
    technologies: ["React", "TypeScript", "Touchscreen UI", "JavaScript", "Web Development", "Responsive Design", "Firebase (Database)"]
  }
];

export type Achievement = {
  label: string;
  value: number;
  suffix?: string;
  decimals?: number;
  detail: string;
  icon: "trophy" | "graduation" | "shield" | "github";
};

export const achievements: Achievement[] = [
  {
    label: "Forums & Competitions",
    value: 3,
    suffix: "+",
    detail: "Research presentations and finalist placements across national conferences and scientific competitions, including recognition from the Bulgarian Academy of Sciences.",
    icon: "trophy"
  },
  {
    label: "High School Grade",
    value: 5.75,
    suffix: "/6.0",
    decimals: 2,
    detail: "Major in Mathematics and Informatics, alongside English studies that strengthen communication and writing skills.",
    icon: "graduation"
  },
  {
    label: "Technical Certifications",
    value: 15,
    suffix: "+",
    detail: "Technical certifications across computer vision, AI systems, cloud structure, and software engineering, with a strong focus on practical implementation and applied system design.",
    icon: "shield"
  },
  {
    label: "Project contributions",
    value: 8,
    suffix: "+",
    detail: "Projects spanning computer vision, EEG analysis, robotics, embedded systems, automation, and full-stack software engineering.",
    icon: "github"
  }
];
