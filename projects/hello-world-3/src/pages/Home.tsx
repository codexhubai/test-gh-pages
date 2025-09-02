import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center p-8"
      >
        <section className="bg-white shadow-lg rounded-lg p-10 max-w-xl">
          <motion.h1 
            className="text-6xl font-bold text-gray-800"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 15,
              delay: 0.3
            }}
          >
            Hello World Now
          </motion.h1>
        </section>
        
        {/* Subtitle */}
        <p className="text-sm text-gray-500 mt-8">
          Built with CodexHub.ai website builder
        </p>
      </motion.div>
    </div>
  );
};

export default Home;