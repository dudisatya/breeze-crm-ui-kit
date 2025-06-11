
import { Header } from "@/components/Header";
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
import { Plus } from "lucide-react";

const auditsData = [
  {
    auditType: "SEO Audit Report",
    websiteUrl: "around29.com",
    requestedOn: "June 3, 2025",
    status: "Audit In Progress"
  },
  {
    auditType: "SEO Audit Report",
    websiteUrl: "https://around29.com",
    requestedOn: "May 16, 2025",
    status: "Audit In Progress"
  },
  {
    auditType: "Detailed Profile Report",
    websiteUrl: "https://around29.com",
    requestedOn: "May 12, 2025",
    status: "Audit In Progress"
  },
  {
    auditType: "SEO Audit Report",
    websiteUrl: "https://around29.com",
    requestedOn: "May 9, 2025",
    status: "Audit In Progress"
  },
];

const Audits = () => {
  return (
    <div className="flex-1 space-y-6 p-6">
      <Header 
        title="Audits" 
        actions={
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="w-4 h-4 mr-2" />
            Request Audit
          </Button>
        }
      />

      {/* Audits Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Audit Type</TableHead>
              <TableHead>Website URL</TableHead>
              <TableHead>Requested On</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {auditsData.map((audit, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{audit.auditType}</TableCell>
                <TableCell className="text-muted-foreground">{audit.websiteUrl}</TableCell>
                <TableCell className="text-muted-foreground">{audit.requestedOn}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                    {audit.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Audits;
