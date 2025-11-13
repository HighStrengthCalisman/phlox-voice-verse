import { Phone, Brain, MessageCircle, Mic, FileCheck, Upload } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useState, useEffect } from "react";

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
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    if (isVisible && activeStep === -1) {
      setActiveStep(0);
      
      // Trigger subsequent steps sequentially
      steps.forEach((_, index) => {
        if (index > 0) {
          setTimeout(() => {
            setActiveStep(index);
          }, index * 1500);
        }
      });
    }
  }, [isVisible, activeStep]);

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
            {/* Replace the URL below with your Vimeo video link */}
            <iframe
              src="https://player.vimeo.com/video/YOUR_VIDEO_ID?h=YOUR_HASH&title=0&byline=0&portrait=0"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="How Our Voice Agents Work Demo"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4 font-semibold">
            To update: Replace YOUR_VIDEO_ID in src/components/HowItWorks.tsx with your Vimeo video ID
          </p>
        </div>

        {/* Timeline Process */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-30 hidden md:block" />
          
          {steps.map((step, index) => {
            const isStepActive = activeStep >= index;
            return (
            <div
              key={index}
              className={`relative flex gap-8 mb-16 last:mb-0 group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Step Number & Icon */}
              <div className="relative flex-shrink-0">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary p-0.5 transition-transform duration-500 ${
                  isStepActive ? 'scale-110' : 'scale-100'
                }`}>
                  <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                    <step.icon className={`h-8 w-8 transition-colors duration-500 ${
                      isStepActive ? 'text-secondary' : 'text-primary'
                    }`} />
                  </div>
                </div>
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-primary/30 rounded-2xl blur-xl transition-opacity duration-500 ${
                  isStepActive ? 'opacity-100' : 'opacity-0'
                }`} />
                
                {/* Step number badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs font-black text-white shadow-lg">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <div className={`p-6 rounded-2xl bg-gradient-to-br from-background/40 to-background/20 backdrop-blur-xl border transition-all duration-500 overflow-hidden relative ${
                  isStepActive ? 'border-primary/60 shadow-[0_0_40px_rgba(180,100,255,0.3)]' : 'border-primary/20'
                }`}>
                  {/* Shine effect */}
                  <div className={`absolute top-0 w-full h-full bg-gradient-to-l from-white/10 to-transparent skew-x-12 transition-all duration-1000 ${
                    isStepActive ? 'right-full' : '-right-full'
                  }`} />
                  
                  <h3 className={`text-2xl font-black mb-3 transition-colors duration-500 relative z-10 ${
                    isStepActive ? 'text-primary' : 'text-foreground'
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`font-semibold leading-relaxed transition-colors duration-500 relative z-10 ${
                    isStepActive ? 'text-foreground/90' : 'text-muted-foreground'
                  }`}>
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
};
