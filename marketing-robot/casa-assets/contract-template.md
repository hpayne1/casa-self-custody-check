# Contract template (enforceable brief)

This is the template the **Contract builder** outputs and **Gate A** approves. The **Assembler** must enforce it.

Use the **take-home preset** by keeping defaults as-is and filling only scenario details.

```markdown
# Contract: [Title]

## Meta
- Date:
- Scenario_tag: [e.g., ExchangeHack | ScamWave | CustodyFailure]
- Scenario_summary:
- Facts_known: [what is actually known]
- Facts_unknown: [what is not confirmed]
- Audience:
- Go_to_market: B2C | B2B | Mixed
- Primary_product_surface: Standard | Premium | Private_Client | Business | Enterprise | Mixed
- Platforms_in_scope: Mobile_app | Web_dashboard | Both  # defaults: B2C=Mobile_app; B2B=Both; Mixed=Both
- Asset_scope:
  - audience_language: bitcoin_only | bitcoin_first | multi_asset_general
  - product_claims_language: bitcoin_only | btc_eth_usdc_usdt_only
  - default: audience_language=bitcoin_first; product_claims_language=btc_eth_usdc_usdt_only
- Audience_segments: [victim_or_possibly_impacted | spectator_not_impacted | long_term_holder | newcomer | b2b_operator_custodian]
- Audience_success_criteria:
  - victim_or_possibly_impacted: "Feels seen; gets safe next steps (verify, avoid scams); no minimizing."
  - spectator_not_impacted: "Gets a calm custody framework; not panic-driven."
  - long_term_holder: "Gets validated posture + clear principle; avoids 'told you so' tone."
  - b2b_operator_custodian (optional): "Gets a sober internal-controls framing (risk reduction, not absolutes) and a soft invite to talk; no blame."
- Primary_persona: CEO_Nick | Educational_curator | Head_of_marketing | General_creator
- Secondary_personas (optional):
- GateB_feedback_persistence_default: apply_this_run_only | persist_for_future
- Feedback_persistence_policy:
  - global_CASA_quality: persist across all runs
  - scenario_specific: persist only within matching Scenario_tag
- References:
  - product_source_of_truth: casa-assets/product-facts.md
  - comms_source_of_truth: casa-assets/brand-voice.md
  - required_disclaimers: [list any required disclaimers for this run]

## Objectives (mixed scorecard defaults)
- Trust_credibility_weight: 0.50
- Engagement_weight: 0.30
- Conversions_weight: 0.20
- Primary_goal_statement: "Be helpful and credible; avoid being salesy; act like a first-class financial institution."

## Deliverables (contract the assembler enforces)

- X_posts:
  - count: 2   # take-home default
  - format_mix:
    - default_for_ExchangeHack: 1_single + 1_thread
    - thread_max_tweets: 5
  - cashtag_policy:
    - enabled: true
    - first_mention_only: true
    - example: "Use `$BTC` once on first mention, then `bitcoin` thereafter"
    - note: apply similarly for other assets/chains when used (e.g., `$ETH` once, then `ethereum`)
  - distinctness_policy:
    - single_post_role: brief_first_aid
    - thread_role: step_by_step_framework
    - no_repeat_rule: thread_must_add_new_information_not_in_single
  - link_out_policy:
    - enabled: yes
    - max_links_total: 1
    - placement: thread_only
    - link_target_type: worksheet_placeholder
    - link_target_placeholder: /self-custody-check  # proposed landing page (placeholder)
  - posting_policy:
    - counted_posts_account: CASA_main
    - pronoun_policy_CASA_main: no_first_person_singular  # no “I/my”
    - auto_qt_pack:
      - enabled: true
      - accounts: [CEO_Nick, Growth_Marketing]
      - output_location: appendix
      - counts_toward_X_posts_count: false
  - constraints:
    - calm, non-salesy, no dunking / no schadenfreude
    - lowercase "bitcoin"
    - no naming/shaming victims or the exchange (unless explicitly allowed)
    - avoid urgent crisis CTA
    - emojis: default none (≤1 only if explicitly requested and not a crisis)
    - go_to_market_alignment: if Go_to_market is B2C, avoid B2B-only claims (web dashboard, role management, hot wallet). If B2B, avoid B2C-only pricing/feature assumptions unless explicitly in scope.
- Blog_post:
  - count: 1   # take-home default
  - word_count_range: 500-800
  - internal_linking_policy:
    - enabled: true
    - source: casa_blog_only
    - research_after_draft: true
    - target_links_range: 3-7
    - no_link_stuffing: true
  - structure:
    - headline
    - what_happened (high level)
    - why_it_matters (custody model, neutral)
    - what_self_custody_means (with tradeoffs)
    - what_you_can_do (practical steps, low-pressure CTA optional)
    - close (reassurance)
- Follow_up_content_idea:
  - count: 1
  - format: (blog | X_thread | checklist | video | resource_roundup)
- What_we_wouldnt_do:
  - count: 1_section
  - items: 2-4

## Persona micro-briefs (fleshed; writers must follow)

- CEO_Nick_microbrief:
  - mission_and_posture: "Calm authority. Long-term view. Security is a practice. No theatrics. Principled, bitcoin-veteran energy."
  - audience_assumptions: "Readers may be stressed; they want clarity, not hype. Use custody/counterparty-risk framing they recognize."
  - signature_moves:
    - "Open with empathy, then a simple custody reframe (keys vs IOU)."
    - "Frame exchange custody as counterparty risk; self-custody as reducing reliance on third parties."
    - "Acknowledge tradeoffs plainly."
    - "Offer a small number of safe next steps."
  - anti_patterns:
    - "Dunking or schadenfreude."
    - "Speculating about blame/causes."
    - "Urgency-driven crisis CTA."
    - "Emojis by default."
  - vocabulary_and_style:
    - "Short sentences, precise language. One metaphor max."
    - "Avoid crypto slang in serious contexts."
  - example_openers:
    - "If you’re feeling uneasy today, that makes sense. Here’s what matters—and what you can do next."
    - "Events like this are a reminder: convenience and custody are not the same thing."
    - "An exchange account can be convenient—but it’s also counterparty risk. Here’s how to think about it."

- Educational_curator_microbrief:
  - mission_and_posture: "Practical teacher. Reduce fear by making steps concrete. Use non-crypto words first, then map to crypto terms."
  - audience_assumptions: "Some readers are new to self-custody; use finance parallels (custody, controls, recovery) before keys/multisig."
  - signature_moves:
    - "Checklists and decision ladders."
    - "Define terms in one sentence; then provide a safe default."
    - "Translate: custody/controls → keys/multisig."
    - "Show tradeoffs + how to proceed safely."
  - anti_patterns:
    - "Jargon dumps."
    - "Too many options at once."
    - "Implied judgment."
    - "Memes/emojis in serious contexts."
  - vocabulary_and_style:
    - "Scannable headings, bullets, examples."
  - example_openers:
    - "Self-custody doesn’t have to be scary. Start with these three basics."
    - "If you’ve only ever held bitcoin on an exchange, here’s the simplest mental model to understand what just happened."
    - "Think of custody like who controls the vault—then we’ll translate that into keys and multisig."

- Head_of_marketing_microbrief (optional):
  - mission_and_posture: "Clarity and consistency. Helpful without being salesy."
  - signature_moves:
    - "Punchy hook/question that still reads first-class (no dunking, no hype)."
    - "Tight structure, audience clarity, contract fit."
  - anti_patterns:
    - "Growth hacks during crisis."
    - "Sensationalism or dunking."
    - "Emojis by default."

- General_creator_microbrief:
  - mission_and_posture: "Narrative + clarity. Human, never melodramatic."
  - signature_moves:
    - "Short scene → principle → next step."
  - anti_patterns:
    - "Cynicism, dunking, vibes without guidance."

## Tone and safety constraints (hard rules)

- Must_be:
  - helpful, credible, calm
  - first-class financial institution composure
  - practical (actionable steps)
  - value-first (practical and/or emotional value)
- Must_not_be:
  - fear-mongering, opportunistic, "we told you so"
  - schadenfreude / "told-you-so" adjacent tone
  - overclaiming ("can't be hacked", "100% safe")
  - blamey/dunking on victims or competitors
- CTA_policy:
  - allowed: soft, informational (e.g. "learn more")
  - avoid: urgent crisis CTAs ("move now"), paid crisis keyword targeting

## Visual requirements

- Visuals:
  - required: false
  - if_included:
    - format: (simple checklist card | quote card | minimal diagram)
    - asset_family: [from casa-assets/visual-assets.md]

## Review gates (non-optional)

- Gate_A_approve_contract: required
- Gate_B_final_approval: required
```

