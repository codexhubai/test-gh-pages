import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";

const team = [
  {
    name: "Alex Robinson",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256",
    bio: "With 15+ years of experience in software development and business leadership, Alex founded NexusTech to create impactful digital solutions.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "alex@nexustech.com"
    }
  },
  {
    name: "Sophia Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256",
    bio: "Sophia leads our technical strategy and innovation initiatives, bringing expertise in cloud architecture and AI-driven solutions.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sophia@nexustech.com"
    }
  },
  {
    name: "Marcus Johnson",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=256",
    bio: "Marcus oversees our UI/UX design team, ensuring all digital products deliver exceptional user experiences and visual appeal.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "marcus@nexustech.com"
    }
  },
  {
    name: "Aisha Patel",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=256",
    bio: "Aisha specializes in full-stack development and leads our most complex technical implementations with precision and creativity.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "aisha@nexustech.com"
    }
  }
];

const Team = () => {
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
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="team" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium">Our Team</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Meet Our Experts</h2>
          <p className="text-muted-foreground">
            Our team of talented professionals combines technical expertise with creative thinking to deliver exceptional results.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {team.map((member, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="group"
            >
              <div className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 group-hover:shadow-md">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex justify-center space-x-4">
                        <a href={member.social.linkedin} className="bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-colors duration-300">
                          <Linkedin className="h-5 w-5 text-white" />
                        </a>
                        <a href={member.social.twitter} className="bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-colors duration-300">
                          <Twitter className="h-5 w-5 text-white" />
                        </a>
                        <a href={`mailto:${member.social.email}`} className="bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-colors duration-300">
                          <Mail className="h-5 w-5 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center bg-muted/50 border border-border rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            We're always looking for talented individuals who are passionate about technology and innovation to join our growing team.
          </p>
          <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors duration-300">
            View Open Positions <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

const ChevronRight = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

export default Team;