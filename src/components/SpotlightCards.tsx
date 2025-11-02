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
    <div className="relative min-h-[600px] flex items-center justify-center px-4">
      {/* Top lighting beam */}
      <div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(200, 100, 255, 0.3) 0%, transparent 60%)',
          filter: 'blur(40px)',
        }}
      />
      
      {/* Bottom platform light */}
      <div 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-2 pointer-events-none rounded-full"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(200, 100, 255, 0.8) 20%, rgba(255, 100, 200, 0.8) 50%, rgba(200, 100, 255, 0.8) 80%, transparent)',
          boxShadow: '0 0 60px rgba(200, 100, 255, 0.6), 0 0 100px rgba(255, 100, 200, 0.4)',
        }}
      />
      
      {/* Platform glow */}
      <div 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[500px] h-32 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center top, rgba(200, 100, 255, 0.2) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />
      
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
                isSelected ? 'z-20 animate-float-slow' : 'z-10'
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
                className={`glass-card rounded-2xl p-8 w-[320px] transition-all duration-500 relative overflow-hidden ${
                  isSelected
                    ? 'shadow-[0_0_80px_rgba(200,100,255,0.7),0_0_120px_rgba(255,100,200,0.5)] border-2 border-primary'
                    : 'shadow-[0_0_30px_rgba(150,80,200,0.3)]'
                }`}
                style={{
                  background: isSelected
                    ? 'linear-gradient(180deg, rgba(100, 50, 150, 0.3) 0%, rgba(80, 40, 120, 0.4) 50%, rgba(120, 60, 180, 0.3) 100%)'
                    : 'rgba(30, 20, 50, 0.5)',
                }}
              >
                {/* Top light beam hitting card */}
                {isSelected && (
                  <>
                    <div 
                      className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-40 h-40 pointer-events-none"
                      style={{
                        background: 'radial-gradient(ellipse at center, rgba(200, 100, 255, 0.4) 0%, transparent 70%)',
                        filter: 'blur(20px)',
                      }}
                    />
                    <div 
                      className="absolute -bottom-8 left-0 right-0 h-12 pointer-events-none"
                      style={{
                        background: 'linear-gradient(to top, rgba(200, 100, 255, 0.3), transparent)',
                        filter: 'blur(10px)',
                      }}
                    />
                  </>
                )}
              
                <div
                  className="p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 transition-all duration-500 relative"
                  style={{
                    background: isSelected
                      ? 'linear-gradient(135deg, hsl(280 100% 70%), hsl(320 95% 65%))'
                      : 'linear-gradient(135deg, hsl(270 80% 50%), hsl(290 80% 55%))',
                    boxShadow: isSelected
                      ? '0 0 50px rgba(200, 100, 255, 0.8), 0 0 80px rgba(255, 100, 200, 0.5)'
                      : '0 0 20px rgba(150, 80, 200, 0.4)',
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
