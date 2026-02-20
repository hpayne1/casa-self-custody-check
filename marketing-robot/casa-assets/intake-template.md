# Intake template (task → normalized input)

This is the “front door” module for the orchestrator. It converts messy task text into a deterministic packet that can be copied into the Contract.

```markdown
## Intake_normalized

### Raw_task
- Task_text: |
    [paste the raw ask]

### Scenario
- Scenario_tag: [ExchangeHack | ScamWave | CustodyFailure | Other]
- Scenario_summary: [2–4 sentences, neutral]
- Facts_known:
  - ...
- Facts_unknown:
  - ...
- Sensitivities:
  - no dunking/no schadenfreude
  - avoid naming/shaming victims/exchange unless explicitly required

### Audience + market
- Go_to_market: B2C | B2B | Mixed
- Primary_product_surface: Standard | Premium | Private_Client | Business | Enterprise | Mixed
- Platforms_in_scope: Mobile_app | Web_dashboard | Both
  - Defaults: B2C=Mobile_app; B2B=Both; Mixed=Both
- Asset_scope:
  - audience_language: bitcoin_only | bitcoin_first | multi_asset_general
  - product_claims_language: bitcoin_only | btc_eth_usdc_usdt_only
  - default: audience_language=bitcoin_first; product_claims_language=btc_eth_usdc_usdt_only

### Audience segments (for Audience Evaluator)
- Audience_segments: [victim_or_possibly_impacted | spectator_not_impacted | long_term_holder | newcomer | b2b_operator_custodian]
- Primary_emotional_state_by_segment:
  - victim_or_possibly_impacted: [e.g., panic, anger, shame, urgency]
  - spectator_not_impacted: [e.g., uneasy curiosity, reconsidering custody]
  - long_term_holder: [e.g., validation of posture, desire for framework]
  - newcomer (optional): [e.g., confusion; needs plain language]
  - b2b_operator_custodian (optional): [e.g., operational urgency, internal controls scrutiny, reputational risk]

### Deliverables (contract-enforced)
- X_posts:
  - count: [N]
  - format_mix:
    - single_posts: [N]
    - threads: [N]
    - thread_max_tweets: 5
    - default_for_ExchangeHack: 1_single + 1_thread
  - cashtag_policy:
    - enabled: true
    - first_mention_only: true
    - example: "Use `$BTC` once on first mention, then `bitcoin` thereafter"
    - note: apply similarly for other assets/chains when used (e.g., `$ETH` once, then `ethereum`)
  - distinctness_policy:
    - single_post_role: brief_first_aid  # empathy + 1–2 safe actions; minimal/no link
    - thread_role: step_by_step_framework  # each tweet is a distinct step/unit of value
    - no_repeat_rule: thread_must_add_new_information_not_in_single
  - link_out_policy:
    - enabled: [yes/no]
    - max_links_total: 1
    - placement: thread_only | single_only | either
    - link_target_type: worksheet_placeholder | verified_casa_page | verified_external_resource
    - link_target_placeholder: [/self-custody-check]  # clearly label as proposed if not verified
  - posting_accounts:
    - CASA_main (required; counts toward X_posts.count)
    - CEO_Nick (QT amplification; appendix)
    - Growth_Marketing (QT amplification; appendix)
  - qt_policy:
    - enabled: true
    - qt_output_location: appendix
    - counts_toward_X_posts_count: false
  - pronoun_policy:
    - CASA_main: no_first_person_singular  # no “I/my”
    - personal_accounts: first_person_allowed
- Blog_post:
  - count: [N]
  - word_count_range: [min-max]
  - internal_linking_policy:
    - enabled: true
    - source: casa_blog_only
    - research_after_draft: true
    - target_links_range: 3-7
    - no_link_stuffing: true
- Follow_up_content_idea:
  - count: [N]
- What_we_wouldnt_do:
  - sections: [N]
  - items_range: [min-max]

### Constraints
- Tone: calm, credible, first-class; validate → reframe → next step
- CTA_policy: soft informational only (default)
- Emoji_policy: none (default)
- Product_truth: must match `product-facts.md`
```

