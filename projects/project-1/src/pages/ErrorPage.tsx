import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import RootLayout from '@/components/layout/RootLayout';

export default function ErrorPage() {
  return (
    <RootLayout hideFooter>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen bg-primary text-primary-foreground flex flex-col items-center justify-center p-8 relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute w-96 h-96 bg-secondary/10 rounded-full blur-3xl top-0 -right-48 animate-pulse-slow"></div>
        <div className="absolute w-80 h-80 bg-accent/10 rounded-full blur-3xl -bottom-20 -left-20"></div>
        
        <div className="relative z-10 backdrop-blur-sm bg-primary/20 p-10 rounded-2xl border border-primary-foreground/10 shadow-[0_0_15px_rgba(0,0,0,0.1)] max-w-md w-full text-center">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-accent to-accent-foreground bg-clip-text text-transparent py-1">
            404
          </h1>
          <div className="w-16 h-1 bg-secondary/50 mx-auto my-4"></div>
          <p className="text-primary-foreground/80 mb-6">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <div className="space-y-4">
            <Button asChild variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/30 w-full">
              <Link to="/">
                Return Home
              </Link>
            </Button>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
              <Link to="/client-dashboard">
                Go to Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </RootLayout>
  );
}