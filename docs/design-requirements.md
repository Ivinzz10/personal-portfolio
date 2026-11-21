# Portfolio Design Requirements

> **Purpose:** Design specification for future portfolio implementation. This document describes the requested visual and interaction direction; it does not authorize implementation in this step.

## 1. Overall direction

Create a sophisticated, modern, editorial-style software engineer portfolio for Ivin Sunny, using a restrained blue and neutral palette. The site should feel clean, intentional, human-designed, and specific to an engineer's work rather than like a generic developer template.

- Use generous whitespace, strong typography, clear hierarchy, and well-balanced layouts.
- Use blue selectively rather than making every section blue. Balance navy accents with off-white and neutral surfaces.
- Keep borders, shadows, and rounded corners restrained. Use visual treatments to support content, not compete with it.
- Present professional experience and projects clearly, with enough room for descriptions and owner-provided media.
- Use the portfolio content document as the source of truth for personal and professional facts. Do not add unconfirmed information.

## 2. Visual philosophy and color palette

Use the supplied HEX values as the visual palette. Deep navy can anchor selected areas such as the hero or footer; keep the overall page balanced and avoid making every section blue. Use primary blue for prominent interactive elements and accent blue sparingly for small highlights. Pair light surfaces with primary text, and dark navy surfaces with off-white text. Verify contrast for every final combination and do not rely on color alone to communicate meaning.

| Role | Color | HEX |
| --- | --- | --- |
| Dark anchor surface | Deep navy | `#101F35` |
| Primary blue | Blue | `#234C78` |
| Accent blue | Blue | `#4B83B8` |
| Light surface / text on dark surfaces | Off-white | `#F4F6F8` |
| Primary text on light surfaces | Dark neutral | `#252D38` |

Use `#234C78` for blue interactive emphasis where contrast permits. Use `#4B83B8` selectively for accents, and check text contrast before using it for small text on light surfaces. Do not introduce additional palette colors without approval.

### Avoid

- Excessive gradients or glowing effects.
- Glassmorphism as a repeated visual treatment.
- Floating decorative shapes.
- AI-generated illustrations.
- Excessive animations or unnecessary visual effects.
- Generic template-like layouts.

## 3. Typography

- Use a modern sans-serif family with strong, readable forms. Prefer a restrained type system and avoid decorative display faces.
- Use a clear hierarchy: large hero name/positioning, distinct section headings, readable body text, and compact labels for dates, roles, and technologies.
- Suggested desktop sizes: hero heading around `clamp(3rem, 6vw, 5.5rem)`, section headings around `2rem–3rem`, and body text around `1rem–1.125rem`.
- Suggested mobile sizes: hero heading around `2.5rem–3.5rem`, section headings around `1.75rem–2.25rem`, and body text at least `1rem`.
- Keep paragraph line length comfortable (about 60–75 characters where practical) and line height generous enough for scanning.
- Use weight and spacing consistently. Reserve all-caps or letter-spaced styling for small labels, if used.

## 4. Spacing and surfaces

- Use a consistent 4px base spacing scale, with common spacing steps such as 8, 12, 16, 24, 32, 48, 64, and 96px.
- Use a centered content container with a suggested maximum width of about 1120–1200px and responsive horizontal padding (about 24px desktop, 20px tablet, and 16px mobile).
- Give major sections generous vertical separation: approximately 88–120px on desktop and 64–80px on mobile, adjusted to content density.
- Use subtle borders, restrained shadows, and modest corner radii on cards and controls. Avoid excessive nested panels or decorative effects.
- Keep surfaces clean and editorial; use whitespace and alignment to distinguish sections before adding boxes or decoration.

## 5. Homepage structure

Keep the page as a coherent single-page portfolio with the following section order:

1. Navigation bar
2. Hero section
3. About me
4. Professional experience
5. Featured projects
6. Technical skills
7. Education
8. Achievements and certifications
9. Contact section
10. Footer

Use clear section headings and enough separation that each area can be found by scanning. Navigation links should target the corresponding sections with stable, descriptive IDs.

## 6. Layout guidance

### Desktop

- Use a centered content column with a persistent-feeling but visually light navigation bar at the top.
- Build the hero as a strong two-column composition: introduction and calls to action on one side, owner-supplied professional photo on the other. Keep the copy visually primary and the image contained in a considered crop or frame.
- Keep experience in a clean timeline or similarly structured list, with organization, role, dates, responsibilities, and technologies easy to scan.
- Give featured projects generous space. A varied editorial grid or large stacked cards may be used, provided project imagery and technical summaries remain legible and no project is obscured by decoration.
- Skills, education, and achievements should use compact, consistent groupings rather than dense walls of text.
- Align section edges and card grids to a shared layout system.

### Tablet and mobile

