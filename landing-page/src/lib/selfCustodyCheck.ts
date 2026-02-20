export type Segment = "individual" | "business";

export type Option = {
  value: string;
  label: string;
  points: number;
};

export type Category =
  | "exposure"
  | "recovery"
  | "opsSafety"
  | "inheritance"
  | "internalControls"
  | "governance"
  | "incidentReadiness";

export type Question = {
  id: string;
  category: Category;
  prompt: string;
  helperText?: string;
  options: Option[];
  weight?: number;
};

const yesSomeNo = (labels?: {
  yes?: string;
  some?: string;
  no?: string;
}): Option[] => [
  { value: "yes", label: labels?.yes ?? "Yes", points: 2 },
  { value: "some", label: labels?.some ?? "Partially / not consistently", points: 1 },
  { value: "no", label: labels?.no ?? "Not yet", points: 0 },
];

export const individualQuestions: Question[] = [
  {
    id: "separate_spend_longterm",
    category: "exposure",
    prompt: "Do you separate “spend” funds from long‑term holdings?",
    helperText:
      "A calm default is: convenience for spending, stronger controls for long-term.",
    options: yesSomeNo(),
    weight: 1.2,
  },
  {
    id: "long_term_intent",
    category: "exposure",
    prompt: "Do you have a clear time horizon for what you’re holding long term?",
    helperText:
      "Clarity here helps you choose controls that match your goals without overreacting to headlines.",
    options: yesSomeNo(),
    weight: 0.9,
  },
  {
    id: "custody_reliance",
    category: "exposure",
    prompt: "For long-term holdings, how much depends on a third party to approve withdrawals?",
    helperText:
      "This is about custody model, not headlines. Aim for less third‑party dependency over time.",
    options: [
      { value: "mostly_third_party", label: "Mostly third‑party custody", points: 0 },
      { value: "mixed", label: "A mix of self-custody and third‑party custody", points: 1 },
      { value: "mostly_self", label: "Mostly self-custody", points: 2 },
    ],
    weight: 1.3,
  },
  {
    id: "start_small",
    category: "exposure",
    prompt: "If you changed custody setups recently, did you start with a small test amount?",
    helperText: "Small tests help you learn safely before scaling.",
    options: yesSomeNo(),
    weight: 1.0,
  },
  {
    id: "recovery_tested",
    category: "recovery",
    prompt: "Have you tested recovery for your long-term setup (before scaling)?",
    helperText:
      "Backups and recovery practice are the difference between ownership and hope.",
    options: yesSomeNo(),
    weight: 1.5,
  },
  {
    id: "backups_clear",
    category: "recovery",
    prompt: "Are your backups clear, current, and stored in more than one place?",
    helperText:
      "Redundancy should reduce single points of failure—not increase confusion.",
    options: yesSomeNo(),
    weight: 1.3,
  },
  {
    id: "address_verification",
    category: "opsSafety",
    prompt: "When sending funds, do you verify the destination address carefully (not just a pasted string)?",
    helperText:
      "Slow is smooth. Make verification boring and repeatable—especially under stress.",
    options: yesSomeNo(),
    weight: 0.9,
  },
  {
    id: "scam_hygiene",
    category: "opsSafety",
    prompt: "If an exchange incident happens, do you avoid DMs and verify only through official channels?",
    helperText: "Scammers reliably show up after major headlines.",
    options: yesSomeNo({
      yes: "Yes (I have a calm verification habit)",
      some: "Sometimes (but I could tighten this)",
      no: "Not yet / I’m not sure what I’d do",
    }),
    weight: 1.1,
  },
  {
    id: "account_hygiene",
    category: "opsSafety",
    prompt: "If you still use any custodial accounts, do you use strong account security (unique password, 2FA where available)?",
    helperText:
      "Even if you’re moving toward self-custody, basic account hygiene reduces avoidable losses.",
    options: yesSomeNo(),
    weight: 0.8,
  },
  {
    id: "device_security",
    category: "opsSafety",
    prompt: "Are the devices tied to your keys protected (updates, passcodes, basic hygiene)?",
    options: yesSomeNo(),
    weight: 1.0,
  },
  {
    id: "loss_plan",
    category: "recovery",
    prompt: "If your phone or primary device were lost tomorrow, would you know the first two steps to recover?",
    options: yesSomeNo(),
    weight: 1.0,
  },
  {
    id: "single_point_failure",
    category: "recovery",
    prompt: "Do you have a plan that reduces single points of failure as amounts grow?",
    helperText:
      "For larger amounts, multi-key approaches can reduce the impact of one lost or compromised key.",
    options: yesSomeNo(),
    weight: 1.2,
  },
  {
    id: "inheritance_basics",
    category: "inheritance",
    prompt: "Have you started an inheritance plan (even a basic one)?",
    helperText:
      "A simple start: who needs to know what, where documentation lives, and how it’s kept current.",
    options: yesSomeNo(),
    weight: 0.9,
  },
  {
    id: "inheritance_documentation",
    category: "inheritance",
    prompt: "Is there clear, updated documentation that someone you trust could follow (without improvising)?",
    options: yesSomeNo(),
    weight: 0.9,
  },
];

