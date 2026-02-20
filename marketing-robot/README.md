# CASA Marketing Robot — Content Workflow (Cursor)

A **contract-first, quality-first** content workflow for CASA that runs inside Cursor.

## What's included

- `casa-assets/brand-voice.md`: CASA comms truth (tone, "our spice," personas, no dunking/no schadenfreude).
- `casa-assets/product-facts.md`: CASA product truth (plans/pricing/features/disclaimers) to prevent hallucinations.
- `casa-assets/contract-template.md`: enforceable contract template with sensible defaults.
- `casa-assets/claims-ledger-template.md`: claims/assumptions safety net + feedback capture.
- `casa-assets/performance-scorecard.md` + `casa-assets/learning-log.md`: self-learning loop artifacts.
- `.cursor/rules/casa-tone.mdc`: always-on CASA tone rails (project-scoped).
- `.cursor/skills/`:
  - `casa-campaign-pipeline`: orchestrator (Contract > product truth > drafting > tone scoring > claims ledger > visuals > assemble)
  - `casa-educational-content`: authority content ideation (Ahrefs/ClickUp/Eric Voorhees style)

## Quick start (campaign pipeline)

In Cursor chat, ask something like:

> Run `casa-campaign-pipeline` with `autoApproveGates=true`.
> Go_to_market=B2C. Primary_product_surface=Standard (or Mixed). Platforms_in_scope=Mobile_app.
> Scenario: A major exchange just got hacked. It's trending on X. People are reminded why self-custody matters.
> Deliverables: 2 X posts, 1 blog (500-800 words), 1 follow-up content idea, and what we wouldn't do and why.
> Constraints: calm, credible, no dunking/no schadenfreude, soft CTA only.
> Audience_segments: victim_or_possibly_impacted, spectator_not_impacted, long_term_holder.
> X_posts.format_mix: 1 single + 1 thread (max 5 tweets).

Then review the output campaign doc + appendices (Contract + Claims Ledger). If you want revisions:
- paste feedback and choose persistence:
  - `apply_this_run_only`
  - `persist_for_future` (classify as global CASA quality vs scenario-specific `Scenario_tag`)

## Quick start (authority ideas)

> Using `casa-educational-content`, pitch 10 authority content ideas for `ExchangeHack` and expand one into a draft-ready brief. Persona: Educational curator.

## Quick start (B2B operator pack)

> Run `casa-campaign-pipeline` with `autoApproveGates=true`.
> Go_to_market=B2B. Primary_product_surface=Enterprise (or Business). Platforms_in_scope=Both.
> Scenario_tag=ExchangeHack.
> Deliverables: 2 X posts only (no blog).
> Audience_segments: b2b_operator_custodian.
> Constraints: calm, non-judgmental, no "this would have prevented it" absolutes — frame internal controls as risk reduction; soft invite to talk.

## How it works

See [HOW-IT-WORKS.md](HOW-IT-WORKS.md) for a full explanation of the robot's inputs, workflow, truth sources, and outputs.
