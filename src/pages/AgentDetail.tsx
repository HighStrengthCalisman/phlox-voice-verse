import { useParams, useNavigate } from "react-router-dom";
import { SpaceBackground } from "@/components/SpaceBackground";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Phone, MessageSquare, RefreshCw, Bell, Wrench, Edit, Undo } from "lucide-react";
import { useState } from "react";

const agentData = {
  "service-calling": {
    icon: Phone,
    title: "Service Calling Agent",
    description: "Handles customer service calls with natural, human-like conversations 24/7. Our AI agent understands context, emotion, and intent to provide exceptional customer service.",
    prompt: "You are a professional customer service agent. Your goal is to help customers with their inquiries in a friendly, empathetic, and efficient manner. Always maintain a positive tone, actively listen to customer concerns, and provide clear solutions. If you don't know the answer, acknowledge it and offer to escalate or find the information.",
  },
  "follow-up": {
    icon: MessageSquare,
    title: "Follow-Up Agent",
    description: "Automatically follows up with leads and customers to maintain engagement. Never miss an opportunity with intelligent, timely follow-ups that convert.",
    prompt: "You are a follow-up specialist focused on nurturing leads and maintaining customer relationships. Your approach should be warm, persistent but not pushy, and value-driven. Reference previous interactions, show genuine interest in their needs, and create urgency through benefits rather than pressure.",
  },
  "renewal": {
    icon: RefreshCw,
    title: "Renewal Agent",
    description: "Manages subscription renewals and contract extensions seamlessly. Reduce churn and increase revenue with automated renewal conversations.",
    prompt: "You are a renewal specialist whose goal is to retain customers and ensure smooth subscription renewals. Emphasize the value they've received, highlight new features or benefits, address concerns proactively, and make the renewal process effortless. Focus on building long-term relationships.",
  },
  "reminding": {
    icon: Bell,
    title: "Reminding Agent",
    description: "Sends timely reminders for appointments, payments, and important dates. Keep your customers informed and reduce no-shows.",
    prompt: "You are a reminder assistant that helps customers stay on track with their commitments. Be polite, concise, and clear about what action is needed and by when. Provide relevant details like date, time, and location for appointments. Offer easy options to confirm, reschedule, or get more information.",
  },
  "custom": {
    icon: Wrench,
    title: "Custom Agent",
    description: "Tailored voice agents programmed for your specific business needs. We build custom solutions that fit your unique workflow.",
    prompt: "You are a custom AI agent tailored to specific business requirements. Your behavior, tone, and approach should align with the unique needs and values of the organization you serve. Adapt your responses based on the context and guidelines provided.",
  },
};

export default function AgentDetail() {
  const { agentType } = useParams<{ agentType: string }>();
  const navigate = useNavigate();
  
  const agent = agentType ? agentData[agentType as keyof typeof agentData] : null;
  
  const [isEditingPrompt, setIsEditingPrompt] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState(agent?.prompt || "");
  const [originalPrompt] = useState(agent?.prompt || "");

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

            <div className="glass-card rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-black text-foreground">Agent Prompt</h2>
                <div className="flex gap-2">
                  <Button
                    onClick={() => setIsEditingPrompt(!isEditingPrompt)}
                    variant="outline"
                    size="sm"
                    className="glass-card text-foreground font-bold hover:bg-white/10"
                  >
                    <Edit className="mr-2 h-4 w-4" />
                    {isEditingPrompt ? "Save" : "Edit"}
                  </Button>
                  {isEditingPrompt && (
                    <Button
                      onClick={() => {
                        setCurrentPrompt(originalPrompt);
                        setIsEditingPrompt(false);
                      }}
                      variant="outline"
                      size="sm"
                      className="glass-card text-foreground font-bold hover:bg-white/10"
                    >
                      <Undo className="mr-2 h-4 w-4" />
                      Undo
                    </Button>
                  )}
                </div>
              </div>
              {isEditingPrompt ? (
                <Textarea
                  value={currentPrompt}
                  onChange={(e) => setCurrentPrompt(e.target.value)}
                  className="min-h-[150px] bg-background/50 border-primary/30 text-foreground font-semibold"
                  placeholder="Enter agent prompt..."
                />
              ) : (
                <p className="text-muted-foreground font-semibold leading-relaxed whitespace-pre-wrap">
                  {currentPrompt}
                </p>
              )}
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
