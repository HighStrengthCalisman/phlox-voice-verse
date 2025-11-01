import { Hero } from "@/components/Hero";
import { Agents } from "@/components/Agents";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { HowItWorks } from "@/components/HowItWorks";
import { Plans } from "@/components/Plans";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Agents />
      <WhyChooseUs />
      <HowItWorks />
      <Plans />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
