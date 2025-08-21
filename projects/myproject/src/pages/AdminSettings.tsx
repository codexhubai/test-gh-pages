import { useState } from "react";
import { motion } from "framer-motion";
import AdminSidebar from "@/components/dashboard/AdminSidebar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { toast } from "sonner";

const AdminSettings = () => {
  const [sidebarWidth] = useState(240);
  
  // Profile settings
  const [name, setName] = useState("Admin User");
  const [email, setEmail] = useState("admin@datasheetconnect.com");
  const [company, setCompany] = useState("DataSheet Connect");
  
  // Notification settings
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [salesAlerts, setSalesAlerts] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);
  
  // Payment settings
  const [paymentMethod, setPaymentMethod] = useState("Stripe");
  const [accountNumber, setAccountNumber] = useState("•••• •••• •••• 4242");
  
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Profile settings saved successfully");
  };
  
  const handleSaveNotifications = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Notification preferences updated");
  };
  
  const handleSavePayment = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Payment settings updated");
  };
  
  return (
    <div className="bg-background min-h-screen">
      <AdminSidebar />
      
      <div style={{ marginLeft: `${sidebarWidth}px` }} className="p-8 transition-all duration-300">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Settings</h1>
            <p className="text-muted-foreground">
              Manage your account settings and preferences
            </p>
          </div>
          
          <Tabs defaultValue="profile" className="max-w-4xl">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="payment">Payment</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                  <CardDescription>
                    Update your personal and company information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSaveProfile} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-input border-t-2 border-l-2 border-border"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-input border-t-2 border-l-2 border-border"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="bg-input border-t-2 border-l-2 border-border"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="avatar">Profile Picture</Label>
                      <div className="flex items-center space-x-4">
                        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-lg font-medium">
                          {name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <Button variant="outline" className="border-primary/30">
                          Change
                        </Button>
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button onClick={handleSaveProfile} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="notifications" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>
                    Control which notifications you receive
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSaveNotifications} className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-foreground font-medium">Email Notifications</h3>
                          <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                        </div>
                        <Switch 
                          checked={emailNotifications} 
                          onCheckedChange={setEmailNotifications} 
                        />
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-foreground font-medium">Sales Alerts</h3>
                          <p className="text-sm text-muted-foreground">Get notified when your datasets are purchased</p>
                        </div>
                        <Switch 
                          checked={salesAlerts} 
                          onCheckedChange={setSalesAlerts} 
                        />
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-foreground font-medium">Marketing Emails</h3>
                          <p className="text-sm text-muted-foreground">Receive updates about new features and promotions</p>
                        </div>
                        <Switch 
                          checked={marketingEmails} 
                          onCheckedChange={setMarketingEmails} 
                        />
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button onClick={handleSaveNotifications} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Save Preferences
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="payment" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Settings</CardTitle>
                  <CardDescription>
                    Manage your payment methods and payout preferences
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSavePayment} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="payment-method">Payment Method</Label>
                      <Input
                        id="payment-method"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="bg-input border-t-2 border-l-2 border-border"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="account-number">Account Number</Label>
                      <Input
                        id="account-number"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        className="bg-input border-t-2 border-l-2 border-border"
                      />
                    </div>
                    
                    <div className="bg-primary/5 rounded-md p-4">
                      <h3 className="text-foreground font-medium mb-2">Payout Schedule</h3>
                      <p className="text-sm text-muted-foreground">
                        Your earnings are automatically paid out on the 1st of each month for the previous month's sales.
                      </p>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button onClick={handleSavePayment} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Save Payment Settings
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminSettings;