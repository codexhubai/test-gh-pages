import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and company name */}
          <div className="flex-shrink-0 flex items-center">
            <img 
            className="h-10 w-10 mr-2" 
            src="https://storage.googleapis.com/fenado-ai-farm-public/generated/4c23c72b-eb21-4a66-92ac-92a701a6b7b1.webp" 
            alt="CodeCraft Academy Logo" 
            />
            <span className="font-bold text-xl text-indigo-600 dark:text-indigo-400">
            CodeCraft Academy
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md font-medium">Home</a>
              <a href="#courses" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md font-medium">Courses</a>
              <a href="#features" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md font-medium">Features</a>
              <a href="#instructors" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md font-medium">Instructors</a>
              <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md font-medium">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md font-medium">Contact</a>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              Start Learning
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
            <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-white">Home</a>
            <a href="#courses" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-white">Courses</a>
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-white">Features</a>
            <a href="#instructors" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-white">Instructors</a>
            <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-white">Testimonials</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-white">Contact</a>
            <Button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white">
              Start Learning
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;