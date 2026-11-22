import { educationHistory } from "@/content/portfolio";

export function Education() {
  const [degree, ...schoolEducation] = educationHistory;

  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="scroll-mt-20 border-t border-[#252D38]/10 bg-[#F4F6F8]"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-5 sm:py-20 md:py-24 lg:px-6">
        <header className="mb-9 max-w-[700px] sm:mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#234C78]">
            Education
          </p>
          <h2
            id="education-title"
            className="text-3xl font-semibold leading-tight tracking-[-0.045em] text-[#252D38] sm:text-4xl"
          >
            Education
          </h2>
        </header>

        <article className="border-l-2 border-[#234C78] py-1 pl-5 sm:pl-8">
          <div className="grid gap-4 md:grid-cols-[minmax(150px,0.45fr)_minmax(0,1.55fr)] md:gap-10">
            <p className="text-sm font-medium leading-6 text-[#234C78]">
              {degree.duration}
            </p>
            <div>
              <h3 className="text-xl font-semibold leading-snug tracking-[-0.03em] text-[#252D38] sm:text-2xl">
                {degree.qualification}
              </h3>
              <p className="mt-2 text-base leading-6 text-[#252D38]/80 sm:text-lg">
                {degree.institution}
              </p>
              <p className="mt-3 text-sm leading-6 text-[#252D38]/75">
                <span className="font-medium text-[#252D38]">{degree.resultLabel}:</span>{" "}
                {degree.result}
              </p>
            </div>
          </div>
        </article>

        <div className="mt-9 grid gap-x-10 sm:mt-12 sm:grid-cols-2">
          {schoolEducation.map((education) => (
            <article
              key={education.qualification}
              className="border-t border-[#252D38]/15 py-5 sm:py-6"
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
          ))}
        </div>
      </div>
    </section>
  );
}
