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
        {/* Hero Section */}
        <h1 className="text-6xl font-bold text-gray-800">
          Hello World
        </h1>
      </motion.div>
    </div>
  );
};

export default Home;