import Nav from "@/components/Nav";

/* ── Shared helpers ────────────────────────────────────────────────────────── */
function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-7xl mx-auto px-6 ${className}`}>{children}</div>
  );
}

function SectionLabel({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) {
  return (
    <p
      className={`text-xs font-semibold tracking-[0.15em] uppercase mb-6 ${color}`}
    >
      {children}
    </p>
  );
}

/* ── Page ──────────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <main>
      <Nav />

      {/* ── 1. Hero ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen bg-brand-black hero-grid flex flex-col justify-center items-center text-center overflow-hidden">
        <Container className="flex flex-col items-center py-32">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-brand-white leading-[1.05] tracking-tight mb-6">
            Building systems for deliberate living.
          </h1>
          <p className="font-sans text-base md:text-lg text-brand-subtle max-w-md leading-relaxed mb-12">
            A personal AI system for people who want to live deliberately.
          </p>

          {/* Domain pills */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border border-body-accent text-body-accent">
              Body
            </span>
            <span className="text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border border-mind-accent text-mind-accent">
              Mind
            </span>
            <span className="text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border border-money-accent text-money-accent">
              Money
            </span>
          </div>
        </Container>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-indicator">
          <span className="text-xs text-brand-subtle tracking-widest uppercase">
            Scroll
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="text-brand-subtle"
          >
            <path
              d="M8 3v10M3 9l5 5 5-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* ── 2. Philosophy ────────────────────────────────────────────────── */}
      <section className="bg-brand-white py-28 md:py-36">
        <Container>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-text mb-16 tracking-tight">
            The architecture.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x md:divide-brand-border">
            <div className="py-10 md:pr-8">
              <hr className="border-brand-border mb-8" />
              <h3 className="font-serif text-xl text-brand-text mb-4 leading-snug">
                Presence over productivity.
              </h3>
              <p className="font-sans text-sm text-brand-subtle leading-relaxed">
                Coaching that reflects, not coaching that nags.
              </p>
            </div>
            <div className="py-10 md:px-8">
              <hr className="border-brand-border mb-8" />
              <h3 className="font-serif text-xl text-brand-text mb-4 leading-snug">
                Memory that compounds.
              </h3>
              <p className="font-sans text-sm text-brand-subtle leading-relaxed">
                Multi-day continuity, trend awareness, pattern detection.
              </p>
            </div>
            <div className="py-10 md:pl-8">
              <hr className="border-brand-border mb-8" />
              <h3 className="font-serif text-xl text-brand-text mb-4 leading-snug">
                Boundaries that hold.
              </h3>
              <p className="font-sans text-sm text-brand-subtle leading-relaxed">
                Clean separation between observation, normalization, and
                evaluation.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 3. Three Domains ─────────────────────────────────────────────── */}
      <section id="body" className="bg-brand-cream py-28 md:py-36">
        <Container>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-text mb-6 tracking-tight">
            Three domains. One system.
          </h2>
          <p className="font-sans text-base text-brand-subtle max-w-2xl mb-16 leading-relaxed">
            A person isn&rsquo;t a stack of vertical apps. The system that supports
            them shouldn&rsquo;t be either.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Body */}
            <div className="border-t-2 border-body-accent pt-8">
              <h3 className="font-sans text-xs font-semibold tracking-widest uppercase mb-4 text-body-accent">
                Body
              </h3>
              <p className="font-sans text-sm text-brand-subtle leading-relaxed">
                Nutrition, training, sleep, recovery. Health signals over time,
                coached with context.
              </p>
            </div>
            {/* Mind */}
            <div className="border-t-2 border-mind-accent pt-8">
              <h3 className="font-sans text-xs font-semibold tracking-widest uppercase mb-4 text-mind-accent">
                Mind
              </h3>
              <p className="font-sans text-sm text-brand-subtle leading-relaxed">
                Reflection grounded in philosophy, not gamification. Awareness,
                and the willingness to act on it.
              </p>
            </div>
            {/* Money */}
            <div className="border-t-2 border-money-accent pt-8">
              <h3 className="font-sans text-xs font-semibold tracking-widest uppercase mb-4 text-money-accent">
                Money
              </h3>
              <p className="font-sans text-sm text-brand-subtle leading-relaxed">
                Markets, budgeting, net worth, portfolio. Judgment lives in the
                strategy engine. The human stays in the chair.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 4. VitalPort ─────────────────────────────────────────────────── */}
      <section id="vitalport" className="bg-brand-dark py-28 md:py-36">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: content */}
            <div>
              <SectionLabel color="text-body-accent">
                Body · Live Now
              </SectionLabel>

              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-white mb-5 tracking-tight">
                VitalPort
              </h2>
              <p className="font-sans text-base md:text-lg text-brand-subtle mb-10 leading-relaxed">
                Your health data, actually useful.
              </p>

              <ul className="space-y-5 mb-12">
                <li className="flex gap-4">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-body-accent" />
                  <p className="font-sans text-sm text-brand-subtle leading-relaxed">
                    <span className="text-brand-white font-medium">
                      Workout type fidelity
                    </span>{" "}
                    — strength, HIIT, walks, runs as distinct entries, not
                    collapsed into steps.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-body-accent" />
                  <p className="font-sans text-sm text-brand-subtle leading-relaxed">
                    <span className="text-brand-white font-medium">
                      Reliable background sync
                    </span>{" "}
                    — event-driven via HealthKit observer queries, not polling.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-body-accent" />
                  <p className="font-sans text-sm text-brand-subtle leading-relaxed">
                    <span className="text-brand-white font-medium">
                      Private by design
                    </span>{" "}
                    — on-device processing, no account, no tracking, free
                    forever.
                  </p>
                </li>
              </ul>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://apps.apple.com/app/vitalport"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-white text-brand-text text-sm font-semibold hover:bg-brand-cream transition-colors duration-200"
                >
                  <AppleIcon />
                  Download on App Store
                </a>
                <a
                  href="https://vitalport.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-6 py-3 rounded-lg border border-brand-border text-brand-white/80 text-sm font-semibold hover:border-brand-subtle hover:text-brand-white transition-colors duration-200"
                >
                  View vitalport.app ↗
                </a>
              </div>
            </div>

            {/* Right: screenshot placeholders
                Place app screenshots in /public/vitalport/ when ready.
                Replace these divs with <Image> tags pointing to those files. */}
            <div className="relative h-[480px] hidden lg:block">
              <div className="absolute right-16 top-8 w-44 h-80 rounded-2xl bg-brand-muted border border-brand-border rotate-6 shadow-2xl" />
              <div className="absolute right-8 top-4 w-44 h-80 rounded-2xl bg-brand-muted border border-brand-border rotate-2 shadow-2xl" />
              <div className="absolute right-0 top-0 w-44 h-80 rounded-2xl bg-brand-muted border border-body-accent/20 shadow-2xl flex items-center justify-center">
                <span className="text-xs text-brand-subtle/50 tracking-widest uppercase rotate-90 select-none">
                  Screenshot
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 5. Vespro ────────────────────────────────────────────────────── */}
      <section id="mind" className="bg-brand-white py-28 md:py-36">
        <Container className="max-w-3xl">
          <SectionLabel color="text-mind-accent">
            Mind · In Development
          </SectionLabel>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-text mb-5 tracking-tight">
            Vespro.
          </h2>
          <p className="font-sans text-base md:text-lg text-brand-subtle mb-10 leading-relaxed">
            A reflection engine grounded in philosophy, not gamification.
          </p>

          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-mind-accent/40 text-mind-accent text-xs font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-mind-accent animate-pulse" />
              Beta · Coming Soon
            </span>
          </div>

          <p className="font-sans text-sm text-brand-subtle">
            Follow progress at{" "}
            <span className="text-brand-text font-medium">LucySystems</span>.
          </p>
        </Container>
      </section>

      {/* ── 6. Money placeholder ─────────────────────────────────────────── */}
      <section
        id="money"
        className="bg-brand-cream py-20 md:py-28 border-t border-brand-border/30"
      >
        <Container className="max-w-3xl">
          <SectionLabel color="text-money-accent">
            Money · On the Horizon
          </SectionLabel>
          <p className="font-sans text-base text-brand-subtle leading-relaxed max-w-xl">
            The third domain is in design. Markets, budgeting, net worth, and
            portfolio — built to the same standard.
          </p>
        </Container>
      </section>

      {/* ── 7. About / Footer ────────────────────────────────────────────── */}
      <footer className="bg-brand-black pt-24 pb-12">
        <Container>
          <div className="max-w-2xl mb-16">
            <p className="font-sans text-sm text-brand-subtle leading-relaxed">
              LucySystems is led by{" "}
              <span className="text-brand-white font-medium">Jim Martin</span>.
              Building in the open. Reach out if you want to build, contribute,
              or compare notes.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 mb-12">
            <a
              href="https://www.linkedin.com/in/jim-martin-28aba213"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-brand-subtle hover:text-brand-white transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="mailto:artful.shrew@gmail.com"
              className="text-sm text-brand-subtle hover:text-brand-white transition-colors duration-200"
            >
              Email
            </a>
            <a
              href="https://github.com/LucySystems"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-brand-subtle hover:text-brand-white transition-colors duration-200"
            >
              GitHub
            </a>
          </div>

          <hr className="border-brand-border mb-8" />

          <p className="font-sans text-xs text-brand-subtle">
            © 2026 LucySystems · lucysystems.co
          </p>
        </Container>
      </footer>
    </main>
  );
}

/* ── Apple icon ─────────────────────────────────────────────────────────────── */
function AppleIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 814 1000"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.2-157.2-112.5C179.3 588 113.7 432.3 113.7 283.8c0-23.7 2.6-47.3 11-70.1 28.7-74.3 95.9-120.6 170.4-120.6 56.2 0 104.1 38.9 135.5 38.9 30.1 0 87.5-41.2 153.8-41.2 21.5 0 110.2 1.9 170.4 77.5zm-219.4-166.1c24.4-29.1 41.9-69.1 41.9-109.1 0-5.8-.6-11.6-1.3-17.3-39.5 1.3-86.8 26.5-113.5 57.3-21.5 24.4-40.8 62.2-40.8 102.8 0 6.5.7 13 1.3 15.6 2.6.6 6.5.7 10.4.7 35.6 0 79.2-24.4 101.9-49.9l.1-.1z" />
    </svg>
  );
}
