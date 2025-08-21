import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Components", href: "/components" },
    { label: "Contact", href: "/contact" }
  ];
  
  return (
    <header className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-sm z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://storage.googleapis.com/fenado-ai-farm-public/generated/6ff049a6-be87-4dfd-b21c-aea854b93555.webp" 
                alt="DataSheet Connect Logo" 
                className="h-8 w-auto mr-3" 
              />
              <span className="text-xl font-semibold text-gradient">
                DataSheet Connect
              </span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link 
                key={index}
                to={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
            
            <div className="flex space-x-4">
              <Button asChild variant="outline" className="pill-button">
                <Link to="/login">Log In</Link>
              </Button>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 pill-button">
                <Link to="/admin">Admin</Link>
              </Button>
            </div>
          </nav>
          
          {/* Mobile navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-card text-card-foreground">
                <nav className="mt-8">
                  <ul className="space-y-4">
                    {navItems.map((item, index) => (
                      <li key={index}>
                        <Link 
                          to={item.href}
                          className="text-foreground hover:text-foreground/80 text-lg block py-2"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 space-y-4">
                    <Button asChild className="w-full pill-button" variant="outline">
                      <Link to="/login" onClick={() => setIsOpen(false)}>
                        Log In
                      </Link>
                    </Button>
                    <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 pill-button">
                      <Link to="/admin" onClick={() => setIsOpen(false)}>
                        Admin
                      </Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;