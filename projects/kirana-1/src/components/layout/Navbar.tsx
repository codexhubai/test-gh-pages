import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Fruits", path: "/fruits" },
    { name: "Vegetables", path: "/vegetables" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <motion.div
          key={item.name}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to={item.path}
            className="font-medium text-gray-700 hover:text-green-600 transition-colors"
            onClick={() => isMobile && setIsOpen(false)}
          >
            {item.name}
          </Link>
        </motion.div>
      ))}
    </>
  );

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="https://storage.googleapis.com/fenado-ai-farm-public/generated/1623b8f9-c679-4141-87c0-d0e5b2fab350.png" 
              alt="Fresh Kirana Logo" 
              className="h-10 w-10"
            />
            <span className="text-xl font-bold text-green-600">Fresh Kirana</span>
          </Link>

          {/* Desktop Nav Links */}
          {!isMobile && (
            <div className="hidden md:flex items-center space-x-8">
              <NavLinks />
            </div>
          )}

          {/* Cart and Menu Buttons */}
          <div className="flex items-center space-x-3">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 px-1.5 py-0.5">3</Badge>
              </Button>
            </Link>
            
            {isMobile && (
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center border-b pb-4">
                      <span className="font-bold">Menu</span>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => setIsOpen(false)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex flex-col space-y-6 py-8">
                      <NavLinks />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;