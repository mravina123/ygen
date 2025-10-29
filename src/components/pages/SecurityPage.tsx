import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  Download,
  Shield,
  Lock,
  Eye,
  CheckCircle2,
  FileText,
  Server,
  Users,
  Key,
  Globe,
  AlertTriangle,
  Clock,
  Database,
  Activity,
  Settings,
  UserCheck,
  Zap,
  Target,
  BookOpen,
  Award,
  Cloud,
  HardDrive,
  Network,
  Layers,
  FileCheck,
  Building,
  MapPin,
  RefreshCw,
  Brain,
  MessageSquare
} from 'lucide-react';
import { motion } from 'motion/react';

const MotionDiv = motion.div;
const MotionCard = motion.div;

export function SecurityPage() {
  const handleDownloadSecurityOverview = () => {
    // Mock PDF download
    alert('Security Overview PDF would be downloaded here. This is a placeholder implementation.');
  };

  const azureServices = [
    {
      name: "Azure Active Directory",
      description: "Identity and access management with multi-factor authentication",
      icon: UserCheck,
      category: "Identity"
    },
    {
      name: "Azure Key Vault",
      description: "Secure storage and management of keys, secrets, and certificates",
      icon: Key,
      category: "Security"
    },
    {
      name: "Azure Monitor",
      description: "Comprehensive audit trails and activity monitoring",
      icon: Activity,
      category: "Monitoring"
    },
    {
      name: "Azure SQL Database",
      description: "Encrypted data storage with automatic backups",
      icon: Database,
      category: "Data"
    },
    {
      name: "Azure API Management",
      description: "Secure API gateway with rate limiting and authentication",
      icon: Network,
      category: "API"
    },
    {
      name: "Azure Storage",
      description: "Encrypted blob storage for documents and artifacts",
      icon: HardDrive,
      category: "Storage"
    }
  ];

  const dataResidencyOptions = [
    {
      region: "Philippines",
      location: "Southeast Asia",
      flag: "🇵🇭",
      description: "Data stored in Philippine data centers for local compliance",
      status: "Available"
    },
    {
      region: "Singapore", 
      location: "Southeast Asia",
      flag: "🇸🇬",
      description: "Regional hub for ASEAN data residency requirements",
      status: "Available"
    },
    {
      region: "United States",
      location: "East/West Coast",
      flag: "🇺🇸", 
      description: "US-based storage for global enterprise customers",
      status: "Available"
    }
  ];

  const governanceFeatures = [
    {
      title: "Role-Based Actions",
      description: "Agents operate within defined roles with specific permissions and capabilities",
      icon: Users,
      details: ["Custom role definitions", "Permission inheritance", "Least privilege access"]
    },
    {
      title: "Approval Workflows",
      description: "Critical actions require human approval before execution",
      icon: CheckCircle2,
      details: ["Multi-level approvals", "Risk-based routing", "Audit trail tracking"]
    },
    {
      title: "Policy Guardrails",
      description: "Configurable policies prevent unauthorized or risky operations",
      icon: Shield,
      details: ["Business rule enforcement", "Compliance policies", "Real-time validation"]
    }
  ];

  const privacyFeatures = [
    {
      title: "Minimal Data Retention",
      description: "Data is retained only as long as necessary for business purposes",
      icon: Clock,
      color: 'var(--y-axis-green)'
    },
    {
      title: "Encryption in Transit",
      description: "All data communications use TLS 1.3 encryption",
      icon: Network,
      color: 'var(--electric-blue)'
    },
    {
      title: "Encryption at Rest",
      description: "Database and file storage encrypted with AES-256",
      icon: Lock,
      color: 'var(--info)'
    },
    {
      title: "Tenant Isolation",
      description: "Complete logical separation between customer environments",
      icon: Building,
      color: 'var(--success)'
    }
  ];

  const complianceItems = [
    {
      title: "ISO 27001",
      description: "Information Security Management System certification",
      status: "In Progress",
      timeline: "Q2 2025",
      icon: Award
    },
    {
      title: "SOC 2 Type II",
      description: "Security, availability, and confidentiality controls audit",
      status: "In Progress", 
      timeline: "Q3 2025",
      icon: FileCheck
    },
    {
      title: "GDPR Compliance",
      description: "Data protection and privacy regulation adherence",
      status: "Implemented",
      timeline: "Current",
      icon: Shield
    },
    {
      title: "Data Privacy Act (PH)",
      description: "Philippines Data Privacy Act compliance framework",
      status: "Implemented",
      timeline: "Current", 
      icon: Globe
    }
  ];

  const responsibleAIFeatures = [
    {
      title: "Explainability",
      description: "Every agent decision includes reasoning and supporting evidence",
      icon: Brain,
      details: ["Decision audit trails", "Reasoning transparency", "Source attribution"]
    },
    {
      title: "Human Fallback",
      description: "Seamless escalation to human operators when uncertainty is high",
      icon: MessageSquare,
      details: ["Confidence thresholds", "Escalation workflows", "Human-in-the-loop"]
    },
    {
      title: "Red Team Testing",
      description: "Continuous testing for bias, misuse, and edge cases",
      icon: Target,
      details: ["Adversarial testing", "Bias detection", "Safety validation"]
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
            {/* Security Badge */}
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
                <Shield className="h-4 w-4 mr-2" />
                Security & Governance
              </Badge>
            </MotionDiv>

            <h1 className="mb-8 text-5xl md:text-7xl tracking-tight">
              Governance by default
            </h1>
            <div className="mb-12 text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Built on Azure. Human‑in‑the‑loop controls. Audit trails at every step. Certifications in progress.
            </div>
            
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >

            </MotionDiv>
          </MotionDiv>
        </div>
      </section>

      {/* Architecture at a Glance */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-8 text-4xl md:text-5xl">Architecture at a Glance</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Built on Microsoft Azure with enterprise-grade security and compliance features.
            </p>
          </MotionDiv>

          {/* Azure Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {azureServices.map((service, index) => (
              <MotionCard
                key={service.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div 
                        className="inline-flex items-center justify-center w-12 h-12 rounded-lg group-hover:scale-110 transition-all duration-300"
                        style={{ backgroundColor: 'var(--electric-blue)10' }}
                      >
                        <service.icon className="h-6 w-6" style={{ color: 'var(--electric-blue)' }} />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {service.category}
                      </Badge>
                    </div>
                    <h3 className="mb-3 text-lg font-semibold">{service.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </MotionCard>
            ))}
          </div>

          {/* Data Residency Options */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-green-50">
              <CardContent className="p-12">
                <div className="text-center mb-12">
                  <div 
                    className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-xl"
                    style={{ backgroundColor: 'var(--y-axis-green)10' }}
                  >
                    <Globe className="h-10 w-10" style={{ color: 'var(--y-axis-green)' }} />
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold">Data Residency Options</h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Choose where your data is stored to meet compliance and performance requirements.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {dataResidencyOptions.map((option, index) => (
                    <div key={option.region} className="text-center">
                      <div className="text-4xl mb-4">{option.flag}</div>
                      <h4 className="font-semibold mb-2">{option.region}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{option.location}</p>
                      <p className="text-xs text-muted-foreground mb-3">{option.description}</p>
                      <Badge 
                        className="text-xs"
                        style={{ 
                          backgroundColor: 'var(--success)10',
                          color: 'var(--success)',
                          border: '1px solid var(--success)30'
                        }}
                      >
                        {option.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </MotionDiv>
        </div>
      </section>

      {/* Governed Agents */}
      <section className="py-32 bg-gradient-to-b from-muted to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-8 text-4xl md:text-5xl">Governed Agents</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Human oversight and control mechanisms ensure agents operate within defined boundaries.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {governanceFeatures.map((feature, index) => (
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
                    <div className="space-y-2">
                      {feature.details.map((detail, i) => (
                        <div key={i} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle2 className="h-3 w-3 mr-2 text-y-axis-green flex-shrink-0" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy & Data Handling */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-8 text-4xl md:text-5xl">Privacy & Data Handling</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Your data is protected with industry-leading security measures and privacy controls.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {privacyFeatures.map((feature, index) => (
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
                      style={{ backgroundColor: `${feature.color}10` }}
                    >
                      <feature.icon className="h-8 w-8" style={{ color: feature.color }} />
                    </div>
                    <h3 className="mb-4 text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Roadmap */}
      <section className="py-32 bg-gradient-to-b from-muted to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-8 text-4xl md:text-5xl">Compliance Roadmap</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Comprehensive compliance framework with industry-standard certifications in progress.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceItems.map((item, index) => (
              <MotionCard
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div 
                        className="inline-flex items-center justify-center w-16 h-16 rounded-xl group-hover:scale-110 transition-all duration-300"
                        style={{ backgroundColor: 'var(--electric-blue)10' }}
                      >
                        <item.icon className="h-8 w-8" style={{ color: 'var(--electric-blue)' }} />
                      </div>
                      <Badge 
                        className="text-xs"
                        style={{ 
                          backgroundColor: item.status === 'Implemented' ? 'var(--success)10' : 'var(--warning)10',
                          color: item.status === 'Implemented' ? 'var(--success)' : 'var(--warning)',
                          border: `1px solid ${item.status === 'Implemented' ? 'var(--success)30' : 'var(--warning)30'}`
                        }}
                      >
                        {item.status}
                      </Badge>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      Target: {item.timeline}
                    </div>
                  </CardContent>
                </Card>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible AI */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-8 text-4xl md:text-5xl">Responsible AI</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Ethical AI development with transparency, human oversight, and continuous safety validation.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {responsibleAIFeatures.map((feature, index) => (
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
                    <div className="space-y-2">
                      {feature.details.map((detail, i) => (
                        <div key={i} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle2 className="h-3 w-3 mr-2 text-info flex-shrink-0" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--slate-ink)' }}>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white mb-8 text-4xl md:text-6xl">
              Need more details?
            </h2>
            <p className="text-white/80 text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
              Download our comprehensive security overview for detailed technical specifications and compliance information.
            </p>
            <Button 
              size="lg"
              className="px-16 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ 
                borderRadius: '16px',
                backgroundColor: 'var(--y-axis-green)',
                color: 'white'
              }}
              onClick={handleDownloadSecurityOverview}
            >
              <Download className="mr-3 h-6 w-6" />
              Download Security Overview
            </Button>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
}