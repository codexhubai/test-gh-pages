import { useState } from "react";
import { motion } from "framer-motion";
import RootLayout from "@/components/layout/RootLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast.error("Please fill out all required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you soon.");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };
  
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
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-b-2 border-r-2 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Your Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="bg-input border-t-2 border-l-2 border-border"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Your Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-input border-t-2 border-l-2 border-border"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="How can we help you?"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="bg-input border-t-2 border-l-2 border-border"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Your message here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="min-h-[150px] bg-input border-t-2 border-l-2 border-border resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground pill-button"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h2>
                
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Address</h3>
                      <p className="text-muted-foreground">
                        123 Data Street, Suite 456<br />
                        San Francisco, CA 94107<br />
                        United States
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Email</h3>
                      <p className="text-muted-foreground">
                        info@datasheetconnect.com<br />
                        support@datasheetconnect.com
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Phone</h3>
                      <p className="text-muted-foreground">
                        +1 (555) 123-4567<br />
                        Mon-Fri, 9am-5pm PT
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6 text-foreground">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-medium flex items-center text-foreground">
                      <MessageSquare className="h-5 w-5 text-primary mr-2" />
                      How do I sell my data on DataSheet Connect?
                    </h3>
                    <p className="text-muted-foreground pl-7">
                      Simply create an account, navigate to the Upload Data page, and follow the instructions to publish your dataset.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-medium flex items-center text-foreground">
                      <MessageSquare className="h-5 w-5 text-primary mr-2" />
                      What formats are supported for dataset uploads?
                    </h3>
                    <p className="text-muted-foreground pl-7">
                      We currently support CSV, XLS, and XLSX file formats for dataset uploads.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-medium flex items-center text-foreground">
                      <MessageSquare className="h-5 w-5 text-primary mr-2" />
                      How do payments work?
                    </h3>
                    <p className="text-muted-foreground pl-7">
                      We use secure payment processing. Sellers receive payouts monthly, with DataSheet Connect retaining a small commission.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </RootLayout>
  );
};

export default Contact;