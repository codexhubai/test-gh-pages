import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '@/constants';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from our valued customers
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Quote icon */}
          <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
            <Quote size={48} className="text-primary/20" />
          </div>

          {/* Testimonials carousel */}
          <div className="overflow-hidden relative rounded-xl bg-background p-8 md:p-10 shadow-md min-h-[300px]">
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ 
                    opacity: activeIndex === index ? 1 : 0,
                    x: activeIndex === index ? 0 : 50,
                    position: activeIndex === index ? 'relative' : 'absolute',
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <p className="text-xl md:text-2xl italic text-foreground mb-8">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex flex-col items-center">
                    <p className="font-semibold text-lg">{testimonial.author}</p>
                    <p className="text-muted-foreground">{testimonial.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-primary' : 'bg-primary/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}