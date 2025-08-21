import { useState } from "react";
import { motion } from "framer-motion";
import RootLayout from "@/components/layout/RootLayout";
import SearchFilters from "@/components/dashboard/SearchFilters";
import DatasetCard from "@/components/dashboard/DatasetCard";
import { featuredDatasets } from "@/constants";
import { Button } from "@/components/ui/button";
import { Bell, LogOut, User } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const ClientDashboard = () => {
  const navigate = useNavigate();
  const [filteredDatasets, setFilteredDatasets] = useState(featuredDatasets);
  
  const handleSearch = (filters: {
    query: string;
    category: string;
    location: string;
    priceRange: string;
  }) => {
    // Filter datasets based on search criteria
    let results = [...featuredDatasets];
    
    if (filters.query) {
      const query = filters.query.toLowerCase();
      results = results.filter(
        (dataset) =>
          dataset.title.toLowerCase().includes(query) ||
          dataset.description.toLowerCase().includes(query)
      );
    }
    
    if (filters.category && filters.category !== "All Categories") {
      results = results.filter((dataset) => dataset.category === filters.category);
    }
    
    if (filters.location && filters.location !== "All Locations") {
      results = results.filter((dataset) => dataset.location === filters.location);
    }
    
    if (filters.priceRange && filters.priceRange !== "All Prices") {
      // Extract price range values
      if (filters.priceRange === "Under $50") {
        results = results.filter((dataset) => dataset.price < 50);
      } else if (filters.priceRange === "$50 - $100") {
        results = results.filter(
          (dataset) => dataset.price >= 50 && dataset.price <= 100
        );
      } else if (filters.priceRange === "$100 - $200") {
        results = results.filter(
          (dataset) => dataset.price > 100 && dataset.price <= 200
        );
      } else if (filters.priceRange === "Over $200") {
        results = results.filter((dataset) => dataset.price > 200);
      }
    }
    
    setFilteredDatasets(results);
  };
  
  const handleLogout = () => {
    toast.success("Logged out successfully");
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };
  
  const handleNotifications = () => {
    toast.info("No new notifications");
  };
  
  return (
    <RootLayout hideFooter>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen bg-background"
      >
        {/* Secondary header */}
        <div className="bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-foreground">Client Dashboard</h1>
            
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={handleNotifications}
                className="relative"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-accent"></span>
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>Guest User</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => toast.info("Profile settings would be here")}>
                    Profile Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => toast.info("Purchase history would be here")}>
                    Purchase History
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    <span>Log Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Discover Your Next Dataset
            </h2>
            <p className="text-muted-foreground">
              Search and filter through our catalog of premium datasets
            </p>
          </div>
          
          <SearchFilters onSearch={handleSearch} />
          
          {filteredDatasets.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No datasets found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your search filters</p>
              <Button 
                onClick={() => setFilteredDatasets(featuredDatasets)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                View All Datasets
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDatasets.map((dataset) => (
                <DatasetCard
                  key={dataset.id}
                  id={dataset.id}
                  title={dataset.title}
                  description={dataset.description}
                  price={dataset.price}
                  category={dataset.category}
                  location={dataset.location}
                  downloads={dataset.downloads}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </RootLayout>
  );
};

export default ClientDashboard;