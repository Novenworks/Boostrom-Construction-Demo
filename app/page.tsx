import { Capabilities } from "@/components/Capabilities";
import { Differentiation } from "@/components/Differentiation";
import { FinalCta } from "@/components/FinalCta";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { ProofStrip } from "@/components/ProofStrip";
import { Reputation } from "@/components/Reputation";
import { ServiceArea } from "@/components/ServiceArea";
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
        <Capabilities />
        <Reputation />
        <ServiceArea />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
