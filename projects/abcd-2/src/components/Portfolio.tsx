import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const categories = [
  'All',
  'Web Development',
  'Mobile Apps',
  'Enterprise Solutions',
  'UI/UX Design'
];

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: 'https://placehold.co/600x400/e2e8f0/475569?text=E-commerce+Platform',
    description: 'A comprehensive e-commerce solution with advanced inventory management.'
  },
  {
    id: 2,
    title: 'Healthcare Mobile App',
    category: 'Mobile Apps',
    image: 'https://placehold.co/600x400/e2e8f0/475569?text=Healthcare+App',
    description: 'Patient management app with appointment scheduling and medical records.'
  },
  {
    id: 3,
    title: 'Banking Dashboard',
    category: 'Enterprise Solutions',
    image: 'https://placehold.co/600x400/e2e8f0/475569?text=Banking+Dashboard',
    description: 'Secure dashboard for financial institutions with real-time analytics.'
  },
  {
    id: 4,
    title: 'Social Media Redesign',
    category: 'UI/UX Design',
    image: 'https://placehold.co/600x400/e2e8f0/475569?text=Social+Media+Design',
    description: 'Complete UX overhaul of a popular social networking platform.'
  },
  {
    id: 5,
    title: 'Inventory System',
    category: 'Enterprise Solutions',
    image: 'https://placehold.co/600x400/e2e8f0/475569?text=Inventory+System',
    description: 'Robust inventory tracking system for manufacturing businesses.'
  },
  {
    id: 6,
    title: 'Fitness Tracker App',
    category: 'Mobile Apps',
    image: 'https://placehold.co/600x400/e2e8f0/475569?text=Fitness+App',
    description: 'Health monitoring app with custom workout plans and nutrition tracking.'
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="work" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">Our Portfolio</h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white"
          >
            Featured Projects
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto"
          >
            Explore our diverse portfolio of innovative digital solutions delivered to clients across industries.
          </motion.p>
        </div>
        
        {/* Portfolio Filter */}
        <div className="mb-12">
          <Tabs defaultValue="All" className="w-full" onValueChange={setActiveCategory}>
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        
        {/* Portfolio Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={item}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-xl font-bold text-white">{project.title}</h4>
                  <p className="text-sm text-gray-200 mb-4">{project.description}</p>
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-indigo-600/90 text-white rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-gray-800">
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;