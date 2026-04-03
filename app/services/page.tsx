import Link from "next/link";
import { Reveal } from "../components/reveal";
import { services } from "../business";

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden pb-6">
      <div className="grid-overlay" />

      <section className="container-frame pt-8 sm:pt-12">
        <Reveal className="panel rounded-3xl p-6 sm:p-9 lg:p-12">
          <p className="heading-tech text-xs uppercase tracking-[0.16em] text-[var(--accent-soft)]">
            Services
          </p>
          <h1 className="heading-tech mt-4 text-4xl leading-tight text-white sm:text-5xl">
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
                  <h2 className="heading-tech text-lg text-white">{service.name}</h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {service.summary}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <div className="panel rounded-2xl p-6">
              <p className="text-sm leading-7 text-[var(--muted)]">
                Real service data is not configured yet. Add verified services in app/business.ts to finalize this page.
              </p>
            </div>
          )}

          <div className="mt-8">
            <Link
              href="/contact"
              className="heading-tech inline-flex rounded-lg border border-[var(--line)] px-4 py-3 text-xs uppercase tracking-[0.16em] text-[var(--gold)] transition-colors duration-200 hover:bg-[rgba(202,138,4,0.08)]"
            >
              Discuss scope
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
