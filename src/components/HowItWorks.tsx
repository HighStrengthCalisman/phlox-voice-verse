import { Phone, Brain, MessageCircle, Mic, FileCheck, Upload } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

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
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section ref={ref} id="how-it-works" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text">
            How Our Voice Agents Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-bold">
            A seamless flow from call to data update in seconds.
          </p>
        </div>

        {/* Demo Video Section */}
        <div className={`mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
          <div className="relative aspect-video max-w-5xl mx-auto rounded-3xl overflow-hidden border-2 border-primary/30 shadow-[0_0_80px_rgba(180,100,255,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm border border-primary/40">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-primary border-b-[12px] border-b-transparent ml-1" />
                </div>
                <p className="text-muted-foreground font-bold">Demo Video Coming Soon</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Process */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-30 hidden md:block" />
          
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex gap-8 mb-16 last:mb-0 group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* Step Number & Icon */}
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary p-0.5 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-primary group-hover:text-secondary transition-colors duration-500" />
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Step number badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs font-black text-white shadow-lg">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-background/40 to-background/20 backdrop-blur-xl border border-primary/20 group-hover:border-primary/60 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(180,100,255,0.3)]">
                  <h3 className="text-2xl font-black mb-3 text-foreground group-hover:text-primary transition-colors duration-500">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-500 font-semibold leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
