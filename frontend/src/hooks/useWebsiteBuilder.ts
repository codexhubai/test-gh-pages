import { useState, useRef, useEffect } from 'react';
import { agentService, RunAgentRequest, RunAgentResponse } from '@/services/agentService';
import { useActiveTasks } from './useActiveTasks';
import { useTaskPolling } from './useTaskPolling';
import { ActiveTask } from '@/components/TaskCard';

interface UseWebsiteBuilderProps {
  apiKey: string | null;
  onSubmit?: (data: {
    message: string;
    apiKey: string;
    projectName: string;
    taskId?: string;
    taskStatus?: string;
  }) => void;
}

export const useWebsiteBuilder = ({ apiKey, onSubmit }: UseWebsiteBuilderProps) => {
  const [message, setMessage] = useState("");
  const [projectName, setProjectName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [projectNameError, setProjectNameError] = useState("");
  const [taskResult, setTaskResult] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Use the same hooks as ChatInterface for consistency
  const { activeTasks, addTask, updateTask, removeTask } = useActiveTasks(undefined);

  // Task polling hook
  const { stopPolling } = useTaskPolling({
    activeTasks,
    apiKey,
    onTaskUpdate: (taskId: string, status: string, result?: any) => {
      updateTask(taskId, status);
      
      if (status === 'completed' || status === 'failed') {
        let resultMessage = "";
        
        if (status === 'completed') {
          if (result?.task?.summary) {
            resultMessage = result.task.summary;
          } else if (result?.message) {
            resultMessage = result.message;
          } else {
            resultMessage = "Your website has been created successfully!";
          }
        } else if (status === 'failed') {
          resultMessage = "Failed to create your website. Please try again.";
        }
        
        setTaskResult(resultMessage);
        setIsSubmitting(false);
      }
    },
    onMessageUpdate: () => {
      // Not needed for this form
    },
    onIframeRefresh: () => {
      if (iframeRef.current) {
        iframeRef.current.src = iframeRef.current.src;
      }
    }
  });

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
    if (!message.trim() || !projectName.trim() || activeTasks.length > 0) {
      return;
    }

    // Check if API key is set
    if (!apiKey) {
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
        // Task started successfully, add to active tasks
        const taskId = response.task.metadata?.codexTaskId;
        const newTask: ActiveTask = {
          id: taskId,
          task: message.trim(),
          status: 'pending',
          createdAt: new Date(),
          updatedAt: new Date()
        };
        
        addTask(newTask);
        
        // Call the original onSubmit callback if provided
        if (onSubmit) {
          await onSubmit({
            message: message.trim(),
            apiKey: apiKey,
            projectName: projectName.trim(),
            taskId: taskId,
            taskStatus: 'pending',
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

  const canSubmit = message.trim() && apiKey && projectName.trim() && !projectNameError && activeTasks.length === 0;

  return {
    message,
    setMessage,
    projectName,
    handleProjectNameChange,
    isSubmitting,
    projectNameError,
    taskResult,
    activeTasks,
    canSubmit,
    handleSubmit,
    iframeRef
  };
};
