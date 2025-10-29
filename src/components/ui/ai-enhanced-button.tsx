import { motion } from 'motion/react';
import { Button, ButtonProps } from './button';
import { cn } from './utils';
import { ReactNode } from 'react';

interface AIEnhancedButtonProps extends ButtonProps {
  children: ReactNode;
  aiEffect?: 'glow' | 'pulse' | 'neural' | 'matrix';
  glowColor?: string;
}

export function AIEnhancedButton({ 
  children, 
  className,
  aiEffect = 'glow',
  glowColor = 'var(--y-axis-green)',
  ...props 
}: AIEnhancedButtonProps) {
  const MotionButton = motion.div;

  return (
    <MotionButton
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative group"
    >
      <Button 
        className={cn(
          "relative overflow-hidden transition-all duration-300",
          aiEffect === 'glow' && "shadow-lg hover:shadow-xl",
          className
        )}
        {...props}
      >
        {/* AI Status Indicator */}
        <motion.div
          className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100"
          style={{ backgroundColor: glowColor }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Button Content */}
        <span className="relative z-10">{children}</span>

        {/* Hover Effect Overlays */}
        {aiEffect === 'glow' && (
          <motion.div
            className="absolute inset-0 rounded-inherit opacity-0 group-hover:opacity-100"
            style={{
              background: `linear-gradient(45deg, ${glowColor}20, transparent, ${glowColor}20)`
            }}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}

        {aiEffect === 'neural' && (
          <>
            {/* Neural connection lines */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div 
                className="absolute top-2 left-2 w-4 h-4 border-l border-t opacity-50"
                style={{ borderColor: glowColor }}
              />
              <div 
                className="absolute top-2 right-2 w-4 h-4 border-r border-t opacity-50"
                style={{ borderColor: glowColor }}
              />
              <div 
                className="absolute bottom-2 left-2 w-4 h-4 border-l border-b opacity-50"
                style={{ borderColor: glowColor }}
              />
              <div 
                className="absolute bottom-2 right-2 w-4 h-4 border-r border-b opacity-50"
                style={{ borderColor: glowColor }}
              />
            </div>
          </>
        )}

        {aiEffect === 'matrix' && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        )}

        {aiEffect === 'pulse' && (
          <motion.div
            className="absolute inset-0 rounded-inherit border-2 opacity-0 group-hover:opacity-100"
            style={{ borderColor: glowColor }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </Button>
    </MotionButton>
  );
}