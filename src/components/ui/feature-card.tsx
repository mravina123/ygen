import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  href?: string;
  children?: ReactNode;
  variant?: 'default' | 'outlined' | 'elevated';
}

export function FeatureCard({ 
  title, 
  description, 
  icon: Icon, 
  href, 
  children,
  variant = 'elevated' 
}: FeatureCardProps) {
  const cardClasses = {
    default: 'border-border',
    outlined: 'border-border border-2',
    elevated: 'border-border shadow-lg hover:shadow-xl transition-shadow duration-300'
  };

  const CardWrapper = href ? 'a' : 'div';
  const cardProps = href ? { href } : {};

  return (
    <CardWrapper {...cardProps} className={href ? 'block group' : ''}>
      <Card className={`${cardClasses[variant]} ${href ? 'hover:border-y-axis-green transition-colors' : ''}`}>
        <CardHeader className="pb-4">
          <div className="flex items-start space-x-4">
            {Icon && (
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-y-axis-green/10">
                  <Icon className="h-6 w-6 text-y-axis-green" />
                </div>
              </div>
            )}
            <div className="flex-1">
              <CardTitle className="text-lg font-semibold text-slate-ink mb-2">
                {title}
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-neutral-graphite mb-4">
            {description}
          </p>
          {children}
        </CardContent>
      </Card>
    </CardWrapper>
  );
}