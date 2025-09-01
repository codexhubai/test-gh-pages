import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This platform completely transformed our online presence. The ease of use and beautiful designs helped us launch in half the time we expected.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechNova",
      avatar: "SJ"
    },
    {
      quote: "I'm not a developer, but I was able to build a professional website for my business in just one weekend. The templates are stunning and customizable.",
      author: "Michael Chen",
      role: "Small Business Owner",
      company: "Artisan Crafts",
      avatar: "MC"
    },
    {
      quote: "The AI-powered features saved us countless hours of work. Our site not only looks great but performs exceptionally well too.",
      author: "Jessica Taylor",
      role: "Product Manager",
      company: "InnovateX",
      avatar: "JT"
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what people are saying about their experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-background border border-border/60 hover:border-primary/20 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="relative">
                      <svg 
                        className="absolute -top-6 -left-6 h-12 w-12 text-primary/20" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="currentColor"
                        viewBox="0 0 32 32"
                      >
                        <path d="M10 8c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm12-14c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
                      </svg>
                      <p className="text-lg text-foreground/80 italic relative z-10">"{testimonial.quote}"</p>
                    </div>
                    
                    <div className="flex items-center mt-6">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src="" alt={testimonial.author} />
                        <AvatarFallback className="bg-primary/20 text-primary">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </p>
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

export default Testimonials;