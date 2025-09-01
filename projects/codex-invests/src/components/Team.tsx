import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Twitter, Linkedin } from "lucide-react";

export const Team = () => {
  const teamMembers = [
    {
      name: "Alexandra Chen",
      role: "Managing Partner",
      bio: "Former CTO at TechVenture with 15+ years of experience in scaling technology companies and leading successful exits.",
      image: "bg-gray-300"
    },
    {
      name: "Marcus Johnson",
      role: "Investment Partner",
      bio: "Serial entrepreneur who founded and sold two fintech startups before joining Codex to help other founders scale their vision.",
      image: "bg-gray-300"
    },
    {
      name: "Sophia Rodriguez",
      role: "Technical Partner",
      bio: "AI and machine learning specialist who previously led research teams at leading technology companies.",
      image: "bg-gray-300"
    },
    {
      name: "David Park",
      role: "Operating Partner",
      bio: "Operations expert with experience scaling companies from startup to IPO across various technology sectors.",
      image: "bg-gray-300"
    }
  ];

  return (
    <div id="team" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We're a diverse team of investors, operators, and technologists with deep experience building and scaling technology companies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group">
                <div className={`aspect-square ${member.image} relative overflow-hidden`}>
                  {/* Placeholder for team member photos */}
                  <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-gray-400">
                    {member.name.charAt(0)}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex gap-4">
                      <a href="#" className="text-white hover:text-indigo-300 transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-white hover:text-indigo-300 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <CardContent className="pt-6 pb-8">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Backed by Industry Experts</h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our team is supported by a network of advisors with deep expertise across multiple industries, 
            providing valuable insights and connections to our portfolio companies.
          </p>
        </motion.div>
      </div>
    </div>
  );
};