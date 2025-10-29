import { motion } from 'motion/react';
import { useState } from 'react';
import { Card, CardContent } from './card';

const MotionCard = motion.div;

interface AIHologramCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  hoverScale?: number;
}

export function AIHologramCard({ 
  children, 
  className = "",
  glowColor = "var(--y-axis-green)",
  hoverScale = 1.02
}: AIHologramCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MotionCard
      className={`group relative ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: hoverScale }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Hologram effect background */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div 
          className="absolute inset-0 rounded-xl blur-xl"
          style={{
            background: `linear-gradient(45deg, ${glowColor}20, transparent, ${glowColor}20)`,
            animation: 'pulse 2s infinite'
          }}
        />
      </div>

      {/* Scanning lines effect */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-y-axis-green/10 to-transparent h-8"
          animate={isHovered ? {
            y: ['-100%', '100%', '-100%']
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Corner brackets for sci-fi effect */}
      <div className="absolute inset-0 rounded-xl">
        {/* Top left */}
        <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-y-axis-green/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Top right */}
        <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-y-axis-green/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Bottom left */}
        <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-y-axis-green/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Bottom right */}
        <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-y-axis-green/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Main card */}
      <Card className="relative border-0 shadow-lg group-hover:shadow-2xl transition-all duration-300 bg-white/95 backdrop-blur-sm">
        <CardContent className="relative">
          {children}
        </CardContent>
      </Card>

      {/* Particle effect on hover */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-y-axis-green rounded-full"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            />
          ))}
        </div>
      )}
    </MotionCard>
  );
}

export function AIDataCard({ 
  title, 
  value, 
  change, 
  description, 
  icon: Icon,
  trend = "up",
  className = "" 
}: {
  title: string;
  value: string;
  change: string;
  description: string;
  icon: React.ComponentType<any>;
  trend?: "up" | "down";
  className?: string;
}) {
  return (
    <AIHologramCard className={className}>
      <div className="p-6">
        {/* Header with icon and trend */}
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 rounded-lg bg-y-axis-green/10">
            <Icon className="h-6 w-6 text-y-axis-green" />
          </div>
          <motion.div
            className={`text-sm font-mono px-2 py-1 rounded ${
              trend === 'up' ? 'bg-success/10 text-success' : 'bg-y-axis-green/10 text-y-axis-green'
            }`}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {change}
          </motion.div>
        </div>

        {/* Value with animated counter effect */}
        <motion.div 
          className="mb-2"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-3xl font-bold text-slate-ink">{value}</div>
        </motion.div>

        {/* Title */}
        <h3 className="font-semibold text-slate-ink mb-2">{title}</h3>
        
        {/* Description */}
        <p className="text-sm text-neutral-graphite">{description}</p>

        {/* AI processing indicator */}
        <div className="flex items-center mt-4 text-xs text-y-axis-green/70">
          <motion.div
            className="w-2 h-2 bg-y-axis-green rounded-full mr-2"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="font-mono">AI Analysis Active</span>
        </div>
      </div>
    </AIHologramCard>
  );
}