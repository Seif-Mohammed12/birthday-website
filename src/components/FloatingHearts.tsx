import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

export function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts(prev => {
        const newHeart: Heart = {
          id: Date.now(),
          x: Math.random() * 100,
          y: 100 + Math.random() * 20,
          size: 8 + Math.random() * 12,
          delay: Math.random() * 2
        };
        return [...prev.slice(-8), newHeart];
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-rose-300 opacity-60"
          style={{
            left: `${heart.x}%`,
            fontSize: `${heart.size}px`
          }}
          initial={{ y: heart.y, opacity: 0, rotate: 0 }}
          animate={{
            y: -20,
            opacity: [0, 0.6, 0],
            rotate: [0, 15, -15]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            delay: heart.delay,
            ease: "easeOut"
          }}
        >
          ♡
        </motion.div>
      ))}
    </div>
  );
}
