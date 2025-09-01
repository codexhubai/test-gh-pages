import { motion } from "framer-motion";
import { Wheat, Clock, Hand, Sun } from "lucide-react";
import { processSteps } from "@/constants";

export default function ProcessSection() {
  // Map the icon strings to actual components
  const getIconComponent = (iconName: string, size: number = 24) => {
    switch (iconName) {
      case 'Wheat':
        return <Wheat size={size} />;
      case 'Clock':
        return <Clock size={size} />;
      case 'Hands':
        return <Hand size={size} />;
      case 'Sun':
        return <Sun size={size} />;
      default:
        return null;
    }
  };

  return (
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Baking Process
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We believe in combining traditional methods with the finest ingredients to create exceptional baked goods
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Numbered step indicator */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                {index + 1}
              </div>

              {/* Step card */}
              <div className="bg-muted rounded-xl p-6 h-full border border-border hover:border-primary/20 transition-colors group">
                {/* Icon */}
                <div className="mb-4 text-primary bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIconComponent(step.icon, 24)}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              {/* Connector (not shown on the last item or on mobile) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border">
                  <div className="absolute -right-1 -top-1 w-2 h-2 bg-primary/50 rounded-full" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            src="/bakery-hero.webp"
            alt="Our baking process"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg object-cover h-64"
          />
        </div>
      </div>
    </section>
  );
}