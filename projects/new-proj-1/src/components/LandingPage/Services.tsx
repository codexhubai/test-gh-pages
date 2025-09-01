import { motion } from "framer-motion";
import { Code, Smartphone, Cloud, PenTool, BarChart3, Shield } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const serviceItems = [
  {
    title: "Web Development",
    description: "Custom websites built with modern technologies and frameworks, optimized for performance and search engines.",
    icon: Code,
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences.",
    icon: Smartphone,
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud architecture and deployment services to ensure your applications run efficiently and reliably.",
    icon: Cloud,
  },
  {
    title: "UI/UX Design",
    description: "Intuitive and engaging user interfaces with a focus on user experience and conversion optimization.",
    icon: PenTool,
  },
  {
    title: "Data Analytics",
    description: "Turn your data into actionable insights with our custom analytics solutions and reporting tools.",
    icon: BarChart3,
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with our comprehensive security audits and implementation services.",
    icon: Shield,
  }
];

const Services = () => {
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
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-blue-600 dark:text-blue-400 font-medium"
          >
            Our Expertise
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4"
          >
            Comprehensive Software Solutions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            We offer a wide range of services to help your business grow with technology.
            Our team specializes in delivering high-quality solutions tailored to your needs.
          </motion.p>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {serviceItems.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-800">
                <CardHeader>
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 max-w-3xl"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Need a custom solution?</h3>
                <p className="text-gray-600 dark:text-gray-300">Let's discuss your project requirements and create the perfect solution for your business.</p>
              </div>
              <img 
                src="https://storage.googleapis.com/fenado-ai-farm-public/generated/5c492181-f68c-4364-9fbf-2d07f666fb00.webp"
                alt="Services icons" 
                className="w-48 h-32 object-contain rounded"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;