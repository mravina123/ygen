import { ReactNode } from 'react';
import { Button } from './button';

interface HeroSectionProps {
  headline: string;
  subline?: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  tertiaryCta?: {
    text: string;
    href: string;
  };
  backgroundPattern?: boolean;
  children?: ReactNode;
}

export function HeroSection({
  headline,
  subline,
  description,
  primaryCta,
  secondaryCta,
  tertiaryCta,
  backgroundPattern = true,
  children,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-muted to-background py-20 sm:py-32">
      {/* Background pattern */}
      {backgroundPattern && (
        <div className="absolute inset-0 opacity-30">
          <svg
            className="absolute inset-0 h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 800"
            fill="none"
          >
            <defs>
              <pattern
                id="y-axis-grid"
                x="0"
                y="0"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="currentColor"
                  strokeOpacity="0.1"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#y-axis-grid)" className="text-primary" />
            
            {/* Animated rising line */}
            <path
              d="M 0 800 Q 300 600 600 400 T 1200 200"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeOpacity="0.3"
              className="text-primary animate-pulse"
            />
          </svg>
        </div>
      )}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6">
            {headline}
          </h1>
          
          {subline && (
            <p className="mb-6 text-xl text-muted-foreground">
              {subline}
            </p>
          )}
          
          {description && (
            <p className="mb-10 text-lg text-muted-foreground max-w-3xl mx-auto">
              {description}
            </p>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {primaryCta && (
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3"
                style={{ borderRadius: '20px' }}
              >
                <a href={primaryCta.href}>{primaryCta.text}</a>
              </Button>
            )}
            
            {secondaryCta && (
              <Button
                size="lg"
                variant="outline"
                className="border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-3"
                style={{ borderRadius: '20px' }}
              >
                <a href={secondaryCta.href}>{secondaryCta.text}</a>
              </Button>
            )}
            
            {tertiaryCta && (
              <Button
                size="lg"
                variant="ghost"
                className="text-muted-foreground hover:text-primary px-8 py-3"
              >
                <a href={tertiaryCta.href}>{tertiaryCta.text}</a>
              </Button>
            )}
          </div>

          {children}
        </div>
      </div>
    </section>
  );
}