- Collapse the hero into a single column, preserving the introduction and actions before or alongside the supplied photo according to available space.
- Replace wide navigation with a keyboard-accessible compact menu when needed; every destination must remain reachable and the menu must expose its expanded state.
- Stack project cards and experience entries in one column on narrow screens. Keep titles, descriptions, technologies, and actions in a logical reading order.
- Reduce outer padding and section gaps progressively while retaining readable text and touch-friendly controls.
- Prevent horizontal overflow. Avoid layouts that require hover to reveal essential content.
- Ensure the profile image and project media scale within their containers without distortion.

## 7. Section requirements

### Navigation

- Include clear links to the page sections and provide an obvious way to reach contact information.
- Keep the navigation visually restrained and usable by keyboard and touch.
- Make mobile menu open/close behavior clear and accessible.

### Hero

- Present the owner's introduction and professional positioning prominently, using approved wording from `docs/portfolio-content.md`.
- Use the owner-provided profile photograph at `public/images/profile/profile.jpeg` (served at `/images/profile/profile.jpeg`).
- Provide clear calls to action for featured projects and resume download. The resume path in the content source is `/files/resume.pdf`.
- Include GitHub and LinkedIn links from the content source.
- Use strong typography and a polished responsive layout without inventing a tagline or adding unsupported claims.

### About and experience

- Use concise content drawn from the portfolio content source.
- Present 797th LLC and Techcake Cloud Innovations clearly using a professional timeline or similarly clean structure.
- Emphasize the supplied responsibilities, dates, employment details, and technologies without adding details or excessive prose.

### Featured projects

Present the following three projects: SustainAI, Smart Home Energy Optimization System, and Virtual Mouse Using Hand Gestures.

- Use only actual screenshots or other project media supplied by the owner. Current screenshots are listed in `docs/portfolio-content.md`; Virtual Mouse screenshots remain TODO.
- Include concise descriptions and technology lists from the content source.
- Display the verified repository links in `docs/portfolio-content.md`. Demo and documentation links remain TODO and must not be rendered as functional links unless the owner provides them.
- Give each project enough visual space to communicate its technical complexity without inventing metrics or outcomes.

### Skills, education, achievements, and certifications

- Use the content document's listed skills and details. Keep groups scannable and avoid implying skill levels that are not provided.
- Present education and achievements clearly, preserving names, dates, and results as written in the source.
- Do not add logos, badges, or certification graphics unless supplied or otherwise approved by the owner.

### Contact and footer

- Provide the supplied email, LinkedIn, and GitHub links in clear, accessible controls.
- Do not show a phone number unless the owner confirms it should be public.
- Keep the footer compact and consistent with the rest of the visual system.

## 8. Interaction and motion

- Use Framer Motion sparingly for subtle section entrances, transitions, and hover interactions.
- Prefer short, low-distance transitions and restrained opacity or transform changes. Avoid continuous motion, parallax-heavy effects, distracting effects, or animation that delays access to content.
- Provide smooth in-page scrolling where supported, while preserving browser navigation and keyboard behavior.
- Respect `prefers-reduced-motion`; reduce or remove nonessential movement when requested by the user system setting.
- Make hover states complementary to visible keyboard focus states. Do not make essential content available only on hover.

## 9. Accessibility and quality

- Use semantic HTML landmarks, headings in a logical order, descriptive link text, and accessible names for icon-only controls.
- Ensure all navigation and controls are operable by keyboard, with clearly visible focus indicators.
- Meet accessible color-contrast expectations for text, controls, borders, and focus states.
- Provide meaningful alt text for informative images; use empty alt text for purely decorative imagery.
- Maintain readable text size, comfortable spacing, and usable touch targets on mobile.
- Optimize supplied images for appropriate dimensions and formats without degrading clarity.
- Avoid unnecessary client-side JavaScript; use client components only where interactivity or animation requires them.

## 10. Technical implementation constraints

- Use the Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide React already present in the project.
- Build reusable components for repeated patterns while keeping the page understandable and accessible.
- Keep portfolio content separate from presentation where practical and source factual content from the approved content document.
- Follow the repository's `AGENTS.md` and the installed Next.js version's documentation before writing application code.
- Do not change framework configuration, dependency versions, or add libraries without a concrete requirement.

## 11. Assets and open items

- **Profile photograph:** `public/images/profile/profile.jpeg` — owner-provided.
- **SustainAI screenshots:** `public/images/projects/sustainai/dashboard.png`, `public/images/projects/sustainai/chat-interface.png`.
- **Smart Home screenshots:** `public/images/projects/smart-home/dashboard.png`, `public/images/projects/smart-home/energy-forecast.png`.
- **Virtual Mouse screenshots:** TODO — no screenshot files have been supplied.
- **Project repository links:** Use the verified links listed in `docs/portfolio-content.md`.
- **Project demos, additional documentation, and experience work samples:** TODO — use only owner-confirmed links and owner-provided assets.
- **Phone number visibility:** TODO — owner confirmation is required before display.

Until remaining TODO items are supplied or confirmed, leave their visual slots absent or clearly nonfunctional in any future draft; do not fabricate content, assets, or links.
