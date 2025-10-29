import { Button } from '../ui/button';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { 
  ArrowRight, 
  Users,
  Target,
  TrendingUp,
  MapPin,
  Building,
  Handshake,
  Star,
  Zap,
  Shield,
  Rocket,
  BarChart3,
  Globe,
  CheckCircle2,
  Crown,
  Award,
  MessageSquare,
  DollarSign,
  Settings,
  Eye,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const MotionDiv = motion.div;
const MotionCard = motion.div;

export function PartnersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    focusIndustry: '',
    whyYou: '',
    region: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    console.log('Partner application submitted:', formData);
    alert('Thank you for your application! We\'ll review it and get back to you within 5 business days.');
    setFormData({
      name: '',
      email: '',
      company: '',
      website: '',
      focusIndustry: '',
      whyYou: '',
      region: ''
    });
  };

  const benefits = [
    {
      title: "Co-marketing",
      description: "Joint go-to-market activities, co-branded materials, shared marketing campaigns, and feature placement in our partner showcase.",
      icon: TrendingUp,
      color: 'var(--electric-blue)'
    },
    {
      title: "Roadmap Influence",
      description: "Direct input on product development priorities, early access to roadmap discussions, and quarterly strategy sessions with our product team.",
      icon: Target,
      color: 'var(--y-axis-green)'
    },
    {
      title: "Sandbox Access",
      description: "Dedicated sandbox environment for testing, development, and demo purposes with unlimited usage and priority technical support.",
      icon: Settings,
      color: 'var(--info)'
    },
    {
      title: "Partner Margin",
      description: "Competitive margin structure with performance bonuses, volume discounts, and exclusive pricing tiers for your clients.",
      icon: DollarSign,
      color: 'var(--success)'
    },
    {
      title: "Perpetual Commission",
      description: "Ongoing revenue share for the lifetime of referred clients, with detailed terms available under NDA.",
      icon: BarChart3,
      color: 'var(--warning)'
    }
  ];

  const idealPartners = [
    {
      type: "Systems Integrators (SIs)",
      description: "Help businesses implement and customize Ascent Agents across complex enterprise environments",
      icon: Building,
      examples: ["Enterprise implementation specialists", "Digital transformation consultants", "ERP integration experts"]
    },
    {
      type: "Value-Added Resellers (VARs)",
      description: "Package Ascent Agents with complementary solutions to create comprehensive business offerings",
      icon: Handshake,
      examples: ["Business software resellers", "Cloud solution providers", "Technology distributors"]
    },
    {
      type: "Managed Service Providers (MSPs)",
      description: "Offer Ascent Agents as part of ongoing managed services to your client base",
      icon: Shield,
      examples: ["IT service providers", "Business process outsourcers", "Managed cloud services"]
    }
  ];

  const industries = [
    "Retail",
    "Distribution", 
    "Manufacturing",
    "Hospitality",
    "Financial Services",
    "Healthcare",
    "Professional Services",
    "Technology",
    "Other"
  ];

  const regions = [
    "Metro Manila",
    "Luzon",
    "Visayas", 
    "Mindanao",
    "National Coverage",
    "Other"
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
            {/* Exclusive Badge */}
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
                <Crown className="h-4 w-4 mr-2" />
                Founding Partners Program
              </Badge>
            </MotionDiv>

            <h1 className="mb-8 text-5xl md:text-7xl tracking-tight">
              Be one of ten
            </h1>
            <div className="mb-12 text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Join the Founding Partners program and help shape the Ascent Agents Suite.
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
                onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Apply Now
              </Button>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Users className="h-5 w-5" />
                <span>Limited to 10 spots</span>
              </div>
            </MotionDiv>
          </MotionDiv>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-8 text-4xl md:text-5xl">What You Get</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Exclusive benefits designed to accelerate your success as a founding partner.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <MotionCard
                key={benefit.title}
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
                      style={{ backgroundColor: `${benefit.color}10` }}
                    >
                      <benefit.icon className="h-8 w-8" style={{ color: benefit.color }} />
                    </div>
                    <h3 className="mb-4 text-xl font-semibold">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </MotionCard>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-muted rounded-full">
                <Eye className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  <strong>Commission details</strong> available under NDA
                </span>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Who Should Apply Section */}
      <section className="py-32 bg-gradient-to-b from-muted to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-8 text-4xl md:text-5xl">Who Should Apply</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We're seeking established partners in the Philippines (Phase 1) with deep market expertise.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {idealPartners.map((partner, index) => (
              <MotionCard
                key={partner.type}
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
                      <partner.icon className="h-8 w-8" style={{ color: 'var(--electric-blue)' }} />
                    </div>
                    <h3 className="mb-4 text-xl font-semibold">{partner.type}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {partner.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">Examples:</p>
                      {partner.examples.map((example, i) => (
                        <div key={i} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle2 className="h-3 w-3 mr-2 text-electric-blue flex-shrink-0" />
                          {example}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </MotionCard>
            ))}
          </div>

          {/* Phase 1 Focus */}
          <MotionCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-green-50">
              <CardContent className="p-12 text-center">
                <div 
                  className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-xl"
                  style={{ backgroundColor: 'var(--y-axis-green)10' }}
                >
                  <MapPin className="h-10 w-10" style={{ color: 'var(--y-axis-green)' }} />
                </div>
                <h3 className="mb-4 text-2xl font-semibold">Phase 1: Philippines Focus</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  We're starting with partners who have deep understanding of the Philippine market, 
                  established client relationships, and proven track records in business technology solutions.
                </p>
              </CardContent>
            </Card>
          </MotionCard>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-32 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-8 text-4xl md:text-5xl">Apply to Become a Founding Partner</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tell us about your organization and why you'd be a great founding partner.
            </p>
            <div className="flex items-center justify-center gap-2 mt-6 text-muted-foreground">
              <Award className="h-5 w-5" />
              <span>Only <strong>10 spots</strong> available</span>
            </div>
          </MotionDiv>

          <MotionCard
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-base font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="mt-2 text-lg py-3"
                        required
                      />
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
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company" className="text-base font-medium">
                        Company Name *
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
                      <Label htmlFor="website" className="text-base font-medium">
                        Company Website
                      </Label>
                      <Input
                        id="website"
                        type="url"
                        placeholder="https://www.yourcompany.com"
                        value={formData.website}
                        onChange={(e) => handleInputChange('website', e.target.value)}
                        className="mt-2 text-lg py-3"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="focusIndustry" className="text-base font-medium">
                        Focus Industry *
                      </Label>
                      <Select value={formData.focusIndustry} onValueChange={(value) => handleInputChange('focusIndustry', value)}>
                        <SelectTrigger className="mt-2 text-lg py-3">
                          <SelectValue placeholder="Select your primary industry focus" />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.map((industry) => (
                            <SelectItem key={industry} value={industry}>
                              {industry}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="region" className="text-base font-medium">
                        Primary Region *
                      </Label>
                      <Select value={formData.region} onValueChange={(value) => handleInputChange('region', value)}>
                        <SelectTrigger className="mt-2 text-lg py-3">
                          <SelectValue placeholder="Select your coverage area" />
                        </SelectTrigger>
                        <SelectContent>
                          {regions.map((region) => (
                            <SelectItem key={region} value={region}>
                              {region}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="whyYou" className="text-base font-medium">
                      Why should we choose you as a founding partner? *
                    </Label>
                    <Textarea
                      id="whyYou"
                      placeholder="Tell us about your company's experience, client base, market expertise, and what unique value you'd bring to the partnership..."
                      value={formData.whyYou}
                      onChange={(e) => handleInputChange('whyYou', e.target.value)}
                      className="mt-2 text-lg py-3 min-h-32"
                      required
                    />
                    <div className="text-sm text-muted-foreground mt-2">
                      Include details about your team size, years in business, key clients, and relevant certifications.
                    </div>
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
                    Apply Now
                    <Sparkles className="ml-3 h-6 w-6" />
                  </Button>
                </form>
                
                <div className="mt-8 p-6 bg-muted rounded-lg">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 mt-0.5 text-muted-foreground" />
                    <div className="text-sm text-muted-foreground">
                      <p className="mb-2">
                        <strong>Next Steps:</strong> We'll review your application within 5 business days. 
                        Qualified candidates will be invited to a discovery call to discuss partnership details.
                      </p>
                      <p>
                        Questions? Email us at <strong>partners@ygen.ph</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </MotionCard>
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
              Ready to lead the future?
            </h2>
            <p className="text-white/80 text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
              Join an exclusive group of partners shaping the next generation of business AI.
            </p>

          </MotionDiv>
        </div>
      </section>
    </div>
  );
}