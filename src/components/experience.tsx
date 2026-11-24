import { professionalExperience } from "@/content/portfolio";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="scroll-mt-20 bg-[#F4F6F8]"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-5 sm:py-20 md:py-24 lg:px-6">
        <div className="mb-10 max-w-[680px] sm:mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#234C78]">
            Professional experience
          </p>
          <h2
            id="experience-title"
            className="text-4xl font-semibold leading-tight tracking-[-0.055em] text-[#101F35] sm:text-5xl"
          >
            Experience
          </h2>
        </div>

        <ol className="space-y-10 border-l border-[#234C78]/25 sm:space-y-14">
          {professionalExperience.map((experience) => (
            <li key={`${experience.organization}-${experience.role}`} className="relative pl-6 sm:pl-8">
              <span
                aria-hidden="true"
                className={`absolute -left-[5px] top-2.5 size-2.5 rounded-full ring-4 ring-[#F4F6F8] ${
                  experience.current ? "bg-[#234C78]" : "bg-[#4B83B8]"
                }`}
              />

              <article
                className={`grid gap-5 md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-10 lg:gap-16 ${
                  experience.current
                    ? "bg-[#101F35] p-5 text-[#F4F6F8] sm:p-8"
                    : "py-2"
                }`}
              >
                <div>
                  <p className={`text-sm font-medium leading-6 ${experience.current ? "text-[#F4F6F8]" : "text-[#234C78]"}`}>
                    {experience.dates}
                  </p>
                  {experience.current && (
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#F4F6F8]/65">
                      Current role
                    </p>
                  )}
                  {"details" in experience && (
                    <p className={`mt-1 text-sm leading-6 ${experience.current ? "text-[#F4F6F8]/70" : "text-[#252D38]/65"}`}>
                      {experience.details.join(" · ")}
                    </p>
                  )}
                </div>

                <div>
                  <h3
                      className={`tracking-[-0.035em] ${experience.current ? "text-[#F4F6F8]" : "text-[#252D38]"} ${
                      experience.current
                        ? "text-2xl font-semibold sm:text-[1.75rem]"
                        : "text-xl font-semibold sm:text-2xl"
                    }`}
                  >
                    {experience.role}
                  </h3>
                  <p className={`mt-1 text-base font-medium ${experience.current ? "text-[#F4F6F8]/85" : "text-[#234C78]"}`}>
                    {experience.organization}
                  </p>

                  <ul className={`mt-5 space-y-3 text-sm leading-6 sm:text-base sm:leading-7 ${experience.current ? "text-[#F4F6F8]/85" : "text-[#252D38]/85"}`}>
                    {experience.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex gap-3">
                        <span aria-hidden="true" className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-[#4B83B8]" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>

                  {"technologies" in experience && (
                    <div className={`mt-6 border-t pt-4 ${experience.current ? "border-[#F4F6F8]/20" : "border-[#252D38]/10"}`}>
                      <h4 className={`text-xs font-semibold uppercase tracking-[0.12em] ${experience.current ? "text-[#F4F6F8]/75" : "text-[#234C78]"}`}>
                        Technologies
                      </h4>
                      <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-2">
                        {experience.technologies.map((technology) => (
                          <li
                            key={technology}
                            className={`rounded-sm border px-2.5 py-1 text-xs font-medium leading-5 ${experience.current ? "border-[#F4F6F8]/25 text-[#F4F6F8]/85" : "border-[#234C78]/15 text-[#252D38]/80"}`}
                          >
                            {technology}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
