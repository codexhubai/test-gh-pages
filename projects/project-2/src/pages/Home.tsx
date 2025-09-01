import { motion } from "framer-motion";
import RootLayout from "@/components/layout/RootLayout";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Home = () => {
  return (
    <RootLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1>Home</h1> 
        <img src="logo.png" alt="Logo" />
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
      </motion.div>
    </RootLayout>
  );
};

export default Home;