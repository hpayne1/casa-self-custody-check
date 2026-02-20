---
name: casa-campaign-pipeline
description: Runs CASA’s contract-first content workflow end-to-end (contract builder, product truth pass, drafting, tone scoring, claims ledger, visuals recommendation, and contract-enforcing assembly). Use for crisis/campaign responses and take-home style prompts requiring X posts + blog + follow-up idea + what-we-wouldnt-do.
---

# CASA Campaign Pipeline (Contract-first)

This skill builds **quality-first** content with **human-in-the-loop gates** and a **self-learning** feedback loop.

## Source of truth files (must read first)

- `casa-assets/brand-voice.md` (comms truth, no dunking, persona posture)
- `casa-assets/product-facts.md` (product truth: plans/pricing/features/disclaimers)
- `casa-assets/intake-template.md` (task intake normalization format)
- `casa-assets/contract-template.md` (contract fields + defaults)
- `casa-assets/claims-ledger-template.md` (claims ledger format)
- `casa-assets/performance-scorecard.md` (scoring)
- `casa-assets/learning-log.md` (prior learnings; read latest 1–3 entries if present)

## Inputs (from the user)

At minimum:
- scenario context (what happened, what’s known/unknown)
- requested deliverables (counts + constraints)

Defaults (take-home preset):
- 2 X posts
- 1 blog (500–800 words)
- 1 follow-up content idea
- “what we wouldn’t do” section (2–4 bullets)

### Optional control flags

- **autoApproveGates**: if the user explicitly says “assume approvals are good” (or similar), treat Gate A and Gate B as approved, but still **produce the Contract** and **record Gate B feedback fields as empty**.
- **feedbackPersistence**: default `apply_this_run_only` unless user requests persistence.

## Workflow (non-optional steps)

### Step 0 — Intake normalizer (task → normalized input)

Before building the Contract, normalize the raw user ask using `casa-assets/intake-template.md`.

Rules:
- Don’t invent facts. Put uncertainty into `Facts_unknown`.
- Choose `Scenario_tag`, `Go_to_market`, `Primary_product_surface`, and `Platforms_in_scope` using public-truth defaults.\n  - Default **B2C → Mobile_app** (unless the ask explicitly needs web/dashboard).\n  - Treat “web dashboard” as Business/Enterprise unless the user provides internal confirmation.
- Set `Audience_segments`.\n  - Default for `Scenario_tag=ExchangeHack`: `victim_or_possibly_impacted`, `spectator_not_impacted`, `long_term_holder`.
- If you include `b2b_operator_custodian` in `Audience_segments`, ensure B2C drafts do NOT drift into B2B product claims (dashboard, role mgmt) unless `Go_to_market` is Mixed/B2B.
- Set deliverable counts from the ask; if missing, use take-home defaults.

The normalized intake should be embedded into the Contract appendix as `## Intake_normalized` so it’s auditable.

### Step 1 — Contract builder (Gate A)

1. Produce a **Contract** using `casa-assets/contract-template.md`.
2. Fill:
   - `Scenario_tag` (e.g. `ExchangeHack`)
   - `Facts_known` and `Facts_unknown`
   - `Go_to_market` (B2C | B2B | Mixed)
   - `Primary_product_surface` (e.g. Standard/Premium/Business/Enterprise)
   - `Platforms_in_scope` (Mobile_app | Web_dashboard | Both)\n     - Defaults: if `Go_to_market=B2C` → `Mobile_app`; if `B2B` → `Both`; if `Mixed` → `Both` (override if the ask is platform-specific).
   - `Audience_segments` + `Audience_success_criteria` (use Contract defaults; adjust if user specifies)
   - deliverable counts (use user ask; otherwise take-home defaults)
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

- Generate **CASA_main** posts for `X_posts.count` (these are the contract-counted deliverables).\n  - Label as: `### X post i (CASA_main)`\n  - Enforce **no first-person singular** (“I/my”).\n  - **Thread limits**:\n    - Use `Contract.Deliverables.X_posts.format_mix.thread_max_tweets` when present; otherwise default to **5**.\n  - Each post can be either:\n    - **single** (one tweet), or\n    - **thread** (≤ `thread_max_tweets`, numbered `1/N`, `2/N`, ...).\n  - Default for `Scenario_tag=ExchangeHack` unless the user overrides: **1 single + 1 thread (≤5)**.\n  - **Distinctness (avoid repeating yourself)**:\n    - Follow `Contract.Deliverables.X_posts.distinctness_policy` when present.\n    - Single should act like **brief first-aid** (empathy + 1–2 safe actions).\n    - Thread should be **step-by-step**; each tweet must add a new unit of value (no rephrasing the single).\n  - **Asset language** (avoid confusion):\n    - Audience-facing framing can be **bitcoin-first** (brand voice), but in exchange-hack contexts you may say “bitcoin (and other assets)” to avoid implying people only hold bitcoin.\n    - Any **CASA product claims** must stay precise to supported assets: **BTC, ETH, USDC, USDT** (don’t imply broad “all crypto” support).

