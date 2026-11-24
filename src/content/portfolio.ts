export const portfolioIdentity = {
  name: "Ivin Sunny",
  designation: "Junior Software Engineer",
  location: "Kannur, Kerala, India",
  email: "ivinsunny10@gmail.com",
  github: "https://github.com/Ivinzz10",
  linkedin: "https://www.linkedin.com/in/ivinsunny",
  resume: "/files/resume.pdf",
  profileImage: "/images/profile/profile.jpeg",
} as const;

export const portfolioSections = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
] as const;

export const professionalIntroduction = {
  opening:
    "I'm a Computer Science and Engineering graduate and Junior Software Engineer who enjoys building intelligent, practical software solutions. My experience spans ",
  emphasis:
    "backend development, full-stack engineering, and AI-powered applications",
  continuation:
    ", with hands-on work in Rust, Python, LLMs, and modern web technologies.",
  current:
    "Currently, I'm contributing to an AI-powered content generation platform at 797th LLC. I'm passionate about exploring emerging technologies, solving challenging problems, and turning ideas into meaningful products.",
} as const;

export const heroCredentials = [
  { label: "GATE 2026 Qualified", icon: "award", featured: true },
  {
    label: "B.Tech Computer Science and Engineering",
    icon: "graduationCap",
    featured: false,
  },
  {
    label: "Junior Software Engineer",
    icon: "briefcase",
    featured: false,
  },
] as const;

export const aboutContent = {
  background:
    "With a background in Computer Science and Engineering, I’m interested in the ways software engineering, backend and full-stack development, and artificial intelligence come together.",
  interests: [
    "Software Engineering",
    "Artificial Intelligence and Machine Learning",
    "Generative AI and LLM Applications",
    "Agentic AI Systems",
    "Backend Development",
    "Full-Stack Development",
    "Computer Vision",
  ],
} as const;

export const professionalExperience = [
  {
    role: "Junior Software Engineer",
    organization: "797th LLC",
    dates: "October 2026 – Present",
    details: ["Part-time", "Remote"],
    responsibilities: [
      "Developing an AI-powered blog generation platform focused on automated content creation, Search Engine Optimization (SEO), and Answer Engine Optimization (AEO).",
      "Contributing to AI-driven content generation workflows using Rust, Tokio, PostgreSQL, and LLM APIs.",
      "Working on content generation, research integration, and content quality improvements, including headline generation, source linking, and claim verification.",
      "Integrating supporting tools and services, including SearXNG, Ghost, and Docker Compose.",
    ],
    technologies: [
      "Rust",
      "Tokio",
      "PostgreSQL",
      "LLM APIs",
      "SearXNG",
      "Ghost",
      "Docker Compose",
    ],
    current: true,
  },
  {
    role: "Full Stack Intern",
    organization: "Techcake Cloud Innovations LLP",
    dates: "December 2025 – January 2026",
    responsibilities: [
      "Contributed to full-stack web application development, working on frontend, backend, and application features.",
      "Participated in development, testing, debugging, and troubleshooting.",
      "Collaborated on software development tasks with a focus on problem-solving and code quality.",
    ],
    current: false,
  },
] as const;

