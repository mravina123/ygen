import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

const footerSections = [
  {
    title: 'Products',
    links: [
      { name: 'Ascent Agents Suite', href: '/ascent-agents' },
      { name: 'Finance Agent', href: '/products/finance-agent' },
      { name: 'Sales Agent', href: '/products/sales-agent' },
      { name: 'Inventory Agent', href: '/products/inventory-agent' },
      { name: 'Integration Agent', href: '/products/integration-agent' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Outcomes', href: '/outcomes' },
      { name: 'Partners', href: '/partners' },
      { name: 'Security', href: '/security' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Pricing', href: '/pricing' },
      { name: 'Careers', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/legal/privacy' },
      { name: 'Terms of Service', href: '/legal/terms' },
      { name: 'Data Processing Agreement', href: '/legal/dpa' },
    ],
  },
];

const socialLinks = [
  { name: 'LinkedIn', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'Facebook', href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <span style={{ 
                  fontFamily: 'Manrope, Inter, system-ui, sans-serif',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: 'var(--y-axis-green)'
                }}>
                  y
                </span>
                <span style={{ 
                  fontFamily: 'Manrope, Inter, system-ui, sans-serif',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: 'var(--slate-ink)'
                }}>
                  Gen
                </span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Governed, system-agnostic Agentic AI that works beside your team to turn every decision into action.
              </p>
              
              {/* Address */}
              <div className="text-sm text-muted-foreground mb-4">
                <p>yGen Innovations Inc.</p>
                <p>Philippines • Singapore • United States</p>
              </div>
              
            </div>

            {/* Footer sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-medium text-foreground mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Bottom footer */}
        <div className="py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-sm text-muted-foreground">
                © 2025 yGen Innovations Inc. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              {/* Social links */}
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}