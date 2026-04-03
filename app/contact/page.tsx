import { Reveal } from "../components/reveal";
import { contacts } from "../business";

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden pb-6">
      <div className="grid-overlay" />

      <section className="container-frame pt-8 sm:pt-12">
        <Reveal className="panel rounded-3xl p-6 sm:p-9 lg:p-12">
          <p className="heading-tech text-xs uppercase tracking-[0.16em] text-[var(--accent-soft)]">
            Contact
          </p>
          <h1 className="heading-tech mt-4 text-4xl leading-tight text-white sm:text-5xl">
            Start a focused engagement
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            Use verified contact channels only. This page intentionally avoids lead magnets, fake urgency, and template clutter.
          </p>
        </Reveal>
      </section>

      <section className="container-frame mt-8">
        <Reveal className="panel rounded-3xl p-6 sm:p-8 lg:p-10">
          {contacts.length > 0 ? (
            <ul className="grid gap-4 md:grid-cols-2">
              {contacts.map((contact) => (
                <li key={contact.href}>
                  <a
                    href={contact.href}
                    className="panel block rounded-2xl p-5 transition-colors duration-200 hover:text-white"
                  >
                    <p className="heading-tech text-xs uppercase tracking-[0.16em] text-[var(--accent-soft)]">
                      {contact.label}
                    </p>
                    <p className="mt-2 text-sm text-[var(--muted)]">{contact.value}</p>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="panel rounded-2xl p-6">
              <p className="text-sm leading-7 text-[var(--muted)]">
                No verified contact details found. Add your real channels in app/business.ts to activate this page.
              </p>
            </div>
          )}
        </Reveal>
      </section>
    </main>
  );
}
