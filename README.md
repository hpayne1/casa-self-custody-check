# CASA — Self-Custody Check + Marketing Robot

Created by Houston Morgan.

This repo contains two projects:

## [landing-page/](landing-page/)

A 10-minute self-custody check built as a Next.js app. Visitors choose between an individual (B2C) or business (B2B) path, answer a focused set of questions about exposure, recovery, and operations, and get a scored result with practical next steps.

- **B2C path**: ends with a "Create a free Casa account" CTA
- **B2B path**: ends with a lead capture form ("Email me results + follow-up")
- Built with Next.js 16, React 19, Tailwind CSS 4

To run locally:
```
cd landing-page
npm install
npm run dev
```

## [marketing-robot/](marketing-robot/)

A contract-first content production system that runs inside Cursor. Feed it a scenario and deliverable requirements; it produces quality-controlled X posts, blog drafts, follow-up ideas, and visual briefs — enforced by product truth, brand voice, and a claims ledger.

- Two skills: Campaign Pipeline (full campaign) and Educational Content (authority ideation)
- 9-step workflow with human-in-the-loop gates
- Self-learning feedback loop

See [marketing-robot/HOW-IT-WORKS.md](marketing-robot/HOW-IT-WORKS.md) for the full explanation.