- For each CASA_main post, generate an **appendix amplification pack** (does **not** count toward `X_posts.count`):\n  - `### QT for X post i (CEO_Nick)`\n  - `### QT for X post i (Growth_Marketing)`\n  - QTs should **play off** the main post and may use first-person.\n  - If the main post is a **thread**, the QT should reference the **thread opener (Tweet 1)**.

Required output sections (contract deliverables):
- `## Blog` (500–800 words by default; full draft)
- `## Follow-up idea`
- `## What we wouldn’t do (and why)`

### Step 3.5 — Diversity / redundancy reviewer (required, applied)

Compare the two contract-counted X deliverables (single + thread) and ensure they are not duplicative.\n

Rules:\n
- Enforce `Contract.Deliverables.X_posts.distinctness_policy` (single role vs thread role).\n
- If overlap exists (same hook, same bullets, same “principle” sentence), rewrite:\n
  - Keep the **single** as a short “first-aid” message (empathy + 1–2 safe actions).\n
  - Make the **thread** a stepwise guide where each tweet introduces a distinct step (e.g., verify/scam-avoidance, segmentation, self-custody starter step, recovery test, operator controls).\n
- Do not add extra variants—apply one rewrite so the two posts clearly differ.\n

Then proceed.

### Step 3.6 — Link-out planner (optional, applied)

If `Contract.Deliverables.X_posts.link_out_policy.enabled` is true, plan and insert link-outs safely:\n

- Respect `max_links_total` across all X deliverables (default 1).\n
- Respect `placement` (default `thread_only`).\n
- If `link_target_type=worksheet_placeholder`:\n
  - Provide a worksheet title + 2–3 bullet “what you’ll get.”\n
  - Insert **one** clearly labeled placeholder link (e.g., `/self-custody-check (proposed)`), never implying it already exists.\n
- If `link_target_type` is verified (CASA page or external): only use links that are known/verified in `casa-assets/linkable-resources.md`.\n

Then proceed.

### Step 3.7 — X cashtag normalizer (required, applied)

Apply `Contract.Deliverables.X_posts.cashtag_policy` to the contract-counted X deliverables.\n

Rules:\n
- Use `$TICKER` on the **first mention only** of an asset within a single post.\n
- For a **thread**, treat the whole thread as one unit:\n
  - the first time the asset is mentioned anywhere in the thread → use `$TICKER`\n
  - subsequent mentions in later tweets → use the plain word (no cashtag).\n
- Keep `bitcoin` lowercase after the cashtag (e.g., “$BTC … bitcoin … bitcoin”).\n
- Do not add cashtags if the asset isn’t mentioned.\n
- Default tickers when relevant: `$BTC`, `$ETH` (only if mentioned).\n

Then proceed.

### Step 4 — Product checker (truth pass)

Validate the draft against `product-facts.md`, scoped to the Contract:

- **Market alignment**: does the draft stay inside `Go_to_market`?\n  - If **B2C**, avoid B2B-only surfaces (web dashboard, role management, enterprise hot wallet) unless explicitly allowed.\n  - If **B2B**, avoid presenting B2C consumer pricing/features unless explicitly in scope.
- **Plan + pricing alignment**: any pricing, tiers, “includes,” and limits must match the selected `Primary_product_surface`.\n  - Pricing should be stated monthly-first with annual billing notes where applicable.
- **Platform alignment**: claims about mobile app vs web dashboard must match `Platforms_in_scope`.\n  - App: iOS/Android; vault portal.\n  - Web dashboard: Business/Enterprise.
- **Wallet type alignment**: if the draft mentions “hot wallet” vs vaults, ensure it’s restricted to **Enterprise** language and phrased with restraint.
- **Supported assets**: BTC/ETH/USDC/USDT (don’t invent other support).
- **Supported assets + scope language**:\n  - If you mention CASA coverage, keep it to **BTC, ETH, USDC, USDT**.\n  - If you use broad audience language (“crypto,” “assets,” “funds”), ensure it’s clearly **general advice**, not a claim that CASA supports everything.
- **Disclosures**: non-custodial; CASA doesn’t hold/control/transmit funds; buy/sell via Zero Hash (when mentioned).

If anything is off, rewrite to correct it.

### Step 4.2 — Blog internal linker (required when enabled, applied)

If `Contract.Deliverables.Blog_post.internal_linking_policy.enabled` is true:\n

