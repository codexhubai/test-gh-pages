import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years of Experience', value: '10+' },
    { label: 'Projects Completed', value: '250+' },
    { label: 'Client Satisfaction', value: '98%' },
    { label: 'Team Members', value: '35+' }
  ];
  
  const highlights = [
    'Experienced team of software engineers, designers, and project managers',
    'Agile development methodology for faster delivery and better adaptability',
    'Focus on scalable, future-proof solutions',
    'Dedicated support and maintenance services',
    'Commitment to code quality and performance',
    'Transparent communication throughout the project lifecycle'
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">About Us</h2>
            <h3 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              Innovative Software Solutions Since 2014
            </h3>
            
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Codex Solutions specializes in creating cutting-edge software that solves complex business challenges. 
              We combine technical expertise with creative thinking to deliver solutions that exceed expectations.
            </p>
            
            <div className="mt-8 space-y-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-600 dark:text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Stats & Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img 
                src="https://storage.googleapis.com/fenado-ai-farm-public/generated/b9733f64-ff7c-409f-851a-7baccc75893b.webp" 
                alt="Digital Transformation" 
                className="rounded-lg shadow-xl w-full"
              />
              
              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-b-lg p-6">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <p className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400">{stat.value}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;