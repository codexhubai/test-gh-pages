import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowRight, Code, CheckCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950/80"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6 space-x-2">
              <Code className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Modern Software Development</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              <span className="block">We Build</span>
              <span className="block bg-gradient-to-r from-blue-500 to-violet-500 text-transparent bg-clip-text">
                Exceptional Digital Experiences
              </span>
            </h1>
            
            <p className="text-lg text-slate-300 mb-8 max-w-lg">
              Transform your ideas into reality with our expert team of developers, 
              designers, and strategists. We craft custom solutions that drive results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="font-medium">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="font-medium text-white border-white/20 hover:bg-white/10">
                View Our Work
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 text-sm text-slate-300">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Free Initial Consultation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Quick Turnaround</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Expert Support</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/hero-image.webp" 
                alt="Team of developers working on code" 
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-primary/10 backdrop-blur-sm border border-primary/20 p-4 rounded-lg max-w-xs hidden md:block">
              <div className="flex items-start gap-3">
                <div className="bg-primary/20 p-2 rounded">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Expert Development</p>
                  <p className="text-xs text-slate-300 mt-1">
                    Our team specializes in modern frameworks like React, Node.js, and more
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}