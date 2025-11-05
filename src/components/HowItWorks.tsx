import { Phone, Brain, MessageCircle, Mic, FileCheck, Upload } from "lucide-react";
import { SpotlightCards } from "./SpotlightCards";

const steps = [
  {
    icon: Phone,
    title: "Customer Call",
    description: "Your customer initiates or receives a call from your AI agent.",
  },
  {
    icon: Brain,
    title: "AI Understands Intent",
    description: "Advanced NLP processes speech and understands context instantly.",
  },
  {
    icon: MessageCircle,
    title: "LLM Response",
    description: "GPT, Claude, or Gemini generates intelligent, contextual responses.",
  },
  {
    icon: Mic,
    title: "Voice Output",
    description: "Natural-sounding voice delivers the response in real-time.",
  },
  {
    icon: FileCheck,
    title: "Call Recorded",
    description: "Complete transcript and audio saved for quality assurance.",
  },
  {
    icon: Upload,
    title: "Data Updated",
    description: "Google Sheets and billing systems automatically updated.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text">
            How Our Voice Agents Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-bold">
            A seamless flow from call to data update in seconds.
          </p>
        </div>

        <SpotlightCards cards={steps} showExploreButton={false} />
      </div>
    </section>
  );
};