export const featuredProjects = [
  {
    number: "01",
    name: "SustainAI",
    subtitle: "AI-Powered Waste Disposal Management System",
    dates: "May 2026 – June 2026",
    purpose:
      "A waste-disposal management system centered on environmental analysis, web research, and waste classification.",
    approach:
      "A multi-agent AI system with a master orchestrator coordinating specialized agents for environmental analysis, web research, waste classification, visualization, and summarization.",
    contributions: [
      "Developed a master orchestrator to coordinate specialized AI agents.",
      "Integrated Ollama-based LLMs and YOLO computer vision.",
      "Integrated environmental APIs to retrieve relevant environmental data.",
      "Implemented waste image analysis and actionable insight generation.",
      "Built a Flask backend with automated HTML dashboard generation.",
      "Implemented concurrent agent execution and session-based context.",
      "Developed interactive environmental intelligence reporting.",
    ],
    technologies: [
      "Python",
      "Flask",
      "Ollama",
      "YOLO",
      "SQLite",
      "Matplotlib",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    repository: "https://github.com/Ivinzz10/Sustain_AI",
    images: [
      {
        src: "/images/projects/sustainai/dashboard.png",
        alt: "SustainAI environmental analysis and waste-risk dashboard.",
        caption: "Environmental intelligence dashboard",
        aspectRatio: "2 / 1",
      },
      {
        src: "/images/projects/sustainai/chat-interface.png",
        alt: "SustainAI chat interface for waste-disposal questions.",
        caption: "Chat interface",
        aspectRatio: "2 / 1",
      },
    ],
  },
  {
    number: "02",
    name: "Smart Home Energy Optimization System",
    subtitle: "IoT-Based Energy Monitoring and LSTM Forecasting",
    dates: "October 2025 – March 2026",
    purpose:
      "An IoT-based system for real-time appliance energy monitoring and energy-consumption forecasting.",
    approach:
      "ESP32 devices monitor appliance energy use, a Firebase dashboard visualizes consumption, and an LSTM model forecasts energy consumption from time-series data.",
    contributions: [
      "Developed an appliance energy monitoring system using ESP32.",
      "Built a Firebase dashboard to visualize energy consumption.",
      "Processed time-series energy data for machine learning.",
      "Developed an LSTM-based forecasting model for energy consumption prediction.",
    ],
    technologies: ["Python", "TensorFlow", "Firebase", "ESP32", "Pandas"],
    repository: "https://github.com/Ivinzz10/Smart_Energy_Management_System",
    images: [
      {
        src: "/images/projects/smart-home/dashboard.png",
        alt: "Smart home dashboard showing appliance monitoring and power consumption.",
        caption: "Appliance monitoring dashboard",
        aspectRatio: "2 / 1",
      },
      {
        src: "/images/projects/smart-home/energy-forecast.png",
        alt: "Smart home energy forecast view with usage and appliance summaries.",
        caption: "Energy forecasting view",
        aspectRatio: "2.35 / 1",
      },
    ],
  },
  {
    number: "03",
    name: "Virtual Mouse Using Hand Gestures",
    subtitle: "Computer Vision-Based Virtual Mouse",
    dates: "December 2024 – March 2025",
    purpose:
      "A virtual mouse that supports cursor movement, clicking, scrolling, and screenshot operations using hand gestures.",
    approach:
      "Implemented real-time hand tracking and gesture recognition to enable mouse interaction through hand gestures.",
    contributions: [
      "Implemented real-time hand tracking.",
      "Developed gesture recognition functionality.",
      "Enabled cursor movement and mouse interaction using hand gestures.",
      "Integrated clicking, scrolling, and screenshot operations.",
    ],
    technologies: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI", "Tkinter"],
    repository: "https://github.com/Ivinzz10/Virtual_Mouse",
    images: [],
  },
] as const;

export const technicalSkillGroups = [
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "C", "JavaScript", "SQL"],
  },
  {
    category: "Web Development",
    skills: ["HTML", "CSS", "React", "Flask", "Node.js", "REST APIs"],
  },
  {
    category: "Artificial Intelligence and Machine Learning",
    skills: ["Machine Learning", "Large Language Models (LLMs)", "AI Agents", "TensorFlow", "Pandas", "YOLO"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "SQLite", "Firebase"],
  },
  {
    category: "Developer Tools",
    skills: ["Git", "GitHub", "Ollama", "Docker Compose", "CLI"],
  },
  {
    category: "Core Computer Science",
    skills: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Software Development Life Cycle",
    ],
  },
] as const;

export const educationHistory = [
  {
    qualification: "B.Tech — Computer Science and Engineering",
    institution: "Vimal Jyothi Engineering College",
    duration: "2022–2026",
    resultLabel: "CGPA",
    result: "8.59/10",
  },
  {
    qualification: "Senior Secondary — Class XII (CBSE)",
    institution: "St. Antony's Public School",
    duration: "2022",
    resultLabel: "Percentage",
    result: "87.8%",
  },
  {
    qualification: "Secondary School — Class X",
    institution: "Sree Sankara Vidyapeetam",
    duration: "2020",
    resultLabel: "Percentage",
    result: "90.6%",
  },
] as const;

export const achievementHighlights = [
  {
    title: "GATE 2026",
    detail: "Qualified GATE 2026 in Computer Science and Information Technology.",
  },
  {
    title: "SAP Hackfest 2025",
    detail: "Won the regional round and qualified for the State-Hub Round.",
  },
] as const;

export const additionalAchievements = [
  "Participated in FlowZint AI Hackathon 2026.",
  "Participated in Shaastra Techathon 2024 (IIT Madras).",
  "Served as Computer Science Department Head Coordinator and Website Developer for the college Techfest.",
] as const;

export const certifications = [
  {
    name: "Google Cloud Data Analytics (Virtual)",
    description: "BigQuery, Dataflow, SQL, ETL.",
  },
  {
    name: "Learn SAP ABAP by Doing (Udemy)",
    description: "SAP ABAP Programming Fundamentals.",
  },
] as const;
