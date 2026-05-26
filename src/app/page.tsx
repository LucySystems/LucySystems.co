import Nav from "@/components/Nav";

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

/* ─────────────────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <main className="bg-brand-black">
      <Nav />

      {/* ── 1. Hero ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen hero-grid hero-glow flex flex-col justify-center items-center text-center overflow-hidden">
        <Container className="flex flex-col items-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-brand-white leading-[1.06] tracking-tight mb-4">
            Building systems for<br className="hidden sm:block" /> deliberate living.
          </h1>

          <p className="font-sans text-sm md:text-base text-brand-subtle tracking-wide mb-8">
            Body. Mind. Money. One intelligence layer.
          </p>

        </Container>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="text-brand-subtle/40">
            <path d="M8 3v10M3 9l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* ── 2. Domain Cards ──────────────────────────────────────────────── */}
      <section className="border-t border-brand-border">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-brand-border">

          <a href="#body" className="group block p-10 md:p-12 lg:p-16 hover:bg-brand-dark/60 transition-colors duration-300">
            <div className="w-5 h-px bg-body-accent mb-10 transition-all duration-400 group-hover:w-10" />
            <h2 className="font-serif text-3xl md:text-4xl text-brand-white mb-5 tracking-tight">
              Body
            </h2>
            <p className="font-sans text-sm text-brand-subtle leading-relaxed mb-8">
              Health data ownership and physiological awareness.
            </p>
            <span className="text-xs text-brand-subtle/0 group-hover:text-brand-subtle/50 transition-all duration-300 tracking-widest uppercase">
              Explore →
            </span>
          </a>

          <a href="#mind" className="group block p-10 md:p-12 lg:p-16 hover:bg-brand-dark/60 transition-colors duration-300">
            <div className="w-5 h-px bg-mind-accent mb-10 transition-all duration-400 group-hover:w-10" />
            <h2 className="font-serif text-3xl md:text-4xl text-brand-white mb-5 tracking-tight">
              Mind
            </h2>
            <p className="font-sans text-sm text-brand-subtle leading-relaxed mb-8">
              Attention, reflection, cognition, and intentionality.
            </p>
            <span className="text-xs text-brand-subtle/0 group-hover:text-brand-subtle/50 transition-all duration-300 tracking-widest uppercase">
              Explore →
            </span>
          </a>

          <a href="#money" className="group block p-10 md:p-12 lg:p-16 hover:bg-brand-dark/60 transition-colors duration-300">
            <div className="w-5 h-px bg-money-accent mb-10 transition-all duration-400 group-hover:w-10" />
            <h2 className="font-serif text-3xl md:text-4xl text-brand-white mb-5 tracking-tight">
              Money
            </h2>
            <p className="font-sans text-sm text-brand-subtle leading-relaxed mb-8">
              Financial clarity, leverage, and sovereignty.
            </p>
            <span className="text-xs text-brand-subtle/0 group-hover:text-brand-subtle/50 transition-all duration-300 tracking-widest uppercase">
              Explore →
            </span>
          </a>

        </div>
      </section>

      {/* ── 3. Philosophy ────────────────────────────────────────────────── */}
      <section className="border-t border-brand-border py-28 md:py-40">
        <Container className="max-w-3xl">
          <p className="font-serif text-2xl md:text-3xl text-brand-white/80 leading-[1.4] mb-8">
            Modern life fragments attention across disconnected systems.
          </p>
          <p className="font-sans text-sm text-brand-subtle leading-relaxed max-w-xl">
            LucySystems exists to restore coherence across health, thought,
            and resources, through architecture that remembers, reflects, and
            stays out of the way.
          </p>
        </Container>
      </section>

      {/* ── 4. Products ──────────────────────────────────────────────────── */}
      <section className="border-t border-brand-border py-28 md:py-40">
        <Container>
          <p className="font-sans text-xs text-brand-subtle tracking-[0.15em] uppercase mb-16">
            Products
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-border">

            {/* VitalPort */}
            <div id="body" className="bg-brand-black p-10 flex flex-col">
              <div className="flex items-center justify-between mb-10">
                <span className="text-xs text-body-accent tracking-widest uppercase">Body</span>
                <span className="text-xs text-brand-subtle/50 tracking-widest uppercase">Live</span>
              </div>
              <h3 className="font-serif text-2xl text-brand-white mb-4 tracking-tight">
                VitalPort
              </h3>
              <p className="font-sans text-sm text-brand-subtle leading-relaxed mb-10 flex-1">
                Health data that surfaces patterns instead of just logging them.
                On-device. No account. No tracking.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://apps.apple.com/app/vitalport"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-white/70 hover:text-brand-white transition-colors duration-200 tracking-wide"
                >
                  App Store ↗
                </a>
                <a
                  href="https://vitalport.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-subtle/50 hover:text-brand-subtle transition-colors duration-200 tracking-wide"
                >
                  vitalport.app ↗
                </a>
              </div>
            </div>

            {/* Vespro */}
            <div id="mind" className="bg-brand-black p-10 flex flex-col">
              <div className="flex items-center justify-between mb-10">
                <span className="text-xs text-mind-accent tracking-widest uppercase">Mind</span>
                <span className="text-xs text-brand-subtle/50 tracking-widest uppercase">In development</span>
              </div>
              <h3 className="font-serif text-2xl text-brand-white mb-4 tracking-tight">
                Vespro
              </h3>
              <p className="font-sans text-sm text-brand-subtle leading-relaxed mb-10 flex-1">
                A reflection engine grounded in philosophy, not gamification.
                Awareness, and the willingness to act on it.
              </p>
              <span className="text-xs text-brand-subtle/30 tracking-widest uppercase">
                Beta · Coming Soon
              </span>
            </div>

            {/* Money */}
            <div id="money" className="bg-brand-black p-10 flex flex-col">
              <div className="flex items-center justify-between mb-10">
                <span className="text-xs text-money-accent tracking-widest uppercase">Money</span>
                <span className="text-xs text-brand-subtle/50 tracking-widest uppercase">In design</span>
              </div>
              <h3 className="font-serif text-2xl text-brand-white/20 mb-4 tracking-tight">
                ···
              </h3>
              <p className="font-sans text-sm text-brand-subtle leading-relaxed flex-1">
                Markets, budgeting, net worth, portfolio. Judgment lives in the
                strategy engine. The human stays in the chair.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* ── 5. About / Footer ────────────────────────────────────────────── */}
      <footer id="about" className="border-t border-brand-border py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            <div>
              <p className="font-sans text-sm text-brand-subtle leading-relaxed max-w-sm">
                LucySystems is led by{" "}
                <span className="text-brand-white/80">Jim Martin</span>.
                Building in the open. Reach out if you want to build,
                contribute, or compare notes.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <a
                href="https://www.linkedin.com/in/jim-martin-28aba213"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-subtle/50 hover:text-brand-white transition-colors duration-200"
              >
                LinkedIn ↗
              </a>
              <a
                href="mailto:artful.shrew@gmail.com"
                className="text-sm text-brand-subtle/50 hover:text-brand-white transition-colors duration-200"
              >
                Email ↗
              </a>
              <a
                href="https://github.com/LucySystems"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-subtle/50 hover:text-brand-white transition-colors duration-200"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-brand-border pt-8">
            <p className="font-sans text-xs text-brand-subtle/30">
              © 2026 LucySystems · lucysystems.co
            </p>
            <p className="font-serif text-xs text-brand-subtle/20 italic">
              Deliberate by design.
            </p>
          </div>
        </Container>
      </footer>
    </main>
  );
}
