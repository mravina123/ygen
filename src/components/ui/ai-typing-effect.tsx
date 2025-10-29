import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const MotionSpan = motion.span;

interface AITypingEffectProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
  className?: string;
  cursorClassName?: string;
}

export function AITypingEffect({ 
  texts, 
  speed = 100, 
  deleteSpeed = 50, 
  pauseDuration = 2000,
  className = "",
  cursorClassName = "text-y-axis-green"
}: AITypingEffectProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;

    const currentText = texts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setIsPaused(true);
        }
      }
    }, isPaused ? pauseDuration : isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, isPaused, texts, speed, deleteSpeed, pauseDuration]);

  return (
    <span className={className}>
      <span>{displayText}</span>
      <MotionSpan
        className={`inline-block ml-1 ${cursorClassName}`}
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        |
      </MotionSpan>
    </span>
  );
}

export function AIProcessingText({ className = "" }: { className?: string }) {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev.length >= 3) return '';
        return prev + '.';
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.span 
      className={`font-mono text-sm ${className}`}
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      Processing{dots}
    </motion.span>
  );
}

export function AIGlitchText({ 
  text, 
  className = "",
  glitchIntensity = 0.1 
}: { 
  text: string; 
  className?: string;
  glitchIntensity?: number;
}) {
  const [glitchText, setGlitchText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?`~';

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < glitchIntensity) {
        setIsGlitching(true);
        
        // Create glitch effect
        const glitched = text.split('').map(char => {
          if (Math.random() < 0.1) {
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          }
          return char;
        }).join('');
        
        setGlitchText(glitched);
        
        // Restore original text after brief glitch
        setTimeout(() => {
          setGlitchText(text);
          setIsGlitching(false);
        }, 50);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [text, glitchIntensity, glitchChars]);

  return (
    <motion.span 
      className={className}
      animate={isGlitching ? {
        x: [0, -2, 2, 0],
        textShadow: [
          '0 0 0 transparent',
          '2px 0 0 #ff0000, -2px 0 0 #00ffff',
          '0 0 0 transparent'
        ]
      } : {}}
      transition={{ duration: 0.1 }}
    >
      {glitchText}
    </motion.span>
  );
}