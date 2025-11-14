import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic Plan",
    price: "₹2,500",
    period: "/month",
    features: [
      "3 Voice Agents",
      "1 Software (Make.com)",
      "Free 3-Month Tech Updates",
      "Hindi & English Support",
      "Basic Analytics",
      "Email Support",
    ],
    highlighted: false,
  },
  {
    name: "Custom Plan",
    price: "₹4,000",
    period: "/month",
    features: [
      "3 Agents + 3 Custom Agents",
      "2 Software Options (Make.com + n8n)",
      "6-Month Tech Updates",
      "Priority Support",
      "Advanced Analytics",
      "Dedicated Account Manager",
      "Custom Integrations",
    ],
    highlighted: true,
  },
];

export const Plans = () => {
  return (
    <section id="plans" className="py-24 px-4 sm:px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text">
            Choose Your Automation Power
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-bold">
            Flexible plans built for every business size.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto px-2 sm:px-0">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card p-6 sm:p-10 rounded-2xl transition-all duration-300 ${
                plan.highlighted
                  ? "border-2 border-primary shadow-[var(--glow-primary)] md:scale-105"
                  : "hover:scale-105"
              }`}
            >
              {plan.highlighted && (
                <div className="bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-black inline-block mb-4">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-3xl font-black mb-2 text-foreground">{plan.name}</h3>
              <div className="mb-8">
                <span className="text-5xl font-black gradient-text">{plan.price}</span>
                <span className="text-xl text-muted-foreground font-bold">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="bg-gradient-to-br from-secondary to-primary p-1 rounded-full mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-foreground font-bold">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`w-full text-lg font-black py-6 rounded-xl transition-all ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-[var(--glow-primary)]"
                    : "glass-card hover:bg-white/10"
                }`}
              >
                {plan.highlighted ? "Get Custom Plan" : "Start Basic Plan"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
