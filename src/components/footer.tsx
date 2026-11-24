import { portfolioIdentity, portfolioSections } from "@/content/portfolio";
import { cacheLife } from "next/cache";

async function getCurrentYear() {
  "use cache";
  cacheLife("hours");
  return new Date().getFullYear();
}

export async function Footer() {
  const currentYear = await getCurrentYear();

  return (
    <footer className="border-t border-[#F4F6F8]/15 bg-[#101F35] text-[#F4F6F8]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-4 py-7 sm:px-5 md:flex-row md:items-center md:justify-between lg:px-6">
        <div className="flex flex-col gap-1">
          <a
            href="#home"
            className="w-fit rounded-sm text-sm font-semibold tracking-[-0.02em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4B83B8]"
            aria-label={`${portfolioIdentity.name}, back to top`}
          >
            {portfolioIdentity.name}
          </a>
          <p className="text-xs leading-5 text-[#F4F6F8]/65">
            © {currentYear} {portfolioIdentity.name}
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs leading-5 text-[#F4F6F8]/75 sm:gap-x-5 sm:text-sm">
            {portfolioSections.map((section) => (
              <li key={section.href}>
                <a
                  className="rounded-sm transition-colors hover:text-[#F4F6F8] hover:underline hover:decoration-[#4B83B8] hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4B83B8] motion-reduce:transition-none"
                  href={section.href}
                >
                  {section.label}
                </a>
              </li>
            ))}
            <li>
              <a
                className="rounded-sm transition-colors hover:text-[#F4F6F8] hover:underline hover:decoration-[#4B83B8] hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4B83B8] motion-reduce:transition-none"
                href="#certifications"
              >
                Certifications
              </a>
            </li>
            <li>
              <a
                className="rounded-sm transition-colors hover:text-[#F4F6F8] hover:underline hover:decoration-[#4B83B8] hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4B83B8] motion-reduce:transition-none"
                href={portfolioIdentity.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                className="rounded-sm hover:text-[#F4F6F8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4B83B8]"
                href={portfolioIdentity.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
