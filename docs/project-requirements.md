# Portfolio Project Requirements

> **Status:** Requirements for future implementation. The website has not been implemented by this document update.
>
> **Content authority:** Use [`portfolio-content.md`](portfolio-content.md) for personal and professional facts, and [`design-requirements.md`](design-requirements.md) for visual and interaction direction. Items marked TODO require owner confirmation.

## 1. Project Overview

Create a personal portfolio website for Ivin Sunny to showcase professional experience, software engineering skills, AI and machine learning projects, education, and achievements. The site should present the owner's approved content clearly and provide straightforward access to project details, resume, and contact links.

## 2. Core Features

- Responsive single-page portfolio with the sections below in the order specified in `design-requirements.md`:
  1. Navigation
  2. Hero with introduction and profile photograph
  3. About
  4. Professional experience
  5. Featured projects
  6. Technical skills
  7. Education
  8. Achievements and certifications
  9. Contact
  10. Footer
- Navigation links that move to the relevant sections using smooth scrolling where supported.
- A hero section with owner-approved introduction, a profile photograph once supplied, calls to action, and GitHub and LinkedIn links.
- Clearly structured About, professional experience, technical skills, education, achievements, and certifications sections.
- A contact section and footer with owner-approved contact and social links.

## 3. Project Presentation

Feature these projects from the content source:

- SustainAI
- Smart Home Energy Optimization System
- Virtual Mouse Using Hand Gestures

Keep the portfolio as a single-page website. Present each project in a detailed section or card within that page; do not create separate project routes. Include an accurate description, technology stack, project screenshots when provided, and a GitHub link when verified by the owner. Project detail content may include the source's supplied dates and contributions.

- Use only owner-provided screenshots, diagrams, and other project assets.
- Do not display TODO values as functional links or imply that an unavailable demo or repository exists.
- Do not invent metrics, outcomes, implementation details, or project assets.
- Keep project descriptions concise and technically meaningful, following the content source.

## 4. Resume

- Provide a downloadable PDF resume at the path `/files/resume.pdf`, sourced from the file stored under `public/files/`.
- Ensure the download link works with desktop and mobile browsers.
- Keep the resume action clearly labeled and keyboard accessible.
- The actual resume file must be supplied by the owner before the link is considered ready for release.

## 5. Contact and Social Integration

- Provide the owner's confirmed GitHub and LinkedIn links from `portfolio-content.md`.
- Provide email contact functionality as a `mailto:` link to the verified address `ivinsunny10@gmail.com`.
- Do not display a phone number unless the owner confirms it should be public.
- Do not implement a backend contact form or use an external email service.
- Do not add unconfirmed social profiles, contact details, or third-party integrations.

## 6. SEO and Discoverability

- Set an accurate page title and meta description based on approved portfolio content.
- Provide Open Graph metadata for link previews.
- Use a logical, semantic heading hierarchy and crawlable text content.
- Add descriptive alt text for informative images and empty alt text for decorative images.
- Provide a sitemap and `robots.txt` appropriate to the production site.
- Use semantic HTML and meaningful page/section structure so content can be indexed.
- Do not include unsupported claims or placeholder content in metadata.

## 7. Performance

- Optimize owner-provided images for suitable dimensions and formats while preserving quality.
- Minimize unnecessary client-side JavaScript and use Server Components by default where appropriate.
- Add client-side behavior only for features that require it, such as interactive controls or selected animations.
- Avoid unnecessary dependencies and third-party requests.
- Maintain good loading performance across mobile and desktop connections.

## 8. Accessibility

- Support keyboard navigation for all links, buttons, menus, and interactive elements.
- Use accessible names, descriptive labels, and appropriate semantics for controls.
- Maintain sufficient color contrast and visible keyboard focus indicators, following the design specification.
- Respect reduced-motion preferences and avoid making essential content dependent on animation.
- Use semantic HTML landmarks, a logical heading order, and descriptive alt text.
- Ensure responsive layouts remain readable and usable with touch input.

## 9. Technical Architecture

- Use the Next.js App Router and TypeScript.
- Use Tailwind CSS for styling, Framer Motion for restrained motion where appropriate, and Lucide React for icons.
- Build reusable components for repeated presentation patterns.
- Keep content/data separate from presentation where practical, and use `portfolio-content.md` as the factual source during implementation.
- Maintain a clear, understandable folder structure consistent with the existing repository.
- Preserve the existing dependency versions and project configuration unless an approved requirement makes a specific change necessary.

## 10. Deployment

- Maintain the project in its GitHub repository.
- Deploy the production site to Vercel.
- Verify a production build before deployment.
- Support a custom domain if one is configured later.
- Do not publish until public-facing content, owner-provided assets, links, and deployment settings are ready and approved.

## 11. Development Guidelines

- Follow repository instructions in `AGENTS.md`.
- Follow `design-requirements.md` for visual, responsive, interaction, and accessibility direction.
- Follow `portfolio-content.md` as the source of truth for all personal and professional details.
- Do not invent personal information, project details, employment responsibilities, achievements, technical experience, metrics, links, or outcomes.
- Do not create fake project links or metrics. Keep TODO items unavailable as functional public content until confirmed.
- Do not implement features beyond these agreed requirements without owner approval.
- Follow the installed Next.js version's documentation before writing application code, as required by `AGENTS.md`.

## 12. Acceptance Criteria

- The site presents the agreed sections and the three featured projects in a responsive, accessible layout.
- Navigation works across desktop and mobile and supports keyboard use.
- Resume download, contact email, and social links work only when their referenced owner-provided files and verified details are available.
- Email contact opens a `mailto:` link to `ivinsunny10@gmail.com`; no backend form or external email service is used.
- All three project details are presented within the single page using approved content, screenshots, and links only; no separate project routes are created.
- SEO metadata, sitemap, and `robots.txt` are present and reflect the approved production site configuration.
- Reduced-motion preferences are honored, images are optimized, and unnecessary client-side JavaScript is avoided.
- The production build is verified before deployment, and no public-facing content relies on invented or unconfirmed information.
