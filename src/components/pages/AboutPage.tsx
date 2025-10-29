import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  ArrowRight,
  Building,
  Rocket,
  Globe,
  Users,
  Target,
  Heart,
  Star,
  TrendingUp,
  Zap,
  Award,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Code,
  PresentationChart,
  Lightbulb,
  MessageSquare,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Settings,
  Brain
} from 'lucide-react';
import { motion } from 'motion/react';
import patrickPhoto from 'figma:asset/9d888eccd4728ac6e8006723a8e9c92ebce867fb.png';
import melPhoto from 'figma:asset/877bc11746037fe6935c4f7fe71a060d61819d84.png';

const MotionDiv = motion.div;
const MotionCard = motion.div;

export function AboutPage() {
  const handleContactClick = () => {
    // Mock contact action - could navigate to contact page or open contact form
    alert('Contact form would open here. This is a placeholder implementation.');
  };

  const handleTryFreeClick = () => {
    (window as any).navigate('/pricing');
    setTimeout(() => {
      document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const founders = [
    {
      name: "Patrick Yuson",
      title: "Co-Founder & CEO",
      focus: "Strategic Leadership & Enterprise Partnerships",
      image: "👨‍💼", // Will be replaced with professional photo
      bio: "Patrick brings 8+ years of tech entrepreneurship and strategic partnerships with leading enterprise clients across Southeast Asia and Europe. He previously built and scaled technology solutions serving Fortune 500 companies and has led successful go-to-market strategies in the Philippines, Singapore, and Germany. A graduate of TU Clausthal (TUC), Germany, Patrick combines technical depth with business acumen, having worked with major retail, manufacturing, and hospitality enterprises to implement AI-driven operational improvements.",
      expertise: ["Enterprise Partnerships", "AI Strategy", "Go-to-Market", "Fortune 500 Clients"],
      experience: "8+ years",
      education: "TU Clausthal (TUC), Germany"
    },
    {
      name: "Mel Yuson",
      title: "Co-Founder & CTO", 
      focus: "Enterprise Solutions Architecture",
      image: "👨‍💻", // Will be replaced with professional photo
      bio: "With 30+ years of enterprise solutions architecture and systems integration experience, Mel has architected mission-critical systems for multinational corporations across retail, distribution, manufacturing, and financial services sectors. Mel's deep expertise in ERP implementations (SAP, Oracle, Microsoft Dynamics), CRM platforms, and complex system integrations provides the foundation for yGen's system-agnostic approach. His work with enterprise clients has included designing scalable solutions for organizations with 1,000+ employees and multi-country operations.",
      expertise: ["ERP Architecture (SAP, Oracle, Dynamics)", "Systems Integration", "Enterprise Solutions", "Multi-country Operations"],
      experience: "30+ years",
      education: "Enterprise Systems & Architecture"
    }
  ];

  const timelineEvents = [
    {
      period: "1990s–2020s",
      title: "30+ Years Experience",
      subtitle: "in Systems Design & Architecture",
      icon: Settings,
      color: 'var(--electric-blue)'
    },
    {
      period: "2016–2024",
      title: "8 Years in",
      subtitle: "Techpreneurship",
      icon: Rocket,
      color: 'var(--y-axis-green)'
    },
    {
      period: "2025",
      title: "Launch of",
      subtitle: "yGen",
      icon: Brain,
      color: 'var(--info)'
    }
  ];

  const missionPoints = [
    {
      phase: "Phase 1",
      region: "Philippines",
      description: "Bring AI companions to Philippine businesses first",
      status: "Current Focus",
      icon: MapPin,
      color: 'var(--y-axis-green)'
    },
    {
      phase: "Phase 2", 
      region: "Singapore",
      description: "Expand to Singapore and Southeast Asian markets",
      status: "2025 Roadmap",
      icon: Globe,
      color: 'var(--electric-blue)'
    },
    {
      phase: "Phase 3",
      region: "United States",
      description: "Enter US market with proven ASEAN success",
      status: "2026 Vision",
      icon: Rocket,
      color: 'var(--info)'
    }
  ];

  const companyValues = [
    {
      title: "Human-Centric AI",
      description: "AI should augment human capability, not replace human judgment",
      icon: Heart,
      color: 'var(--y-axis-green)'
    },
    {
      title: "Governance by Default",
      description: "Every AI action should be trackable, explainable, and controllable",
      icon: CheckCircle2,
      color: 'var(--electric-blue)'
    },
    {
      title: "Local-First Approach", 
      description: "Build for local markets first, then expand globally with proven solutions",
      icon: Star,
      color: 'var(--success)'
    },
    {
      title: "Continuous Learning",
      description: "Embrace feedback, iterate quickly, and never stop improving",
      icon: TrendingUp,
      color: 'var(--info)'
    }
  ];

  const achievements = [
    {
      metric: "2023",
      label: "Company Founded",
      description: "Incorporated yGen Innovations"
    },
    {
      metric: "50+",
      label: "Pilot Customers",
      description: "Across retail, distribution, and services"
    },
    {
      metric: "4",
      label: "AI Agents",
      description: "Finance, Sales, Inventory, Integration"
    },
    {
      metric: "3",
      label: "Countries",
      description: "PH operations, SG/US expansion planned"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-muted overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20" style={{backgroundColor: 'var(--y-axis-green)'}}></div>
          <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full blur-3xl opacity-15" style={{backgroundColor: 'var(--electric-blue)'}}></div>
        </div>
        
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Company Badge */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-8"
            >
              <Badge 
                className="px-6 py-2 text-sm font-medium"
                style={{ 
                  backgroundColor: 'var(--y-axis-green)10',
                  color: 'var(--y-axis-green)',
                  border: '1px solid var(--y-axis-green)30'
                }}
              >
                <Building className="h-4 w-4 mr-2" />
                About yGen
              </Badge>
            </MotionDiv>

            <h1 className="mb-8 text-5xl md:text-7xl tracking-tight">
              Built to build your Y‑axis
            </h1>
            <div className="mb-12 text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We're on a mission to bring governed Agentic AI to businesses across the Philippines, 
              Singapore, and the United States. <strong>Ascend or be left behind.</strong>
            </div>
            
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Button 
                size="lg"
                className="px-12 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ 
                  borderRadius: '16px',
                  backgroundColor: 'var(--y-axis-green)',
                  color: 'white'
                }}
                onClick={handleContactClick}
              >
                Contact Us
                <MessageSquare className="ml-3 h-6 w-6" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="px-12 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ 
                  borderRadius: '16px',
                  borderColor: 'var(--y-axis-green)',
                  color: 'var(--y-axis-green)'
                }}
                onClick={handleTryFreeClick}
              >
                Try Free
                <Sparkles className="ml-3 h-6 w-6" />
              </Button>
            </MotionDiv>
          </MotionDiv>
        </div>
      </section>

      {/* Founders Story */}
      <section id="story" className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-8 text-4xl md:text-5xl">The Story Behind yGen</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6">
              yGen Innovations was founded by Mel Yuson and Patrick Yuson to bring Agentic AI companions into real-world operations — starting in the Philippines and scaling globally.
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6">
              Mel brings over 30+ years of system architecture and enterprise innovation, having led complex IT transformations across industries. Patrick, a TUC Germany–educated techpreneur, adds eight years of product leadership and process improvement. Together, they combine deep enterprise expertise with startup agility.
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              yGen is not a fly-by-night startup. It grows out of decades of proven delivery in enterprise IT, shared services, and automation — experience that ensures resilience, governance, and scalability in every solution we build.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <MotionCard
                key={founder.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white overflow-hidden">
                  <CardContent className="p-8 text-center">
                    {/* Photo */}
                    <div 
                      className="w-56 h-56 rounded-2xl mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300 overflow-hidden mx-auto"
                    >
                      {index === 0 ? (
                        <img 
                          src={patrickPhoto}
                          alt="Patrick Yuson"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <img 
                          src={melPhoto}
                          alt="Mel Yuson"
                          className="w-full h-full object-cover object-center"
                        />
                      )}
                    </div>
                    
                    {/* Name */}
                    <h3 className="text-2xl font-semibold tracking-tight">{founder.name}</h3>
                  </CardContent>
                </Card>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-32 bg-gradient-to-b from-muted to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-8 text-4xl md:text-5xl">Our Journey</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              From decades of enterprise experience to launching the future of Agentic AI.
            </p>
          </MotionDiv>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-blue via-y-axis-green to-info hidden md:block"
              style={{ background: `linear-gradient(to right, var(--electric-blue), var(--y-axis-green), var(--info))` }}
            ></div>

            {/* Timeline Events */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {timelineEvents.map((event, index) => (
                <MotionDiv
                  key={event.period}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon Circle */}
                  <div 
                    className="relative z-10 inline-flex items-center justify-center w-32 h-32 rounded-full mb-6 shadow-lg bg-white"
                    style={{ border: `3px solid ${event.color}` }}
                  >
                    <event.icon className="h-12 w-12" style={{ color: event.color }} />
                  </div>

                  {/* Period */}
                  <div className="mb-4 px-4 py-2 rounded-full" style={{ backgroundColor: `${event.color}10` }}>
                    <span className="font-semibold" style={{ color: event.color }}>{event.period}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-lg text-muted-foreground">{event.subtitle}</p>
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Expansion */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-8 text-4xl md:text-5xl">Our Mission</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Deliver governed, system-agnostic AI agents that work with people, not instead of them.
            </p>
          </MotionDiv>

          <div className="space-y-8">
            {missionPoints.map((phase, index) => (
              <MotionCard
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white">
                  <CardContent className="p-10">
                    <div className="flex items-center gap-8">
                      <div 
                        className="flex-shrink-0 inline-flex items-center justify-center w-20 h-20 rounded-xl group-hover:scale-110 transition-all duration-300"
                        style={{ backgroundColor: `${phase.color}10` }}
                      >
                        <phase.icon className="h-10 w-10" style={{ color: phase.color }} />
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex items-center gap-4 mb-3">
                          <h3 className="text-2xl font-semibold">{phase.phase}: {phase.region}</h3>
                          <Badge 
                            className="text-sm"
                            style={{ 
                              backgroundColor: `${phase.color}10`,
                              color: phase.color,
                              border: `1px solid ${phase.color}30`
                            }}
                          >
                            {phase.status}
                          </Badge>
                        </div>
                        <p className="text-lg text-muted-foreground">
                          {phase.description}
                        </p>
                      </div>
                      

                    </div>
                  </CardContent>
                </Card>
              </MotionCard>
            ))}
          </div>

          {/* Mission Quote */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <Card className="border-0 shadow-xl bg-gradient-to-r from-green-50 to-blue-50">
              <CardContent className="p-16 text-center">
                <div 
                  className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-xl"
                  style={{ backgroundColor: 'var(--y-axis-green)10' }}
                >
                  <Target className="h-10 w-10" style={{ color: 'var(--y-axis-green)' }} />
                </div>
                <blockquote className="text-2xl md:text-3xl font-medium mb-6 leading-relaxed">
                  "In a world where AI is reshaping every industry, businesses have two choices: 
                  ascend with intelligent automation, or be left behind by competitors who embrace it first."
                </blockquote>
                <cite className="text-lg text-muted-foreground">
                  — Mel & Patrick Yuson, Co-Founders
                </cite>
              </CardContent>
            </Card>
          </MotionDiv>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-8 text-4xl md:text-5xl">Our Values</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              The principles that guide how we build, deploy, and evolve our AI solutions.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyValues.map((value, index) => (
              <MotionCard
                key={value.title}
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
                      style={{ backgroundColor: `${value.color}10` }}
                    >
                      <value.icon className="h-8 w-8" style={{ color: value.color }} />
                    </div>
                    <h3 className="mb-4 text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Company Achievements */}
      <section className="py-32 bg-gradient-to-b from-muted to-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-16">
                <div className="text-center mb-12">
                  <h2 className="mb-8 text-4xl md:text-5xl">By the Numbers</h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Our journey so far, measured in the milestones that matter.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  {achievements.map((achievement, index) => (
                    <MotionDiv
                      key={achievement.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div 
                        className="text-4xl md:text-5xl font-bold mb-2"
                        style={{ color: 'var(--y-axis-green)' }}
                      >
                        {achievement.metric}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{achievement.label}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </MotionDiv>
                  ))}
                </div>
              </CardContent>
            </Card>
          </MotionDiv>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to ascend?
            </h2>
            <p className="text-white/80 text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
              Join the businesses that are building their Y-axis with governed Agentic AI. 
              The future belongs to those who act today.
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
                onClick={handleContactClick}
              >
                Contact Us
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="px-16 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 text-white border-white hover:bg-white hover:text-slate-900"
                style={{ borderRadius: '16px' }}
                onClick={handleTryFreeClick}
              >
                Try Free
                <Sparkles className="ml-3 h-6 w-6" />
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
}