import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/content/portfolio";

type ProjectImage = (typeof featuredProjects)[number]["images"][number];

function ProjectScreenshot({
  image,
}: {
  image: ProjectImage;
}) {
  return (
    <figure className="min-w-0">
      <div
        className="relative w-full overflow-hidden rounded-sm border border-[#252D38]/15 bg-[#101F35]"
        style={{ aspectRatio: image.aspectRatio }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 600px"
          className="object-contain"
        />
      </div>
      <figcaption className="mt-2 text-xs leading-5 text-[#252D38]/65 sm:text-sm">
        {image.caption}
      </figcaption>
    </figure>
  );
}

function TechnologyList({ technologies }: { technologies: readonly string[] }) {
  return (
    <div className="mt-7 border-t border-[#252D38]/15 pt-4">
      <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#234C78]">
        Technology stack
      </h4>
      <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-2">
        {technologies.map((technology) => (
          <li
            key={technology}
            className="border border-[#234C78]/20 px-2.5 py-1 text-xs font-medium leading-5 text-[#252D38]/85"
          >
            {technology}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectLink({ href }: { href: string }) {
  return (
    <a
      className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-[#234C78] underline decoration-[#4B83B8] underline-offset-4 hover:text-[#101F35] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4B83B8]"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      View source on GitHub
      <ArrowUpRight aria-hidden="true" size={17} />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function Projects() {
  const [sustainAi, smartHome, virtualMouse] = featuredProjects;

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="scroll-mt-20 border-t border-[#252D38]/10 bg-[#F4F6F8]"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-5 sm:py-20 md:py-24 lg:px-6">
        <header className="mb-12 max-w-[700px] sm:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#234C78]">
            Selected work
          </p>
          <h2
            id="projects-title"
            className="text-3xl font-semibold leading-tight tracking-[-0.045em] text-[#252D38] sm:text-4xl"
          >
            Projects
          </h2>
        </header>

        <article aria-labelledby="sustainai-title" className="border-t border-[#252D38]/15 py-9 sm:py-12">
          <div className="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-sm font-medium text-[#234C78]">
                {sustainAi.number} <span aria-hidden="true">/</span> {sustainAi.dates}
              </p>
              <h3
                id="sustainai-title"
                className="text-3xl font-semibold tracking-[-0.045em] text-[#252D38] sm:text-4xl"
              >
                {sustainAi.name}
              </h3>
              <p className="mt-2 text-base font-medium text-[#252D38]/70 sm:text-lg">
                {sustainAi.subtitle}
              </p>
            </div>
            <ProjectLink href={sustainAi.repository} />
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-12">
            <div>
              <div className="space-y-6 text-sm leading-6 text-[#252D38]/85 sm:text-base sm:leading-7">
                <div>
                  <h4 className="mb-1 font-semibold text-[#252D38]">Problem addressed</h4>
                  <p>{sustainAi.purpose}</p>
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-[#252D38]">Solution</h4>
                  <p>{sustainAi.approach}</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-[#252D38]">Contributions</h4>
                  <ul className="space-y-2.5">
                    {sustainAi.contributions.map((contribution) => (
                      <li key={contribution} className="flex gap-3">
                        <span aria-hidden="true" className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-[#4B83B8]" />
                        <span>{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <TechnologyList technologies={sustainAi.technologies} />
            </div>

            <div className="space-y-5">
              <ProjectScreenshot image={sustainAi.images[0]} />
              <div className="ml-auto w-full md:w-[78%]">
                <ProjectScreenshot image={sustainAi.images[1]} />
              </div>
            </div>
          </div>
        </article>

        <article aria-labelledby="smart-home-title" className="border-t border-[#252D38]/15 py-9 sm:py-12">
          <div className="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-[780px]">
              <p className="mb-2 text-sm font-medium text-[#234C78]">
                {smartHome.number} <span aria-hidden="true">/</span> {smartHome.dates}
              </p>
              <h3
                id="smart-home-title"
                className="text-3xl font-semibold tracking-[-0.045em] text-[#252D38] sm:text-4xl"
              >
                {smartHome.name}
              </h3>
              <p className="mt-2 text-base font-medium text-[#252D38]/70 sm:text-lg">
                {smartHome.subtitle}
              </p>
            </div>
            <ProjectLink href={smartHome.repository} />
          </div>

          <div className="grid gap-6 text-sm leading-6 text-[#252D38]/85 sm:grid-cols-2 sm:gap-10 sm:text-base sm:leading-7">
            <div>
              <h4 className="mb-1 font-semibold text-[#252D38]">Problem addressed</h4>
              <p>{smartHome.purpose}</p>
            </div>
            <div>
              <h4 className="mb-1 font-semibold text-[#252D38]">Solution</h4>
              <p>{smartHome.approach}</p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 md:gap-6">
            {smartHome.images.map((image) => (
              <ProjectScreenshot key={image.src} image={image} />
            ))}
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.8fr)] lg:gap-12">
            <div>
              <h4 className="mb-3 font-semibold text-[#252D38]">Contributions</h4>
              <ul className="space-y-2.5 text-sm leading-6 text-[#252D38]/85 sm:text-base sm:leading-7">
                {smartHome.contributions.map((contribution) => (
                  <li key={contribution} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-[#4B83B8]" />
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <TechnologyList technologies={smartHome.technologies} />
            </div>
          </div>
        </article>

        <article aria-labelledby="virtual-mouse-title" className="border-t border-[#252D38]/15 py-9 sm:py-12">
          <div className="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-[780px]">
              <p className="mb-2 text-sm font-medium text-[#234C78]">
                {virtualMouse.number} <span aria-hidden="true">/</span> {virtualMouse.dates}
              </p>
              <h3
                id="virtual-mouse-title"
                className="text-3xl font-semibold tracking-[-0.045em] text-[#252D38] sm:text-4xl"
              >
                {virtualMouse.name}
              </h3>
              <p className="mt-2 text-base font-medium text-[#252D38]/70 sm:text-lg">
                {virtualMouse.subtitle}
              </p>
            </div>
            <ProjectLink href={virtualMouse.repository} />
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
            <div className="space-y-6 text-sm leading-6 text-[#252D38]/85 sm:text-base sm:leading-7">
              <div>
                <h4 className="mb-1 font-semibold text-[#252D38]">Problem addressed</h4>
                <p>{virtualMouse.purpose}</p>
              </div>
              <div>
                <h4 className="mb-1 font-semibold text-[#252D38]">Solution</h4>
                <p>{virtualMouse.approach}</p>
              </div>
            </div>

            <div className="border-l border-[#234C78]/25 pl-5 sm:pl-7">
              <h4 className="mb-3 font-semibold text-[#252D38]">Contributions</h4>
              <ul className="space-y-3 text-sm leading-6 text-[#252D38]/85 sm:text-base sm:leading-7">
                {virtualMouse.contributions.map((contribution) => (
                  <li key={contribution} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-[#4B83B8]" />
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <TechnologyList technologies={virtualMouse.technologies} />
        </article>
      </div>
    </section>
  );
}
