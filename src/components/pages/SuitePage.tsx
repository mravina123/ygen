import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  ArrowRight, 
  Shield, 
  Zap, 
  Target,
  BarChart3,
  Users,
  Package,
  GitBranch,
  CheckCircle2,
  Clock,
  Eye,
  Database,
  CloudCog,
  FileText,
  Settings,
  Layers,
  Monitor,
  Smartphone,
  Globe,
  Network,
  Cpu,
  Cloud,
  Lock,
  Code2,
  Workflow
} from 'lucide-react';
import { motion } from 'motion/react';

const MotionDiv = motion.div;
const MotionCard = motion.div;

export function SuitePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-muted overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full blur-3xl opacity-30" style={{backgroundColor: 'var(--y-axis-green)'}}></div>
          <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20" style={{backgroundColor: 'var(--electric-blue)'}}></div>
        </div>
        
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="mb-8 text-5xl md:text-7xl tracking-tight">
              Turn every decision into action
            </h1>
            <div className="mb-12 text-2xl md:text-3xl font-medium text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Agentic AI that moves KPIs up and to the right.
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
                onClick={() => {
                  (window as any).navigate('/contact');
                }}
              >
                Try Free
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
                onClick={() => (window as any).navigate('/partners')}
              >
                Partner With Us
              </Button>
            </MotionDiv>
          </MotionDiv>
        </div>
      </section>

      {/* Suite Overview */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-12 text-4xl md:text-5xl">Governed Companions for Business Transformation</h2>
            
            <div className="text-left max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                The Ascent Agents Suite is built on a simple but powerful cycle: <strong className="text-foreground">Explain → Act → Insight.</strong>
              </p>
              <p>
                Unlike chatbots or static dashboards, Ascent Agents are <strong className="text-foreground">pure agentic AI solutions</strong>—designed 
                to understand context, propose intelligent actions, execute with governance, and deliver measurable outcomes. 
                Every action is fully logged, approved, and auditable.
              </p>
              <p>
                At its core, the Suite is powered by <strong className="text-foreground">LangGraph and MCP (Model Context Protocol)</strong> on 
                the <strong className="text-foreground">Azure ecosystem</strong>, ensuring enterprise-grade scalability, security, and interoperability. 
                This foundation makes Ascent Agents not just tools, but governed companions for business transformation.
              </p>
            </div>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Shield,
                title: "Governance by Design",
                description: "Role-based access, audit trails, and human-in-the-loop approvals.",
                color: 'var(--y-axis-green)'
              },
              {
                icon: Network,
                title: "System-Agnostic",
                description: "Works seamlessly with ERP, CRM, POS, PMS—no costly rip-and-replace.",
                color: 'var(--electric-blue)'
              },
              {
                icon: Target,
                title: "Built for Outcomes",
                description: "Reduce AR days, cut stockouts, boost close rates, and shorten integration cycles.",
                color: 'var(--info)'
              }
            ].map((feature, index) => (
              <MotionCard
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white">
                  <CardContent className="p-8 text-center">
                    <div 
                      className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl"
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

          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-xl bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
              <CardContent className="p-12 text-center">
                <p className="text-xl md:text-2xl leading-relaxed">
                  The Suite begins its rollout in the <strong>Philippines</strong>, with expansion planned for <strong>Singapore</strong> and 
                  the <strong>United States</strong>, driving a new class of AI adoption for forward-thinking businesses.
                </p>
                <p className="text-xl md:text-2xl mt-6 leading-relaxed">
                  With Ascent Agents, companies don't just automate—they <strong className="text-y-axis-green">elevate every decision 
                  into measurable impact</strong>.
                </p>
              </CardContent>
            </Card>
          </MotionDiv>
        </div>
      </section>

      {/* How it Works - Triad */}
      <section className="py-32 bg-gradient-to-b from-muted to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-8 text-4xl md:text-5xl">How It Works</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A continuous cycle that transforms business intelligence into actionable results.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
            {/* Connection lines between cards */}
            <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-px bg-gradient-to-r from-y-axis-green to-electric-blue opacity-30 transform -translate-y-1/2"></div>
            <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-px bg-gradient-to-r from-electric-blue to-success opacity-30 transform -translate-y-1/2"></div>

            {[
              {
                title: "Explain",
                description: "AI agents analyze data patterns, identify anomalies, and provide clear explanations of what's happening in your business operations.",
                icon: Eye,
                bgColor: 'var(--y-axis-green)',
                iconColor: 'var(--y-axis-green)',
                delay: 0,
                features: ["Pattern Recognition", "Data Analysis", "Clear Reporting"]
              },
              {
                title: "Act", 
                description: "With your approval, agents execute decisions automatically—from sending invoices to updating inventory levels and triggering workflows.",
                icon: Zap,
                bgColor: 'var(--electric-blue)',
                iconColor: 'var(--electric-blue)',
                delay: 0.2,
                features: ["Automated Actions", "Workflow Triggers", "Policy Compliance"]
              },
              {
                title: "Insight",
                description: "Every action generates measurable outcomes that feed back into the system, creating a continuous improvement loop.",
                icon: BarChart3,
                bgColor: 'var(--success)',
                iconColor: 'var(--success)',
                delay: 0.4,
                features: ["KPI Tracking", "Performance Analytics", "Continuous Learning"]
              }
            ].map((step, index) => (
              <MotionCard
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: step.delay }}
                viewport={{ once: true }}
                className="group relative"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                  <CardContent className="p-10 text-center">
                    <div 
                      className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-2xl group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${step.bgColor}10` }}
                    >
                      <step.icon className="h-10 w-10" style={{ color: step.iconColor }} />
                    </div>
                    <h3 className="mb-6 text-2xl font-semibold">{step.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      {step.description}
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {step.features.map((feature, i) => (
                        <li key={i} className="flex items-center justify-center">
                          <CheckCircle2 className="h-4 w-4 mr-2" style={{ color: step.iconColor }} />
                          {feature}
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

      {/* Technical Architecture Section */}
      <section className="py-32 bg-gradient-to-b from-muted to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-8 text-4xl md:text-5xl">Built on Enterprise-Grade Technology</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Ascent Agents combines cutting-edge AI orchestration with enterprise cloud infrastructure 
              to deliver governed, system-agnostic solutions that scale with your business.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Workflow,
                title: "LangGraph Orchestration",
                description: "Built on LangGraph, our agents use advanced state machine architecture to orchestrate complex multi-step workflows with reliability and transparency.",
                features: [
                  "Stateful agent workflows",
                  "Multi-agent coordination",
                  "Conditional decision trees",
                  "Error recovery & rollback"
                ],
                color: 'var(--y-axis-green)'
              },
              {
                icon: Network,
                title: "Model Context Protocol (MCP)",
                description: "Standardized MCP integration enables seamless communication between AI models and your business systems, ensuring consistent, governed AI behavior.",
                features: [
                  "Standardized model interfaces",
                  "Context-aware reasoning",
                  "Multi-model orchestration",
                  "Version-controlled prompts"
                ],
                color: 'var(--electric-blue)'
              },
              {
                icon: Cloud,
                title: "Azure Cloud Infrastructure",
                description: "Deployed on Microsoft Azure with enterprise-grade security, compliance, and data residency options for Philippines, Singapore, and US markets.",
                features: [
                  "SOC 2 Type II compliant",
                  "Regional data residency",
                  "99.9% uptime SLA",
                  "Enterprise SSO & RBAC"
                ],
                color: 'var(--info)'
              }
            ].map((tech, index) => (
              <MotionCard
                key={tech.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                  <CardContent className="p-8">
                    <div 
                      className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl group-hover:scale-110 transition-all duration-300"
                      style={{ backgroundColor: `${tech.color}10` }}
                    >
                      <tech.icon className="h-8 w-8" style={{ color: tech.color }} />
                    </div>
                    <h3 className="mb-4 text-xl font-semibold">{tech.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {tech.description}
                    </p>
                    <ul className="space-y-2">
                      {tech.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" style={{ color: tech.color }} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </MotionCard>
            ))}
          </div>

          {/* Architecture Highlights */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-xl bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
              <CardContent className="p-12">
                <div className="text-center mb-10">
                  <h3 className="mb-4 text-2xl md:text-3xl font-semibold">System-Agnostic by Design</h3>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Unlike monolithic AI solutions, Ascent Agents connect to your existing tech stack—ERP, CRM, POS, PMS—without 
                    requiring costly rip-and-replace migrations. Our MCP-based architecture ensures compatibility across 200+ business applications.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { icon: Code2, label: "API-First Design", description: "RESTful & GraphQL" },
                    { icon: Lock, label: "Secure by Default", description: "End-to-end encryption" },
                    { icon: Cpu, label: "Edge Processing", description: "Low-latency decisions" },
                    { icon: Database, label: "Data Sovereignty", description: "Your data, your region" }
                  ].map((highlight, index) => (
                    <MotionDiv
                      key={highlight.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div 
                        className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-3"
                        style={{ backgroundColor: 'var(--y-axis-green)10' }}
                      >
                        <highlight.icon className="h-6 w-6" style={{ color: 'var(--y-axis-green)' }} />
                      </div>
                      <h4 className="font-semibold text-sm mb-1">{highlight.label}</h4>
                      <p className="text-xs text-muted-foreground">{highlight.description}</p>
                    </MotionDiv>
                  ))}
                </div>
              </CardContent>
            </Card>
          </MotionDiv>
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
            <h2 className="mb-8 text-4xl md:text-5xl">Enterprise Governance</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Human-in-the-loop controls ensure AI agents operate within your business policies and compliance requirements.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Human-in-the-Loop",
                description: "Every agent action requires explicit approval from authorized personnel before execution.",
                features: ["Approval Workflows", "Role-based Access", "Escalation Rules"]
              },
              {
                icon: Shield,
                title: "Role-based Controls",
                description: "Granular permissions ensure agents can only perform actions within their designated scope.",
                features: ["Permission Matrix", "Department Boundaries", "Action Limits"]
              },
              {
                icon: FileText,
                title: "Complete Audit Trail",
                description: "Full transparency with detailed logs of every decision, action, and outcome for compliance.",
                features: ["Decision Logs", "Action History", "Compliance Reports"]
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

      {/* System-agnostic Section */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-8 text-4xl md:text-5xl">Works with Your Existing Systems</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              No rip-and-replace needed. Our agents integrate with the tools you already use.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { name: "ERP Systems", icon: Database, examples: "SAP, Oracle, NetSuite" },
              { name: "CRM Platforms", icon: Users, examples: "Salesforce, HubSpot, Pipedrive" },
              { name: "POS Systems", icon: Monitor, examples: "Square, Shopify, Lightspeed" },
              { name: "PMS Solutions", icon: CloudCog, examples: "Opera, Protel, RMS" }
            ].map((system, index) => (
              <MotionCard
                key={system.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-500 bg-white group-hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <system.icon className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" style={{ color: 'var(--y-axis-green)' }} />
                    <h3 className="font-semibold text-foreground mb-2">{system.name}</h3>
                    <p className="text-sm text-muted-foreground">{system.examples}</p>
                  </CardContent>
                </Card>
              </MotionCard>
            ))}
          </div>

          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg text-muted-foreground mb-8">
              Secure API connections and pre-built integrations for 200+ business applications
            </p>
            <Button 
              variant="outline" 
              className="border-2 px-8 py-3 text-lg transition-all duration-300"
              style={{ 
                borderRadius: '12px',
                borderColor: 'var(--y-axis-green)',
                color: 'var(--y-axis-green)'
              }}
              onClick={() => (window as any).navigate('/products/integration-agent')}
            >
              View All Integrations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </MotionDiv>
        </div>
      </section>

      {/* Compare Agents Section */}
      <section className="py-32 bg-gradient-to-b from-muted to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-8 text-4xl md:text-5xl">Choose Your AI Agents</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Start with one agent or deploy the full suite. Each agent specializes in specific business functions.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Finance Agent",
                description: "Close the books on busywork",
                icon: BarChart3,
                capabilities: ["AR/AP Automation", "Reconciliation", "Financial Reporting", "Policy Compliance"],
                href: "/products/finance-agent",
                delay: 0
              },
              {
                title: "Sales Agent",
                description: "Pipeline hygiene on autopilot",
                icon: Users,
                capabilities: ["Lead Scoring", "CRM Hygiene", "Pipeline Analysis", "Next-best Actions"],
                href: "/products/sales-agent",
                delay: 0.1
              },
              {
                title: "Inventory Agent",
                description: "Stock less. Ship more.",
                icon: Package,
                capabilities: ["Demand Forecasting", "Auto-reorder", "Shrinkage Alerts", "Supply Chain Optimization"],
                href: "/products/inventory-agent",
                delay: 0.2
              },
              {
                title: "Integration Agent",
                description: "Integrations that don't sprawl",
                icon: GitBranch,
                capabilities: ["Data Mapping", "Flow Monitoring", "Error Healing", "API Management"],
                href: "/products/integration-agent",
                delay: 0.3
              }
            ].map((agent, index) => (
              <MotionCard
                key={agent.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: agent.delay }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => (window as any).navigate(agent.href)}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white group-hover:scale-105">
                  <CardContent className="p-8">
                    <div 
                      className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl group-hover:scale-110 transition-all duration-300"
                      style={{ backgroundColor: 'var(--y-axis-green)10' }}
                    >
                      <agent.icon className="h-8 w-8" style={{ color: 'var(--y-axis-green)' }} />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{agent.title}</h3>
                    <p className="text-muted-foreground mb-6 text-sm">{agent.description}</p>
                    <ul className="space-y-2">
                      {agent.capabilities.map((capability, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle2 className="h-3 w-3 mr-2 text-y-axis-green flex-shrink-0" />
                          {capability}
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

      {/* Roadmap Section */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-8 text-4xl md:text-5xl">Our Expansion Roadmap</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Starting in the Philippines, expanding to Singapore and the US, with exciting features coming soon.
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
                  <div className="space-y-12">
                    {[
                      {
                        phase: "Phase 1",
                        period: "Q1 2025",
                        region: "Philippines",
                        status: "current",
                        features: ["Enterprise Suite Launch", "Finance & Sales Agents", "Azure PH Data Residency"]
                      },
                      {
                        phase: "Phase 2", 
                        period: "Q3 2025",
                        region: "Singapore",
                        status: "planned",
                        features: ["Regional Expansion", "Inventory & Integration Agents", "Multi-currency Support"]
                      },
                      {
                        phase: "Phase 3",
                        period: "Q1 2026",
                        region: "United States",
                        status: "planned",
                        features: ["Global Launch", "Free Tier Availability", "Advanced Analytics"]
                      }
                    ].map((phase, index) => (
                      <div key={phase.phase} className="flex items-center space-x-8">
                        <div className="flex-shrink-0">
                          <div 
                            className={`w-16 h-16 rounded-full flex items-center justify-center ${
                              phase.status === 'current' 
                                ? 'bg-y-axis-green text-white' 
                                : 'bg-muted text-muted-foreground'
                            }`}
                          >
                            {phase.status === 'current' ? <CheckCircle2 className="h-8 w-8" /> : <Clock className="h-8 w-8" />}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-2">
                            <h3 className="text-xl font-semibold">{phase.phase}</h3>
                            <Badge variant={phase.status === 'current' ? 'default' : 'secondary'}>
                              {phase.period}
                            </Badge>
                            <Badge variant="outline">{phase.region}</Badge>
                          </div>
                          <ul className="text-muted-foreground">
                            {phase.features.map((feature, i) => (
                              <li key={i} className="flex items-center">
                                <CheckCircle2 className="h-4 w-4 mr-2 text-y-axis-green" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-12 text-center">
                    <p className="text-muted-foreground mb-6">
                      <strong>Coming October 2025:</strong> Free tier with basic agent capabilities
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-2 px-8 py-3 text-lg transition-all duration-300"
                      style={{ 
                        borderRadius: '12px',
                        borderColor: 'var(--y-axis-green)',
                        color: 'var(--y-axis-green)'
                      }}
                      onClick={() => (window as any).navigate('/contact')}
                    >
                      Join the Waitlist
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
              Ready to transform your operations?
            </h2>
            <p className="text-white/80 text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
              Join forward-thinking businesses already using Ascent Agents to turn decisions into measurable results.
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
                Try Free
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 px-12 py-4 text-lg transition-all duration-300 hover:opacity-80"
                style={{ 
                  borderRadius: '16px',
                  borderColor: 'var(--y-axis-green)',
                  color: 'var(--y-axis-green)'
                }}
                onClick={() => (window as any).navigate('/partners')}
              >
                Partner With Us
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
}