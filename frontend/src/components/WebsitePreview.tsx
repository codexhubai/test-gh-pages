import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, ExternalLink, Info, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import LoadingOverlay from "./LoadingOverlay";
import TaskCompletionDialog from "./TaskCompletionDialog";

interface WebsitePreviewProps {
  projectName: string;
  activeTasks?: Array<{
    id: string;
    status: 'pending' | 'in_progress' | 'completed' | 'failed';
  }>;
}

const WebsitePreview = ({ projectName, activeTasks = [] }: WebsitePreviewProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const completedTasksRef = useRef<Set<string>>(new Set());
  const [isInfoDialogOpen, setIsInfoDialogOpen] = useState(false);
  const [isCompletionDialogOpen, setIsCompletionDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isWebsiteReady, setIsWebsiteReady] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [cacheBuster, setCacheBuster] = useState(Date.now());

  const websiteUrl = `${import.meta.env.VITE_GITHUB_PAGES_URL}/${projectName}`;

  // Reset completed tasks when project changes
  useEffect(() => {
    completedTasksRef.current.clear();
  }, [projectName]);

  // Detect when a task completes and show completion dialog
  useEffect(() => {
    activeTasks.forEach(task => {
      if (task.status === 'completed' && !completedTasksRef.current.has(task.id)) {
        completedTasksRef.current.add(task.id);
        setIsCompletionDialogOpen(true);
      }
    });
  }, [activeTasks]);

  useEffect(() => {
    const checkWebsiteStatus = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(websiteUrl, { method: 'HEAD' });
        
        if (response.ok) {
          setIsWebsiteReady(true);
        } else {
          setIsWebsiteReady(false);
        }
      } catch (error) {
        console.error('Error checking website status:', error);
        setIsWebsiteReady(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkWebsiteStatus();
  }, [websiteUrl, cacheBuster]);

  const refreshWebsite = () => {
    // Prevent multiple simultaneous refresh operations
    if (isRefreshing) return;
    
    // Update cache buster to force fresh content
    const newCacheBuster = Date.now();
    setCacheBuster(newCacheBuster);
    
    // Set loading state to show overlay during refresh
    setIsRefreshing(true);
    setIsLoading(true);
    setIsWebsiteReady(false);
    
    // Refresh the iframe with new cache buster
    if (iframeRef.current) {
      iframeRef.current.src = `${websiteUrl}?cacheBuster=${newCacheBuster}`;
    }
    
    // Check website availability after a short delay to allow iframe to load
    setTimeout(() => {
      const checkWebsiteStatus = async () => {
        try {
          const response = await fetch(websiteUrl, { method: 'HEAD' });
          
          if (response.ok) {
            setIsWebsiteReady(true);
          } else {
            setIsWebsiteReady(false);
          }
        } catch (error) {
          console.error('Error checking website status:', error);
          setIsWebsiteReady(false);
        } finally {
          setIsLoading(false);
          setIsRefreshing(false);
        }
      };
      checkWebsiteStatus();
    }, 1000); // 1 second delay to allow iframe to start loading
  };

  const retryWebsiteCheck = () => {
    setIsLoading(true);
    setIsWebsiteReady(false);
    // Re-trigger the useEffect by updating the dependency
    const checkWebsiteStatus = async () => {
      try {
        const response = await fetch(websiteUrl, { method: 'HEAD' });
        
        if (response.ok) {
          setIsWebsiteReady(true);
        } else {
          setIsWebsiteReady(false);
        }
      } catch (error) {
        console.error('Error checking website status:', error);
        setIsWebsiteReady(false);
      } finally {
        setIsLoading(false);
      }
    };
    checkWebsiteStatus();
  };

  return (
    <div className="flex-1 flex flex-col min-w-0">
      {/* Preview Header */}
      <div className="p-4 border-b border-gray-200 bg-white">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">Website Preview</h2>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsInfoDialogOpen(true)}
              className="flex items-center gap-2 text-blue-600 border-blue-300 hover:bg-blue-50"
            >
              <Info className="w-4 h-4" />
              Info
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={refreshWebsite}
              disabled={isRefreshing}
              className="flex items-center gap-2"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              {isRefreshing ? 'Refreshing...' : 'Refresh'}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(websiteUrl, '_blank')}
              className="flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Open in New Tab
            </Button>
          </div>
        </div>
      </div>

      {/* Iframe Container with Loading Overlay */}
      <div className="flex-1 bg-white relative">
        {(!isWebsiteReady || isLoading) && (
          <LoadingOverlay 
            isLoading={isLoading} 
            onRetry={retryWebsiteCheck}
            isRefreshing={isRefreshing}
          />
        )}
        
        <iframe
          ref={iframeRef}
          src={`${websiteUrl}?cacheBuster=${cacheBuster}`}
          className="w-full h-full border-0"
          title={`${projectName} Preview`}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          style={{ opacity: isWebsiteReady ? 1 : 0 }}
          onLoad={() => {
            // When iframe loads, check if the website is actually accessible
            const checkIframeStatus = async () => {
              try {
                const response = await fetch(websiteUrl, { method: 'HEAD' });
                if (response.ok) {
                  setIsWebsiteReady(true);
                } else {
                  setIsWebsiteReady(false);
                }
              } catch (error) {
                console.error('Error checking iframe status:', error);
                setIsWebsiteReady(false);
              } finally {
                setIsLoading(false);
                setIsRefreshing(false);
              }
            };
            checkIframeStatus();
          }}
          onError={() => {
            // Handle iframe loading errors
            console.error('Iframe failed to load');
            setIsWebsiteReady(false);
            setIsLoading(false);
            setIsRefreshing(false);
          }}
        />
      </div>

      {/* Info Dialog */}
      <Dialog open={isInfoDialogOpen} onOpenChange={setIsInfoDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Info className="w-5 h-5 text-blue-600" />
              Deployment Status
            </DialogTitle>
            <DialogDescription className="text-left">
              <div className="space-y-4 mt-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Your website previews may not automatically refresh as we need to wait for deployment on GitHub Pages. 
                  Please be patient while your changes are being deployed.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  You can check the deployment status by visiting our GitHub repository to see the latest build progress.
                </p>
                <div className="pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(import.meta.env.VITE_GITHUB_REPO_URL, '_blank')}
                    className="flex items-center gap-2 text-blue-700 border-blue-300 hover:bg-blue-50"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Check Status on GitHub
                  </Button>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Task Completion Dialog */}
      <TaskCompletionDialog
        isOpen={isCompletionDialogOpen}
        onClose={() => setIsCompletionDialogOpen(false)}
        onRefresh={refreshWebsite}
        projectName={projectName}
      />
    </div>
  );
};

export default WebsitePreview;
