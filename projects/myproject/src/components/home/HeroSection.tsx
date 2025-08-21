import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] bg-gradient-to-b from-background to-card/50 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl top-20 -right-48"></div>
      <div className="absolute w-80 h-80 bg-secondary/5 rounded-full blur-3xl -bottom-20 -left-20"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            <span className="text-gradient">
              Unlock the Power of Data.
            </span>
            <br />
            Access Premium Insights.
          </h1>
          
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto lg:mx-0 mb-8">
            Discover curated datasets with ease and security on our 
            specialized marketplace for premium data insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              asChild
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground pill-button text-base"
            >
              <Link to="/login">Explore Datasets</Link>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="border-primary text-foreground pill-button text-base"
            >
              <Link to="/admin">Admin Access</Link>
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <img 
            src="https://storage.googleapis.com/fenado-ai-farm-public/generated/3146342e-e3a1-45b8-9850-0efc8cbcbe2f.webp" 
            alt="Data Flow Visualization" 
            className="w-full h-auto rounded-2xl shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;