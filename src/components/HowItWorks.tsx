import { ArrowRight, Phone, Brain, MessageCircle, Mic, FileCheck, Upload } from "lucide-react";

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 group">
                <div className="bg-gradient-to-br from-accent to-primary p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 shadow-[var(--glow-primary)] group-hover:animate-float">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-xl shadow-[var(--glow-primary)]">
                  {index + 1}
                </div>

                <h3 className="text-xl font-black mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground font-bold text-sm">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 z-10">
                  <ArrowRight className="h-8 w-8 text-secondary animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
