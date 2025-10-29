import { useState } from 'react';
import { Button } from '../ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { ChevronDown, Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Suite', href: '/ascent-agents' },
  { 
    name: 'Products', 
    href: '#',
    submenu: [
      { name: 'Finance Agent', href: '/products/finance-agent' },
      { name: 'Sales Agent', href: '/products/sales-agent' },
      { name: 'Inventory Agent', href: '/products/inventory-agent' },
      { name: 'Integration Agent', href: '/products/integration-agent' },
    ]
  },
  { name: 'Outcomes', href: '/outcomes' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Partners', href: '/partners' },
  { name: 'Security', href: '/security' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const currencies = [
  { code: 'PHP', symbol: '₱', name: 'Philippine Peso' },
  { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar' },
  { code: 'USD', symbol: '$', name: 'US Dollar' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentCurrency, setCurrentCurrency] = useState(currencies[0]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-white/80 backdrop-blur-apple shadow-sm relative overflow-hidden">
      {/* AI Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-y-axis-green to-transparent opacity-60">
        <div className="h-full w-full bg-gradient-to-r from-y-axis-green via-electric-blue to-y-axis-green animate-pulse"></div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={() => (window as any).navigate?.('/')} className="flex items-center space-x-2">
              <div className="flex items-center">
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
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56">
                      {item.submenu.map((subitem) => (
                        <DropdownMenuItem key={subitem.name}>
                          <button 
                            onClick={() => (window as any).navigate?.(subitem.href)}
                            className="w-full text-left"
                          >
                            {subitem.name}
                          </button>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <button
                    onClick={() => (window as any).navigate?.(item.href)}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Currency Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger className="hidden sm:flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                <span>{currentCurrency.code}</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {currencies.map((currency) => (
                  <DropdownMenuItem
                    key={currency.code}
                    onClick={() => setCurrentCurrency(currency)}
                  >
                    <span className="flex items-center justify-between w-full">
                      <span>{currency.name}</span>
                      <span className="ml-2 font-mono">{currency.symbol}</span>
                    </span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Try Free Button */}
            <Button 
              className="hidden sm:inline-flex shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ 
                borderRadius: '12px',
                backgroundColor: 'var(--y-axis-green)',
                color: 'white'
              }}
              onClick={() => {
                (window as any).navigate?.('/pricing');
                setTimeout(() => {
                  document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              Try Free
            </Button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-muted-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border">
              {navigation.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => {
                      if (!item.submenu) {
                        (window as any).navigate?.(item.href);
                        setIsMenuOpen(false);
                      }
                    }}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </button>
                  {item.submenu && (
                    <div className="pl-6 space-y-1">
                      {item.submenu.map((subitem) => (
                        <button
                          key={subitem.name}
                          onClick={() => {
                            (window as any).navigate?.(subitem.href);
                            setIsMenuOpen(false);
                          }}
                          className="block w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {subitem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border">
                <Button 
                  className="w-full bg-y-axis-green text-white hover:bg-deep-green shadow-lg"
                  style={{ borderRadius: '12px' }}
                  onClick={() => {
                    (window as any).navigate?.('/pricing');
                    setIsMenuOpen(false);
                    setTimeout(() => {
                      document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  Try Free
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}