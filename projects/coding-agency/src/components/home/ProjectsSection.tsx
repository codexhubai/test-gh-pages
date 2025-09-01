import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online shopping platform with payment processing, inventory management, and analytics.",
    image: "/project-image.webp",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#"
  },
  {
    title: "Health & Fitness App",
    description: "Mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.",
    image: "/project-image.webp",
    category: "mobile",
    technologies: ["React Native", "Firebase", "TensorFlow"],
    link: "#"
  },
  {
    title: "AI-Powered CRM",
    description: "Customer relationship management system with AI-driven insights and automated workflows.",
    image: "/project-image.webp",
    category: "ai",
    technologies: ["Python", "Django", "TensorFlow", "AWS"],
    link: "#"
  },
  {
    title: "Cloud Migration Solution",
    description: "Enterprise-level infrastructure migration from legacy systems to scalable cloud architecture.",
    image: "/project-image.webp",
    category: "cloud",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
    link: "#"
  }
];

const categories = [
  { id: "all", name: "All Projects" },
  { id: "web", name: "Web Development" },
  { id: "mobile", name: "Mobile Apps" },
  { id: "ai", name: "AI Solutions" },
  { id: "cloud", name: "Cloud Services" }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="mb-6 md:mb-0">
            <p className="text-primary font-medium mb-2">Our Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl">
              Explore our collection of innovative solutions that we've created for clients across various industries.
            </p>
          </div>
          <Button variant="outline" className="font-medium">
            View All Projects
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <Tabs defaultValue="all" className="mt-8">
          <TabsList className="mb-8 w-full justify-start overflow-auto">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-sm">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </motion.div>
          </TabsContent>
          
          {categories.slice(1).map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {projects
                  .filter(project => project.category === category.id)
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                  ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg hover:shadow-xl transition-all"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <Button
          variant="secondary"
          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          View Project
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech, i) => (
            <Badge key={i} variant="secondary" className="font-medium">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}