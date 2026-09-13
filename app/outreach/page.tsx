import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Operator outreach | Boostrom Construction demo",
  robots: { index: false, follow: false },
};

const captures = [
  {
    file: "before-original-desktop.png",
    title: "BEFORE — live original desktop",
    note: "Full-page capture of boostromconstruction.com",
  },
  {
    file: "after-desktop.png",
    title: "AFTER — redesign desktop 1440",
    note: "Full-page 1440px viewport",
  },
  {
    file: "after-mobile.png",
    title: "AFTER — redesign mobile 390",
    note: "Full-page ~390px viewport",
  },
  {
    file: "after-scroll.gif",
    title: "Scrolling GIF",
    note: "Must travel below the hero through multiple sections",
  },
  {
    file: "after-scroll.mp4",
    title: "Scrolling MP4",
    note: "Same scroll path as the GIF",
  },
] as const;

export default function OutreachPage() {
  return (
    <div className="min-h-screen bg-espresso px-4 py-12 text-paper-50 sm:px-6">
      <div className="mx-auto max-w-5xl space-y-12">
        <header className="space-y-3 border-b border-white/10 pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">
            Novenworks operator only · noindex · unlinked
          </p>
          <h1 className="font-display text-3xl font-semibold sm:text-4xl">
            Boostrom Construction — outreach pack
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-paper-100/80">
            Prospect 24/40. Speculative redesign. Do not imply a client relationship.
          </p>
          <Link href="/" className="inline-block text-sm text-paper-100 underline-offset-4 hover:underline">
            View public concept
          </Link>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Fact label="Business" value="Boostrom Construction" />
          <Fact label="Original URL" value={site.originalUrl} href={site.originalUrl} />
          <Fact label="Deployed URL" value={site.deployedUrl} href={site.deployedUrl} />
          <Fact label="Phone" value={site.phoneDisplay} href={`tel:${site.phoneTel}`} />
          <Fact label="Email" value={site.email} href={`mailto:${site.email}`} />
          <Fact label="GitHub" value={site.githubUrl} href={site.githubUrl} />
          <Fact label="License (first-party)" value={`#${site.license}`} href={site.licenseUrl} />
          <Fact label="Area they print" value="Orange County, CA since 2000" />
          <Fact label="Agency" value="None found — Wix.com, footer ©2021" />
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-semibold">Original-site observations</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-paper-100/85">
            <li>
              2021 Wix homepage still leads with wilderness river/cabin stock, while the actual
              kitchen, bath, patio, and bedroom photos sit smaller in a gallery.
            </li>
            <li>
              About page leftover template copy calls them a “leading San Francisco General
              Contractor Company” while the homepage says Orange County.
            </li>
            <li>
              Projects page pairs a stock contemporary pool house and a Sanofi office tower
              (“Municipal Building,” both dated January 25, 2025) as if they were Boostrom jobs.
            </li>
            <li>
              High-ticket breadth is on the page (kitchens, baths, indoor/outdoor, pools, decks,
              commercial) but grouped as four equal Wix cards plus a wall of body copy.
            </li>
            <li>
              Contact is strong and real — joshua@ and 949-500-1851 — sitting on a Dreamstime
              water texture. License #789193 is a footer line, not a trust strip.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-semibold">Redesign improvements</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-paper-100/85">
            <li>
              Hero uses their finished bath photo and the line “Remodel the Home. Rework the Way
              You Live In It.” Primary CTA is Request an Estimate (their free-estimate language).
            </li>
            <li>
              Services grouped around buyer decisions (kitchen, bath, indoor/outdoor, whole-home)
              with the four first-party jobsite photos; pools/decks/commercial stay secondary.
            </li>
            <li>
              Work grid captions only what is visible, including in-progress kitchen and patio —
              no fake luxury labels.
            </li>
            <li>
              Orange County since 2000 and license #789193 sit in a proof strip; CSLB is a lookup
              link, not an invented Active badge.
            </li>
            <li>
              Estimate path is mailto to joshua@boostromconstruction.com plus working
              tel:+19495001851 — no silent fake backend.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-semibold">Talking points</h2>
          <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-paper-100/85">
            <li>
              The company already has the high-ticket mix and the real photos; the 2021 Wix shell
              still presents like a cabin-and-river template.
            </li>
            <li>
              Indoor/outdoor is the truthful differentiator they already write — kitchens and baths
              plus pools, decks, and patio work — and the photos finally show that together.
            </li>
            <li>
              Easy personalization: the public inbox is joshua@, and the live footer still says
              ©2021.
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-semibold">Personalization hooks</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-paper-100/85">
            <li>The finished bath with the backlit mirror is already on their homepage, unused as a hero.</li>
            <li>About-page “San Francisco” leftover vs Orange County homepage — a concrete, non-insulting observation.</li>
            <li>
              Aggregators/filings mention Huntington Beach and Joshua Boostrom; the live site does
              not print those. Use only as a research note, not as a public claim.
            </li>
          </ul>
        </section>

        <section className="space-y-3 rounded-sm border border-rose-400/40 bg-rose-950/20 p-6">
          <h2 className="font-display text-2xl font-semibold text-rose-200">What not to say</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-rose-100/90">
            <li>Do not say the website sucks, that Wix is amateur, or insult a designer/agency (none is credited).</li>
            <li>Do not imply Novenworks was hired or that this is the live Boostrom site.</li>
            <li>Do not claim ROI, lead volume, SEO rankings, or performance wins.</li>
            <li>Do not claim ownership of Boostrom photography or invent a new logo story.</li>
            <li>
              Do not state CSLB “Active,” class B, staff names, Huntington Beach address, review
              counts, or San Francisco — those are unverified, omitted, or leftover template copy.
            </li>
            <li>Do not present the Projects-page stock (Sanofi tower, pool house) as their completed work.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-semibold">Subject lines</h2>
          <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-paper-100/85">
            <li>Joshua — a speculative homepage for Boostrom Construction</li>
            <li>Your bath and patio photos, not the river stock</li>
            <li>Orange County since 2000 — the site can say that more clearly</li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-semibold">Cold email</h2>
          <pre className="whitespace-pre-wrap rounded-sm border border-white/10 bg-black/30 p-5 text-sm leading-relaxed text-paper-100/90">
            {`Hi Joshua,

I was looking at boostromconstruction.com. The kitchen, bath, patio, and bedroom photos are real Orange County work; the homepage still leads with the 2021 Wix river/cabin treatment, and the About page still has leftover “San Francisco” template copy.

Novenworks put together a speculative redesign (not a client project) that puts those jobsite photos first, groups kitchen / bath / indoor-outdoor / whole-home the way a homeowner actually decides, and keeps the estimate path on your published phone and email.

Preview: ${site.deployedUrl}

If it is useful, I am happy to walk through it. If not, no issue — the concept is there either way.

Vince
Novenworks`}
          </pre>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-semibold">Short follow-up</h2>
          <pre className="whitespace-pre-wrap rounded-sm border border-white/10 bg-black/30 p-5 text-sm leading-relaxed text-paper-100/90">
            {`Hi Joshua — looping back on the speculative Boostrom homepage. It uses the bath vanity and patio photos already on your site, with estimate requests still going to ${site.email} / ${site.phoneDisplay}. ${site.deployedUrl} — happy to send the before/after if easier.`}
          </pre>
        </section>

        <section className="space-y-6">
          <h2 className="font-display text-2xl font-semibold">Captures</h2>
          <div className="grid gap-8">
            {captures.map((capture) => (
              <figure key={capture.file} className="space-y-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <figcaption>
                    <p className="font-semibold">{capture.title}</p>
                    <p className="text-sm text-paper-100/70">{capture.note}</p>
                  </figcaption>
                  <a className="text-sm underline" href={`/outreach/${capture.file}`}>
                    {capture.file}
                  </a>
                </div>
                {capture.file.endsWith(".mp4") ? (
                  <video
                    className="w-full rounded-sm border border-white/10"
                    controls
                    src={`/outreach/${capture.file}`}
                  />
                ) : (
                  <Image
                    src={`/outreach/${capture.file}`}
                    alt={capture.title}
                    width={capture.file.includes("mobile") ? 390 : 1440}
                    height={capture.file.includes("mobile") ? 844 : 900}
                    className="h-auto w-full rounded-sm border border-white/10 bg-black/40"
                    unoptimized
                  />
                )}
              </figure>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function Fact({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="rounded-sm border border-white/10 bg-black/20 p-4">
      <p className="text-xs uppercase tracking-[0.14em] text-brass">{label}</p>
      {href ? (
        <a className="mt-2 block break-all text-sm underline-offset-2 hover:underline" href={href}>
          {value}
        </a>
      ) : (
        <p className="mt-2 text-sm">{value}</p>
      )}
    </div>
  );
}
