
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Upload, Sparkles } from "lucide-react";

export function AddProjectDialog() {
  const [formData, setFormData] = useState({
    projectName: "",
    businessPhone: "",
    businessUrl: "",
    businessAddress: "",
    productType: "",
    attachments: null as File[] | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Project data:", formData);
    // Handle form submission
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, attachments: Array.from(e.target.files) });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          size="lg"
          className="glass-effect border-gradient hover:scale-105 transition-all duration-300 shadow-lg modern-glow relative overflow-hidden group bg-primary/10 hover:bg-primary/20 text-primary font-bold"
        >
          <div className="absolute inset-0 gradient-primary opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
          <Plus className="w-5 h-5 mr-2 relative z-10" />
          <span className="relative z-10">Add Project</span>
          <Sparkles className="w-4 h-4 ml-2 relative z-10 animate-pulse-subtle" />
        </Button>
      </DialogTrigger>
      <DialogContent className="glass-card border-0 shadow-2xl max-w-lg w-full max-h-[90vh] animate-scale-in rounded-2xl overflow-visible">
        <div className="absolute inset-0 gradient-primary opacity-5 rounded-2xl"></div>
        <DialogHeader className="relative z-10 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 glass-effect rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 gradient-primary opacity-20"></div>
              <Sparkles className="w-5 h-5 text-primary animate-pulse-subtle relative z-10" />
            </div>
            <div>
              <DialogTitle className="text-xl font-black text-gradient leading-tight">
                Add New Project
              </DialogTitle>
              <p className="text-muted-foreground text-xs font-medium">
                Create your next amazing project
              </p>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
          <div className="grid grid-cols-2 gap-3">
            {/* Project Name */}
            <div className="space-y-1">
              <Label htmlFor="projectName" className="text-xs font-bold text-foreground">
                Project Name
              </Label>
              <Input
                id="projectName"
                placeholder="Enter Project Name"
                value={formData.projectName}
                onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                className="glass-effect border-gradient h-9 text-sm font-medium placeholder:text-muted-foreground/60 focus:modern-glow transition-all duration-300"
              />
            </div>

            {/* Business Phone */}
            <div className="space-y-1">
              <Label htmlFor="businessPhone" className="text-xs font-bold text-foreground">
                Business Phone
              </Label>
              <Input
                id="businessPhone"
                placeholder="Enter Business Phone"
                value={formData.businessPhone}
                onChange={(e) => setFormData({ ...formData, businessPhone: e.target.value })}
                className="glass-effect border-gradient h-9 text-sm font-medium placeholder:text-muted-foreground/60 focus:modern-glow transition-all duration-300"
              />
            </div>

            {/* Business URL */}
            <div className="space-y-1">
              <Label htmlFor="businessUrl" className="text-xs font-bold text-foreground">
                Business URL
              </Label>
              <Input
                id="businessUrl"
                placeholder="Enter Business URL"
                value={formData.businessUrl}
                onChange={(e) => setFormData({ ...formData, businessUrl: e.target.value })}
                className="glass-effect border-gradient h-9 text-sm font-medium placeholder:text-muted-foreground/60 focus:modern-glow transition-all duration-300"
              />
            </div>

            {/* Product Type */}
            <div className="space-y-1">
              <Label htmlFor="productType" className="text-xs font-bold text-foreground">
                Product Type
              </Label>
              <Select onValueChange={(value) => setFormData({ ...formData, productType: value })}>
                <SelectTrigger className="glass-effect border-gradient h-9 text-sm font-medium focus:modern-glow transition-all duration-300">
                  <SelectValue placeholder="✓ Select" />
                </SelectTrigger>
                <SelectContent className="glass-card border-0 shadow-2xl">
                  <SelectItem value="website" className="py-1.5 text-sm hover:bg-primary/10 transition-colors">Website</SelectItem>
                  <SelectItem value="landing-page" className="py-1.5 text-sm hover:bg-primary/10 transition-colors">Landing Page</SelectItem>
                  <SelectItem value="seo" className="py-1.5 text-sm hover:bg-primary/10 transition-colors">SEO</SelectItem>
                  <SelectItem value="listings" className="py-1.5 text-sm hover:bg-primary/10 transition-colors">Listings</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Business Address - Full Width */}
          <div className="space-y-1">
            <Label htmlFor="businessAddress" className="text-xs font-bold text-foreground">
              Business Address
            </Label>
            <Textarea
              id="businessAddress"
              placeholder="Enter Business Address"
              value={formData.businessAddress}
              onChange={(e) => setFormData({ ...formData, businessAddress: e.target.value })}
              className="glass-effect border-gradient min-h-[60px] max-h-[80px] text-sm font-medium placeholder:text-muted-foreground/60 focus:modern-glow transition-all duration-300 resize-none"
            />
          </div>

          {/* Attachments */}
          <div className="space-y-1">
            <Label htmlFor="attachments" className="text-xs font-bold text-foreground">
              Attachments
            </Label>
            <div className="relative">
              <input
                type="file"
                id="attachments"
                multiple
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div className="glass-effect border-gradient rounded-lg p-3 text-center hover:scale-[1.02] transition-all duration-300 hover:modern-glow cursor-pointer group">
                <Upload className="w-5 h-5 text-primary mx-auto mb-1 group-hover:animate-pulse-subtle" />
                <p className="font-bold text-foreground text-xs mb-0.5">Choose Files</p>
                <p className="text-muted-foreground text-xs">
                  {formData.attachments ? `${formData.attachments.length} file(s) selected` : "No file chosen"}
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-2">
            <Button 
              type="submit" 
              className="gradient-primary text-white px-6 py-2 font-black rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl modern-glow relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent group-hover:from-white/20 transition-all duration-300"></div>
              <span className="relative z-10">Submit</span>
              <Sparkles className="w-3 h-3 ml-2 relative z-10 animate-pulse-subtle" />
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
