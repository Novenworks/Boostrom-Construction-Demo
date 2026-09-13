import { FinalCta } from "@/components/FinalCta";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request an Estimate | Boostrom Construction",
  description: `Call ${site.phoneDisplay} or email ${site.email} for an Orange County remodeling estimate.`,
};

export default function ContactPage() {
  return (
    <div id="top">
      <SiteHeader />
      <main>
        <div className="mx-auto max-w-page px-4 py-12 sm:px-6">
          <p className="section-label">Contact</p>
          <h1 className="mt-3 font-display text-4xl font-semibold">Request an estimate</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-700">
            Phone and email below are Boostrom&apos;s published contacts. The form opens a message
            to {site.email}.
          </p>
        </div>
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
