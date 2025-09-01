import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6 p-8"
      >
        {/* CodexHub Logo */}
        <div className="mb-8">
          <img 
            src="/logo.png" 
            alt="CodexHub Logo" 
            className="w-24 h-24 mx-auto object-contain"
          />
        </div>
        
        {/* Main Message */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Please wait for a while
        </h1>
        
        <p className="text-xl text-gray-600 max-w-md mx-auto leading-relaxed">
          Your website will appear here on these lines
        </p>
        
        {/* Loader Animation */}
        <div className="mt-8">
          <div className="w-8 h-8 mx-auto border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        </div>
        
        {/* Subtitle */}
        <p className="text-sm text-gray-500 mt-8">
          Built with CodexHub.ai website's builder
        </p>
      </motion.div>
    </div>
  );
};

export default Home;