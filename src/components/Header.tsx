
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Bell, Search } from "lucide-react";

interface HeaderProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
}

export function Header({ title, subtitle, actions }: HeaderProps) {
  return (
    <header className="glass-card border-0 sticky top-0 z-50 animate-slide-up backdrop-blur-xl">
      <div className="flex h-20 items-center gap-6 px-8">
        <SidebarTrigger className="md:hidden p-3 glass-effect rounded-2xl hover:scale-110 transition-all duration-300" />
        
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-1">
            <div className="relative">
              <div className="w-12 h-12 glass-effect rounded-3xl flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 gradient-primary opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <Zap className="w-7 h-7 text-primary animate-pulse-subtle relative z-10" />
                <div className="absolute top-0 right-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-black tracking-tight text-gradient leading-none">
                {title}
              </h1>
              {subtitle && (
                <p className="text-muted-foreground mt-1 font-semibold text-lg opacity-80">{subtitle}</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          {/* Search Icon */}
          <Button variant="ghost" size="icon" className="glass-effect rounded-2xl hover:scale-110 transition-all duration-300 w-12 h-12">
            <Search className="w-5 h-5 text-muted-foreground" />
          </Button>
          
          {/* Notifications */}
          <div className="relative">
            <Button variant="ghost" size="icon" className="glass-effect rounded-2xl hover:scale-110 transition-all duration-300 w-12 h-12">
              <Bell className="w-5 h-5 text-muted-foreground" />
            </Button>
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">3</span>
            </div>
          </div>
          
          {/* User Profile */}
          <div className="flex items-center gap-4 glass-effect rounded-3xl px-6 py-3 hover:scale-105 transition-all duration-300 cursor-pointer group">
            <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center relative overflow-hidden shadow-lg">
              <span className="text-white font-black text-lg relative z-10">Y</span>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent group-hover:from-white/30 transition-all duration-300"></div>
            </div>
            <div className="text-left">
              <span className="font-bold text-foreground text-lg block leading-tight">Yaswanth</span>
              <Badge variant="secondary" className="bg-primary/15 text-primary border-primary/30 text-sm font-semibold mt-1 animate-pulse-subtle">
                Around29
              </Badge>
            </div>
          </div>
          
          {actions}
        </div>
      </div>
    </header>
  );
}
