
import { Header } from "@/components/Header";
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
import { Plus, FileSearch, Globe, Clock, TrendingUp, Eye, Download } from "lucide-react";

const auditsData = [
  {
    auditType: "SEO Audit Report",
    websiteUrl: "around29.com",
    requestedOn: "June 3, 2025",
    status: "Audit In Progress",
    progress: 75
  },
  {
    auditType: "SEO Audit Report",
    websiteUrl: "https://around29.com",
    requestedOn: "May 16, 2025",
    status: "Audit In Progress",
    progress: 45
  },
  {
    auditType: "Detailed Profile Report",
    websiteUrl: "https://around29.com",
    requestedOn: "May 12, 2025",
    status: "Audit In Progress",
    progress: 90
  },
  {
    auditType: "SEO Audit Report",
    websiteUrl: "https://around29.com",
    requestedOn: "May 9, 2025",
    status: "Audit In Progress",
    progress: 60
  },
];

const statsData = [
  {
    title: "Total Audits",
    value: "24",
    icon: FileSearch,
    trend: { value: 12, isPositive: true }
  },
  {
    title: "In Progress",
    value: "4",
    icon: Clock,
    trend: { value: 2, isPositive: true }
  },
  {
    title: "Completed",
    value: "18",
    icon: TrendingUp,
    trend: { value: 8, isPositive: true }
  },
  {
    title: "Websites Analyzed",
    value: "12",
    icon: Globe,
    trend: { value: 3, isPositive: true }
  }
];

const Audits = () => {
  return (
    <div className="flex-1 space-y-8 p-8 min-h-screen">
      <Header 
        title="Audits" 
        subtitle="Comprehensive website analysis & insights"
        actions={
          <Button className="gradient-primary text-white border-0 hover:scale-105 transition-all duration-300 px-8 py-3 rounded-2xl font-bold shadow-lg hover:shadow-xl">
            <Plus className="w-5 h-5 mr-3" />
            Request New Audit
          </Button>
        }
      />

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
        {statsData.map((stat, index) => (
          <Card key={stat.title} className="glass-card border-0 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-scale-in group relative overflow-hidden" style={{animationDelay: `${index * 0.1}s`}}>
            <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 animate-pulse-subtle"></div>
            
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 relative z-10">
              <CardTitle className="text-sm font-bold text-muted-foreground tracking-wide uppercase">
                {stat.title}
              </CardTitle>
              <div className="p-3 glass-effect rounded-2xl shadow-lg animate-float relative overflow-hidden">
                <div className="absolute inset-0 gradient-accent opacity-20"></div>
                <stat.icon className="h-5 w-5 text-primary relative z-10" />
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-4xl font-black text-gradient mb-3">
                {stat.value}
              </div>
              {stat.trend && (
                <div className="flex items-center">
                  <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-bold ${
                    stat.trend.isPositive 
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>
                    {stat.trend.isPositive ? '↗' : '↘'} +{stat.trend.value}%
                  </span>
                  <span className="ml-3 text-muted-foreground text-sm font-medium">vs last month</span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Audits Table Card */}
      <Card className="glass-card border-0 shadow-2xl animate-slide-up overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 border-b border-border/50">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-black text-gradient">Recent Audits</CardTitle>
              <p className="text-muted-foreground mt-2 font-medium">Track your website analysis progress</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="glass-effect border-primary/20 hover:bg-primary/5 rounded-xl font-semibold">
                <Eye className="w-4 h-4 mr-2" />
                View All
              </Button>
              <Button variant="outline" className="glass-effect border-primary/20 hover:bg-primary/5 rounded-xl font-semibold">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-border/50 hover:bg-muted/30">
                <TableHead className="font-bold text-foreground py-6 px-6">Audit Type</TableHead>
                <TableHead className="font-bold text-foreground py-6">Website URL</TableHead>
                <TableHead className="font-bold text-foreground py-6">Requested On</TableHead>
                <TableHead className="font-bold text-foreground py-6">Progress</TableHead>
                <TableHead className="font-bold text-foreground py-6">Status</TableHead>
                <TableHead className="font-bold text-foreground py-6 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {auditsData.map((audit, index) => (
                <TableRow key={index} className="border-border/30 hover:bg-muted/20 transition-all duration-300 group">
                  <TableCell className="font-bold py-6 px-6 group-hover:text-primary transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 glass-effect rounded-xl flex items-center justify-center">
                        <FileSearch className="w-5 h-5 text-primary" />
                      </div>
                      {audit.auditType}
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground py-6 font-medium">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      {audit.websiteUrl}
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground py-6 font-medium">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {audit.requestedOn}
                    </div>
                  </TableCell>
                  <TableCell className="py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full gradient-primary transition-all duration-500" 
                          style={{ width: `${audit.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-bold text-muted-foreground">{audit.progress}%</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-6">
                    <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200 font-bold px-4 py-2 rounded-xl">
                      {audit.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-6 text-right">
                    <div className="flex gap-2 justify-end">
                      <Button variant="ghost" size="sm" className="glass-effect rounded-xl hover:scale-105 transition-all duration-300">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="glass-effect rounded-xl hover:scale-105 transition-all duration-300">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Audits;
