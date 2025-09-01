import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&q=80&w=1024",
    description: "A full-featured e-commerce solution with integrated payment processing and inventory management.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    title: "Healthcare Management System",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1024",
    description: "Electronic health records system with appointment scheduling and patient management features.",
    tech: ["Angular", "Express", "PostgreSQL", "Docker"]
  },
  {
    title: "Fitness Tracker App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&q=80&w=1024",
    description: "Cross-platform mobile application for tracking workouts, nutrition, and health metrics.",
    tech: ["React Native", "Firebase", "Redux", "GraphQL"]
  },
  {
    title: "Real Estate Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1024",
    description: "Property listing and management platform with virtual tour capabilities and agent portals.",
    tech: ["Vue.js", "Laravel", "MySQL", "AWS"]
  },
  {
    title: "Investment Dashboard",
    category: "Data Visualization",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1024",
    description: "Financial analytics platform with real-time data visualization and investment tracking.",
    tech: ["React", "D3.js", "Node.js", "MongoDB"]
  },
  {
    title: "Delivery Management System",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&q=80&w=1024",
    description: "Logistics platform with route optimization, delivery tracking, and fleet management.",
    tech: ["React", "Django", "PostgreSQL", "Google Maps API"]
  }
];

const categories = ["All", "Web Development", "Mobile App", "Web Application", "Data Visualization"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-medium">Our Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Featured Projects</h2>
          <p className="text-muted-foreground">
            Explore our diverse range of projects that showcase our expertise across different industries and technologies.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl overflow-hidden group"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.category}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="gap-2">
                  View Details <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">View All Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;