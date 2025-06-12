
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "@/pages/Index";
import Dashboard from "@/pages/Dashboard";
import Projects from "@/pages/Projects";
import ProjectView from "@/pages/ProjectView";
import Audits from "@/pages/Audits";
import Reports from "@/pages/Reports";
import Billings from "@/pages/Billings";
import Profile from "@/pages/Profile";
import ChangePassword from "@/pages/ChangePassword";
import NotFound from "@/pages/NotFound";
import { Toaster } from "@/components/ui/sonner";
import "./App.css";

function App() {
  return (
    <Router>
      <SidebarProvider>
        <div className="min-h-screen flex w-full bg-gradient-to-br from-background via-background/95 to-muted/20">
          <AppSidebar />
          <main className="flex-1 flex flex-col overflow-hidden">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/project/:projectName" element={<ProjectView />} />
              <Route path="/audits" element={<Audits />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/billings" element={<Billings />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/change-password" element={<ChangePassword />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
        <Toaster />
      </SidebarProvider>
    </Router>
  );
}

export default App;
