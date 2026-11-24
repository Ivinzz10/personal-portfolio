import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/content/portfolio";

type Project = (typeof featuredProjects)[number];
type ProjectImage = Project["images"][number];

function ProjectScreenshot({ image }: { image: ProjectImage }) {
  return (
    <figure className="min-w-0">
      <div
        className="relative w-full overflow-hidden border border-[#252D38]/15 bg-[#101F35]"
        style={{ aspectRatio: image.aspectRatio }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 55vw, 640px"
          className="object-contain"
        />
      </div>
      <figcaption className="mt-2 text-xs leading-5 text-[#252D38]/70 sm:text-sm">
        {image.caption}
      </figcaption>
    </figure>
  );
}

function TechnologyList({
  technologies,
  dark = false,
}: {
  technologies: readonly string[];
  dark?: boolean;
}) {
  return (
    <div
      className={`mt-7 border-t pt-4 ${dark ? "border-[#F4F6F8]/20" : "border-[#252D38]/15"}`}
    >
      <h4
        className={`text-xs font-semibold uppercase tracking-[0.12em] ${dark ? "text-[#F4F6F8]/75" : "text-[#234C78]"}`}
      >
        Technology stack
      </h4>
      <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-2">
        {technologies.map((technology) => (
          <li
            key={technology}
            className={`border px-2.5 py-1 text-xs font-medium leading-5 ${dark ? "border-[#F4F6F8]/25 text-[#F4F6F8]/85" : "border-[#234C78]/20 text-[#252D38]/85"}`}
          >
            {technology}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectLink({ href, dark = false }: { href: string; dark?: boolean }) {
  return (
    <a
      className={`inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold underline decoration-[#4B83B8] underline-offset-4 transition-colors hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4B83B8] motion-reduce:transition-none ${dark ? "text-[#F4F6F8] hover:text-white" : "text-[#234C78] hover:text-[#101F35]"}`}
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

function Contributions({
  items,
  dark = false,
}: {
  items: readonly string[];
  dark?: boolean;
}) {
  return (
    <ul
      className={`space-y-2.5 text-sm leading-6 sm:text-base sm:leading-7 ${dark ? "text-[#F4F6F8]/85" : "text-[#252D38]/85"}`}
    >
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-[#4B83B8]"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ProjectHeading({
  project,
  id,
  dark = false,
}: {
  project: Project;
  id: string;
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div className="max-w-[780px]">
        <p
          className={`mb-2 text-sm font-medium ${dark ? "text-[#F4F6F8]/70" : "text-[#234C78]"}`}
        >
          {project.number} <span aria-hidden="true">/</span> {project.dates}
        </p>
        <h3
          id={id}
          className={`text-3xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-4xl lg:text-5xl ${dark ? "text-[#F4F6F8]" : "text-[#101F35]"}`}
        >
          {project.name}
        </h3>
        <p
          className={`mt-2 text-base font-medium sm:text-lg ${dark ? "text-[#F4F6F8]/75" : "text-[#252D38]/70"}`}
        >
          {project.subtitle}
        </p>
      </div>
      <ProjectLink href={project.repository} dark={dark} />
    </div>
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
        <header className="mb-12 flex flex-col gap-4 border-b border-[#252D38]/15 pb-7 sm:mb-14 sm:flex-row sm:items-end sm:justify-between sm:pb-9">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#234C78]">
              Selected work
            </p>
            <h2
              id="projects-title"
              className="text-4xl font-semibold leading-tight tracking-[-0.055em] text-[#101F35] sm:text-5xl"
            >
              Projects
            </h2>
          </div>
          <p className="max-w-[34ch] text-sm leading-6 text-[#252D38]/70 sm:text-base">
            Software, AI, and data-driven systems.
          </p>
        </header>

        <article
          aria-labelledby="sustainai-title"
          className="bg-[#EAF0F6] p-5 sm:p-8 lg:p-10"
        >
          <ProjectHeading project={sustainAi} id="sustainai-title" />
          <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-12">
            <div className="space-y-5">
              <ProjectScreenshot image={sustainAi.images[0]} />
              <div className="ml-auto w-full md:w-[78%]">
                <ProjectScreenshot image={sustainAi.images[1]} />
              </div>
            </div>
            <div className="min-w-0">
              <div className="space-y-5 text-sm leading-6 text-[#252D38]/85 sm:text-base sm:leading-7">
                <div>
                  <h4 className="mb-1 font-semibold text-[#101F35]">Problem addressed</h4>
                  <p>{sustainAi.purpose}</p>
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-[#101F35]">Solution</h4>
                  <p>{sustainAi.approach}</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-[#101F35]">Contributions</h4>
                  <Contributions items={sustainAi.contributions} />
                </div>
              </div>
              <TechnologyList technologies={sustainAi.technologies} />
            </div>
          </div>
        </article>

        <article
          aria-labelledby="smart-home-title"
          className="mt-10 border-y border-[#252D38]/15 py-9 sm:mt-14 sm:py-12"
        >
          <ProjectHeading project={smartHome} id="smart-home-title" />
          <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-12">
            <div className="min-w-0">
              <div className="space-y-5 text-sm leading-6 text-[#252D38]/85 sm:text-base sm:leading-7">
                <div>
                  <h4 className="mb-1 font-semibold text-[#101F35]">Problem addressed</h4>
                  <p>{smartHome.purpose}</p>
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-[#101F35]">Solution</h4>
                  <p>{smartHome.approach}</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-[#101F35]">Contributions</h4>
                  <Contributions items={smartHome.contributions} />
                </div>
              </div>
              <TechnologyList technologies={smartHome.technologies} />
            </div>
            <div className="space-y-5">
              <ProjectScreenshot image={smartHome.images[0]} />
              <div className="ml-auto w-full md:w-[88%]">
                <ProjectScreenshot image={smartHome.images[1]} />
              </div>
            </div>
          </div>
        </article>

        <article
          aria-labelledby="virtual-mouse-title"
          className="mt-10 bg-[#101F35] p-5 text-[#F4F6F8] sm:mt-14 sm:p-8 lg:p-10"
        >
          <ProjectHeading project={virtualMouse} id="virtual-mouse-title" dark />
          <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
            <div className="space-y-5 text-sm leading-6 text-[#F4F6F8]/85 sm:text-base sm:leading-7">
              <div>
                <h4 className="mb-1 font-semibold text-[#F4F6F8]">Problem addressed</h4>
                <p>{virtualMouse.purpose}</p>
              </div>
              <div>
                <h4 className="mb-1 font-semibold text-[#F4F6F8]">Solution</h4>
                <p>{virtualMouse.approach}</p>
              </div>
            </div>
            <div className="border-l border-[#4B83B8]/60 pl-5 sm:pl-7">
              <h4 className="mb-3 font-semibold text-[#F4F6F8]">Contributions</h4>
              <Contributions items={virtualMouse.contributions} dark />
            </div>
          </div>
          <TechnologyList technologies={virtualMouse.technologies} dark />
        </article>
      </div>
    </section>
  );
}
