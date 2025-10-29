import { Card, CardContent } from './card';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  description?: string;
  color?: 'green' | 'blue' | 'orange' | 'purple';
}

export function KPICard({ 
  title, 
  value, 
  change, 
  trend, 
  description,
  color = 'green' 
}: KPICardProps) {
  const colorClasses = {
    green: {
      icon: 'text-success',
      bg: 'bg-success/10',
      text: 'text-success',
      accent: 'bg-gradient-to-br from-success/5 to-success/10'
    },
    blue: {
      icon: 'text-info',
      bg: 'bg-info/10', 
      text: 'text-info',
      accent: 'bg-gradient-to-br from-info/5 to-info/10'
    },
    orange: {
      icon: 'text-warning',
      bg: 'bg-warning/10',
      text: 'text-warning',
      accent: 'bg-gradient-to-br from-warning/5 to-warning/10'
    },
    purple: {
      icon: 'text-electric-blue',
      bg: 'bg-electric-blue/10',
      text: 'text-electric-blue',
      accent: 'bg-gradient-to-br from-electric-blue/5 to-electric-blue/10'
    }
  };

  const TrendIcon = trend === 'up' ? TrendingUp : TrendingDown;
  const trendColor = trend === 'up' ? 'text-success' : 'text-destructive';

  return (
    <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white group hover:scale-105">
      <CardContent className="p-8 relative overflow-hidden">
        {/* Background accent */}
        <div className={`absolute top-0 right-0 w-24 h-24 ${colorClasses[color].accent} rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
        
        <div className="relative">
          <div className="flex items-start justify-between mb-6">
            <div className={`p-3 rounded-xl ${colorClasses[color].bg} group-hover:scale-110 transition-transform duration-300`}>
              <TrendIcon className={`h-6 w-6 ${colorClasses[color].icon}`} />
            </div>
            <div className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${trendColor} bg-white shadow-sm`}>
              <TrendIcon className="h-3 w-3 mr-1" />
              {change}
            </div>
          </div>
          
          <div className="mb-4">
            <div className="text-3xl font-bold text-slate-ink mb-2 group-hover:text-y-axis-green transition-colors duration-300">
              {value}
            </div>
            <h3 className="text-lg font-medium text-neutral-graphite">
              {title}
            </h3>
          </div>
          
          {description && (
            <p className="text-sm text-neutral-graphite leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}