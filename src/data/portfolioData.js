export const personalInfo = {
  name: "Niranjana Sambasivam",
  nickname: "Nira",
  title: "Software Engineer & Full-Stack Developer",
  degree: "B.E. Computer Science and Engineering",
  status: "Final Year Student",
  location: "Tamil Nadu, India",
  tagline: "Building resilient web applications, intelligent platforms, and human-centered digital solutions.",
  about: [
    "I am a passionate Final Year Computer Science and Engineering undergraduate who thrives at the intersection of robust backend logic, responsive modern frontend engineering, and AI-driven systems.",
    "With a strong foundation in Java, React, JavaScript, SQL, and modern web technologies, I love crafting software that solves real-world human challenges—from child protection platforms like ChildGuard to high-throughput real-time communication systems.",
    "Driven by curiosity, clean architecture, and continuous learning, I am eager to contribute to forward-thinking engineering teams and create high-impact software experiences."
  ],
  stats: [
    { label: "Academic Standing", value: "Final Year", sub: "B.E. CSE" },
    { label: "Core Skills", value: "6+", sub: "Full-Stack & Systems" },
    { label: "Featured Projects", value: "3+", sub: "AI & Web Apps" },
    { label: "Code Quality", value: "100%", sub: "Modern Standards" }
  ],
  socials: {
    github: "https://github.com/niranjana-sambasivam",
    linkedin: "https://linkedin.com/in/niranjana-sambasivam",
    email: "niranjana.sambasivam@example.com"
  }
};

export const skillsData = [
  {
    name: "Java",
    category: "Core & Backend",
    proficiency: 90,
    icon: "Coffee",
    color: "#f89820",
    description: "Object-Oriented Programming (OOP), Data Structures & Algorithms, Multithreading, Enterprise Backend Architecture, Robust API logic.",
    highlights: ["OOP Principles & Design Patterns", "Collections Framework & DSA", "Exception Handling & Concurrency", "Backend Business Services"]
  },
  {
    name: "React",
    category: "Frontend",
    proficiency: 92,
    icon: "Atom",
    color: "#61dafb",
    description: "Modern Component-Driven UI, Hooks (useState, useEffect, useMemo), Virtual DOM, Context API, Responsive State Flow.",
    highlights: ["Custom Hooks & State Lifecycles", "Single Page App Architecture", "Reusable Glassmorphic Components", "Performance Optimization & HMR"]
  },
  {
    name: "JavaScript",
    category: "Frontend & Scripting",
    proficiency: 88,
    icon: "Code2",
    color: "#f7df1e",
    description: "ES6+ Standards, Asynchronous Programming (Promises, Async/Await), DOM Manipulation, Event-Driven Architecture, API Integration.",
    highlights: ["Modern ES6+ Syntax & Closures", "Async/Await & REST Fetching", "Event Handlers & Interactivity", "Functional Programming Paradigms"]
  },
  {
    name: "SQL",
    category: "Database & Systems",
    proficiency: 86,
    icon: "Database",
    color: "#336791",
    description: "Relational Database Management Systems (RDBMS), Complex Queries, Joins, Aggregations, Indexing, Schema Normalization.",
    highlights: ["Relational Schema Design & DDL", "Complex Subqueries & JOIN Operations", "ACID Compliance & Data Integrity", "Query Optimization & Indexing"]
  },
  {
    name: "HTML5",
    category: "Frontend",
    proficiency: 95,
    icon: "FileCode",
    color: "#e34f26",
    description: "Semantic Document Architecture, Accessibility (a11y), SEO-Friendly Structures, Modern Media Formats & Audio/Video Embeds.",
    highlights: ["Semantic Elements & Layouts", "Form Validations & Inputs", "Web Accessibility Standards", "Clean Document Hierarchy"]
  },
  {
    name: "CSS3",
    category: "Frontend & Styling",
    proficiency: 92,
    icon: "Palette",
    color: "#2965f1",
    description: "Responsive Layouts (Flexbox, CSS Grid), Keyframe Animations, 3D Transforms, Glassmorphism, CSS Custom Properties, Mobile Breakpoints.",
    highlights: ["CSS Grid & Flexbox Systems", "Fluid Responsive Media Queries", "Custom Keyframe Animations & Glows", "Modern Glassmorphic UI Tokens"]
  }
];

