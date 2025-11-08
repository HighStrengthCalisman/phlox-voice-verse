import { Clock, Globe, Code, Cpu, FileText, Database, Workflow } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text">
            Why Choose Phlox AI?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-bold">
            Advanced features that make voice automation powerful and effortless.
          </p>
        </div>

        {/* Feature Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {features.map((feature, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="group relative animate-fade-in-up h-full">
                  {/* Card Container */}
                  <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-background/40 to-background/20 backdrop-blur-xl border border-primary/20 transition-all duration-500 hover:border-primary/60 hover:shadow-[0_0_60px_rgba(180,100,255,0.4)] overflow-hidden">
                    {/* Animated gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Shine effect */}
                    <div className="absolute top-0 -right-full w-full h-full bg-gradient-to-l from-white/10 to-transparent skew-x-12 group-hover:right-full transition-all duration-700" />
                    
                    {/* Icon with glow */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary p-0.5 group-hover:scale-110 transition-transform duration-500">
                        <div className="w-full h-full rounded-2xl bg-background/90 flex items-center justify-center">
                          <feature.icon className="h-8 w-8 text-primary group-hover:text-secondary transition-colors duration-500" />
                        </div>
                      </div>
                      {/* Icon glow */}
                      <div className="absolute inset-0 bg-primary/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-2xl font-black mb-3 text-foreground group-hover:text-primary transition-colors duration-500">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-500 font-semibold leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Decorative corner accents */}
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/30 group-hover:border-primary/60 transition-colors duration-500" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-secondary/30 group-hover:border-secondary/60 transition-colors duration-500" />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-background/20 border-primary/30 hover:bg-primary/20 hover:border-primary/60 backdrop-blur-xl" />
          <CarouselNext className="hidden md:flex -right-12 bg-background/20 border-primary/30 hover:bg-primary/20 hover:border-primary/60 backdrop-blur-xl" />
        </Carousel>
      </div>
    </section>
  );
};
