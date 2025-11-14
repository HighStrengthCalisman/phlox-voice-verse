import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.interest) {
      toast.error("Please select an agent type you're interested in");
      return;
    }

    try {
      const webhookData = {
        name: formData.name,
        email: formData.email,
        businessType: formData.businessType,
        phone: formData.phone,
        interest: formData.interest,
        message: formData.message,
      };

      await fetch("https://hook.eu2.make.com/6tz3iboa5z4rpmxmxrfn46qk4waic5io", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(webhookData),
      });

      toast.success("Thank you! We'll contact you soon.");
      setFormData({ name: "", email: "", businessType: "", phone: "", interest: "", message: "" });
    } catch (error) {
      console.error("Error sending data:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text">
            Let's Automate Your Voice
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-bold">
            Talk to our team and see your first AI agent in action.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8 animate-fade-in-up">
            <div className="glass-card p-8 rounded-2xl">
              <div className="bg-gradient-to-br from-primary to-accent p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 shadow-[var(--glow-primary)]">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-2 text-foreground">Email Us</h3>
              <p className="text-muted-foreground font-bold">phloxlaptop.69.69@gmail.com</p>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <div className="bg-gradient-to-br from-secondary to-primary p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 shadow-[var(--glow-secondary)]">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-2 text-foreground">Call Us</h3>
              <p className="text-muted-foreground font-bold">+91 9321687426</p>
            </div>

          </div>

          <div className="glass-card p-8 rounded-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background/50 border-border text-foreground font-bold"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background/50 border-border text-foreground font-bold"
                />
              </div>

              <div>
                <Input
                  placeholder="Business Type"
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  required
                  className="bg-background/50 border-border text-foreground font-bold"
                />
              </div>

              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-background/50 border-border text-foreground font-bold"
                />
              </div>

              <div>
                <Select onValueChange={(value) => setFormData({ ...formData, interest: value })} required>
                  <SelectTrigger className="bg-background/50 border-border text-foreground font-bold">
                    <SelectValue placeholder="I'm interested in..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="service">Service Calling Agent</SelectItem>
                    <SelectItem value="followup">Follow-Up Agent</SelectItem>
                    <SelectItem value="renewal">Renewal Agent</SelectItem>
                    <SelectItem value="reminder">Reminding Agent</SelectItem>
                    <SelectItem value="custom">Custom Agent</SelectItem>
                    <SelectItem value="all">All Agents</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Textarea
                  placeholder="Tell us about your needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  required
                  className="bg-background/50 border-border text-foreground font-bold"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-black text-lg py-6 rounded-xl shadow-[var(--glow-primary)] transition-all"
              >
                Book Free Consultation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
