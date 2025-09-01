import { motion } from "framer-motion";
import HeroSection from "../components/hero/HeroSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Additional page content would go here */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center space-y-6 p-8 mt-12"
      >
        <p className="text-sm text-gray-500 mt-8">
          Built with CodexHub.ai website builder
        </p>
      </motion.div>
    </div>
  );
};

export default Home;