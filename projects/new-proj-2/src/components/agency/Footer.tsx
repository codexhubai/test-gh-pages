import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  ArrowRight,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-muted pt-16 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="https://storage.googleapis.com/fenado-ai-farm-public/generated/9f475a05-035e-406a-b4fa-7acc8f9a5e81.webp"
                alt="NexusTech Logo"
                className="h-10 w-10 mr-3"
              />
              <span className="text-xl font-bold text-primary">NexusTech</span>
            </div>
            <p className="text-muted-foreground">
              We build innovative software solutions that empower businesses to thrive in the digital world. Our team of experts is passionate about creating technology that matters.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="bg-muted-foreground/10 hover:bg-primary/20 p-2 rounded-full transition-colors duration-300">
                <Facebook className="h-5 w-5 text-foreground" />
              </a>
              <a href="#" className="bg-muted-foreground/10 hover:bg-primary/20 p-2 rounded-full transition-colors duration-300">
                <Twitter className="h-5 w-5 text-foreground" />
              </a>
              <a href="#" className="bg-muted-foreground/10 hover:bg-primary/20 p-2 rounded-full transition-colors duration-300">
                <Instagram className="h-5 w-5 text-foreground" />
              </a>
              <a href="#" className="bg-muted-foreground/10 hover:bg-primary/20 p-2 rounded-full transition-colors duration-300">
                <Linkedin className="h-5 w-5 text-foreground" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Portfolio", href: "#portfolio" },
                { name: "Our Team", href: "#team" },
                { name: "Contact", href: "#contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                "Web Development",
                "Mobile App Development",
                "UI/UX Design",
                "Cloud Solutions",
                "Data Engineering",
                "Cybersecurity"
              ].map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter to receive updates on our latest projects and industry insights.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Your email address" className="bg-background" />
              <Button size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Contact Info</h4>
              <p className="text-muted-foreground text-sm">
                123 Innovation Drive, Tech Park<br />
                San Francisco, CA 94107<br />
                +1 (555) 123-4567<br />
                info@nexustech.com
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} NexusTech. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;