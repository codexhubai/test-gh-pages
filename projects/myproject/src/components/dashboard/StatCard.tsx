import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description?: string;
  trend?: {
    value: number;
    positive: boolean;
  };
  className?: string;
}

const StatCard = ({
  title,
  value,
  icon,
  description,
  trend,
  className
}: StatCardProps) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
            <h4 className="text-2xl font-bold text-foreground">{value}</h4>
            
            {description && (
              <p className="text-xs text-muted-foreground mt-1">{description}</p>
            )}
            
            {trend && (
              <div className="flex items-center mt-2">
                <span
                  className={cn(
                    "text-xs font-medium",
                    trend.positive ? "text-green-500" : "text-red-500"
                  )}
                >
                  {trend.positive ? "+" : "-"}{Math.abs(trend.value)}%
                </span>
                <span className="text-xs text-muted-foreground ml-1">vs last month</span>
              </div>
            )}
          </div>
          
          <div className="p-2 rounded-md bg-primary/10">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;