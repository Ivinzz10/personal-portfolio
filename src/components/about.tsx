import { aboutContent } from "@/content/portfolio";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-20 border-b border-[#234C78]/15 bg-[#EAF0F6]"
    >
      <div className="mx-auto grid max-w-[1200px] gap-8 px-4 py-16 sm:px-5 sm:py-20 md:grid-cols-[minmax(220px,0.75fr)_minmax(0,1.25fr)] md:gap-14 md:py-24 lg:gap-20 lg:px-6">
        <div className="border-l-2 border-[#4B83B8] pl-5 sm:pl-7">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#234C78]">
            About
          </p>
          <h2
            id="about-title"
            className="max-w-[12ch] text-4xl font-semibold leading-[1.05] tracking-[-0.055em] text-[#101F35] sm:text-5xl"
          >
            Background &amp; direction
          </h2>
        </div>

        <div className="max-w-[720px]">
          <p className="max-w-[62ch] text-lg leading-8 text-[#252D38] sm:text-xl sm:leading-9">
            {aboutContent.background}
          </p>

          <div className="mt-8 border-t border-[#234C78]/20 pt-5 sm:mt-10">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#234C78]">
              Areas of interest
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2 text-sm leading-6 text-[#252D38] sm:gap-2.5 sm:text-base">
              {aboutContent.interests.map((interest) => (
                <li key={interest} className="border border-[#234C78]/20 bg-[#F4F6F8]/70 px-3 py-1.5">
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
