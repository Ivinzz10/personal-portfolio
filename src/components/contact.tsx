import { ArrowUpRight, Mail } from "lucide-react";
import { portfolioIdentity } from "@/content/portfolio";
import { AnimatedLink } from "@/components/animated-link";
import { SectionReveal } from "@/components/section-reveal";

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="size-4 shrink-0 fill-current">
      <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="size-4 shrink-0 fill-current">
      <path d="M12 .297a12 12 0 0 0-3.79 23.39c.6.111.82-.261.82-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.304-5.467-1.333-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 6.007 0c2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.216.694.825.576A12 12 0 0 0 12 .297z" />
    </svg>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-20 bg-[#101F35] text-[#F4F6F8]"
    >
      <div className="mx-auto grid max-w-[1200px] gap-8 px-4 py-16 sm:px-5 sm:py-20 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-end md:gap-14 md:py-24 lg:gap-20 lg:px-6">
        <SectionReveal>
        <header>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#F4F6F8]/65">
            Contact
          </p>
          <h2
            id="contact-title"
            className="text-4xl font-semibold leading-tight tracking-[-0.055em] sm:text-5xl"
          >
            Get in touch
          </h2>
          <p className="mt-4 max-w-[42ch] text-sm leading-6 text-[#F4F6F8]/80 sm:text-base sm:leading-7">
            Reach me by email or connect through GitHub and LinkedIn.
          </p>
        </header>
        </SectionReveal>

        <SectionReveal>
        <ul className="grid gap-2 sm:grid-cols-2 sm:gap-3">
          <li className="sm:col-span-2">
            <AnimatedLink
              className="group flex min-h-16 items-center justify-between gap-3 border border-[#F4F6F8]/25 bg-[#234C78] px-4 py-4 text-base font-semibold text-[#F4F6F8] transition-colors hover:border-[#4B83B8] hover:bg-[#234C78]/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F4F6F8] motion-reduce:transition-none sm:px-5 sm:text-lg"
              href={`mailto:${portfolioIdentity.email}`}
            >
              <Mail aria-hidden="true" size={19} className="shrink-0 text-[#F4F6F8]/75" />
              <span className="break-all">{portfolioIdentity.email}</span>
              <ArrowUpRight aria-hidden="true" size={19} className="shrink-0 text-[#F4F6F8]/70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transition-none" />
            </AnimatedLink>
          </li>
          <li>
            <a
              className="group flex min-h-12 items-center justify-between gap-3 border-b border-[#F4F6F8]/25 py-3 text-sm font-medium text-[#F4F6F8]/85 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F4F6F8] motion-reduce:transition-none sm:text-base"
              href={portfolioIdentity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex items-center gap-2">
                <LinkedInIcon />
                LinkedIn
              </span>
              <ArrowUpRight aria-hidden="true" size={17} className="shrink-0 text-[#F4F6F8]/80 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1 motion-reduce:transition-none" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a
              className="group flex min-h-12 items-center justify-between gap-3 border-b border-[#F4F6F8]/25 py-3 text-sm font-medium text-[#F4F6F8]/85 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F4F6F8] motion-reduce:transition-none sm:text-base"
              href={portfolioIdentity.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex items-center gap-2">
                <GitHubIcon />
                GitHub
              </span>
              <ArrowUpRight aria-hidden="true" size={17} className="shrink-0 text-[#F4F6F8]/80 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1 motion-reduce:transition-none" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
        </SectionReveal>
      </div>
    </section>
  );
}