export const businessQuestions: Question[] = [
  {
    id: "roles_separated",
    category: "internalControls",
    prompt: "Are custody roles separated (initiate vs approve, more than one person involved)?",
    helperText: "Think “dual control” and separation of duties.",
    options: yesSomeNo(),
    weight: 1.4,
  },
  {
    id: "multi_party_approval",
    category: "internalControls",
    prompt: "Do material transfers require multi-party approval (not a single operator)?",
    options: yesSomeNo(),
    weight: 1.5,
  },
  {
    id: "limits_thresholds",
    category: "internalControls",
    prompt: "Do you have clear limits and thresholds (what’s routine vs what requires extra approvals)?",
    options: yesSomeNo(),
    weight: 1.1,
  },
  {
    id: "signing_policy",
    category: "governance",
    prompt: "Do you have a documented signing policy (limits, approvals, exceptions)?",
    options: yesSomeNo(),
    weight: 1.2,
  },
  {
    id: "key_ceremony",
    category: "governance",
    prompt: "Was key setup documented (who generated keys, where backups live, how rotation works)?",
    helperText: "Good documentation reduces single-person dependency.",
    options: yesSomeNo(),
    weight: 1.0,
  },
  {
    id: "key_holder_redundancy",
    category: "recovery",
    prompt: "If one key holder is unavailable, can the business still operate safely?",
    helperText:
      "The goal is resilient access with controls—without creating a single point of failure.",
    options: yesSomeNo(),
    weight: 1.2,
  },
  {
    id: "recovery_drills",
    category: "recovery",
    prompt: "Have you run a recovery drill in the last 12 months?",
    options: yesSomeNo(),
    weight: 1.2,
  },
  {
    id: "access_reviews",
    category: "governance",
    prompt: "Do you regularly review who has access (and remove access that’s no longer needed)?",
    options: yesSomeNo(),
    weight: 1.0,
  },
  {
    id: "auditability",
    category: "governance",
    prompt: "Can you provide an auditable record of custody actions (who approved what, when)?",
    options: yesSomeNo(),
    weight: 1.1,
  },
  {
    id: "incident_playbook",
    category: "incidentReadiness",
    prompt: "Do you have an incident playbook for scams, compromised devices, or vendor issues?",
    options: yesSomeNo(),
    weight: 1.1,
  },
  {
    id: "out_of_band_requests",
    category: "incidentReadiness",
    prompt: "Do you have a process for out-of-band verification when a request feels unusual or urgent?",
    helperText:
      "Most serious losses involve urgency and social engineering. Calm verification helps.",
    options: yesSomeNo(),
    weight: 1.0,
  },
  {
    id: "third_party_risk",
    category: "exposure",
    prompt: "Do you regularly review third-party custody / counterparty risk for any vendors involved?",
    options: yesSomeNo(),
    weight: 0.9,
  },
  {
    id: "segmentation",
    category: "exposure",
    prompt: "Do you separate operational funds from long-term treasury holdings?",
    helperText:
      "A common pattern is: operational convenience for small amounts, stronger controls for long-term holdings.",
    options: yesSomeNo(),
    weight: 1.0,
  },
];

export const verifiedLearnMoreLinks = [
  {
    label: "Exchanges vs. self-custody: known vs unknown risks",
    href: "https://blog.casa.io/exchanges-vs-self-custody-risks/",
  },
  {
    label: "Exchange failure: the risk no one is talking about",
    href: "https://blog.casa.io/exchange-failure/",
  },
  {
    label: "What is a multisig wallet? Understanding the basics",
    href: "https://blog.casa.io/an-introduction-to-multisig/",
  },
  {
    label: "Casa multisig security: Mobile Key overview",
    href: "https://blog.casa.io/casa-keymaster-security-mobile-key-overview/",
  },
  {
    label: "CASA inheritance landing page",
    href: "https://casa.io/inheritance",
  },
] as const;

export type Band = {
  id: "starter" | "steady" | "advanced";
  label: string;
  tone: string;
};

