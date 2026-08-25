import { motion } from 'framer-motion';

interface ProgressIndicatorProps {
  currentChapter: number;
  totalChapters: number;
  onChapterClick?: (chapterNumber: number) => void;
}

const chapters = [
  { number: 1, title: 'Letter' },
  { number: 2, title: 'Memories' },
  { number: 3, title: 'Our Date' },
  { number: 4, title: 'The Day' }
];

export function ProgressIndicator({ currentChapter, totalChapters, onChapterClick }: ProgressIndicatorProps) {
  return (
    <div style={{
      position: 'fixed',
      top: '24px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1000,
      backgroundColor: 'rgba(255, 228, 236, 0.9)',
      padding: '8px 12px',
      borderRadius: '20px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '90vw',
      overflowX: 'auto'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        fontFamily: 'Dancing Script, cursive',
        color: '#4A4A4A',
        fontSize: '14px',
        whiteSpace: 'nowrap'
      }}>
        {chapters.map((chapter, index) => (
          <motion.div
            key={chapter.number}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: onChapterClick ? 'pointer' : 'default'
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onChapterClick && onChapterClick(chapter.number)}
            whileHover={onChapterClick ? { scale: 1.05 } : {}}
            whileTap={onChapterClick ? { scale: 0.95 } : {}}
          >
            <span style={{
              color: currentChapter >= chapter.number ? '#BE185D' : 'rgba(74, 74, 74, 0.4)'
            }}>
              ♡
            </span>
            <span style={{
              fontSize: '12px',
              color: currentChapter >= chapter.number ? '#4A4A4A' : 'rgba(74, 74, 74, 0.3)'
            }}>
              0{chapter.number} — {chapter.title}
            </span>
            {index < chapters.length - 1 && (
              <span style={{
                color: 'rgba(74, 74, 74, 0.2)',
                margin: '0 4px'
              }}>
                /
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
