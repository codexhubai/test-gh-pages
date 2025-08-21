import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  LayoutDashboard, 
  Upload, 
  BarChart, 
  Settings, 
  LogOut,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const AdminSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  
  const navItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      href: "/admin-dashboard"
    },
    {
      icon: Upload,
      label: "Upload Data",
      href: "/upload-data"
    },
    {
      icon: BarChart,
      label: "Analytics",
      href: "/analytics"
    },
    {
      icon: Settings,
      label: "Settings",
      href: "/admin-settings"
    }
  ];
  
  const handleLogout = () => {
    toast.success("Logged out successfully");
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  };
  
  return (
    <div 
      className={cn(
        "bg-sidebar-background text-sidebar-foreground h-screen fixed left-0 top-0 transition-all duration-300 border-r border-sidebar-border flex flex-col",
        collapsed ? "w-[70px]" : "w-[240px]"
      )}
    >
      <div className="flex items-center justify-between p-4 h-16">
        {!collapsed && (
          <Link to="/admin-dashboard" className="flex items-center">
            <img 
              src="https://storage.googleapis.com/fenado-ai-farm-public/generated/6ff049a6-be87-4dfd-b21c-aea854b93555.webp" 
              alt="DataSheet Connect Logo" 
              className="h-8 w-auto mr-2" 
            />
            <span className="font-semibold text-lg text-sidebar-foreground">DataSheet</span>
          </Link>
        )}
        
        {collapsed && (
          <Link to="/admin-dashboard" className="w-full flex justify-center">
            <img 
              src="https://storage.googleapis.com/fenado-ai-farm-public/generated/6ff049a6-be87-4dfd-b21c-aea854b93555.webp" 
              alt="DataSheet Connect Logo" 
              className="h-8 w-auto" 
            />
          </Link>
        )}
        
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setCollapsed(!collapsed)}
          className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
      </div>
      
      <Separator className="bg-sidebar-border" />
      
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="px-2 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link 
                key={item.href} 
                to={item.href}
                className={cn(
                  "flex items-center py-2 px-3 rounded-md transition-colors",
                  isActive 
                    ? "bg-sidebar-primary text-sidebar-primary-foreground" 
                    : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                <item.icon className="h-5 w-5 mr-2" />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>
      </div>
      
      <div className="p-4">
        <Button 
          variant="ghost" 
          className={cn(
            "w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            collapsed && "justify-center"
          )}
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5 mr-2" />
          {!collapsed && <span>Log Out</span>}
        </Button>
      </div>
    </div>
  );
};

export default AdminSidebar;