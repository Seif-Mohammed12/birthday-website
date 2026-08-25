import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { config } from '../config';

interface EnvelopeProps {
  onOpen: () => void;
}

export function Envelope({ onOpen }: EnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (!isOpen) setIsOpen(true);
  };

  const handleLetterClick = () => {
    if (isOpen) onOpen();
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '16px'
    }}>
      <motion.h1
        style={{
          fontFamily: 'Dancing Script, cursive',
          fontSize: 'clamp(28px, 8vw, 44px)',
          color: '#BE185D',
          marginBottom: 'clamp(30px, 8vw, 70px)',
          textAlign: 'center'
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Happy Birthday, {config.herName} ♡
      </motion.h1>

      <motion.div
        className="relative cursor-pointer"
        onClick={handleClick}
        animate={{ y: isOpen ? 40 : [0, -6, 0] }}
        transition={{ 
          duration: isOpen ? 0.5 : 3, 
          repeat: isOpen ? 0 : Infinity, 
          ease: "easeInOut" 
        }}
        style={{
          width: 'clamp(280px, 80vw, 350px)',
          height: 'clamp(200px, 57vw, 250px)',
          transformStyle: 'preserve-3d',
          perspective: '1200px'
        }}
      >
        {/* Envelope body */}
        <div
          className="absolute inset-0 rounded-sm paper-shadow"
          style={{
            background: 'linear-gradient(165deg, #F43F5E 0%, #E11D48 55%, #C21A44 100%)',
            zIndex: 0
          }}
        >
          <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '6px',
            background: 'linear-gradient(100deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 30%)',
            pointerEvents: 'none'
          }} />
        </div>

        {/* Letter — rises up from behind the flaps, roughly half emerges */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute left-0 right-0 mx-auto paper-shadow rounded-sm cursor-pointer"
              style={{
                background: '#FFFCF2',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.08)',
                zIndex: 2,
                bottom: '-20px',
                width: '280px',
                height: '240px',
                padding: '26px 24px',
                position: 'relative'
              }}
              initial={{ y: 30, opacity: 0, scale: 0.95 }}
              animate={{ y: -100, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              onClick={handleLetterClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Lined paper effect */}
              <div style={{
                position: 'absolute',
                top: '26px',
                left: '24px',
                right: '24px',
                bottom: '24px',
                backgroundImage: 'repeating-linear-gradient(transparent, transparent 43px, rgba(74, 74, 74, 0.1) 44px)',
                pointerEvents: 'none',
                zIndex: 0
              }} />
              
              {/* Red margin line */}
              <div style={{
                position: 'absolute',
                top: '26px',
                bottom: '24px',
                left: '48px',
                width: '2px',
                backgroundColor: 'rgba(244, 63, 94, 0.3)',
                pointerEvents: 'none',
                zIndex: 0
              }} />

              <div style={{
                position: 'relative',
                fontFamily: 'Dancing Script, cursive',
                color: '#4A4A4A',
                fontSize: '22px',
                lineHeight: '44px',
                letterSpacing: '0.6px',
                paddingLeft: '24px',
                zIndex: 1
              }}>
                <p style={{ fontSize: '28px', marginBottom: '10px', lineHeight: '1.3' }}>{config.letter.greeting}</p>
                <p style={{ fontSize: '19px', opacity: 0.7, lineHeight: '1.5' }} className="italic">Happy birthday, my love ♡</p>
                <p style={{ fontSize: '16px', marginTop: '20px', lineHeight: '1.5' }} className="text-rose-400 text-center">Click to read →</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Left side flap */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(20deg, #D6134A 0%, #C41046 100%)',
            clipPath: 'polygon(0 0, 50% 50%, 0 100%)',
            filter: 'drop-shadow(2px 0 3px rgba(0,0,0,0.12))',
            zIndex: 4
          }}
        />
        {/* Right side flap */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(160deg, #D6134A 0%, #C41046 100%)',
            clipPath: 'polygon(100% 0, 50% 50%, 100% 100%)',
            filter: 'drop-shadow(-2px 0 3px rgba(0,0,0,0.12))',
            zIndex: 4
          }}
        />

        {/* Bottom pocket flap — tucks the letter in */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(175deg, #D6134A 0%, #B01040 100%)',
            clipPath: 'polygon(0 100%, 50% 50%, 100% 100%)',
            filter: 'drop-shadow(0 -2px 3px rgba(0,0,0,0.18))',
            zIndex: 3
          }}
        />

        {/* Wax seal — centered on the exact point where every flap meets */}
        <motion.div
          style={{
            position: 'absolute',
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            top: '50%',
            left: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'radial-gradient(circle at 32% 26%, #F5C85B 0%, #D9A62A 45%, #96700F 100%)',
            border: '2px solid rgba(255,255,255,0.35)',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3), 0 1px 0 rgba(255,255,255,0.3) inset, 0 -2px 4px rgba(0,0,0,0.2) inset',
            zIndex: 6,
            color: 'rgba(255,255,255,0.92)',
            fontSize: '24px',
            textShadow: '0 1px 2px rgba(0,0,0,0.35)'
          }}
          initial={{ x: '-50%', y: '-50%' }}
          animate={{
            x: '-50%',
            y: '-50%',
            scale: isOpen ? 0 : 1,
            opacity: isOpen ? 0 : 1
          }}
          transition={{ duration: 0.35 }}
        >
          ♡
        </motion.div>

        {/* Top flap — opens and stays visible, folded back, instead of fading out */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(175deg, #C9124A 0%, #A80E3F 90%)',
            clipPath: 'polygon(0 0, 50% 50%, 100% 0)',
            transformOrigin: 'top center',
            backfaceVisibility: 'hidden',
            filter: 'drop-shadow(0 6px 8px rgba(0,0,0,0.25))'
          }}
          animate={{
            rotateX: isOpen ? -45 : 0,
            zIndex: isOpen ? 1 : 5,
            opacity: 1
          }}
          transition={{
            rotateX: { duration: 0.65, ease: 'easeInOut' },
            zIndex: { delay: isOpen ? 0.3 : 0, duration: 0 }
          }}
        />
      </motion.div>

      <motion.p
        className="mt-12 font-handwritten text-ink-200/70 text-xl"
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        Open me...
      </motion.p>
    </div>
  );
}