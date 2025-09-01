import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl blur-2xl opacity-20"></div>
            <div className="relative z-10">
              <img 
                src="https://storage.googleapis.com/fenado-ai-farm-public/generated/3c03061e-c19a-4501-a118-054f5989e747.webp" 
                alt="Team working together" 
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-8 -right-8 bg-background p-4 rounded-lg shadow-lg border border-border hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Customer Satisfaction</p>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      ))}
                      <span className="text-sm text-muted-foreground ml-1">4.9/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="space-y-6"
          >
            <span className="text-primary font-medium">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold">We Build Software That Matters</h2>
            <p className="text-muted-foreground text-lg">
              Founded in 2012, NexusTech is a premier software development agency dedicated to delivering exceptional digital solutions that drive business growth and innovation. We combine technical expertise with creative thinking to solve complex business challenges.
            </p>
            
            <div className="space-y-4 mt-6">
              {[
                "Agile development methodology with regular updates",
                "Expert team of developers, designers, and strategists",
                "Custom solutions tailored to your specific needs",
                "Long-term partnership and ongoing support"
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg">Learn More</Button>
              <Button size="lg" variant="outline">Our Process</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;