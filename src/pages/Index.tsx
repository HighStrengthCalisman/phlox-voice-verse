import { Hero } from "@/components/Hero";
import { Agents } from "@/components/Agents";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { HowItWorks } from "@/components/HowItWorks";
import { Plans } from "@/components/Plans";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SpaceBackground } from "@/components/SpaceBackground";

const Index = () => {
  return (
    <main className="min-h-screen relative">
      <SpaceBackground />
      <div className="relative z-10">
        <Hero />
        <Agents />
        <WhyChooseUs />
        <HowItWorks />
        <Plans />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
