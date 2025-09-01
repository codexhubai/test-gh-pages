import { motion } from 'framer-motion';
import { ClipboardCheck, Code, LineChart, MessageSquare, Rocket, Search } from 'lucide-react';

const processSteps = [
  {
    icon: <MessageSquare className="h-8 w-8 text-blue-500" />,
    title: "Discovery",
    description: "We start by understanding your business goals, challenges, and requirements.",
    color: "bg-blue-100 dark:bg-blue-950/40",
    borderColor: "border-blue-200 dark:border-blue-900",
    iconColor: "text-blue-500"
  },
  {
    icon: <Search className="h-8 w-8 text-purple-500" />,
    title: "Research & Planning",
    description: "In-depth analysis to develop a strategic roadmap tailored to your needs.",
    color: "bg-purple-100 dark:bg-purple-950/40",
    borderColor: "border-purple-200 dark:border-purple-900",
    iconColor: "text-purple-500"
  },
  {
    icon: <ClipboardCheck className="h-8 w-8 text-emerald-500" />,
    title: "Design & Prototyping",
    description: "Creating wireframes and interactive prototypes to visualize the solution.",
    color: "bg-emerald-100 dark:bg-emerald-950/40",
    borderColor: "border-emerald-200 dark:border-emerald-900",
    iconColor: "text-emerald-500"
  },
  {
    icon: <Code className="h-8 w-8 text-amber-500" />,
    title: "Development",
    description: "Implementing the solution with clean, efficient, and maintainable code.",
    color: "bg-amber-100 dark:bg-amber-950/40",
    borderColor: "border-amber-200 dark:border-amber-900",
    iconColor: "text-amber-500"
  },
  {
    icon: <LineChart className="h-8 w-8 text-rose-500" />,
    title: "Testing & QA",
    description: "Rigorous testing to ensure the highest quality and performance.",
    color: "bg-rose-100 dark:bg-rose-950/40",
    borderColor: "border-rose-200 dark:border-rose-900",
    iconColor: "text-rose-500"
  },
  {
    icon: <Rocket className="h-8 w-8 text-cyan-500" />,
    title: "Deployment & Support",
    description: "Seamless launch and ongoing support to ensure continued success.",
    color: "bg-cyan-100 dark:bg-cyan-950/40",
    borderColor: "border-cyan-200 dark:border-cyan-900",
    iconColor: "text-cyan-500"
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-slate-100 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-2">Our Process</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Deliver Results</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Our streamlined process ensures efficient development and high-quality results for every project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative ${step.color} border ${step.borderColor} rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="absolute top-0 left-8 -translate-y-1/2 bg-white dark:bg-slate-800 rounded-full h-12 w-12 flex items-center justify-center border-2 border-slate-200 dark:border-slate-700">
                <span className="text-xl font-bold text-slate-700 dark:text-slate-300">{index + 1}</span>
              </div>
              
              <div className="mt-6">
                <div className={`p-3 rounded-lg inline-block mb-4 ${step.color}`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{step.description}</p>
              </div>
              
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 h-4 w-8">
                  <svg viewBox="0 0 24 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-4">
                    <path 
                      d="M0 5H18L13 1M18 5L13 9" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      className={step.iconColor}
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}