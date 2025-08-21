import { motion } from "framer-motion";
import RootLayout from "@/components/layout/RootLayout";

const About = () => {
  return (
    <RootLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen bg-background"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              About <span className="text-gradient">DataSheet Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your marketplace for unlocking and monetizing valuable datasets
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-foreground/80 mb-6">
                At DataSheet Connect, we believe in the power of data to transform businesses and drive innovation. Our mission is to create a secure, transparent marketplace where data creators can monetize their valuable insights and where businesses can discover the exact datasets they need to thrive.
              </p>
              <p className="text-lg text-foreground/80">
                We're building a community where data is valued, protected, and exchanged with integrity. Whether you're looking to sell your proprietary data or find the perfect dataset for your next project, DataSheet Connect provides the platform and tools you need to succeed.
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Data visualization" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Security & Trust",
                  description: "We prioritize the security of your data and maintain the highest standards of trust in all transactions."
                },
                {
                  title: "Quality & Accuracy",
                  description: "We ensure all datasets on our platform meet rigorous quality standards and provide accurate, valuable information."
                },
                {
                  title: "Accessibility & Fairness",
                  description: "We believe in fair pricing and making valuable data accessible to businesses of all sizes."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg p-8 border-b-2 border-r-2 border-primary/20 text-center"
                >
                  <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-foreground/80">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Team</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-12">
              DataSheet Connect was founded by a team of data scientists and business professionals who recognized the need for a better way to connect data creators with data consumers.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "Alex Chen",
                  role: "CEO & Co-Founder",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                },
                {
                  name: "Sarah Johnson",
                  role: "CTO & Co-Founder",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80"
                },
                {
                  name: "Michael Rodriguez",
                  role: "Head of Data Science",
                  image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 border-4 border-primary/20">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </RootLayout>
  );
};

export default About;