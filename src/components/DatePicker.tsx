import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { config } from '../config';

interface DatePickerProps {
  onComplete: (date: string, time: string) => void;
}

export function DatePicker({ onComplete }: DatePickerProps) {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<number | null>(null);

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      const date = config.dates.find(d => d.id === selectedDate)?.label || '';
      const time = config.times.find(t => t.id === selectedTime)?.label || '';
      onComplete(date, time);
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col items-center" style={{ paddingTop: '100px' }}>
      {/* Title */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-handwritten text-4xl md:text-5xl text-ink-200 mb-2" style={{ fontSize: 'clamp(28px, 6vw, 48px)' }}>
          Okay... your turn ♡
        </h1>
        <p className="font-serif text-ink-200/70 text-lg italic" style={{ fontSize: 'clamp(14px, 3vw, 18px)' }}>
          You get to choose our day.
        </p>
      </motion.div>

      {/* Date selection */}
      <motion.div
        className="w-full max-w-2xl mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="font-handwritten text-2xl text-ink-200 mb-6 text-center" style={{ fontSize: 'clamp(18px, 4vw, 24px)' }}>
          Pick a date:
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {config.dates.map((date) => (
            <motion.button
              key={date.id}
              onClick={() => setSelectedDate(date.id)}
              disabled={!date.available}
              className={`relative px-4 py-3 font-handwritten text-xl paper-shadow rounded-sm transition-all ${
                selectedDate === date.id
                  ? 'bg-rose-100 text-rose-700'
                  : date.available
                  ? 'bg-paper-200 text-ink-200 hover:bg-paper-300'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
              style={{ fontSize: 'clamp(14px, 3.5vw, 20px)', padding: 'clamp(8px, 2vw, 16px) clamp(12px, 3vw, 20px)' }}
              whileHover={date.available ? { scale: 1.05 } : {}}
              whileTap={date.available ? { scale: 0.95 } : {}}
              initial={{ opacity: 0, rotate: -5 }}
              animate={{ 
                opacity: 1, 
                rotate: selectedDate === date.id ? 0 : (Math.random() - 0.5) * 4 
              }}
              transition={{ delay: 0.3 + date.id * 0.1 }}
            >
              <span className="mr-2">♡</span>
              {date.label}
              {selectedDate === date.id && (
                <motion.div
                  className="absolute -top-2 -right-2 text-rose-500"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring" }}
                >
                  ✓
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Time selection */}
      <motion.div
        className="w-full max-w-2xl mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h2 className="font-handwritten text-2xl text-ink-200 mb-6 text-center" style={{ fontSize: 'clamp(18px, 4vw, 24px)' }}>
          Pick a time:
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {config.times.map((time) => (
            <motion.button
              key={time.id}
              onClick={() => setSelectedTime(time.id)}
              className={`relative px-6 py-3 font-handwritten text-xl paper-shadow rounded-sm transition-all ${
                selectedTime === time.id
                  ? 'bg-amber-100 text-amber-700'
                  : 'bg-paper-200 text-ink-200 hover:bg-paper-300'
              }`}
              style={{ fontSize: 'clamp(14px, 3.5vw, 20px)', padding: 'clamp(12px, 3vw, 24px) clamp(12px, 3vw, 20px)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + time.id * 0.1 }}
            >
              <span className="mr-2">{time.icon}</span>
              {time.label}
              {selectedTime === time.id && (
                <motion.div
                  className="absolute -top-1 -right-1 w-6 h-6 border-2 border-amber-500 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring" }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Confirmation message */}
      <AnimatePresence>
        {selectedDate && selectedTime && (
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <p className="font-handwritten text-2xl text-rose-600" style={{ fontSize: 'clamp(16px, 4vw, 24px)' }}>
              Perfect. It's a date ♡
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Continue button */}
      <motion.button
        onClick={handleContinue}
        disabled={!selectedDate || !selectedTime}
        className={`px-8 py-3 font-handwritten text-xl paper-shadow rounded-sm transition-all ${
          selectedDate && selectedTime
            ? 'bg-ink-200 text-paper-100 hover:bg-ink-300'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
        style={{ fontSize: 'clamp(14px, 3.5vw, 20px)', padding: 'clamp(10px, 2.5vw, 20px) clamp(8px, 2vw, 16px)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        whileHover={selectedDate && selectedTime ? { scale: 1.05 } : {}}
        whileTap={selectedDate && selectedTime ? { scale: 0.95 } : {}}
      >
        Show me our plan →
      </motion.button>

      {/* Decorative elements */}
      <motion.div
        className="fixed top-20 left-10 text-rose-200 text-2xl"
        animate={{ rotate: [0, 20, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        ♡
      </motion.div>
      <motion.div
        className="fixed bottom-20 right-10 text-amber-200 text-xl"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      >
        ✨
      </motion.div>
    </div>
  );
}
