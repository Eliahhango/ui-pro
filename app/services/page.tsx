import Link from "next/link";
import { Reveal } from "../components/reveal";
import { processSteps, services } from "../business";

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden pb-6">
      <div className="grid-overlay" />

      <section className="container-frame pt-8 sm:pt-12">
        <Reveal className="panel rounded-3xl p-6 sm:p-9 lg:p-12">
          <p className="heading-tech text-xs uppercase tracking-[0.16em] text-[var(--accent-soft)]">
            Services
          </p>
          <h1 className="heading-tech mt-4 text-4xl leading-tight text-[var(--foreground)] sm:text-5xl">
            Capability portfolio
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            Engagements are scoped for outcomes, not noise. Every service block should reflect verified delivery capabilities.
          </p>
        </Reveal>
      </section>

      <section className="container-frame mt-8">
        <Reveal className="panel rounded-3xl p-6 sm:p-8 lg:p-10">
          {services.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {services.map((service) => (
                <article key={service.name} className="panel rounded-2xl p-5">
                  <h2 className="heading-tech text-lg text-[var(--foreground)]">{service.name}</h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {service.summary}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {processSteps.map((step) => (
                <article key={step.stage} className="panel rounded-2xl p-5">
                  <p className="heading-tech text-xs uppercase tracking-[0.16em] text-[var(--gold)]">
                    {step.stage}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{step.description}</p>
                </article>
              ))}
            </div>
          )}

          <div className="mt-8">
            <Link
              href="/contact"
              className="heading-tech inline-flex rounded-full bg-[var(--accent)] px-4 py-3 text-xs uppercase tracking-[0.16em] text-white transition-colors duration-200 hover:bg-[var(--accent-strong)]"
            >
              Discuss scope
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
