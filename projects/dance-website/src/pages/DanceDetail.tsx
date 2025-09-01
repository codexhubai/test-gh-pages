import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getDanceById } from "@/lib/data/dances";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft,
  Clock,
  MapPin,
  Loader2,
  Tag
} from "lucide-react";

const DanceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [dance, setDance] = useState<ReturnType<typeof getDanceById>>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      if (id) {
        const danceData = getDanceById(id);
        
        if (danceData) {
          setDance(danceData);
          setLoading(false);
        } else {
          setNotFound(true);
          setLoading(false);
        }
      }
    }, 800);
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </Layout>
    );
  }

  if (notFound || !dance) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Dance Not Found</h2>
          <p className="text-muted-foreground mb-8">
            We couldn't find the dance you're looking for. It may have been removed or doesn't exist.
          </p>
          <Button onClick={() => navigate("/dances")}>
            <ArrowLeft size={16} className="mr-2" />
            Back to All Dances
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Back button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate("/dances")} 
          className="mb-6"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to All Dances
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold mb-2">{dance.name}</h1>
              
              <div className="flex items-center gap-2 mb-6">
                <MapPin size={16} className="text-muted-foreground" />
                <span className="text-muted-foreground">{dance.origin}</span>
              </div>
              
              {dance.imageUrl && (
                <div className="mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={dance.imageUrl} 
                    alt={dance.name} 
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
              
              <div className="prose max-w-none dark:prose-invert">
                <h2 className="text-2xl font-semibold mb-2">Description</h2>
                <p className="mb-6">{dance.description}</p>
                
                <h2 className="text-2xl font-semibold mb-2">History</h2>
                <p className="mb-6">{dance.history}</p>
                
                {dance.videoUrl && (
                  <>
                    <h2 className="text-2xl font-semibold mb-2">Video Example</h2>
                    <div className="aspect-w-16 aspect-h-9 mb-6">
                      <iframe 
                        src={dance.videoUrl.replace("watch?v=", "embed/")} 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        className="w-full h-[400px] rounded-lg"
                      ></iframe>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border rounded-lg p-6 sticky top-24"
            >
              <h3 className="text-xl font-semibold mb-4">About this Dance</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-sm font-medium mb-2">
                    <MapPin size={14} />
                    <span>Origin</span>
                  </div>
                  <p>{dance.origin}</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 text-sm font-medium mb-2">
                    <Tag size={14} />
                    <span>Tags</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {dance.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="border-t pt-4 mt-4">
                  <Button onClick={() => navigate("/add-dance")} className="w-full">
                    Add Another Dance
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DanceDetail;