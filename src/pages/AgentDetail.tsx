import { useParams, useNavigate } from "react-router-dom";
import { SpaceBackground } from "@/components/SpaceBackground";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, MessageSquare, RefreshCw, Bell, Wrench } from "lucide-react";

const agentData = {
  "service-calling": {
    icon: Phone,
    title: "Service Calling Agent",
    description: "Handles customer service calls with natural, human-like conversations 24/7. Our AI agent understands context, emotion, and intent to provide exceptional customer service.",
  },
  "follow-up": {
    icon: MessageSquare,
    title: "Follow-Up Agent",
    description: "Automatically follows up with leads and customers to maintain engagement. Never miss an opportunity with intelligent, timely follow-ups that convert.",
  },
  "renewal": {
    icon: RefreshCw,
    title: "Renewal Agent",
    description: "Manages subscription renewals and contract extensions seamlessly. Reduce churn and increase revenue with automated renewal conversations.",
  },
  "reminding": {
    icon: Bell,
    title: "Reminding Agent",
    description: "Sends timely reminders for appointments, payments, and important dates. Keep your customers informed and reduce no-shows.",
  },
  "custom": {
    icon: Wrench,
    title: "Custom Agent",
    description: "Tailored voice agents programmed for your specific business needs. We build custom solutions that fit your unique workflow.",
  },
};

export default function AgentDetail() {
  const { agentType } = useParams<{ agentType: string }>();
  const navigate = useNavigate();
  
  const agent = agentType ? agentData[agentType as keyof typeof agentData] : null;

  if (!agent) {
    return null;
  }

  const Icon = agent.icon;

  return (
    <div className="min-h-screen relative">
      <SpaceBackground />
      
      <main className="relative z-10">
        <div className="container mx-auto px-6 py-12">
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="glass-card text-foreground font-bold mb-8 hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8 mb-8 border-2 border-primary shadow-[var(--glow-primary)]">
              <div className="flex items-center gap-6 mb-6">
                <div
                  className="p-6 rounded-xl w-20 h-20 flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, hsl(280 100% 70%), hsl(320 95% 65%))',
                    boxShadow: '0 0 50px rgba(200, 100, 255, 0.8), 0 0 80px rgba(255, 100, 200, 0.5)',
                  }}
                >
                  <Icon className="h-10 w-10 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-black gradient-text">{agent.title}</h1>
              </div>
              <p className="text-lg text-muted-foreground font-bold">{agent.description}</p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-black mb-6 text-foreground">Demo Video</h2>
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                <video
                  controls
                  className="w-full h-full rounded-xl"
                  poster="/placeholder.svg"
                >
                  <source src="/demo-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center font-bold">
                Update the video file at <code className="text-primary">/public/demo-video.mp4</code>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
