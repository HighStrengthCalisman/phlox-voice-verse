import { Clock, Globe, Code, Cpu, FileText, Database, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState, useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import type { CarouselApi } from "@/components/ui/carousel";

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
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  );

  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  const [api, setApi] = useState<CarouselApi>();
  const [visibleSlides, setVisibleSlides] = useState<number[]>([]);

  useEffect(() => {
    if (!api) return;

    const updateVisibleSlides = () => {
      const slidesInView = api.slidesInView();
      setVisibleSlides(slidesInView);
    };

    updateVisibleSlides();
    api.on("select", updateVisibleSlides);
    api.on("slidesInView", updateVisibleSlides);

    return () => {
      api.off("select", updateVisibleSlides);
      api.off("slidesInView", updateVisibleSlides);
    };
  }, [api]);

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text">
            Why Choose Phlox AI?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-bold">
            Advanced features that make voice automation powerful and effortless.
          </p>
        </div>

        {/* Feature Carousel */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[autoplayPlugin.current]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {features.map((feature, index) => {
              const isCardVisible = visibleSlides.includes(index);
              return (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className={`group relative h-full transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                  {/* Card Container */}
                  <div className={`relative h-full p-8 rounded-3xl bg-gradient-to-br from-background/40 to-background/20 backdrop-blur-xl border transition-all duration-500 overflow-hidden ${
                    isCardVisible ? 'border-primary/60 shadow-[0_0_60px_rgba(180,100,255,0.4)]' : 'border-primary/20'
                  }`}>
                    {/* Animated gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-secondary/0 transition-opacity duration-500 ${
                      isCardVisible ? 'opacity-100' : 'opacity-0'
                    }`} />
                    
                    {/* Shine effect */}
                    <div className={`absolute top-0 w-full h-full bg-gradient-to-l from-white/10 to-transparent skew-x-12 transition-all duration-1000 ${
                      isCardVisible ? 'right-full' : '-right-full'
                    }`} />
                    
                    {/* Icon with glow */}
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary p-0.5 transition-transform duration-500 ${
                        isCardVisible ? 'scale-110' : 'scale-100'
                      }`}>
                        <div className="w-full h-full rounded-2xl bg-background/90 flex items-center justify-center">
                          <feature.icon className={`h-8 w-8 transition-colors duration-500 ${
                            isCardVisible ? 'text-secondary' : 'text-primary'
                          }`} />
                        </div>
                      </div>
                      {/* Icon glow */}
                      <div className={`absolute inset-0 bg-primary/30 rounded-2xl blur-xl transition-opacity duration-500 ${
                        isCardVisible ? 'opacity-100' : 'opacity-0'
                      }`} />
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className={`text-2xl font-black mb-3 transition-colors duration-500 ${
                        isCardVisible ? 'text-primary' : 'text-foreground'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className={`font-semibold leading-relaxed transition-colors duration-500 ${
                        isCardVisible ? 'text-foreground/90' : 'text-muted-foreground'
                      }`}>
                        {feature.description}
                      </p>
                    </div>

                    {/* Decorative corner accents */}
                    <div className={`absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 transition-colors duration-500 ${
                      isCardVisible ? 'border-primary/60' : 'border-primary/30'
                    }`} />
                    <div className={`absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 transition-colors duration-500 ${
                      isCardVisible ? 'border-secondary/60' : 'border-secondary/30'
                    }`} />
                  </div>
                </div>
              </CarouselItem>
            );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-background/20 border-primary/30 hover:bg-primary/20 hover:border-primary/60 backdrop-blur-xl" />
          <CarouselNext className="hidden md:flex -right-12 bg-background/20 border-primary/30 hover:bg-primary/20 hover:border-primary/60 backdrop-blur-xl" />
        </Carousel>

        {/* Explore Button */}
        <div className={`text-center mt-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '700ms' }}>
          <Button
            onClick={() => window.location.href = '/features'}
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-black px-8 py-6 text-lg shadow-[0_0_60px_rgba(180,100,255,0.5)] hover:shadow-[0_0_80px_rgba(180,100,255,0.7)] transition-all duration-300"
          >
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
};
