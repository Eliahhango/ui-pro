export type ContactItem = {
  label: string;
  value: string;
  href: string;
};

export type ServiceItem = {
  name: string;
  summary: string;
};

export type PrincipleItem = {
  title: string;
  detail: string;
};

export type ProcessStep = {
  stage: string;
  description: string;
};

export const brand = {
  name: "ElitechWiz",
  positioning: "Elite technology execution for modern businesses.",
  mission:
    "Design and deliver resilient digital systems with clear accountability, security-first discipline, and measurable business usefulness.",
};

// Real business data was not found in the current repository.
// Replace these arrays with your verified details only.
export const contacts: ContactItem[] = [];

export const services: ServiceItem[] = [];

export const principles: PrincipleItem[] = [
  {
    title: "Security as baseline",
    detail:
      "Security is embedded in architecture, delivery workflows, and operational handover from day one.",
  },
  {
    title: "Execution over noise",
    detail:
      "Roadmaps are intentionally lean and tied to concrete outcomes, not vanity deliverables.",
  },
  {
    title: "Systems that scale",
    detail:
      "Solutions are designed for maintainability, observability, and operational continuity.",
  },
  {
    title: "Transparent collaboration",
    detail:
      "Every engagement follows explicit scope, cadence, ownership, and decision logs.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    stage: "01 // Discovery",
    description:
      "Business context, constraints, and risk surfaces are mapped to define the right implementation path.",
  },
  {
    stage: "02 // Architecture",
    description:
      "A pragmatic technical blueprint is defined for reliability, security, and long-term maintainability.",
  },
  {
    stage: "03 // Delivery",
    description:
      "Implementation is shipped in controlled increments with review checkpoints and quality gates.",
  },
  {
    stage: "04 // Handover",
    description:
      "Teams receive documentation, operational guidance, and support continuity for stable ownership.",
  },
];