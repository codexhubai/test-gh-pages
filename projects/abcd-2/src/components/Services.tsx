import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  LineChart, 
  Cloud, 
  Shield, 
  Database 
} from 'lucide-react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from './ui/card';

const services = [
  {
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to address your unique business challenges and objectives.',
    icon: <Code size={24} />,
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver seamless experiences across devices.',
    icon: <Smartphone size={24} />,
  },
  {
    title: 'Web Application Development',
    description: 'Responsive web applications with modern frameworks that engage users and drive conversions.',
    icon: <LineChart size={24} />,
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services to optimize your digital operations.',
    icon: <Cloud size={24} />,
  },
  {
    title: 'Cybersecurity Services',
    description: 'Comprehensive security solutions to protect your digital assets and customer data.',
    icon: <Shield size={24} />,
  },
  {
    title: 'Database Management',
    description: 'Efficient database design, optimization, and administration for improved performance.',
    icon: <Database size={24} />,
  }
];

const Services = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">Our Services</h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl"
          >
            Comprehensive Software Solutions
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto"
          >
            We offer end-to-end digital services to help your business thrive in today's competitive landscape.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border-2 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg w-fit mb-4 text-indigo-600 dark:text-indigo-400">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600 dark:text-gray-400">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;