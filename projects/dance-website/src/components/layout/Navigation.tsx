import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, Plus, Home } from "lucide-react";
import useMobile from "@/hooks/use-mobile";

const Navigation = () => {
  const isMobile = useMobile();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home", icon: <Home size={16} /> },
    { to: "/dances", label: "Browse Dances", icon: <BookOpen size={16} /> },
    { to: "/add-dance", label: "Add New Dance", icon: <Plus size={16} /> },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  const handleLinkClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const MobileNavigation = () => (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[250px]">
        <div className="flex flex-col gap-6 mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Dance Wiki</h2>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X size={18} />
            </Button>
          </div>
          
          <nav className="flex flex-col gap-2">
            {links.map((link) => (
              <Link 
                key={link.to} 
                to={link.to}
                onClick={handleLinkClick}
                className="flex items-center gap-2 px-4 py-2 hover:bg-muted rounded-md transition-colors"
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );

  const DesktopNavigation = () => (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="hidden md:flex items-center gap-6"
    >
      {links.map((link) => (
        <motion.div key={link.to} variants={itemVariants}>
          <Link 
            to={link.to}
            className="flex items-center gap-2 px-2 py-1 hover:text-primary transition-colors"
          >
            {link.icon}
            <span>{link.label}</span>
          </Link>
        </motion.div>
      ))}
    </motion.nav>
  );

  return (
    <header className="bg-background border-b sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-xl">Dance Wiki</span>
          </Link>
        </div>

        <DesktopNavigation />
        <MobileNavigation />
      </div>
    </header>
  );
};

export default Navigation;