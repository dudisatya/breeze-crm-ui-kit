
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowLeft, Eye, Globe, Phone, MapPin, Package, Clock, User, Plus, ExternalLink } from "lucide-react";

// Mock data - in real app this would come from API
const projectData = {
  "abc.com2": {
    name: "abc.com2",
    orderType: "Unknown",
    productType: "Listings",
    orderStatus: "New Order",
    businessUrl: "https://around29.com/",
    businessPhone: "+1 (555) 123-4567",
    businessAddress: "123 Business St, City, State 12345",
    createdOn: "06-09-2025",
    company: "Around29 IT Services",
    companyUrl: "https://weirmobileautorepair.com/",
    status: "Maintenance Changes In Progress",
    tasks: [
      {
        taskName: "Listings Management Onboarding Form",
        createdOn: "06-09-2025",
        taskStatus: "open",
      }
    ]
  }
};

const ProjectView = () => {
  const { projectName } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("project-info");

  // Get project data (in real app, this would be fetched from API)
  const project = projectData[projectName as keyof typeof projectData];

  if (!project) {
    return (
      <div className="flex-1 p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-muted-foreground">Project not found</h1>
          <Button onClick={() => navigate("/projects")} className="mt-4">
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-6 p-8 relative">
      {/* Premium background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/6 to-accent/6 rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-tr from-secondary/10 to-primary/8 rounded-full blur-2xl animate-float"></div>
      </div>

      {/* Header with Back Button */}
      <div className="flex items-center gap-4 mb-6">
        <Button
          variant="ghost"
          onClick={() => navigate("/projects")}
          className="glass-effect rounded-2xl hover:scale-110 transition-all duration-300 p-3"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-black text-gradient">{project.name}</h1>
          <p className="text-muted-foreground font-medium">Project Details & Management</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content - Left Side */}
        <div className="lg:col-span-2 space-y-6">
          {/* Tasks Table */}
          <div className="glass-card rounded-3xl border-0 shadow-xl overflow-hidden animate-slide-up">
            <div className="p-6 border-b border-border/50 bg-gradient-to-r from-primary/5 to-accent/5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 glass-effect rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary animate-pulse-subtle" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gradient">Tasks</h3>
                    <p className="text-muted-foreground font-medium">Project task management</p>
                  </div>
                </div>
                <Button size="sm" className="glass-effect border-gradient hover:scale-105 transition-all duration-300">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Task
                </Button>
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow className="border-border/50 hover:bg-muted/30">
                  <TableHead className="text-sm font-bold text-foreground py-4 px-6">Task Name</TableHead>
                  <TableHead className="text-sm font-bold text-foreground py-4">Created on</TableHead>
                  <TableHead className="text-sm font-bold text-foreground py-4">Task Status</TableHead>
                  <TableHead className="text-right text-sm font-bold text-foreground py-4 px-6">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {project.tasks.map((task, index) => (
                  <TableRow key={index} className="border-border/30 hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 transition-all duration-300 group">
                    <TableCell className="font-semibold py-4 px-6 text-foreground">{task.taskName}</TableCell>
                    <TableCell className="py-4 text-muted-foreground">{task.createdOn}</TableCell>
                    <TableCell className="py-4">
                      <Badge variant="outline" className="bg-emerald-50 text-emerald-600 border-emerald-200 font-semibold">
                        {task.taskStatus}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right py-4 px-6">
                      <Button variant="ghost" size="sm" className="glass-effect rounded-xl hover:scale-110 transition-all duration-300">
                        <Eye className="w-4 h-4 text-primary" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Sidebar - Right Side */}
        <div className="space-y-6">
          {/* Company Info Card */}
          <div className="glass-card rounded-3xl border-0 shadow-xl p-6 animate-slide-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 glass-effect rounded-xl flex items-center justify-center">
                <User className="w-5 h-5 text-primary animate-pulse-subtle" />
              </div>
              <h3 className="text-lg font-black text-gradient">{project.company}</h3>
            </div>
            
            <div className="space-y-3">
              <div className="text-sm">
                <span className="font-bold text-muted-foreground">Order Type:</span>
                <span className="ml-2 text-foreground">{project.orderType}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{project.company}</div>
                  <a 
                    href={project.companyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm flex items-center gap-1"
                  >
                    {project.companyUrl}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
              
              <div className="text-sm">
                <span className="text-muted-foreground">{project.status}</span>
              </div>
            </div>
          </div>

          {/* Project Details Card */}
          <div className="glass-card rounded-3xl border-0 shadow-xl overflow-hidden animate-slide-up">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-accent/5 p-4">
                <TabsList className="grid w-full grid-cols-2 glass-effect">
                  <TabsTrigger value="project-info" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary font-semibold">
                    Project Info
                  </TabsTrigger>
                  <TabsTrigger value="sales-info" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary font-semibold">
                    Sales Info
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="p-6">
                <TabsContent value="project-info" className="space-y-4 mt-0">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-border/30">
                      <span className="font-bold text-muted-foreground flex items-center gap-2">
                        <Package className="w-4 h-4" />
                        Product Type
                      </span>
                      <span className="text-foreground font-medium">{project.productType}</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-2 border-b border-border/30">
                      <span className="font-bold text-muted-foreground flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Order Status
                      </span>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 font-semibold">
                        {project.orderStatus}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between items-start py-2 border-b border-border/30">
                      <span className="font-bold text-muted-foreground flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        Business URL
                      </span>
                      <a 
                        href={project.businessUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm flex items-center gap-1 max-w-[150px] text-right"
                      >
                        {project.businessUrl}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    
                    <div className="flex justify-between items-center py-2 border-b border-border/30">
                      <span className="font-bold text-muted-foreground flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Business Phone
                      </span>
                      <span className="text-foreground font-medium">{project.businessPhone}</span>
                    </div>
                    
                    <div className="flex justify-between items-start py-2">
                      <span className="font-bold text-muted-foreground flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Business Address
                      </span>
                      <span className="text-foreground font-medium text-right max-w-[150px]">{project.businessAddress}</span>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="sales-info" className="mt-0">
                  <div className="text-center py-8 text-muted-foreground">
                    <Package className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p className="font-medium">Sales information will be displayed here</p>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>

          {/* Attachments Section */}
          <div className="glass-card rounded-3xl border-0 shadow-xl p-6 animate-slide-up">
            <h4 className="font-black text-gradient mb-4">Attachments</h4>
            <div className="text-center py-4 text-muted-foreground">
              <Package className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">No attachments available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
