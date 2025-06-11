
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
import { Plus, Upload, Zap, Sparkles } from "lucide-react";

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
        <Button className="glass-effect border-gradient hover:scale-105 transition-all duration-300 shadow-lg modern-glow relative overflow-hidden group">
          <div className="absolute inset-0 gradient-primary opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
          <Plus className="w-5 h-5 mr-2 relative z-10" />
          <span className="relative z-10 font-bold">Add Project</span>
          <Sparkles className="w-4 h-4 ml-2 relative z-10 animate-pulse-subtle" />
        </Button>
      </DialogTrigger>
      <DialogContent className="glass-card border-0 shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="absolute inset-0 gradient-primary opacity-5 rounded-3xl"></div>
        <DialogHeader className="relative z-10 pb-6">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-16 h-16 glass-effect rounded-3xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 gradient-primary opacity-20"></div>
              <Zap className="w-8 h-8 text-primary animate-pulse-subtle relative z-10" />
            </div>
            <div>
              <DialogTitle className="text-4xl font-black text-gradient leading-tight">
                Add New Project
              </DialogTitle>
              <p className="text-muted-foreground mt-2 text-lg font-medium">
                Create a stunning new project with premium features
              </p>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Name */}
            <div className="space-y-3">
              <Label htmlFor="projectName" className="text-lg font-bold text-foreground">
                Project Name
              </Label>
              <Input
                id="projectName"
                placeholder="Enter Project Name"
                value={formData.projectName}
                onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                className="glass-effect border-gradient h-14 text-lg font-medium placeholder:text-muted-foreground/60 focus:modern-glow transition-all duration-300"
              />
            </div>

            {/* Business Phone */}
            <div className="space-y-3">
              <Label htmlFor="businessPhone" className="text-lg font-bold text-foreground">
                Business Phone
              </Label>
              <Input
                id="businessPhone"
                placeholder="Enter Business Phone"
                value={formData.businessPhone}
                onChange={(e) => setFormData({ ...formData, businessPhone: e.target.value })}
                className="glass-effect border-gradient h-14 text-lg font-medium placeholder:text-muted-foreground/60 focus:modern-glow transition-all duration-300"
              />
            </div>

            {/* Business URL */}
            <div className="space-y-3">
              <Label htmlFor="businessUrl" className="text-lg font-bold text-foreground">
                Business URL
              </Label>
              <Input
                id="businessUrl"
                placeholder="Enter Business URL"
                value={formData.businessUrl}
                onChange={(e) => setFormData({ ...formData, businessUrl: e.target.value })}
                className="glass-effect border-gradient h-14 text-lg font-medium placeholder:text-muted-foreground/60 focus:modern-glow transition-all duration-300"
              />
            </div>

            {/* Product Type */}
            <div className="space-y-3">
              <Label htmlFor="productType" className="text-lg font-bold text-foreground">
                Product Type
              </Label>
              <Select onValueChange={(value) => setFormData({ ...formData, productType: value })}>
                <SelectTrigger className="glass-effect border-gradient h-14 text-lg font-medium focus:modern-glow transition-all duration-300">
                  <SelectValue placeholder="✓ Select" />
                </SelectTrigger>
                <SelectContent className="glass-card border-0 shadow-2xl">
                  <SelectItem value="website" className="text-lg py-3 hover:bg-primary/10 transition-colors">Website</SelectItem>
                  <SelectItem value="landing-page" className="text-lg py-3 hover:bg-primary/10 transition-colors">Landing Page</SelectItem>
                  <SelectItem value="seo" className="text-lg py-3 hover:bg-primary/10 transition-colors">SEO</SelectItem>
                  <SelectItem value="listings" className="text-lg py-3 hover:bg-primary/10 transition-colors">Listings</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Business Address - Full Width */}
          <div className="space-y-3">
            <Label htmlFor="businessAddress" className="text-lg font-bold text-foreground">
              Business Address
            </Label>
            <Textarea
              id="businessAddress"
              placeholder="Enter Business Address"
              value={formData.businessAddress}
              onChange={(e) => setFormData({ ...formData, businessAddress: e.target.value })}
              className="glass-effect border-gradient min-h-[120px] text-lg font-medium placeholder:text-muted-foreground/60 focus:modern-glow transition-all duration-300 resize-none"
            />
          </div>

          {/* Attachments */}
          <div className="space-y-3">
            <Label htmlFor="attachments" className="text-lg font-bold text-foreground">
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
              <div className="glass-effect border-gradient rounded-2xl p-8 text-center hover:scale-[1.02] transition-all duration-300 hover:modern-glow cursor-pointer group">
                <Upload className="w-12 h-12 text-primary mx-auto mb-4 group-hover:animate-pulse-subtle" />
                <p className="text-lg font-bold text-foreground mb-2">Choose Files</p>
                <p className="text-muted-foreground font-medium">
                  {formData.attachments ? `${formData.attachments.length} file(s) selected` : "No file chosen"}
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-6">
            <Button 
              type="submit" 
              className="gradient-primary text-white px-12 py-4 text-xl font-black rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl modern-glow relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent group-hover:from-white/20 transition-all duration-300"></div>
              <span className="relative z-10">Submit</span>
              <Sparkles className="w-5 h-5 ml-3 relative z-10 animate-pulse-subtle" />
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
