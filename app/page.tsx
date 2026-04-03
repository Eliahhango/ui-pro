"use client";

import { motion, useReducedMotion } from "framer-motion";
import { brand, contacts, services } from "./business";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  const reducedMotion = useReducedMotion();

  const motionProps = reducedMotion
    ? { initial: false, animate: {} }
    : { initial: "hidden", animate: "show" };

  return (
    <main className="relative overflow-hidden pb-16">
      <div className="grid-overlay" />

      <motion.section
        className="container-frame pt-8 sm:pt-14"
        variants={container}
        {...motionProps}
      >
        <motion.div
          variants={item}
          className="panel rounded-3xl p-6 sm:p-8 lg:p-10"
        >
          <div className="mb-8 flex items-center justify-between gap-4">
            <p className="heading-tech text-xs uppercase text-[var(--accent-soft)]">
              Elitechwiz // Strategic Technology Unit
            </p>
            <div className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_18px_rgba(67,217,189,0.9)]" />
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div variants={item}>
              <h1 className="heading-tech text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                {brand.name}
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                {brand.positioning}
              </p>
            </motion.div>

            <motion.div variants={item} className="panel rounded-2xl p-5">
              <p className="heading-tech text-xs uppercase tracking-[0.16em] text-[var(--gold)]">
                Contact Channel
              </p>

              {contacts.length > 0 ? (
                <ul className="mt-5 space-y-3 text-sm text-[var(--muted)]">
                  {contacts.map((contact) => (
                    <li key={contact.href}>
                      <a
                        href={contact.href}
                        className="group inline-flex items-center gap-3 transition-colors duration-200 hover:text-white"
                      >
                        <span className="heading-tech text-[10px] uppercase tracking-[0.14em] text-[var(--accent-soft)]">
                          {contact.label}
                        </span>
                        <span>{contact.value}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-5 text-sm leading-6 text-[var(--muted)]">
                  No verified contact details were found in this repository.
                  Add them in app/business.ts.
                </p>
              )}
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        className="container-frame mt-8"
        variants={container}
        {...motionProps}
      >
        <motion.div variants={item} className="panel rounded-3xl p-6 sm:p-8 lg:p-10">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="heading-tech text-xs uppercase tracking-[0.16em] text-[var(--accent-soft)]">
                Service Matrix
              </p>
              <h2 className="heading-tech mt-3 text-2xl text-white sm:text-3xl">
                Verified service inventory
              </h2>
            </div>
          </div>

          {services.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {services.map((service) => (
                <motion.article
                  key={service.name}
                  whileHover={reducedMotion ? undefined : { y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="panel rounded-2xl p-5"
                >
                  <h3 className="heading-tech text-lg text-white">{service.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {service.summary}
                  </p>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="panel rounded-2xl p-6">
              <p className="text-sm leading-7 text-[var(--muted)]">
                No verified services were found in the existing project content.
                Add your real services in app/business.ts and they will render here automatically.
              </p>
            </div>
          )}
        </motion.div>
      </motion.section>

      <motion.section
        className="container-frame mt-8"
        variants={container}
        {...motionProps}
      >
        <motion.div variants={item} className="panel rounded-3xl p-6 sm:p-8">
          <p className="heading-tech text-xs uppercase tracking-[0.16em] text-[var(--gold)]">
            Operating Protocol
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            This site is intentionally minimal and confidence-led: no fabricated
            testimonials, no invented metrics, and no decorative clutter. It is
            built to scale from verified business facts only.
          </p>
        </motion.div>
      </motion.section>
    </main>
  );
}
