import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/store/Hero";
import Categories from "@/components/store/Categories";
import FeaturedProducts from "@/components/store/FeaturedProducts";
import Features from "@/components/store/Features";
import Testimonials from "@/components/store/Testimonials";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <Categories />
        
        <FeaturedProducts />
        
        <div className="bg-gradient-to-r from-green-800 to-green-700 py-16 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Get Fresh Produce Delivered Right to Your Doorstep
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                Order now and get 10% off on your first purchase. Use code FRESH10 at checkout.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-green-800 hover:bg-gray-100"
              >
                Start Shopping Now
              </Button>
            </motion.div>
          </div>
        </div>
        
        <Features />
        
        <Testimonials />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;