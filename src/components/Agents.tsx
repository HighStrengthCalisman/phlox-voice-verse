import { Phone, RefreshCw, Bell, MessageSquare, Wrench } from "lucide-react";
import { SpotlightCards } from "./SpotlightCards";

const agents = [
  {
    icon: Phone,
    title: "Service Calling Agent",
    description: "Handles customer service calls with natural, human-like conversations 24/7.",
    route: "/agent/service-calling",
  },
  {
    icon: MessageSquare,
    title: "Follow-Up Agent",
    description: "Automatically follows up with leads and customers to maintain engagement.",
    route: "/agent/follow-up",
  },
  {
    icon: RefreshCw,
    title: "Renewal Agent",
    description: "Manages subscription renewals and contract extensions seamlessly.",
    route: "/agent/renewal",
  },
  {
    icon: Bell,
    title: "Reminding Agent",
    description: "Sends timely reminders for appointments, payments, and important dates.",
    route: "/agent/reminding",
  },
  {
    icon: Wrench,
    title: "Custom Agent",
    description: "Tailored voice agents programmed for your specific business needs.",
    route: "/agent/custom",
  },
];

export const Agents = () => {
  return (
    <section id="agents" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text">
            Meet Your AI Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-bold">
            Five specialized voice agents built to handle every part of customer communication.
          </p>
        </div>

        <SpotlightCards cards={agents} showExploreButton={false} />

        <div className="text-center glass-card p-6 rounded-2xl max-w-2xl mx-auto">
          <p className="text-lg font-black text-foreground">
            🌐 Available in <span className="text-primary">Hindi & English</span> | 
            🎙️ <span className="text-secondary">Male & Female Voices</span>
          </p>
        </div>
      </div>
    </section>
  );
};
