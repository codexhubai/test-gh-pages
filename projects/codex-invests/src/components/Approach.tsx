import { motion } from "framer-motion";
import { 
  Rocket, 
  Users, 
  Target, 
  Lightbulb,
  TrendingUp,
  Shield
} from "lucide-react";

export const Approach = () => {
  const approaches = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Early Stage Focus",
      description: "We invest primarily in Seed and Series A rounds, supporting companies at the critical early stages of development."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Founder-First Philosophy",
      description: "We believe in backing exceptional founders with deep domain expertise and unwavering commitment to their vision."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation-Driven",
      description: "We seek out technologies with the potential to disrupt industries and create new market categories."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategic Guidance",
      description: "Beyond capital, we provide hands-on strategic guidance and connect founders with our extensive network."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Long-Term Vision",
      description: "We're committed to the long journey of building enduring companies that create lasting value."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Ethical Innovation",
      description: "We prioritize investments in technologies that advance humanity and address pressing global challenges."
    }
  ];

  return (
    <div id="approach" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Our Investment Approach
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            At Codex Invests, we follow a disciplined investment framework designed to identify and nurture transformative technology companies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {approaches.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-indigo-100 dark:bg-indigo-900/40 p-3 rounded-lg inline-block mb-4">
                <div className="text-indigo-600 dark:text-indigo-400">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-24 relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-800 opacity-90"></div>
          <div className="relative z-10 p-12 md:p-16 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to Scale Your Vision?</h3>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              If you're building a technology company with the potential to transform industries, we want to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium">
                Submit Your Pitch
              </button>
              <button className="bg-transparent border border-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium">
                Investment Criteria
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};