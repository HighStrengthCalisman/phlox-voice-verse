import { Phone, RefreshCw, Bell, MessageSquare, Wrench, QrCode } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const agents = [
  {
    icon: Phone,
    title: "Service Calling Agent",
    description: "Handles customer service calls with natural, human-like conversations 24/7.",
  },
  {
    icon: MessageSquare,
    title: "Follow-Up Agent",
    description: "Automatically follows up with leads and customers to maintain engagement.",
  },
  {
    icon: RefreshCw,
    title: "Renewal Agent",
    description: "Manages subscription renewals and contract extensions seamlessly.",
  },
  {
    icon: Bell,
    title: "Reminding Agent",
    description: "Sends timely reminders for appointments, payments, and important dates.",
  },
  {
    icon: Wrench,
    title: "Custom Agent",
    description: "Tailored voice agents programmed for your specific business needs.",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {agents.map((agent, index) => {
            const AgentCard = () => {
              const { ref, isVisible } = useIntersectionObserver();
              
              return (
                <div
                  ref={ref}
                  className={`glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 group ${
                    isVisible ? 'animate-bounce-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="bg-gradient-to-br from-primary to-accent p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 shadow-[var(--glow-primary)] group-hover:animate-float">
                    <agent.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-foreground">{agent.title}</h3>
                  <p className="text-muted-foreground mb-6 font-bold">{agent.description}</p>
                  
                  <div className="glass-card p-4 rounded-xl flex items-center justify-center gap-2 border-dashed">
                    <QrCode className="h-6 w-6 text-secondary" />
                    <span className="text-sm font-bold text-muted-foreground">Scan to Experience Demo</span>
                  </div>
                </div>
              );
            };
            return <AgentCard key={index} />;
          })}
        </div>

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
