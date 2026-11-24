import { ArrowUpRight, Mail } from "lucide-react";
import { portfolioIdentity } from "@/content/portfolio";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-20 bg-[#234C78] text-[#F4F6F8]"
    >
      <div className="mx-auto grid max-w-[1200px] gap-8 px-4 py-16 sm:px-5 sm:py-20 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-end md:gap-14 md:py-24 lg:gap-20 lg:px-6">
        <header>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#F4F6F8]/80">
            Contact
          </p>
          <h2
            id="contact-title"
            className="text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl"
          >
            Get in touch
          </h2>
          <p className="mt-4 max-w-[42ch] text-sm leading-6 text-[#F4F6F8]/80 sm:text-base sm:leading-7">
            Reach me by email or connect through GitHub and LinkedIn.
          </p>
        </header>

        <ul className="grid gap-2 sm:grid-cols-2 sm:gap-3">
          <li className="sm:col-span-2">
            <a
              className="flex min-h-16 items-center gap-3 rounded-md bg-[#F4F6F8] px-4 py-4 text-base font-semibold text-[#101F35] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F4F6F8] motion-reduce:transition-none sm:px-5 sm:text-lg"
              href={`mailto:${portfolioIdentity.email}`}
            >
              <Mail aria-hidden="true" size={19} className="shrink-0 text-[#234C78]" />
              <span className="break-all">{portfolioIdentity.email}</span>
            </a>
          </li>
          <li>
            <a
              className="flex min-h-12 items-center justify-between gap-3 border-b border-[#F4F6F8]/30 py-3 text-sm font-medium text-[#F4F6F8]/90 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F4F6F8] sm:text-base"
              href={portfolioIdentity.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <ArrowUpRight aria-hidden="true" size={17} className="shrink-0 text-[#F4F6F8]/80" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a
              className="flex min-h-12 items-center justify-between gap-3 border-b border-[#F4F6F8]/30 py-3 text-sm font-medium text-[#F4F6F8]/90 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F4F6F8] sm:text-base"
              href={portfolioIdentity.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <ArrowUpRight aria-hidden="true" size={17} className="shrink-0 text-[#F4F6F8]/80" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
