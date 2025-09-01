import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/fenado-ai-farm-public/generated/4c48b5c5-bbd5-4cf8-95b0-68cebbfc23ab.webp" 
          alt="Hero Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                Innovative Software Solutions
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Transforming Ideas into <span className="text-primary">Powerful</span> Digital Solutions
            </h1>
            
            <p className="text-muted-foreground text-lg max-w-lg">
              We build cutting-edge software solutions that drive growth, optimize operations, and create exceptional user experiences for businesses worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="gap-2">
                Get Free Consultation <ChevronRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Our Work
              </Button>
            </div>
            
            <div className="pt-6">
              <p className="text-sm text-muted-foreground">Trusted by industry leaders</p>
              <div className="flex flex-wrap gap-6 items-center mt-3">
                {['Microsoft', 'Google', 'Amazon', 'IBM', 'Oracle'].map((company) => (
                  <span key={company} className="text-foreground/50 font-medium">
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-20"></div>
            <div className="bg-background/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-xl relative z-10">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Projects Completed', value: '200+' },
                  { title: 'Client Satisfaction', value: '98%' },
                  { title: 'Years Experience', value: '12+' },
                  { title: 'Team Experts', value: '50+' }
                ].map((stat, index) => (
                  <div key={index} className="bg-background/80 backdrop-blur-sm p-4 rounded-lg border border-border">
                    <h4 className="text-primary text-3xl font-bold">{stat.value}</h4>
                    <p className="text-muted-foreground text-sm">{stat.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;