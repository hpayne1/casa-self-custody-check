# CASA Product Facts (Source of Truth)

This doc is the **product truth layer** for the content system. The **Product checker (truth pass)** uses it to prevent hallucinations about what CASA does, pricing, plans, platforms, and required disclosures.

**Last verified from public pages:** `casa.io` (pricing/plan + business/enterprise + multisig pages fetched 2026-02-19).

## What CASA is (public positioning)

- **Non-custodial, self-custody security software + expert support.**
- Multi-key (“multisig”) vaults designed to reduce single points of failure.
- Inheritance planning is included with paid memberships (and referenced heavily across B2C pages).

## What CASA is not

- **Not an exchange.**
- **Not a custodian holding customer funds.**
- Does not promise “unhackable” or “100% safe.”

## Supported assets (vaults)

CASA states members can secure: **BTC, ETH, USDC, USDT**.

## Platforms (where the product lives)

- **Mobile app:** CASA app is available on **iOS and Android** (`casa.io/download`).
- **Web dashboard:** referenced for **Business** and **Enterprise** (monitor balances, invite view-only users, reporting/oversight).

## Wallet types and key models (what the system actually is)

### Vaults (multisig)

- Vaults use **multiple keys** stored on separate devices/locations.
- CASA describes the **mobile app as the portal** for managing the vault.
- From CASA’s multisig page: keys are held in **cold storage** with the exception of the **mobile key**.

### Key counts and thresholds (as described by CASA)

- **3-key vault:** typically **2 of 3** keys to authorize (described on CASA landing page).
- **5-key vault:** described on plan pages; multisig FAQ states “five keys protect your funds” and references needing multiple signatures.
- **Enterprise vault continuum:** enterprise page explicitly mentions vaults secured by **3, 5, or 6 keys**, plus a **hot wallet** option.

### Casa Recovery Key (important nuance)

CASA’s multisig FAQ describes a **Casa Recovery Key**:
- Held by CASA
- Can’t move funds **on its own** (i.e., is not sufficient by itself to spend)
- Exists as a failsafe for certain loss scenarios

## B2C (Individuals & families): plans & pricing (monthly-first)

### Standard
- **Price shown:** `$21/mo` (note: “1 month free, then $250 billed annually.”)
- **Positioning:** essential protection for individuals.
- **Vault:** **3-key vault** to secure BTC/ETH/USDT/USDC.
- **Includes (public):** inheritance; guided replacement for lost/stolen keys; email support.
- **Notes (public):** uses your existing hardware device; video support may be available for purchase.

### Premium
- **Price shown:** `$175/mo` (note: “$2,100 billed annually.”)
- **Positioning:** superior protection for individuals/families; suggested for holdings > 1 BTC.
- **Vault:** **5-key vault** to secure BTC/ETH/USDT/USDC.
- **Includes (public):** welcome package (hardware devices + security accessories); 1-on-1 video onboarding/support; shared accounts optional; subaccounts; guided replacement for up to 2 lost/stolen keys.

### Private Client
- **Price shown:** custom.
- **Positioning:** maximum security for high-profile bitcoiners / material wealth / public profile.
- **Vault:** 5-key vault (+ optional 6th key for BTC vaults).
- **Includes (public):** enhanced verification inheritance (U.S. only); bespoke advisory; 24/7 security emergency line; personalized cybersecurity strategies; expanded welcome package (may include YubiKeys, Faraday bags, etc.).
- **Note (public):** includes a consultation with an independent estate planning attorney for certain services (U.S. only) as described on pricing page.

## B2B (Businesses & institutions): plans & positioning

### Business (small/mid-sized businesses)
- **Price shown:** `*$229/mo paid annually`
- **Positioning:** for businesses with holdings up to **$1M** (as stated on page).
- **Vault:** 3-key vaults for BTC treasury protection.
- **Key capabilities (public):**
  - **Team signing** (distribute key management across holders)
  - **Web dashboard** (monitor balances; invite view-only users)
  - **Sovereign recovery** (instructions to recreate setup with open-source software if CASA is unreachable)
  - **Emergency lockdown** (freeze access to keys in the app)
  - Add-ons: onboarding package and onboarding calls; live support calls (add-on)

