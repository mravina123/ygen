import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { 
  ArrowRight, 
  TrendingDown,
  TrendingUp,
  DollarSign,
  Clock,
  Package,
  AlertTriangle,
  Network,
  BarChart3,
  CheckCircle2,
  Calculator,
  ShoppingCart,
  Truck,
  Factory,
  Building,
  Banknote,
  Users,
  Target,
  Zap,
  Activity,
  Globe
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const MotionDiv = motion.div;
const MotionCard = motion.div;

export function OutcomesPage() {
  const [revenue, setRevenue] = useState('');
  const [arDays, setArDays] = useState('');
  const [inventoryValue, setInventoryValue] = useState('');

  const calculateROI = () => {
    const revenueNum = parseFloat(revenue) || 0;
    const arDaysNum = parseFloat(arDays) || 0;
    const inventoryNum = parseFloat(inventoryValue) || 0;
    
    // Simple ROI calculations based on typical improvements
    const arImprovement = (revenueNum * 0.15 * arDaysNum) / 365; // 15% AR improvement
    const inventoryImprovement = inventoryNum * 0.10; // 10% inventory cost reduction
    const totalSavings = arImprovement + inventoryImprovement;
    
    return {
      arSavings: arImprovement,
      inventorySavings: inventoryImprovement,
      totalSavings: totalSavings,
      roi: totalSavings > 0 ? (totalSavings / 50000) * 100 : 0 // Assuming $50k investment
    };
  };

  const kpiData = [
    {
      title: "AR Days",
      improvement: "↓ 12–20%",
      description: "Faster collection cycles through intelligent dunning and automated follow-ups",
      icon: Clock,
      color: 'var(--y-axis-green)',
      productLink: '/products/finance-agent'
    },
    {
      title: "Close Rate",
      improvement: "↑ 10–15%",
      description: "Higher conversion through intelligent next-best actions and timely follow-ups",
      icon: TrendingUp,
      color: 'var(--electric-blue)',
      productLink: '/products/sales-agent'
    },
    {
      title: "Carrying Cost",
      improvement: "↓ 8–12%",
      description: "Reduced holding costs through optimized stock levels and demand forecasting",
      icon: Package,
      color: 'var(--warning)',
      productLink: '/products/inventory-agent'
    },
    {
      title: "Stockouts",
      improvement: "↓ 15–25%",
      description: "Fewer missed sales through proactive reorder recommendations",
      icon: AlertTriangle,
      color: 'var(--warning)',
      productLink: '/products/inventory-agent'
    },
    {
      title: "Integration Cycle Time",
      improvement: "↓ 60–80%",
      description: "Faster deployment through automated mapping and policy generation",
      icon: Network,
      color: 'var(--info)',
      productLink: '/products/integration-agent'
    },
    {
      title: "Exception Triage Time",
      improvement: "↓ 40–60%",
      description: "Automated categorization and routing of financial exceptions",
      icon: AlertTriangle,
      color: 'var(--y-axis-green)',
      productLink: '/products/finance-agent'
    }
  ];

  const industries = [
    {
      name: "Retail",
      icon: ShoppingCart,
      color: 'var(--electric-blue)',
      description: "Optimize inventory, boost sales performance, and streamline operations",
      kpis: [
        { name: "Inventory Turnover", value: "↑ 25%", agent: "Inventory" },
        { name: "Sales Conversion", value: "↑ 15%", agent: "Sales" },
        { name: "Stockout Reduction", value: "↓ 30%", agent: "Inventory" },
        { name: "Cash Flow", value: "↑ 20%", agent: "Finance" }
      ],
      ctaText: "Transform Retail Operations"
    },
    {
      name: "Distribution",
      icon: Truck,
      color: 'var(--warning)',
      description: "Enhance supply chain efficiency and reduce operational costs",
      kpis: [
        { name: "Order Fulfillment", value: "↑ 40%", agent: "Integration" },
        { name: "Carrying Costs", value: "↓ 15%", agent: "Inventory" },
        { name: "System Integration", value: "↓ 70%", agent: "Integration" },
        { name: "AR Collection", value: "↓ 18%", agent: "Finance" }
      ],
      ctaText: "Optimize Distribution"
    },
    {
      name: "Manufacturing",
      icon: Factory,
      color: 'var(--success)',
      description: "Streamline production planning and financial operations",
      kpis: [
        { name: "Production Efficiency", value: "↑ 30%", agent: "Integration" },
        { name: "Raw Material Costs", value: "↓ 12%", agent: "Inventory" },
        { name: "Financial Closing", value: "↓ 50%", agent: "Finance" },
        { name: "Quality Exceptions", value: "↓ 45%", agent: "Finance" }
      ],
      ctaText: "Modernize Manufacturing"
    },
    {
      name: "Hospitality",
      icon: Building,
      color: 'var(--info)',
      description: "Improve guest experience while optimizing revenue operations",
      kpis: [
        { name: "Revenue per Room", value: "↑ 18%", agent: "Sales" },
        { name: "F&B Waste", value: "↓ 25%", agent: "Inventory" },
        { name: "Guest Satisfaction", value: "↑ 22%", agent: "Sales" },
        { name: "Operational Costs", value: "↓ 15%", agent: "Finance" }
      ],
      ctaText: "Elevate Hospitality"
    },
    {
      name: "Financial Services",
      icon: Banknote,
      color: 'var(--y-axis-green)',
      description: "Enhance compliance, reduce risk, and improve client outcomes",
      kpis: [
        { name: "Processing Time", value: "↓ 65%", agent: "Finance" },
        { name: "Compliance Accuracy", value: "↑ 35%", agent: "Finance" },
        { name: "Client Onboarding", value: "↓ 50%", agent: "Integration" },
        { name: "Risk Detection", value: "↑ 40%", agent: "Finance" }
      ],
      ctaText: "Secure Financial Operations"
    }
  ];

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="w-full">
      {/* Hero Section - Turn every decision into action */}
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center py-32">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Logo */}
            <div className="mb-16 flex justify-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--y-axis-green)' }}></div>
                <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: 'var(--electric-blue)' }}></div>
                <div className="w-3 h-3" style={{ 
                  width: '0',
                  height: '0',
                  borderLeft: '6px solid transparent',
                  borderRight: '6px solid transparent',
                  borderBottom: '10px solid var(--slate-ink)'
                }}></div>
              </div>
            </div>

            <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl tracking-tight">
              Turn every decision into action
            </h1>
            <p className="mb-12 text-2xl md:text-3xl text-muted-foreground leading-relaxed">
              Agentic AI that moves KPIs up and to the right.
            </p>
            
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button 
                size="lg"
                className="px-10 py-3 shadow-sm hover:shadow-md transition-all duration-300"
                style={{ 
                  borderRadius: '8px',
                  backgroundColor: 'var(--slate-ink)',
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

      {/* How It Works - Explain → Act → Insight */}
      <section className="py-32 bg-white">
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
              A complete workflow where agents analyze your data to explain what's happening, take governed actions with your approval, and generate insights from every decision made.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Explain",
                description: "Agents analyze your data patterns, identify opportunities and risks, and provide context-aware explanations of what's happening in your business right now.",
                icon: Activity,
                bgColor: 'var(--electric-blue)',
                iconColor: 'var(--electric-blue)',
                delay: 0
              },
              {
                title: "Act", 
                description: "With your approval, agents take governed actions—from sending customer communications to adjusting inventory levels—all fully audited and compliant.",
                icon: Zap,
                bgColor: 'var(--y-axis-green)',
                iconColor: 'var(--y-axis-green)',
                delay: 0.2
              },
              {
                title: "Insight",
                description: "Every action generates data. Agents learn from outcomes, refine recommendations, and surface insights that help you make better decisions over time.",
                icon: Target,
                bgColor: '#9333ea',
                iconColor: '#9333ea',
                delay: 0.4
              }
            ].map((step) => (
              <MotionCard
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: step.delay }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <CardContent className="p-10 text-center">
                    <div 
                      className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-2xl"
                      style={{ backgroundColor: `${step.bgColor}10` }}
                    >
                      <step.icon className="h-10 w-10" style={{ color: step.iconColor }} />
                    </div>
                    <h3 className="mb-6 text-2xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & System-agnostic Differentiators */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: 'var(--electric-blue)' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: 'var(--y-axis-green)' }}></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-white mb-8 text-4xl md:text-5xl">Why Ascent Agents Are Different</h2>
            <p className="text-white/80 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Two key pillars make Ascent Agents the right choice for enterprise operations.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Governed Agents",
                description: "Every agent action requires approval. Role-based permissions, complete audit trails, and transparent decision-making ensure AI works within your business policies—not around them.",
                icon: CheckCircle2,
                features: [
                  "Role-based approval workflows",
                  "Complete audit logs",
                  "Transparent AI decisions",
                  "Compliance-ready operations"
                ],
                delay: 0
              },
              {
                title: "System-Agnostic",
                description: "Seamlessly integrates with your existing ERP, CRM, POS, PMS, and other business systems. No costly replacements or major overhauls required.",
                icon: Globe,
                features: [
                  "Works with existing systems",
                  "Universal data connectors",
                  "No vendor lock-in",
                  "Rapid deployment"
                ],
                delay: 0.2
              }
            ].map((differentiator) => (
              <MotionCard
                key={differentiator.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: differentiator.delay }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-500">
                  <CardContent className="p-10">
                    <div 
                      className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/20"
                    >
                      <differentiator.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-white mb-4 text-2xl font-semibold">{differentiator.title}</h3>
                    <p className="text-white/80 leading-relaxed mb-6">
                      {differentiator.description}
                    </p>
                    <ul className="space-y-3">
                      {differentiator.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-white/90">
                          <CheckCircle2 className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: 'var(--y-axis-green)' }} />
                          <span>{feature}</span>
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

      {/* KPI Grid Section */}
      <section className="py-32 bg-white">
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
              Key performance indicators improved across pilot programs with Ascent Agents.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kpiData.map((kpi, index) => (
              <MotionCard
                key={kpi.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => navigate(kpi.productLink)}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white group-hover:scale-105">
                  <CardContent className="p-8">
                    <div 
                      className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl group-hover:scale-110 transition-all duration-300"
                      style={{ backgroundColor: `${kpi.color}10` }}
                    >
                      <kpi.icon className="h-8 w-8" style={{ color: kpi.color }} />
                    </div>
                    <div className="mb-4 text-3xl font-bold" style={{ color: kpi.color }}>
                      {kpi.improvement}
                    </div>
                    <h3 className="mb-4 text-xl font-semibold">{kpi.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {kpi.description}
                    </p>
                    <div className="flex items-center text-sm" style={{ color: kpi.color }}>
                      <span className="font-medium">Learn more</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Anchors Section */}
      <section className="py-32 bg-gradient-to-b from-muted to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-8 text-4xl md:text-5xl">Impact by Industry</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              See how Ascent Agents transform operations across different sectors.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <MotionCard
                key={industry.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div 
                        className="mr-4 inline-flex items-center justify-center w-16 h-16 rounded-xl group-hover:scale-110 transition-all duration-300"
                        style={{ backgroundColor: `${industry.color}10` }}
                      >
                        <industry.icon className="h-8 w-8" style={{ color: industry.color }} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold">{industry.name}</h3>
                        <p className="text-muted-foreground">{industry.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {industry.kpis.map((kpi, i) => (
                        <div key={i} className="text-center p-4 bg-muted rounded-lg">
                          <div className="text-lg font-bold" style={{ color: industry.color }}>
                            {kpi.value}
                          </div>
                          <div className="text-sm text-muted-foreground">{kpi.name}</div>
                          <Badge variant="outline" className="mt-2 text-xs">
                            {kpi.agent} Agent
                          </Badge>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-2 py-3 text-lg transition-all duration-300"
                      style={{ 
                        borderRadius: '12px',
                        borderColor: industry.color,
                        color: industry.color
                      }}
                      onClick={() => navigate('/ascent-agents')}
                    >
                      {industry.ctaText}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-8 text-4xl md:text-5xl">ROI Calculator</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Estimate your potential savings with Ascent Agents based on your business metrics.
            </p>
          </MotionDiv>

          <MotionCard
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Input Section */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-8">Your Business Metrics</h3>
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="revenue" className="text-base font-medium">
                          Annual Revenue ($)
                        </Label>
                        <Input
                          id="revenue"
                          type="number"
                          placeholder="0"
                          value={revenue}
                          onChange={(e) => setRevenue(e.target.value)}
                          className="mt-2 text-lg py-3"
                        />
                      </div>
                      <div>
                        <Label htmlFor="ar-days" className="text-base font-medium">
                          Current AR Days
                        </Label>
                        <Input
                          id="ar-days"
                          type="number"
                          placeholder="0"
                          value={arDays}
                          onChange={(e) => setArDays(e.target.value)}
                          className="mt-2 text-lg py-3"
                        />
                      </div>
                      <div>
                        <Label htmlFor="inventory" className="text-base font-medium">
                          Inventory Value ($)
                        </Label>
                        <Input
                          id="inventory"
                          type="number"
                          placeholder="0"
                          value={inventoryValue}
                          onChange={(e) => setInventoryValue(e.target.value)}
                          className="mt-2 text-lg py-3"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Results Section */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-8">Estimated Annual Savings</h3>
                    <div className="space-y-6">
                      {(() => {
                        const results = calculateROI();
                        const rev = parseFloat(revenue) || 0;
                        const arD = parseFloat(arDays) || 0;
                        const invValue = parseFloat(inventoryValue) || 0;
                        const dailyRevenue = rev / 365;
                        const arDaysReduced = arD * 0.33;
                        const inventoryReduction = invValue * 0.15;
                        
                        return (
                          <>
                            <div className="p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-muted-foreground">AR Improvement</span>
                                <DollarSign className="h-5 w-5 text-success" />
                              </div>
                              <div className="text-2xl font-bold text-success">
                                ${results.arSavings.toLocaleString(undefined, {maximumFractionDigits: 0})}
                              </div>
                              {rev > 0 && arD > 0 && (
                                <div className="mt-3 pt-3 border-t border-green-200 text-xs text-muted-foreground space-y-1">
                                  <div>Daily Revenue: ${dailyRevenue.toLocaleString(undefined, {maximumFractionDigits: 0})}</div>
                                  <div>AR Days Reduced: {arDaysReduced.toFixed(1)} days (33%)</div>
                                  <div className="text-success font-medium pt-1">= ${dailyRevenue.toLocaleString(undefined, {maximumFractionDigits: 0})} × {arDaysReduced.toFixed(1)}</div>
                                </div>
                              )}
                            </div>
                            
                            <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-muted-foreground">Inventory Optimization</span>
                                <Package className="h-5 w-5 text-info" />
                              </div>
                              <div className="text-2xl font-bold text-info">
                                ${results.inventorySavings.toLocaleString(undefined, {maximumFractionDigits: 0})}
                              </div>
                              {invValue > 0 && (
                                <div className="mt-3 pt-3 border-t border-blue-200 text-xs text-muted-foreground space-y-1">
                                  <div>Current Inventory: ${invValue.toLocaleString(undefined, {maximumFractionDigits: 0})}</div>
                                  <div>Excess Reduction: 15%</div>
                                  <div className="text-info font-medium pt-1">= ${invValue.toLocaleString(undefined, {maximumFractionDigits: 0})} × 0.15</div>
                                </div>
                              )}
                            </div>
                            
                            <div className="p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border-2 border-purple-200">
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-medium">Total Annual Savings</span>
                                <BarChart3 className="h-5 w-5" style={{ color: 'var(--y-axis-green)' }} />
                              </div>
                              <div className="text-3xl font-bold" style={{ color: 'var(--y-axis-green)' }}>
                                ${results.totalSavings.toLocaleString(undefined, {maximumFractionDigits: 0})}
                              </div>
                              {(rev > 0 || invValue > 0) && (
                                <div className="mt-3 pt-3 border-t border-purple-200 text-xs text-muted-foreground space-y-1">
                                  <div>AR Savings: ${results.arSavings.toLocaleString(undefined, {maximumFractionDigits: 0})}</div>
                                  <div>Inventory Savings: ${results.inventorySavings.toLocaleString(undefined, {maximumFractionDigits: 0})}</div>
                                  <div className="font-medium pt-1" style={{ color: 'var(--y-axis-green)' }}>= ${results.arSavings.toLocaleString(undefined, {maximumFractionDigits: 0})} + ${results.inventorySavings.toLocaleString(undefined, {maximumFractionDigits: 0})}</div>
                                </div>
                              )}
                              <div className="text-sm text-muted-foreground mt-2">
                                Estimated ROI: {results.roi.toFixed(0)}%
                              </div>
                            </div>
                          </>
                        );
                      })()}
                    </div>
                    
                    <div className="mt-8 p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>Note:</strong> Calculations are estimates based on pilot program averages. 
                        Actual results depend on implementation, data quality, and existing processes.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </MotionCard>
        </div>
      </section>


    </div>
  );
}