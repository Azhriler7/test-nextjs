'use client';

/**
 * TypewriterText Component
 * 
 * Animates text with a typewriter effect using Framer Motion
 * Uses key prop to reset animation when text changes
 */

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  onStart?: () => void;
  onComplete?: () => void;
}

function TypewriterTextInner({ 
  text, 
  className = '', 
  delay = 0.7,
  speed = 0.025, // Slower typing for readability
  onStart,
  onComplete
}: TypewriterTextProps & { onStart?: () => void; onComplete?: () => void }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        if (currentIndex === 0 && !hasStarted && onStart) {
          onStart();
          setHasStarted(true);
        }
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, currentIndex === 0 ? delay * 1000 : speed * 1000);

      return () => clearTimeout(timer);
    } else if (currentIndex === text.length && onComplete) {
      // Typing complete, notify parent immediately
      onComplete();
    }
  }, [text, currentIndex, delay, speed, onStart, onComplete, hasStarted]);

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {displayedText}
      {currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-0.5 h-5 bg-current ml-1"
        />
      )}
    </motion.p>
  );
}

// Wrapper component that uses key to force remount on text change
export default function TypewriterText(props: TypewriterTextProps) {
  return <TypewriterTextInner key={props.text} {...props} />;
}
