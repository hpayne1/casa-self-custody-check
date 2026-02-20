"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Segment } from "@/lib/selfCustodyCheck";
import { scoreSelfCustodyCheck, verifiedLearnMoreLinks } from "@/lib/selfCustodyCheck";

const STORAGE_KEY = "casa_selfCustodyCheck_v1";

type Stored = {
  segment: Segment;
  answers: Record<string, string>;
  completedAt: number;
};

function safeParse(raw: string | null): Stored | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<Stored>;
    if (!parsed.segment || !parsed.answers) return null;
    return parsed as Stored;
  } catch {
    return null;
  }
}

function LeadForm({
  variant,
}: {
  variant: "businessLead" | "individualContact";
}) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-base font-semibold">Thanks.</h3>
        <p className="mt-2 text-sm leading-7 text-white/70">
          In a full version, this is where results could be emailed and routed
          for follow-up.
        </p>
        <p className="mt-3 text-xs text-white/50">
          Demo note: this form doesn&rsquo;t submit anywhere.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-5 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 hover:bg-white/10"
        >
          Submit another
        </button>
      </div>
    );
  }

  const title =
    variant === "businessLead"
      ? "Want a follow-up on custody controls?"
      : "Create an account in Casa";
  const subtitle =
    variant === "businessLead"
      ? "Share a point of contact and context. (Demo form: no data is stored or sent.)"
      : "Put the next steps into practice with a Casa account. (Opens in a new tab.)";

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-white/70">{subtitle}</p>

      {variant === "individualContact" ? (
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://keys.casa/pricing"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 hover:bg-white/90"
          >
            Create an account
          </a>
          <a
            href="https://keys.casa/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 hover:bg-white/10"
          >
            Explore Casa
          </a>
        </div>
      ) : null}

      {variant === "businessLead" ? (
        <form
          className="mt-5 grid gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40"
              aria-label="Work email"
              placeholder="Work email"
              type="email"
              name="email"
              required
            />
            <input
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40"
              aria-label="Company"
              placeholder="Company"
              type="text"
              name="company"
              required
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40"
              aria-label="Role"
              placeholder="Role (optional)"
              type="text"
              name="role"
            />
            <input
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40"
              aria-label="Country or region"
              placeholder="Country / region (optional)"
              type="text"
              name="region"
            />
          </div>

          <textarea
            className="min-h-24 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40"
            aria-label="Context"
            name="context"
            placeholder="Context (optional): custody model, approvals, what changed recently…"
          />

          <button
            type="submit"
            className="mt-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 hover:bg-white/90"
          >
            Email me results + follow-up
          </button>
        </form>
      ) : null}
    </div>
  );
}

export default function ResultsPage() {
  const [stored, setStored] = useState<Stored | null>(null);

  useEffect(() => {
    setStored(safeParse(sessionStorage.getItem(STORAGE_KEY)));
  }, []);

  const scored = useMemo(() => {
    if (!stored) return null;
    return scoreSelfCustodyCheck(stored.segment, stored.answers);
  }, [stored]);

  if (!stored || !scored) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-50">
        <header className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/brand/casa-wordmark-light.svg"
              alt="CASA"
              width={120}
              height={32}
              className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.55)]"
              priority
            />
          </Link>
        </header>
        <main className="mx-auto w-full max-w-4xl px-6 pb-16 pt-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h1 className="text-xl font-semibold">No results yet.</h1>
            <p className="mt-2 text-sm leading-7 text-white/70">
              Start the self-custody check to generate a results summary.
            </p>
            <Link
              href="/self-custody-check"
              className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 hover:bg-white/90"
            >
              Start the check
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const scorePct = Math.round(scored.score01 * 100);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <header className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/casa-wordmark-light.svg"
            alt="CASA"
            width={120}
            height={32}
            className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.55)]"
            priority
          />
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/self-custody-check"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10"
          >
            Run again
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl px-6 pb-16 pt-4">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="text-xs uppercase tracking-wide text-white/60">
                {stored.segment === "business" ? "Business results" : "Individual results"}
              </div>
              <h1 className="mt-2 text-2xl font-semibold tracking-tight">
                {scored.band.label}
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-white/70">
                {scored.band.tone}
              </p>
            </div>
            <div className="shrink-0 rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-center">
              <div className="text-xs text-white/60">Score</div>
              <div className="mt-1 text-3xl font-semibold">{scorePct}%</div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {scored.nextSteps.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-white/10 bg-black/30 p-5"
              >
                <div className="text-sm font-semibold">{s.title}</div>
                <p className="mt-2 text-sm leading-7 text-white/70">
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-5">
            <h2 className="text-sm font-semibold">Learn more (verified)</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              {verifiedLearnMoreLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-white/20 underline-offset-4 hover:decoration-white/50"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 text-xs text-white/50">
            Reminder: security is a practice and tradeoffs exist. This assessment
            is informational and does not imply guarantees.
          </p>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          {stored.segment === "business" ? (
            <LeadForm variant="businessLead" />
          ) : (
            <LeadForm variant="individualContact" />
          )}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-base font-semibold">A calm close</h3>
            <p className="mt-2 text-sm leading-7 text-white/70">
              Durable self-custody tends to come from calm habits: start small,
              test recovery, and reduce single points of failure over time.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/self-custody-check"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 hover:bg-white/90"
              >
                Run the check again
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 hover:bg-white/10"
              >
                Back to landing
              </Link>
            </div>
          </div>
        </section>

        <footer className="mt-12 border-t border-white/10 pt-6 text-xs text-white/50">
          CASA is non-custodial self-custody software and support. CASA does not
          hold, control, or transmit customer funds.
        </footer>
      </main>
    </div>
  );
}

