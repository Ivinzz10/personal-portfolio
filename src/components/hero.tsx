import Image from "next/image";
import { ArrowDownToLine, ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { portfolioIdentity, professionalIntroduction } from "@/content/portfolio";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="scroll-mt-20 bg-[#101F35] text-[#F4F6F8] max-md:scroll-mt-16"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-0 px-4 py-10 sm:px-5 md:grid md:items-center md:gap-14 md:py-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)] lg:gap-20 lg:px-6 lg:py-24">
        <div className="max-w-[680px] max-md:contents">
          <h1
            id="hero-title"
            className="order-1 text-[clamp(3.25rem,8vw,6rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-[#F4F6F8] max-md:text-center max-md:text-[3rem]"
          >
            {portfolioIdentity.name}
          </h1>
          <div className="order-3 mt-5 max-w-[620px] space-y-4 text-base leading-7 text-[#F4F6F8]/85 md:order-none md:mt-8 md:text-lg md:leading-8 max-md:space-y-3 max-md:text-[0.9375rem] max-md:leading-[1.65]">
            {professionalIntroduction.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <p className="order-4 mt-5 flex items-center gap-2 text-sm text-[#F4F6F8]/75 md:order-none md:mt-6">
            <MapPin aria-hidden="true" size={16} className="shrink-0 text-[#4B83B8]" />
            {portfolioIdentity.location}
          </p>

          <div className="order-5 mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:order-none md:mt-8">
            <a
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#F4F6F8] px-5 py-3 text-sm font-semibold text-[#101F35] transition-colors hover:bg-[#F4F6F8]/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4B83B8] motion-reduce:transition-none max-md:w-full"
              href="#projects"
            >
              View featured projects
              <ArrowRight aria-hidden="true" size={17} />
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md border border-[#F4F6F8]/35 px-5 py-3 text-sm font-semibold text-[#F4F6F8] transition-colors hover:border-[#F4F6F8] hover:bg-[#F4F6F8]/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4B83B8] motion-reduce:transition-none max-md:w-full"
              href={portfolioIdentity.resume}
              download
            >
              Download résumé
              <ArrowDownToLine aria-hidden="true" size={17} />
            </a>
          </div>

          <div className="order-6 mt-5 flex flex-wrap gap-x-6 gap-y-3 md:order-none md:mt-8 max-md:gap-x-5 max-md:gap-y-2">
            <a
              className="inline-flex min-h-10 items-center gap-2 rounded-sm text-sm font-medium text-[#F4F6F8]/85 underline decoration-[#4B83B8] underline-offset-4 hover:text-[#F4F6F8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4B83B8]"
              href={portfolioIdentity.github}
              target="_blank"
              rel="noreferrer"
            >
              <ArrowUpRight aria-hidden="true" size={17} />
              GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              className="inline-flex min-h-10 items-center gap-2 rounded-sm text-sm font-medium text-[#F4F6F8]/85 underline decoration-[#4B83B8] underline-offset-4 hover:text-[#F4F6F8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4B83B8]"
              href={portfolioIdentity.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <ArrowUpRight aria-hidden="true" size={17} />
              LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>

        <div className="order-2 mx-auto mt-4 w-full max-w-[340px] lg:max-w-[420px] max-md:mt-3 max-md:max-w-[170px] md:order-none md:mt-0">
          <div className="relative aspect-[0.76] overflow-hidden rounded-sm border border-[#F4F6F8]/15 bg-[#F4F6F8] shadow-[0_24px_60px_rgba(16,31,53,0.18)] max-md:aspect-[732/1000]">
            <Image
              src={portfolioIdentity.profileImage}
              alt="Portrait of Ivin Sunny"
              fill
              priority
              sizes="(max-width: 767px) 170px, (max-width: 1024px) 340px, 420px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
