
import { 
  BarChart3, 
  FolderOpen, 
  FileSearch, 
  FileText, 
  CreditCard, 
  User, 
  Settings, 
  LogOut,
  Zap
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useLocation, Link } from "react-router-dom";

const navigationItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: BarChart3,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: FolderOpen,
  },
  {
    title: "Audits",
    url: "/audits",
    icon: FileSearch,
  },
  {
    title: "Reports",
    url: "/reports",
    icon: FileText,
  },
  {
    title: "Billings",
    url: "/billings",
    icon: CreditCard,
  },
];

const userItems = [
  {
    title: "Profile",
    url: "/profile",
    icon: User,
  },
  {
    title: "Change Password",
    url: "/change-password",
    icon: Settings,
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="w-64 border-r-0">
      <div className="h-full gradient-primary relative overflow-hidden">
        {/* Modern geometric decorations */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16 animate-pulse-subtle"></div>
        <div className="absolute top-20 right-10 w-6 h-6 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-5 w-4 h-4 bg-white/15 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/3 rounded-full translate-y-12 -translate-x-12"></div>
        
        <SidebarHeader className="p-6 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 glass-effect rounded-2xl flex items-center justify-center shadow-lg animate-scale-in relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
              <Zap className="text-white w-6 h-6 relative z-10" />
            </div>
            <div className="animate-slide-up">
              <h2 className="font-bold text-xl text-white tracking-tight">around29</h2>
              <p className="text-white/70 text-sm font-medium">Modern CRM</p>
            </div>
          </div>
        </SidebarHeader>
        
        <SidebarContent className="relative z-10">
          <SidebarGroup>
            <SidebarGroupLabel className="text-white/80 font-semibold mb-4 tracking-wide text-xs uppercase">
              Navigation
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-1">
                {navigationItems.map((item, index) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      isActive={location.pathname === item.url}
                      className={`
                        w-full justify-start text-white/90 hover:bg-white/10 
                        transition-all duration-300 rounded-xl backdrop-blur-sm
                        animate-slide-up relative overflow-hidden group
                        ${location.pathname === item.url 
                          ? 'bg-white/15 shadow-lg text-white font-semibold border border-white/20' 
                          : 'hover:translate-x-1'
                        }
                      `}
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      <Link to={item.url}>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <item.icon className="w-5 h-5 relative z-10" />
                        <span className="relative z-10">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup className="mt-8">
            <SidebarGroupLabel className="text-white/80 font-semibold mb-4 tracking-wide text-xs uppercase">
              Account
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-1">
                {userItems.map((item, index) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      isActive={location.pathname === item.url}
                      className={`
                        w-full justify-start text-white/90 hover:bg-white/10 
                        transition-all duration-300 rounded-xl backdrop-blur-sm
                        animate-slide-up relative overflow-hidden group
                        ${location.pathname === item.url 
                          ? 'bg-white/15 shadow-lg text-white font-semibold border border-white/20' 
                          : 'hover:translate-x-1'
                        }
                      `}
                      style={{animationDelay: `${(index + 5) * 0.1}s`}}
                    >
                      <Link to={item.url}>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <item.icon className="w-5 h-5 relative z-10" />
                        <span className="relative z-10">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="p-4 relative z-10">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-white/90 hover:bg-white/10 transition-all duration-300 rounded-xl backdrop-blur-sm hover:translate-x-1 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <LogOut className="w-4 h-4 mr-2 relative z-10" />
            <span className="relative z-10">Logout</span>
          </Button>
        </SidebarFooter>
      </div>
    </Sidebar>
  );
}
