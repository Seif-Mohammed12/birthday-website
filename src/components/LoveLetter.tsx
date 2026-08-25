import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { config } from '../config';

interface LoveLetterProps {
  onComplete: () => void;
}

export function LoveLetter({ onComplete }: LoveLetterProps) {
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const fullText = [config.letter.greeting, ...config.letter.body, config.letter.closing, config.letter.signature];

  useEffect(() => {
    if (currentIndex >= fullText.length) {
      setIsComplete(true);
      return;
    }

    const currentLine = fullText[currentIndex];
    
    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => {
          const newText = [...prev];
          if (!newText[currentIndex]) {
            newText[currentIndex] = '';
          }
          newText[currentIndex] += currentLine[charIndex];
          return newText;
        });
        setCharIndex(prev => prev + 1);
      }, 15 + Math.random() * 20); // Faster typing speed
      return () => clearTimeout(timeout);
    } else {
      // Line complete, move to next line after pause
      const timeout = setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
        setCharIndex(0);
      }, currentLine.trim() === '' ? 50 : 200); // Faster transitions
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, charIndex, fullText]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '16px'
    }}>
      {/* Paper sheet */}
      <motion.div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '600px',
          backgroundColor: '#FFFCF2',
          borderRadius: '4px',
          padding: 'clamp(16px, 4vw, 32px)',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.08)',
          transform: 'rotate(-0.5deg)'
        }}
        initial={{ opacity: 0, y: 50, rotate: -5 }}
        animate={{ opacity: 1, y: 0, rotate: -0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Lined paper effect */}
        <div style={{
          position: 'absolute',
          top: 'clamp(16px, 4vw, 32px)',
          left: 'clamp(16px, 4vw, 32px)',
          right: 'clamp(16px, 4vw, 32px)',
          bottom: 'clamp(16px, 4vw, 32px)',
          backgroundImage: 'repeating-linear-gradient(transparent, transparent clamp(32px, 8vw, 43px), rgba(74, 74, 74, 0.1) clamp(33px, 8.5vw, 44px))',
          pointerEvents: 'none',
          zIndex: 0
        }} />
        
        {/* Red margin line */}
        <div style={{
          position: 'absolute',
          top: 'clamp(16px, 4vw, 32px)',
          bottom: 'clamp(16px, 4vw, 32px)',
          left: 'clamp(48px, 12vw, 72px)',
          width: '2px',
          backgroundColor: 'rgba(244, 63, 94, 0.3)',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        {/* Decorative doodles */}
        <div style={{
          position: 'absolute',
          top: 'clamp(8px, 2vw, 16px)',
          right: 'clamp(16px, 4vw, 32px)',
          fontSize: 'clamp(16px, 4vw, 24px)',
          transform: 'rotate(12deg)',
          color: '#FDA4AF',
          zIndex: 1
        }}>♡</div>
        <div style={{
          position: 'absolute',
          bottom: 'clamp(16px, 4vw, 32px)',
          left: 'clamp(8px, 2vw, 16px)',
          fontSize: 'clamp(14px, 3.5vw, 20px)',
          transform: 'rotate(-6deg)',
          color: '#FECDD3',
          zIndex: 1
        }}>✿</div>
        
        {/* Letter content */}
        <div style={{
          position: 'relative',
          fontFamily: 'Dancing Script, cursive',
          color: '#4A4A4A',
          fontSize: 'clamp(18px, 5vw, 28px)',
          lineHeight: 'clamp(32px, 8vw, 44px)',
          letterSpacing: '0.8px',
          paddingLeft: 'clamp(32px, 8vw, 48px)',
          zIndex: 1
        }}>
          {displayedText.map((line, index) => (
            <motion.p
              key={index}
              style={{
                margin: (line && line.trim()) === '' ? '0' : '0 0 16px 0',
                minHeight: (line && line.trim()) === '' ? '24px' : 'auto'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {line || ''}
            </motion.p>
          ))}
          
          {/* Animated cursor */}
          <AnimatePresence>
            {!isComplete && (
              <motion.span
                style={{
                  display: 'inline-block',
                  width: '2px',
                  height: '24px',
                  backgroundColor: '#4A4A4A',
                  marginLeft: '4px'
                }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Signature heart */}
        <AnimatePresence>
          {isComplete && (
            <motion.div
              style={{
                position: 'absolute',
                bottom: '32px',
                right: '48px',
                fontSize: '36px',
                color: '#F43F5E'
              }}
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            >
              ♡
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Continue button */}
      <AnimatePresence>
        {isComplete && (
          <motion.button
            onClick={onComplete}
            style={{
              marginTop: '32px',
              padding: '12px 32px',
              fontFamily: 'Caveat, cursive',
              fontSize: '20px',
              color: '#4A4A4A',
              backgroundColor: '#FFF9E6',
              borderRadius: '4px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.08)',
              cursor: 'pointer',
              border: 'none'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Keep going →
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
