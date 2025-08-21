import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/constants";
import { QuoteIcon } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-card/50 to-background px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute w-96 h-96 bg-secondary/5 rounded-full blur-3xl top-0 -right-48"></div>
      <div className="absolute w-80 h-80 bg-primary/5 rounded-full blur-3xl -bottom-20 -left-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trusted by data professionals and businesses worldwide
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/80 backdrop-blur-sm border-b-2 border-r-2 border-primary/20 h-full card-hover">
                <CardContent className="pt-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-6 relative">
                      <QuoteIcon className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                      <p className="text-card-foreground italic pl-6 relative z-10">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    
                    <div className="mt-auto flex items-center">
                      <Avatar className="h-12 w-12 mr-4 border-2 border-secondary/30">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-foreground font-semibold">{testimonial.author}</p>
                        <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;