### Enterprise (institutional)
- **Pricing:** not public (consultation required).
- **Positioning:** “maximum security” for treasury; global availability; “hold bitcoin and stablecoins on your balance sheet without counterparty risk.”
- **Key capabilities (public):**
  - Multisignature vaults; **sovereign recovery**
  - **Enterprise dashboard** (balances, activity, reports; share view-only access with stakeholders/auditors)
  - **Custom team controls and role management** (approve-only vs initiate-and-approve; internal controls language)
  - **Flexible vault types and subaccounts**; **hot wallet** option plus vaults secured by 3/5/6 keys
  - Support: onboarding, hardware package, threat monitoring/check-ins, 24/7 emergency line (as described on page)

## Hardware compatibility (public)

CASA states compatibility with: **Ledger, Trezor, Coldcard, Keystone** (and references mobile device usage; see app download page).

## Buying/selling (disclosure)

CASA site disclosures indicate:
- CASA provides **non-custodial, self-custody** software.
- **CASA does not hold, control, or transmit customer funds.**
- Buy/sell services in the app are provided by **Zero Hash** entities (licensing disclosures apply).

## Problem statements → CASA capabilities (quick map)

This is for writers: start from the problem, then map to what CASA *actually* offers. Keep claims restrained.

| Problem statement | Who | Capability (what CASA offers) | Plans | Must-not-misstate / disclaimer |
|---|---|---|---|---|
| “I’m worried about exchange failure / hacks.” | B2C/B2B | Self-custody vaults reduce custodial/counterparty risk; explain keys vs IOU calmly. | Standard+ / Business+ | Don’t name/shame; no urgent crisis CTA; don’t overpromise outcomes. |
| “I’m worried one device failure wipes me out.” | B2C/B2B | Multi-key redundancy across devices/locations; key replacement guidance. | Standard+ / Business+ | Don’t claim “risk-free”; explain tradeoffs. |
| “I’m scared I’ll lose my keys.” | B2C/B2B | Key replacement guidance; recovery key concept (held by CASA; cannot spend alone). | Standard+ / Business+ | Don’t imply CASA can access funds. |
| “I need an inheritance plan.” | B2C | Inheritance plan; enhanced verification in Private Client (U.S. only). | Standard+ / Private Client | Call out U.S.-only limits where relevant. |
| “We need treasury controls and visibility.” | B2B | Dashboard + view-only access; role-based controls (enterprise). | Business/Enterprise | Don’t claim certifications beyond what’s stated; don’t invent SOC scope. |
| “We need to move faster sometimes.” | B2B | Enterprise: hot wallet vs vault continuum (explicitly described by CASA). | Enterprise | Keep language precise: option exists; don’t imply it’s always recommended. |
| “I’m not technical.” | B2C/B2B | Guided onboarding + support (tiered). | Premium+ / Business/Enterprise | Avoid “white-glove for everyone” claims; match plan promises. |
| “I’m worried about scams / social engineering.” | B2C/B2B | Multi-key design reduces single-point compromise; support guidance; emergency lockdown (B2B). | Varies | Don’t claim it prevents all scams; frame as risk reduction. |

## Disclaimers & must-not-misstate (copy rules)

When content references product or compliance, keep to these:
- “CASA is non-custodial / self-custody.”
- “CASA doesn’t hold customer funds.”
- “Buy/sell is provided through partners (Zero Hash) via the CASA app.”
- Avoid implying CASA can “recover your funds” (they can guide key replacement; they cannot access funds).

## Product checker: common failure modes to catch

- Calling CASA a “custodian” (unless very carefully phrased as non-custodial / collaborative custody).
- Claiming CASA “holds your keys” in a way that implies custody of funds.
- Misstating supported assets or plan pricing (especially Business/Enterprise).
- Confusing **hot wallet** vs **vault** options (hot wallet is explicitly called out on Enterprise page).
- Overclaiming security outcomes (guarantees).
- Using urgent crisis CTAs that feel predatory.

