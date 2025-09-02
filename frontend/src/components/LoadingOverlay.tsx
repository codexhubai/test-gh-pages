import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LoadingOverlayProps {
  isLoading: boolean;
  onRetry?: () => void;
  isRefreshing?: boolean;
}

const LoadingOverlay = ({ isLoading, onRetry, isRefreshing }: LoadingOverlayProps) => {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center z-10">
      <div className="text-center space-y-6 p-8">
        {/* CodexHub Logo */}
        <div className="mb-8">
          <img 
            src="/website-builder-agent-example/app/logo.png" 
            alt="CodexHub Logo" 
            className="w-24 h-24 mx-auto object-contain"
          />
        </div>
        
        {/* Main Message */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {isRefreshing ? "Refreshing..." : isLoading ? "Please wait" : "CodexHub is loading"}
        </h1>
        
        <p className="text-xl text-gray-600 max-w-md mx-auto leading-relaxed">
          {isRefreshing 
            ? "Refreshing your website preview..." 
            : isLoading 
            ? "Checking website availability..." 
            : "Your website will appear here once deployment is complete"
          }
        </p>
        
        {/* Loader Animation */}
        <div className="mt-8">
          <div className="w-8 h-8 mx-auto border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        </div>
        
        {/* Retry Button for failed loads */}
        {!isLoading && onRetry && (
          <div className="mt-6">
            <Button
              onClick={onRetry}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Check Again
            </Button>
          </div>
        )}
        
        {/* Subtitle */}
        <p className="text-sm text-gray-500 mt-8">
          Built with CodexHub.ai website builder
        </p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
