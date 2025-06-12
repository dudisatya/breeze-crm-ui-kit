
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import { ArrowLeft, Eye, Plus, User } from "lucide-react";
import { Header } from "@/components/Header";

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
    <div className="flex-1 min-h-screen bg-background">
      {/* Header with project name and add task button */}
      <div className="glass-card border-0 sticky top-0 z-50 backdrop-blur-xl">
        <div className="flex h-20 items-center justify-between px-8">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/projects")}
              className="p-2 glass-effect rounded-2xl hover:scale-110 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-4xl font-black tracking-tight text-gradient leading-none">
              {project.name}
            </h1>
          </div>
          
          {/* Green Add Task Button */}
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full glass-effect hover:scale-105 transition-all duration-300 shadow-lg">
            <Plus className="w-5 h-5 mr-2" />
            Add New Task
          </Button>
        </div>
      </div>

      <div className="p-8 space-y-8">
        {/* First Row: Tasks (Left) + Company Info (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tasks Section - Takes 2/3 width */}
          <div className="lg:col-span-2">
            <Card className="glass-card border-0 shadow-lg hover-lift">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b border-border">
                      <TableHead className="text-foreground font-bold py-6 px-8 text-lg">Task Name</TableHead>
                      <TableHead className="text-foreground font-bold py-6 text-lg">Created on</TableHead>
                      <TableHead className="text-foreground font-bold py-6 text-lg">Task Status</TableHead>
                      <TableHead className="text-right text-foreground font-bold py-6 px-8 text-lg">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {project.tasks.map((task, index) => (
                      <TableRow key={index} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                        <TableCell className="font-semibold py-6 px-8 text-foreground text-base">{task.taskName}</TableCell>
                        <TableCell className="py-6 text-muted-foreground text-base">{task.createdOn}</TableCell>
                        <TableCell className="py-6">
                          <Badge variant="outline" className="bg-muted text-foreground border-border font-medium">
                            {task.taskStatus}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right py-6 px-8">
                          <Button variant="ghost" size="sm" className="p-3 glass-effect rounded-xl hover:scale-110 transition-all duration-300">
                            <Eye className="w-5 h-5 text-muted-foreground" />
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
            <Card className="glass-card border-0 shadow-lg hover-lift h-full">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-foreground">Around29 IT Services</CardTitle>
                <p className="text-muted-foreground text-base font-medium">Order Type: {project.orderType}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center relative overflow-hidden shadow-lg">
                    <User className="w-8 h-8 text-white relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-lg">Around29 IT Services</div>
                    <a 
                      href={project.companyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      {project.companyUrl}
                    </a>
                  </div>
                </div>
                
                <div className="pt-4">
                  <div className="text-base font-semibold text-muted-foreground">{project.status}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Second Row: Project Details (Left) + Attachments (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project Details with Tabs - Takes 2/3 width */}
          <div className="lg:col-span-2">
            <Card className="glass-card border-0 shadow-lg hover-lift">
              <CardContent className="p-0">
                {/* Tab Navigation */}
                <div className="border-b border-border p-6">
                  <div className="flex gap-2">
                    <Button
                      variant={activeTab === "project-info" ? "default" : "ghost"}
                      onClick={() => setActiveTab("project-info")}
                      className={activeTab === "project-info" 
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold"
                        : "text-muted-foreground hover:text-foreground px-6 py-3 rounded-lg font-semibold"
                      }
                    >
                      Project Info
                    </Button>
                    <Button
                      variant={activeTab === "sales-info" ? "default" : "ghost"}
                      onClick={() => setActiveTab("sales-info")}
                      className={activeTab === "sales-info" 
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold"
                        : "text-muted-foreground hover:text-foreground px-6 py-3 rounded-lg font-semibold"
                      }
                    >
                      Sales Info
                    </Button>
                  </div>
                </div>

                {/* Tab Content */}
                <div className="p-8">
                  {activeTab === "project-info" && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <div className="text-base font-bold text-foreground mb-2">Product Type</div>
                          <div className="text-muted-foreground text-base">{project.orderType}</div>
                        </div>
                        
                        <div>
                          <div className="text-base font-bold text-foreground mb-2">Order Status</div>
                          <div className="text-muted-foreground text-base">{project.orderStatus}</div>
                        </div>
                        
                        <div>
                          <div className="text-base font-bold text-foreground mb-2">Business URL</div>
                          <a 
                            href={project.businessUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline text-base"
                          >
                            {project.businessUrl}
                          </a>
                        </div>
                        
                        <div>
                          <div className="text-base font-bold text-foreground mb-2">Business Phone</div>
                          <div className="text-muted-foreground text-base">{project.businessPhone}</div>
                        </div>
                        
                        <div className="col-span-2">
                          <div className="text-base font-bold text-foreground mb-2">Business Address</div>
                          <div className="text-muted-foreground text-base">{project.businessAddress}</div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === "sales-info" && (
                    <div className="text-center py-12 text-muted-foreground">
                      <p className="text-lg">Sales information will be displayed here</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Attachments - Takes 1/3 width */}
          <div className="lg:col-span-1">
            <Card className="glass-card border-0 shadow-lg hover-lift h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Attachments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  <p className="text-base mb-6">No attachments available</p>
                  <Button variant="outline" className="glass-effect hover:scale-105 transition-all duration-300" size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Attachment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
