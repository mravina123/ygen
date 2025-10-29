import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  ArrowRight, 
  TrendingDown,
  Network,
  Globe,
  Settings,
  CheckCircle2,
  Zap,
  Activity,
  Shield,
  Target,
  Database,
  Cloud,
  GitBranch,
  MapPin,
  FileText,
  Cpu,
  BarChart3,
  Workflow,
  Link,
  Layers,
  RefreshCw,
  AlertCircle,
  Puzzle,
  Binary
} from 'lucide-react';
import { motion } from 'motion/react';

const MotionDiv = motion.div;
const MotionCard = motion.div;

export function IntegrationAgentPage() {
  return (
    <div className="w-full">
      {/* Hero Section - Blue to Teal-Green Gradient */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #6CA8FF 0%, #24C9A5 100%)' }}>
        {/* Interconnected Nodes + Flow Paths */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* Connection Lines */}
            <line x1="20%" y1="30%" x2="40%" y2="50%" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="40%" y1="50%" x2="60%" y2="40%" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="60%" y1="40%" x2="80%" y2="60%" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="20%" y1="70%" x2="40%" y2="50%" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="60%" y1="40%" x2="70%" y2="25%" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeDasharray="5,5" />
            
            {/* Nodes */}
            <circle cx="20%" cy="30%" r="8" fill="rgba(255,255,255,0.6)" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />
            <circle cx="40%" cy="50%" r="10" fill="rgba(255,255,255,0.7)" stroke="rgba(255,255,255,0.9)" strokeWidth="2" />
            <circle cx="60%" cy="40%" r="9" fill="rgba(255,255,255,0.65)" stroke="rgba(255,255,255,0.85)" strokeWidth="2" />
            <circle cx="80%" cy="60%" r="7" fill="rgba(255,255,255,0.55)" stroke="rgba(255,255,255,0.75)" strokeWidth="2" />
            <circle cx="20%" cy="70%" r="6" fill="rgba(255,255,255,0.5)" stroke="rgba(255,255,255,0.7)" strokeWidth="2" />
            <circle cx="70%" cy="25%" r="7" fill="rgba(255,255,255,0.55)" stroke="rgba(255,255,255,0.75)" strokeWidth="2" />
          </svg>
          
          {/* Animated Flow Particles */}
          <div className="absolute top-[30%] left-[20%] w-2 h-2 rounded-full bg-white opacity-70 animate-pulse"></div>
          <div className="absolute top-[50%] left-[40%] w-2.5 h-2.5 rounded-full bg-white opacity-80 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-[40%] left-[60%] w-2 h-2 rounded-full bg-white opacity-75 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center py-32">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl tracking-tight text-slate-900">
              Integrations that don't sprawl.
            </h1>
            <p className="mb-12 text-xl md:text-2xl text-slate-800 max-w-3xl mx-auto leading-relaxed">
              An agent that maps, monitors, and heals data flows—across ERP/CRM/POS/PMS.
            </p>
            
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                size="lg"
                className="px-10 py-6 text-lg shadow-md hover:shadow-xl transition-all duration-300"
                style={{ 
                  borderRadius: '24px',
                  backgroundColor: '#9B7CFF',
                  color: 'white'
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
            </MotionDiv>
          </MotionDiv>
        </div>
      </section>

      {/* Key Outcomes Section */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-8 text-4xl md:text-5xl">Integration Excellence Delivered</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Dramatic efficiency improvements from teams using Integration Agent in pilot programs.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {[
              {
                metric: "Integration Cycle Time",
                improvement: "↓ 60–80%",
                description: "Faster deployment of new integrations through automated mapping and policy generation from natural language requirements",
                icon: TrendingDown,
                color: 'var(--success)',
                delay: 0
              },
              {
                metric: "Manual Handoffs",
                improvement: "↓ 50–70%",
                description: "Reduced manual intervention through intelligent monitoring, auto-healing suggestions, and proactive flow health management",
                icon: Workflow,
                color: 'var(--info)',
                delay: 0.1
              }
            ].map((outcome, index) => (
              <MotionCard
                key={outcome.metric}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: outcome.delay }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white group-hover:scale-105">
                  <CardContent className="p-12 text-center">
                    <div 
                      className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-2xl group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${outcome.color}10` }}
                    >
                      <outcome.icon className="h-12 w-12" style={{ color: outcome.color }} />
                    </div>
                    <div className="mb-4 text-6xl font-bold" style={{ color: outcome.color }}>
                      {outcome.improvement}
                    </div>
                    <h3 className="mb-6 text-3xl font-semibold">{outcome.metric}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {outcome.description}
                    </p>
                  </CardContent>
                </Card>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gradient-to-b from-muted to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-8 text-4xl md:text-5xl">Intelligent Integration Orchestration</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              AI-powered features that simplify complex integrations and keep your data flows healthy.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Canonical Model Mapping",
                description: "Automatically creates unified data models across disparate systems, resolving field conflicts and data type mismatches with intelligent transformation suggestions.",
                icon: MapPin,
                features: ["Schema reconciliation", "Data type mapping", "Conflict resolution", "Version control"],
                delay: 0
              },
              {
                title: "Policy/Rule Generation from Natural Language",
                description: "Convert business requirements written in plain English into executable integration policies and transformation rules without technical coding.",
                icon: FileText,
                features: ["Natural language processing", "Rule generation", "Business logic translation", "Policy validation"],
                delay: 0.1
              },
              {
                title: "Flow Health & Auto‑Healing Suggestions",
                description: "Continuous monitoring of data flows with proactive identification of issues and AI-generated suggestions for automatic resolution and optimization.",
                icon: Activity,
                features: ["Real-time monitoring", "Anomaly detection", "Auto-healing recommendations", "Performance optimization"],
                delay: 0.2
              }
            ].map((feature, index) => (
              <MotionCard
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: feature.delay }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white">
                  <CardContent className="p-8">
                    <div 
                      className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl group-hover:scale-110 transition-all duration-300"
                      style={{ backgroundColor: 'var(--info)10' }}
                    >
                      <feature.icon className="h-8 w-8" style={{ color: 'var(--info)' }} />
                    </div>
                    <h3 className="mb-4 text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle2 className="h-3 w-3 mr-2 text-info flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* System Types Section */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-8 text-4xl md:text-5xl">Connects Everything</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              System-agnostic by design. Bridges the gap between all your business-critical systems.
            </p>
          </MotionDiv>

          <div className="max-w-6xl mx-auto">
            <MotionDiv
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-xl bg-white">
                <CardContent className="p-12">
                  {/* System Categories */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {[
                      {
                        category: "ERP",
                        systems: ["SAP", "Oracle", "NetSuite", "D365"],
                        icon: Database,
                        color: 'var(--success)'
                      },
                      {
                        category: "CRM",
                        systems: ["Salesforce", "HubSpot", "Pipedrive", "Zoho"],
                        icon: Globe,
                        color: 'var(--electric-blue)'
                      },
                      {
                        category: "POS",
                        systems: ["Square", "Shopify", "Toast", "Clover"],
                        icon: Cpu,
                        color: 'var(--warning)'
                      },
                      {
                        category: "PMS",
                        systems: ["Asana", "Monday", "Jira", "Smartsheet"],
                        icon: Settings,
                        color: 'var(--info)'
                      }
                    ].map((systemType, index) => (
                      <div key={systemType.category} className="text-center">
                        <div 
                          className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-xl"
                          style={{ backgroundColor: `${systemType.color}10` }}
                        >
                          <systemType.icon className="h-8 w-8" style={{ color: systemType.color }} />
                        </div>
                        <h3 className="font-semibold text-foreground mb-3 text-xl">{systemType.category}</h3>
                        <div className="space-y-1">
                          {systemType.systems.map((system, i) => (
                            <p key={i} className="text-sm text-muted-foreground">
                              {system}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Integration Patterns */}
                  <div className="border-t border-border pt-12">
                    <h3 className="text-2xl font-semibold mb-8 text-center">Integration Patterns</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {[
                        { name: "Real-time Sync", icon: RefreshCw, color: 'var(--success)' },
                        { name: "Batch Processing", icon: Layers, color: 'var(--warning)' },
                        { name: "Event Streaming", icon: Zap, color: 'var(--info)' },
                        { name: "API Gateway", icon: Link, color: 'var(--electric-blue)' }
                      ].map((pattern, index) => (
                        <div key={pattern.name} className="text-center">
                          <div 
                            className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-lg"
                            style={{ backgroundColor: `${pattern.color}10` }}
                          >
                            <pattern.icon className="h-6 w-6" style={{ color: pattern.color }} />
                          </div>
                          <p className="text-sm font-medium">{pattern.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center border-t border-border pt-8 mt-8">
                    <p className="text-muted-foreground mb-6">
                      <strong>Universal compatibility</strong> with 500+ business systems and counting
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-2 px-8 py-3 text-lg transition-all duration-300"
                      style={{ 
                        borderRadius: '12px',
                        borderColor: 'var(--info)',
                        color: 'var(--info)'
                      }}
                    >
                      View All Integrations
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Governance Section */}
      <section className="py-32 bg-gradient-to-b from-muted to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-8 text-4xl md:text-5xl">Governed Integration Management</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Maintain control and compliance while automating complex integration workflows across your tech stack.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Change Approval",
                description: "All integration modifications, schema changes, and flow alterations require appropriate approval before implementation to maintain system stability.",
                features: ["Schema change approval", "Flow modification review", "Impact assessment"]
              },
              {
                icon: Shield,
                title: "Security & Compliance",
                description: "Built-in security policies ensure data flows comply with GDPR, HIPAA, SOX and other regulations while maintaining encryption and access controls.",
                features: ["Data encryption", "Access controls", "Compliance monitoring"]
              },
              {
                icon: BarChart3,
                title: "Integration Analytics",
                description: "Comprehensive visibility into integration performance, data quality metrics, and system health for continuous optimization and troubleshooting.",
                features: ["Performance metrics", "Data quality scores", "Health dashboards"]
              }
            ].map((feature, index) => (
              <MotionCard
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white">
                  <CardContent className="p-8">
                    <div 
                      className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl group-hover:scale-110 transition-all duration-300"
                      style={{ backgroundColor: 'var(--info)10' }}
                    >
                      <feature.icon className="h-8 w-8" style={{ color: 'var(--info)' }} />
                    </div>
                    <h3 className="mb-4 text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 mr-2 text-info" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--slate-ink)' }}>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ backgroundColor: 'var(--y-axis-green)' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ backgroundColor: 'var(--info)' }}></div>
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white mb-8 text-4xl md:text-6xl">
              Ready to unify your systems?
            </h2>
            <p className="text-white/80 text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
              Join IT teams already using AI to turn integration complexity into competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                className="px-16 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ 
                  borderRadius: '16px',
                  backgroundColor: 'var(--y-axis-green)',
                  color: 'white'
                }}
                onClick={() => {
                  (window as any).navigate('/pricing');
                  setTimeout(() => {
                    document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                Try Free
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
}