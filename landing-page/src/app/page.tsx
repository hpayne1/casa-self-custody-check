import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(124,58,237,0.24),_rgba(0,0,0,0)_58%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-60 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:18px_18px]" />

      <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-4">
          <Image
            src="/brand/casa-wordmark-light.svg"
            alt="CASA"
            width={140}
            height={40}
            className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.55)]"
            priority
          />
          <span className="hidden rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 md:inline">
            Mock created by Houston Morgan for take home
          </span>
        </div>
        <Link
          href="/self-custody-check"
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10"
        >
          Start the check
        </Link>
      </header>

      <main className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <section className="space-y-6">
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              A 10‑minute self-custody check for individuals and businesses.
            </h1>
            <p className="max-w-xl text-pretty text-lg leading-8 text-white/75">
              Answer a short set of questions and get a practical next-step plan
              to reduce single points of failure—without urgency, blame, or
              jargon.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/self-custody-check"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 hover:bg-white/90"
              >
                Start the check
              </Link>
              <a
                href="https://blog.casa.io/exchanges-vs-self-custody-risks/"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10"
                target="_blank"
                rel="noreferrer"
              >
                Read: exchanges vs self-custody
              </a>
            </div>

            <div className="grid gap-3 pt-2 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-white/60">Time</div>
                <div className="mt-1 text-sm font-medium">~10 minutes</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-white/60">Paths</div>
                <div className="mt-1 text-sm font-medium">Individual or business</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-white/60">Output</div>
                <div className="mt-1 text-sm font-medium">3 next steps + links</div>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30">
              <div className="relative p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-wide text-white/60">
                      10-minute self-custody check
                    </div>
                    <div className="mt-2 text-lg font-semibold tracking-tight">
                      What you&rsquo;ll get
                    </div>
                    <p className="mt-1 text-sm text-white/70">
                      A practical snapshot of exposure, recovery readiness, and
                      internal controls—with next steps tailored to individuals
                      or business teams.
                    </p>
                  </div>
                  <div className="hidden shrink-0 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 sm:block">
                    Preview
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-xs text-white/60">Progress</div>
                    <div className="text-xs text-white/60">3 / 14</div>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-2 w-[22%] rounded-full bg-violet-300" />
                  </div>
                  <div className="mt-4 text-sm font-semibold">
                    Do you separate “spend” funds from long‑term holdings?
                  </div>
                  <div className="mt-3 grid gap-2">
                    <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/80">
                      Yes
                    </div>
                    <div className="rounded-2xl border border-violet-300/50 bg-white/10 px-4 py-3 text-sm text-white/90">
                      Partially / not consistently
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/80">
                      Not yet
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <div className="text-xs uppercase tracking-wide text-white/60">
                  Individuals
                </div>
                <ul className="mt-2 space-y-2 text-sm text-white/75">
                  <li>Spend vs long-term separation</li>
                  <li>Backups + recovery practice</li>
                  <li>Scam hygiene after headlines</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <div className="text-xs uppercase tracking-wide text-white/60">
                  Businesses
                </div>
                <ul className="mt-2 space-y-2 text-sm text-white/75">
                  <li>Approvals and separation of duties</li>
                  <li>Auditability and signing policy</li>
                  <li>Recovery drills + incident readiness</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <section className="mt-14">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-xl font-semibold tracking-tight">How it works</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <div className="text-xs text-white/60">Step 1</div>
                <div className="mt-1 text-sm font-semibold">Choose your path</div>
                <p className="mt-2 text-sm leading-7 text-white/70">
                  Individual or business—so the language and questions fit.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <div className="text-xs text-white/60">Step 2</div>
                <div className="mt-1 text-sm font-semibold">Answer ~10 minutes</div>
                <p className="mt-2 text-sm leading-7 text-white/70">
                  A focused set of questions across exposure, recovery, and
                  operations.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <div className="text-xs text-white/60">Step 3</div>
                <div className="mt-1 text-sm font-semibold">Get next steps</div>
                <p className="mt-2 text-sm leading-7 text-white/70">
                  A results band + three practical actions to tighten first.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <div className="text-xs text-white/60">Step 4</div>
                <div className="mt-1 text-sm font-semibold">Optional follow-up</div>
                <p className="mt-2 text-sm leading-7 text-white/70">
                  If you want, share contact details for a follow-up.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-white/10 bg-black/30 p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">
                Ready to run the check?
              </h2>
              <p className="mt-2 text-sm leading-7 text-white/70">
                If you&rsquo;re here after exchange headlines: protect yourself
                from scams first. Custody decisions can come after facts settle.
              </p>
            </div>
            <Link
              href="/self-custody-check"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 hover:bg-white/90"
            >
              Start the check
            </Link>
          </div>
        </section>

        <footer className="mt-16 border-t border-white/10 pt-6 text-xs text-white/50">
          CASA is non-custodial self-custody software and support. CASA does not
          hold, control, or transmit customer funds.
        </footer>
      </main>
    </div>
  );
}
