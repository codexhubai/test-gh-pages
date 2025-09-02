import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { LockIcon } from "lucide-react";

interface JournalAuthProps {
  onAuthenticate: (password: string) => void;
  isFirstTime: boolean;
}

const JournalAuth = ({ onAuthenticate, isFirstTime }: JournalAuthProps) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isFirstTime) {
      if (password.length < 6) {
        setError("Password must be at least 6 characters");
        return;
      }
      
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }
    }
    
    setError(null);
    onAuthenticate(password);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto p-8 bg-white dark:bg-slate-900 rounded-lg shadow-lg"
    >
      <div className="flex flex-col items-center mb-6">
        <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
          <LockIcon className="w-8 h-8 text-blue-600 dark:text-blue-300" />
        </div>
        <h2 className="text-2xl font-bold">
          {isFirstTime ? "Create Password" : "Enter Password"}
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 text-center mt-2">
          {isFirstTime 
            ? "Create a password to encrypt your journal" 
            : "Enter your password to decrypt your journal"}
        </p>
      </div>

      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full"
            autoFocus
          />
        </div>

        {isFirstTime && (
          <div>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="w-full"
            />
          </div>
        )}

        <Button type="submit" className="w-full">
          {isFirstTime ? "Set Password" : "Unlock Journal"}
        </Button>
      </form>
    </motion.div>
  );
};

export default JournalAuth;