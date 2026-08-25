import { motion } from 'framer-motion';

interface PaperBackgroundProps {
  variant?: 'ivory' | 'beige' | 'pink' | 'cream';
  children: React.ReactNode;
}

export function PaperBackground({ variant = 'pink', children }: PaperBackgroundProps) {
  const backgroundColors = {
    ivory: '#FFFCF2',
    beige: '#FFF5E6',
    pink: '#FFE4EC',
    cream: '#FFFAF0'
  };

  return (
    <div 
      className="relative overflow-hidden"
      style={{
        minHeight: '100vh',
        backgroundColor: backgroundColors[variant],
        backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(255, 182, 193, 0.4) 0%, transparent 30%),
          radial-gradient(circle at 90% 80%, rgba(255, 105, 180, 0.3) 0%, transparent 25%),
          radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.5) 0%, transparent 70%),
          radial-gradient(circle at 20% 80%, rgba(255, 192, 203, 0.3) 0%, transparent 20%),
          radial-gradient(circle at 80% 20%, rgba(255, 182, 193, 0.3) 0%, transparent 20%)
        `
      }}
    >
      {/* Floating hearts in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${14 + Math.random() * 28}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
              color: `rgba(255, ${105 + Math.random() * 100}, ${180 + Math.random() * 75}, ${0.35 + Math.random() * 0.25})`,
              opacity: 0.5 + Math.random() * 0.3
            }}
          >
            ♡
          </div>
        ))}
        {/* Additional decorative elements */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${12 + Math.random() * 16}px`,
              color: `rgba(255, 215, 0, ${0.25 + Math.random() * 0.2})`,
              opacity: 0.4 + Math.random() * 0.3
            }}
          >
            ✦
          </div>
        ))}
        {[...Array(5)].map((_, i) => (
          <div
            key={`flower-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${16 + Math.random() * 18}px`,
              color: `rgba(255, 182, 193, ${0.3 + Math.random() * 0.25})`,
              opacity: 0.4 + Math.random() * 0.3
            }}
          >
            ✿
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}
