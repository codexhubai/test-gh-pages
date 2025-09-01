import { motion } from 'framer-motion';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-28 md:pb-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Hero Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0"
          >
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6"
            >
              <span className="block">Transforming Ideas</span>
              <span className="block mt-2 text-indigo-600 dark:text-indigo-400">Into Digital Reality</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto md:mx-0"
            >
              We build innovative software solutions that drive business growth and deliver exceptional user experiences.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start"
            >
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-gray-800">
                Our Services
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              <img 
                src="https://storage.googleapis.com/fenado-ai-farm-public/generated/363a9e50-196d-4c8a-bf75-f9b8d0947b74.webp"
                alt="Software Development Team" 
                className="w-full rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-3">
                    <div className="h-8 w-8 rounded-full bg-indigo-400"></div>
                    <div className="h-8 w-8 rounded-full bg-blue-400"></div>
                    <div className="h-8 w-8 rounded-full bg-purple-400"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Trusted by</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">100+ businesses</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;