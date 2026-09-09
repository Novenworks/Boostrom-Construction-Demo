"use client";

import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 text-cream backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#top" className="flex items-center">
          <img
            src="/images/logo-white.png"
            alt="Boostrom Construction"
            className="h-10 w-auto md:h-12"
          />
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-sand md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:949-500-1851"
            className="inline-flex items-center gap-2 text-sm text-sand hover:text-white"
          >
            <Phone className="h-4 w-4" />
            949-500-1851
          </a>
          <a
            href="#contact"
            className="rounded bg-copper px-4 py-2 text-sm font-semibold text-white hover:bg-copperDark"
          >
            Request a Free Estimate
          </a>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded border border-white/20 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-base">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-1 text-sand"
              >
                {l.label}
              </a>
            ))}
            <a href="tel:949-500-1851" className="py-1 font-medium text-white">
              Call 949-500-1851
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex justify-center rounded bg-copper px-4 py-3 font-semibold text-white"
            >
              Request a Free Estimate
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
