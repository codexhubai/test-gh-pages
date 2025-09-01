import { motion } from "framer-motion";
import RootLayout from "@/components/layout/RootLayout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ProductsSection from "@/components/home/ProductsSection";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";

const Home = () => {
  return (
    <RootLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </motion.div>
    </RootLayout>
  );
};

export default Home;