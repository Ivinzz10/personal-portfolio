import { technicalSkillGroups } from "@/content/portfolio";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="scroll-mt-20 border-t border-[#252D38]/10 bg-[#F4F6F8]"
    >
      <div className="mx-auto grid max-w-[1200px] gap-9 px-4 py-16 sm:px-5 sm:py-20 md:grid-cols-[minmax(190px,0.65fr)_minmax(0,1.35fr)] md:gap-14 md:py-24 lg:gap-20 lg:px-6">
        <header>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#234C78]">
            Skills
          </p>
          <h2
            id="skills-title"
            className="text-3xl font-semibold leading-tight tracking-[-0.045em] text-[#252D38] sm:text-4xl"
          >
            Technical skills
          </h2>
        </header>

        <dl className="grid gap-x-8 gap-y-7 sm:grid-cols-2 sm:gap-y-9">
          {technicalSkillGroups.map((group) => (
            <div key={group.category} className="border-t border-[#252D38]/15 pt-4">
              <dt className="text-base font-semibold leading-6 text-[#252D38]">
                {group.category}
              </dt>
              <dd className="mt-2 text-sm leading-6 text-[#252D38]/80 sm:text-base sm:leading-7">
                {group.skills.join(" · ")}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
