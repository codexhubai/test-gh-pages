import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/fenado-ai-farm-public/generated/f99380f8-f529-4e41-866c-9d6c35b1ed54.webp" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="inline-block"
            >
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary/20 border border-primary/30 backdrop-blur-sm">
                Launching Soon
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
            >
              Create Beautiful Digital Experiences
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg md:text-xl text-gray-200 max-w-lg"
            >
              Build stunning, high-performance websites with our intuitive platform. No coding required.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button size="lg" className="font-medium">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm">
                Learn More
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="hidden md:flex justify-end"
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-purple-500/40 blur-3xl"></div>
              <div className="relative bg-gray-900/60 backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-xl">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="h-5 w-24 rounded bg-gray-700/50"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 w-3/4 rounded bg-gray-700/50"></div>
                  <div className="h-4 w-full rounded bg-gray-700/50"></div>
                  <div className="h-4 w-5/6 rounded bg-gray-700/50"></div>
                  <div className="h-4 w-4/6 rounded bg-gray-700/50"></div>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="h-20 rounded bg-gradient-to-br from-primary/30 to-purple-500/30 border border-white/10"></div>
                  <div className="h-20 rounded bg-gradient-to-br from-blue-500/30 to-cyan-500/30 border border-white/10"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;