import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { FaRocket, FaCode, FaGraduationCap } from 'react-icons/fa';

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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-block px-4 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 mb-6 text-sm font-medium">
              Learn to code with industry experts
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6"
            >
              <span className="block">Master Coding</span>
              <span className="block mt-2 text-indigo-600 dark:text-indigo-400">Change Your Future</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto md:mx-0"
            >
              Unlock your potential with our cutting-edge curriculum designed by industry professionals. From beginner to advanced, start your coding journey today.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start"
            >
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8">
                <FaRocket className="mr-2" /> Start Learning
              </Button>
              <Button size="lg" variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-gray-800">
                <FaGraduationCap className="mr-2" /> Browse Courses
              </Button>
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto md:mx-0"
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">50+</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Courses</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">12K+</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Students</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">95%</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Success rate</p>
              </div>
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
                src="https://storage.googleapis.com/fenado-ai-farm-public/generated/d02998a7-4ffa-4750-a434-9f0a36783923.webp"
                alt="Coding Workspace" 
                className="w-full rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 mr-3">
                    <FaCode className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Live Coding</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Join now</p>
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