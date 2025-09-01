import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getAllDances, searchDances, type Dance } from "@/lib/data/dances";
import DanceCard from "@/components/dance/DanceCard";
import SearchFilter from "@/components/dance/SearchFilter";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Plus, Loader2 } from "lucide-react";

const DanceList = () => {
  const navigate = useNavigate();
  const [dances, setDances] = useState<Dance[]>([]);
  const [filteredDances, setFilteredDances] = useState<Dance[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch all dances (simulated loading delay)
    setTimeout(() => {
      const allDances = getAllDances();
      setDances(allDances);
      setFilteredDances(allDances);
      setLoading(false);
    }, 800);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (!query) {
      setFilteredDances(dances);
    } else {
      const results = searchDances(query);
      setFilteredDances(results);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Explore Dance Styles</h1>
            <p className="text-muted-foreground">
              Discover and learn about dance forms from around the world
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            <SearchFilter onSearch={handleSearch} />
            
            <Button onClick={() => navigate("/add-dance")} className="whitespace-nowrap">
              <Plus size={16} className="mr-2" />
              Add New Dance
            </Button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : filteredDances.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">No dances found</h3>
            {searchQuery ? (
              <p className="text-muted-foreground mb-6">
                No results found for "{searchQuery}". Try a different search term or add this dance to our collection.
              </p>
            ) : (
              <p className="text-muted-foreground mb-6">
                There are no dances in our collection yet. Be the first to contribute!
              </p>
            )}
            <Button onClick={() => navigate("/add-dance")}>
              <Plus size={16} className="mr-2" />
              Add a Dance
            </Button>
          </div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredDances.map((dance, index) => (
              <DanceCard key={dance.id} dance={dance} index={index} />
            ))}
          </motion.div>
        )}
      </div>
    </Layout>
  );
};

export default DanceList;