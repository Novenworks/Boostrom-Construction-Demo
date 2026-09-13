import { Company } from "@/components/Company";
import { Differentiation } from "@/components/Differentiation";
import { FinalCta } from "@/components/FinalCta";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { ProofStrip } from "@/components/ProofStrip";
import { Services } from "@/components/Services";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Work } from "@/components/Work";

export default function HomePage() {
  return (
    <div id="top">
      <SiteHeader />
      <main>
        <Hero />
        <ProofStrip />
        <Services />
        <Work />
        <Differentiation />
        <Process />
        <Company />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
