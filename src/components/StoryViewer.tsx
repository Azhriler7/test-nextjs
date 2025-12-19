'use client';

/**
 * StoryViewer Component - Refactored
 * 
 * Features:
 * - Entry screen for audio autoplay compliance
 * - Background audio with mute/unmute
 * - Transparent PNG character support
 * - Typewriter effect for descriptions
 * - Instagram Story-style progress bars
 * - Smooth transitions with AnimatePresence
 */

import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Volume2, VolumeX, Play } from 'lucide-react';
import { slides, storyConfig, audioConfig } from '@/src/data/slides';
import type { SlideContent } from '@/src/types';
import Image from 'next/image';
import TypewriterText from './TypewriterText';
import RiddleSlide from './RiddleSlide';
import EnvelopeSlide from './EnvelopeSlide';

export default function StoryViewer() {
  const [showEntry, setShowEntry] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audioStarted, setAudioStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentSlide = slides[currentIndex];
  const totalSlides = slides.length;

  // Handle entry screen button click
  const handleEntryClick = () => {
    setShowEntry(false);
    setAudioStarted(true);
    
    // Start audio playback
    if (audioRef.current) {
      audioRef.current.volume = audioConfig.volume;
      audioRef.current.play().catch((error) => {
        console.log('Audio play prevented:', error);
      });
    }
  };

  // Handle mute/unmute
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Navigate to next slide
  const goToNext = useCallback(() => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex((prev) => prev + 1);
      setProgress(0);
    }
  }, [currentIndex, totalSlides]);

  // Navigate to previous slide
  const goToPrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setProgress(0);
    }
  }, [currentIndex]);

  // Auto-advance timer
  useEffect(() => {
    if (showEntry || !storyConfig.autoAdvance || isPaused || !currentSlide) return;

    const duration = currentSlide.duration || storyConfig.defaultDuration;
    const interval = 50;
    const increment = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          goToNext();
          return 0;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, currentSlide, isPaused, goToNext, showEntry]);

  // Handle click navigation
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const threshold = rect.width / 3;

    if (x < threshold) {
      goToPrevious();
    } else if (x > threshold * 2) {
      goToNext();
    }
  };

  // Trigger confetti
  const triggerConfetti = () => {
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
  };

  return (
    <>
      {/* Background Audio */}
      <audio ref={audioRef} loop>
        <source src={audioConfig.src} type="audio/mpeg" />
      </audio>

      {/* Entry Screen Overlay */}
      <AnimatePresence>
        {showEntry && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-200 bg-black flex items-center justify-center"
          >
            <div className="text-center space-y-8 px-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="text-6xl mb-4">🎂</div>
                <h1 className="text-3xl font-bold text-white mb-4">
                  Dokumen Rahasia Terdeteksi
                </h1>
                <p className="text-white/70 text-lg mb-8">
                  Klik untuk membuka data classified...
                </p>
              </motion.div>

              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleEntryClick}
                className="px-8 py-4 bg-white text-black rounded-full text-xl font-bold shadow-2xl hover:bg-gray-100 transition-all flex items-center gap-3 mx-auto"
              >
                <Play className="w-6 h-6" />
                BUKA DOKUMEN RAHASIA
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Story Viewer */}
      <div
        className="relative w-full h-dvh overflow-hidden cursor-pointer select-none"
        onClick={handleClick}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Mute/Unmute Button (Top Right) */}
        {audioStarted && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={(e) => {
              e.stopPropagation();
              toggleMute();
            }}
            className="fixed top-6 right-6 z-50 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/30 transition-colors"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <VolumeX className="w-6 h-6 text-white" />
            ) : (
              <Volume2 className="w-6 h-6 text-white" />
            )}
          </motion.button>
        )}

        {/* Dynamic Background Image */}
        <AnimatePresence mode="wait">
          {currentSlide && currentSlide.backgroundImage && (
            <motion.div
              key={`bg-${currentSlide.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 -z-10"
            >
              <div className="relative w-full h-full">
                <Image
                  src={currentSlide.backgroundImage}
                  alt={`Background ${currentSlide.id}`}
                  fill
                  priority
                  className="object-cover"
                  unoptimized
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress Bars */}
        <div className="absolute top-4 left-4 right-4 z-50 flex gap-1">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden"
            >
              <motion.div
                className="h-full bg-white rounded-full"
                initial={{ width: '0%' }}
                animate={{
                  width:
                    index < currentIndex
                      ? '100%'
                      : index === currentIndex
                      ? `${progress}%`
                      : '0%',
                }}
                transition={{ duration: 0.1 }}
              />
            </div>
          ))}
        </div>

        {/* Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="h-full flex items-center justify-center px-6 py-16 overflow-y-auto"
          >
            {currentSlide.type === 'intro' && <IntroSlide slide={currentSlide} />}
            {currentSlide.type === 'hero' && <HeroSlide slide={currentSlide} />}
            {currentSlide.type === 'riddle' && <RiddleSlide slide={currentSlide} />}
            {currentSlide.type === 'envelope' && <EnvelopeSlide slide={currentSlide} />}
            {currentSlide.type === 'finale' && (
              <FinaleSlide slide={currentSlide} onCelebrate={triggerConfetti} />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Hints */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-8 text-white/40 text-xs pointer-events-none">
          <span>← Sebelumnya</span>
          <span>Selanjutnya →</span>
        </div>
      </div>
    </>
  );
}

/**
 * Slide Components
 */

// Intro Slide (Text Only)
function IntroSlide({ slide }: { slide: SlideContent }) {
  return (
    <div className="text-center space-y-4 max-w-2xl my-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-black text-white drop-shadow-2xl"
      >
        {slide.title}
      </motion.h1>
      
      {slide.subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-white/90 drop-shadow-lg font-medium whitespace-pre-line"
        >
          {slide.subtitle}
        </motion.div>
      )}
      
      {slide.description && (
        <TypewriterText
          text={slide.description}
          className="text-lg md:text-xl text-white/90 drop-shadow-lg font-medium"
          delay={0.3}
          speed={0.003}
        />
      )}
    </div>
  );
}

// Hero Slide (With Transparent PNG Character)
function HeroSlide({ slide }: { slide: SlideContent }) {
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
        delay={0.4}
        speed={0.003}
      />
    </div>
  );
}

// Finale Slide (Grand Finale with Confetti)
function FinaleSlide({
  slide,
  onCelebrate,
}: {
  slide: SlideContent;
  onCelebrate: () => void;
}) {
  return (
    <div className="max-w-3xl w-full text-center space-y-4 my-auto">
      {/* Hero Image (Larger for finale) */}
      {slide.images && slide.images[0] && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="relative w-full max-w-md mx-auto"
        >
          <div className="relative w-full h-100 md:h-125">
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

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-3xl md:text-4xl font-black text-white drop-shadow-2xl"
      >
        {slide.title}
      </motion.h1>

      <TypewriterText
        text={slide.description!}
        className="text-base md:text-lg text-white/90 drop-shadow-lg font-medium px-6"
        delay={0.3}
        speed={0.003}
      />

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={(e) => {
          e.stopPropagation();
          onCelebrate();
        }}
        className="px-8 py-4 bg-white text-purple-600 rounded-full text-lg font-bold shadow-2xl hover:bg-gray-100 transition-all"
      >
        {slide.buttonText}
      </motion.button>
    </div>
  );
}


