import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { FaGraduationCap, FaUsers, FaLaptop, FaStar } from 'react-icons/fa';

const Instructors = () => {
  const stats = [
    { label: 'Expert Instructors', value: '25+', icon: <FaUsers className="text-indigo-600 dark:text-indigo-400" size={20} /> },
    { label: 'Years Teaching', value: '12+', icon: <FaGraduationCap className="text-indigo-600 dark:text-indigo-400" size={20} /> },
    { label: 'Courses Available', value: '50+', icon: <FaLaptop className="text-indigo-600 dark:text-indigo-400" size={20} /> },
    { label: 'Student Success Rate', value: '95%', icon: <FaStar className="text-indigo-600 dark:text-indigo-400" size={20} /> }
  ];
  
  const highlights = [
    'Small class sizes with personalized attention from instructors',
    'Live coding sessions and interactive workshops for hands-on learning',
    'Industry-relevant curriculum updated with the latest technologies',
    'Career mentorship and job placement assistance',
    'Access to a supportive community of students and alumni',
    'Flexible learning options including part-time and full-time schedules'
  ];

  return (
    <section id="instructors" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-4">
              Meet Our Team
            </div>
            <h3 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              Learn From Industry Professionals
            </h3>
            
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              At CodeCraft Academy, our instructors bring years of real-world experience from top tech companies. 
              They're passionate about coding and even more passionate about teaching the next generation of developers.
            </p>
            
            <div className="mt-8 space-y-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
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
                src="https://storage.googleapis.com/fenado-ai-farm-public/generated/4c8e4969-5031-429f-85da-391037513d22.webp" 
                alt="CodeCraft Academy instructors" 
                className="rounded-lg shadow-xl w-full"
              />
              
              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-b-lg p-6">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        {stat.icon}
                        <p className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400 ml-2">{stat.value}</p>
                      </div>
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

export default Instructors;