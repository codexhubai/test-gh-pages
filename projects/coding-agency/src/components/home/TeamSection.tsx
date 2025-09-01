import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "CEO & Lead Developer",
    description: "Over 12 years of experience in software development and team leadership.",
    avatar: "AJ",
    color: "bg-blue-100 dark:bg-blue-900"
  },
  {
    name: "Sarah Chen",
    role: "UX/UI Design Lead",
    description: "Expert in creating intuitive, user-centered experiences across platforms.",
    avatar: "SC",
    color: "bg-violet-100 dark:bg-violet-900"
  },
  {
    name: "Michael Rodriguez",
    role: "Backend Specialist",
    description: "Architect of scalable server solutions and database management.",
    avatar: "MR",
    color: "bg-emerald-100 dark:bg-emerald-900"
  },
  {
    name: "Taylor Williams",
    role: "Mobile Developer",
    description: "Creating high-performance native and cross-platform mobile applications.",
    avatar: "TW",
    color: "bg-amber-100 dark:bg-amber-900"
  },
  {
    name: "Jamie Lee",
    role: "AI & Machine Learning",
    description: "Researcher and implementer of cutting-edge AI solutions for businesses.",
    avatar: "JL",
    color: "bg-pink-100 dark:bg-pink-900"
  },
  {
    name: "Chris Morgan",
    role: "DevOps Engineer",
    description: "Building robust infrastructure and deployment pipelines for seamless operations.",
    avatar: "CM",
    color: "bg-cyan-100 dark:bg-cyan-900"
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-2">Our Team</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet The Experts</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Our diverse team of talented professionals brings a wealth of experience and passion to every project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarFallback className={`text-lg font-bold ${member.color}`}>
                    {member.avatar}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3 text-sm">{member.role}</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{member.description}</p>
                <div className="flex space-x-3 mt-auto">
                  <a 
                    href="#" 
                    className="text-slate-500 hover:text-primary transition-colors p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a 
                    href="#" 
                    className="text-slate-500 hover:text-primary transition-colors p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a 
                    href="#" 
                    className="text-slate-500 hover:text-primary transition-colors p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-blue-400 group-hover:w-full transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}