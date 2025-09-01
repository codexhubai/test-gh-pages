import { motion } from 'framer-motion';
import { QuoteIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const testimonials = [
  {
    quote: "Codex Solutions transformed our business with a custom CRM system that perfectly addressed our unique needs. Their team was professional, responsive, and delivered ahead of schedule.",
    author: "Sarah Johnson",
    position: "COO, TechVision Inc.",
    avatar: "https://storage.googleapis.com/fenado-ai-farm-public/generated/cdaae367-ec83-43fb-a957-5983d999622f.webp"
  },
  {
    quote: "Working with Codex was a game-changer for our startup. Their mobile app development expertise helped us launch a product that users love and investors believe in.",
    author: "Michael Chen",
    position: "Founder, HealthTrack",
    avatar: "https://storage.googleapis.com/fenado-ai-farm-public/generated/081f0a76-e29e-45e2-a325-cdfa9424c60b.webp"
  },
  {
    quote: "Their cloud migration service was flawless. We saw immediate improvements in performance and significant cost savings. I highly recommend Codex Solutions for any enterprise software needs.",
    author: "Elena Rodriguez",
    position: "CTO, Global Logistics Ltd.",
    avatar: "https://storage.googleapis.com/fenado-ai-farm-public/generated/78ef01ef-0f14-4ada-aafa-d400bcd0f096.webp"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">Testimonials</h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white"
          >
            What Our Clients Say
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto"
          >
            Don't just take our word for it. Hear from the businesses we've helped transform.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg relative"
            >
              <div className="absolute top-6 left-6 text-indigo-200 dark:text-indigo-800">
                <QuoteIcon size={40} />
              </div>
              
              <div className="pt-8">
                <p className="text-lg text-gray-600 dark:text-gray-300 italic relative z-10">
                  "{testimonial.quote}"
                </p>
                
                <div className="mt-6 flex items-center">
                  <Avatar className="h-12 w-12 border-2 border-indigo-100 dark:border-indigo-900">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback className="bg-indigo-100 text-indigo-800">
                      {testimonial.author.split(' ').map(name => name[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900 dark:text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;