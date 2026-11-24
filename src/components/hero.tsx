import Image from "next/image";
import {
  Award,
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  MapPin,
} from "lucide-react";
import {
  heroCredentials,
  portfolioIdentity,
  professionalIntroduction,
} from "@/content/portfolio";
import { AnimatedLink } from "@/components/animated-link";
import { HeroEntrance } from "@/components/hero-entrance";

export function Hero() {
  const credentialIcons = {
    award: Award,
    graduationCap: GraduationCap,
    briefcase: Briefcase,
  } as const;

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="hero-surface relative isolate scroll-mt-20 overflow-hidden bg-[#101F35] text-[#F4F6F8] max-md:scroll-mt-16"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-0 px-4 py-10 sm:px-5 md:grid md:items-start md:gap-14 md:py-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)] lg:gap-20 lg:px-6 lg:py-24">
        <div className="max-w-[680px] max-md:contents">
          <div className="order-0 max-md:text-center md:order-none">
            <HeroEntrance className="order-0 md:order-none" delay={0}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#F4F6F8]/70 md:mb-4 md:text-sm">
              {portfolioIdentity.designation}
              </p>
            </HeroEntrance>
            <HeroEntrance className="order-0 md:order-none" delay={0.1}>
              <h1
                id="hero-title"
                className="text-[clamp(3.5rem,8vw,6.75rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-[#F4F6F8] max-md:text-[3rem]"
              >
                {portfolioIdentity.name}
              </h1>
            </HeroEntrance>
          </div>
          <HeroEntrance className="order-3 mt-5 max-w-[620px] space-y-4 text-base leading-7 text-[#F4F6F8]/85 md:order-none md:mt-8 md:text-lg md:leading-8 max-md:space-y-3 max-md:text-[0.9375rem] max-md:leading-[1.65]" delay={0.16}>
            <p>
              {professionalIntroduction.opening}
              <strong className="font-semibold text-[#F4F6F8]">
                {professionalIntroduction.emphasis}
              </strong>
              {professionalIntroduction.continuation}
            </p>
            <p>{professionalIntroduction.current}</p>
          </HeroEntrance>

          <HeroEntrance className="order-4 mt-5 md:order-none md:mt-6" delay={0.42}>
            <p className="flex items-center gap-2 text-sm text-[#F4F6F8]/75">
            <MapPin aria-hidden="true" size={16} className="shrink-0 text-[#4B83B8]" />
            {portfolioIdentity.location}
            </p>
          </HeroEntrance>

          <HeroEntrance className="order-5 mt-6 md:order-none md:mt-8" delay={0.52}>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <AnimatedLink
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#F4F6F8] px-5 py-3 text-sm font-semibold text-[#101F35] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4B83B8] motion-reduce:transition-none max-md:w-full"
              href="#projects"
            >
              View featured projects
              <ArrowRight aria-hidden="true" size={17} className="transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
            </AnimatedLink>
            <AnimatedLink
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-md border border-[#F4F6F8]/35 px-5 py-3 text-sm font-semibold text-[#F4F6F8] transition-colors hover:border-[#F4F6F8] hover:bg-[#F4F6F8]/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4B83B8] motion-reduce:transition-none max-md:w-full"
              href={portfolioIdentity.resume}
              download
            >
              Download résumé
              <ArrowDownToLine aria-hidden="true" size={17} className="transition-transform group-hover:translate-y-0.5 group-focus-visible:translate-y-0.5 motion-reduce:transition-none" />
            </AnimatedLink>
          </div>
          </HeroEntrance>

          <HeroEntrance className="order-6 mt-5 md:order-none md:mt-8" delay={0.6}>
          <div className="flex flex-wrap gap-x-6 gap-y-3 max-md:gap-x-5 max-md:gap-y-2">
            <a
              className="group inline-flex min-h-10 items-center gap-2 rounded-sm text-sm font-medium text-[#F4F6F8]/85 underline decoration-[#4B83B8] underline-offset-4 hover:text-[#F4F6F8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4B83B8]"
              href={portfolioIdentity.github}
              target="_blank"
              rel="noreferrer"
            >
              <ArrowUpRight aria-hidden="true" size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1 motion-reduce:transition-none" />
              GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              className="group inline-flex min-h-10 items-center gap-2 rounded-sm text-sm font-medium text-[#F4F6F8]/85 underline decoration-[#4B83B8] underline-offset-4 hover:text-[#F4F6F8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4B83B8]"
              href={portfolioIdentity.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <ArrowUpRight aria-hidden="true" size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1 motion-reduce:transition-none" />
              LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          </HeroEntrance>
        </div>

        <div className="relative order-2 mx-auto mt-4 flex w-full max-w-[420px] flex-col items-center md:order-none md:mt-0 max-md:mt-3">
        <HeroEntrance portrait className="relative w-full max-w-[330px] lg:max-w-[390px] max-md:max-w-[155px]" delay={0.34}>
          <div
            aria-hidden="true"
            className="absolute -right-3 -top-3 z-0 aspect-[0.76] w-full border border-[#4B83B8]/70 max-md:aspect-[732/1000]"
          />
          <div className="relative z-10 aspect-[0.76] overflow-hidden border border-[#F4F6F8]/20 bg-[#EAF0F6] shadow-[0_24px_60px_rgba(0,0,0,0.25)] max-md:aspect-[732/1000]">
            <Image
              src={portfolioIdentity.profileImage}
              alt="Portrait of Ivin Sunny"
              fill
              priority
              sizes="(max-width: 767px) 155px, (max-width: 1024px) 330px, 390px"
              className="object-cover object-center"
            />
          </div>
        </HeroEntrance>
        <ul
          aria-label="Professional credentials"
          className="mt-4 flex w-full flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-2.5"
        >
          {heroCredentials.map((credential, index) => {
            const Icon = credentialIcons[credential.icon];

            return (
              <li
                key={credential.label}
                className="flex w-full max-w-full justify-center sm:w-auto sm:justify-start"
              >
                <HeroEntrance
                  className="max-w-full"
                  delay={0.5 + index * 0.08}
                  subtle
                >
                  <div
                    className={`flex min-h-10 w-fit max-w-full items-center gap-2 border px-3 py-2 text-sm leading-5 ${
                      credential.featured
                        ? "border-[#4B83B8]/65 bg-[#234C78] font-semibold text-[#F4F6F8]"
                        : "border-[#F4F6F8]/20 bg-[#F4F6F8]/5 font-medium text-[#F4F6F8]/90"
                    }`}
                  >
                    <Icon
                      aria-hidden="true"
                      size={16}
                      className="shrink-0 text-[#4B83B8]"
                    />
                    <span className="min-w-0">{credential.label}</span>
                  </div>
                </HeroEntrance>
              </li>
            );
          })}
        </ul>
        </div>
      </div>
    </section>
  );
}
