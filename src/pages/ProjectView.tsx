
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowLeft, Eye, Plus, User } from "lucide-react";

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
    <div className="flex-1 min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/projects")}
              className="p-2"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-2xl font-bold text-foreground">
              {project.name}
            </h1>
          </div>
          
          {/* Green Add Task Button */}
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded">
            <Plus className="w-4 h-4 mr-2" />
            Add New Task
          </Button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* First Row: Tasks (Left) + Company Info (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Tasks Section - Takes 3/4 width */}
          <div className="lg:col-span-3">
            <Card className="border border-border shadow-sm">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b border-border">
                      <TableHead className="text-foreground font-semibold py-4 px-4">Task Name</TableHead>
                      <TableHead className="text-foreground font-semibold py-4">Created on</TableHead>
                      <TableHead className="text-foreground font-semibold py-4">Task Status</TableHead>
                      <TableHead className="text-right text-foreground font-semibold py-4 px-4">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {project.tasks.map((task, index) => (
                      <TableRow key={index} className="border-b border-border hover:bg-muted/50">
                        <TableCell className="font-medium py-4 px-4 text-foreground">{task.taskName}</TableCell>
                        <TableCell className="py-4 text-foreground">{task.createdOn}</TableCell>
                        <TableCell className="py-4">
                          <span className="text-foreground">{task.taskStatus}</span>
                        </TableCell>
                        <TableCell className="text-right py-4 px-4">
                          <Button variant="ghost" size="sm" className="p-2">
                            <Eye className="w-4 h-4 text-foreground" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Company Info - Takes 1/4 width */}
          <div className="lg:col-span-1">
            <Card className="border border-border shadow-sm h-full">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-bold text-foreground">Around29 IT Services</CardTitle>
                <p className="text-sm text-muted-foreground">Order Type: {project.orderType}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Around29 IT Services</div>
                    <a 
                      href={project.companyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      {project.companyUrl}
                    </a>
                  </div>
                </div>
                
                <div className="pt-2">
                  <div className="text-sm text-foreground">{project.status}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Second Row: Project Details with Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Project Details with Tabs - Takes 3/4 width */}
          <div className="lg:col-span-3">
            <Card className="border border-border shadow-sm">
              <CardContent className="p-0">
                {/* Tab Navigation */}
                <div className="border-b border-border p-4">
                  <div className="flex gap-1">
                    <Button
                      variant={activeTab === "project-info" ? "default" : "ghost"}
                      onClick={() => setActiveTab("project-info")}
                      className={activeTab === "project-info" 
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-sm"
                        : "text-foreground hover:text-foreground px-4 py-2 text-sm"
                      }
                    >
                      Project Info
                    </Button>
                    <Button
                      variant={activeTab === "sales-info" ? "default" : "ghost"}
                      onClick={() => setActiveTab("sales-info")}
                      className={activeTab === "sales-info" 
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-sm"
                        : "text-foreground hover:text-foreground px-4 py-2 text-sm"
                      }
                    >
                      Sales Info
                    </Button>
                  </div>
                </div>

                {/* Tab Content */}
                <div className="p-6">
                  {activeTab === "project-info" && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                        <div>
                          <div className="text-sm font-semibold text-foreground mb-1">Product Type</div>
                          <div className="text-sm text-foreground">{project.orderType}</div>
                        </div>
                        
                        <div>
                          <div className="text-sm font-semibold text-foreground mb-1">Order Status</div>
                          <div className="text-sm text-foreground">{project.orderStatus}</div>
                        </div>
                        
                        <div>
                          <div className="text-sm font-semibold text-foreground mb-1">Business URL</div>
                          <a 
                            href={project.businessUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 hover:underline"
                          >
                            {project.businessUrl}
                          </a>
                        </div>
                        
                        <div>
                          <div className="text-sm font-semibold text-foreground mb-1">Business Phone</div>
                          <div className="text-sm text-foreground">{project.businessPhone}</div>
                        </div>
                        
                        <div>
                          <div className="text-sm font-semibold text-foreground mb-1">Business Address</div>
                          <div className="text-sm text-foreground">{project.businessAddress}</div>
                        </div>
                        
                        <div>
                          <div className="text-sm font-semibold text-foreground mb-1">Site Start Date</div>
                          <div className="text-sm text-foreground">{project.siteStartDate}</div>
                        </div>
                        
                        <div>
                          <div className="text-sm font-semibold text-foreground mb-1">Site Live Date</div>
                          <div className="text-sm text-foreground">{project.siteLiveDate}</div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === "sales-info" && (
                    <div className="text-center py-8 text-muted-foreground">
                      <p>Sales information will be displayed here</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Attachments - Takes 1/4 width */}
          <div className="lg:col-span-1">
            <Card className="border border-border shadow-sm h-full">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-foreground">Attachments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <p className="text-sm mb-4">No attachments available</p>
                  <Button variant="outline" size="sm">
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
