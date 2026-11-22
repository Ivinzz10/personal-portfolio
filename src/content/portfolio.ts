export const portfolioIdentity = {
  name: "Ivin Sunny",
  designation: "Junior Software Engineer",
  location: "Kannur, Kerala, India",
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

export const professionalIntroduction = [
  "Computer Science and Engineering graduate and Junior Software Engineer with experience developing AI-powered applications, full-stack systems, and data-driven solutions.",
  "Currently contributing to an AI-powered content generation platform, working with Rust, LLM APIs, backend technologies, and automated content workflows.",
  "Hands-on experience with multi-agent AI systems, machine learning, computer vision, API integration, and database management.",
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
