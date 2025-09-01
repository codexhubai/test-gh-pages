import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO at TechCorp",
    company: "TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=256",
    content: "Working with NexusTech has been transformative for our business. Their team understood our vision perfectly and delivered a solution that exceeded our expectations in both functionality and design."
  },
  {
    name: "Michael Chen",
    role: "Founder at HealthPlus",
    company: "HealthPlus",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=256",
    content: "The healthcare management system developed by NexusTech has streamlined our operations and improved patient care significantly. Their attention to detail and understanding of our industry needs was impressive."
  },
  {
    name: "Emma Rodriguez",
    role: "VP of Product at EcoTrack",
    company: "EcoTrack",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=256",
    content: "From concept to launch, NexusTech guided us through the entire process with expertise and professionalism. Their team's technical knowledge and creative solutions helped us create a product that our users love."
  },
  {
    name: "David Williams",
    role: "COO at RetailNow",
    company: "RetailNow",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=256",
    content: "The e-commerce platform developed by NexusTech has revolutionized our online presence. Sales have increased by 45% since launch, and the system has proven to be robust even during peak traffic periods."
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground">
            Don't just take our word for it. Hear from our satisfied clients about their experience working with our team.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-10 left-0 text-6xl md:text-8xl opacity-10 text-primary">
            <Quote />
          </div>
          
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-2xl p-8 md:p-10 relative z-10"
          >
            <div className="text-xl md:text-2xl leading-relaxed text-foreground/90 mb-8">
              {testimonials[current].content}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img 
                  src={testimonials[current].image} 
                  alt={testimonials[current].name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonials[current].name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonials[current].role}, {testimonials[current].company}</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={prev}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={next}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
          
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  index === current ? 'bg-primary' : 'bg-muted-foreground/30'
                } transition-colors duration-300`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;