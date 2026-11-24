import {
  achievementHighlights,
  additionalAchievements,
  certifications,
} from "@/content/portfolio";

export function Achievements() {
  return (
    <section
      id="achievements"
      aria-labelledby="achievements-title"
      className="scroll-mt-20 bg-[#101F35] text-[#F4F6F8]"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-5 sm:py-20 md:py-24 lg:px-6">
        <header className="mb-9 max-w-[700px] sm:mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#F4F6F8]/80">
            Recognition and involvement
          </p>
          <h2
            id="achievements-title"
            className="text-4xl font-semibold leading-tight tracking-[-0.06em] text-[#F4F6F8] sm:text-5xl lg:text-6xl"
          >
            Achievements
          </h2>
        </header>

        <div className="grid gap-x-10 gap-y-7 md:grid-cols-2 md:gap-y-9">
          {achievementHighlights.map((achievement) => (
            <article
              key={achievement.title}
              className="border-t-2 border-[#4B83B8] pt-4 sm:pt-5"
            >
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#F4F6F8] sm:text-2xl">
                {achievement.title}
              </h3>
              <p className="mt-2 max-w-[42ch] text-sm leading-6 text-[#F4F6F8]/80 sm:text-base sm:leading-7">
                {achievement.detail}
              </p>
            </article>
          ))}
        </div>

        <ul className="mt-9 space-y-4 border-t border-[#F4F6F8]/20 pt-6 sm:mt-11 sm:space-y-5 sm:pt-7">
          {additionalAchievements.map((achievement) => (
            <li
              key={achievement}
              className="flex max-w-[900px] gap-3 text-sm leading-6 text-[#F4F6F8]/85 sm:text-base sm:leading-7"
            >
              <span
                aria-hidden="true"
                className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-[#4B83B8]"
              />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>

        <section
          id="certifications"
          aria-labelledby="certifications-title"
          className="mt-14 rounded-lg bg-[#F4F6F8] px-5 py-7 text-[#252D38] sm:mt-16 sm:px-8 sm:py-9"
        >
          <header className="mb-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.13em] text-[#234C78]">
              Certifications
            </p>
            <h3
              id="certifications-title"
              className="text-xl font-semibold tracking-[-0.03em] text-[#252D38] sm:text-2xl"
            >
              Courses and credentials
            </h3>
          </header>

          <ul className="grid gap-x-10 md:grid-cols-2">
            {certifications.map((certification) => (
              <li
                key={certification.name}
                className="border-t border-[#252D38]/15 py-4 sm:py-5"
              >
                <h4 className="text-base font-semibold leading-6 text-[#252D38] sm:text-lg">
                  {certification.name}
                </h4>
                <p className="mt-1 text-sm leading-6 text-[#252D38]/75 sm:text-base">
                  {certification.description}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
