import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';

const MotionDiv = motion.div;

interface AnimatedBackgroundProps {
  className?: string;
}

export function AnimatedBackground({ className = "" }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Particle system
    class Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      opacity: number;
      life: number;
      maxLife: number;

      constructor() {
        this.x = Math.random() * (canvas?.width || 800) / window.devicePixelRatio;
        this.y = (canvas?.height || 600) / window.devicePixelRatio + 20;
        this.size = Math.random() * 2 + 1;
        this.speedY = Math.random() * 0.5 + 0.2;
        this.opacity = 0;
        this.life = 0;
        this.maxLife = Math.random() * 200 + 100;
      }

      update() {
        this.y -= this.speedY;
        this.life++;

        // Fade in and out
        if (this.life < this.maxLife * 0.2) {
          this.opacity = this.life / (this.maxLife * 0.2);
        } else if (this.life > this.maxLife * 0.8) {
          this.opacity = 1 - (this.life - this.maxLife * 0.8) / (this.maxLife * 0.2);
        } else {
          this.opacity = 1;
        }

        // Reset particle if it goes off screen
        if (this.y < -20 || this.life >= this.maxLife) {
          this.y = (canvas?.height || 600) / window.devicePixelRatio + 20;
          this.x = Math.random() * (canvas?.width || 800) / window.devicePixelRatio;
          this.life = 0;
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity * 0.6;
        ctx.fillStyle = '#0FA958';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    for (let i = 0; i < 30; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);

      // Draw Y-axis grid
      ctx.save();
      ctx.strokeStyle = '#0FA958';
      ctx.globalAlpha = 0.1;
      ctx.lineWidth = 1;

      const canvasWidth = canvas.width / window.devicePixelRatio;
      const canvasHeight = canvas.height / window.devicePixelRatio;

      // Vertical lines (Y-axis emphasis)
      const verticalSpacing = 80;
      for (let x = 0; x <= canvasWidth; x += verticalSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvasHeight);
        ctx.stroke();
      }

      // Horizontal lines (fewer, more subtle)
      const horizontalSpacing = 120;
      for (let y = 0; y <= canvasHeight; y += horizontalSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvasWidth, y);
        ctx.stroke();
      }

      ctx.restore();

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Animated Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: 'multiply' }}
      />
      
      {/* Y-Axis Grid Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="y-axis-grid" width="80" height="120" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 120" fill="none" stroke="#0FA958" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#y-axis-grid)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <MotionDiv
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Animated Y-Axis Indicators */}
        {[...Array(5)].map((_, i) => (
          <MotionDiv
            key={i}
            className="absolute w-px bg-gradient-to-t from-transparent via-y-axis-green to-transparent opacity-20"
            style={{
              left: `${20 + i * 15}%`,
              height: '60%',
              top: '20%'
            }}
            animate={{
              scaleY: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </MotionDiv>

      {/* Overlay Claim Line */}
      <MotionDiv
        className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="flex items-center space-x-4 text-white/10 text-sm font-medium">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-y-axis-green opacity-50"></div>
          <span>The Y-Axis Advantage</span>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-y-axis-green opacity-50"></div>
        </div>
      </MotionDiv>

      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10"
        style={{ mixBlendMode: 'overlay' }}
      />
    </div>
  );
}