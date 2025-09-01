import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-4 py-1 text-white text-sm font-medium mb-4">
                  Limited Time Offer
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Get 20% Off Your First Order!
                </h2>
                <p className="text-white text-opacity-90 text-lg mb-8">
                  Sign up for our newsletter and receive a special discount code for your first purchase. Fresh groceries delivered to your doorstep.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                    Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:bg-opacity-20">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            </div>
            
            {/* Image */}
            <motion.div
              className="flex items-center justify-center p-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 bg-white bg-opacity-20 rounded-full h-20 w-20"></div>
                <div className="absolute -bottom-4 -right-4 bg-white bg-opacity-20 rounded-full h-12 w-12"></div>
                
                {/* Mock device/image placeholder */}
                <div className="bg-white rounded-xl shadow-lg p-4 transform rotate-3">
                  <img
                    src="/products-image.webp"
                    alt="Fresh groceries collection"
                    className="rounded-lg w-full max-w-xs"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;