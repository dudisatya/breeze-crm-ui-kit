
import { useState } from "react";
import { Header } from "@/components/Header";
import { AddProjectDialog } from "@/components/AddProjectDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Search, Eye, Sparkles } from "lucide-react";

const projectsData = [
  { name: "abc.com2", productType: "Listings", orderStatus: "New Order" },
  { name: "New Project099", productType: "Listings", orderStatus: "New Order" },
  { name: "New Project", productType: "SEO", orderStatus: "New Order" },
  { name: "New Project", productType: "SEO", orderStatus: "New Order" },
  { name: "New Project", productType: "SEO", orderStatus: "New Order" },
  { name: "New Project", productType: "SEO", orderStatus: "New Order" },
  { name: "New Project", productType: "SEO", orderStatus: "New Order" },
  { name: "abc.com2", productType: "Website", orderStatus: "New Order" },
  { name: "New Project", productType: "SEO", orderStatus: "New Order" },
  { name: "abc.com", productType: "SEO", orderStatus: "New Order" },
];

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredProjects = projectsData.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.productType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex-1 space-y-8 p-8 relative">
      {/* Premium background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/6 to-accent/6 rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-tr from-secondary/10 to-primary/8 rounded-full blur-2xl animate-float"></div>
      </div>

      <Header 
        title="Projects" 
        subtitle="Manage your creative projects with style"
        actions={<AddProjectDialog />}
      />

      {/* Enhanced Search Section */}
      <div className="glass-card rounded-3xl p-8 border-0 shadow-xl relative overflow-hidden animate-slide-up">
        <div className="absolute inset-0 gradient-accent opacity-5"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-12 h-12 glass-effect rounded-2xl flex items-center justify-center">
              <Search className="w-6 h-6 text-primary animate-pulse-subtle" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-gradient">Search Projects</h2>
              <p className="text-muted-foreground font-medium">Find your projects instantly</p>
            </div>
          </div>
          
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search Projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-14 glass-effect border-gradient text-lg font-medium placeholder:text-muted-foreground/60 focus:modern-glow transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Enhanced Projects Table */}
      <div className="glass-card rounded-3xl border-0 shadow-xl overflow-hidden animate-slide-up">
        <div className="p-8 border-b border-border/50 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 glass-effect rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary animate-pulse-subtle" />
            </div>
            <div>
              <h3 className="text-xl font-black text-gradient">Project Portfolio</h3>
              <p className="text-muted-foreground font-medium">Your creative workspace</p>
            </div>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow className="border-border/50 hover:bg-muted/30">
              <TableHead className="text-lg font-bold text-foreground py-6 px-8">Project Name</TableHead>
              <TableHead className="text-lg font-bold text-foreground py-6">Product Type</TableHead>
              <TableHead className="text-lg font-bold text-foreground py-6">Order Status</TableHead>
              <TableHead className="text-right text-lg font-bold text-foreground py-6 px-8">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentProjects.map((project, index) => (
              <TableRow key={index} className="border-border/30 hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 transition-all duration-300 group">
                <TableCell className="font-bold text-lg py-6 px-8 text-foreground">{project.name}</TableCell>
                <TableCell className="py-6">
                  <Badge 
                    variant={
                      project.productType === "SEO" ? "default" :
                      project.productType === "Listings" ? "secondary" : 
                      "outline"
                    }
                    className="text-sm font-bold px-4 py-2 glass-effect border-primary/30"
                  >
                    {project.productType}
                  </Badge>
                </TableCell>
                <TableCell className="py-6">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 text-sm font-bold px-4 py-2 glass-effect">
                    {project.orderStatus}
                  </Badge>
                </TableCell>
                <TableCell className="text-right py-6 px-8">
                  <Button variant="ghost" size="sm" className="glass-effect rounded-xl hover:scale-110 transition-all duration-300 group-hover:modern-glow">
                    <Eye className="w-5 h-5 text-primary" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Enhanced Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center animate-slide-up">
          <div className="glass-card rounded-2xl p-2 border-0 shadow-lg">
            <Pagination>
              <PaginationContent className="gap-2">
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    className={`glass-effect rounded-xl hover:scale-105 transition-all duration-300 ${currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer hover:modern-glow"}`}
                  />
                </PaginationItem>
                {[...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      onClick={() => setCurrentPage(i + 1)}
                      isActive={currentPage === i + 1}
                      className={`cursor-pointer glass-effect rounded-xl hover:scale-105 transition-all duration-300 ${currentPage === i + 1 ? "gradient-primary text-white modern-glow" : "hover:modern-glow"}`}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    className={`glass-effect rounded-xl hover:scale-105 transition-all duration-300 ${currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer hover:modern-glow"}`}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
