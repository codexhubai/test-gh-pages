import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import RootLayout from "@/components/layout/RootLayout";

interface LoginProps {
  role?: "buyer" | "seller";
}

const Login = ({ role: propRole }: LoginProps = {}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const role = propRole || (searchParams.get("role") === "seller" ? "seller" : "buyer");
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }
    
    toast.success(`Logged in as ${role}`);
    
    setTimeout(() => {
      if (role === "seller") {
        navigate("/admin-dashboard");
      } else {
        navigate("/client-dashboard");
      }
    }, 1500);
  };
  
  const handleSkipLogin = () => {
    toast.success("Continuing as guest");
    
    setTimeout(() => {
      if (role === "seller") {
        navigate("/admin-dashboard");
      } else {
        navigate("/client-dashboard");
      }
    }, 1500);
  };
  
  return (
    <RootLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="min-h-[calc(100vh-64px)] flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-background to-card/50"
      >
        <Card className="w-full max-w-md border-b-2 border-r-2 border-primary/20">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              Welcome Back!
            </CardTitle>
            <CardDescription className="text-center">
              Log in to your DataSheet Connect account
              {role === "seller" ? " as a data seller" : " as a data buyer"}
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-input border-t-2 border-l-2 border-border"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <button 
                    type="button" 
                    className="text-sm text-primary hover:text-primary/80"
                    onClick={() => toast.info("Reset password functionality would be here")}
                  >
                    Forgot password?
                  </button>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-input border-t-2 border-l-2 border-border"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground pill-button"
              >
                Log In
              </Button>
            </form>
          </CardContent>
          
          <CardFooter className="flex flex-col">
            <Button 
              variant="outline" 
              className="w-full mb-4 border-primary/30"
              onClick={handleSkipLogin}
            >
              Skip Login (Demo Mode)
            </Button>
            
            <div className="text-center text-sm text-muted-foreground">
              {role === "seller" ? (
                <button
                  type="button"
                  onClick={() => navigate("/login")}
                  className="underline hover:text-foreground transition-colors"
                >
                  Continue as client instead
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => navigate("/admin")}
                  className="underline hover:text-foreground transition-colors"
                >
                  Continue as admin instead
                </button>
              )}
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </RootLayout>
  );
};

export default Login;