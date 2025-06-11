
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Phone, MapPin, Calendar, Edit, Shield } from "lucide-react";

const Profile = () => {
  return (
    <div className="flex-1 space-y-6 p-6">
      <Header 
        title="Profile" 
        subtitle="Manage your account settings and preferences"
        actions={
          <Button className="glass-effect border-primary/20 hover:bg-primary/10 transition-all duration-300">
            <Edit className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        }
      />

      <div className="grid gap-6 md:grid-cols-3">
        {/* Profile Overview */}
        <Card className="glass-card border-0 md:col-span-1 animate-scale-in">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-24 h-24 glass-effect rounded-full flex items-center justify-center mb-4 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300"></div>
              <User className="w-10 h-10 text-primary relative z-10" />
            </div>
            <CardTitle className="text-xl text-gradient">Yaswanth Kumar</CardTitle>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 animate-pulse-subtle">
              Premium User
            </Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 p-3 glass-effect rounded-lg">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">yaswanth@around29.com</span>
            </div>
            <div className="flex items-center gap-3 p-3 glass-effect rounded-lg">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3 p-3 glass-effect rounded-lg">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-3 p-3 glass-effect rounded-lg">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Joined March 2024</span>
            </div>
          </CardContent>
        </Card>

        {/* Account Details */}
        <Card className="glass-card border-0 md:col-span-2 animate-scale-in" style={{animationDelay: '0.1s'}}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gradient">
              <Shield className="w-5 h-5" />
              Account Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                <div className="p-3 glass-effect rounded-lg">
                  <span className="text-foreground">Yaswanth Kumar</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Username</label>
                <div className="p-3 glass-effect rounded-lg">
                  <span className="text-foreground">@yaswanth_kumar</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Company</label>
                <div className="p-3 glass-effect rounded-lg">
                  <span className="text-foreground">Around29 Technologies</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Role</label>
                <div className="p-3 glass-effect rounded-lg">
                  <span className="text-foreground">Product Manager</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Time Zone</label>
                <div className="p-3 glass-effect rounded-lg">
                  <span className="text-foreground">Pacific Standard Time (PST)</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Language</label>
                <div className="p-3 glass-effect rounded-lg">
                  <span className="text-foreground">English (US)</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border/50">
              <h3 className="text-sm font-medium text-muted-foreground mb-4">Notifications</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 glass-effect rounded-lg">
                  <span className="text-sm">Email notifications</span>
                  <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                    Enabled
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 glass-effect rounded-lg">
                  <span className="text-sm">Push notifications</span>
                  <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                    Enabled
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 glass-effect rounded-lg">
                  <span className="text-sm">Marketing emails</span>
                  <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                    Disabled
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
