import { Reveal } from "../components/reveal";
import { processSteps } from "../business";

export default function ProcessPage() {
  return (
    <main className="relative overflow-hidden pb-6">
      <div className="grid-overlay" />

      <section className="container-frame pt-8 sm:pt-12">
        <Reveal className="panel rounded-3xl p-6 sm:p-9 lg:p-12">
          <p className="heading-tech text-xs uppercase tracking-[0.16em] text-[var(--accent-soft)]">
            Process
          </p>
          <h1 className="heading-tech mt-4 text-4xl leading-tight text-[var(--foreground)] sm:text-5xl">
            Controlled delivery lifecycle
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            A disciplined sequence ensures quality, clarity, and operational continuity across every project stage.
          </p>
        </Reveal>
      </section>

      <section className="container-frame mt-8">
        <Reveal className="panel rounded-3xl p-6 sm:p-8 lg:p-10">
          <div className="grid gap-4 md:grid-cols-2">
            {processSteps.map((step) => (
              <article key={step.stage} className="panel rounded-2xl p-5">
                <p className="heading-tech text-xs uppercase tracking-[0.16em] text-[var(--gold)]">
                  {step.stage}
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
