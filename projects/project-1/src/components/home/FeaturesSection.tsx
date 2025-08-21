import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Effortless Data Monetization",
    description: "Upload your CSV or XLS files securely and showcase them to a global audience.",
    image: "https://storage.googleapis.com/fenado-ai-farm-public/generated/26476219-21d6-4aa2-ad16-6f106d94ecce.webp"
  },
  {
    title: "Find Exactly What You Need",
    description: "Search and filter company lists by category, location, and more, finding precise datasets.",
    image: "https://storage.googleapis.com/fenado-ai-farm-public/generated/7f28f88b-7511-4d61-92dd-790d3dd9c223.webp"
  },
  {
    title: "Secure Transactions & Instant Access",
    description: "Preview data samples before purchase and get immediate access to full datasets via a secure payment gateway.",
    image: "https://storage.googleapis.com/fenado-ai-farm-public/generated/969ddad6-99b0-442f-9814-d69e7865ea4c.webp"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Powerful Features for Data Exchange
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to buy, sell, and discover valuable datasets
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card border-b-2 border-r-2 border-primary/20 overflow-hidden h-full card-hover">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;