import { Mail, Phone, Linkedin, Twitter, Facebook } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border/50 py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="font-lobster text-4xl gradient-text mb-4">Phlox AI</h3>
            <p className="text-muted-foreground font-bold mb-6">
              Building the future of business automation through intelligent voice agents.
            </p>
            <div className="flex gap-4">
              <a href="#" className="glass-card p-3 rounded-xl hover:scale-110 transition-all">
                <Linkedin className="h-5 w-5 text-secondary" />
              </a>
              <a href="#" className="glass-card p-3 rounded-xl hover:scale-110 transition-all">
                <Twitter className="h-5 w-5 text-secondary" />
              </a>
              <a href="#" className="glass-card p-3 rounded-xl hover:scale-110 transition-all">
                <Facebook className="h-5 w-5 text-secondary" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-black mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("hero")} className="text-muted-foreground hover:text-primary font-bold transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("agents")} className="text-muted-foreground hover:text-primary font-bold transition-colors">
                  Agents
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("plans")} className="text-muted-foreground hover:text-primary font-bold transition-colors">
                  Plans
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("how-it-works")} className="text-muted-foreground hover:text-primary font-bold transition-colors">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-muted-foreground hover:text-primary font-bold transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black mb-4 text-foreground">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground font-bold">
                <Mail className="h-4 w-4 text-secondary" />
                contact@phlox.ai
              </li>
              <li className="flex items-center gap-2 text-muted-foreground font-bold">
                <Phone className="h-4 w-4 text-secondary" />
                +91 XXXXX XXXXX
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-muted-foreground font-bold">
            © 2025 Phlox AI – All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
