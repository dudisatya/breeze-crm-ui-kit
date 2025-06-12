
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
    <div className="flex-1 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/projects")}
              className="p-2"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-2xl font-bold text-gray-900">{project.name}</h1>
          </div>
          
          {/* Green Add Task Button */}
          <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full">
            <Plus className="w-5 h-5 mr-2" />
          </Button>
        </div>
      </div>

      <div className="p-6">
        {/* First Row: Tasks + Company Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Tasks Section - Takes 2/3 width */}
          <div className="lg:col-span-2">
            <Card className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b border-gray-200">
                      <TableHead className="text-gray-900 font-semibold py-4 px-6">Task Name</TableHead>
                      <TableHead className="text-gray-900 font-semibold py-4">Created on</TableHead>
                      <TableHead className="text-gray-900 font-semibold py-4">Task Status</TableHead>
                      <TableHead className="text-right text-gray-900 font-semibold py-4 px-6">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {project.tasks.map((task, index) => (
                      <TableRow key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <TableCell className="font-medium py-4 px-6 text-gray-900">{task.taskName}</TableCell>
                        <TableCell className="py-4 text-gray-600">{task.createdOn}</TableCell>
                        <TableCell className="py-4">
                          <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-300">
                            {task.taskStatus}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right py-4 px-6">
                          <Button variant="ghost" size="sm" className="p-2">
                            <Eye className="w-4 h-4 text-gray-500" />
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
            <Card className="bg-white border border-gray-200 rounded-lg shadow-sm h-full">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold text-gray-900">Around29 IT Services</CardTitle>
                <p className="text-sm text-gray-600">Order Type: {project.orderType}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Around29 IT Services</div>
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
                  <div className="text-sm font-medium text-gray-700 mb-2">{project.status}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Second Row: Project Details + Attachments */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Project Details - Takes 2/3 width */}
          <div className="lg:col-span-2">
            <Card className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <CardContent className="p-6">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger 
                      value="project-info" 
                      className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                    >
                      Project Info
                    </TabsTrigger>
                    <TabsTrigger 
                      value="sales-info"
                      className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                    >
                      Sales Info
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="project-info" className="space-y-4 mt-0">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-1">Product Type</div>
                        <div className="text-gray-900">{project.orderType}</div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-1">Order Status</div>
                        <div className="text-gray-900">{project.orderStatus}</div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-1">Business URL</div>
                        <a 
                          href={project.businessUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {project.businessUrl}
                        </a>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-1">Business Phone</div>
                        <div className="text-gray-900">{project.businessPhone}</div>
                      </div>
                      
                      <div className="col-span-2">
                        <div className="text-sm font-medium text-gray-700 mb-1">Business Address</div>
                        <div className="text-gray-900">{project.businessAddress}</div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="sales-info" className="mt-0">
                    <div className="text-center py-8 text-gray-500">
                      <p>Sales information will be displayed here</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Attachments - Takes 1/3 width */}
          <div className="lg:col-span-1">
            <Card className="bg-white border border-gray-200 rounded-lg shadow-sm h-full">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">Attachments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <p className="text-sm">No attachments available</p>
                  <Button variant="outline" className="mt-4" size="sm">
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
