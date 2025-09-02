import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, RefreshCw, Github } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface TaskCompletionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onRefresh: () => void;
  projectName: string;
}

const TaskCompletionDialog = ({ 
  isOpen, 
  onClose, 
  onRefresh, 
  projectName 
}: TaskCompletionDialogProps) => {
  const [countdown, setCountdown] = useState(60); // 60 seconds countdown
  const [canRefresh, setCanRefresh] = useState(false);

  useEffect(() => {
    if (isOpen && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(prev => prev - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setCanRefresh(true);
    }
  }, [isOpen, countdown]);

  const handleRefresh = () => {
    onRefresh();
    onClose();
  };

  const openGitHubStatus = () => {
    const githubRepoUrl = import.meta.env.VITE_GITHUB_REPO_URL;
    if (githubRepoUrl) {
      window.open(githubRepoUrl, '_blank');
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-green-600 text-xl">
            🎉 Congratulations!
          </DialogTitle>
          <DialogDescription className="text-center text-gray-700 mt-2">
            Your task was completed successfully!
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 mt-4">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-3">
              Please wait a minute while it deploys on GitHub Pages
            </p>
            
            {!canRefresh ? (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    {formatTime(countdown)}
                  </div>
                  <p className="text-sm text-blue-700">
                    Deployment in progress...
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    Ready!
                  </div>
                  <p className="text-sm text-green-700">
                    You can now refresh to view changes
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-3">
            <Button
              onClick={handleRefresh}
              disabled={!canRefresh}
              className={`w-full ${
                canRefresh 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              {canRefresh ? 'Refresh Website' : 'Please wait...'}
            </Button>

            <Button
              variant="outline"
              onClick={openGitHubStatus}
              className="w-full border-blue-300 text-blue-700 hover:bg-blue-50"
            >
              <Github className="w-4 h-4 mr-2" />
              View Build Status on GitHub
            </Button>
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-500">
              After deployment, you can click the refresh button to see your changes
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TaskCompletionDialog;
