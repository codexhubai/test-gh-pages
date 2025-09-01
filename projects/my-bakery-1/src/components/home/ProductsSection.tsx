import { motion } from "framer-motion";
import { productCategories } from "@/constants";
import { Separator } from "@/components/ui/separator";

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Products
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our range of freshly baked goods, all made with love and the finest ingredients
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Product Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{category.title}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                
                <Separator className="my-4" />
                
                <div className="space-y-2">
                  {category.featured.map((item) => (
                    <div key={item.name} className="flex justify-between items-center">
                      <span className="font-medium">{item.name}</span>
                      <span className="font-semibold text-primary">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to action */}
              <div className="px-6 pb-6">
                <button className="w-full mt-4 bg-primary/10 hover:bg-primary/20 text-primary font-medium py-2 px-4 rounded-lg transition-colors">
                  View All {category.title}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-medium transition-colors duration-200"
          >
            Place Special Order
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            Have a special request? Contact us for custom orders!
          </p>
        </motion.div>
      </div>
    </section>
  );
}