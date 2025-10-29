import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const MotionDiv = motion.div;

interface DataPoint {
  id: string;
  value: string;
  delay: number;
  duration: number;
}

export function AIDataStream({ className = "" }: { className?: string }) {
  const [dataPoints, setDataPoints] = useState<DataPoint[]>([]);

  useEffect(() => {
    const aiTerms = [
      'ANALYZE', 'PROCESS', 'LEARN', 'ADAPT', 'OPTIMIZE', 'PREDICT', 
      'AUTOMATE', 'INSIGHT', 'PATTERN', 'NEURAL', 'AI', 'ML',
      'EXPLAIN→ACT→INSIGHT', 'AGENTIC', 'GOVERNED', 'SYSTEM-AGNOSTIC'
    ];

    const generateDataPoints = () => {
      return aiTerms.map((term, index) => ({
        id: `data-${index}`,
        value: term,
        delay: Math.random() * 10,
        duration: 8 + Math.random() * 4
      }));
    };

    setDataPoints(generateDataPoints());

    // Regenerate data points every 15 seconds
    const interval = setInterval(() => {
      setDataPoints(generateDataPoints());
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Vertical Data Streams */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, streamIndex) => (
          <div
            key={streamIndex}
            className="absolute top-0 bottom-0 w-px"
            style={{ left: `${15 + streamIndex * 20}%` }}
          >
            {dataPoints.slice(streamIndex * 3, (streamIndex + 1) * 3).map((point) => (
              <MotionDiv
                key={point.id}
                className="absolute left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs font-mono rounded"
                style={{
                  background: 'linear-gradient(90deg, rgba(15,169,88,0.1) 0%, rgba(36,107,253,0.1) 100%)',
                  border: '1px solid rgba(15,169,88,0.2)',
                  color: 'var(--y-axis-green)',
                  fontSize: '10px',
                  whiteSpace: 'nowrap'
                }}
                initial={{ y: '100vh', opacity: 0 }}
                animate={{ 
                  y: '-100px', 
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: point.duration,
                  delay: point.delay,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {point.value}
              </MotionDiv>
            ))}
          </div>
        ))}
      </div>

      {/* Horizontal Data Streams */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, streamIndex) => (
          <div
            key={`horizontal-${streamIndex}`}
            className="absolute left-0 right-0 h-px"
            style={{ top: `${25 + streamIndex * 25}%` }}
          >
            <MotionDiv
              className="absolute top-1/2 transform -translate-y-1/2 px-3 py-1 text-xs font-mono rounded-full"
              style={{
                background: 'linear-gradient(90deg, rgba(36,107,253,0.1) 0%, rgba(15,169,88,0.1) 100%)',
                border: '1px solid rgba(36,107,253,0.2)',
                color: 'var(--electric-blue)',
                fontSize: '10px'
              }}
              initial={{ x: '-200px', opacity: 0 }}
              animate={{ 
                x: 'calc(100vw + 200px)', 
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 12 + streamIndex * 2,
                delay: streamIndex * 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {dataPoints[streamIndex * 5]?.value || 'PROCESSING'}
            </MotionDiv>
          </div>
        ))}
      </div>

      {/* Binary Code Rain */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(8)].map((_, colIndex) => (
          <div
            key={`binary-${colIndex}`}
            className="absolute top-0 bottom-0"
            style={{ left: `${5 + colIndex * 12}%`, width: '20px' }}
          >
            {[...Array(20)].map((_, rowIndex) => (
              <MotionDiv
                key={`binary-${colIndex}-${rowIndex}`}
                className="absolute text-xs font-mono text-y-axis-green"
                style={{ top: `${rowIndex * 30}px` }}
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: colIndex * 0.2 + rowIndex * 0.1,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              >
                {Math.random() > 0.5 ? '1' : '0'}
              </MotionDiv>
            ))}
          </div>
        ))}
      </div>

      {/* Processing Indicators */}
      <div className="absolute top-4 right-4 flex space-x-2">
        {[...Array(3)].map((_, i) => (
          <MotionDiv
            key={i}
            className="w-2 h-2 rounded-full bg-y-axis-green"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* AI Status Indicator */}
      <MotionDiv
        className="absolute bottom-4 left-4 flex items-center space-x-2 text-xs font-mono text-y-axis-green opacity-60"
        animate={{
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-2 h-2 rounded-full bg-y-axis-green animate-pulse" />
        <span>AI SYSTEM ACTIVE</span>
      </MotionDiv>
    </div>
  );
}