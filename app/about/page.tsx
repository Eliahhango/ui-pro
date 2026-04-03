import { Reveal } from "../components/reveal";
import { brand, principles } from "../business";

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden pb-6">
      <div className="grid-overlay" />

      <section className="container-frame pt-8 sm:pt-12">
        <Reveal className="panel rounded-3xl p-6 sm:p-9 lg:p-12">
          <p className="heading-tech text-xs uppercase tracking-[0.16em] text-[var(--accent-soft)]">
            About
          </p>
          <h1 className="heading-tech mt-4 text-4xl leading-tight text-[var(--foreground)] sm:text-5xl">
            Strategic technology partner
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            {brand.mission}
          </p>
        </Reveal>
      </section>

      <section className="container-frame mt-8">
        <Reveal className="panel rounded-3xl p-6 sm:p-8 lg:p-10">
          <p className="heading-tech text-xs uppercase tracking-[0.16em] text-[var(--gold)]">
            Operating principles
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {principles.map((principle) => (
              <article key={principle.title} className="panel rounded-2xl p-5">
                <h2 className="heading-tech text-lg text-[var(--foreground)]">{principle.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {principle.detail}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
