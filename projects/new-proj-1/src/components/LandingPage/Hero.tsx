import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-950 -z-10"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20 -z-10">
        <img 
          src="https://storage.googleapis.com/fenado-ai-farm-public/generated/1cbd20b1-86f2-4edb-845a-766e4e1d52a6.webp"
          alt="Background pattern" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-600 dark:text-blue-400 font-medium mb-4 block">Innovative Software Solutions</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              We Build <span className="text-blue-600 dark:text-blue-400">Powerful</span> Digital Experiences
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
              Quantum Code transforms your ideas into exceptional software products. Our expert team delivers custom solutions that drive business growth and user engagement.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg">
                Our Services
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-400 dark:bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
            <img 
              src="https://storage.googleapis.com/fenado-ai-farm-public/generated/baec7582-5a9a-44da-9c85-16dbd480ba17.webp"
              alt="Responsive web design" 
              className="rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700"
            />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-400 dark:bg-indigo-600 rounded-full opacity-20 blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;