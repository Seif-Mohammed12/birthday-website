import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { config } from '../config';

interface MemoryScrapbookProps {
  onComplete: () => void;
}

export function MemoryScrapbook({ onComplete }: MemoryScrapbookProps) {
  const [selectedMemory, setSelectedMemory] = useState<number | null>(null);

  return (
    <div className="min-h-screen p-4 md:p-8" style={{ paddingTop: '100px' }}>
      {/* Title */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-handwritten text-4xl md:text-5xl text-ink-200 mb-2" style={{ fontSize: 'clamp(28px, 6vw, 48px)' }}>
          Little Pieces of Us ♡
        </h1>
        <p className="font-serif text-ink-200/70 text-lg italic" style={{ fontSize: 'clamp(14px, 3vw, 18px)' }}>
          Some of my favorite memories...
        </p>
      </motion.div>

      {/* Photo collage */}
      <div className="max-w-4xl mx-auto relative min-h-[900px] md:min-h-[700px]">
        {config.memories.map((memory, index) => (
          <motion.div
            key={memory.id}
            className="absolute cursor-pointer"
            style={{
              left: `${5 + (index % 2) * 45}%`,
              top: `${5 + Math.floor(index / 2) * 35}%`,
              transform: `rotate(${memory.rotation}deg)`,
            }}
            initial={{ opacity: 0, scale: 0.8, rotate: memory.rotation - 10 }}
            animate={{ 
              opacity: selectedMemory === null || selectedMemory === memory.id ? 1 : 0.3,
              scale: selectedMemory === memory.id ? 1.1 : 1,
              rotate: selectedMemory === memory.id ? 0 : memory.rotation,
              zIndex: selectedMemory === memory.id ? 50 : index
            }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedMemory(selectedMemory === memory.id ? null : memory.id)}
            whileHover={{ scale: selectedMemory === null ? 1.05 : 1 }}
          >
            {/* Polaroid */}
            <div
              className="bg-white polaroid-shadow p-3 pb-8"
              style={{ width: 'clamp(140px, 35vw, 180px)' }}
            >
              {/* Photo placeholder */}
              <div className="w-full h-40 bg-gradient-to-br from-amber-100 to-rose-100 flex items-center justify-center overflow-hidden">
                {memory.image && memory.image.startsWith('/images/') ? (
                  <img 
                    src={memory.image} 
                    alt={memory.caption}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="text-6xl">📷</div>
                )}
              </div>
              
              {/* Caption */}
              <div className="mt-3 font-handwritten text-ink-200 text-center text-lg">
                {memory.caption}
              </div>
              
              {/* Date */}
              <div className="font-serif text-ink-200/50 text-xs text-center mt-1">
                {memory.date}
              </div>
            </div>

            {/* Tape effect */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-amber-200/60 transform -rotate-3 shadow-sm" />
          </motion.div>
        ))}

        {/* Decorative elements */}
        <motion.div
          className="absolute top-10 left-10 text-rose-300 text-3xl"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          ♡
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 text-amber-300 text-2xl"
          animate={{ rotate: [0, -15, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >
          ✿
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-20 text-rose-200 text-xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        >
          ✨
        </motion.div>
      </div>

      {/* Closing message */}
      <motion.div
        className="text-center mt-40 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p className="font-handwritten text-2xl text-ink-200 mb-2">
          and somehow...
        </p>
        <p className="font-handwritten text-2xl text-ink-200">
          we're still making memories.
        </p>
      </motion.div>

      {/* Continue button */}
      <motion.button
        onClick={onComplete}
        className="block mx-auto px-8 py-3 font-handwritten text-xl text-ink-200 bg-paper-200 paper-shadow rounded-sm hover:bg-paper-300 transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Next chapter ♡
      </motion.button>

      {/* Expanded view overlay */}
      <AnimatePresence>
        {selectedMemory !== null && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMemory(null)}
          >
            <motion.div
              className="bg-white paper-shadow p-4 pb-12 max-w-lg max-h-[90vh] overflow-auto"
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, rotate: 10 }}
              onClick={(e) => e.stopPropagation()}
              style={{ padding: 'clamp(16px, 4vw, 24px)' }}
            >
              <div className="w-full min-h-[250px] bg-gradient-to-br from-amber-100 to-rose-100 flex items-center justify-center overflow-hidden rounded" style={{ minHeight: 'clamp(200px, 50vw, 350px)' }}>
                {config.memories.find(m => m.id === selectedMemory)?.image ? (
                  <img 
                    src={config.memories.find(m => m.id === selectedMemory)?.image}
                    alt={config.memories.find(m => m.id === selectedMemory)?.caption}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="text-6xl">📷</div>
                )}
              </div>
              <div className="mt-6 font-handwritten text-ink-200 text-center text-2xl" style={{ fontSize: 'clamp(16px, 4vw, 24px)', marginTop: 'clamp(16px, 4vw, 24px)' }}>
                {config.memories.find(m => m.id === selectedMemory)?.caption}
              </div>
              <div className="mt-2 font-serif text-ink-200/50 text-sm text-center" style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>
                {config.memories.find(m => m.id === selectedMemory)?.date}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
