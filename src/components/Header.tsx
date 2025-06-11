
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";

interface HeaderProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
}

export function Header({ title, subtitle, actions }: HeaderProps) {
  return (
    <header className="glass-card border-0 sticky top-0 z-40 animate-slide-up">
      <div className="flex h-16 items-center gap-4 px-6">
        <SidebarTrigger className="md:hidden" />
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-primary animate-pulse-subtle" />
              <h1 className="text-2xl font-bold tracking-tight text-gradient">
                {title}
              </h1>
            </div>
          </div>
          {subtitle && (
            <p className="text-muted-foreground mt-1 font-medium">{subtitle}</p>
          )}
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 glass-effect rounded-full flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                <span className="text-primary font-bold text-sm relative z-10">Y</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-foreground">Yaswanth</span>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs animate-pulse-subtle">
                  Around29
                </Badge>
              </div>
            </div>
          </div>
          {actions}
        </div>
      </div>
    </header>
  );
}
