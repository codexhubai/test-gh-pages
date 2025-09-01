import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, Plus } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://storage.googleapis.com/fenado-ai-farm-public/generated/8a75f6be-3240-4bb5-8933-536f4e1b9390.webp"
              alt="Dance styles from around the world"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Dance Wiki
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Your collaborative encyclopedia for dance forms from around the world
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => navigate("/dances")}
                  className="gap-2"
                >
                  <BookOpen size={18} />
                  Explore Dances
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => navigate("/add-dance")}
                  className="gap-2 bg-white/10"
                >
                  <Plus size={18} />
                  Add New Dance
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Discover the World of Dance</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Browse",
                  description: "Explore dance forms from every corner of the world, from traditional to contemporary styles.",
                  icon: "📚"
                },
                {
                  title: "Learn",
                  description: "Delve into the rich history and cultural context behind each dance form.",
                  icon: "🧠"
                },
                {
                  title: "Contribute",
                  description: "Share your knowledge by adding new dance forms or enhancing existing entries.",
                  icon: "✍️"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="bg-card border rounded-lg p-6 text-center hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Dive In?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Start your journey through the fascinating world of dance. Explore existing entries or contribute your knowledge to our growing community.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg" 
                  onClick={() => navigate("/dances")}
                >
                  Explore Dance Wiki
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;