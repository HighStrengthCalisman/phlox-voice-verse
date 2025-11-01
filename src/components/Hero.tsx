import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient Mesh */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Animated Stars & Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `hsl(var(--${i % 2 === 0 ? 'primary' : 'secondary'}) / 0.3)`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="font-lobster text-7xl md:text-9xl mb-4 text-glow gradient-text">
            Phlox AI
          </h1>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-foreground">
            Automate Every Conversation.
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto font-bold">
            Phlox AI builds intelligent voice agents that handle your calls, follow-ups, renewals, and reminders — automatically.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("agents")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-black text-lg px-8 py-6 rounded-2xl shadow-[var(--glow-primary)] transition-all hover:scale-105"
            >
              Meet the Agents
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => scrollToSection("how-it-works")}
              size="lg"
              variant="outline"
              className="glass-card text-foreground font-black text-lg px-8 py-6 rounded-2xl hover:bg-white/10 transition-all hover:scale-105"
            >
              See How It Works
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => scrollToSection("plans")}
              size="lg"
              variant="outline"
              className="glass-card text-foreground font-black text-lg px-8 py-6 rounded-2xl hover:bg-white/10 transition-all hover:scale-105"
            >
              Pricing Plans
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
