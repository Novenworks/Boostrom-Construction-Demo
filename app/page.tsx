import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import WorkSection from "@/components/WorkSection";
import ServicesSection from "@/components/ServicesSection";
import DifferenceSection from "@/components/DifferenceSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import AreaSection from "@/components/AreaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <WorkSection />
        <ServicesSection />
        <DifferenceSection />
        <ProcessSection />
        <AboutSection />
        <AreaSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
