import { HeroSection } from '../ui/hero-section';
import { FeatureCard } from '../ui/feature-card';
import { KPICard } from '../ui/kpi-card';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { AnimatedBackground } from '../ui/animated-background';
import { AINeuraBackground } from '../ui/ai-neural-background';
import { AIDataStream } from '../ui/ai-data-stream';
import { AITypingEffect, AIGlitchText } from '../ui/ai-typing-effect';
import { AIHologramCard, AIDataCard } from '../ui/ai-hologram-card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  ArrowRight, 
  TrendingUp, 
  Shield, 
  Zap, 
  Target,
  BarChart3,
  Users,
  Package,
  GitBranch,
  Store,
  Truck,
  Factory,
  Hotel,
  Building2,
  CheckCircle2,
  Brain,
  Cpu,
  Network
} from 'lucide-react';
import { motion } from 'motion/react';

const MotionDiv = motion.div;
const MotionCard = motion.div;

export function HomePage() {
  const handleContactClick = () => {
    // Navigate to contact page
    const navigate = (window as any).navigate;
    if (navigate) {
      navigate('/contact');
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const handleSuiteClick = () => {
    // Navigate to suite page
    const navigate = (window as any).navigate;
    if (navigate) {
      navigate('/ascent-agents');
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className="w-full">
      {/* AI-Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-violet-200 overflow-hidden">
        {/* AI Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1645839078449-124db8a049fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3NjEzNTgyMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="AI Neural Network Background"
            className="w-full h-full object-cover opacity-30"
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/80 via-purple-100/80 to-violet-200/80" />
        </div>
        
        {/* Neural Network Background */}
        <AINeuraBackground />
        
        {/* Data Stream Overlays */}
        <AIDataStream className="opacity-40" />
        
        {/* Tech-inspired gradient orbs */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {/* Neural Network Mesh */}
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Network Connection Lines */}
            <g stroke="rgba(255, 255, 255, 0.5)" strokeWidth="1" fill="none">
              {/* Top section connections */}
              <line x1="15%" y1="15%" x2="25%" y2="20%" />
              <line x1="25%" y1="20%" x2="35%" y2="18%" />
              <line x1="35%" y1="18%" x2="45%" y2="25%" />
              <line x1="45%" y1="25%" x2="55%" y2="22%" />
              <line x1="55%" y1="22%" x2="65%" y2="28%" />
              <line x1="65%" y1="28%" x2="75%" y2="24%" />
              <line x1="75%" y1="24%" x2="85%" y2="30%" />
              <line x1="85%" y1="30%" x2="92%" y2="26%" />
              
              {/* Middle section connections */}
              <line x1="12%" y1="35%" x2="22%" y2="40%" />
              <line x1="22%" y1="40%" x2="32%" y2="38%" />
              <line x1="32%" y1="38%" x2="42%" y2="45%" />
              <line x1="42%" y1="45%" x2="52%" y2="42%" />
              <line x1="52%" y1="42%" x2="62%" y2="48%" />
              <line x1="62%" y1="48%" x2="72%" y2="44%" />
              <line x1="72%" y1="44%" x2="82%" y2="50%" />
              <line x1="82%" y1="50%" x2="90%" y2="46%" />
              
              {/* Lower section connections */}
              <line x1="18%" y1="60%" x2="28%" y2="65%" />
              <line x1="28%" y1="65%" x2="38%" y2="62%" />
              <line x1="38%" y1="62%" x2="48%" y2="68%" />
              <line x1="48%" y1="68%" x2="58%" y2="65%" />
              <line x1="58%" y1="65%" x2="68%" y2="70%" />
              <line x1="68%" y1="70%" x2="78%" y2="67%" />
              <line x1="78%" y1="67%" x2="88%" y2="72%" />
              
              {/* Vertical connections */}
              <line x1="25%" y1="20%" x2="22%" y2="40%" />
              <line x1="35%" y1="18%" x2="32%" y2="38%" />
              <line x1="45%" y1="25%" x2="42%" y2="45%" />
              <line x1="55%" y1="22%" x2="52%" y2="42%" />
              <line x1="65%" y1="28%" x2="62%" y2="48%" />
              <line x1="75%" y1="24%" x2="72%" y2="44%" />
              <line x1="22%" y1="40%" x2="28%" y2="65%" />
              <line x1="32%" y1="38%" x2="38%" y2="62%" />
              <line x1="42%" y1="45%" x2="48%" y2="68%" />
              <line x1="52%" y1="42%" x2="58%" y2="65%" />
              <line x1="62%" y1="48%" x2="68%" y2="70%" />
              <line x1="72%" y1="44%" x2="78%" y2="67%" />
              
              {/* Diagonal cross connections */}
              <line x1="15%" y1="15%" x2="28%" y2="65%" />
              <line x1="45%" y1="25%" x2="58%" y2="65%" />
              <line x1="75%" y1="24%" x2="88%" y2="72%" />
              <line x1="25%" y1="20%" x2="38%" y2="62%" />
              <line x1="55%" y1="22%" x2="68%" y2="70%" />
              <line x1="85%" y1="30%" x2="78%" y2="67%" />
              
              {/* Additional mesh connections */}
              <line x1="35%" y1="18%" x2="52%" y2="42%" />
              <line x1="45%" y1="25%" x2="32%" y2="38%" />
              <line x1="65%" y1="28%" x2="48%" y2="68%" />
              <line x1="75%" y1="24%" x2="58%" y2="65%" />
            </g>
            
            {/* Network Nodes (dots) */}
            <g filter="url(#glow)">
              {/* Top row nodes */}
              <circle cx="15%" cy="15%" r="4" fill="rgba(255, 255, 255, 0.9)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="25%" cy="20%" r="4" fill="rgba(255, 255, 255, 0.9)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2.3s" repeatCount="indefinite" />
              </circle>
              <circle cx="35%" cy="18%" r="4" fill="rgba(255, 255, 255, 0.9)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="45%" cy="25%" r="4" fill="rgba(255, 255, 255, 0.9)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2.1s" repeatCount="indefinite" />
              </circle>
              <circle cx="55%" cy="22%" r="4" fill="rgba(255, 255, 255, 0.9)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="65%" cy="28%" r="4" fill="rgba(255, 255, 255, 0.9)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="1.9s" repeatCount="indefinite" />
              </circle>
              <circle cx="75%" cy="24%" r="4" fill="rgba(255, 255, 255, 0.9)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="85%" cy="30%" r="4" fill="rgba(255, 255, 255, 0.9)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <circle cx="92%" cy="26%" r="4" fill="rgba(255, 255, 255, 0.9)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2.0s" repeatCount="indefinite" />
              </circle>
              
              {/* Middle row nodes */}
              <circle cx="12%" cy="35%" r="4" fill="rgba(255, 255, 255, 0.9)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2.6s" repeatCount="indefinite" />
              </circle>
              <circle cx="22%" cy="40%" r="4" fill="rgba(255, 255, 255, 0.9)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2.1s" repeatCount="indefinite" />
              </circle>
              <circle cx="32%" cy="38%" r="4" fill="rgba(255, 255, 255, 0.9)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="1.7s" repeatCount="indefinite" />
              </circle>
              <circle cx="42%" cy="45%" r="4" fill="rgba(255, 255, 255, 0.9)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2.3s" repeatCount="indefinite" />
              </circle>
              <circle cx="52%" cy="42%" r="4" fill="rgba(255, 255, 255, 0.9)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2.0s" repeatCount="indefinite" />
              </circle>
              <circle cx="62%" cy="48%" r="4" fill="rgba(255, 255, 255, 0.9)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <circle cx="72%" cy="44%" r="4" fill="rgba(255, 255, 255, 0.9)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="1.9s" repeatCount="indefinite" />
              </circle>
              <circle cx="82%" cy="50%" r="4" fill="rgba(255, 255, 255, 0.9)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="90%" cy="46%" r="4" fill="rgba(255, 255, 255, 0.9)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
              </circle>
              
              {/* Bottom row nodes */}
              <circle cx="18%" cy="60%" r="4" fill="rgba(255, 255, 255, 0.9)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2.1s" repeatCount="indefinite" />
              </circle>
              <circle cx="28%" cy="65%" r="4" fill="rgba(255, 255, 255, 0.9)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="38%" cy="62%" r="4" fill="rgba(255, 255, 255, 0.9)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <circle cx="48%" cy="68%" r="4" fill="rgba(255, 255, 255, 0.9)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2.0s" repeatCount="indefinite" />
              </circle>
              <circle cx="58%" cy="65%" r="4" fill="rgba(255, 255, 255, 0.9)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2.3s" repeatCount="indefinite" />
              </circle>
              <circle cx="68%" cy="70%" r="4" fill="rgba(255, 255, 255, 0.9)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="1.9s" repeatCount="indefinite" />
              </circle>
              <circle cx="78%" cy="67%" r="4" fill="rgba(255, 255, 255, 0.9)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="88%" cy="72%" r="4" fill="rgba(255, 255, 255, 0.9)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2.2s" repeatCount="indefinite" />
              </circle>
            </g>
          </svg>
          
          {/* Wireframe AI Head */}
          <motion.div 
            className="absolute left-[8%] top-1/2 transform -translate-y-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <svg width="280" height="350" viewBox="0 0 280 350" xmlns="http://www.w3.org/2000/svg">
              <g stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1" fill="none">
                {/* Head outline - side profile */}
                <path d="M 140 50 Q 180 60 200 100 Q 210 140 200 180 Q 190 220 160 250 Q 140 270 100 280 Q 80 250 70 200 Q 65 150 80 100 Q 100 60 140 50 Z" />
                
                {/* Face features - geometric */}
                <ellipse cx="120" cy="130" rx="8" ry="10" />
                <line x1="100" y1="170" x2="140" y2="175" />
                <path d="M 95 100 Q 110 95 125 100" />
                
                {/* Geometric face structure */}
                <path d="M 140 50 L 120 80 L 100 110 L 90 140 L 85 170 L 90 200 L 100 230 L 120 260 L 140 280" />
                <path d="M 140 50 L 160 75 L 175 100 L 185 130 L 190 160 L 185 190 L 170 220 L 150 250 L 140 280" />
                
                {/* Horizontal face lines */}
                <line x1="85" y1="90" x2="175" y2="90" opacity="0.3" />
                <line x1="80" y1="130" x2="185" y2="130" opacity="0.3" />
                <line x1="85" y1="170" x2="180" y2="170" opacity="0.3" />
                <line x1="90" y1="210" x2="170" y2="210" opacity="0.3" />
                
                {/* Polygonal sections */}
                <polygon points="100,70 140,50 160,75 130,90" opacity="0.2" />
                <polygon points="90,110 130,90 160,100 125,125" opacity="0.2" />
                <polygon points="85,150 125,125 165,135 120,155" opacity="0.2" />
                <polygon points="85,190 120,165 160,175 115,195" opacity="0.2" />
                <polygon points="95,230 115,205 150,215 125,240" opacity="0.2" />
                
                {/* Tech details */}
                <circle cx="120" cy="130" r="3" fill="rgba(255, 255, 255, 0.7)">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="100" cy="90" r="2" fill="rgba(255, 255, 255, 0.6)">
                  <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="160" cy="100" r="2" fill="rgba(255, 255, 255, 0.6)">
                  <animate attributeName="opacity" values="0.4;0.9;0.4" dur="1.8s" repeatCount="indefinite" />
                </circle>
              </g>
            </svg>
          </motion.div>
        </div>
        
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-4 flex items-center justify-center space-x-3">
              <motion.div
                className="w-2 h-2 bg-y-axis-green rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-mono text-y-axis-green uppercase tracking-wider">AI POWERED</span>
              <motion.div
                className="w-2 h-2 bg-electric-blue rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </div>
            
            <h1 className="mb-6 text-5xl md:text-7xl tracking-tight">
              <AIGlitchText text="Built to build your Y-axis" glitchIntensity={0.05} />
            </h1>
            
            <div className="mb-8 text-xl md:text-2xl font-medium text-muted-foreground">
              <AITypingEffect 
                texts={[
                  "From Explain → Act → Insight",
                  "AI that Works Beside You",
                  "Governed Agentic Intelligence"
                ]}
                speed={150}
                deleteSpeed={75}
                pauseDuration={3000}
                className="font-semibold"
              />
            </div>
            
            <p className="mb-12 text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              <span className="bg-gradient-to-r from-y-axis-green to-electric-blue bg-clip-text text-transparent font-semibold">
                Governed, system-agnostic Agentic AI
              </span> that works beside your team to turn every decision into action.
            </p>
            
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg"
                  onClick={handleContactClick}
                  className="relative px-12 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  style={{ 
                    borderRadius: '16px',
                    backgroundColor: 'var(--y-axis-green)',
                    color: 'white'
                  }}
                >
                  <span className="relative z-10">Contact Us</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    (window as any).navigate('/pricing');
                    setTimeout(() => {
                      document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="relative border-2 px-12 py-4 text-lg transition-all duration-300 overflow-hidden group backdrop-blur-sm"
                  style={{ 
                    borderRadius: '16px',
                    borderColor: 'var(--slate-ink)',
                    color: 'var(--slate-ink)',
                    background: 'rgba(255, 255, 255, 0.8)'
                  }}
                >
                  <span className="relative z-10 flex items-center">
                    <Brain className="mr-2 h-4 w-4" />
                    Try Free
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-y-axis-green/10 to-electric-blue/10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
            </MotionDiv>
          </MotionDiv>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-8 text-4xl md:text-5xl">What is Ascent Agents Suite</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Built on three foundational pillars that make AI work for your business: seamless workflow integration, enterprise governance, and universal system compatibility.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Explain→Act→Insight",
                description: "A complete workflow where agents analyze your data to explain what's happening, take governed actions with your approval, and generate insights from every decision made.",
                icon: Brain,
                bgColor: 'var(--y-axis-green)',
                iconColor: 'var(--y-axis-green)',
                delay: 0
              },
              {
                title: "Governed Agents", 
                description: "Role-based permissions, approval workflows, and complete audit trails ensure every agent action is transparent, accountable, and aligned with your business policies.",
                icon: Shield,
                bgColor: 'var(--electric-blue)',
                iconColor: 'var(--electric-blue)',
                delay: 0.2
              },
              {
                title: "System-agnostic",
                description: "Seamlessly integrates with your existing ERP, CRM, POS, PMS, and other business systems without requiring costly replacements or major overhauls.",
                icon: Network,
                bgColor: 'var(--success)',
                iconColor: 'var(--success)',
                delay: 0.4
              }
            ].map((pillar, index) => (
              <MotionCard
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: pillar.delay }}
                viewport={{ once: true }}
                className="group"
              >
                <AIHologramCard glowColor={pillar.bgColor}>
                  <div className="p-10 text-center">
                    <motion.div 
                      className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-2xl relative"
                      style={{ backgroundColor: `${pillar.bgColor}10` }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <pillar.icon className="h-10 w-10 relative z-10" style={{ color: pillar.iconColor }} />
                      
                      {/* AI Processing Ring */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100"
                        style={{ borderColor: pillar.iconColor }}
                        animate={{
                          rotate: [0, 360]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      
                      {/* Pulse effect */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl"
                        style={{ backgroundColor: pillar.bgColor }}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0, 0.2, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                      />
                    </motion.div>
                    
                    <h3 className="mb-6 text-2xl font-semibold">{pillar.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                    
                    {/* AI Status Indicator */}
                    <motion.div 
                      className="mt-6 flex items-center justify-center space-x-2 text-xs font-mono opacity-60"
                      style={{ color: pillar.iconColor }}
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: pillar.iconColor }}
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      <span>ACTIVE</span>
                    </motion.div>
                  </div>
                </AIHologramCard>
              </MotionCard>
            ))}
          </div>

          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <Button 
              variant="outline"
              onClick={handleSuiteClick}
              className="border-2 px-8 py-3 text-lg transition-all duration-300"
              style={{ 
                borderRadius: '12px',
                borderColor: 'var(--y-axis-green)',
                color: 'var(--y-axis-green)'
              }}
            >
              Learn More About Suite
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </MotionDiv>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-32 bg-gradient-to-b from-muted to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-8 text-4xl md:text-5xl">AI Agents Built for Business</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              System-agnostic agents that integrate with your existing ERP, CRM, POS, and PMS systems.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Finance Agent",
                description: "Close the books on busywork. Automate reconciliations, dunning, and policy-aware journal suggestions.",
                icon: BarChart3,
                href: "/products/finance-agent",
                delay: 0,
                aiFeature: "ML-Powered Reconciliation"
              },
              {
                title: "Sales Agent",
                description: "Pipeline hygiene on autopilot. Next-best actions, deal risk scoring, and CRM hygiene coaching.",
                icon: Users,
                href: "/products/sales-agent",
                delay: 0.1,
                aiFeature: "Predictive Pipeline Analysis"
              },
              {
                title: "Inventory Agent",
                description: "Stock less. Ship more. Demand forecasting, auto-reorder policies, and shrinkage alerts.",
                icon: Package,
                href: "/products/inventory-agent",
                delay: 0.2,
                aiFeature: "Demand Forecasting AI"
              },
              {
                title: "Integration Agent",
                description: "Integrations that don't sprawl. Maps, monitors, and heals data flows across all systems.",
                icon: GitBranch,
                href: "/products/integration-agent",
                delay: 0.3,
                aiFeature: "Self-Healing Integrations"
              }
            ].map((product, index) => (
              <MotionCard
                key={product.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: product.delay }}
                viewport={{ once: true }}
                className="group"
                style={{ minHeight: '380px', display: 'flex' }}
              >
                <AIHologramCard hoverScale={1.08} className="w-full">
                  <div className="p-8 text-center flex flex-col justify-between" style={{ minHeight: '340px' }}>
                    {/* AI Badge */}
                    <div className="absolute top-4 right-4">
                      <motion.div 
                        className="px-2 py-1 bg-gradient-to-r from-y-axis-green/20 to-electric-blue/20 rounded-full text-xs font-mono text-y-axis-green border border-y-axis-green/30"
                        animate={{ 
                          boxShadow: [
                            '0 0 0 0 rgba(15, 169, 88, 0)',
                            '0 0 0 4px rgba(15, 169, 88, 0.1)',
                            '0 0 0 0 rgba(15, 169, 88, 0)'
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      >
                        AI
                      </motion.div>
                    </div>
                    
                    <motion.div 
                      className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl relative"
                      style={{ backgroundColor: 'var(--y-axis-green)10' }}
                      whileHover={{ 
                        rotateY: 10,
                        rotateX: 10
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <product.icon className="h-8 w-8 relative z-10" style={{ color: 'var(--y-axis-green)' }} />
                      
                      {/* Circuit-like connections */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute top-2 left-2 w-2 h-2 border-l border-t border-y-axis-green/50"></div>
                        <div className="absolute top-2 right-2 w-2 h-2 border-r border-t border-y-axis-green/50"></div>
                        <div className="absolute bottom-2 left-2 w-2 h-2 border-l border-b border-y-axis-green/50"></div>
                        <div className="absolute bottom-2 right-2 w-2 h-2 border-r border-b border-y-axis-green/50"></div>
                      </div>
                      
                      {/* Rotating ring */}
                      <motion.div
                        className="absolute inset-0 rounded-xl border border-y-axis-green/30 opacity-0 group-hover:opacity-100"
                        animate={{
                          rotate: [0, 360]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </motion.div>
                    
                    <h3 className="mb-4 text-xl font-semibold transition-colors duration-300">
                      {product.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">
                      {product.description}
                    </p>
                    
                    {/* AI Feature Tag */}
                    <motion.div 
                      className="inline-flex items-center text-xs font-mono text-electric-blue bg-electric-blue/10 px-3 py-1 rounded-full border border-electric-blue/20"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Cpu className="w-3 h-3 mr-1" />
                      {product.aiFeature}
                    </motion.div>
                  </div>
                </AIHologramCard>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-8 text-4xl md:text-5xl">Built for Your Industry</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Tailored solutions for the unique challenges across different sectors.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: 'Retail', icon: Store, href: '/outcomes#retail' },
              { name: 'Distribution', icon: Truck, href: '/outcomes#distribution' },
              { name: 'Manufacturing', icon: Factory, href: '/outcomes#manufacturing' },
              { name: 'Hospitality', icon: Hotel, href: '/outcomes#hospitality' },
              { name: 'Financial Services', icon: Building2, href: '/outcomes#financial' },
            ].map((industry, index) => (
              <MotionCard
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-500 bg-white">
                  <CardContent className="p-8 text-center">
                    <industry.icon className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" style={{ color: 'var(--y-axis-green)' }} />
                    <h3 className="font-medium text-foreground transition-colors duration-300">
                      {industry.name}
                    </h3>
                  </CardContent>
                </Card>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Business Outcomes */}
      <section className="py-32 bg-gradient-to-b from-muted to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-8 text-4xl md:text-5xl">Measurable Business Impact</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Pilot-based targets that demonstrate real ROI. Results vary by data quality and processes.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "AR Days Reduction",
                value: "12-20%",
                change: "↓ 15 days avg",
                trend: "down" as const,
                description: "Faster collections and improved cash flow",
                icon: TrendingUp,
                delay: 0
              },
              {
                title: "Inventory Holding Cost",
                value: "8-12%",
                change: "↓ $50K+ annually",
                trend: "down" as const,
                description: "Optimized stock levels and reduced waste",
                icon: Package,
                delay: 0.1
              },
              {
                title: "Sales Close Rate",
                value: "10-15%",
                change: "↑ 23% improvement",
                trend: "up" as const,
                description: "Better pipeline management and follow-through",
                icon: Target,
                delay: 0.2
              },
              {
                title: "Integration Cycle Time",
                value: "60-80%",
                change: "↓ 2-3 weeks faster",
                trend: "down" as const,
                description: "Automated mapping and faster deployments",
                icon: Zap,
                delay: 0.3
              }
            ].map((kpi, index) => (
              <MotionCard
                key={kpi.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: kpi.delay }}
                viewport={{ once: true }}
                className="group"
              >
                <AIDataCard {...kpi} />
              </MotionCard>
            ))}
          </div>

          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <p className="text-muted-foreground mb-8">
              * Targets based on pilots; actual results vary by data quality and processes.
            </p>
            <Button 
              className="px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ 
                borderRadius: '12px',
                backgroundColor: 'var(--y-axis-green)',
                color: 'white'
              }}
              onClick={() => (window as any).navigate('/outcomes')}
            >
              View Detailed Outcomes
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </MotionDiv>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-8 text-4xl md:text-5xl">Security & Governance by Default</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Built on Azure with enterprise-grade security, compliance, and governance controls.
            </p>
          </MotionDiv>

          <MotionCard
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="max-w-5xl mx-auto border-0 shadow-xl bg-white">
              <CardContent className="p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {[
                    {
                      icon: Shield,
                      title: "Azure-Powered",
                      description: "Enterprise security with data residency options across PH, SG, and US regions.",
                      delay: 0
                    },
                    {
                      icon: Users,
                      title: "Human-in-the-Loop",
                      description: "Role-based permissions with approval workflows for all agent actions.",
                      delay: 0.1
                    },
                    {
                      icon: TrendingUp,
                      title: "Full Audit Trail",
                      description: "Complete transparency with detailed logs of every decision and action.",
                      delay: 0.2
                    }
                  ].map((feature) => (
                    <MotionDiv
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: feature.delay }}
                      viewport={{ once: true }}
                      className="text-center group"
                    >
                      <div 
                        className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl group-hover:scale-110 transition-all duration-300"
                        style={{ backgroundColor: 'var(--y-axis-green)10' }}
                      >
                        <feature.icon className="h-8 w-8 group-hover:text-white transition-colors duration-300" style={{ color: 'var(--y-axis-green)' }} />
                      </div>
                      <h3 className="font-semibold text-foreground mb-4 text-xl transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </MotionDiv>
                  ))}
                </div>
                
                <div className="mt-12 text-center">
                  <Button 
                    variant="outline"
                    className="border-2 px-8 py-3 text-lg transition-all duration-300"
                    style={{ 
                      borderRadius: '12px',
                      borderColor: 'var(--y-axis-green)',
                      color: 'var(--y-axis-green)'
                    }}
                    onClick={() => (window as any).navigate('/security')}
                  >
                    Learn About Security
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </MotionCard>
        </div>
      </section>

      {/* About Snippet - The Story Behind yGen */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">Meet the Founders</h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              A father-and-son team bringing deep enterprise expertise and technical innovation to AI-powered business transformation.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Patrick Yuson */}
            <MotionDiv
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl mb-3">Patrick Yuson</h3>
                  <p className="text-muted-foreground text-sm mb-4 uppercase tracking-wide">Co-Founder & CEO</p>
                  <p className="text-foreground leading-relaxed mb-4">
                    Patrick brings 8+ years of tech entrepreneurship and strategic partnerships with leading enterprise clients across Southeast Asia and Europe. He previously built and scaled technology solutions serving Fortune 500 companies and has led successful go-to-market strategies in the Philippines, Singapore, and Germany.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    A graduate of <span className="font-semibold">TU Clausthal (TUC), Germany</span>, Patrick combines technical depth with business acumen, having worked with major retail, manufacturing, and hospitality enterprises to implement AI-driven operational improvements.
                  </p>
                </CardContent>
              </Card>
            </MotionDiv>

            {/* Mel Yuson */}
            <MotionDiv
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl mb-3">Mel Yuson</h3>
                  <p className="text-muted-foreground text-sm mb-4 uppercase tracking-wide">Co-Founder & CTO</p>
                  <p className="text-foreground leading-relaxed mb-4">
                    With 30+ years of enterprise solutions architecture and systems integration experience, Mel has architected mission-critical systems for multinational corporations across retail, distribution, manufacturing, and financial services sectors.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Mel's deep expertise in ERP implementations (SAP, Oracle, Microsoft Dynamics), CRM platforms, and complex system integrations provides the foundation for yGen's system-agnostic approach. His work with enterprise clients has included designing scalable solutions for organizations with 1,000+ employees and multi-country operations.
                  </p>
                </CardContent>
              </Card>
            </MotionDiv>
          </div>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-foreground text-lg md:text-xl mb-8 max-w-5xl mx-auto leading-relaxed">
              Together, they're introducing governed AI agents to Philippine businesses first, helping leaders anticipate disruption and convert it into a competitive advantage-backed by proven enterprise delivery and technical excellence.
            </p>
            <Button 
              variant="outline"
              className="border-2 px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ 
                borderRadius: '12px',
                borderColor: 'var(--y-axis-green)',
                color: 'var(--y-axis-green)'
              }}
              onClick={() => {
                (window as any).navigate('/about');
                setTimeout(() => {
                  const element = document.getElementById('story');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }}
            >
              Learn More About Our Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </MotionDiv>
        </div>
      </section>

      {/* CTA Band - Contact Us / Try Free */}
      <section className="py-32 bg-muted">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 text-4xl md:text-6xl">
              Ascend or be left behind
            </h2>
            
            <p className="text-muted-foreground text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
              Join the businesses already transforming their operations with{' '}
              <span className="bg-gradient-to-r from-y-axis-green to-electric-blue bg-clip-text text-transparent font-semibold">
                Agentic AI
              </span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                className="px-12 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ 
                  borderRadius: '16px',
                  backgroundColor: 'var(--y-axis-green)',
                  color: 'white'
                }}
                onClick={() => (window as any).navigate('/contact')}
              >
                Contact Us
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-2 px-12 py-4 text-lg transition-all duration-300"
                style={{ 
                  borderRadius: '16px',
                  borderColor: 'var(--slate-ink)',
                  color: 'var(--slate-ink)'
                }}
                onClick={() => {
                  (window as any).navigate('/pricing');
                  setTimeout(() => {
                    document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                Try Free
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
}