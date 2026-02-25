# How the CASA Marketing Robot Works

## What this is

A contract-first content production system that runs inside Cursor. You describe a scenario and what you need; the robot produces quality-controlled marketing content — X posts, blog drafts, follow-up ideas, visual briefs — enforced by product truth, brand voice, and a claims ledger.

There are two skills (agents):

1. **Campaign Pipeline** (`casa-campaign-pipeline`) — full campaign production with human-in-the-loop gates
2. **Educational Content** (`casa-educational-content`) — authority content ideation (Ahrefs/ClickUp/Eric Voorhees style)

---

## Inputs

### What you provide

At minimum:
- **Scenario context**: what happened, what's known/unknown (e.g., "A major exchange was hacked, it's trending on X")
- **Requested deliverables**: counts + constraints

### Defaults (if not specified)

| Field | Default |
|---|---|
| X posts | 2 (1 single + 1 thread, max 5 tweets) |
| Blog | 1 (500-800 words) |
| Follow-up idea | 1 |
| What we wouldn't do | 2-4 bullets |

### Control flags

- `autoApproveGates`: skip human approval at Gate A (contract) and Gate B (final review)
- `feedbackPersistence`: `apply_this_run_only` (default) or `persist_for_future`
- `Go_to_market`: B2C, B2B, or Mixed
- `Primary_product_surface`: Standard, Premium, Business, Enterprise
- `Audience_segments`: e.g., `victim_or_possibly_impacted`, `spectator_not_impacted`, `long_term_holder`, `newcomer`, `b2b_operator_custodian`

### Scenario types

The robot supports multiple scenario types, each with sensible defaults for audience segments, format mix, and visual packs. See `casa-assets/intake-template.md` for the full defaults table.

| Scenario_tag | Use case |
|---|---|
| ExchangeHack | Exchange hack / breach response |
| ScamWave | Active phishing or social engineering campaign |
| CustodyFailure | Platform insolvency or withdrawal freeze |
| RegulatoryShift | New regulation with custody implications |
| InheritancePlanning | Evergreen inheritance education |
| SecurityBreach | Wallet or protocol vulnerability |
| GeneralEducation | Authority content, no crisis framing |
| Other | Custom scenario |

---

## Truth sources

These files prevent hallucinations and enforce consistency:

| File | What it does |
|---|---|
| `casa-assets/product-facts.md` | Plans, pricing, features, supported assets (BTC/ETH/USDC/USDT), disclaimers. Every product claim in the output is validated against this. |
| `casa-assets/brand-voice.md` | Tone rules, persona micro-briefs (CEO_Nick, Educational_curator, Growth_Marketing), non-negotiables (no dunking, no schadenfreude, calm/credible/helpful). |
| `casa-assets/contract-template.md` | The enforceable brief structure that scopes every campaign run. |
| `casa-assets/claims-ledger-template.md` | Tracks every claim vs assumption in the output; flags anything unverifiable. |
| `casa-assets/linkable-resources.md` | Registry of verified CASA links and CTA copy; prevents broken/invented URLs. |
| `casa-assets/visual-assets.md` | Visual posture rules (minimal, calm, no panic graphics) + pre-designed visual packs. |
| `casa-assets/competitors-and-resources.md` | Context on direct peers and authority content patterns. |
| `.cursor/rules/casa-tone.mdc` | Always-on rule that enforces tone across all Cursor interactions in the project. |

---

## Campaign Pipeline: 9-step workflow

```
User prompt
    |
    v
Step 0: Intake Normalizer
    |  Converts raw ask into structured input (scenario, audience, deliverables)
    |  Uses scenario defaults table for missing parameters
    v
Step 1: Contract Builder (Gate A)
    |  Produces an enforceable brief; validates product refs against product-facts.md
    |  Human approves or edits (skipped if autoApproveGates=true)
    v
Step 2: Assigner + Idea Generator
    |  Picks primary persona, generates max 3 angles, recommends 1
    v
Step 3: Drafting
    |  Produces exactly what the contract requests (X posts, blog, follow-up, what-we-wouldn't-do)
    |  Includes diversity/redundancy review, link-out planning, cashtag normalization
    v
Step 4: Product Checker (truth pass)
    |  Validates every claim against product-facts.md
    |  Checks market alignment (B2C vs B2B), plan/pricing, platform, supported assets
    v
Step 4.5: Audience Evaluator
    |  Simulates how each audience segment reacts; applies rewrites
    v
Step 5: Tone Evaluator
    |  Scores against trust rubric (brand-voice.md + performance-scorecard.md)
    |  Applies top 3 fixes
    v
Step 6: Claims Ledger
    |  Enumerates all claims and assumptions; validates against product truth
    |  Applies required edits
    v
Step 7: Visual Selector
    |  Produces designer-ready visual briefs (X posts + blog hero)
    |  Uses scenario-appropriate visual packs from visual-assets.md
    v
Step 8: Gate B (final approval)
    |  Human reviews assembled campaign; can request revisions
    |  Revision loop re-runs product checker + tone + claims
    v
Step 9: Self-Learning Update (post-publish)
    Feedback + metrics are captured in learning-log.md for future runs
```

---

## Outputs

### Contract-counted deliverables

- **X post 1** (CASA_main): brief first-aid message (empathy + 1-2 safe actions)
- **X post 2** (CASA_main): step-by-step thread (each tweet adds distinct value)
- **Blog** (500-800 words): full draft with internal links to verified CASA blog posts
- **Follow-up idea**: next content piece recommendation
- **What we wouldn't do**: 2-4 bullets explaining avoided approaches and why

### Appendix (auto-generated, doesn't count toward deliverable count)

- **CEO_Nick QT** for each X post
- **Growth_Marketing QT** for each X post
- **Visual briefs**: designer-ready specs for X post graphics and blog hero

### Audit trail

- **Contract snapshot**: the enforceable brief the robot worked against
- **Claims ledger**: every claim and assumption tracked and verified

### File output

All deliverables are written to disk as markdown files under `history/<date>-<scenario-slug>/`:

```
history/2026-02-20-exchange-hack-takehome/
  README.md
  contract.md
  claims-ledger.md
  x-post-1-casa-main.md
  x-post-2-thread-casa-main.md
  blog.md
  follow-up-idea.md
  what-we-wouldnt-do.md
  visual-briefs.md
  appendix-qt-pack.md
```

---

## Educational Content skill

A separate agent for generating authority content ideas.

**Inputs**: theme/scenario, channel(s), cadence, persona (defaults to educational curator)

**Output**: 8-12 content ideas with title, audience, format, hook, key points, authority rationale, and soft CASA tie-in. One idea is expanded into a draft-ready brief with headline, section outline, CTA posture, and visual format.

**Evergreen pillars**: custody basics, self-custody ladder, operational security, inheritance, incident response.

---

## Self-learning loop

After a campaign is published and real-world data comes in (engagement metrics, replies, performance):

1. The performance scorecard is filled (Trust 50%, Engagement 30%, Conversions 20%)
2. A concise entry is written to `casa-assets/learning-log.md`
3. 1-3 rules are extracted for next time, classified as global CASA quality or scenario-specific

Future runs read the latest learning log entries before drafting, so the robot improves over time.
