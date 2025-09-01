import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center gap-2">
          <img 
            src="https://storage.googleapis.com/fenado-ai-farm-public/generated/d2974bf5-402d-4bfc-99cd-5a7e60082c79.webp" 
            alt="Quantum Code Logo" 
            className="h-10 w-10"
          />
          <span className="text-xl font-bold text-gray-900 dark:text-white">Quantum Code</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</a>
          <a href="#process" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Process</a>
          <a href="#work" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Our Work</a>
          <a href="#team" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Team</a>
          <a href="#testimonials" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Testimonials</a>
        </nav>

        <div className="hidden md:block">
          <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
            Contact Us
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-gray-900 px-6 pb-6 shadow-lg"
        >
          <nav className="flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#process" 
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Process
            </a>
            <a 
              href="#work" 
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Work
            </a>
            <a 
              href="#team" 
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Team
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <Button variant="default" className="bg-blue-600 hover:bg-blue-700 w-full mt-2">
              Contact Us
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;