export function getBand(score01: number, segment: Segment): Band {
  if (score01 < 0.45) {
    return {
      id: "starter",
      label: segment === "business" ? "Foundational controls" : "Getting started",
      tone:
        "You have a few high-leverage basics to tighten. That’s normal—small changes can meaningfully reduce risk.",
    };
  }

  if (score01 < 0.75) {
    return {
      id: "steady",
      label: segment === "business" ? "Maturing controls" : "Steady posture",
      tone:
        "Your fundamentals are in place. The next wins are reducing remaining single points of failure and practicing recovery.",
    };
  }

  return {
    id: "advanced",
    label: segment === "business" ? "Strong controls" : "Strong posture",
    tone:
      "You’ve built a durable base. The ongoing work is keeping it current—process, drills, and calm habits.",
    };
}

export type ScoredResult = {
  score01: number;
  band: Band;
  nextSteps: { title: string; description: string }[];
};

function scoreQuestions(
  questions: Question[],
  answers: Record<string, string>,
): { score01: number; missingByCategory: Map<Category, number> } {
  let earned = 0;
  let possible = 0;
  const missingByCategory = new Map<Category, number>();

  for (const q of questions) {
    const w = q.weight ?? 1;
    const maxPoints = Math.max(...q.options.map((o) => o.points));
    possible += maxPoints * w;

    const selected = answers[q.id];
    const opt = q.options.find((o) => o.value === selected);
    const points = (opt?.points ?? 0) * w;
    earned += points;

    const missing = maxPoints * w - points;
    if (missing > 0.01) {
      missingByCategory.set(q.category, (missingByCategory.get(q.category) ?? 0) + missing);
    }
  }

  return { score01: possible > 0 ? earned / possible : 0, missingByCategory };
}

function topCategories(missingByCategory: Map<Category, number>, n: number): Category[] {
  return Array.from(missingByCategory.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([cat]) => cat);
}

function nextStepsForIndividual(categories: Category[]) {
  const steps: Record<Category, { title: string; description: string }> = {
    exposure: {
      title: "Separate spend vs long-term",
      description:
        "Keep convenience where you need it, but aim to reduce third‑party dependency for long-term holdings at a pace you can maintain.",
    },
    recovery: {
      title: "Test recovery before you scale",
      description:
        "Do one calm recovery test and make your backups clearer. If recovery isn’t reliable, ownership is fragile.",
    },
    opsSafety: {
      title: "Tighten scam hygiene",
      description:
        "After headlines, ignore DMs and verify through official channels only. Avoid rushed “support” links and recovery instructions.",
    },
    inheritance: {
      title: "Start an inheritance baseline",
      description:
        "Write down what future you (or a trusted person) would need: where documentation lives, how it stays current, and what to do first.",
    },
    internalControls: {
      title: "Internal controls",
      description: "This category isn’t used for the individual path.",
    },
    governance: {
      title: "Governance",
      description: "This category isn’t used for the individual path.",
    },
    incidentReadiness: {
      title: "Incident readiness",
      description: "This category isn’t used for the individual path.",
    },
  };

  return categories
    .filter((c) => ["exposure", "recovery", "opsSafety", "inheritance"].includes(c))
    .map((c) => steps[c]);
}

function nextStepsForBusiness(categories: Category[]) {
  const steps: Record<Category, { title: string; description: string }> = {
    internalControls: {
      title: "Strengthen multi-party approvals",
      description:
        "Reduce single-operator risk with separation of duties and clear approval thresholds for material transfers.",
    },
    governance: {
      title: "Document the signing policy",
      description:
        "Make approvals, limits, and exceptions explicit. Clarity reduces mistakes under pressure and improves auditability.",
    },
    recovery: {
      title: "Run a recovery drill",
      description:
        "Test recovery on a schedule. If recovery only works on paper, it’s a hidden operational risk.",
    },
    incidentReadiness: {
      title: "Create an incident playbook",
      description:
        "Define how you respond to scams, compromised devices, and vendor issues—so you don’t improvise under urgency.",
    },
    exposure: {
      title: "Review third-party risk",
      description:
        "Treat custody as counterparty risk. Decide what belongs in self-custody vs what’s acceptable for operational convenience.",
    },
    opsSafety: {
      title: "Operational safety",
      description: "This category isn’t used for the business path.",
    },
    inheritance: {
      title: "Inheritance",
      description: "This category isn’t used for the business path.",
    },
  };

  return categories
    .filter((c) =>
      ["internalControls", "governance", "recovery", "incidentReadiness", "exposure"].includes(c),
    )
    .map((c) => steps[c]);
}

export function scoreSelfCustodyCheck(
  segment: Segment,
  answers: Record<string, string>,
): ScoredResult {
  const questions = segment === "business" ? businessQuestions : individualQuestions;
  const { score01, missingByCategory } = scoreQuestions(questions, answers);
  const band = getBand(score01, segment);

  const topCats = topCategories(missingByCategory, 3);
  const nextSteps =
    segment === "business" ? nextStepsForBusiness(topCats) : nextStepsForIndividual(topCats);

  return { score01, band, nextSteps };
}

