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
import { ArrowLeft, Eye, Globe, Phone, MapPin, Package, Clock, User, Plus, ExternalLink, Building2, Calendar } from "lucide-react";

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

      {/* Header with Back Button and Add Task Button */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/projects")}
            className="glass-effect rounded-2xl hover:scale-105 transition-all duration-300 p-3"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-4xl font-black text-gradient mb-2">{project.name}</h1>
            <p className="text-muted-foreground text-lg font-medium">Project Details & Task Management</p>
          </div>
        </div>
        
        {/* Prominent Add Task Button - Top Right */}
        <Button className="glass-effect border-gradient hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-bold bg-gradient-to-r from-primary to-accent text-white shadow-xl">
          <Plus className="w-6 h-6 mr-2" />
          Add New Task
        </Button>
      </div>

      {/* First Row: Tasks + Company Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Tasks Section - Takes 2/3 width */}
        <div className="lg:col-span-2">
          <Card className="glass-card rounded-3xl border-0 shadow-xl overflow-hidden animate-slide-up h-full">
            <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-accent/5 p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass-effect rounded-2xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary animate-pulse-subtle" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-black text-gradient">Project Tasks</CardTitle>
                    <p className="text-muted-foreground font-medium mt-1">Manage and track task progress</p>
                  </div>
                </div>
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 font-bold px-4 py-2">
                  {project.tasks.length} Task{project.tasks.length !== 1 ? 's' : ''}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-border/50 hover:bg-muted/30">
                    <TableHead className="text-base font-bold text-foreground py-6 px-8">Task Name</TableHead>
                    <TableHead className="text-base font-bold text-foreground py-6">Created Date</TableHead>
                    <TableHead className="text-base font-bold text-foreground py-6">Status</TableHead>
                    <TableHead className="text-right text-base font-bold text-foreground py-6 px-8">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {project.tasks.map((task, index) => (
                    <TableRow key={index} className="border-border/30 hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 transition-all duration-300 group">
                      <TableCell className="font-semibold py-6 px-8 text-foreground text-base">{task.taskName}</TableCell>
                      <TableCell className="py-6 text-muted-foreground font-medium">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {task.createdOn}
                        </div>
                      </TableCell>
                      <TableCell className="py-6">
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-600 border-emerald-200 font-bold px-3 py-1">
                          {task.taskStatus}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right py-6 px-8">
                        <Button variant="ghost" size="sm" className="glass-effect rounded-xl hover:scale-110 transition-all duration-300">
                          <Eye className="w-5 h-5 text-primary" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Company Info - Takes 1/3 width */}
        <div className="lg:col-span-1">
          <Card className="glass-card rounded-3xl border-0 shadow-xl overflow-hidden animate-slide-up h-full">
            <CardHeader className="p-6 border-b border-border/50 bg-gradient-to-r from-primary/5 to-accent/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 glass-effect rounded-xl flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary animate-pulse-subtle" />
                </div>
                <CardTitle className="text-lg font-black text-gradient">{project.company}</CardTitle>
              </div>
            </CardHeader>
            
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 glass-effect rounded-2xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-foreground">{project.company}</div>
                    <a 
                      href={project.companyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm flex items-center gap-1 font-medium"
                    >
                      Visit Website
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                
                <div className="p-3 glass-effect rounded-2xl">
                  <div className="text-sm font-bold text-muted-foreground mb-1">Current Status</div>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 font-bold">
                    {project.status}
                  </Badge>
                </div>

                <div className="p-3 glass-effect rounded-2xl">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-muted-foreground flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      Business URL
                    </span>
                    <a 
                      href={project.businessUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm flex items-center gap-1 font-medium"
                    >
                      View Site
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Second Row: Project Details + Attachments */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Project Details - Takes 2/3 width */}
        <div className="lg:col-span-2">
          <Card className="glass-card rounded-3xl border-0 shadow-xl overflow-hidden animate-slide-up">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-accent/5 p-6">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-black text-gradient">Project Details</CardTitle>
                  <TabsList className="glass-effect">
                    <TabsTrigger value="project-info" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary font-bold">
                      Project Info
                    </TabsTrigger>
                    <TabsTrigger value="sales-info" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary font-bold">
                      Sales Info
                    </TabsTrigger>
                  </TabsList>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <TabsContent value="project-info" className="space-y-4 mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 glass-effect rounded-2xl">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-muted-foreground flex items-center gap-2">
                          <Package className="w-4 h-4" />
                          Product Type
                        </span>
                        <Badge variant="secondary" className="font-bold">{project.productType}</Badge>
                      </div>
                    </div>
                    
                    <div className="p-4 glass-effect rounded-2xl">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-muted-foreground flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          Order Status
                        </span>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 font-bold">
                          {project.orderStatus}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-4 glass-effect rounded-2xl">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-muted-foreground flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          Phone
                        </span>
                        <span className="text-foreground font-medium">{project.businessPhone}</span>
                      </div>
                    </div>
                    
                    <div className="p-4 glass-effect rounded-2xl">
                      <div className="flex items-start justify-between">
                        <span className="font-bold text-muted-foreground flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          Address
                        </span>
                        <span className="text-foreground font-medium text-right text-sm">{project.businessAddress}</span>
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
              </CardContent>
            </Tabs>
          </Card>
        </div>

        {/* Attachments - Takes 1/3 width */}
        <div className="lg:col-span-1">
          <Card className="glass-card rounded-3xl border-0 shadow-xl animate-slide-up h-full">
            <CardHeader className="p-6 border-b border-border/50 bg-gradient-to-r from-primary/5 to-accent/5">
              <CardTitle className="font-black text-gradient flex items-center gap-2">
                <Package className="w-5 h-5" />
                Attachments
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-center py-8 text-muted-foreground">
                <Package className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p className="text-sm font-medium">No attachments available</p>
                <Button variant="outline" className="mt-4 glass-effect">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Attachment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
