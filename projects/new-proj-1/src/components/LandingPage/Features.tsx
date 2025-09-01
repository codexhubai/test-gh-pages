import { motion } from "framer-motion";
import { Zap, Clock, Users, Lock } from "lucide-react";

const featureItems = [
  {
    icon: Zap,
    title: "High-Performance Solutions",
    description: "We build software that's fast, reliable, and optimized for maximum efficiency and user satisfaction."
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Our agile approach ensures timely delivery without compromising on quality or attention to detail."
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description: "We create intuitive, accessible, and engaging user experiences that keep your customers coming back."
  },
  {
    icon: Lock,
    title: "Enterprise-Grade Security",
    description: "Your data and your users' privacy are protected with industry-leading security practices and protocols."
  }
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section className="py-20 bg-blue-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {featureItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg inline-block mb-4">
                <item.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;