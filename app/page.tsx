import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ScrollShowcase from "@/components/ScrollShowcase";
import StatsSection from "@/components/StatsSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import TechStack from "@/components/TechStack";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <ScrollShowcase />
      <StatsSection />
      <ProcessTimeline />
      <TechStack />
      <Portfolio />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
