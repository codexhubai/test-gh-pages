import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800">
      {/* Hero Section with enhanced visual elements */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left content - Text area with animations */}
          <motion.div 
            className="lg:w-1/2 text-white space-y-6 z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-extrabold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transforming Ideas Into <span className="text-blue-300">Digital Reality</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-blue-100 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We build innovative digital solutions that help businesses thrive in today's competitive landscape.
            </motion.p>
            
            <motion.div 
              className="pt-6 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-all transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-blue-300 text-white font-semibold rounded-lg hover:bg-blue-800/30 transition-all transform hover:scale-105">
                Learn More
              </button>
            </motion.div>
          </motion.div>
          
          {/* Right content - Image with animations */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="https://storage.googleapis.com/fenado-ai-farm-public/generated/6a85c140-553d-442c-be3a-bda9aa1dde30.webp" 
                alt="Digital Solutions" 
                className="rounded-xl shadow-2xl"
              />
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-500 rounded-full opacity-60 blur-md"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 0.8, 0.6] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4,
                  repeatType: "reverse" 
                }}
              />
              <motion.div 
                className="absolute -top-6 -right-6 w-16 h-16 bg-indigo-500 rounded-full opacity-60 blur-md"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 0.7, 0.6] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 5,
                  repeatType: "reverse" 
                }}
              />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Stats section with counters */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 text-center text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg">
            <h3 className="text-3xl font-bold text-blue-300">250+</h3>
            <p className="text-blue-100">Projects Completed</p>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg">
            <h3 className="text-3xl font-bold text-blue-300">120+</h3>
            <p className="text-blue-100">Happy Clients</p>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg">
            <h3 className="text-3xl font-bold text-blue-300">15+</h3>
            <p className="text-blue-100">Years Experience</p>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg">
            <h3 className="text-3xl font-bold text-blue-300">99%</h3>
            <p className="text-blue-100">Client Satisfaction</p>
          </div>
        </motion.div>
      </div>
      
      {/* CodexHub signature */}
      <div className="text-center py-4 mt-8">
        <p className="text-sm text-blue-200">
          Built with CodexHub.ai website builder
        </p>
      </div>
    </div>
  );
};

export default Home;