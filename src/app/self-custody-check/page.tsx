"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { Segment } from "@/lib/selfCustodyCheck";
import { businessQuestions, individualQuestions } from "@/lib/selfCustodyCheck";

const STORAGE_KEY = "casa_selfCustodyCheck_v1";

function saveProgress(segment: Segment, answers: Record<string, string>) {
  sessionStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ segment, answers, completedAt: Date.now() }),
  );
}

export default function SelfCustodyCheckPage() {
  const router = useRouter();
  const [segment, setSegment] = useState<Segment | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [idx, setIdx] = useState(0);

  const questions = useMemo(() => {
    if (segment === "business") return businessQuestions;
    if (segment === "individual") return individualQuestions;
    return [];
  }, [segment]);

  const current = questions[idx];
  const selected = current ? answers[current.id] : undefined;
  const progressPct =
    questions.length > 0 ? Math.round(((idx + 1) / questions.length) * 100) : 0;

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
          <span className="hidden rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 md:inline">
            self-custody check
          </span>
        </Link>
        <Link
          href="/"
          className="text-sm text-white/70 hover:text-white/90"
        >
          Back
        </Link>
      </header>

      <main className="mx-auto w-full max-w-4xl px-6 pb-16 pt-4">
        {!segment ? (
          <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h1 className="text-2xl font-semibold tracking-tight">
              Who is this for?
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-white/75">
              This check has two paths: one for individuals managing personal
              self-custody, and one for businesses thinking in internal-controls
              terms (approvals, roles, auditability). Both aim for calm next
              steps—not urgency.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <button
                type="button"
                onClick={() => setSegment("individual")}
                className="rounded-2xl border border-white/10 bg-black/30 p-6 text-left hover:bg-black/40"
              >
                <div className="text-sm font-medium">I&rsquo;m an individual</div>
                <div className="mt-2 text-xs leading-6 text-white/70">
                  Personal holdings, recovery, and safe habits.
                </div>
              </button>
              <button
                type="button"
                onClick={() => setSegment("business")}
                className="rounded-2xl border border-white/10 bg-black/30 p-6 text-left hover:bg-black/40"
              >
                <div className="text-sm font-medium">I&rsquo;m a business</div>
                <div className="mt-2 text-xs leading-6 text-white/70">
                  Treasury custody controls, approvals, and incident readiness.
                </div>
              </button>
            </div>
            <p className="mt-6 text-xs text-white/55">
              Privacy note: results are generated in your browser. Nothing is
              stored or sent unless you choose to share contact info at the end.
            </p>
          </section>
        ) : (
          <section className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between gap-6">
                <div>
                  <div className="text-xs uppercase tracking-wide text-white/60">
                    {segment === "business" ? "Business path" : "Individual path"}
                  </div>
                  <h1 className="mt-2 text-xl font-semibold tracking-tight">
                    {current?.prompt ?? "Self-custody check"}
                  </h1>
                  {current?.helperText ? (
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-white/70">
                      {current.helperText}
                    </p>
                  ) : null}
                </div>
                <div className="hidden shrink-0 text-right md:block">
                  <div className="text-xs text-white/60">Progress</div>
                  <div className="mt-1 text-sm font-medium">
                    {idx + 1}/{questions.length}
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-2 rounded-full bg-violet-300"
                    style={{ width: `${progressPct}%` }}
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-2 text-xs text-white/55">
                  About {questions.length} questions (~10 minutes)
                </div>
              </div>
            </div>

            {current ? (
              <form className="rounded-3xl border border-white/10 bg-black/30 p-6">
                <fieldset>
                  <legend className="sr-only">{current.prompt}</legend>
                  <div className="grid gap-3">
                    {current.options.map((o) => (
                      <label
                        key={o.value}
                        className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition ${
                          selected === o.value
                            ? "border-violet-300/60 bg-white/10"
                            : "border-white/10 bg-white/0 hover:bg-white/5"
                        }`}
                      >
                        <input
                          type="radio"
                          name={current.id}
                          value={o.value}
                          checked={selected === o.value}
                          onChange={() =>
                            setAnswers((prev) => ({ ...prev, [current.id]: o.value }))
                          }
                          className="mt-1 h-4 w-4 accent-violet-300"
                        />
                        <span className="text-sm text-white/85">{o.label}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      if (idx === 0) {
                        setSegment(null);
                        setAnswers({});
                        setIdx(0);
                        return;
                      }
                      setIdx((v) => Math.max(0, v - 1));
                    }}
                    className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 hover:bg-white/10"
                  >
                    Back
                  </button>

                  <button
                    type="button"
                    disabled={!selected}
                    onClick={() => {
                      const nextIdx = idx + 1;
                      if (nextIdx < questions.length) {
                        setIdx(nextIdx);
                        return;
                      }
                      if (!segment) return;
                      saveProgress(segment, answers);
                      router.push("/results");
                    }}
                    className="rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {idx + 1 < questions.length ? "Next" : "See results"}
                  </button>
                </div>
              </form>
            ) : null}
          </section>
        )}
      </main>
    </div>
  );
}

