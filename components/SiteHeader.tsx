"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-espresso/95 backdrop-blur">
      <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex min-h-11 items-center gap-3">
          <Image
            src="/images/logo-white.png"
            alt="Boostrom Construction"
            width={220}
            height={76}
            className="h-10 w-auto sm:h-12"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-paper-100/85 hover:text-paper-50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex min-h-11 items-center gap-2 rounded-sm bg-clay-500 px-3 py-2 text-sm font-semibold text-white hover:bg-clay-600"
          >
            <Phone className="h-4 w-4" aria-hidden />
            <span className="hidden sm:inline">{site.phoneDisplay}</span>
            <span className="sm:hidden">Call</span>
          </a>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-white/20 text-paper-50 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" className="border-t border-white/10 bg-espresso px-4 py-3 lg:hidden">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block min-h-11 py-2 text-base font-medium text-paper-50"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
