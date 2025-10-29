import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  ArrowRight, 
  TrendingDown,
  Clock,
  AlertTriangle,
  Calculator,
  CreditCard,
  Bell,
  BookOpen,
  BarChart3,
  CheckCircle2,
  Zap,
  Shield,
  Target
} from 'lucide-react';
import { motion } from 'motion/react';

const MotionDiv = motion.div;
const MotionCard = motion.div;

export function FinanceAgentPage() {
  return (
    <div className="w-full">
      {/* Hero Section - Lighter Blue to Violet Gradient */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #6CA8FF 0%, #9B7CFF 100%)' }}>
        {/* Ledger Grid Lines */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        ></div>
        
        {/* Glowing Nodes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-white opacity-60 shadow-lg" style={{ boxShadow: '0 0 20px 8px rgba(255, 255, 255, 0.4)' }}></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-white opacity-50 shadow-lg" style={{ boxShadow: '0 0 15px 6px rgba(255, 255, 255, 0.3)' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 rounded-full bg-white opacity-55 shadow-lg" style={{ boxShadow: '0 0 18px 7px rgba(255, 255, 255, 0.35)' }}></div>
          <div className="absolute top-2/3 right-1/4 w-2 h-2 rounded-full bg-white opacity-50 shadow-lg" style={{ boxShadow: '0 0 15px 6px rgba(255, 255, 255, 0.3)' }}></div>
        </div>
        
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center py-32">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl tracking-tight text-slate-900">
              Close the books on busywork.
            </h1>
            <p className="mb-12 text-xl md:text-2xl text-slate-800 max-w-3xl mx-auto leading-relaxed">
              Forecasts, reconciliations, and AR/AP actions—executed with governance.
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
                  backgroundColor: 'rgba(46, 216, 195, 0.6)',
                  color: '#000000',
                  border: '1px solid rgba(46, 216, 195, 0.8)'
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
            <h2 className="mb-8 text-4xl md:text-5xl">Proven Results from Our Pilots</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Real outcomes from businesses that deployed Finance Agent in pilot programs.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                metric: "AR Days",
                improvement: "↓ 12–20%",
                description: "Faster collection cycles through intelligent dunning and automated follow-ups",
                icon: TrendingDown,
                color: 'var(--y-axis-green)',
                delay: 0
              },
              {
                metric: "Exception Triage Time",
                improvement: "↓ 40–60%",
                description: "Automated categorization and routing of financial exceptions to the right teams",
                icon: Clock,
                color: 'var(--electric-blue)',
                delay: 0.1
              },
              {
                metric: "Month-end Variance Surprises",
                improvement: "↓ 20–30%",
                description: "Proactive alerts and predictive insights prevent last-minute reconciliation issues",
                icon: AlertTriangle,
                color: 'var(--success)',
                delay: 0.2
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
                  <CardContent className="p-10 text-center">
                    <div 
                      className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-2xl group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${outcome.color}10` }}
                    >
                      <outcome.icon className="h-10 w-10" style={{ color: outcome.color }} />
                    </div>
                    <div className="mb-4 text-5xl font-bold" style={{ color: outcome.color }}>
                      {outcome.improvement}
                    </div>
                    <h3 className="mb-4 text-2xl font-semibold">{outcome.metric}</h3>
                    <p className="text-muted-foreground leading-relaxed">
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
            <h2 className="mb-8 text-4xl md:text-5xl">Intelligent Finance Automation</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              AI-powered features that transform how your finance team operates daily.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                title: "Cash Reconciliation Assistant",
                description: "Automatically match transactions across bank statements, AR, and AP systems with intelligent pattern recognition and exception handling.",
                icon: Calculator,
                features: ["Multi-source matching", "Pattern learning", "Exception routing", "Audit trail maintenance"],
                delay: 0
              },
              {
                title: "Intelligent Dunning & Promise-to-Pay",
                description: "Personalized collection strategies based on customer payment history, with automated follow-ups and promise-to-pay tracking.",
                icon: CreditCard,
                features: ["Customer segmentation", "Automated outreach", "Payment tracking", "Escalation rules"],
                delay: 0.1
              },
              {
                title: "Spend Anomaly Alerts",
                description: "Proactive monitoring of spending patterns with instant alerts for unusual transactions or budget variances requiring attention.",
                icon: Bell,
                features: ["Real-time monitoring", "Smart thresholds", "Context-aware alerts", "Trend analysis"],
                delay: 0.2
              },
              {
                title: "Policy-aware Journal Suggestions",
                description: "AI-generated journal entries that comply with your accounting policies, complete with proper documentation and approval workflows.",
                icon: BookOpen,
                features: ["Policy compliance", "Auto-documentation", "Approval routing", "Audit preparation"],
                delay: 0.3
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
                      style={{ backgroundColor: 'var(--y-axis-green)10' }}
                    >
                      <feature.icon className="h-8 w-8" style={{ color: 'var(--y-axis-green)' }} />
                    </div>
                    <h3 className="mb-4 text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle2 className="h-3 w-3 mr-2 text-y-axis-green flex-shrink-0" />
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

      {/* Integrations Section */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-8 text-4xl md:text-5xl">Works with Your Finance Stack</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              System-agnostic by design. Connects seamlessly with your existing financial systems.
            </p>
          </MotionDiv>

          <div className="max-w-4xl mx-auto">
            <MotionDiv
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-xl bg-white">
                <CardContent className="p-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {[
                      {
                        name: "Microsoft Dynamics 365",
                        category: "ERP",
                        description: "Full integration with D365 Finance & Operations for seamless data flow",
                        icon: Zap
                      },
                      {
                        name: "QuickBooks",
                        category: "Accounting",
                        description: "Direct connection to QuickBooks Online and Desktop versions",
                        icon: Calculator
                      },
                      {
                        name: "SAP Business One",
                        category: "ERP", 
                        description: "Native SAP B1 integration for small and medium enterprises",
                        icon: Shield
                      }
                    ].map((integration, index) => (
                      <div key={integration.name} className="text-center">
                        <div 
                          className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-xl"
                          style={{ backgroundColor: 'var(--y-axis-green)10' }}
                        >
                          <integration.icon className="h-8 w-8" style={{ color: 'var(--y-axis-green)' }} />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">{integration.name}</h3>
                        <Badge variant="outline" className="mb-3">{integration.category}</Badge>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {integration.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center border-t border-border pt-8">
                    <p className="text-muted-foreground mb-6">
                      <strong>System-agnostic design</strong> means Finance Agent works with 200+ financial applications
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-2 px-8 py-3 text-lg transition-all duration-300"
                      style={{ 
                        borderRadius: '12px',
                        borderColor: 'var(--y-axis-green)',
                        color: 'var(--y-axis-green)'
                      }}
                      onClick={() => {
                        (window as any).navigate('/products/integration-agent');
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
            <h2 className="mb-8 text-4xl md:text-5xl">Built for Financial Governance</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Every action requires approval. Every decision leaves an audit trail. Every process follows your policies.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Human Approval Required",
                description: "No financial action executes without explicit approval from authorized personnel in your finance team.",
                features: ["Multi-level approvals", "Delegation rules", "Emergency protocols"]
              },
              {
                icon: Shield,
                title: "Policy Compliance",
                description: "AI suggestions automatically align with your accounting policies, SOX requirements, and regulatory standards.",
                features: ["SOX compliance", "GAAP adherence", "Custom policy rules"]
              },
              {
                icon: BookOpen,
                title: "Complete Audit Trail",
                description: "Detailed logs of every AI recommendation, human decision, and executed action for full transparency.",
                features: ["Decision logs", "Action history", "Compliance reports"]
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
                      style={{ backgroundColor: 'var(--y-axis-green)10' }}
                    >
                      <feature.icon className="h-8 w-8" style={{ color: 'var(--y-axis-green)' }} />
                    </div>
                    <h3 className="mb-4 text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 mr-2 text-y-axis-green" />
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
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ backgroundColor: 'var(--electric-blue)' }}></div>
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white mb-8 text-4xl md:text-6xl">
              Ascend or be left behind
            </h2>
            <p className="text-white/80 text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
              Join the finance teams already using AI to turn manual processes into competitive advantages.
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