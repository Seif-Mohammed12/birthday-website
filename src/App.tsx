import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PaperBackground } from './components/PaperBackground';
import { Envelope } from './components/Envelope';
import { LoveLetter } from './components/LoveLetter';
import { MemoryScrapbook } from './components/MemoryScrapbook';
import { DatePicker } from './components/DatePicker';
import { DayTimeline } from './components/DayTimeline';
import { ProgressIndicator } from './components/ProgressIndicator';
import { FloatingHearts } from './components/FloatingHearts';

type Chapter = 'envelope' | 'letter' | 'memories' | 'date' | 'timeline';

const chapterOrder: Chapter[] = ['envelope', 'letter', 'memories', 'date', 'timeline'];

function App() {
  const [currentChapter, setCurrentChapter] = useState<Chapter>('envelope');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  const nextChapter = () => {
    const currentIndex = chapterOrder.indexOf(currentChapter);
    if (currentIndex < chapterOrder.length - 1) {
      setCurrentChapter(chapterOrder[currentIndex + 1]);
    }
  };

  const handleDateSelect = (date: string, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
    nextChapter();
  };

  const goToChapter = (chapterNumber: number) => {
    const chapterMap: Record<number, Chapter> = {
      1: 'letter',
      2: 'memories',
      3: 'date',
      4: 'timeline'
    };
    setCurrentChapter(chapterMap[chapterNumber]);
  };

  const getChapterIndex = () => chapterOrder.indexOf(currentChapter);

  return (
    <PaperBackground variant="pink">
      <FloatingHearts />
      
      {currentChapter !== 'envelope' && (
        <ProgressIndicator 
          currentChapter={getChapterIndex() + 1} 
          totalChapters={4}
          onChapterClick={goToChapter}
        />
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentChapter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{ minHeight: '100vh' }}
        >
          {currentChapter === 'envelope' && (
            <Envelope onOpen={nextChapter} />
          )}

          {currentChapter === 'letter' && (
            <LoveLetter onComplete={nextChapter} />
          )}

          {currentChapter === 'memories' && (
            <MemoryScrapbook onComplete={nextChapter} />
          )}

          {currentChapter === 'date' && (
            <DatePicker onComplete={handleDateSelect} />
          )}

          {currentChapter === 'timeline' && (
            <DayTimeline 
              selectedDate={selectedDate} 
              selectedTime={selectedTime} 
            />
          )}
        </motion.div>
      </AnimatePresence>
    </PaperBackground>
  );
}

export default App;
