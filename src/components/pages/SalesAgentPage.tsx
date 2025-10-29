import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  ArrowRight, 
  TrendingUp,
  TrendingDown,
  Users,
  Target,
  Zap,
  MessageSquare,
  AlertCircle,
  CheckCircle2,
  Calendar,
  BarChart3,
  Clock,
  Shield,
  Mail,
  Phone,
  Linkedin,
  Star
} from 'lucide-react';
import { motion } from 'motion/react';

const MotionDiv = motion.div;
const MotionCard = motion.div;

export function SalesAgentPage() {
  return (
    <div className="w-full">
      {/* Hero Section - Blue to Teal Gradient */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #6CA8FF 0%, #2ED8C3 100%)' }}>
        {/* Abstract Upward Arrows/Wave Flow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          {/* Wave Flow Lines */}
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 400 Q 200 350 400 380 T 800 400 T 1200 380 T 1600 400" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />
            <path d="M 0 500 Q 200 450 400 480 T 800 500 T 1200 480 T 1600 500" stroke="rgba(255,255,255,0.25)" strokeWidth="2" fill="none" />
            <path d="M 0 600 Q 200 550 400 580 T 800 600 T 1200 580 T 1600 600" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />
          </svg>
          
          {/* Upward Arrows */}
          <div className="absolute top-1/4 left-1/4 transform -rotate-45">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 19V5M5 12L12 5L19 12" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="absolute top-1/3 right-1/3 transform -rotate-45">
            <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 19V5M5 12L12 5L19 12" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="absolute bottom-1/3 right-1/4 transform -rotate-45">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 19V5M5 12L12 5L19 12" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center py-32">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl tracking-tight text-slate-900">
              Pipeline hygiene on autopilot.
            </h1>
            <p className="mb-12 text-xl md:text-2xl text-slate-800 max-w-3xl mx-auto leading-relaxed">
              Alerts, next‑best actions, and follow‑through your reps will actually use.
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
                  (window as any).navigate('/contact');
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
            <h2 className="mb-8 text-4xl md:text-5xl">Sales Performance That Speaks</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Measurable improvements from sales teams using Sales Agent in pilot programs.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {[
              {
                metric: "Close Rate",
                improvement: "↑ 10–15%",
                description: "Higher conversion rates through intelligent next-best actions and timely follow-ups based on deal momentum",
                icon: TrendingUp,
                color: 'var(--success)',
                delay: 0
              },
              {
                metric: "Stale Pipeline",
                improvement: "↓ 25–40%",
                description: "Dramatic reduction in deals sitting without activity through automated nudges and sequence recommendations",
                icon: TrendingDown,
                color: 'var(--electric-blue)',
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
            <h2 className="mb-8 text-4xl md:text-5xl">AI That Amplifies Your Sales Team</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Smart tools that work with your existing process to keep deals moving and pipelines healthy.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                title: "Next‑Best Action Feed",
                description: "AI analyzes deal history, stage progression, and buyer behavior to recommend the perfect next step for every opportunity in your pipeline.",
                icon: Target,
                features: ["Personalized recommendations", "Deal momentum analysis", "Buyer signal detection", "Priority scoring"],
                delay: 0
              },
              {
                title: "Sequence Assistant (Governed Outreach)",
                description: "Automated follow-up sequences that adapt based on prospect responses, with human approval for sensitive communications.",
                icon: MessageSquare,
                features: ["Dynamic sequences", "Response triggers", "Approval workflows", "Multi-channel outreach"],
                delay: 0.1
              },
              {
                title: "Deal Risk Scoring",
                description: "Proactive identification of deals at risk of stalling or closing with predictive analytics and early warning signals.",
                icon: AlertCircle,
                features: ["Risk probability", "Stall indicators", "Competitive threats", "Intervention alerts"],
                delay: 0.2
              },
              {
                title: "CRM Hygiene Coach",
                description: "Continuous monitoring and coaching to maintain clean, accurate CRM data with automated field suggestions and validations.",
                icon: Shield,
                features: ["Data quality scoring", "Field completion prompts", "Duplicate detection", "Activity tracking"],
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
                      style={{ backgroundColor: 'var(--electric-blue)10' }}
                    >
                      <feature.icon className="h-8 w-8" style={{ color: 'var(--electric-blue)' }} />
                    </div>
                    <h3 className="mb-4 text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle2 className="h-3 w-3 mr-2 text-electric-blue flex-shrink-0" />
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
            <h2 className="mb-8 text-4xl md:text-5xl">Plugs Into Your Sales Stack</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Works seamlessly with your existing CRM, communication tools, and sales enablement platforms.
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
                  {/* CRM Platforms */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-semibold mb-8 text-center">CRM Platforms</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {[
                        {
                          name: "Salesforce",
                          category: "Enterprise CRM",
                          description: "Deep integration with Sales Cloud, Service Cloud, and custom objects",
                          icon: BarChart3
                        },
                        {
                          name: "HubSpot",
                          category: "Growth Platform",
                          description: "Native HubSpot integration for deals, contacts, and sequences",
                          icon: Users
                        },
                        {
                          name: "Pipedrive",
                          category: "Sales CRM",
                          description: "Complete pipeline management and activity tracking integration",
                          icon: Target
                        }
                      ].map((integration, index) => (
                        <div key={integration.name} className="text-center">
                          <div 
                            className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-xl"
                            style={{ backgroundColor: 'var(--electric-blue)10' }}
                          >
                            <integration.icon className="h-8 w-8" style={{ color: 'var(--electric-blue)' }} />
                          </div>
                          <h4 className="font-semibold text-foreground mb-2">{integration.name}</h4>
                          <Badge variant="outline" className="mb-3">{integration.category}</Badge>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {integration.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Communication Tools */}
                  <div className="border-t border-border pt-12">
                    <h3 className="text-2xl font-semibold mb-8 text-center">Communication Channels</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {[
                        { name: "Email", icon: Mail, color: 'var(--success)' },
                        { name: "Phone", icon: Phone, color: 'var(--warning)' },
                        { name: "LinkedIn", icon: Linkedin, color: 'var(--info)' },
                        { name: "Video Calls", icon: Calendar, color: 'var(--electric-blue)' }
                      ].map((channel, index) => (
                        <div key={channel.name} className="text-center">
                          <div 
                            className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-lg"
                            style={{ backgroundColor: `${channel.color}10` }}
                          >
                            <channel.icon className="h-6 w-6" style={{ color: channel.color }} />
                          </div>
                          <p className="text-sm font-medium">{channel.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center border-t border-border pt-8 mt-8">
                    <p className="text-muted-foreground mb-6">
                      <strong>System-agnostic design</strong> connects with 200+ sales and marketing tools
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-2 px-8 py-3 text-lg transition-all duration-300"
                      style={{ 
                        borderRadius: '12px',
                        borderColor: 'var(--electric-blue)',
                        color: 'var(--electric-blue)'
                      }}
                      onClick={() => {
                        (window as any).navigate('/integration-agent');
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
            <h2 className="mb-8 text-4xl md:text-5xl">Sales Governance That Works</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Maintain control over your sales process while empowering your team with AI-driven insights and actions.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Manager Oversight",
                description: "Sales managers approve key actions like high-value outreach sequences and deal risk interventions before execution.",
                features: ["Approval thresholds", "Manager escalation", "Team boundaries"]
              },
              {
                icon: Shield,
                title: "Brand Compliance",
                description: "All AI-generated communications follow your brand voice, compliance guidelines, and messaging frameworks.",
                features: ["Brand voice training", "Legal compliance", "Message templates"]
              },
              {
                icon: BarChart3,
                title: "Performance Transparency",
                description: "Complete visibility into AI recommendations, rep responses, and outcomes for continuous improvement.",
                features: ["Action tracking", "Performance metrics", "ROI measurement"]
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
                      style={{ backgroundColor: 'var(--electric-blue)10' }}
                    >
                      <feature.icon className="h-8 w-8" style={{ color: 'var(--electric-blue)' }} />
                    </div>
                    <h3 className="mb-4 text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 mr-2 text-electric-blue" />
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
              Ready to supercharge your pipeline?
            </h2>
            <p className="text-white/80 text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
              Join sales teams already using AI to turn pipeline chaos into consistent revenue growth.
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
                  (window as any).navigate('/contact');
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