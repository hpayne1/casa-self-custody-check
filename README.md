# CASA Marketing Robot + Self-Custody Check

Created by Houston Morgan.

A **contract-first, quality-first** content production system for CASA that runs inside [Cursor](https://cursor.sh). Feed it a scenario and deliverable requirements; it produces quality-controlled X posts, blog drafts, follow-up ideas, and visual briefs — enforced by product truth, brand voice, and a claims ledger.

## What's in this repo

### [casa-assets/](casa-assets/)

Source-of-truth files that prevent hallucinations and enforce consistency:

| File | Purpose |
|---|---|
| [brand-voice.md](casa-assets/brand-voice.md) | Tone, personas, crisis posture, non-negotiables |
| [product-facts.md](casa-assets/product-facts.md) | Plans, pricing, features, supported assets, disclaimers |
| [visual-assets.md](casa-assets/visual-assets.md) | Visual posture rules + pre-designed visual packs |
| [linkable-resources.md](casa-assets/linkable-resources.md) | Verified CASA links registry |
| [competitors-and-resources.md](casa-assets/competitors-and-resources.md) | Competitive context and authority content patterns |
| [intake-template.md](casa-assets/intake-template.md) | Task normalization template + scenario defaults |
| [contract-template.md](casa-assets/contract-template.md) | Enforceable brief template |
| [claims-ledger-template.md](casa-assets/claims-ledger-template.md) | Claims/assumptions safety net |
| [performance-scorecard.md](casa-assets/performance-scorecard.md) | Trust + engagement + conversion scoring rubric |
| [learning-log.md](casa-assets/learning-log.md) | Self-learning memory from past runs |

### [.cursor/](.cursor/)

Cursor-native configuration that activates automatically when you open this repo:

- **Rules**: [casa-tone.mdc](.cursor/rules/casa-tone.mdc) — always-on CASA voice rails
- **Skills**:
  - [casa-campaign-pipeline](.cursor/skills/casa-campaign-pipeline/SKILL.md) — full 9-step campaign workflow
  - [casa-educational-content](.cursor/skills/casa-educational-content/SKILL.md) — authority content ideation

### [landing-page/](landing-page/)

A 10-minute self-custody check built as a Next.js app. Visitors choose between an individual (B2C) or business (B2B) path, answer focused questions about exposure, recovery, and operations, and get a scored result with practical next steps.

- **B2C path**: ends with a "Create a free Casa account" CTA
- **B2B path**: ends with a lead capture form
- Built with Next.js 16, React 19, Tailwind CSS 4

### [history/](history/)

Archived campaign runs with full audit trails. Each run folder contains the filled contract, claims ledger, all deliverables, and a README explaining what was asked and what was produced.

## Quick start: run a campaign

Open this repo in Cursor, then ask:

```
Run casa-campaign-pipeline with autoApproveGates=true.
Scenario: [describe what happened and what's known].
Go_to_market=B2C. Primary_product_surface=Standard.
Deliverables: 2 X posts, 1 blog (500-800 words), 1 follow-up content idea, and what we wouldn't do.
```

The robot will normalize the intake, build a contract, draft content, validate against product truth, score tone, produce a claims ledger, recommend visuals, and assemble the final deliverables.

### Supported scenario types

| Scenario_tag | When to use |
|---|---|
| ExchangeHack | Exchange was hacked; trending on X |
| ScamWave | Phishing/social engineering campaign active |
| CustodyFailure | Platform insolvency, withdrawal freeze |
| RegulatoryShift | New regulation with custody implications |
| InheritancePlanning | Evergreen inheritance education |
| SecurityBreach | Wallet or protocol vulnerability |
| GeneralEducation | Authority content, no crisis framing |

## Quick start: authority content ideas

```
Using casa-educational-content, pitch 10 authority content ideas for InheritancePlanning.
Persona: Educational curator.
```

## Quick start: run the landing page

```bash
cd landing-page
npm install
npm run dev
```

## How it works

See [HOW-IT-WORKS.md](HOW-IT-WORKS.md) for a full explanation of the robot's inputs, 9-step workflow, truth sources, and outputs.
