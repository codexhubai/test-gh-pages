import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Dance } from "@/lib/data/dances";

interface DanceCardProps {
  dance: Dance;
  index: number;
}

const DanceCard = ({ dance, index }: DanceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link to={`/dances/${dance.id}`}>
        <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow cursor-pointer">
          {dance.imageUrl && (
            <div className="h-48 overflow-hidden">
              <img 
                src={dance.imageUrl} 
                alt={dance.name} 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
          )}
          <CardHeader className="pb-2">
            <CardTitle className="flex justify-between items-start">
              <span>{dance.name}</span>
              <Badge variant="outline">{dance.origin}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground line-clamp-3">{dance.description}</p>
          </CardContent>
          <CardFooter>
            <div className="flex gap-1 flex-wrap">
              {dance.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
};

export default DanceCard;