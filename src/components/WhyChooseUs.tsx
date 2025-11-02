import { Clock, Globe, Code, Cpu, FileText, Database, Workflow } from "lucide-react";
import { SpotlightCards } from "./SpotlightCards";

const features = [
  {
    icon: Clock,
    title: "24/7 Human-like Conversations",
    description: "Natural-sounding AI that never sleeps, always available for your customers.",
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Communicate in Hindi and English with authentic accent and tone.",
  },
  {
    icon: Code,
    title: "Custom Prompt Programming",
    description: "Tailor every response and flow to match your brand voice perfectly.",
  },
  {
    icon: Cpu,
    title: "Multiple LLM Support",
    description: "Powered by GPT, Claude, and Gemini for superior intelligence.",
  },
  {
    icon: FileText,
    title: "Call Transcripts & Recordings",
    description: "Complete logs of every conversation for quality and compliance.",
  },
  {
    icon: Database,
    title: "Auto Updates to Google Sheets & Billing",
    description: "Seamless integration with your existing tools and workflows.",
  },
  {
    icon: Workflow,
    title: "Scalable Integrations",
    description: "Connect with Make.com, n8n, and countless automation platforms.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text">
            Why Choose Phlox AI?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-bold">
            Advanced features that make voice automation powerful and effortless.
          </p>
        </div>

        <SpotlightCards cards={features} showQR={false} />
      </div>
    </section>
  );
};
