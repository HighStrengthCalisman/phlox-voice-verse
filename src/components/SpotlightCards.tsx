import { useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface Card {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface SpotlightCardsProps {
  cards: Card[];
  showQR?: boolean;
}

export const SpotlightCards = ({ cards, showQR }: SpotlightCardsProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="relative min-h-[500px] flex items-center justify-center px-4">
      {/* Background cards */}
      <div className="absolute inset-0 flex items-center justify-center gap-4 perspective-1000">
        {cards.map((card, index) => {
          const isSelected = index === selectedIndex;
          const offset = index - selectedIndex;
          const isVisible = Math.abs(offset) <= 2;
          
          if (!isVisible) return null;
          
          return (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`absolute transition-all duration-700 cursor-pointer ${
                isSelected ? 'z-20' : 'z-10'
              }`}
              style={{
                transform: isSelected
                  ? 'translateX(0) scale(1) rotateY(0deg)'
                  : `translateX(${offset * 280}px) scale(${0.75 - Math.abs(offset) * 0.1}) rotateY(${offset * -15}deg)`,
                opacity: isSelected ? 1 : 0.4,
                filter: isSelected ? 'blur(0px)' : 'blur(2px)',
              }}
            >
              <div
                className={`glass-card rounded-2xl p-8 w-[320px] transition-all duration-500 ${
                  isSelected
                    ? 'shadow-[0_0_60px_rgba(0,200,255,0.5)] border-2 border-primary'
                    : 'shadow-[0_0_20px_rgba(0,200,255,0.2)]'
                }`}
                style={{
                  background: isSelected
                    ? 'linear-gradient(135deg, rgba(0, 200, 255, 0.15), rgba(168, 85, 247, 0.15))'
                    : 'rgba(30, 41, 59, 0.4)',
                }}
              >
                <div
                  className={`p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 transition-all duration-500 ${
                    isSelected ? 'animate-float' : ''
                  }`}
                  style={{
                    background: isSelected
                      ? 'linear-gradient(135deg, hsl(190 100% 50%), hsl(280 85% 55%))'
                      : 'linear-gradient(135deg, hsl(200 80% 40%), hsl(260 70% 45%))',
                    boxShadow: isSelected
                      ? '0 0 40px rgba(0, 200, 255, 0.6)'
                      : '0 0 15px rgba(0, 200, 255, 0.3)',
                  }}
                >
                  <card.icon className="h-8 w-8 text-white" />
                </div>

                <h3
                  className={`text-2xl font-black mb-4 transition-all duration-500 ${
                    isSelected ? 'text-primary text-glow' : 'text-foreground'
                  }`}
                >
                  {card.title}
                </h3>

                <p
                  className={`font-bold transition-all duration-500 ${
                    isSelected ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  {card.description}
                </p>

                {showQR && isSelected && (
                  <div className="mt-6 glass-card p-4 rounded-xl flex items-center justify-center gap-2 border-dashed border-primary">
                    <div className="h-6 w-6 bg-primary/20 rounded" />
                    <span className="text-sm font-bold text-primary">
                      Scan to Experience Demo
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              index === selectedIndex
                ? 'w-12 h-3 bg-primary shadow-[0_0_20px_rgba(0,200,255,0.8)]'
                : 'w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => setSelectedIndex((prev) => (prev > 0 ? prev - 1 : cards.length - 1))}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 glass-card p-4 rounded-full hover:bg-primary/20 transition-all group"
        aria-label="Previous card"
      >
        <svg
          className="w-6 h-6 text-primary group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => setSelectedIndex((prev) => (prev < cards.length - 1 ? prev + 1 : 0))}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 glass-card p-4 rounded-full hover:bg-primary/20 transition-all group"
        aria-label="Next card"
      >
        <svg
          className="w-6 h-6 text-primary group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};
