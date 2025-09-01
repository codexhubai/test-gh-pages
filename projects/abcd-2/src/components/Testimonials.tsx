import { motion } from 'framer-motion';
import { QuoteIcon, Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';

const testimonials = [
  {
    quote: "The Web Development Bootcamp at CodeCraft Academy was transformative. I went from knowing basic HTML to building full-stack applications in just 12 weeks. The instructors were incredible and the hands-on projects gave me real-world experience that helped me land my first developer job.",
    author: "Sarah Johnson",
    course: "Web Development Bootcamp",
    position: "Frontend Developer at TechVision Inc.",
    rating: 5,
    avatar: "https://storage.googleapis.com/fenado-ai-farm-public/generated/cdaae367-ec83-43fb-a957-5983d999622f.webp"
  },
  {
    quote: "As someone with no prior programming experience, I was amazed at how quickly I progressed through the JavaScript course. The curriculum was perfectly structured and the community support was invaluable. Within a month after completing the course, I secured my first tech role.",
    author: "Michael Chen",
    course: "Advanced JavaScript",
    position: "Junior Developer, HealthTrack",
    rating: 5,
    avatar: "https://storage.googleapis.com/fenado-ai-farm-public/generated/081f0a76-e29e-45e2-a325-cdfa9424c60b.webp"
  },
  {
    quote: "The React & Redux course completely changed my career trajectory. The instructors didn't just teach the technology—they showed us how to think like professional developers. Their mentorship and career guidance were just as valuable as the technical skills I gained.",
    author: "Elena Rodriguez",
    course: "React & Redux Masterclass",
    position: "Software Engineer, Global Tech",
    rating: 5,
    avatar: "https://storage.googleapis.com/fenado-ai-farm-public/generated/78ef01ef-0f14-4ada-aafa-d400bcd0f096.webp"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="px-3 py-1 text-sm text-indigo-600 dark:text-indigo-400 border-indigo-600 dark:border-indigo-400">
            Success Stories
          </Badge>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white"
          >
            What Our Students Say
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto"
          >
            Hear from graduates who have transformed their careers through our coding courses
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
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      size={16} 
                      className={`${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} mr-1`} 
                    />
                  ))}
                </div>
                
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
                    <p className="text-sm text-indigo-600 dark:text-indigo-400">{testimonial.course}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-300 font-medium"
          >
            Start Your Coding Journey
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;