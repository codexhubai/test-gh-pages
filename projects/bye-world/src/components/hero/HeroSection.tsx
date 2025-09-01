import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-950 text-white flex flex-col items-center justify-center px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
              Bye World
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-xl">
              Reimagining digital experiences with innovative solutions that transform your ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-full font-medium text-lg transition-all"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-indigo-900 rounded-full font-medium text-lg transition-all"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Logo/Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-teal-500 blur-3xl opacity-20 rounded-full"></div>
              <img
                src="https://storage.googleapis.com/fenado-ai-farm-public/generated/a1663a08-02dd-4676-8af3-bc184af79f08.webp"
                alt="Bye World Logo"
                className="relative w-64 h-64 md:w-80 md:h-80 object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center"
          >
            <span className="text-sm text-slate-300 mb-2">Scroll Down</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-teal-400"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;