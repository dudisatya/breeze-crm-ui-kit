
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
            {/* Modern background with subtle patterns */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
            
            {/* Floating geometric elements */}
            <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl animate-pulse-subtle"></div>
            <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-tr from-secondary/10 to-primary/5 rounded-full blur-2xl animate-float"></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-accent/5 to-primary/5 rounded-full blur-xl animate-pulse-subtle" style={{animationDelay: '2s'}}></div>
            
            {/* Subtle grid pattern overlay */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(225 25% 15%) 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }}></div>
            
            <AppSidebar />
            <main className="flex-1 overflow-auto relative z-10">
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
