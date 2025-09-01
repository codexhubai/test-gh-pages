import { useState } from 'react';
import { Button } from '../ui/button';
import { Menu, ShoppingCart, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/grocery-logo.webp" alt="Fresh Grocer" className="h-10 mr-2" />
            <span className="text-2xl font-bold text-green-600">Fresh Grocer</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Shop</a>
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Categories</a>
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Specials</a>
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Contact</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <ShoppingCart className="mr-2 h-4 w-4" /> Cart (0)
            </Button>
            <Button size="sm" asChild>
              <a href="/login">Sign In</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Shop</a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Categories</a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Specials</a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium">About</a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Contact</a>
              <div className="pt-2 flex flex-col space-y-2">
                <Button variant="outline" size="sm" className="justify-start">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Cart (0)
                </Button>
                <Button size="sm" asChild>
                  <a href="/login">Sign In</a>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;