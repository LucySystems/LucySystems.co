"use client";

import { useEffect, useState } from "react";

const LINKS = [
  ["Body", "#body"],
  ["Mind", "#mind"],
  ["Money", "#money"],
  ["About", "#about"],
] as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-black/85 backdrop-blur-md border-b border-brand-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="font-serif text-xl text-brand-white tracking-tight">
          LucySystems
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm text-brand-white/50 hover:text-brand-white transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-px bg-brand-white origin-center transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-px bg-brand-white transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-brand-white origin-center transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-72" : "max-h-0"} bg-brand-black/95 backdrop-blur-md border-t border-brand-border`}>
        <div className="px-6 py-5 flex flex-col gap-5">
          {LINKS.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={closeMenu}
              className="text-sm text-brand-white/60 hover:text-brand-white transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
