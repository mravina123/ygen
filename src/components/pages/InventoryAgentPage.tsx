import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  ArrowRight, 
  TrendingDown,
  Package,
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  Boxes,
  Truck,
  Warehouse,
  Calculator,
  Clock,
  Shield,
  Target,
  Zap,
  TrendingUp,
  Activity,
  Database,
  Bell
} from 'lucide-react';
import { motion } from 'motion/react';

const MotionDiv = motion.div;
const MotionCard = motion.div;

export function InventoryAgentPage() {
  return (
    <div className="w-full">
      {/* Hero Section - Blue to Indigo Gradient */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #6CA8FF 0%, #3C4B99 100%)' }}>
        {/* Warehouse Grid Nodes */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        ></div>
        
        {/* Stacked Cubes Visual */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          {/* Cube Stack 1 */}
          <div className="absolute top-1/4 left-1/5">
            <svg width="60" height="70" viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 0L60 15V35L30 50L0 35V15L30 0Z" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
              <path d="M30 20L60 35V55L30 70L0 55V35L30 20Z" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5"/>
            </svg>
          </div>
          
          {/* Cube Stack 2 */}
          <div className="absolute top-1/2 right-1/4">
            <svg width="50" height="60" viewBox="0 0 50 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 0L50 12.5V30L25 42.5L0 30V12.5L25 0Z" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5"/>
              <path d="M25 17.5L50 30V47.5L25 60L0 47.5V30L25 17.5Z" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
            </svg>
          </div>
          
          {/* Cube Stack 3 */}
          <div className="absolute bottom-1/4 left-1/3">
            <svg width="45" height="55" viewBox="0 0 45 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.5 0L45 11.25V27.5L22.5 38.75L0 27.5V11.25L22.5 0Z" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
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
              Stock less. Ship more.
            </h1>
            <p className="mb-12 text-xl md:text-2xl text-slate-800 max-w-3xl mx-auto leading-relaxed">
              Forecasting, reorder policies, and anomaly detection that cut carrying costs.
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
                  backgroundColor: '#FF9E4A',
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
            <h2 className="mb-8 text-4xl md:text-5xl">Proven Inventory Optimization</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Real cost savings and efficiency gains from businesses using Inventory Agent in pilot programs.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {[
              {
                metric: "Holding Cost",
                improvement: "↓ 8–12%",
                description: "Reduced carrying costs through optimized stock levels and improved demand forecasting accuracy",
                icon: TrendingDown,
                color: 'var(--success)',
                delay: 0
              },
              {
                metric: "Stockouts",
                improvement: "↓ 15–25%",
                description: "Fewer missed sales opportunities through proactive reorder recommendations and safety stock optimization",
                icon: AlertTriangle,
                color: 'var(--warning)',
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
            <h2 className="mb-8 text-4xl md:text-5xl">Smart Inventory Management</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              AI-powered features that optimize your inventory levels while minimizing costs and stockouts.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Demand Forecasting Assistant",
                description: "Advanced AI models analyze historical sales, seasonality, and market trends to predict future demand with exceptional accuracy.",
                icon: BarChart3,
                features: ["Seasonal pattern recognition", "Trend analysis", "External factor integration", "Multi-SKU forecasting"],
                delay: 0
              },
              {
                title: "Auto‑Reorder Policy Proposals",
                description: "Intelligent recommendations for optimal reorder points, quantities, and timing based on demand patterns and lead times.",
                icon: Calculator,
                features: ["Dynamic reorder points", "Economic order quantities", "Lead time optimization", "Supplier performance"],
                delay: 0.1
              },
              {
                title: "Shrinkage/Variance Alerts",
                description: "Real-time monitoring and alerts for inventory discrepancies, theft, damage, or unexplained variances requiring investigation.",
                icon: Bell,
                features: ["Real-time monitoring", "Threshold alerts", "Pattern detection", "Investigation workflows"],
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
                      style={{ backgroundColor: 'var(--warning)10' }}
                    >
                      <feature.icon className="h-8 w-8" style={{ color: 'var(--warning)' }} />
                    </div>
                    <h3 className="mb-4 text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle2 className="h-3 w-3 mr-2 text-warning flex-shrink-0" />
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
            <h2 className="mb-8 text-4xl md:text-5xl">Connects to Your Supply Chain</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              System-agnostic design integrates with your existing inventory management, ERP, and warehouse systems.
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
                  {/* Inventory Management Systems */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-semibold mb-8 text-center">Inventory Management Systems</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {[
                        {
                          name: "NetSuite",
                          category: "Cloud ERP",
                          description: "Complete integration with NetSuite's inventory and supply chain modules",
                          icon: Database
                        },
                        {
                          name: "Oracle WMS",
                          category: "Warehouse Management",
                          description: "Advanced warehouse operations and inventory tracking integration",
                          icon: Warehouse
                        },
                        {
                          name: "Manhattan Associates",
                          category: "Supply Chain",
                          description: "Enterprise-grade supply chain planning and execution integration",
                          icon: Truck
                        }
                      ].map((integration, index) => (
                        <div key={integration.name} className="text-center">
                          <div 
                            className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-xl"
                            style={{ backgroundColor: 'var(--warning)10' }}
                          >
                            <integration.icon className="h-8 w-8" style={{ color: 'var(--warning)' }} />
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

                  {/* Data Sources */}
                  <div className="border-t border-border pt-12">
                    <h3 className="text-2xl font-semibold mb-8 text-center">Data Sources</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {[
                        { name: "POS Systems", icon: Activity, color: 'var(--success)' },
                        { name: "E-commerce", icon: Zap, color: 'var(--info)' },
                        { name: "Suppliers", icon: Truck, color: 'var(--warning)' },
                        { name: "Warehouses", icon: Boxes, color: 'var(--electric-blue)' }
                      ].map((source, index) => (
                        <div key={source.name} className="text-center">
                          <div 
                            className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-lg"
                            style={{ backgroundColor: `${source.color}10` }}
                          >
                            <source.icon className="h-6 w-6" style={{ color: source.color }} />
                          </div>
                          <p className="text-sm font-medium">{source.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center border-t border-border pt-8 mt-8">
                    <p className="text-muted-foreground mb-6">
                      <strong>System-agnostic architecture</strong> supports 150+ inventory and supply chain platforms
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-2 px-8 py-3 text-lg transition-all duration-300"
                      style={{ 
                        borderRadius: '12px',
                        borderColor: 'var(--warning)',
                        color: 'var(--warning)'
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
            <h2 className="mb-8 text-4xl md:text-5xl">Governed Inventory Decisions</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Maintain control over your supply chain while leveraging AI to optimize inventory levels and reduce costs.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Approval Workflows",
                description: "Large reorder recommendations and policy changes require manager approval before execution, maintaining oversight of significant decisions.",
                features: ["Value thresholds", "Manager escalation", "Bulk order approval"]
              },
              {
                icon: Shield,
                title: "Policy Compliance",
                description: "AI recommendations automatically align with your inventory policies, supplier agreements, and regulatory requirements.",
                features: ["Inventory policies", "Supplier contracts", "Regulatory compliance"]
              },
              {
                icon: BarChart3,
                title: "Decision Tracking",
                description: "Complete audit trail of all AI recommendations, human decisions, and inventory actions for accountability and optimization.",
                features: ["Recommendation logs", "Decision history", "Performance analytics"]
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
                      style={{ backgroundColor: 'var(--warning)10' }}
                    >
                      <feature.icon className="h-8 w-8" style={{ color: 'var(--warning)' }} />
                    </div>
                    <h3 className="mb-4 text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 mr-2 text-warning" />
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
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ backgroundColor: 'var(--warning)' }}></div>
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white mb-8 text-4xl md:text-6xl">
              Ready to optimize your inventory?
            </h2>
            <p className="text-white/80 text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
              Join supply chain teams already using AI to reduce costs while maintaining perfect stock levels.
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