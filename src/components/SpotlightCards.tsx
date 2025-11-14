import { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface Card {
  icon: LucideIcon;
  title: string;
  description: string;
  route?: string;
}

interface SpotlightCardsProps {
  cards: Card[];
  showExploreButton?: boolean;
}

export const SpotlightCards = ({ cards, showExploreButton }: SpotlightCardsProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const handleCardChange = (newIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSelectedIndex(newIndex);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  return (
    <div className="relative min-h-[600px] flex items-center justify-center px-4">
      {/* Top lighting beam with white glow */}
      <div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.15) 0%, rgba(180, 100, 255, 0.25) 30%, transparent 60%)',
          filter: 'blur(40px)',
        }}
      />
      
      {/* Bottom platform light with white shine */}
      <div 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-2 pointer-events-none rounded-full"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(180, 100, 255, 0.8) 20%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 100, 200, 0.8) 80%, transparent)',
          boxShadow: '0 0 60px rgba(180, 100, 255, 0.6), 0 0 100px rgba(255, 100, 200, 0.4), 0 0 40px rgba(255, 255, 255, 0.3)',
        }}
      />
      
      {/* Platform glow with white accent */}
      <div 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[500px] h-32 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center top, rgba(255, 255, 255, 0.1) 0%, rgba(180, 100, 255, 0.2) 30%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />
      
      {/* Cards carousel - circular rotation */}
      <div className="absolute inset-0 flex items-center justify-center perspective-1000">
        {cards.map((card, index) => {
          const totalCards = cards.length;
          let position = (index - selectedIndex + totalCards) % totalCards;
          if (position > totalCards / 2) {
            position = position - totalCards;
          }
          
          const isSelected = index === selectedIndex;
          const isNext = position === 1;
          const isPrev = position === -1;
          const isVisible = Math.abs(position) <= 1;
          
          if (!isVisible && !isSelected) return null;
          
          let transformStyle = '';
          let opacityValue = 0;
          
          if (isSelected) {
            transformStyle = 'translateX(0) scale(1) rotateY(0deg)';
            opacityValue = 1;
          } else if (isNext) {
            transformStyle = 'translateX(120%) scale(0.7) rotateY(-25deg)';
            opacityValue = 0.3;
          } else if (isPrev) {
            transformStyle = 'translateX(-120%) scale(0.7) rotateY(25deg)';
            opacityValue = 0.3;
          }
          
          return (
            <div
              key={index}
              onClick={() => handleCardChange(index)}
              className={`absolute transition-all duration-700 cursor-pointer ${
                isSelected ? 'z-20 animate-float-slow' : 'z-10'
              }`}
              style={{
                transform: transformStyle,
                opacity: opacityValue,
                filter: isSelected ? 'blur(0px)' : 'blur(3px)',
              }}
            >
              <div
                className={`glass-card rounded-2xl p-8 w-[320px] min-h-[400px] transition-all duration-500 relative overflow-hidden ${
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
                {/* Top light beam hitting card with white glow */}
                {isSelected && (
                  <>
                    <div 
                      className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-40 h-40 pointer-events-none"
                      style={{
                        background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.25) 0%, rgba(180, 100, 255, 0.35) 40%, transparent 70%)',
                        filter: 'blur(20px)',
                      }}
                    />
                    <div 
                      className="absolute -bottom-8 left-0 right-0 h-12 pointer-events-none"
                      style={{
                        background: 'linear-gradient(to top, rgba(180, 100, 255, 0.3), transparent)',
                        filter: 'blur(10px)',
                      }}
                    />
                    {/* White shine accents */}
                    <div 
                      className="absolute top-4 right-4 w-20 h-20 pointer-events-none rounded-full"
                      style={{
                        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)',
                        filter: 'blur(15px)',
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
                  className={`text-3xl font-black mb-4 transition-all duration-500 ${
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

                {showExploreButton && isSelected && card.route && (
                  <Button
                    onClick={() => navigate(card.route!)}
                    className="mt-6 w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-black shadow-[var(--glow-primary)]"
                  >
                    Explore More
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation dots with white glow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => handleCardChange(index)}
            className={`transition-all duration-300 rounded-full ${
              index === selectedIndex
                ? 'w-12 h-3 bg-primary shadow-[0_0_30px_rgba(180,100,255,0.8),0_0_15px_rgba(255,255,255,0.5)]'
                : 'w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