export const projectsData = [
  {
    id: "childguard",
    title: "ChildGuard",
    subtitle: "AI-Powered Platform to Detect, Prevent & Protect Children Against Violence",
    badge: "Flagship AI Project",
    category: "AI & Safety",
    accentColor: "#ef4444",
    gradient: "linear-gradient(135deg, #ef4444 0%, #ec4899 50%, #8b5cf6 100%)",
    shortDesc: "An intelligent protective ecosystem designed to proactively identify signs of physical, verbal, and cyber abuse against minors using multimodal AI analysis and real-time intervention workflows.",
    longDesc: "ChildGuard is a mission-critical platform engineered to provide an automated safety shield for children across digital and physical environments. By leveraging AI-driven natural language analysis, computer vision threat indicators, and sentiment distress recognition, ChildGuard alerts verified guardians and child welfare authorities in real-time, drastically reducing reaction times in dangerous scenarios.",
    features: [
      "Multimodal Threat Detection: Analyzes text, sentiment markers, and behavioral indicators for harassment and distress.",
      "Instant Guardian Emergency Beacon: Automated dispatch of geo-tagged alerts to verified emergency contacts.",
      "Confidential Incident Reporting: Secure, anonymous whistleblower conduit for schools, educators, and children.",
      "Encrypted Audit Trail: Tamper-evident incident logs preserving evidentiary integrity for legal and safety compliance.",
      "Guardian & Authority Dashboard: High-priority queue with triage analytics and status lifecycle tracking."
    ],
    techStack: ["AI / Machine Learning", "React", "Java", "SQL", "WebSockets", "CSS3 / Glassmorphism"],
    architecture: [
      "Input ingestion from supervised interfaces (text feeds, sensor logs, user incident flags).",
      "AI Classification Engine evaluating sentiment thresholds and violence probability scores.",
      "Real-time Alert Dispatcher communicating through secure WebSockets and SMS gateways.",
      "Relational SQL storage storing encrypted records with role-based access control."
    ],
    demoType: "childguard"
  },
  {
    id: "chat-app",
    title: "Real-Time Chatting Application",
    subtitle: "Full-Featured Instant Messaging & Collaboration Platform",
    badge: "Full-Stack System",
    category: "Real-Time Web",
    accentColor: "#06b6d4",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)",
    shortDesc: "A responsive instant messaging web platform featuring live bi-directional socket messaging, multi-channel discussions, active user status indicators, and clean animatic UI.",
    longDesc: "Designed with an emphasis on low-latency synchronization and intuitive user experience, this chatting application enables seamless one-to-one messaging and group collaboration. The architecture features optimistic UI updates, message delivery states (sent, delivered, read), active typing indicators, and resilient state caching.",
    features: [
      "Bi-directional Socket Communication: Sub-second message synchronization across connected clients.",
      "Interactive Room & Direct Messaging: Support for team spaces and private end-to-end conversations.",
      "Live Presence & Typing Indicators: Real-time user status broadcast (online, away, typing).",
      "Responsive Glassmorphic UI: Adaptive sidebar, collapsible navigation, and mobile touch drawer.",
      "Searchable Message History: SQL-indexed conversation logs with fast timestamp lookup."
    ],
    techStack: ["React", "JavaScript", "WebSockets / Real-time API", "SQL", "CSS3 Animations", "Responsive UI"],
    architecture: [
      "Client UI constructed using modular React components and stateful connection managers.",
      "Bi-directional message dispatch handling payload validation and presence pings.",
      "SQL relational schema linking users, channels, message threads, and read receipts.",
      "Optimistic UI rendering to ensure instantaneous visual feedback on network lag."
    ],
    demoType: "chat"
  },
  {
    id: "weather-app",
    title: "Weather Monitoring App",
    subtitle: "Dynamic Meteorological Tracker with Animatic Environmental Visuals",
    badge: "Interactive Frontend",
    category: "Web Application",
    accentColor: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #10b981 50%, #06b6d4 100%)",
    shortDesc: "An interactive meteorological forecasting application with location intelligence, dynamic atmospheric ambient visual effects, and in-depth environmental metric telemetry.",
    longDesc: "The Weather Monitoring App transforms raw meteorological telemetry into an engaging visual experience. Featuring dynamic animated visual backdrops that change based on live atmospheric conditions (sunburst, raindrops, thunderstorms, drifting clouds), users receive real-time temperature, humidity, wind velocity, UV index, and 5-day predictive trends.",
    features: [
      "Dynamic Condition Themes: Animatic weather states matching real-world sky conditions.",
      "Comprehensive Climate Telemetry: Real-time tracking of humidity, wind speed, pressure, and UV index.",
      "Interactive City Search & Quick Switcher: Fast lookup across global metropolises.",
      "5-Day Visual Forecast: Clean card projections with high/low temperature spectrums.",
      "Fully Fluid Layout: Optimized for smartphones, tablets, and high-DPI desktop screens."
    ],
    techStack: ["React", "JavaScript (Async/Fetch)", "CSS3 Keyframes", "HTML5", "Weather API Integration"],
    architecture: [
      "RESTful API integration querying structured meteorological feeds.",
      "Data parsing pipeline computing dew point, comfort levels, and forecast trends.",
      "CSS Keyframe particle/backdrop engine dynamically switching based on condition code.",
      "Local storage cache preserving recent user cities and preference toggles."
    ],
    demoType: "weather"
  }
];

export const educationData = {
  degree: "Bachelor of Engineering (B.E.)",
  major: "Computer Science and Engineering",
  institution: "Anna University Affiliated Engineering College",
  period: "2022 - 2026",
  status: "Final Year Student",
  focusAreas: [
    "Object-Oriented Design & System Architecture",
    "Data Structures & Algorithms (Java / C++)",
    "Full-Stack Web Development & Modern Frameworks",
    "Relational Database Management Systems (SQL)",
    "Artificial Intelligence & Machine Learning Fundamentals",
    "Computer Networks & Secure Communications"
  ],
  milestones: [
    {
      year: "Year 4 (Current)",
      title: "Capstone & Advanced System Engineering",
      desc: "Developing ChildGuard AI platform, mastering production React workflows, and preparing for high-impact software engineering roles."
    },
    {
      year: "Year 3",
      title: "Web Technologies & Distributed Systems",
      desc: "Architected real-time chatting systems, integrated database systems with SQL, and developed dynamic web apps."
    },
    {
      year: "Year 2",
      title: "Core Computer Science Principles",
      desc: "In-depth mastery of Java OOP, Algorithms, Database Management Systems (SQL), Operating Systems, and Network Protocols."
    },
    {
      year: "Year 1",
      title: "Foundations of Engineering & Problem Solving",
      desc: "Built foundational skills in structured programming, computational logic, discrete mathematics, and web fundamentals."
    }
  ]
};

