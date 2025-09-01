import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl"></div>
        <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="inline-block px-4 py-2 bg-indigo-50 dark:bg-indigo-950/40 rounded-full mb-6"
              >
                <span className="text-indigo-700 dark:text-indigo-300 font-medium">Funding Innovation. Building Futures.</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
              >
                Powering the <span className="bg-gradient-to-r from-indigo-600 to-amber-500 bg-clip-text text-transparent">Next Generation</span> of Tech Innovators
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl"
              >
                Codex Invests partners with visionary founders to transform groundbreaking ideas into market-leading companies through strategic capital and industry expertise.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8">
                Our Portfolio
              </Button>
              <Button size="lg" variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950 px-8">
                Investment Approach
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="pt-8"
            >
              <p className="text-sm text-gray-500 mb-4">Trusted by industry leaders</p>
              <div className="flex flex-wrap items-center gap-8 opacity-70">
                {/* Placeholder for partner logos */}
                <div className="h-8 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-8 w-32 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-8 w-28 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-8 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-amber-500/20 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl">
                <div className="aspect-video rounded-lg bg-gray-100 dark:bg-gray-700 overflow-hidden">
                  {/* Placeholder for hero image or investment dashboard */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-3xl font-bold text-gray-300 dark:text-gray-600">Investment Dashboard</div>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Portfolio</p>
                    <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">42+</p>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Investments</p>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">$250M</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-900/30 rounded-lg">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Success Rate</p>
                    <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">92%</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};