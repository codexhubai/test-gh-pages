import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Download } from "lucide-react";
import { motion } from "framer-motion";

interface DatasetCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  location: string;
  downloads?: number;
}

const DatasetCard = ({
  id,
  title,
  description,
  price,
  category,
  location,
  downloads
}: DatasetCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-card border-b-2 border-r-2 border-primary/20 overflow-hidden h-full card-hover">
        <CardContent className="pt-6">
          <div className="flex justify-between items-start mb-3">
            <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
              {category}
            </Badge>
            {downloads && (
              <div className="flex items-center text-muted-foreground text-sm">
                <Download className="h-3 w-3 mr-1" />
                <span>{downloads}</span>
              </div>
            )}
          </div>
          
          <h3 className="text-lg font-bold mb-2 text-foreground">
            {title}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {description}
          </p>
          
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground">{location}</span>
            <span className="text-lg font-bold text-foreground">${price.toFixed(2)}</span>
          </div>
        </CardContent>
        
        <CardFooter className="pt-0 pb-6">
          <Button 
            asChild
            variant="outline" 
            className="w-full border-primary/30 hover:bg-primary/5 text-foreground"
          >
            <Link to={`/dataset/${id}`} className="flex items-center justify-center">
              <Eye className="mr-2 h-4 w-4" />
              View Sample
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default DatasetCard;