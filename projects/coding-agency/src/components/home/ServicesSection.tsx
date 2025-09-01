import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  Cpu, 
  Lightbulb, 
  BarChart 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';

const serviceItems = [
  {
    icon: <Globe className="h-10 w-10 text-blue-500" />,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies and frameworks.',
    features: ['Responsive Design', 'React/Vue/Angular', 'API Integration', 'Performance Optimized']
  },
  {
    icon: <Smartphone className="h-10 w-10 text-violet-500" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android devices.',
    features: ['Cross-platform', 'React Native', 'Swift/Kotlin', 'Offline Functionality']
  },
  {
    icon: <Cloud className="h-10 w-10 text-cyan-500" />,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services for your business needs.',
    features: ['AWS/Azure/GCP', 'Serverless', 'Microservices', 'DevOps']
  },
  {
    icon: <Cpu className="h-10 w-10 text-emerald-500" />,
    title: 'AI Integration',
    description: 'Incorporate artificial intelligence and machine learning into your products.',
    features: ['ML Models', 'NLP', 'Computer Vision', 'Predictive Analytics']
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-amber-500" />,
    title: 'UX/UI Design',
    description: 'User-centered design that creates intuitive and engaging experiences.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
  },
  {
    icon: <BarChart className="h-10 w-10 text-pink-500" />,
    title: 'Digital Strategy',
    description: 'Strategic planning and consulting for your digital transformation.',
    features: ['Market Research', 'Competitive Analysis', 'Roadmapping', 'Technology Selection']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Software Solutions</h2>
          <p className="text-slate-600 dark:text-slate-400">
            We offer end-to-end services to help businesses innovate and grow in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            className="col-span-full mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="/services-image.webp" 
              alt="Our Services" 
              className="w-full max-h-[300px] object-cover rounded-lg"
            />
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {serviceItems.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all dark:bg-slate-800 dark:border-slate-700">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-400">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}