- Identify 3–7 key phrases in the blog draft that can be supported by existing CASA blog posts.\n
- Use `casa-assets/linkable-resources.md` **Verified links** first.\n
- If a needed concept is missing, research CASA blog links and add them to `linkable-resources.md` for reuse.\n
- Insert hyperlinks as markdown links on the phrase itself.\n
- Avoid linking inside the most emotionally sensitive “first-aid” sentences; keep links for explanatory sections.\n

Then proceed.

### Step 4.5 — Audience evaluator (advisory, applied)

Simulate how the draft lands for each `Audience_segment` in the Contract.\n

For each segment, output:\n
- **Likely reaction** (1–2 sentences)\n
- **Top 2 risks** (e.g., minimizing harm, panic language, blame/dunking, jargon)\n
- **Rewrite directives** (concrete edits)

Then apply the rewrite directives before Tone/Claims.\n

Special rule for `Scenario_tag=ExchangeHack`:\n
- Write to **two states** explicitly: (1) impacted/possibly-impacted and (2) not impacted but reconsidering custody.\n
- If `b2b_operator_custodian` is present, add one additional advisory note:\n  - Use internal-controls framing (multi-party approvals, separation of duties) as **risk reduction**, not a claim of “prevention.”\n  - Keep it non-judgmental; no blame.\n

### Step 5 — Tone evaluator (scoring)

Score the draft using the trust rubric in `performance-scorecard.md` and `brand-voice.md`.

Output:
- a 1–5 score per rubric dimension (short)
- **top 3 fixes**
- a short “rewrite plan” (3 bullets)

Apply the fixes immediately (quality over quantity).

### Step 6 — Claims ledger

Produce a Claims Ledger using `casa-assets/claims-ledger-template.md`:
- enumerate claims and assumptions
- ensure `consistent_with_product_facts: y` for product-related claims
- include the language checklist (lowercase bitcoin; no dunking; no urgency CTA)

Apply required edits.

### Step 7 — Visual selector

Produce **designer-ready visual briefs** for:\n
- X post 1 (single)\n
- X post 2 (thread)\n
- Blog (hero + optional inline graphic)\n
\n
Rules:\n
- Default to **no visual** for crisis unless a checklist card materially improves clarity.\n
- Use the allowed formats + posture rules from `casa-assets/visual-assets.md`.\n
- Do not use fear imagery.\n
\n
Output format:\n
- `## Visual briefs`\n
  - `### X post 1 visual (recommended: no visual | checklist card | quote card)`\n
    - Purpose:\n
    - Headline text:\n
    - Body bullets (3–5):\n
    - Layout notes:\n
    - Specs (default): 1200×675\n
  - `### X post 2 thread visual (recommended: checklist card | simple diagram | none)`\n
    - Purpose:\n
    - Headline text:\n
    - Steps/bullets (4–6):\n
    - Layout notes:\n
    - Specs (default): 1200×675\n
  - `### Blog hero visual`\n
    - Purpose:\n
    - Concept:\n
    - Copy on image (optional):\n
    - Do/Don’t:\n
    - Specs (default): 1200×630\n
  - `### Blog inline graphic (optional)`\n
    - Concept (e.g., “Access vs ownership” diagram):\n
    - Labels:\n
    - Specs (default): 1200px wide\n

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
5. **Final deliverables** (ONLY what the Contract requires; ready to ship)\n+   - Include **CASA_main X posts only** here.\n+   - Include blog/follow-up/what-not-to-do if requested.\n+   - Put QTs under: `## Appendix: X amplification pack` (CEO + Growth) so they never inflate the contract deliverable count.

Keep it tight: quality-first, minimal fluff.

## Output artifacts (write to markdown files)

After producing the **Final deliverables** section, also write the deliverables to disk as markdown files so the user can share/submit without copy/paste.\n

Default path:\n
- `deliverables/YYYY-MM-DD_<Scenario_tag>_takehome/`\n

Default files (use the Contract date and Scenario_tag):\n
- `YYYY-MM-DD_<Scenario_tag>_x_post_1_casa_main.md`\n
- `YYYY-MM-DD_<Scenario_tag>_x_post_2_thread_casa_main.md`\n
- `YYYY-MM-DD_<Scenario_tag>_blog.md` (must include embedded links)\n
- `YYYY-MM-DD_<Scenario_tag>_follow_up_idea.md`\n
- `YYYY-MM-DD_<Scenario_tag>_what_we_wouldnt_do.md`\n
- `YYYY-MM-DD_<Scenario_tag>_visual_briefs_designer_handoff.md` (copy/paste friendly)\n
- `YYYY-MM-DD_<Scenario_tag>_appendix_qt_pack.md`\n

Rules:\n
- Files must be **pure markdown**.\n
- Blog file must include the hyperlinks added by the Blog internal-linker step.\n
- Visual briefs must be formatted for easy copy/paste into Word (short lines, bullets).\n

