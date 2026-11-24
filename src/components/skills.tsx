import { technicalSkillGroups } from "@/content/portfolio";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="scroll-mt-20 bg-[#EAF0F6] text-[#252D38]"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-5 sm:py-20 md:py-24 lg:px-6">
        <header className="mb-9 max-w-[700px] sm:mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#234C78]">
            Skills
          </p>
          <h2
            id="skills-title"
            className="text-4xl font-semibold leading-tight tracking-[-0.055em] text-[#101F35] sm:text-5xl"
          >
            Technical skills
          </h2>
        </header>

        <dl className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 sm:gap-y-9 lg:grid-cols-3 lg:gap-x-10">
          {technicalSkillGroups.map((group) => (
            <div key={group.category} className="border-t border-[#234C78]/20 pt-4">
              <dt className="text-base font-semibold leading-6 text-[#101F35]">
                {group.category}
              </dt>
              <dd className="mt-3 flex flex-wrap gap-x-2 gap-y-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-[#234C78]/25 bg-[#F4F6F8]/60 px-2.5 py-1 text-sm leading-6 text-[#252D38]"
                  >
                    {skill}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
