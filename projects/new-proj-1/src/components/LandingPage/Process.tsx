import { motion } from "framer-motion";
import { 
  Lightbulb, 
  FileSearch, 
  Code as CodeIcon, 
  TestTube, 
  Rocket, 
  Headphones 
} from "lucide-react";

const processSteps = [
  {
    id: 1,
    title: "Discovery",
    description: "We begin by understanding your business needs, goals, and target audience to craft the perfect solution.",
    icon: Lightbulb,
  },
  {
    id: 2,
    title: "Planning & Design",
    description: "Our team creates detailed specifications, wireframes, and prototypes to visualize the solution before development.",
    icon: FileSearch,
  },
  {
    id: 3,
    title: "Development",
    description: "We build your solution using modern technologies and best practices with regular progress updates.",
    icon: CodeIcon,
  },
  {
    id: 4,
    title: "Testing & QA",
    description: "Rigorous testing ensures your product is bug-free, performs well, and provides an excellent user experience.",
    icon: TestTube,
  },
  {
    id: 5,
    title: "Deployment",
    description: "We launch your solution to the world with careful planning to ensure a smooth transition and minimal disruption.",
    icon: Rocket,
  },
  {
    id: 6,
    title: "Support & Maintenance",
    description: "Our relationship continues with ongoing support, updates, and enhancements to keep your solution running perfectly.",
    icon: Headphones,
  }
];

const Process = () => {
  return (
    <section id="process" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-blue-600 dark:text-blue-400 font-medium"
          >
            Our Approach
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4"
          >
            The Development Process
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            We follow a structured and transparent process to deliver exceptional results.
            Each step is designed to ensure quality, efficiency, and client satisfaction.
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-900 -translate-x-1/2"></div>
          
          <div className="space-y-12 relative">
            {processSteps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-white dark:border-gray-800"></div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                  <div className="flex items-center gap-3 mb-4 md:hidden">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                      <step.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">Step {step.id}</span>
                  </div>
                  
                  <div className={`hidden md:block text-blue-600 dark:text-blue-400 font-semibold mb-2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    Step {step.id}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
                
                <div className={`hidden md:flex md:w-1/2 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg w-16 h-16 flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;