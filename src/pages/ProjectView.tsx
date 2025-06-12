
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
    siteStartDate: "0000-00-00",
    siteLiveDate: "0000-00-00",
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tasks Table - Left Column */}
        <div className="space-y-6">
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

        {/* Right Column - Company Info + Tabs */}
        <div className="glass-card rounded-3xl border-0 shadow-xl overflow-hidden animate-slide-up">
          {/* Company Header */}
          <div className="p-6 bg-gradient-to-r from-primary/5 to-accent/5">
            <h2 className="text-2xl font-black text-gradient mb-2">{project.company}</h2>
            <div className="text-sm text-muted-foreground mb-4">
              <span className="font-bold">Order Type:</span> {project.orderType}
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="font-bold text-foreground text-lg">{project.company}</div>
                <a 
                  href={project.companyUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center gap-1"
                >
                  {project.companyUrl}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            
            <div className="text-muted-foreground">{project.status}</div>
          </div>

          {/* Tabs Section */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="border-b border-border/50">
              <TabsList className="w-full grid grid-cols-3 h-auto p-0 bg-transparent">
                <TabsTrigger 
                  value="project-info" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-primary/10 py-4 font-bold"
                >
                  Project Info
                </TabsTrigger>
                <TabsTrigger 
                  value="sales-info" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-primary/10 py-4 font-bold"
                >
                  Sales Info
                </TabsTrigger>
                <TabsTrigger 
                  value="attachments" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-primary/10 py-4 font-bold"
                >
                  Attachments
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="p-6">
              <TabsContent value="project-info" className="space-y-4 mt-0">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="font-bold text-foreground block">Product Type</span>
                      <span className="text-muted-foreground">{project.productType}</span>
                    </div>
                    <div>
                      <span className="font-bold text-foreground block">Order Status</span>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 font-semibold">
                        {project.orderStatus}
                      </Badge>
                    </div>
                  </div>
                  
                  <div>
                    <span className="font-bold text-foreground block">Business URL</span>
                    <a 
                      href={project.businessUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center gap-1"
                    >
                      {project.businessUrl}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  
                  <div>
                    <span className="font-bold text-foreground block">Business Phone</span>
                    <span className="text-muted-foreground">{project.businessPhone}</span>
                  </div>
                  
                  <div>
                    <span className="font-bold text-foreground block">Business Address</span>
                    <span className="text-muted-foreground">{project.businessAddress}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="font-bold text-foreground block">Site Start Date</span>
                      <span className="text-muted-foreground">{project.siteStartDate}</span>
                    </div>
                    <div>
                      <span className="font-bold text-foreground block">Site Live Date</span>
                      <span className="text-muted-foreground">{project.siteLiveDate}</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="sales-info" className="mt-0">
                <div className="text-center py-8 text-muted-foreground">
                  <Package className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p className="font-medium">Sales information will be displayed here</p>
                </div>
              </TabsContent>

              <TabsContent value="attachments" className="mt-0">
                <div className="text-center py-8 text-muted-foreground">
                  <Package className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No attachments available</p>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
