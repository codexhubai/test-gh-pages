import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Key,
  Eye,
  EyeOff,
  Check,
  AlertCircle,
  Settings
} from "lucide-react";
import { useApiKey } from "@/contexts/ApiKeyContext";

interface ApiKeyDialogProps {
  trigger?: React.ReactNode;
  onApiKeySet?: () => void;
}

const ApiKeyDialog: React.FC<ApiKeyDialogProps> = ({ 
  trigger, 
  onApiKeySet 
}) => {
  const { apiKey, setApiKey, clearApiKey, isApiKeySet } = useApiKey();
  const [tempApiKey, setTempApiKey] = useState(apiKey);
  const [showApiKey, setShowApiKey] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");

  const handleSave = async () => {
    if (!tempApiKey.trim()) {
      setValidationMessage("API key cannot be empty");
      return;
    }

    setIsValidating(true);
    setValidationMessage("");

    try {
      // Basic validation - you can add more sophisticated validation here
      if (tempApiKey.trim().length < 10) {
        setValidationMessage("API key seems too short. Please check your key.");
        setIsValidating(false);
        return;
      }

      setApiKey(tempApiKey.trim());
      setValidationMessage("API key saved successfully!");
      
      // Call the callback if provided
      if (onApiKeySet) {
        onApiKeySet();
      }

      // Close dialog after a short delay
      setTimeout(() => {
        setIsOpen(false);
        setValidationMessage("");
      }, 1500);

    } catch (error) {
      setValidationMessage("Failed to save API key. Please try again.");
    } finally {
      setIsValidating(false);
    }
  };

  const handleClear = () => {
    clearApiKey();
    setTempApiKey("");
    setValidationMessage("API key cleared successfully!");
    setTimeout(() => {
      setValidationMessage("");
    }, 1500);
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open) {
      setTempApiKey(apiKey);
      setValidationMessage("");
    }
  };

  const defaultTrigger = (
    <Button
      variant="outline"
      size="sm"
      className="flex items-center gap-2"
    >
      <Settings className="w-4 h-4" />
      {isApiKeySet ? "Manage API Key" : "Set API Key"}
    </Button>
  );

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Key className="w-5 h-5" />
            API Key Management
          </DialogTitle>
          <DialogDescription>
            {isApiKeySet 
              ? "Update or remove your CodexHub API key"
              : "Add your CodexHub API key to start building"
            }
          </DialogDescription>
        </DialogHeader>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          {/* Current API Key Status */}
          {isApiKeySet && (
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-2 text-green-700">
                <Check className="w-4 h-4" />
                <span className="text-sm font-medium">API Key is set</span>
              </div>
              <p className="text-xs text-green-600 mt-1">
                Your API key is securely stored and ready to use
              </p>
            </div>
          )}

          {/* API Key Input */}
          <div className="space-y-2">
            <Label htmlFor="apiKey" className="text-sm font-medium">
              CodexHub API Key
            </Label>
            <div className="relative">
              <Input
                id="apiKey"
                type={showApiKey ? "text" : "password"}
                placeholder="Enter your CodexHub API key"
                value={tempApiKey}
                onChange={(e) => setTempApiKey(e.target.value)}
                className="pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowApiKey(!showApiKey)}
              >
                {showApiKey ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Validation Message */}
          {validationMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-3 rounded-lg border ${
                validationMessage.includes("success") || validationMessage.includes("saved")
                  ? "bg-green-50 border-green-200 text-green-700"
                  : "bg-red-50 border-red-200 text-red-700"
              }`}
            >
              <div className="flex items-center gap-2">
                {validationMessage.includes("success") || validationMessage.includes("saved") ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <AlertCircle className="w-4 h-4" />
                )}
                <span className="text-sm">{validationMessage}</span>
              </div>
            </motion.div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2 pt-2">
            <Button
              onClick={handleSave}
              disabled={!tempApiKey.trim() || isValidating}
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              {isValidating ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Key className="w-4 h-4 mr-2" />
                  {isApiKeySet ? "Update Key" : "Save Key"}
                </>
              )}
            </Button>
            
            {isApiKeySet && (
              <Button
                variant="outline"
                onClick={handleClear}
                className="px-4"
              >
                Clear
              </Button>
            )}
          </div>

          {/* Help Text */}
          <div className="text-xs text-gray-500 space-y-1">
            <p>• Your API key is stored locally in your browser</p>
            <p>• It's required for all CodexHub operations</p>
            <p>• You can update or remove it anytime</p>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default ApiKeyDialog;
