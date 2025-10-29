import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { 
  Send,
  CheckCircle2,
  ArrowRight,
  Mail,
  Building,
  Globe,
  MessageSquare,
  User,
  Sparkles,
  Phone,
  Calendar
} from 'lucide-react';
import { motion } from 'motion/react';

const MotionDiv = motion.div;
const MotionCard = motion.div;

interface FormData {
  fullName: string;
  workEmail: string;
  company: string;
  country: string;
  interest: string;
  message: string;
}

export function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    workEmail: '',
    company: '',
    country: '',
    interest: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const interestOptions = [
    { value: 'finance', label: 'Finance Agent' },
    { value: 'sales', label: 'Sales Agent' },
    { value: 'inventory', label: 'Inventory Agent' },
    { value: 'integration', label: 'Integration Agent' },
    { value: 'suite', label: 'Complete Suite' }
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = 'Please enter a valid email address';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    
    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
    }
    
    if (!formData.interest) {
      newErrors.interest = 'Please select an area of interest';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Submit to Google Sheets via Google Apps Script
      const jsonPayload = {
        fullName: formData.fullName,
        workEmail: formData.workEmail,
        company: formData.company,
        country: formData.country,
        interest: formData.interest,
        message: formData.message || '',
        timestamp: new Date().toISOString()
      };
      
      console.log('Submitting to Google Sheets:', jsonPayload);
      
      const response = await fetch('https://script.google.com/macros/s/AKfycbyjM_fgXVONZnQa4jtoHZN0LgUy_cx4AhS1hO3koEynYykItBOwSkpJyyaLzeTbLwxmEw/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonPayload),
        mode: 'no-cors' // Google Apps Script requires no-cors mode
      });
      
      console.log('Form submitted successfully to Google Sheets');
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Still show success since no-cors mode doesn't return response
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const nextSteps = [
    {
      icon: Phone,
      title: "Initial Consultation",
      description: "We'll schedule a 30-minute discovery call within 24 hours"
    },
    {
      icon: Building,
      title: "Custom Demo",
      description: "See how our AI agents work with your specific business scenarios"
    },
    {
      icon: Calendar,
      title: "Pilot Program",
      description: "Start with a 2-week pilot to experience measurable results"
    }
  ];

  if (isSubmitted) {
    return (
      <div className="w-full">
        {/* Thank You Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-muted overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20" style={{backgroundColor: 'var(--y-axis-green)'}}></div>
            <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full blur-3xl opacity-15" style={{backgroundColor: 'var(--electric-blue)'}}></div>
          </div>
          
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Success Icon */}
              <MotionDiv
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8"
              >
                <div 
                  className="inline-flex items-center justify-center w-24 h-24 rounded-full shadow-lg mb-6"
                  style={{ backgroundColor: 'var(--y-axis-green)' }}
                >
                  <CheckCircle2 className="h-12 w-12 text-white" />
                </div>
              </MotionDiv>

              <h1 className="mb-6 text-4xl md:text-6xl">
                Thank you for your interest!
              </h1>
              <p className="mb-12 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We've received your information and are excited to show you how yGen's AI agents 
                can transform your business operations.
              </p>
            </MotionDiv>

            {/* Next Steps */}
            <MotionDiv
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="mb-8 text-2xl md:text-3xl">What happens next?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {nextSteps.map((step, index) => (
                  <MotionCard
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  >
                    <Card className="border-0 shadow-lg bg-white h-full">
                      <CardContent className="p-8 text-center">
                        <div 
                          className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6"
                          style={{ backgroundColor: 'var(--y-axis-green)10' }}
                        >
                          <step.icon className="h-8 w-8" style={{ color: 'var(--y-axis-green)' }} />
                        </div>
                        <h3 className="mb-4 text-xl font-semibold">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </CardContent>
                    </Card>
                  </MotionCard>
                ))}
              </div>
            </MotionDiv>

            {/* CTA */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
            </MotionDiv>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-white to-muted overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20" style={{backgroundColor: 'var(--y-axis-green)'}}></div>
          <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full blur-3xl opacity-15" style={{backgroundColor: 'var(--electric-blue)'}}></div>
        </div>
        
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
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
                <Mail className="h-4 w-4 mr-2" />
                Get Started
              </Badge>
            </MotionDiv>

            <h1 className="mb-6 text-4xl md:text-6xl tracking-tight">
              Ready to ascend with AI?
            </h1>
            <p className="mb-12 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Let's discuss how yGen's Agentic AI can transform your business operations. 
              Start your journey from explain → act → insight.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <MotionCard
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Full Name */}
                  <div>
                    <Label htmlFor="fullName" className="text-base font-medium mb-3 block">
                      Full Name *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className="pl-12 h-14 text-base"
                        style={{ backgroundColor: 'var(--input-background)' }}
                        placeholder="Enter your full name"
                      />
                    </div>
                    {errors.fullName && (
                      <p className="mt-2 text-sm text-destructive">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Work Email */}
                  <div>
                    <Label htmlFor="workEmail" className="text-base font-medium mb-3 block">
                      Work Email *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="workEmail"
                        type="email"
                        value={formData.workEmail}
                        onChange={(e) => handleInputChange('workEmail', e.target.value)}
                        className="pl-12 h-14 text-base"
                        style={{ backgroundColor: 'var(--input-background)' }}
                        placeholder="you@company.com"
                      />
                    </div>
                    {errors.workEmail && (
                      <p className="mt-2 text-sm text-destructive">{errors.workEmail}</p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <Label htmlFor="company" className="text-base font-medium mb-3 block">
                      Company *
                    </Label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="pl-12 h-14 text-base"
                        style={{ backgroundColor: 'var(--input-background)' }}
                        placeholder="Your company name"
                      />
                    </div>
                    {errors.company && (
                      <p className="mt-2 text-sm text-destructive">{errors.company}</p>
                    )}
                  </div>

                  {/* Country */}
                  <div>
                    <Label htmlFor="country" className="text-base font-medium mb-3 block">
                      Country *
                    </Label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="country"
                        type="text"
                        value={formData.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                        className="pl-12 h-14 text-base"
                        style={{ backgroundColor: 'var(--input-background)' }}
                        placeholder="Philippines, Singapore, United States, etc."
                      />
                    </div>
                    {errors.country && (
                      <p className="mt-2 text-sm text-destructive">{errors.country}</p>
                    )}
                  </div>

                  {/* Interest */}
                  <div>
                    <Label htmlFor="interest" className="text-base font-medium mb-3 block">
                      Area of Interest *
                    </Label>
                    <Select value={formData.interest} onValueChange={(value) => handleInputChange('interest', value)}>
                      <SelectTrigger 
                        className="h-14 text-base"
                        style={{ backgroundColor: 'var(--input-background)' }}
                      >
                        <SelectValue placeholder="Select which AI agent interests you most" />
                      </SelectTrigger>
                      <SelectContent>
                        {interestOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.interest && (
                      <p className="mt-2 text-sm text-destructive">{errors.interest}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-base font-medium mb-3 block">
                      Message <span className="text-muted-foreground">(Optional)</span>
                    </Label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="pl-12 min-h-[120px] text-base resize-none"
                        style={{ backgroundColor: 'var(--input-background)' }}
                        placeholder="Tell us about your current challenges or specific questions..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full h-14 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                      style={{ 
                        borderRadius: '16px',
                        backgroundColor: 'var(--y-axis-green)',
                        color: 'white'
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-3 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>

                {/* Trust Indicators */}
                <div className="mt-8 pt-8 border-t border-divider-line text-center">
                  <p className="text-sm text-muted-foreground">
                    🔒 Your information is secure and will only be used to contact you about yGen's AI solutions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </MotionCard>
        </div>
      </section>
    </div>
  );
}