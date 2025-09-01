import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { 
  Send,
  Key,
  FolderOpen,
  AlertCircle,
  CheckCircle,
  XCircle,
  Clock
} from "lucide-react";
import { agentService, RunAgentRequest, RunAgentResponse } from "@/services/agentService";
import { taskService, Task } from "@/services/taskService";
import { useApiKey } from "@/contexts/ApiKeyContext";
import ApiKeyDialog from "@/components/ApiKeyDialog";

interface WebsiteBuilderFormProps {
  onSubmit?: (data: {
    message: string;
    apiKey: string;
    projectName: string;
    taskId?: string;
  }) => void;
}

const WebsiteBuilderForm = ({ onSubmit }: WebsiteBuilderFormProps) => {
  const { apiKey, isApiKeySet } = useApiKey();
  const [message, setMessage] = useState("");
  const [projectName, setProjectName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [projectNameError, setProjectNameError] = useState("");
  const [activeTaskId, setActiveTaskId] = useState<string | null>(null);
  const [taskStatus, setTaskStatus] = useState<Task['status'] | null>(null);
  const [taskResult, setTaskResult] = useState<string | null>(null);
  const pollingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Task polling effect
  useEffect(() => {
    if (activeTaskId && apiKey) {
      const pollTask = async () => {
        try {
          const response = await taskService.getTaskById(activeTaskId, apiKey);
          
          if (response.success) {
            const task = response.task;
            setTaskStatus(task.status);
            
            if (taskService.isTaskComplete(task.status)) {
              // Task completed, stop polling
              if (pollingIntervalRef.current) {
                clearInterval(pollingIntervalRef.current);
                pollingIntervalRef.current = null;
              }
              
              let resultMessage = "";
              
              if (task.status === 'completed') {
                if (task.result?.message) {
                  resultMessage = task.result.message;
                } else if (task.result?.task?.summary) {
                  resultMessage = task.result.task.summary;
                } else {
                  resultMessage = "Your website has been created successfully!";
                }
              } else if (task.status === 'failed') {
                resultMessage = "Failed to create your website. Please try again.";
              }
              
              setTaskResult(resultMessage);
              setIsSubmitting(false);
            }
          } else {
            console.error('Failed to fetch task status:', (response as any).message);
          }
        } catch (error) {
          console.error('Error polling task:', error);
        }
      };
      
      // Poll immediately, then every 30 seconds
      pollTask();
      pollingIntervalRef.current = setInterval(pollTask, 30000);
    }
    
    return () => {
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current);
        pollingIntervalRef.current = null;
      }
    };
  }, [activeTaskId, apiKey]);

  // Validate project name to be URL-friendly (lowercase, hyphens only)
  const validateProjectName = (name: string): boolean => {
    const urlFriendlyPattern = /^[a-z0-9-]+$/;
    const isValid = urlFriendlyPattern.test(name) && name.length > 0;
    
    if (!isValid) {
      setProjectNameError("Project name must be lowercase, contain only letters, numbers, and hyphens");
    } else {
      setProjectNameError("");
    }
    
    return isValid;
  };

  const handleProjectNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setProjectName(value);
    if (value.trim()) {
      validateProjectName(value);
    } else {
      setProjectNameError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !projectName.trim() || activeTaskId) {
      return;
    }

    // Check if API key is set
    if (!isApiKeySet) {
      return;
    }

    // Validate project name before submission
    if (!validateProjectName(projectName.trim())) {
      return;
    }

    setIsSubmitting(true);
    setTaskResult(null);

    const repoUrl = `https://github.com/codexhubai/test-gh-pages.git`;

    try {
      // Prepare the request for the agent
      const agentRequest: RunAgentRequest = {
        repoUrl: repoUrl,
        prompt: `
        I want to work in ${projectName.trim()} folder.
        Here is my request:
        ${message.trim()}`,
        branchName: null,
        autoMerge: true,
        attachments: []
      };

      // Call the RunAgent method
      const response: RunAgentResponse = await agentService.runAgent(
        apiKey,
        agentRequest
      );

      console.log("Agent response:", response);

      if (response.success && response.task.metadata?.codexTaskId) {
        // Task started successfully, start polling
        setActiveTaskId(response.task.metadata?.codexTaskId);
        setTaskStatus('pending');
        
        // Call the original onSubmit callback if provided
        if (onSubmit) {
          await onSubmit({
            message: message.trim(),
            apiKey: apiKey,
            projectName: projectName.trim(),
            taskId: response.task.metadata?.codexTaskId,
          });
        }
      } else {
        // No task ID or failed response
        setTaskResult("Failed to start the task. Please try again.");
        setIsSubmitting(false);
      }
      
    } catch (error) {
      console.error("Error calling agent:", error);
      setTaskResult("An error occurred while processing your request. Please try again.");
      setIsSubmitting(false);
    }
  };

  const canSubmit = message.trim() && isApiKeySet && projectName.trim() && !projectNameError && !activeTaskId;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-4xl mx-auto"
    >
      <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <h1 className="text-4xl font-bold text-gray-800">
                Build something
              </h1>
              <div className="flex items-center gap-1">
                <span className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                  CodexHub
                </span>
                <div className="w-6 h-6 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">C</span>
                </div>
              </div>
            </div>
            <p className="text-xl text-gray-600">
              Create apps and websites by chatting with AI
            </p>
          </div>

          {/* Task Status */}
          {activeTaskId && taskStatus && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-blue-50 border border-blue-200 rounded-lg"
            >
              <div className="flex items-center gap-3">
                {taskStatus === 'pending' && <Clock className="w-5 h-5 text-blue-500 animate-pulse" />}
                {taskStatus === 'in_progress' && <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />}
                {taskStatus === 'completed' && <CheckCircle className="w-5 h-5 text-green-500" />}
                {taskStatus === 'failed' && <XCircle className="w-5 h-5 text-red-500" />}
                
                <div>
                  <p className="text-sm font-medium text-blue-700">
                    {taskStatus === 'pending' && 'Task queued...'}
                    {taskStatus === 'in_progress' && 'Creating your website...'}
                    {taskStatus === 'completed' && 'Website created successfully!'}
                    {taskStatus === 'failed' && 'Task failed'}
                  </p>
                  <p className="text-xs text-blue-600 mt-1">
                    Task ID: {activeTaskId.slice(0, 8)}...
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Task Result */}
          {taskResult && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 border rounded-lg ${
                taskStatus === 'completed' 
                  ? 'bg-green-50 border-green-200' 
                  : 'bg-red-50 border-red-200'
              }`}
            >
              <div className="flex items-center gap-3">
                {taskStatus === 'completed' ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500" />
                )}
                <p className={`text-sm font-medium ${
                  taskStatus === 'completed' ? 'text-green-700' : 'text-red-700'
                }`}>
                  {taskResult}
                </p>
              </div>
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* API Key Status and Project Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  <Key className="w-4 h-4 inline mr-2" />
                  CodexHub API Key
                </Label>
                <div className="h-12 flex items-center justify-between p-3 border-2 border-gray-200 rounded-md bg-gray-50">
                  <div className="flex items-center gap-2">
                    {isApiKeySet ? (
                      <>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-green-700 font-medium">API Key Set</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-4 h-4 text-amber-500" />
                        <span className="text-sm text-amber-700">API Key Required</span>
                      </>
                    )}
                  </div>
                  <ApiKeyDialog />
                </div>
                {!isApiKeySet && (
                  <p className="text-xs text-amber-600 mt-1">
                    Please set your API key to continue
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="projectName" className="text-sm font-medium text-gray-700">
                  <FolderOpen className="w-4 h-4 inline mr-2" />
                  Project Name
                </Label>
                <Input
                  id="projectName"
                  type="text"
                  placeholder="e.g., my-awesome-project"
                  value={projectName}
                  onChange={handleProjectNameChange}
                  disabled={!!activeTaskId}
                  className={`h-12 border-2 transition-colors ${
                    projectNameError 
                      ? "border-red-500 focus:border-red-500" 
                      : "border-gray-200 focus:border-purple-500"
                  } ${activeTaskId ? "opacity-50 cursor-not-allowed" : ""}`}
                  required
                />
                {projectNameError && (
                  <p className="text-sm text-red-500 mt-1">{projectNameError}</p>
                )}
              </div>
            </div>

            {/* Main Message Input */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                Describe your website or app
              </Label>
              <div className="relative">
                <Textarea
                  id="message"
                  placeholder={activeTaskId ? "Please wait for the current task to complete..." : "Ask CodexHub to create a web app..."}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={!!activeTaskId}
                  className={`min-h-[120px] resize-none border-2 border-gray-200 focus:border-purple-500 transition-colors pr-20 ${
                    activeTaskId ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  required
                />
                
                {/* Bottom toolbar */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={!canSubmit || isSubmitting}
                    className="h-10 w-10 p-0 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting || activeTaskId ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Card>
    </motion.div>
  );
};

export default WebsiteBuilderForm;
