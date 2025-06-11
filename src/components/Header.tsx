
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

interface HeaderProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
}

export function Header({ title, subtitle, actions }: HeaderProps) {
  return (
    <header className="border-b border-border/50 bg-white/80 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60 sticky top-0 z-40">
      <div className="flex h-16 items-center gap-4 px-6">
        <SidebarTrigger className="md:hidden" />
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
              <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {title}
              </h1>
            </div>
          </div>
          {subtitle && (
            <p className="text-muted-foreground mt-1">{subtitle}</p>
          )}
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">Y</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Yaswanth</span>
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 border-emerald-200 text-xs animate-pulse">
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
