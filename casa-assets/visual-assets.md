# Visual assets (guidance + packs)

This doc exists so the **Visual selector** step can recommend consistent visuals without inventing brand assets.

## Visual posture (matches voice)

- Minimal, calm, high-contrast, readable.
- No "panic graphics" (red sirens, flames, hack skull imagery).
- Prioritize usefulness: checklists, simple diagrams, short quotes.

## Allowed visual formats (default)

- **Checklist card**: 3–5 bullets, one clear headline.
- **Quote card**: one sentence + attribution (if internal/public figure).
- **Simple diagram**: custody model explained (exchange custody vs self-custody) using neutral shapes.

## Disallowed formats (default)

- Fear-mongering "breaking news" style cards.
- Shaming screenshots of victims or exchanges.
- Overly meme-y templates in crisis moments.

## Asset families

- **Logo / wordmark**:
  - `landing-page/public/brand/casa-wordmark.svg`
  - `landing-page/public/brand/casa-wordmark.png`
  - `landing-page/public/brand/casa-icon.jpeg`
- **Color palette**: (path TBD)
- **Typography**: (path TBD)
- **Background textures / patterns**: (path TBD)

## Visual selector decision rules

- **Crisis post on X**: default to **no visual** unless a checklist card materially improves clarity.
- **Educational thread**: checklist card works well.
- **Blog**: hero image optional; avoid sensational visuals; simple header graphic is fine.

## Visual prompt stub (for generation)

If you generate visuals, keep prompts aligned with:
- calm, institutional, minimal style
- large text, scannable
- no fear imagery

---

## Visual packs

Visual packs are pre-designed card sets tied to scenario types. Each pack includes verbatim on-image copy, layout specs, and export requirements. Designers produce the final assets in Figma; these specs are the handoff brief.

### Visual pack 1: Self-custody check (crisis / incident)

**Use when**: the scenario involves an exchange hack, custody failure, or security breach, and the campaign includes X posts and/or a blog with a self-custody framework angle.

**Designed to be**: useful on X (readable on mobile), embeddable in the blog, non-opportunistic (no dunking, no panic visuals, no guarantees).

#### Card 1 — Diagnostic (questions)

- **Purpose**: A neutral diagnostic that helps readers distinguish custodial exposure vs self-custody without shaming.
- **On-image copy (use verbatim)**:
  - Headline: `Is it self-custody or something else?`
  - Pill_1: `Who controls withdrawals?`
  - Pill_2: `What changes if the company goes bankrupt?`
  - Pill_3: `What does "recovery" depend on?`
  - Footer: `Casa` wordmark centered near bottom
- **Layout**:
  - 16:9 canvas
  - headline centered top
  - three stacked pill buttons mid-frame
  - subtle decorative nodes/dots for depth (no illustrations)
  - logo/wordmark centered bottom
- **Style**:
  - dark purple/indigo gradient background + subtle diagonal texture
  - pills in a complementary purple; white text; high contrast
  - minimalist, "first-class financial institution" feel
- **Constraints**:
  - no CTA on the card
  - no urgency language
  - no emojis in the image

#### Card 2 — Framework (4-step plan)

- **Purpose**: A scannable step-by-step plan that shifts readers from reaction to practice.
- **On-image copy (use verbatim)**:
  - Headline: `A smooth 4-step plan to evaluate self-custody`
  - Bullet_1: `Consider investment term.`
  - Bullet_2: `Start small.`
  - Bullet_3: `Test recovery.`
  - Bullet_4: `Reduce single points of failure.`
  - Footer: `Casa` wordmark centered near bottom
- **Layout**:
  - 16:9 canvas
  - headline large at top
  - 4 bullet lines with minimal icons, stacked with generous spacing
  - logo/wordmark centered bottom
- **Style**:
  - match Card 1 background family (same palette + texture)
  - white text; high contrast; minimal icon set
- **Constraints**:
  - no "move now" / panic CTA
  - no guarantees / absolutes
  - no emojis in the image

#### Export specs

- **Primary**: 1600x900 (X-friendly 16:9)
- **Also**: 1200x675 and 1080x1080
- Provide editable source (Figma preferred) + PNG exports

#### Micro-brief (fast copy/paste for designer)

- **Card_1**: "Dark purple Casa card titled `Is it self-custody or something else?` with 3 stacked pill questions: `Who controls withdrawals?` `What changes if the company goes bankrupt?` `What does "recovery" depend on?` + Casa wordmark bottom center."
- **Card_2**: "Matching checklist card titled `A smooth 4-step plan to evaluate self-custody` with bullets: `Consider investment term.` `Start small.` `Test recovery.` `Reduce single points of failure.` + Casa wordmark bottom center."

---

### Visual pack 2: Custody basics (educational) — placeholder

**Use when**: `Scenario_tag=GeneralEducation` or `InheritancePlanning`, and the content explains custody fundamentals.

- Card A — "Access vs ownership" comparison diagram (TBD)
- Card B — "Self-custody ladder" (small → medium → large holdings) (TBD)

---

### Visual pack 3: Operational security — placeholder

**Use when**: the content covers travel security, phishing, social engineering.

- Card A — "Before you travel" checklist (TBD)
- Card B — "Phishing red flags" quick reference (TBD)
