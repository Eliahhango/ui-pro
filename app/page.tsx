import Link from "next/link";
import { Reveal } from "./components/reveal";
import { brand, contacts, processSteps, principles, services } from "./business";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden pb-6">
      <div className="grid-overlay" />

      <section className="container-frame pt-8 sm:pt-12">
        <Reveal className="panel rounded-3xl p-6 sm:p-9 lg:p-12">
          <p className="heading-tech text-xs uppercase tracking-[0.16em] text-[var(--accent-soft)]">
            Enterprise Delivery Unit
          </p>
          <h1 className="heading-tech mt-4 max-w-4xl text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            {brand.name}
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            {brand.positioning}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="heading-tech rounded-lg border border-[var(--line)] bg-[rgba(67,217,189,0.1)] px-4 py-3 text-xs uppercase tracking-[0.16em] text-[var(--accent-soft)] transition-colors duration-200 hover:bg-[rgba(67,217,189,0.18)]"
            >
              Start Engagement
            </Link>
            <Link
              href="/services"
              className="heading-tech rounded-lg border border-[var(--line)] px-4 py-3 text-xs uppercase tracking-[0.16em] text-[var(--gold)] transition-colors duration-200 hover:bg-[rgba(202,138,4,0.08)]"
            >
              Review Services
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="container-frame mt-8">
        <Reveal className="panel rounded-3xl p-6 sm:p-8 lg:p-10">
          <div className="mb-6 flex items-end justify-between gap-6">
            <div>
              <p className="heading-tech text-xs uppercase tracking-[0.16em] text-[var(--accent-soft)]">
                Core Services
              </p>
              <h2 className="heading-tech mt-3 text-2xl text-white sm:text-3xl">
                Implementation scope
              </h2>
            </div>
            <Link
              href="/services"
              className="text-xs uppercase tracking-[0.16em] text-[var(--muted)] transition-colors hover:text-white"
            >
              Full list
            </Link>
          </div>

          {services.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {services.slice(0, 4).map((service) => (
                <article key={service.name} className="panel rounded-2xl p-5">
                  <h3 className="heading-tech text-lg text-white">{service.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {service.summary}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <div className="panel rounded-2xl p-6">
              <p className="text-sm leading-7 text-[var(--muted)]">
                Real services are not configured yet. Add your verified service list in app/business.ts to populate this section.
              </p>
            </div>
          )}
        </Reveal>
      </section>

      <section className="container-frame mt-8">
        <Reveal className="panel rounded-3xl p-6 sm:p-8 lg:p-10">
          <p className="heading-tech text-xs uppercase tracking-[0.16em] text-[var(--gold)]">
            Delivery Principles
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {principles.map((principle) => (
              <article key={principle.title} className="panel rounded-2xl p-5">
                <h3 className="heading-tech text-base text-white">{principle.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {principle.detail}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="container-frame mt-8">
        <Reveal className="panel rounded-3xl p-6 sm:p-8 lg:p-10">
          <div className="mb-6 flex items-end justify-between gap-6">
            <div>
              <p className="heading-tech text-xs uppercase tracking-[0.16em] text-[var(--accent-soft)]">
                Operating Flow
              </p>
              <h2 className="heading-tech mt-3 text-2xl text-white sm:text-3xl">
                Project lifecycle
              </h2>
            </div>
            <Link
              href="/process"
              className="text-xs uppercase tracking-[0.16em] text-[var(--muted)] transition-colors hover:text-white"
            >
              View process page
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {processSteps.slice(0, 2).map((step) => (
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

      <section className="container-frame mt-8">
        <Reveal className="panel rounded-3xl p-6 sm:p-8">
          <p className="heading-tech text-xs uppercase tracking-[0.16em] text-[var(--gold)]">
            Contact Channel
          </p>
          {contacts.length > 0 ? (
            <ul className="mt-5 grid gap-3 text-sm text-[var(--muted)] sm:grid-cols-2">
              {contacts.map((contact) => (
                <li key={contact.href}>
                  <a
                    href={contact.href}
                    className="panel block rounded-xl p-4 transition-colors duration-200 hover:text-white"
                  >
                    <p className="heading-tech text-[10px] uppercase tracking-[0.16em] text-[var(--accent-soft)]">
                      {contact.label}
                    </p>
                    <p className="mt-1">{contact.value}</p>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              No verified contact details found yet. Add real contact information in app/business.ts.
            </p>
          )}
        </Reveal>
      </section>
    </main>
  );
}
