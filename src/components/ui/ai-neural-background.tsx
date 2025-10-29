import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const MotionDiv = motion.div;

interface NeuralNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
  activity: number;
  pulse: number;
}

export function AINeuraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [nodes, setNodes] = useState<NeuralNode[]>([]);

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

    // Initialize neural network nodes
    const initNodes = () => {
      const nodeCount = 25;
      const newNodes: NeuralNode[] = [];
      const canvasWidth = canvas.width / window.devicePixelRatio;
      const canvasHeight = canvas.height / window.devicePixelRatio;

      for (let i = 0; i < nodeCount; i++) {
        const node: NeuralNode = {
          x: Math.random() * canvasWidth,
          y: Math.random() * canvasHeight,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          connections: [],
          activity: Math.random(),
          pulse: Math.random() * Math.PI * 2
        };
        newNodes.push(node);
      }

      // Create connections between nearby nodes
      newNodes.forEach((node, i) => {
        newNodes.forEach((otherNode, j) => {
          if (i !== j) {
            const distance = Math.sqrt(
              Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
            );
            if (distance < 120 && Math.random() < 0.3) {
              node.connections.push(j);
            }
          }
        });
      });

      setNodes(newNodes);
      return newNodes;
    };

    let currentNodes = initNodes();

    // Animation loop
    let animationId: number;
    let time = 0;

    const animate = () => {
      const canvasWidth = canvas.width / window.devicePixelRatio;
      const canvasHeight = canvas.height / window.devicePixelRatio;
      
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      time += 0.01;

      // Update nodes
      currentNodes.forEach((node, i) => {
        // Move nodes slowly
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvasWidth) node.vx *= -1;
        if (node.y < 0 || node.y > canvasHeight) node.vy *= -1;

        // Keep nodes in bounds
        node.x = Math.max(0, Math.min(canvasWidth, node.x));
        node.y = Math.max(0, Math.min(canvasHeight, node.y));

        // Update activity and pulse
        node.activity = (Math.sin(time * 2 + i * 0.5) + 1) / 2;
        node.pulse += 0.05;
      });

      // Draw connections
      currentNodes.forEach((node, i) => {
        node.connections.forEach(connectionIndex => {
          const connectedNode = currentNodes[connectionIndex];
          if (!connectedNode) return;

          const distance = Math.sqrt(
            Math.pow(node.x - connectedNode.x, 2) + Math.pow(node.y - connectedNode.y, 2)
          );

          if (distance < 150) {
            const opacity = Math.max(0, 1 - distance / 150) * 0.3 * (node.activity + connectedNode.activity) / 2;
            
            // Create gradient for connection
            const gradient = ctx.createLinearGradient(node.x, node.y, connectedNode.x, connectedNode.y);
            gradient.addColorStop(0, `rgba(15, 169, 88, ${opacity})`); // Y-axis green
            gradient.addColorStop(0.5, `rgba(36, 107, 253, ${opacity * 0.8})`); // Electric blue
            gradient.addColorStop(1, `rgba(15, 169, 88, ${opacity})`);

            ctx.save();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1 + node.activity * 2;
            ctx.globalCompositeOperation = 'screen';
            
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(connectedNode.x, connectedNode.y);
            ctx.stroke();
            ctx.restore();

            // Add data pulse along connection
            const pulsePosition = (Math.sin(time * 3 + i * 0.3) + 1) / 2;
            const pulseX = node.x + (connectedNode.x - node.x) * pulsePosition;
            const pulseY = node.y + (connectedNode.y - node.y) * pulsePosition;
            
            ctx.save();
            ctx.fillStyle = `rgba(36, 107, 253, ${opacity * 2})`;
            ctx.globalCompositeOperation = 'screen';
            ctx.beginPath();
            ctx.arc(pulseX, pulseY, 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
        });
      });

      // Draw nodes
      currentNodes.forEach((node, i) => {
        const nodeSize = 3 + node.activity * 4;
        const glowSize = nodeSize + Math.sin(node.pulse) * 3;

        // Outer glow
        ctx.save();
        ctx.fillStyle = `rgba(15, 169, 88, ${0.1 + node.activity * 0.2})`;
        ctx.globalCompositeOperation = 'screen';
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Inner node
        ctx.save();
        ctx.fillStyle = `rgba(15, 169, 88, ${0.6 + node.activity * 0.4})`;
        ctx.globalCompositeOperation = 'screen';
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Core
        ctx.save();
        ctx.fillStyle = `rgba(255, 255, 255, ${node.activity * 0.8})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeSize * 0.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
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
    <div className="absolute inset-0 overflow-hidden">
      {/* Neural Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: 'screen' }}
      />
      
      {/* Circuit Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="circuit-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50h25v-25h50v50h-50v-25h25" fill="none" stroke="#0FA958" strokeWidth="0.5"/>
              <circle cx="25" cy="25" r="2" fill="#0FA958" opacity="0.3"/>
              <circle cx="75" cy="75" r="2" fill="#246BFD" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>

      {/* Data Stream Lines */}
      <MotionDiv className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <MotionDiv
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent opacity-30"
            style={{
              top: `${30 + i * 20}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </MotionDiv>

      {/* AI Processing Indicators */}
      <MotionDiv className="absolute top-1/4 right-1/4">
        <MotionDiv
          className="w-3 h-3 rounded-full bg-y-axis-green"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <MotionDiv
          className="absolute top-0 left-0 w-3 h-3 rounded-full border border-y-axis-green"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.8, 0, 0.8]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </MotionDiv>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/30" />
    </div>
  );
}