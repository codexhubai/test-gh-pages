import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  price: number;
  unit: string;
  image: string;
  category: string;
  discount?: number;
  organic?: boolean;
}

const products: Product[] = [
  {
    id: "apple-1",
    name: "Red Apples",
    price: 120,
    unit: "kg",
    image: "https://storage.googleapis.com/fenado-ai-farm-public/generated/241c5501-2452-4ae0-ba17-c314ecd42489.webp",
    category: "fruits",
    discount: 10,
  },
  {
    id: "banana-1",
    name: "Fresh Bananas",
    price: 60,
    unit: "dozen",
    image: "https://storage.googleapis.com/fenado-ai-farm-public/generated/241c5501-2452-4ae0-ba17-c314ecd42489.webp",
    category: "fruits",
  },
  {
    id: "orange-1",
    name: "Juicy Oranges",
    price: 80,
    unit: "kg",
    image: "https://storage.googleapis.com/fenado-ai-farm-public/generated/241c5501-2452-4ae0-ba17-c314ecd42489.webp",
    category: "fruits",
    organic: true,
  },
  {
    id: "tomato-1",
    name: "Fresh Tomatoes",
    price: 40,
    unit: "kg",
    image: "https://storage.googleapis.com/fenado-ai-farm-public/generated/cf2e0b0e-4329-4982-b87c-6fab445cc05d.webp",
    category: "vegetables",
    discount: 5,
  },
  {
    id: "cucumber-1",
    name: "Green Cucumbers",
    price: 30,
    unit: "kg",
    image: "https://storage.googleapis.com/fenado-ai-farm-public/generated/cf2e0b0e-4329-4982-b87c-6fab445cc05d.webp",
    category: "vegetables",
    organic: true,
  },
  {
    id: "carrot-1",
    name: "Fresh Carrots",
    price: 50,
    unit: "kg",
    image: "https://storage.googleapis.com/fenado-ai-farm-public/generated/cf2e0b0e-4329-4982-b87c-6fab445cc05d.webp",
    category: "vegetables",
  },
  {
    id: "spinach-1",
    name: "Organic Spinach",
    price: 35,
    unit: "bunch",
    image: "https://storage.googleapis.com/fenado-ai-farm-public/generated/cf2e0b0e-4329-4982-b87c-6fab445cc05d.webp",
    category: "vegetables",
    organic: true,
  },
  {
    id: "mango-1",
    name: "Sweet Mangoes",
    price: 150,
    unit: "kg",
    image: "https://storage.googleapis.com/fenado-ai-farm-public/generated/241c5501-2452-4ae0-ba17-c314ecd42489.webp",
    category: "fruits",
    discount: 15,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const FeaturedProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter((product) => product.category === selectedCategory);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <p className="mt-4 text-xl text-gray-600">
            Handpicked fresh products for your daily needs
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-12">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger 
                value="all" 
                onClick={() => setSelectedCategory("all")}
              >
                All Products
              </TabsTrigger>
              <TabsTrigger 
                value="fruits" 
                onClick={() => setSelectedCategory("fruits")}
              >
                Fruits
              </TabsTrigger>
              <TabsTrigger 
                value="vegetables" 
                onClick={() => setSelectedCategory("vegetables")}
              >
                Vegetables
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={selectedCategory} className="mt-8">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredProducts.map((product) => (
                <motion.div key={product.id} variants={itemVariants}>
                  <ProductCard {...product} />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturedProducts;