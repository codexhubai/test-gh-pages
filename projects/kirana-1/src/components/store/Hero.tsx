import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-100 to-green-50 overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute -top-24 -right-24 w-64 h-64 bg-green-200 rounded-full opacity-50"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.6, 0.5] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-yellow-100 rounded-full opacity-40"
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.4, 0.5, 0.4] 
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Fresh Fruits & Vegetables Delivered to Your Doorstep
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              We source directly from local farmers to bring you the freshest produce. 
              Shop for a variety of seasonal fruits and vegetables with the best quality and price.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2"
                size="lg"
              >
                Shop Now
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="border-green-600 text-green-600 hover:bg-green-50"
                size="lg"
              >
                View Offers
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-8">
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold text-green-600">100%</span>
                <span className="text-sm text-gray-600">Fresh Produce</span>
              </div>
              <div className="w-px h-10 bg-gray-300"></div>
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold text-green-600">Fast</span>
                <span className="text-sm text-gray-600">Delivery</span>
              </div>
              <div className="w-px h-10 bg-gray-300"></div>
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold text-green-600">Best</span>
                <span className="text-sm text-gray-600">Prices</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://storage.googleapis.com/fenado-ai-farm-public/generated/241c5501-2452-4ae0-ba17-c314ecd42489.webp"
              alt="Fresh Fruits"
              className="rounded-lg shadow-xl relative z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-800/20 to-transparent rounded-lg z-20"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;