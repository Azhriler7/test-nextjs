'use client';

/**
 * RiddleSlide Component
 * 
 * Interactive riddle slide with reveal answer button
 */

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import TypewriterText from './TypewriterText';
import type { SlideContent } from '@/src/types';

interface RiddleSlideProps {
  slide: SlideContent;
}

export default function RiddleSlide({ slide }: RiddleSlideProps) {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleReveal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowAnswer(true);
    // Manual navigation - user clicks to advance
  };

  return (
    <div className="max-w-3xl w-full space-y-4 text-center my-auto">
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-black text-white drop-shadow-2xl"
      >
        {slide.title}
      </motion.h2>

      {/* Transparent PNG Character Image */}
      {slide.images && slide.images[0] && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative w-full max-w-sm mx-auto"
        >
          <div className="relative w-full h-75 md:h-87.5">
            <Image
              src={slide.images[0]}
              alt="Character"
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </div>
        </motion.div>
      )}

      <TypewriterText
        text={slide.description!}
        className="text-base md:text-lg text-white/90 drop-shadow-lg font-medium px-4"
        delay={0.3}
        speed={0.003}
      />

      {/* Reveal Answer Button or Answer Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="pt-4"
      >
        {!showAnswer ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleReveal}
            className="px-8 py-4 bg-white/20 backdrop-blur-md text-white rounded-full text-lg font-bold shadow-2xl hover:bg-white/30 transition-all border-2 border-white/40"
          >
            Lihat Jawabannya 👀
          </motion.button>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="space-y-4"
          >
            <div className="text-5xl">🫵😎</div>
            <p className="text-2xl md:text-3xl font-black text-white drop-shadow-2xl">
              JAWABANNYA LU YANG ULTAH HARI INI!!
            </p>
            <p className="text-lg md:text-xl text-white/90 drop-shadow-lg">
              (Siapa lagi coba?)
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
