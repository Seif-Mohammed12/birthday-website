import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { config } from '../config';

interface DayTimelineProps {
  selectedDate: string;
  selectedTime: string;
}

export function DayTimeline({ selectedDate, selectedTime }: DayTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <div className="min-h-screen p-4 md:p-8" ref={containerRef} style={{ paddingTop: '100px' }}>
      {/* Title */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-handwritten text-4xl md:text-5xl text-ink-200 mb-2" style={{ fontSize: 'clamp(28px, 6vw, 48px)' }}>
          Our Little Adventure ♡
        </h1>
        <p className="font-serif text-ink-200/70 text-lg italic" style={{ fontSize: 'clamp(14px, 3vw, 18px)' }}>
          A day made just for us.
        </p>
        <p className="font-handwritten text-xl text-rose-500 mt-4" style={{ fontSize: 'clamp(16px, 4vw, 20px)' }}>
          {selectedDate} • {selectedTime}
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-md mx-auto relative" style={{ maxWidth: 'clamp(300px, 90vw, 448px)' }}>
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-ink-200/20" style={{ left: 'clamp(24px, 6vw, 32px)' }} />

        {/* Events */}
        {config.itinerary.map((item, index) => (
          <motion.div
            key={index}
            className="relative pb-16"
            style={{ paddingLeft: 'clamp(48px, 12vw, 80px)' }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Time marker */}
            <motion.div
              className="absolute bg-rose-500 rounded-full flex items-center justify-center paper-shadow"
              style={{ 
                left: 'clamp(12px, 3vw, 16px)',
                width: 'clamp(28px, 7vw, 32px)',
                height: 'clamp(28px, 7vw, 32px)'
              }}
              whileHover={{ scale: 1.2 }}
            >
              <span className="text-white text-sm font-handwritten" style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>{item.icon}</span>
            </motion.div>

            {/* Event card */}
            <motion.div
              className="bg-paper-100 paper-shadow rounded-sm transform rotate-1"
              style={{
                background: 'linear-gradient(135deg, #FFFCF2 0%, #FFF9E6 100%)',
                padding: 'clamp(16px, 4vw, 24px)'
              }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.image && (
                <div className="w-full mb-4 rounded overflow-hidden bg-gradient-to-br from-amber-100 to-rose-100" style={{ height: 'clamp(120px, 30vw, 160px)' }}>
                  <img 
                    src={item.image} 
                    alt={item.activity}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              )}
              <div className="font-handwritten text-3xl text-rose-600 mb-2" style={{ fontSize: 'clamp(20px, 5vw, 30px)' }}>
                {item.time}
              </div>
              <div className="font-handwritten text-xl text-ink-200 mb-1" style={{ fontSize: 'clamp(16px, 4vw, 20px)' }}>
                {item.activity}
              </div>
              {item.location && (
                <div className="font-serif text-ink-200/60 text-sm mt-2" style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>
                  📍 {item.location}
                </div>
              )}
              
              {/* Tape effect */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-amber-200/50 transform -rotate-2" style={{ width: 'clamp(40px, 10vw, 48px)', height: 'clamp(16px, 4vw, 20px)' }} />
            </motion.div>

            {/* Arrow to next */}
            {index < config.itinerary.length - 1 && !item.isSurprise && (
              <motion.div
                className="absolute text-ink-200/30 text-2xl"
                style={{ left: 'clamp(20px, 5vw, 28px)', top: 'clamp(64px, 16vw, 80px)', fontSize: 'clamp(16px, 4vw, 24px)' }}
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                ↓
              </motion.div>
            )}
          </motion.div>
        ))}

        {/* Final message */}
        <motion.div
          className="text-center mt-16 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-handwritten text-4xl md:text-5xl text-ink-200 mb-4" style={{ fontSize: 'clamp(28px, 6vw, 48px)' }}>
            {config.finalMessage.title}
          </h2>
          <p className="font-handwritten text-2xl text-ink-200/80" style={{ fontSize: 'clamp(16px, 4vw, 24px)' }}>
            {config.finalMessage.subtitle}
          </p>
          
          {/* Large heart animation */}
          <motion.div
            className="mt-8 text-6xl text-rose-500"
            style={{ fontSize: 'clamp(40px, 10vw, 96px)' }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            ♡
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="fixed top-1/4 right-10 text-rose-200 text-3xl"
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        ♡
      </motion.div>
      <motion.div
        className="fixed bottom-1/4 left-10 text-amber-200 text-2xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
      >
        ✿
      </motion.div>
    </div>
  );
}
