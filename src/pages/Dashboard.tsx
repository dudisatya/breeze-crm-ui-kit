
import { Header } from "@/components/Header";
import { StatsCard } from "@/components/StatsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FolderOpen, Globe, FileText, FileSearch, Plus } from "lucide-react";

const latestProjects = [
  { name: "abc.com2", type: "Listings", date: "June 9, 2025" },
  { name: "New Project099", type: "Listings", date: "June 9, 2025" },
  { name: "New Project", type: "SEO", date: "June 5, 2025" },
  { name: "New Project", type: "SEO", date: "June 5, 2025" },
  { name: "New Project", type: "SEO", date: "June 5, 2025" },
];

const latestAudits = [
  { type: "SEO Audit Report", url: "around29.com", date: "June 3, 2025" },
  { type: "SEO Audit Report", url: "https://around29.com", date: "May 16, 2025" },
  { type: "Detailed Profile Report", url: "https://around29.com", date: "May 12, 2025" },
  { type: "SEO Audit Report", url: "https://around29.com", date: "May 9, 2025" },
];

const Dashboard = () => {
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? "Good Morning" : currentHour < 18 ? "Good Afternoon" : "Good Evening";

  return (
    <div className="flex-1 space-y-6 p-6">
      <Header 
        title="Dashboard" 
        subtitle={`${greeting}, Yaswanth`}
        actions={
          <div className="flex gap-2">
            <Button variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Add Project
            </Button>
            <Button>
              Request Audit
            </Button>
          </div>
        }
      />

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Projects"
          value="90"
          icon={FolderOpen}
          trend={{ value: 12, isPositive: true }}
          className="bg-green-50 border-green-200"
        />
        <StatsCard
          title="Websites"
          value="76"
          icon={Globe}
          trend={{ value: 8, isPositive: true }}
          className="bg-green-50 border-green-200"
        />
        <StatsCard
          title="Landing Pages"
          value="5"
          icon={FileText}
          trend={{ value: 2, isPositive: true }}
          className="bg-green-50 border-green-200"
        />
        <StatsCard
          title="Audit Requests"
          value="4"
          icon={FileSearch}
          trend={{ value: 5, isPositive: false }}
          className="bg-green-50 border-green-200"
        />
      </div>

      {/* Latest Projects and Audits */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FolderOpen className="w-5 h-5" />
              Latest Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {latestProjects.map((project, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{project.name}</TableCell>
                    <TableCell>
                      <Badge variant={project.type === "SEO" ? "default" : "secondary"}>
                        {project.type}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{project.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileSearch className="w-5 h-5" />
              Latest Audit Requests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>URL</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {latestAudits.map((audit, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      {audit.type.length > 15 ? `${audit.type.substring(0, 15)}...` : audit.type}
                    </TableCell>
                    <TableCell className="text-muted-foreground">{audit.url}</TableCell>
                    <TableCell className="text-muted-foreground">{audit.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
