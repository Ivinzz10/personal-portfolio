import { aboutContent } from "@/content/portfolio";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-20 border-b border-[#252D38]/10 bg-[#F4F6F8]"
    >
      <div className="mx-auto grid max-w-[1200px] gap-8 px-4 py-16 sm:px-5 sm:py-20 md:grid-cols-[minmax(220px,0.75fr)_minmax(0,1.25fr)] md:gap-14 md:py-24 lg:gap-20 lg:px-6">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#234C78]">
            About
          </p>
          <h2
            id="about-title"
            className="max-w-[12ch] text-3xl font-semibold leading-tight tracking-[-0.045em] text-[#252D38] sm:text-4xl"
          >
            Background &amp; direction
          </h2>
        </div>

        <div className="max-w-[720px]">
          <p className="text-base leading-7 text-[#252D38]/85 sm:text-lg sm:leading-8">
            {aboutContent.background}
          </p>

          <div className="mt-8 border-t border-[#252D38]/15 pt-5 sm:mt-10">
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#234C78]">
              Areas of interest
            </h3>
            <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-sm leading-6 text-[#252D38] sm:text-base">
              {aboutContent.interests.map((interest, index) => (
                <li key={interest} className="inline-flex items-center gap-3">
                  {index > 0 && (
                    <span aria-hidden="true" className="text-[#4B83B8]">
                      /
                    </span>
                  )}
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
