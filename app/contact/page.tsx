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
        <FinalCta asPage />
      </main>
      <SiteFooter />
    </div>
  );
}
