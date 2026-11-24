import { educationHistory } from "@/content/portfolio";
import { SectionReveal } from "@/components/section-reveal";

export function Education() {
  const [degree, ...schoolEducation] = educationHistory;

  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="scroll-mt-20 border-t border-[#234C78]/10 bg-[#EAF0F6]"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-5 sm:py-20 md:py-24 lg:px-6">
        <SectionReveal className="mb-9 max-w-[700px] sm:mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#234C78]">
            Education
          </p>
          <h2
            id="education-title"
            className="text-4xl font-semibold leading-tight tracking-[-0.055em] text-[#101F35] sm:text-5xl"
          >
            Education
          </h2>
        </SectionReveal>

        <SectionReveal>
          <article className="border-l-2 border-[#4B83B8] bg-[#101F35] p-5 text-[#F4F6F8] sm:p-8">
          <div className="grid gap-4 md:grid-cols-[minmax(150px,0.45fr)_minmax(0,1.55fr)] md:gap-10">
            <p className="text-sm font-medium leading-6 text-[#F4F6F8]/75">
              {degree.duration}
            </p>
            <div>
              <h3 className="text-xl font-semibold leading-snug tracking-[-0.03em] text-[#F4F6F8] sm:text-2xl">
                {degree.qualification}
              </h3>
              <p className="mt-2 text-base leading-6 text-[#F4F6F8]/80 sm:text-lg">
                {degree.institution}
              </p>
              <p className="mt-3 text-sm leading-6 text-[#F4F6F8]/75">
                <span className="font-medium text-[#F4F6F8]">{degree.resultLabel}:</span>{" "}
                {degree.result}
              </p>
            </div>
          </div>
          </article>
        </SectionReveal>

        <div className="mt-9 grid gap-x-10 sm:mt-12 sm:grid-cols-2">
          {schoolEducation.map((education, index) => (
            <SectionReveal key={education.qualification} delay={0.1 + index * 0.1}>
              <article
              className="border-t border-[#234C78]/20 py-5 sm:py-6"
              >
              <p className="text-sm font-medium leading-6 text-[#234C78]">
                {education.duration}
              </p>
              <h3 className="mt-2 text-base font-semibold leading-6 text-[#252D38] sm:text-lg">
                {education.qualification}
              </h3>
              <p className="mt-1 text-sm leading-6 text-[#252D38]/75 sm:text-base">
                {education.institution}
              </p>
              <p className="mt-2 text-sm leading-6 text-[#252D38]/75">
                <span className="font-medium text-[#252D38]">{education.resultLabel}:</span>{" "}
                {education.result}
              </p>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
