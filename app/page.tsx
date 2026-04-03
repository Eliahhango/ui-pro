"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { brand, contacts, processSteps, principles, services } from "./business";

const heroSignals = [
  {
    title: "Security-first baseline",
    detail:
      "Architecture, delivery, and handover stay under one operating standard from the first brief.",
  },
  {
    title: "Visible delivery rhythm",
    detail:
      "Visitors immediately understand that scope, checkpoints, and ownership are structured.",
  },
  {
    title: "Operational continuity",
    detail:
      "The final impression is not launch-day flash. It is maintainability, control, and calm handover.",
  },
];

const sectionTransition = {
  duration: 0.62,
  ease: [0.22, 1, 0.36, 1] as const,
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: sectionTransition,
  },
};

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="heading-tech text-[11px] uppercase tracking-[0.24em] text-[var(--accent-soft)]">
      {children}
    </p>
  );
}

export default function HomePage() {
  const reducedMotion = useReducedMotion();

  return (
    <main className="relative overflow-hidden pb-10 sm:pb-14">
      <div className="grid-overlay" />
      <div className="page-aura" />

      <section className="container-frame pt-8 sm:pt-10">
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="grid gap-6 lg:grid-cols-[0.97fr_1.03fr]"
        >
          <motion.div
            variants={fadeUp}
            className="panel relative overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#07111f_0%,#0d2036_55%,#123452_100%)] px-6 py-7 text-white shadow-[0_28px_90px_rgba(2,6,23,0.35)] sm:px-8 sm:py-9 lg:px-10 lg:py-11"
          >
            <div className="absolute -right-10 top-0 h-48 w-48 rounded-full bg-[rgba(56,189,248,0.22)] blur-3xl" />
            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[rgba(14,165,233,0.12)] blur-3xl" />

            <div className="relative z-10">
              <SectionEyebrow>Enterprise Delivery With Presence</SectionEyebrow>
              <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-[4.1rem]">
                Enterprise websites and digital systems should feel credible from the first screen.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[rgba(226,232,240,0.8)] sm:text-lg">
                {brand.name} presents technology work with stronger hierarchy, calmer visual
                control, and more realistic delivery scenes so decision-makers can trust the
                business before they reach the second section.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="heading-tech inline-flex cursor-pointer items-center rounded-full bg-[var(--accent)] px-5 py-3 text-xs uppercase tracking-[0.18em] text-white transition-all duration-200 hover:bg-[var(--accent-strong)]"
                >
                  Start Engagement
                </Link>
                <Link
                  href="/services"
                  className="heading-tech inline-flex cursor-pointer items-center rounded-full border border-white/20 px-5 py-3 text-xs uppercase tracking-[0.18em] text-[rgba(226,232,240,0.86)] transition-all duration-200 hover:border-white/35 hover:bg-white/6 hover:text-white"
                >
                  Review Structure
                </Link>
              </div>

              <motion.div
                variants={staggerContainer}
                className="mt-9 grid gap-3 sm:grid-cols-3"
              >
                {heroSignals.map((signal) => (
                  <motion.article
                    key={signal.title}
                    variants={fadeUp}
                    className="rounded-[22px] border border-white/12 bg-white/7 p-4 backdrop-blur-sm"
                  >
                    <h2 className="text-sm font-semibold text-white">{signal.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-[rgba(226,232,240,0.74)]">
                      {signal.detail}
                    </p>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="relative min-h-[520px] overflow-hidden rounded-[32px] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(244,248,252,0.98)_100%)] p-4 shadow-[0_24px_80px_rgba(15,23,42,0.12)] sm:p-5"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(3,105,161,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.12),transparent_24%)]" />

            <motion.div
              animate={
                reducedMotion
                  ? undefined
                  : {
                      y: [0, -10, 0],
                    }
              }
              transition={
                reducedMotion
                  ? undefined
                  : {
                      duration: 6.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }
              }
              className="absolute right-5 top-5 z-20 hidden w-48 rounded-[24px] border border-[rgba(148,163,184,0.24)] bg-white/92 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.12)] lg:block"
            >
              <p className="heading-tech text-[10px] uppercase tracking-[0.2em] text-[var(--gold)]">
                Delivery Note
              </p>
              <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">
                Realistic visuals carry trust faster than decorative gradients alone.
              </p>
              <div className="mt-4 rounded-2xl bg-[var(--surface-muted)] p-3">
                <div className="flex items-center justify-between text-[11px] text-[var(--muted)]">
                  <span>Focus</span>
                  <span>Live</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-[rgba(148,163,184,0.18)]">
                  <div className="h-2 w-[78%] rounded-full bg-[var(--accent)]" />
                </div>
              </div>
            </motion.div>

            <div className="relative z-10 h-full rounded-[28px] border border-[rgba(148,163,184,0.26)] bg-white/88 p-4 sm:p-5">
              <div className="flex items-center justify-between gap-4 border-b border-[rgba(148,163,184,0.18)] pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#0ea5e9]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
                </div>
                <p className="heading-tech text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
                  ElitechWiz // Visual Control Room
                </p>
              </div>

              <div className="mt-5 rounded-[28px] border border-[rgba(148,163,184,0.18)] bg-[linear-gradient(180deg,#f8fbff_0%,#eef4fb_100%)] p-4 sm:p-5">
                <p className="heading-tech text-[11px] uppercase tracking-[0.18em] text-[var(--accent-soft)]">
                  Content Architecture
                </p>
                <h2 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                  A hero that sells the feeling of a real operating team
                </h2>

                <div className="mt-5 grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
                  <div className="rounded-[22px] bg-[var(--foreground)] p-4 text-white">
                    <p className="heading-tech text-[10px] uppercase tracking-[0.18em] text-[rgba(125,211,252,0.88)]">
                      Narrative Stack
                    </p>
                    <div className="mt-4 space-y-3">
                      {[
                        "Large message with one dominant CTA",
                        "Secondary action for cautious visitors",
                        "Micro-panels that reinforce trust",
                      ].map((item, index) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-2xl bg-white/5 px-3 py-2.5"
                        >
                          <span className="heading-tech text-[10px] uppercase tracking-[0.18em] text-[rgba(125,211,252,0.88)]">
                            0{index + 1}
                          </span>
                          <span className="text-sm text-[rgba(226,232,240,0.78)]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {principles.slice(0, 3).map((principle) => (
                      <div
                        key={principle.title}
                        className="rounded-[22px] border border-[rgba(148,163,184,0.16)] bg-white px-4 py-3 shadow-[0_10px_24px_rgba(148,163,184,0.12)]"
                      >
                        <p className="text-sm font-semibold text-[var(--foreground)]">
                          {principle.title}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                          {principle.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="container-frame mt-8 sm:mt-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]"
        >
          <motion.div variants={fadeUp} className="panel rounded-[30px] p-6 sm:p-8 lg:p-9">
            <SectionEyebrow>Operating Posture</SectionEyebrow>
            <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-[2.2rem]">
                  Strong visual presence comes from contrast in composition, pacing, and proof.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
                  The page now moves like an intentional presentation: a decisive opening,
                  supporting proof blocks, layered visuals, and a clearer path toward contact.
                </p>
              </div>

              <Link
                href="/about"
                className="heading-tech inline-flex cursor-pointer items-center rounded-full border border-[var(--line-strong)] px-4 py-3 text-xs uppercase tracking-[0.18em] text-[var(--foreground)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                About The Studio
              </Link>
            </div>

            <motion.div variants={staggerContainer} className="mt-7 grid gap-4 md:grid-cols-3">
              {[
                "One clear primary message before the supporting detail",
                "Visual proof near the fold to anchor trust early",
                "Alternating wide and compact blocks to keep momentum",
              ].map((item) => (
                <motion.article
                  key={item}
                  variants={fadeUp}
                  whileHover={reducedMotion ? undefined : { y: -4 }}
                  className="rounded-[24px] border border-[var(--line)] bg-[var(--surface)] p-5 shadow-[0_12px_26px_rgba(148,163,184,0.1)] transition-transform duration-200"
                >
                  <p className="heading-tech text-[11px] uppercase tracking-[0.18em] text-[var(--accent-soft)]">
                    Layout Rule
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--foreground)]">{item}</p>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="overflow-hidden rounded-[30px] border border-[rgba(148,163,184,0.16)] bg-[linear-gradient(180deg,#e8f4ff_0%,#ffffff_100%)] p-6 shadow-[0_18px_50px_rgba(148,163,184,0.14)] sm:p-8"
          >
            <SectionEyebrow>Why It Feels Better</SectionEyebrow>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)] sm:text-[2rem]">
              Clearer storytelling helps visitors decide faster.
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              Enterprise buyers move from confidence, to understanding, to action. Each section
              shifts the visual arrangement so the page keeps signaling control instead of flattening into repetition.
            </p>

            <div className="mt-6 grid gap-3">
              {[
                "Sharper scan path for busy decision-makers",
                "More believable visuals and working context",
                "Stronger conversion focus without noise",
                "Less repetition and better section contrast",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[20px] bg-white/88 px-4 py-3 shadow-[0_10px_24px_rgba(148,163,184,0.12)]"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                  <span className="text-sm leading-6 text-[var(--foreground)]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="container-frame mt-8 sm:mt-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <motion.div variants={fadeUp} className="pt-2">
            <SectionEyebrow>Capability Composition</SectionEyebrow>
            <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-[2.2rem]">
              Capability content now sits inside a stronger decision-making layout.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-[var(--muted)]">
              Visitors should see a business that knows how to frame its work. The arrangement
              uses asymmetry, visual anchors, and deliberate section changes to keep the site feeling premium and grounded.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Mixed card heights create a stronger scan path.",
                "The main visual behaves like an operating snapshot.",
                "Supporting panels explain value without flattening the whole page.",
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-[20px] border border-[var(--line)] bg-white/80 px-4 py-3">
                  <span className="heading-tech text-[11px] uppercase tracking-[0.18em] text-[var(--accent-soft)]">
                    Note
                  </span>
                  <p className="text-sm leading-6 text-[var(--foreground)]">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="grid gap-4 md:grid-cols-2">
            {(services.length > 0
              ? services.map((service) => ({
                  label: "Verified Service",
                  title: service.name,
                  detail: service.summary,
                }))
              : processSteps.map((step) => ({
                  label: "Delivery Stage",
                  title: step.stage.replace(/^\d+\s*\/\/\s*/, ""),
                  detail: step.description,
                }))
            )
              .slice(0, 4)
              .map((card, index) => {
                const emphasized = index === 0 || index === 3;

                return (
                  <motion.article
                    key={card.title}
                    whileHover={reducedMotion ? undefined : { y: -5 }}
                    className={[
                      "rounded-[28px] border border-[var(--line)] p-5 shadow-[0_18px_36px_rgba(148,163,184,0.12)] transition-transform duration-200",
                      emphasized
                        ? "bg-[linear-gradient(180deg,#ffffff_0%,#eef6ff_100%)] md:row-span-2"
                        : "bg-[var(--surface)]",
                    ].join(" ")}
                  >
                    <p className="heading-tech text-[11px] uppercase tracking-[0.18em] text-[var(--gold)]">
                      {card.label}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{card.detail}</p>

                    <div className="mt-5 rounded-[22px] bg-[var(--surface-muted)] p-4">
                      <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">
                        <span>Visual weight</span>
                        <span>{emphasized ? "Primary" : "Support"}</span>
                      </div>
                      <div className="mt-4 flex h-20 items-end gap-2">
                        {[44, 28, 72, 56].map((height, stepIndex) => (
                          <div
                            key={`${card.title}-${height}`}
                            className={[
                              "flex-1 rounded-t-[16px]",
                              stepIndex === 2 ? "bg-[var(--accent)]" : "bg-[rgba(59,130,246,0.18)]",
                            ].join(" ")}
                            style={{ height }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
          </motion.div>
        </motion.div>
      </section>

      <section className="container-frame mt-8 sm:mt-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]"
        >
          <motion.div
            variants={fadeUp}
            className="overflow-hidden rounded-[32px] border border-[var(--line)] bg-[linear-gradient(160deg,#0b1220_0%,#12263f_100%)] p-5 text-white shadow-[0_28px_70px_rgba(15,23,42,0.28)] sm:p-6"
          >
            <div className="flex items-center justify-between gap-4">
              <SectionEyebrow>Immersive Visual</SectionEyebrow>
              <span className="rounded-full border border-white/12 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[rgba(226,232,240,0.72)]">
                Realistic layout
              </span>
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="rounded-[28px] border border-white/10 bg-white/7 p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#fb7185]" />
                    <span className="h-2 w-2 rounded-full bg-[#fbbf24]" />
                    <span className="h-2 w-2 rounded-full bg-[#34d399]" />
                  </div>
                  <span className="heading-tech text-[10px] uppercase tracking-[0.18em] text-[rgba(125,211,252,0.86)]">
                    Strategy Snapshot
                  </span>
                </div>

                <div className="mt-4 rounded-[24px] bg-white p-4 text-[var(--foreground)]">
                  <h3 className="text-lg font-semibold tracking-[-0.03em]">
                    Each section behaves like a working snapshot of the engagement.
                  </h3>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {[
                      "Hero-led message",
                      "Visual mockup",
                      "Asymmetric section grid",
                      "High-confidence CTA",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-[18px] bg-[var(--surface-muted)] px-3 py-3 text-sm text-[var(--foreground)]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[28px] border border-white/10 bg-white/8 p-4">
                  <p className="heading-tech text-[10px] uppercase tracking-[0.18em] text-[rgba(251,191,36,0.9)]">
                    Motion Layer
                  </p>
                  <div className="mt-4 space-y-3">
                    {["Staggered entrance", "Gentle floating detail", "Hover elevation"].map((item) => (
                      <div
                        key={item}
                        className="rounded-[18px] border border-white/8 bg-black/10 px-3 py-3 text-sm text-[rgba(226,232,240,0.82)]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.52)_0%,rgba(15,23,42,0.72)_100%)] p-4">
                  <p className="heading-tech text-[10px] uppercase tracking-[0.18em] text-[rgba(125,211,252,0.86)]">
                    Why It Works
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[rgba(226,232,240,0.78)]">
                    Premium agency sites feel like curated environments. They show depth, intent,
                    and control in the first view instead of waiting for the visitor to imagine it.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="panel rounded-[32px] p-6 sm:p-8">
            <SectionEyebrow>Lifecycle Story</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-[2.15rem]">
              The process reads as a journey, not a list.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[var(--muted)]">
              Good enterprise layouts keep reinforcing control. This section uses the same
              process data, but the arrangement is more cinematic and easier to understand in motion.
            </p>

            <motion.div variants={staggerContainer} className="mt-6 space-y-4">
              {processSteps.map((step) => (
                <motion.article
                  key={step.stage}
                  variants={fadeUp}
                  className="relative rounded-[24px] border border-[var(--line)] bg-[var(--surface)] p-5 shadow-[0_10px_24px_rgba(148,163,184,0.1)]"
                >
                  <span className="absolute left-5 top-5 h-10 w-1 rounded-full bg-[var(--accent)]" />
                  <div className="pl-6">
                    <p className="heading-tech text-[11px] uppercase tracking-[0.18em] text-[var(--gold)]">
                      {step.stage}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{step.description}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section className="container-frame mt-8 sm:mt-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="overflow-hidden rounded-[34px] border border-[rgba(148,163,184,0.16)] bg-[linear-gradient(135deg,#0b1220_0%,#0f2740_52%,#14416a_100%)] px-6 py-8 text-white shadow-[0_32px_90px_rgba(15,23,42,0.3)] sm:px-8 sm:py-10 lg:px-10"
        >
          <motion.div variants={fadeUp} className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <SectionEyebrow>Closing Section</SectionEyebrow>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-[2.45rem]">
                Finish with a clear next step and a stronger sense of brand confidence.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[rgba(226,232,240,0.8)]">
                A strong finish matters. The closing section now reinforces trust, preserves the
                visual tone of the page, and gives visitors a cleaner path into conversation.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <Link
                href="/contact"
                className="heading-tech inline-flex cursor-pointer items-center justify-center rounded-full bg-white px-5 py-3 text-xs uppercase tracking-[0.18em] text-[var(--foreground)] transition-all duration-200 hover:bg-[rgba(255,255,255,0.9)]"
              >
                Open Contact
              </Link>
              <Link
                href="/process"
                className="heading-tech inline-flex cursor-pointer items-center justify-center rounded-full border border-white/16 px-5 py-3 text-xs uppercase tracking-[0.18em] text-[rgba(226,232,240,0.86)] transition-all duration-200 hover:bg-white/8 hover:text-white"
              >
                View Process
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-7 grid gap-4 border-t border-white/10 pt-6 md:grid-cols-3"
          >
            <div className="rounded-[22px] border border-white/10 bg-white/7 p-4">
              <p className="heading-tech text-[10px] uppercase tracking-[0.18em] text-[rgba(125,211,252,0.86)]">
                Visual Depth
              </p>
              <p className="mt-3 text-sm leading-6 text-[rgba(226,232,240,0.78)]">
                More contrast, more realism, and more perceived quality in the first scroll.
              </p>
            </div>
            <div className="rounded-[22px] border border-white/10 bg-white/7 p-4">
              <p className="heading-tech text-[10px] uppercase tracking-[0.18em] text-[rgba(251,191,36,0.92)]">
                Interaction
              </p>
              <p className="mt-3 text-sm leading-6 text-[rgba(226,232,240,0.78)]">
                Animation is restrained and intentional, which keeps the page premium instead of noisy.
              </p>
            </div>
            <div className="rounded-[22px] border border-white/10 bg-white/7 p-4">
              <p className="heading-tech text-[10px] uppercase tracking-[0.18em] text-[rgba(125,211,252,0.86)]">
                Availability
              </p>
              <p className="mt-3 text-sm leading-6 text-[rgba(226,232,240,0.78)]">
                {contacts.length > 0
                  ? "Verified contact channels are available on the contact page."
                  : "Verified contact channels can be published as soon as they are confirmed."}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
