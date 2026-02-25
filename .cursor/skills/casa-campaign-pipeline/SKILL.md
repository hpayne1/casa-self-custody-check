---
name: casa-campaign-pipeline
description: Runs CASA's contract-first content workflow end-to-end (contract builder, product truth pass, drafting, tone scoring, claims ledger, visuals recommendation, and contract-enforcing assembly). Use for any CASA content campaign — crisis response, educational content, seasonal pushes, or general copywriting.
---

# CASA Campaign Pipeline (Contract-first)

This skill builds **quality-first** content with **human-in-the-loop gates** and a **self-learning** feedback loop.

## Source of truth files (must read first)

- `casa-assets/brand-voice.md` (comms truth, no dunking, persona posture)
- `casa-assets/product-facts.md` (product truth: plans/pricing/features/disclaimers)
- `casa-assets/intake-template.md` (task intake normalization format + scenario defaults table)
- `casa-assets/contract-template.md` (contract fields + defaults)
- `casa-assets/claims-ledger-template.md` (claims ledger format)
- `casa-assets/performance-scorecard.md` (scoring)
- `casa-assets/learning-log.md` (prior learnings; read latest 1–3 entries if present)

## Inputs (from the user)

At minimum:
- scenario context (what happened, what's known/unknown)
- requested deliverables (counts + constraints)

Defaults (when not specified):
- 2 X posts
- 1 blog (500–800 words)
- 1 follow-up content idea
- "what we wouldn't do" section (2–4 bullets)

### Optional control flags

- **autoApproveGates**: if the user explicitly says "assume approvals are good" (or similar), treat Gate A and Gate B as approved, but still **produce the Contract** and **record Gate B feedback fields as empty**.
- **feedbackPersistence**: default `apply_this_run_only` unless user requests persistence.

## Scenario defaults table

When the user provides a scenario but not all parameters, use this table to fill in sensible defaults. The user can always override.

| Scenario_tag | Default audience_segments | Default format_mix | Visual pack | Special notes |
|---|---|---|---|---|
| ExchangeHack | victim_or_possibly_impacted, spectator_not_impacted, long_term_holder | 1 single + 1 thread (≤5) | Pack 1 (Self-custody check) | Lead with empathy + scam avoidance; write to impacted AND spectators |
| ScamWave | victim_or_possibly_impacted, newcomer, long_term_holder | 1 single + 1 thread (≤5) | Pack 1 or none | Phishing/social engineering; verification steps |
| CustodyFailure | victim_or_possibly_impacted, spectator_not_impacted | 1 single + 1 thread (≤5) | Pack 1 | Platform insolvency / withdrawal freeze |
| RegulatoryShift | spectator_not_impacted, long_term_holder, b2b_operator_custodian | 1 single + 1 thread (≤5) | None (default) | Measured, non-political; practical implications |
| InheritancePlanning | long_term_holder, newcomer | 1 thread (≤5) | Pack 2 (when available) | Educational; soft CTA to inheritance page |
| SecurityBreach | victim_or_possibly_impacted, long_term_holder | 1 single + 1 thread (≤5) | Pack 1 | Wallet/protocol vulnerability; calm next steps |
| GeneralEducation | spectator_not_impacted, long_term_holder, newcomer | 1 thread (≤5) | Pack 2 (when available) | Authority content; no crisis framing |
| Other | (choose appropriate) | 1 single + 1 thread (≤5) | (choose appropriate) | Adapt defaults to context |

## Workflow (non-optional steps)

### Step 0 — Intake normalizer (task → normalized input)

Before building the Contract, normalize the raw user ask using `casa-assets/intake-template.md`.

Rules:
- Don't invent facts. Put uncertainty into `Facts_unknown`.
- Choose `Scenario_tag`, `Go_to_market`, `Primary_product_surface`, and `Platforms_in_scope` using public-truth defaults.
  - Default **B2C → Mobile_app** (unless the ask explicitly needs web/dashboard).
  - Treat "web dashboard" as Business/Enterprise unless the user provides internal confirmation.
- Set `Audience_segments` using the scenario defaults table above unless the user specifies otherwise.
- If you include `b2b_operator_custodian` in `Audience_segments`, ensure B2C drafts do NOT drift into B2B product claims (dashboard, role mgmt) unless `Go_to_market` is Mixed/B2B.
- Set deliverable counts from the ask; if missing, use defaults.

The normalized intake should be embedded into the Contract appendix as `## Intake_normalized` so it's auditable.

### Step 1 — Contract builder (Gate A)

1. Produce a **Contract** using `casa-assets/contract-template.md`.
2. Fill:
   - `Scenario_tag`
   - `Facts_known` and `Facts_unknown`
   - `Go_to_market` (B2C | B2B | Mixed)
   - `Primary_product_surface` (e.g. Standard/Premium/Business/Enterprise)
   - `Platforms_in_scope` (Mobile_app | Web_dashboard | Both)
     - Defaults: if `Go_to_market=B2C` → `Mobile_app`; if `B2B` → `Both`; if `Mixed` → `Both` (override if the ask is platform-specific).
   - `Audience_segments` + `Audience_success_criteria` (use Contract defaults; adjust if user specifies)
   - deliverable counts (use user ask; otherwise defaults)
   - persona micro-briefs (keep as-is unless user customizes)
3. **Product truth pre-check**: validate Contract product references/CTAs against `product-facts.md`.
4. Gate A:
   - If `autoApproveGates` is true, proceed.
   - Otherwise ask the user to approve or edit the Contract.

### Step 2 — Assigner + idea generator

1. Choose `Primary_persona` from the Contract.
2. Generate **max 3** angles; recommend **1** with rationale.
3. If `autoApproveGates` is true, select the recommended angle automatically; otherwise ask the user to pick 1.

### Step 3 — Drafting (single best draft)

Draft exactly what the Contract requests. Do not generate multiple full variants unless asked.

X output requirements (assembler will enforce):

- Generate **CASA_main** posts for `X_posts.count` (these are the contract-counted deliverables).
  - Label as: `### X post i (CASA_main)`
  - Enforce **no first-person singular** ("I/my").
  - **Thread limits**:
    - Use `Contract.Deliverables.X_posts.format_mix.thread_max_tweets` when present; otherwise default to **5**.
  - Each post can be either:
    - **single** (one tweet), or
    - **thread** (≤ `thread_max_tweets`, numbered `1/N`, `2/N`, ...).
  - Default unless the user overrides: **1 single + 1 thread (≤5)**.
  - **Distinctness (avoid repeating yourself)**:
    - Follow `Contract.Deliverables.X_posts.distinctness_policy` when present.
    - Single should act like **brief first-aid** (empathy + 1–2 safe actions).
    - Thread should be **step-by-step**; each tweet must add a new unit of value (no rephrasing the single).
  - **Asset language** (avoid confusion):
    - Audience-facing framing can be **bitcoin-first** (brand voice), but in incident contexts you may say "bitcoin (and other assets)" to avoid implying people only hold bitcoin.
    - Any **CASA product claims** must stay precise to supported assets: **BTC, ETH, USDC, USDT** (don't imply broad "all crypto" support).

- For each CASA_main post, generate an **appendix amplification pack** (does **not** count toward `X_posts.count`):
  - `### QT for X post i (CEO_Nick)`
  - `### QT for X post i (Growth_Marketing)`
  - QTs should **play off** the main post and may use first-person.
  - If the main post is a **thread**, the QT should reference the **thread opener (Tweet 1)**.

Required output sections (contract deliverables):
- `## Blog` (500–800 words by default; full draft)
- `## Follow-up idea`
- `## What we wouldn't do (and why)`

### Step 3.5 — Diversity / redundancy reviewer (required, applied)

Compare the two contract-counted X deliverables (single + thread) and ensure they are not duplicative.

Rules:
- Enforce `Contract.Deliverables.X_posts.distinctness_policy` (single role vs thread role).
- If overlap exists (same hook, same bullets, same "principle" sentence), rewrite:
  - Keep the **single** as a short "first-aid" message (empathy + 1–2 safe actions).
  - Make the **thread** a stepwise guide where each tweet introduces a distinct step.
- Do not add extra variants—apply one rewrite so the two posts clearly differ.

Then proceed.

### Step 3.6 — Link-out planner (optional, applied)

If `Contract.Deliverables.X_posts.link_out_policy.enabled` is true, plan and insert link-outs safely:

- Respect `max_links_total` across all X deliverables (default 1).
- Respect `placement` (default `thread_only`).
- If `link_target_type=worksheet_placeholder`:
  - Provide a worksheet title + 2–3 bullet "what you'll get."
  - Insert **one** clearly labeled placeholder link (e.g., `/self-custody-check (proposed)`), never implying it already exists.
- If `link_target_type` is verified (CASA page or external): only use links that are known/verified in `casa-assets/linkable-resources.md`.

Then proceed.

### Step 3.7 — X cashtag normalizer (required, applied)

Apply `Contract.Deliverables.X_posts.cashtag_policy` to the contract-counted X deliverables.

Rules:
- Use `$TICKER` on the **first mention only** of an asset within a single post.
- For a **thread**, treat the whole thread as one unit:
  - the first time the asset is mentioned anywhere in the thread → use `$TICKER`
  - subsequent mentions in later tweets → use the plain word (no cashtag).
- Keep `bitcoin` lowercase after the cashtag (e.g., "$BTC … bitcoin … bitcoin").
- Do not add cashtags if the asset isn't mentioned.
- Default tickers when relevant: `$BTC`, `$ETH` (only if mentioned).

Then proceed.

### Step 4 — Product checker (truth pass)

Validate the draft against `product-facts.md`, scoped to the Contract:

- **Market alignment**: does the draft stay inside `Go_to_market`?
  - If **B2C**, avoid B2B-only surfaces (web dashboard, role management, enterprise hot wallet) unless explicitly allowed.
  - If **B2B**, avoid presenting B2C consumer pricing/features unless explicitly in scope.
- **Plan + pricing alignment**: any pricing, tiers, "includes," and limits must match the selected `Primary_product_surface`.
  - Pricing should be stated monthly-first with annual billing notes where applicable.
- **Platform alignment**: claims about mobile app vs web dashboard must match `Platforms_in_scope`.
  - App: iOS/Android; vault portal.
  - Web dashboard: Business/Enterprise.
- **Wallet type alignment**: if the draft mentions "hot wallet" vs vaults, ensure it's restricted to **Enterprise** language and phrased with restraint.
- **Supported assets**: BTC/ETH/USDC/USDT (don't invent other support).
- **Supported assets + scope language**:
  - If you mention CASA coverage, keep it to **BTC, ETH, USDC, USDT**.
  - If you use broad audience language ("crypto," "assets," "funds"), ensure it's clearly **general advice**, not a claim that CASA supports everything.
- **Disclosures**: non-custodial; CASA doesn't hold/control/transmit funds; buy/sell via Zero Hash (when mentioned).

If anything is off, rewrite to correct it.

### Step 4.2 — Blog internal linker (required when enabled, applied)

If `Contract.Deliverables.Blog_post.internal_linking_policy.enabled` is true:

- Identify 3–7 key phrases in the blog draft that can be supported by existing CASA blog posts.
- Use `casa-assets/linkable-resources.md` **Verified links** first.
- If a needed concept is missing, research CASA blog links and add them to `linkable-resources.md` for reuse.
- Insert hyperlinks as markdown links on the phrase itself.
- Avoid linking inside the most emotionally sensitive "first-aid" sentences; keep links for explanatory sections.

Then proceed.

### Step 4.5 — Audience evaluator (advisory, applied)

Simulate how the draft lands for each `Audience_segment` in the Contract.

For each segment, output:
- **Likely reaction** (1–2 sentences)
- **Top 2 risks** (e.g., minimizing harm, panic language, blame/dunking, jargon)
- **Rewrite directives** (concrete edits)

Then apply the rewrite directives before Tone/Claims.

Scenario-specific audience rules:

- **Crisis scenarios** (ExchangeHack, CustodyFailure, SecurityBreach, ScamWave):
  - Write to **two states** explicitly: (1) impacted/possibly-impacted and (2) not impacted but reconsidering custody.
  - If `b2b_operator_custodian` is present, add one additional advisory note:
    - Use internal-controls framing (multi-party approvals, separation of duties) as **risk reduction**, not a claim of "prevention."
    - Keep it non-judgmental; no blame.

- **Educational scenarios** (GeneralEducation, InheritancePlanning):
  - Focus on clarity and decision support; no crisis framing.
  - Ensure newcomer-friendly language if `newcomer` is in audience segments.

- **Regulatory scenarios** (RegulatoryShift):
  - Stay factual and non-political; focus on practical user implications.

### Step 5 — Tone evaluator (scoring)

Score the draft using the trust rubric in `performance-scorecard.md` and `brand-voice.md`.

Output:
- a 1–5 score per rubric dimension (short)
- **top 3 fixes**
- a short "rewrite plan" (3 bullets)

Apply the fixes immediately (quality over quantity).

### Step 6 — Claims ledger

Produce a Claims Ledger using `casa-assets/claims-ledger-template.md`:
- enumerate claims and assumptions
- ensure `consistent_with_product_facts: y` for product-related claims
- include the language checklist (lowercase bitcoin; no dunking; no urgency CTA)

Apply required edits.

### Step 7 — Visual selector

Produce **designer-ready visual briefs** for:
- X post 1 (single)
- X post 2 (thread)
- Blog (hero + optional inline graphic)

Rules:
- Default to **no visual** for crisis unless a checklist card materially improves clarity.
- Use the allowed formats + posture rules from `casa-assets/visual-assets.md`.
- Do not use fear imagery.

Scenario-driven visual pack selection:
- Check the scenario defaults table for the recommended visual pack.
- If a visual pack is recommended and you choose to use visuals, use the **on-image copy verbatim** from that pack's spec in `casa-assets/visual-assets.md`.
- For packs marked "placeholder" or "TBD," produce a custom brief following the general visual posture rules.

Output format:
- `## Visual briefs`
  - `### X post 1 visual (recommended: no visual | checklist card | quote card)`
    - Purpose:
    - Headline text:
    - Body bullets (3–5):
    - Layout notes:
    - Specs (default): 1600x900 (primary), plus 1200x675 and 1080x1080
  - `### X post 2 thread visual (recommended: checklist card | simple diagram | none)`
    - Purpose:
    - Headline text:
    - Steps/bullets (4–6):
    - Layout notes:
    - Specs (default): 1600x900 (primary), plus 1200x675 and 1080x1080
  - `### Blog hero visual`
    - Purpose:
    - Concept:
    - Copy on image (optional):
    - Do/Don't:
    - Specs (default): 1200x630
  - `### Blog inline graphic (optional)`
    - Concept (e.g., "Access vs ownership" diagram):
    - Labels:
    - Specs (default): 1200px wide

### Step 8 — Gate B (final approval) + revision loop

Present the assembled campaign doc.

Gate B behavior:
- If `autoApproveGates` is true: mark approved and finish.
- Otherwise: request edits from the user. If edits are provided, apply them and re-run:
  - product checker
  - tone scoring
  - claims ledger (minimum)

Capture feedback persistence choice:
- `apply_this_run_only` vs `persist_for_future`
- if persistent, classify rules into `global_CASA_quality` vs `scenario_specific` (Scenario_tag)

### Step 9 — Self-learning update (manual, after publish)

When the user later provides a feedback packet (URLs + metrics + replies), do:
- fill the scorecard
- write a concise entry into `learning-log.md`
- extract 1–3 rules for next time (global vs scenario-specific)

## Output format (what you deliver to the user)

For reliability, always output in this fixed coordinator order. The final deliverables are always at the bottom for copy/paste.

1. **Contract** (include `## Intake_normalized` inside the contract appendix)
2. **Draft outputs** (pre-tone/pre-claims)
3. **Tone score + fixes applied** (show scores + the exact fixes you applied)
4. **Claims ledger + edits applied** (show ledger + the exact edits you applied)
5. **Final deliverables** (ONLY what the Contract requires; ready to ship)
   - Include **CASA_main X posts only** here.
   - Include blog/follow-up/what-not-to-do if requested.
   - Put QTs under: `## Appendix: X amplification pack` (CEO + Growth) so they never inflate the contract deliverable count.

Keep it tight: quality-first, minimal fluff.

## Output artifacts (write to markdown files)

After producing the **Final deliverables** section, also write the deliverables to disk as markdown files so the user can share/submit without copy/paste.

Default path:
- `history/YYYY-MM-DD-<scenario-slug>/`

Default files (use the Contract date and a kebab-case slug from the Scenario_tag + context):
- `x-post-1-casa-main.md`
- `x-post-2-thread-casa-main.md`
- `blog.md` (must include embedded links)
- `follow-up-idea.md`
- `what-we-wouldnt-do.md`
- `visual-briefs.md` (copy/paste friendly)
- `appendix-qt-pack.md`
- `contract.md` (snapshot of the filled contract for audit)
- `claims-ledger.md` (snapshot of the claims ledger for audit)
- `README.md` (brief: what was asked, scenario summary, date, deliverable list)

Rules:
- Files must be **pure markdown**.
- Blog file must include the hyperlinks added by the Blog internal-linker step.
- Visual briefs must be formatted for easy copy/paste into Word (short lines, bullets).
- The history folder serves as the audit trail for this run.
