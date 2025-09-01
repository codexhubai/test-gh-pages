import { motion } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Cloud, 
  Database, 
  Shield, 
  Zap, 
  Bot
} from "lucide-react";

const services = [
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Web Development",
    description: "Custom websites and web applications with cutting-edge technology stacks and responsive design."
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android with exceptional user experience."
  },
  {
    icon: <Palette className="h-10 w-10 text-primary" />,
    title: "UI/UX Design",
    description: "User-centered design solutions that create intuitive, engaging, and seamless digital experiences."
  },
  {
    icon: <Cloud className="h-10 w-10 text-primary" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure, migration services, and optimized cloud-native applications."
  },
  {
    icon: <Database className="h-10 w-10 text-primary" />,
    title: "Data Engineering",
    description: "Data pipelines, warehousing, analytics, and visualization solutions for informed decision-making."
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Cybersecurity",
    description: "Comprehensive security assessments, implementation, and monitoring to protect digital assets."
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "DevOps",
    description: "Streamlined CI/CD pipelines, infrastructure automation, and operational excellence."
  },
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: "AI & ML Solutions",
    description: "Intelligent automation, predictive analytics, and machine learning models for business innovation."
  }
];

const Services = () => {
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
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Comprehensive Software Solutions</h2>
          <p className="text-muted-foreground">
            We offer end-to-end digital services to help businesses thrive in the modern digital landscape.
            From concept to deployment, our team delivers exceptional results across various domains.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="bg-card hover:bg-card/80 border border-border p-6 rounded-xl transition-all duration-300 hover:shadow-md group"
            >
              <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-muted rounded-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
              <div className="text-center">
                <h4 className="text-3xl font-bold text-primary">12+</h4>
                <p className="text-muted-foreground text-sm mt-1">Years Experience</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-primary">200+</h4>
                <p className="text-muted-foreground text-sm mt-1">Projects Delivered</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-primary">50+</h4>
                <p className="text-muted-foreground text-sm mt-1">Tech Experts</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-primary">30+</h4>
                <p className="text-muted-foreground text-sm mt-1">Countries Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;