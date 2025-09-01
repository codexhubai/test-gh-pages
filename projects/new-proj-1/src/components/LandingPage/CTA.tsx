import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-blue-600 dark:bg-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with Custom Software?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Whether you need a new web application, mobile app, or enterprise solution, our team of experts is ready to bring your vision to life.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-blue-700 px-8 py-6 text-lg">
                View Our Work
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-3 rounded-lg">
                  <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M15.5 9L10.5 14L8.5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Fast Delivery</h3>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-3 rounded-lg">
                  <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M15.5 9L10.5 14L8.5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Quality Code</h3>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-3 rounded-lg">
                  <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M15.5 9L10.5 14L8.5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Expert Support</h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M15.5 9L10.5 14L8.5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Affordable Pricing</h3>
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;