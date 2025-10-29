import { Button } from '../ui/button';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { 
  ArrowRight, 
  Check,
  Star,
  Zap,
  Building,
  Rocket,
  Crown,
  Users,
  MessageSquare,
  Shield,
  BarChart3,
  Clock,
  Globe,
  HeadphonesIcon,
  Settings,
  Database,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const MotionDiv = motion.div;
const MotionCard = motion.div;

export function PricingPage() {
  const [currency, setCurrency] = useState('USD');
  const currencies = ['PHP', 'SGD', 'USD'];
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock HubSpot form submission
    console.log('Early access form submitted:', formData);
    alert('Thank you! You\'ll be notified when pricing goes live.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      phone: ''
    });
  };

  // Pricing by currency
  const pricing = {
    PHP: { free: 0, essential: 16800, growth: 56000, pro: "Custom" },
    SGD: { free: 0, essential: 405, growth: 1350, pro: "Custom" },
    USD: { free: 0, essential: 299, growth: 999, pro: "Custom" }
  };

  const tiers = [
    {
      name: "Free",
      description: "Perfect for exploring AI capabilities",
      price: pricing[currency as keyof typeof pricing].free,
      period: "/month",
      badge: null,
      features: [
        "1 Agent (Finance or Sales)",
        "Up to 100 actions/month",
        "5 integrations",
        "Community support",
        "Basic analytics dashboard",
        "Standard security",
        "14-day full feature trial"
      ],
      icon: Star,
      color: 'var(--muted-foreground)',
      buttonText: "Get Started Free",
      buttonVariant: "outline" as const
    },
    {
      name: "Essential",
      description: "Best for small teams getting started",
      price: pricing[currency as keyof typeof pricing].essential,
      period: "/month",
      badge: "Most Popular",
      features: [
        "Up to 3 Agents (any combination)",
        "Up to 2,000 actions/month",
        "15 integrations included",
        "Email support (24hr response)",
        "Custom approval workflows",
        "Advanced analytics & KPI tracking",
        "API access (rate-limited)",
        "Enhanced security & audit logs",
        "Role-based access control (RBAC)"
      ],
      icon: Zap,
      color: 'var(--electric-blue)',
      buttonText: "Start Essential",
      buttonVariant: "default" as const
    },
    {
      name: "Growth",
      description: "Ideal for scaling businesses",
      price: pricing[currency as keyof typeof pricing].growth,
      period: "/month",
      badge: null,
      features: [
        "Up to 10 Agents (all 4 types)",
        "Up to 10,000 actions/month",
        "50+ integrations included",
        "Priority support (4hr response)",
        "Phone & email support",
        "Advanced governance controls",
        "SOC 2 Type II compliance",
        "Custom reporting & exports",
        "Dedicated success manager",
        "Quarterly business reviews",
        "Full API access (unlimited)"
      ],
      icon: Building,
      color: 'var(--success)',
      buttonText: "Choose Growth",
      buttonVariant: "outline" as const
    },
    {
      name: "Pro",
      description: "For enterprises with complex needs",
      price: pricing[currency as keyof typeof pricing].pro,
      period: "",
      badge: "Enterprise",
      features: [
        "Unlimited Agents (all types)",
        "Unlimited actions per month",
        "200+ integrations + custom builds",
        "24/7 premium support (1hr SLA)",
        "White-glove onboarding",
        "Advanced governance & compliance",
        "Enterprise SSO (SAML, OIDC)",
        "Custom SLAs & uptime guarantees",
        "Dedicated infrastructure option",
        "Professional services included",
        "Custom model fine-tuning",
        "Multi-region data residency"
      ],
      icon: Crown,
      color: 'var(--y-axis-green)',
      buttonText: "Contact Sales",
      buttonVariant: "default" as const
    }
  ];

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
            {/* Coming Soon Badge */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-8"
            >

            </MotionDiv>

            <h1 className="mb-8 text-5xl md:text-7xl tracking-tight">
              Simple, transparent pricing
            </h1>
            <div className="mb-12 text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              <strong>Pricing goes live in October.</strong> Try Free today and lock your early‑access perks.
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
                Try Free Now
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
                  (window as any).navigate('/contact');
                }}
              >
                Get Early Access
              </Button>
            </MotionDiv>
          </MotionDiv>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-8 text-4xl md:text-5xl">Choose your plan</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Flexible pricing designed to grow with your business needs.
            </p>
            
            {/* Currency Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-muted-foreground">Currency:</span>
              <div className="flex items-center gap-2 p-1 bg-muted rounded-lg">
                {currencies.map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      currency === curr 
                        ? 'bg-white shadow-sm text-foreground' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tiers.map((tier, index) => (
              <MotionCard
                key={tier.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <Card className={`h-full border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white relative overflow-hidden ${
                  tier.badge === "Most Popular" ? 'scale-105 lg:scale-110' : ''
                }`}>
                  {tier.badge && (
                    <div className="absolute top-0 left-0 right-0">
                      <div 
                        className="text-center py-2 text-sm font-medium text-white"
                        style={{ backgroundColor: tier.color }}
                      >
                        {tier.badge}
                      </div>
                    </div>
                  )}
                  
                  <CardHeader className={`text-center pb-6 ${tier.badge ? 'pt-12' : 'pt-8'}`}>
                    <div 
                      className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-xl mx-auto"
                      style={{ backgroundColor: `${tier.color}10` }}
                    >
                      <tier.icon className="h-8 w-8" style={{ color: tier.color }} />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">{tier.name}</h3>
                    <p className="text-muted-foreground mb-4">{tier.description}</p>
                    <div className="mb-4">
                      {typeof tier.price === 'number' ? (
                        <>
                          <span className="text-lg text-muted-foreground mr-1">
                            {currency === 'PHP' ? '₱' : currency === 'SGD' ? 'S$' : '$'}
                          </span>
                          <span className="text-4xl font-bold" style={{ color: tier.color }}>
                            {tier.price === 0 ? '0' : tier.price.toLocaleString()}
                          </span>
                          <span className="text-muted-foreground">{tier.period}</span>
                        </>
                      ) : (
                        <span className="text-3xl font-bold" style={{ color: tier.color }}>{tier.price}</span>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: tier.color }} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant={tier.buttonVariant}
                      className="w-full py-3 text-lg transition-all duration-300"
                      style={{ 
                        borderRadius: '12px',
                        ...(tier.buttonVariant === 'default' ? {
                          backgroundColor: tier.color,
                          color: 'white'
                        } : {
                          borderColor: tier.color,
                          color: tier.color
                        })
                      }}
                      onClick={() => {
                        (window as any).navigate('/contact');
                      }}
                    >
                      {tier.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Early Access Form Section */}
      <section id="early-access" className="py-32 bg-gradient-to-b from-muted to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-8 text-4xl md:text-5xl">Get Early Access</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Be among the first to access our pricing when it goes live. Lock in early-access perks and exclusive benefits.
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-base font-medium">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="mt-2 text-lg py-3"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-base font-medium">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="mt-2 text-lg py-3"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-base font-medium">
                      Work Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="mt-2 text-lg py-3"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="company" className="text-base font-medium">
                      Company *
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Your Company Inc."
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="mt-2 text-lg py-3"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-base font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="mt-2 text-lg py-3"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{ 
                      borderRadius: '16px',
                      backgroundColor: 'var(--y-axis-green)',
                      color: 'white'
                    }}
                  >
                    Get Early Access
                    <Sparkles className="ml-3 h-6 w-6" />
                  </Button>
                </form>
                
                <div className="mt-8 p-4 bg-muted rounded-lg text-center">
                  <p className="text-sm text-muted-foreground">
                    <strong>Early Access Benefits:</strong> 20% off first year, priority support setup, 
                    extended trial period, and exclusive feature previews.
                  </p>
                </div>
              </CardContent>
            </Card>
          </MotionCard>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-8 text-4xl md:text-5xl">Frequently Asked Questions</h2>
          </MotionDiv>

          <div className="space-y-8">
            {[
              {
                question: "When will pricing be available?",
                answer: "Pricing will go live in October 2024. You can sign up for early access to be notified immediately when pricing becomes available."
              },
              {
                question: "What happens during the free trial?",
                answer: "All plans include a 14-day free trial with full access to features. No credit card required. You can explore all agents and integrations."
              },
              {
                question: "Can I change plans after launch?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated accordingly."
              },
              {
                question: "What are the early-access perks?",
                answer: "Early access members get 20% off their first year, priority support setup, extended trial periods, and exclusive previews of new features."
              },
              {
                question: "Do you offer custom enterprise pricing?",
                answer: "Yes, our Pro tier includes custom pricing for enterprises with specific needs. Contact our sales team for a personalized quote."
              }
            ].map((faq, index) => (
              <MotionCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
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
              Ready to get started?
            </h2>
            <p className="text-white/80 text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
              Start your free trial today. No credit card required, no setup fees.
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
                Try Free Now
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white px-16 py-4 text-lg transition-all duration-300 hover:bg-white hover:text-slate-900"
                style={{ borderRadius: '16px' }}
              >
                Get Early Access
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
}