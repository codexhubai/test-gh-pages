import { useState } from "react";
import { motion } from "framer-motion";
import AdminSidebar from "@/components/dashboard/AdminSidebar";
import StatCard from "@/components/dashboard/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart, PieChart } from "lucide-react";
import { featuredDatasets } from "@/constants";
import { toast } from "sonner";
import { Link } from "react-router-dom";

// Mock data
const recentUploads = featuredDatasets.slice(0, 3).map(dataset => ({
  ...dataset,
  status: "Active",
  uploadDate: "2024-07-" + Math.floor(Math.random() * 28 + 1).toString().padStart(2, '0')
}));

const AdminDashboard = () => {
  const [sidebarWidth] = useState(240);
  
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
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, Admin. Here's an overview of your data marketplace.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard
              title="Total Datasets"
              value="6"
              icon={<BarChart className="h-6 w-6 text-primary" />}
              trend={{ value: 20, positive: true }}
            />
            <StatCard
              title="Total Sales"
              value="$452.94"
              icon={<LineChart className="h-6 w-6 text-secondary" />}
              trend={{ value: 15.8, positive: true }}
            />
            <StatCard
              title="Total Downloads"
              value="1,481"
              icon={<PieChart className="h-6 w-6 text-accent" />}
              trend={{ value: 8.3, positive: true }}
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Recent Uploads</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUploads.map((dataset) => (
                    <div 
                      key={dataset.id}
                      className="flex items-center justify-between p-3 bg-primary/5 rounded-lg"
                    >
                      <div>
                        <h4 className="font-medium text-foreground">{dataset.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          Uploaded on {dataset.uploadDate}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-secondary mr-2">
                          ${dataset.price.toFixed(2)}
                        </span>
                        <span className="bg-secondary/20 text-secondary text-xs rounded-full px-2 py-1">
                          {dataset.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 text-center">
                  <Link
                    to="/upload-data"
                    className="text-sm text-primary hover:text-primary/80"
                    onClick={(e) => {
                      e.preventDefault();
                      toast.info("Navigating to upload data page");
                      setTimeout(() => {
                        window.location.href = "/upload-data";
                      }, 500);
                    }}
                  >
                    View All Datasets
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Sales Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-6">
                  <img 
                    src="https://storage.googleapis.com/fenado-ai-farm-public/generated/1e1f4fe2-f6a7-4a17-bfc0-76185289f8f2.webp" 
                    alt="Sales Analytics Visualization"
                    className="w-full h-auto rounded-md"
                  />
                </div>
                
                <div className="mt-4 text-center">
                  <Link
                    to="/analytics"
                    className="text-sm text-primary hover:text-primary/80"
                    onClick={(e) => {
                      e.preventDefault();
                      toast.info("Navigating to analytics page");
                      setTimeout(() => {
                        window.location.href = "/analytics";
                      }, 500);
                    }}
                  >
                    View Detailed Analytics
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Link
                    to="/upload-data"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg p-4 text-center transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      toast.info("Navigating to upload data page");
                      setTimeout(() => {
                        window.location.href = "/upload-data";
                      }, 500);
                    }}
                  >
                    Upload New Dataset
                  </Link>
                  <Link
                    to="/analytics"
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg p-4 text-center transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      toast.info("Navigating to analytics page");
                      setTimeout(() => {
                        window.location.href = "/analytics";
                      }, 500);
                    }}
                  >
                    View Sales Analytics
                  </Link>
                  <button
                    className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg p-4 text-center transition-colors duration-300"
                    onClick={() => toast.info("Settings page would be here")}
                  >
                    Manage Settings
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;