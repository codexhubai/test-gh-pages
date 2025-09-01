import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, AlertCircle } from 'lucide-react';

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary relative overflow-hidden flex items-center justify-center p-8">
      {/* Main error content */}
      <div className="relative z-10 bg-card/80 backdrop-blur-sm border border-border shadow-2xl rounded-3xl p-10 max-w-md w-full text-center">
        
        {/* Error icon */}
        <div className="mb-6 relative inline-block">
          <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/30 rounded-full opacity-20 blur-lg animate-pulse"></div>
          <div className="relative w-16 h-16 bg-gradient-to-br from-muted to-accent rounded-full flex items-center justify-center shadow-lg">
            <AlertCircle className="w-8 h-8 text-primary" />
          </div>
        </div>

        {/* Error code */}
        <h1 className="text-6xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
          404
        </h1>
        
        {/* Decorative line */}
        <div className="w-16 h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30 mx-auto my-6 rounded-full"></div>
        
        {/* Error message */}
        <h2 className="text-xl font-semibold text-foreground mb-3">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Sorry, the page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>
        
        {/* Action button */}
        <Button 
          asChild 
          className="bg-primary hover:bg-primary/90 text-primary-foreground border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 gap-2"
        >
          <Link to="/">
            <Home className="w-4 h-4" />
            Return Home
          </Link>
        </Button>

        {/* Additional help text */}
        <p className="text-xs text-muted-foreground/70 mt-6">
          If you believe this is an error, please contact support.
        </p>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-30"></div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-30"></div>
    </div>
  );
} 