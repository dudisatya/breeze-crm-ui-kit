
import { 
  BarChart3, 
  FolderOpen, 
  FileSearch, 
  FileText, 
  CreditCard, 
  User, 
  Settings, 
  LogOut,
  Sparkles
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
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
        
        <SidebarHeader className="p-6 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg animate-pulse-glow">
              <Sparkles className="text-white w-6 h-6" />
            </div>
            <div>
              <h2 className="font-bold text-xl text-white">around29</h2>
              <p className="text-white/70 text-sm">CRM Dashboard</p>
            </div>
          </div>
        </SidebarHeader>
        
        <SidebarContent className="relative z-10">
          <SidebarGroup>
            <SidebarGroupLabel className="text-white/80 font-semibold mb-4">
              Main Navigation
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-2">
                {navigationItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      isActive={location.pathname === item.url}
                      className={`
                        w-full justify-start text-white/90 hover:bg-white/20 
                        transition-all duration-300 rounded-lg backdrop-blur-sm
                        ${location.pathname === item.url 
                          ? 'bg-white/30 shadow-lg scale-105 text-white font-semibold' 
                          : 'hover:scale-102'
                        }
                      `}
                    >
                      <Link to={item.url}>
                        <item.icon className="w-5 h-5" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup className="mt-8">
            <SidebarGroupLabel className="text-white/80 font-semibold mb-4">
              Account
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-2">
                {userItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      isActive={location.pathname === item.url}
                      className={`
                        w-full justify-start text-white/90 hover:bg-white/20 
                        transition-all duration-300 rounded-lg backdrop-blur-sm
                        ${location.pathname === item.url 
                          ? 'bg-white/30 shadow-lg scale-105 text-white font-semibold' 
                          : 'hover:scale-102'
                        }
                      `}
                    >
                      <Link to={item.url}>
                        <item.icon className="w-5 h-5" />
                        <span>{item.title}</span>
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
            className="w-full justify-start text-white/90 hover:bg-white/20 transition-all duration-300 rounded-lg backdrop-blur-sm hover:scale-102"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </SidebarFooter>
      </div>
    </Sidebar>
  );
}
