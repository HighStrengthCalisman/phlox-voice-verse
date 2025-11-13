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
    defaultPrompt: "You are a professional customer service agent for Phlox AI. Your role is to handle incoming customer service calls with empathy, efficiency, and professionalism. Listen carefully to customer concerns, provide clear solutions, and ensure customer satisfaction. Always maintain a friendly and helpful tone.",
  },
  "follow-up": {
    icon: MessageSquare,
    title: "Follow-Up Agent",
    description: "Automatically follows up with leads and customers to maintain engagement. Never miss an opportunity with intelligent, timely follow-ups that convert.",
    defaultPrompt: "You are a follow-up specialist for Phlox AI. Your role is to reach out to leads and customers who have shown interest in our services. Be personable, remind them of previous conversations, and gently guide them toward the next step in their journey. Ask open-ended questions to re-engage them.",
  },
  "renewal": {
    icon: RefreshCw,
    title: "Renewal Agent",
    description: "Manages subscription renewals and contract extensions seamlessly. Reduce churn and increase revenue with automated renewal conversations.",
    defaultPrompt: "You are a renewal specialist for Phlox AI. Your role is to contact customers whose subscriptions or contracts are approaching expiration. Highlight the value they've received, offer renewal incentives, and address any concerns they may have. Be persuasive yet respectful.",
  },
  "reminding": {
    icon: Bell,
    title: "Reminding Agent",
    description: "Sends timely reminders for appointments, payments, and important dates. Keep your customers informed and reduce no-shows.",
    defaultPrompt: "You are a reminder assistant for Phlox AI. Your role is to send timely, friendly reminders to customers about appointments, payments, or important deadlines. Be concise, clear, and courteous. Confirm their availability and offer assistance if they need to reschedule.",
  },
  "custom": {
    icon: Wrench,
    title: "Custom Agent",
    description: "Tailored voice agents programmed for your specific business needs. We build custom solutions that fit your unique workflow.",
    defaultPrompt: "You are a custom AI agent for Phlox AI. Your role and behavior will be defined by specific business requirements. Adapt to the unique needs of the organization and provide tailored solutions that align with their workflow and goals.",
  },
};

export default function AgentDetail() {
  const { agentType } = useParams<{ agentType: string }>();
  const navigate = useNavigate();
  
  const agent = agentType ? agentData[agentType as keyof typeof agentData] : null;
  const [prompt, setPrompt] = useState(agent?.defaultPrompt || "");
  const [isEditing, setIsEditing] = useState(false);

  if (!agent) {
    return null;
  }

  const Icon = agent.icon;

  const handleUndo = () => {
    setPrompt(agent.defaultPrompt);
    setIsEditing(false);
  };

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

            {/* Agent Prompt Section */}
            <div className="glass-card rounded-2xl p-8 mb-8 border border-primary/30">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-black text-foreground">Agent Prompt</h2>
                <div className="flex gap-2">
                  <Button
                    onClick={() => setIsEditing(!isEditing)}
                    variant="outline"
                    size="sm"
                    className="glass-card text-foreground font-bold hover:bg-white/10"
                  >
                    <Edit className="mr-2 h-4 w-4" />
                    {isEditing ? "Save" : "Edit"}
                  </Button>
                  <Button
                    onClick={handleUndo}
                    variant="outline"
                    size="sm"
                    className="glass-card text-foreground font-bold hover:bg-white/10"
                  >
                    <Undo className="mr-2 h-4 w-4" />
                    Undo
                  </Button>
                </div>
              </div>
              {isEditing ? (
                <Textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[150px] glass-card text-foreground font-medium resize-none"
                  placeholder="Enter agent prompt..."
                />
              ) : (
                <p className="text-muted-foreground font-medium leading-relaxed">{prompt}</p>
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
