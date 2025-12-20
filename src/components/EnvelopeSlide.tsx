'use client';

/**
 * EnvelopeSlide Component
 * 
 * Interactive envelope animation that opens to reveal a letter
 */

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import confetti from 'canvas-confetti';
import type { SlideContent } from '@/src/types';

interface EnvelopeSlideProps {
  slide: SlideContent;
  onReset?: () => void;
}

export default function EnvelopeSlide({ slide, onReset }: EnvelopeSlideProps) {
  const [isOpened, setIsOpened] = useState(false);

  const handleEnvelopeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isOpened) {
      setIsOpened(true);
      
      // Trigger confetti
      const count = 200;
      const defaults = {
        origin: { y: 0.7 },
        zIndex: 9999,
      };

      function fire(particleRatio: number, opts: confetti.Options) {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio),
        });
      }

      fire(0.25, { spread: 26, startVelocity: 55 });
      fire(0.2, { spread: 60 });
      fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
      fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
      fire(0.1, { spread: 120, startVelocity: 45 });
    }
  };

  return (
    <div className="max-w-3xl w-full text-center space-y-6 my-auto">
      <AnimatePresence mode="wait">
        {!isOpened ? (
          // Closed Envelope State
          <motion.div
            key="envelope-closed"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl font-black text-white drop-shadow-2xl"
            >
              {slide.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-white/90 drop-shadow-lg"
            >
              {slide.subtitle}
            </motion.p>

            {/* Animated Envelope */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: 1, 
                y: [0, -10, 0],
              }}
              transition={{ 
                opacity: { delay: 0.6, duration: 0.6 },
                y: { 
                  repeat: Infinity, 
                  duration: 2,
                  ease: 'easeInOut'
                }
              }}
              onClick={handleEnvelopeClick}
              className="cursor-pointer inline-block"
            >
              <svg
                width="200"
                height="160"
                viewBox="0 0 200 160"
                className="drop-shadow-2xl hover:scale-110 transition-transform"
              >
                {/* Envelope body */}
                <rect
                  x="10"
                  y="40"
                  width="180"
                  height="110"
                  fill="#f4a261"
                  stroke="#e76f51"
                  strokeWidth="3"
                  rx="5"
                />
                
                {/* Envelope flap closed */}
                <motion.path
                  d="M 10 40 L 100 100 L 190 40"
                  fill="#e9c46a"
                  stroke="#e76f51"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
                
                {/* Heart seal */}
                <motion.circle
                  cx="100"
                  cy="90"
                  r="15"
                  fill="#e63946"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1.5,
                    ease: 'easeInOut'
                  }}
                />
                <text
                  x="100"
                  y="98"
                  textAnchor="middle"
                  fill="white"
                  fontSize="16"
                  fontWeight="bold"
                >
                  💌
                </text>
              </svg>
            </motion.div>
          </motion.div>
        ) : (
          // Opened Letter State
          <motion.div
            key="envelope-opened"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="space-y-6"
          >
            {/* Character Image (larger) */}
            {slide.images && slide.images[0] && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: 'spring' }}
                className="relative w-full max-w-lg mx-auto"
              >
                <div className="relative w-full h-112.5 md:h-137.5">
                  <Image
                    src={slide.images[0]}
                    alt="Birthday Character"
                    fill
                    className="object-contain"
                    priority
                    unoptimized
                  />
                </div>
              </motion.div>
            )}

            {/* Letter Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 shadow-2xl max-w-2xl mx-auto"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-lg md:text-xl text-white/95 leading-relaxed drop-shadow-lg whitespace-pre-line"
              >
                {slide.description}
              </motion.p>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex justify-center gap-4 text-4xl"
            >
              <motion.span
                animate={{ rotate: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                🎂
              </motion.span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                💜
              </motion.span>
              <motion.span
                animate={{ rotate: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 2.2 }}
              >
                🎈
              </motion.span>
            </motion.div>

            {/* Reset Button */}
            {onReset && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onReset();
                }}
                className="px-8 py-4 bg-white/20 backdrop-blur-md text-white rounded-full text-lg font-bold shadow-2xl hover:bg-white/30 transition-all border-2 border-white/40"
              >
                🔄 Mulai dari Awal
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
