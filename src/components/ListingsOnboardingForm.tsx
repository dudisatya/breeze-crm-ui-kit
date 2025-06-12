
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Save, X } from "lucide-react";

interface ListingsOnboardingFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ListingsOnboardingForm = ({ open, onOpenChange }: ListingsOnboardingFormProps) => {
  const form = useForm({
    defaultValues: {
      businessCategories: "",
      briefBusinessDescription: "",
      businessHour: "",
      holidayHours: "",
      yearEstablished: "",
      languagesSpoken: "",
      serviceAreas: "",
      googleBusinessProfile: "",
      facebookBusinessPageUrl: "",
      instagramHandle: "",
      websiteUrl: "",
      otherListings: "",
      shortBrandTagline: "",
      hasGoogleBusinessAccess: "yes",
      isListedOnDirectories: "yes",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
    // Handle form submission here
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card border-0 shadow-xl max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-6 border-b border-border/50">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-2xl font-black text-gradient">
                Listings Management Onboarding Form
              </DialogTitle>
              <DialogDescription className="text-muted-foreground mt-2 font-medium">
                Please fill out the information below to get started with listings management
              </DialogDescription>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onOpenChange(false)}
              className="glass-effect rounded-xl hover:scale-110 transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="businessCategories"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-bold">Business Categories</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="glass-effect border-gradient focus:ring-primary/50" 
                        placeholder="Enter business categories"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="yearEstablished"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-bold">Year Established</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="glass-effect border-gradient focus:ring-primary/50" 
                        placeholder="Enter year established"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="briefBusinessDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-bold">Brief Business Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      {...field} 
                      className="glass-effect border-gradient focus:ring-primary/50 min-h-[100px]" 
                      placeholder="Provide a brief description of your business"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="businessHour"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-bold">Business Hour</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="glass-effect border-gradient focus:ring-primary/50" 
                        placeholder="e.g., Mon-Fri 9AM-5PM"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="holidayHours"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-bold">Holiday Hours</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="glass-effect border-gradient focus:ring-primary/50" 
                        placeholder="Enter holiday hours"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="languagesSpoken"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-bold">Languages Spoken</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="glass-effect border-gradient focus:ring-primary/50" 
                        placeholder="e.g., English, Spanish"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="serviceAreas"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-bold">Service Areas</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="glass-effect border-gradient focus:ring-primary/50" 
                        placeholder="Enter service areas"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="googleBusinessProfile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-bold">Google Business Profile</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="glass-effect border-gradient focus:ring-primary/50" 
                        placeholder="Enter Google Business Profile URL"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="facebookBusinessPageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-bold">Facebook Business Page Url</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="glass-effect border-gradient focus:ring-primary/50" 
                        placeholder="Enter Facebook page URL"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="instagramHandle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-bold">Instagram Handle</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="glass-effect border-gradient focus:ring-primary/50" 
                        placeholder="@yourusername"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="websiteUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-bold">Website Url</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="glass-effect border-gradient focus:ring-primary/50" 
                        placeholder="https://yourwebsite.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="otherListings"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-bold">Other Listings</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="glass-effect border-gradient focus:ring-primary/50" 
                        placeholder="Enter other listing platforms"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="shortBrandTagline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-bold">Short Brand Tagline</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="glass-effect border-gradient focus:ring-primary/50" 
                        placeholder="Enter your brand tagline"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-4">
              <div className="glass-effect rounded-2xl p-6 bg-primary/5">
                <Label className="text-foreground font-bold block mb-3">
                  Do you have access to your Google Business Profile?
                </Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      id="google-yes" 
                      name="hasGoogleBusinessAccess" 
                      value="yes" 
                      defaultChecked 
                      className="w-4 h-4 text-primary"
                    />
                    <Label htmlFor="google-yes" className="font-medium">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      id="google-no" 
                      name="hasGoogleBusinessAccess" 
                      value="no" 
                      className="w-4 h-4 text-primary"
                    />
                    <Label htmlFor="google-no" className="font-medium">No</Label>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-6 bg-accent/5">
                <Label className="text-foreground font-bold block mb-3">
                  Is the business already listed on other directories (Yelp, Bing, Apple Maps)?
                </Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      id="directories-yes" 
                      name="isListedOnDirectories" 
                      value="yes" 
                      defaultChecked 
                      className="w-4 h-4 text-primary"
                    />
                    <Label htmlFor="directories-yes" className="font-medium">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      id="directories-no" 
                      name="isListedOnDirectories" 
                      value="no" 
                      className="w-4 h-4 text-primary"
                    />
                    <Label htmlFor="directories-no" className="font-medium">No</Label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4 pt-6 border-t border-border/50">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="glass-effect border-gradient hover:scale-105 transition-all duration-300"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="gradient-primary text-white hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Form
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ListingsOnboardingForm;
