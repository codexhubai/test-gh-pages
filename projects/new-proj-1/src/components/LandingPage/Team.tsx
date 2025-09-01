import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Lead Architect",
    bio: "10+ years of experience in software architecture and team leadership.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Michael Chen",
    role: "CTO & Backend Developer",
    bio: "Expert in scalable systems and cloud infrastructure with AWS certification.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Priya Patel",
    role: "Lead UX Designer",
    bio: "Creating intuitive and beautiful user experiences for over 7 years.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "James Wilson",
    role: "Frontend Developer",
    bio: "React specialist with a keen eye for detail and performance optimization.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  }
];

const Team = () => {
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
    <section id="team" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <div className="mb-6 md:mb-0">
              <span className="text-blue-600 dark:text-blue-400 font-medium">Our Experts</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">Meet The Team</h2>
            </div>
            
            <div>
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                src="https://storage.googleapis.com/fenado-ai-farm-public/generated/05796567-e252-4a1f-8f75-1ff93ed33aa5.webp"
                alt="Team collaboration" 
                className="rounded-lg shadow-md border border-gray-200 dark:border-gray-700 max-w-xs"
              />
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 mt-6 md:w-2/3"
          >
            Our talented team combines technical expertise with creative problem-solving to deliver exceptional results. 
            With diverse backgrounds and specializations, we approach each project with fresh perspectives and innovative solutions.
          </motion.p>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <div className="flex gap-4">
                      <a href="#" className="text-white hover:text-blue-300 transition">
                        <Linkedin size={20} />
                      </a>
                      <a href="#" className="text-white hover:text-blue-300 transition">
                        <Twitter size={20} />
                      </a>
                      <a href="#" className="text-white hover:text-blue-300 transition">
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;