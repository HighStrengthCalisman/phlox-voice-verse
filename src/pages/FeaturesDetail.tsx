import { Clock, Globe, Code, Cpu, FileText, Database, Workflow, ArrowLeft } from "lucide-react";
import { SpaceBackground } from "@/components/SpaceBackground";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: Clock,
    title: "24/7 Human-like Conversations",
    description: "Natural-sounding AI that never sleeps, always available for your customers.",
    details: [
      "Round-the-clock availability without human agents",
      "Natural conversation flow with context understanding",
      "Consistent quality across all interactions",
      "No waiting times or queue management needed",
    ],
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Communicate in Hindi and English with authentic accent and tone.",
    details: [
      "Native-level fluency in multiple languages",
      "Automatic language detection and switching",
      "Cultural context awareness for better communication",
      "Support for regional dialects and accents",
    ],
  },
  {
    icon: Code,
    title: "Custom Prompt Programming",
    description: "Tailor every response and flow to match your brand voice perfectly.",
    details: [
      "Complete control over conversation scripts",
      "Brand-specific tone and personality settings",
      "Dynamic response templates",
      "Easy-to-use prompt editor interface",
    ],
  },
  {
    icon: Cpu,
    title: "Multiple LLM Support",
    description: "Powered by GPT, Claude, and Gemini for superior intelligence.",
    details: [
      "Choose from multiple AI models for optimal performance",
      "Switch between models based on use case",
      "Latest AI technology integration",
      "Continuous updates with newest model versions",
    ],
  },
  {
    icon: FileText,
    title: "Call Transcripts & Recordings",
    description: "Complete logs of every conversation for quality and compliance.",
    details: [
      "Automatic transcription of all calls",
      "Searchable conversation history",
      "Audio recording storage and playback",
      "Quality assurance and training insights",
    ],
  },
  {
    icon: Database,
    title: "Auto Updates to Google Sheets & Billing",
    description: "Seamless integration with your existing tools and workflows.",
    details: [
      "Real-time data synchronization",
      "Automatic CRM updates after each call",
      "Billing system integration",
      "Custom field mapping support",
    ],
  },
  {
    icon: Workflow,
    title: "Scalable Integrations",
    description: "Connect with Make.com, n8n, and countless automation platforms.",
    details: [
      "Pre-built integrations with popular platforms",
      "REST API for custom integrations",
      "Webhook support for real-time events",
      "No-code automation workflows",
    ],
  },
];

export default function FeaturesDetail() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen relative">
      <SpaceBackground />
      <div className="relative z-10">
        <div className="container mx-auto max-w-7xl px-6 py-24">
          {/* Back Button */}
          <Button
            onClick={() => navigate('/')}
            variant="ghost"
            className="mb-8 group hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>

          {/* Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-black mb-6 gradient-text">
              Comprehensive Features
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-bold">
              Everything you need to power intelligent voice automation for your business.
            </p>
          </div>

          {/* Features Grid */}
          <div className="space-y-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="group relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-background/40 to-background/20 backdrop-blur-xl border border-primary/20 hover:border-primary/60 transition-all duration-500 hover:shadow-[0_0_60px_rgba(180,100,255,0.4)]">
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  
                  <div className="relative">
                    {/* Icon and Title */}
                    <div className="flex items-start gap-6 mb-6">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary p-0.5 group-hover:scale-110 transition-transform duration-500">
                          <div className="w-full h-full rounded-2xl bg-background/90 flex items-center justify-center">
                            <feature.icon className="h-10 w-10 text-primary group-hover:text-secondary transition-colors duration-500" />
                          </div>
                        </div>
                        {/* Icon glow */}
                        <div className="absolute inset-0 bg-primary/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      
                      <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-black mb-3 text-foreground group-hover:text-primary transition-colors duration-500">
                          {feature.title}
                        </h2>
                        <p className="text-lg text-muted-foreground group-hover:text-foreground/90 transition-colors duration-500 font-semibold">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Details List */}
                    <div className="grid md:grid-cols-2 gap-4 mt-8">
                      {feature.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="flex items-start gap-3 p-4 rounded-xl bg-background/20 border border-primary/10 group-hover:border-primary/30 transition-colors duration-500"
                        >
                          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-br from-primary to-secondary mt-2" />
                          <p className="text-foreground/80 font-medium leading-relaxed">
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative corner accents */}
                  <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-primary/30 group-hover:border-primary/60 transition-colors duration-500" />
                  <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-secondary/30 group-hover:border-secondary/60 transition-colors duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
