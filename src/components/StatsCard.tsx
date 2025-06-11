
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon?: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export function StatsCard({ title, value, icon: Icon, trend, className }: StatsCardProps) {
  return (
    <Card className={`glass-card border-0 transition-all duration-500 hover:scale-105 hover:shadow-xl animate-scale-in group ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
      <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-10 translate-x-10 animate-pulse-subtle"></div>
      
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 relative z-10">
        <CardTitle className="text-sm font-medium text-muted-foreground tracking-wide">
          {title}
        </CardTitle>
        {Icon && (
          <div className="p-2.5 glass-effect rounded-xl shadow-lg animate-float relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
            <Icon className="h-4 w-4 text-primary relative z-10" />
          </div>
        )}
      </CardHeader>
      <CardContent className="relative z-10">
        <div className="text-3xl font-bold text-gradient mb-2">
          {value}
        </div>
        {trend && (
          <div className="mt-2">
            <p className={`text-xs font-medium ${trend.isPositive ? 'text-emerald-600' : 'text-red-500'}`}>
              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                trend.isPositive 
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {trend.isPositive ? '↗' : '↘'} {trend.isPositive ? '+' : ''}{trend.value}%
              </span>
              <span className="ml-2 text-muted-foreground">from last month</span>
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
