# Claims ledger template

The **Claims ledger** is the product/comms safety net. It forces explicitness about:
- what we know vs assume
- what we’re claiming
- how we phrase uncertainty
- whether statements match `product-facts.md`

```markdown
# Claims Ledger: [Contract title]

## Summary
- Overall_risk_level: low | medium | high
- Primary_risks: [e.g., overclaiming, implied blame, factual uncertainty, product mismatch]
- Must_fix_before_publish: [yes/no]

## Claims & assumptions (table)

| ID | Draft_snippet | Claim_type (fact/assumption/opinion) | Confidence (low/med/high) | Source_or_basis | Consistent_with_product_facts (y/n) | Risk_if_wrong | Safer_rewrite |
|----|---------------|--------------------------------------|----------------------------|----------------|--------------------------------------|--------------|--------------|
| C1 | ... | fact | med | (link / internal note / \"general principle\") | y | reputational | ... |

## Things we explicitly avoided (and why)
- Named_exchange: avoided (avoid dogpile; keep focus on principles)
- Blame_language: avoided (victim empathy)
- Absolute_safety_claims: avoided (credibility)
- Urgency_CTA: avoided (not opportunistic)

## Language constraints checklist
- [ ] Lowercase \"bitcoin\" throughout
- [ ] No dunking / no schadenfreude / no \"we told you so\"
- [ ] No urgency-driven crisis CTA
- [ ] Tradeoffs acknowledged (self-custody responsibility)
- [ ] Clear separation of known facts vs assumptions
- [ ] Go_to_market alignment (B2C vs B2B vs Mixed) respected (no cross-surface hallucinations)
- [ ] X deliverables are distinct (anti-redundancy):\n  - Single post is brief first-aid (empathy + 1–2 actions)\n  - Thread adds new value via step-by-step guidance (no rephrasing the single)
- [ ] Link-out integrity (if any links included):\n  - Total links across X deliverables ≤ contract max\n  - Any placeholder resource is clearly labeled as proposed (not implied to exist)
- [ ] Cashtag policy satisfied (if assets mentioned):\n  - Use `$TICKER` once on first mention (per post/thread), then plain words thereafter\n  - Keep `bitcoin` lowercase after the cashtag
- [ ] Blog internal links (if enabled):\n  - Links point to verified CASA pages (prefer CASA blog)\n  - No link stuffing (target 3–7 total)\n  - Links are embedded on relevant phrases, not sensitive/empathy-first sentences
- [ ] Visual briefs included:\n  - X post 1 (single) visual recommendation/brief\n  - X post 2 (thread) visual recommendation/brief\n  - Blog hero (and optional inline diagram) brief
- [ ] Asset-scope language is precise:\n  - Broad audience phrasing (\"crypto/assets/funds\") is not accidentally presented as a CASA product support claim\n  - Any CASA coverage mention is limited to supported assets: BTC, ETH, USDC, USDT
- [ ] X account tiering respected:\n  - CASA_main has no first-person singular (\"I/my\")\n  - QTs do not introduce new risky claims not present in the main post

## Feedback capture (Gate B) and persistence
- GateB_feedback:
  - notes: [paste key human edits/notes here]
  - persistence: apply_this_run_only | persist_for_future
  - scenario_tag: [must match Contract Scenario_tag when scenario_specific]
  - extracted_rules_for_next_time (if persist_for_future):
    - global_CASA_quality_rules (apply to all runs):
      - rule_1:
      - rule_2:
    - scenario_specific_rules (apply only when Scenario_tag matches):
      - rule_1:
      - rule_2:

## Required edits (top 3)
1. ...
2. ...
3. ...
```

