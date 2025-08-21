import { useState } from "react";
import { motion } from "framer-motion";
import AdminSidebar from "@/components/dashboard/AdminSidebar";
import StatCard from "@/components/dashboard/StatCard";
import DataTable from "@/components/dashboard/DataTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  DollarSign, 
  Download, 
  Users, 
  TrendingUp,
  Calendar
} from "lucide-react";
import { recentSales } from "@/constants";

// Mock data
const analyticsData = {
  revenue: {
    total: "$452.94",
    change: 15.8,
    positive: true
  },
  downloads: {
    total: "1,481",
    change: 8.3,
    positive: true
  },
  customers: {
    total: "284",
    change: 12.4,
    positive: true
  },
  conversionRate: {
    total: "18.7%",
    change: 2.1,
    positive: true
  }
};

const salesByDataset = [
  { name: "US Tech Startups 2023", sales: 52, revenue: "$2,599.48", percentage: "32%" },
  { name: "Global E-commerce Trends 2024", sales: 38, revenue: "$3,039.62", percentage: "24%" },
  { name: "Healthcare Industry Leaders 2024", sales: 27, revenue: "$1,619.73", percentage: "17%" },
  { name: "Financial Services Competitive Analysis", sales: 21, revenue: "$1,889.79", percentage: "13%" },
  { name: "Retail Industry Consumer Trends", sales: 18, revenue: "$989.82", percentage: "11%" },
  { name: "Renewable Energy Projects 2023-2024", sales: 5, revenue: "$349.95", percentage: "3%" }
];

const Analytics = () => {
  const [sidebarWidth] = useState(240);
  
  const salesColumns = [
    {
      key: "dataset" as const,
      header: "Dataset",
      sortable: true
    },
    {
      key: "purchaser" as const,
      header: "Purchaser",
      sortable: true
    },
    {
      key: "date" as const,
      header: "Date",
      sortable: true
    },
    {
      key: "price" as const,
      header: "Price",
      sortable: true
    },
    {
      key: "status" as const,
      header: "Status",
      sortable: true,
      render: (value: string) => (
        <span 
          className={`px-2 py-1 rounded-full text-xs ${
            value === "Completed" 
              ? "bg-green-100 text-green-800" 
              : "bg-blue-100 text-blue-800"
          }`}
        >
          {value}
        </span>
      )
    }
  ];
  
  const datasetColumns = [
    {
      key: "name" as const,
      header: "Dataset Name",
      sortable: true
    },
    {
      key: "sales" as const,
      header: "Sales",
      sortable: true
    },
    {
      key: "revenue" as const,
      header: "Revenue",
      sortable: true
    },
    {
      key: "percentage" as const,
      header: "% of Total",
      sortable: true,
      render: (value: string) => (
        <div className="flex items-center">
          <div className="w-full bg-primary/10 rounded-full h-2 mr-2">
            <div 
              className="bg-primary h-2 rounded-full" 
              style={{ width: value }}
            ></div>
          </div>
          <span>{value}</span>
        </div>
      )
    }
  ];
  
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
            <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
            <p className="text-muted-foreground">
              Track your dataset sales, downloads, and customer engagement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Total Revenue"
              value={analyticsData.revenue.total}
              icon={<DollarSign className="h-6 w-6 text-primary" />}
              trend={{
                value: analyticsData.revenue.change,
                positive: analyticsData.revenue.positive
              }}
            />
            <StatCard
              title="Total Downloads"
              value={analyticsData.downloads.total}
              icon={<Download className="h-6 w-6 text-secondary" />}
              trend={{
                value: analyticsData.downloads.change,
                positive: analyticsData.downloads.positive
              }}
            />
            <StatCard
              title="Total Customers"
              value={analyticsData.customers.total}
              icon={<Users className="h-6 w-6 text-accent" />}
              trend={{
                value: analyticsData.customers.change,
                positive: analyticsData.customers.positive
              }}
            />
            <StatCard
              title="Conversion Rate"
              value={analyticsData.conversionRate.total}
              icon={<TrendingUp className="h-6 w-6 text-primary" />}
              trend={{
                value: analyticsData.conversionRate.change,
                positive: analyticsData.conversionRate.positive
              }}
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <Card className="lg:col-span-2">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  Sales Trends
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="aspect-[2/1] rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-6">
                  <img 
                    src="https://storage.googleapis.com/fenado-ai-farm-public/generated/1e1f4fe2-f6a7-4a17-bfc0-76185289f8f2.webp" 
                    alt="Sales Analytics Visualization"
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  Sales by Month
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-4">
                  {[
                    { month: "July", value: 42, percentage: "90%" },
                    { month: "June", value: 38, percentage: "80%" },
                    { month: "May", value: 31, percentage: "65%" },
                    { month: "April", value: 28, percentage: "60%" },
                    { month: "March", value: 24, percentage: "50%" }
                  ].map((item) => (
                    <div key={item.month} className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>{item.month}</span>
                        <span className="font-medium">{item.value} sales</span>
                      </div>
                      <div className="w-full bg-primary/10 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: item.percentage }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="sales" className="mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="sales">Recent Sales</TabsTrigger>
              <TabsTrigger value="datasets">Sales by Dataset</TabsTrigger>
            </TabsList>
            <TabsContent value="sales" className="pt-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Recent Sales</CardTitle>
                </CardHeader>
                <CardContent>
                  <DataTable
                    data={recentSales}
                    columns={salesColumns}
                  />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="datasets" className="pt-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Sales by Dataset</CardTitle>
                </CardHeader>
                <CardContent>
                  <DataTable
                    data={salesByDataset}
                    columns={datasetColumns}
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default Analytics;