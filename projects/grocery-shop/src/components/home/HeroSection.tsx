import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Search } from 'lucide-react';
import { Input } from '../ui/input';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Fresh Groceries <span className="text-green-600">Delivered</span> To Your Door
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Shop from our wide selection of fresh produce, pantry items, and household essentials delivered straight to you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Shop Now
              </Button>
              <Button size="lg" variant="outline">
                Special Offers
              </Button>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Input 
                className="pl-10 py-6 rounded-full shadow-sm" 
                placeholder="Search for products..."
              />
              <Search className="h-5 w-5 absolute top-3 left-3 text-gray-400" />
            </div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="/hero-image.webp" 
              alt="Fresh grocery items" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;