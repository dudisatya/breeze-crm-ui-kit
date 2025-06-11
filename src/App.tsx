
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/AppSidebar";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Audits from "./pages/Audits";
import Reports from "./pages/Reports";
import Billings from "./pages/Billings";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full relative overflow-hidden">
            {/* Ultra-modern background with multiple layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/20"></div>
            
            {/* Animated geometric elements */}
            <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-primary/8 to-accent/8 rounded-full blur-3xl animate-pulse-subtle"></div>
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-tr from-secondary/15 to-primary/10 rounded-full blur-2xl animate-float"></div>
            <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-gradient-to-r from-accent/8 to-primary/8 rounded-full blur-xl animate-pulse-subtle" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-gradient-to-l from-primary/6 to-accent/6 rounded-full blur-lg animate-float" style={{animationDelay: '4s'}}></div>
            
            {/* Premium grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, hsl(225 25% 15%) 2px, transparent 0)`,
              backgroundSize: '32px 32px'
            }}></div>
            
            {/* Subtle noise texture for depth */}
            <div className="absolute inset-0 opacity-[0.015]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}></div>
            
            <AppSidebar />
            <main className="flex-1 overflow-auto relative z-10 bg-transparent">
              <div className="animate-slide-up">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/audits" element={<Audits />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/billings" element={<Billings />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/change-password" element={<ChangePassword />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </main>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
