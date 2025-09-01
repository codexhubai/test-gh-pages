import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { 
  Send,
  Bot,
  User,
  RefreshCw,
  ExternalLink,
  ArrowLeft,
  AlertCircle,
  Clock,
  CheckCircle,
  XCircle,
  Loader2
} from "lucide-react";
import { agentService, RunAgentRequest, RunAgentResponse } from "@/services/agentService";
import { taskService, Task, TaskResponse } from "@/services/taskService";
import { useApiKey } from "@/contexts/ApiKeyContext";
import ApiKeyDialog from "@/components/ApiKeyDialog";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  taskId?: string; // Track associated task ID
}

interface ActiveTask {
  id: string;
  task: string;
  status: Task['status'];
  createdAt: Date;
  updatedAt: Date;
  messageId?: string; // Associated message ID
}

// TaskCard component for inline display
const TaskCard = ({ task, onRemove }: { task: ActiveTask; onRemove: (taskId: string) => void }) => {
  const getStatusIcon = () => {
    switch (task.status) {
      case 'pending':
        return <Clock className="w-3 h-3 text-yellow-500" />;
      case 'in_progress':
        return <Loader2 className="w-3 h-3 text-blue-500 animate-spin" />;
      case 'completed':
        return <CheckCircle className="w-3 h-3 text-green-500" />;
      case 'failed':
        return <XCircle className="w-3 h-3 text-red-500" />;
      default:
        return <Clock className="w-3 h-3 text-gray-500" />;
    }
  };

  const getStatusColor = () => {
    switch (task.status) {
      case 'pending':
        return 'bg-yellow-50 border-yellow-200';
      case 'in_progress':
        return 'bg-blue-50 border-blue-200';
      case 'completed':
        return 'bg-green-50 border-green-200';
      case 'failed':
        return 'bg-red-50 border-red-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  const getStatusText = () => {
    switch (task.status) {
      case 'pending':
        return 'Queued';
      case 'in_progress':
        return 'In Progress';
      case 'completed':
        return 'Completed';
      case 'failed':
        return 'Failed';
      default:
        return 'Unknown';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="mb-1"
    >
      <div className={`p-1.5 border rounded-md ${getStatusColor()} w-full overflow-hidden`}>
        <div className="flex items-center gap-1">
          {getStatusIcon()}
          <Badge variant="outline" className="text-xs px-1.5 py-0.5 flex-shrink-0">
            {getStatusText()}
          </Badge>
          <span className="text-xs text-gray-600 truncate flex-1" title={task.task}>
            {task.task}
          </span>
          {(task.status === 'completed' || task.status === 'failed') && (
            <button
              onClick={() => onRemove(task.id)}
              className="h-3 w-3 p-0 opacity-50 hover:opacity-100 flex-shrink-0 text-xs leading-none"
            >
              ×
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ChatInterface = () => {
  const { projectName } = useParams<{ projectName: string }>();
  const navigate = useNavigate();
  const { apiKey, isApiKeySet } = useApiKey();
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTasks, setActiveTasks] = useState<ActiveTask[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const pollingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const pollingAttemptsRef = useRef<number>(0);
  const maxPollingAttempts = 20; // Maximum polling attempts before stopping

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Memoize tasks that need polling to prevent unnecessary re-renders
  const tasksToPoll = useMemo(() => {
    return activeTasks.filter(task => 
      task.status === 'pending' || task.status === 'in_progress'
    );
  }, [activeTasks]);

  // Memoize the polling function to prevent recreation on every render
  const pollTasks = useCallback(async () => {
    if (tasksToPoll.length === 0 || !apiKey) {
      // No active tasks to poll, clear interval
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current);
        pollingIntervalRef.current = null;
      }
      pollingAttemptsRef.current = 0;
      return;
    }

    // Increment polling attempts
    pollingAttemptsRef.current += 1;

    // Stop polling if we've exceeded max attempts
    if (pollingAttemptsRef.current > maxPollingAttempts) {
      console.warn('Max polling attempts reached, stopping polling');
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current);
        pollingIntervalRef.current = null;
      }
      return;
    }

    // Batch API calls for better performance
    const taskPromises = tasksToPoll.map(async (activeTask) => {
      try {
        const response = await taskService.getTaskById(activeTask.id, apiKey);
        return { activeTask, response };
      } catch (error) {
        console.error('Error polling task:', error);
        return { activeTask, response: null };
      }
    });

    const results = await Promise.all(taskPromises);
    
    // Process results
    for (const { activeTask, response } of results) {
      if (response?.success) {
        const task = response.task;
        
        // Update the task in our active tasks array
        setActiveTasks(prev => prev.map(t => 
          t.id === activeTask.id 
            ? { ...t, status: task.status, updatedAt: new Date() }
            : t
        ));
        
        if (taskService.isTaskComplete(task.status)) {
          // Update the bot message with the result
          setMessages(prev => prev.map(msg => {
            if (msg.taskId === activeTask.id) {
              let resultMessage = "";
              
              if (task.status === 'completed') {
                if (task.result?.message) {
                  resultMessage = task.result.message;
                } else if (task.result?.task?.summary) {
                  resultMessage = task.result.task.summary;
                } else {
                  resultMessage = "Task completed successfully! Your changes have been applied.";
                }
              } else if (task.status === 'failed') {
                resultMessage = "Task failed. Please try again or contact support if the issue persists.";
              }
              
              return {
                ...msg,
                content: resultMessage
              };
            }
            return msg;
          }));
          
          // Refresh the iframe to show updated website
          if (iframeRef.current) {
            iframeRef.current.src = iframeRef.current.src;
          }
        }
      } else if (response) {
        console.error('Failed to fetch task status:', (response as any).message);
      }
    }
  }, [tasksToPoll, apiKey, maxPollingAttempts]);

  // Optimized task polling effect with fixed 30-second interval
  useEffect(() => {
    if (tasksToPoll.length > 0 && apiKey) {
      // Reset polling attempts when starting new polling
      pollingAttemptsRef.current = 0;
      
      // Poll immediately, then every 30 seconds
      pollTasks();
      pollingIntervalRef.current = setInterval(pollTasks, 30000);
    }
    
    return () => {
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current);
        pollingIntervalRef.current = null;
      }
    };
  }, [tasksToPoll, apiKey, pollTasks]);

  // Initialize welcome message and check for existing tasks
  useEffect(() => {
    if (projectName && messages.length === 0) {
      // Check for existing task in localStorage
      const existingTaskData = localStorage.getItem(`codexhub_task_${projectName}`);
      
      if (existingTaskData) {
        try {
          const taskData = JSON.parse(existingTaskData);
          const activeTask: ActiveTask = {
            id: taskData.id,
            task: taskData.task,
            status: taskData.status,
            createdAt: new Date(taskData.createdAt),
            updatedAt: new Date(taskData.updatedAt)
          };
          
          // Add the existing task to active tasks
          setActiveTasks([activeTask]);
          
          // Add a message about the existing task
          setMessages([
            {
              id: '1',
              content: `Welcome to your ${projectName} project! I'm here to help you make changes to your website. What would you like to modify?`,
              sender: 'bot',
              timestamp: new Date()
            },
            {
              id: '2',
              content: "I've started processing your request. This may take several minutes, grab a coffee (10 mins Approx)...",
              sender: 'bot',
              timestamp: new Date(taskData.createdAt),
              taskId: taskData.id
            }
          ]);
          
          // Clean up the localStorage entry
          localStorage.removeItem(`codexhub_task_${projectName}`);
        } catch (error) {
          console.error('Error parsing existing task data:', error);
          // Fallback to normal welcome message
          setMessages([{
            id: '1',
            content: `Welcome to your ${projectName} project! I'm here to help you make changes to your website. What would you like to modify?`,
            sender: 'bot',
            timestamp: new Date()
          }]);
        }
      } else {
        // No existing task, show normal welcome message
        setMessages([{
          id: '1',
          content: `Welcome to your ${projectName} project! I'm here to help you make changes to your website. What would you like to modify?`,
          sender: 'bot',
          timestamp: new Date()
        }]);
      }
    }
  }, [projectName, messages.length]);

  // Redirect to home if no project name
  useEffect(() => {
    if (!projectName) {
      navigate('/');
    }
  }, [projectName, navigate]);

  // Cleanup effect to prevent memory leaks
  useEffect(() => {
    return () => {
      // Clear any pending timeouts/intervals when component unmounts
      if (pollingIntervalRef.current) {
        clearTimeout(pollingIntervalRef.current);
        pollingIntervalRef.current = null;
      }
    };
  }, []);

  const handleSendMessage = async () => {
    const hasActiveTasks = activeTasks.some(task => 
      task.status === 'pending' || task.status === 'in_progress'
    );
    if (!inputMessage.trim() || isLoading || hasActiveTasks) return;

    // Check if API key is set
    if (!isApiKeySet) {
      const errorMessage: Message = {
        id: Date.now().toString(),
        content: "Please set your API key first to use the chat feature. Click the 'Set API Key' button in the header.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const repoUrl = `https://github.com/codexhubai/test-gh-pages.git`;
      
      const agentRequest: RunAgentRequest = {
        repoUrl: repoUrl,
        prompt: `
        I want to work in ${projectName} folder.
        Here is my request:
        ${inputMessage.trim()}`,
        branchName: null,
        autoMerge: true,
        attachments: []
      };

      const response: RunAgentResponse = await agentService.runAgent(
        apiKey,
        agentRequest
      );

      if (response.success && response.task.metadata?.codexTaskId) {
        // Task started successfully, add to active tasks
        const taskId = response.task.metadata?.codexTaskId;
        const newTask: ActiveTask = {
          id: taskId,
          task: inputMessage.trim(),
          status: 'pending',
          createdAt: new Date(),
          updatedAt: new Date()
        };
        
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: "I've started processing your request. This may take several minutes, grab a coffee (10 mins Approx)...",
          sender: 'bot',
          timestamp: new Date(),
          taskId: taskId
        };

        // Add both the task and message
        setActiveTasks(prev => [...prev, newTask]);
        setMessages(prev => [...prev, botMessage]);
      } else {
        // No task ID or failed response
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: "I encountered an issue while processing your request. Please try again.",
          sender: 'bot',
          timestamp: new Date()
        };

        setMessages(prev => [...prev, botMessage]);
        setIsLoading(false);
      }

    } catch (error) {
      console.error("Error calling agent:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, I encountered an error while processing your request. Please try again.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const refreshWebsite = () => {
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src;
    }
  };

  const removeTask = (taskId: string) => {
    setActiveTasks(prev => prev.filter(task => task.id !== taskId));
  };

  if (!projectName) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex bg-gray-50">
      {/* Chat Interface - Left Side */}
      <div className="w-1/4 flex flex-col border-r border-gray-200">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/')}
                className="p-1"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">C</span>
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-800">CodexHub Chat</h1>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-gray-500">Project: {projectName}</p>
                  {!isApiKeySet && (
                    <div className="flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 text-amber-500" />
                      <span className="text-xs text-amber-600">API Key Required</span>
                    </div>
                  )}
                </div>
                {activeTasks.length > 0 && (
                  <div className="mt-1">
                    <Badge variant="outline" className="text-xs">
                      {activeTasks.filter(t => t.status === 'pending' || t.status === 'in_progress').length} active task{activeTasks.filter(t => t.status === 'pending' || t.status === 'in_progress').length !== 1 ? 's' : ''}
                    </Badge>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ApiKeyDialog />
            </div>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => {
              // Find associated task for this message
              const associatedTask = message.taskId ? activeTasks.find(task => task.id === message.taskId) : null;
              
              return (
                <div key={message.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.sender === 'bot' && (
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}
                    
                    <Card className={`max-w-[80%] p-3 ${
                      message.sender === 'user' 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                        : 'bg-white border-gray-200'
                    }`}>
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-purple-100' : 'text-gray-400'
                      }`}>
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </Card>

                    {message.sender === 'user' && (
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-gray-600" />
                      </div>
                    )}
                  </motion.div>
                  
                  {/* Show task card inline after bot message if there's an associated task */}
                  {message.sender === 'bot' && associatedTask && (
                    <div className="ml-11 mt-1 w-[calc(100%-2.75rem)]">
                      <TaskCard
                        task={associatedTask}
                        onRemove={removeTask}
                      />
                    </div>
                  )}
                </div>
              );
            })}
            
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-3 justify-start"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <Card className="bg-white border-gray-200 p-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <span className="text-sm text-gray-500 ml-2">Starting your request...</span>
                  </div>
                </Card>
              </motion.div>
            )}


            
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="p-4 border-t border-gray-200 bg-white">
          {activeTasks.some(task => task.status === 'pending' || task.status === 'in_progress') && (
            <div className="mb-3 p-2 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-700">
                A task is currently running. Please wait for it to complete before sending another message.
              </p>
            </div>
          )}
          <div className="flex gap-2">
            <Textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={activeTasks.some(task => task.status === 'pending' || task.status === 'in_progress') ? "Please wait for the current task to complete..." : "Describe the changes you want to make..."}
              className="flex-1 min-h-[80px] resize-none"
              disabled={isLoading || activeTasks.some(task => task.status === 'pending' || task.status === 'in_progress')}
              rows={3}
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isLoading || activeTasks.some(task => task.status === 'pending' || task.status === 'in_progress')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 self-end"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Website Preview - Right Side */}
      <div className="w-3/4 flex flex-col">
        {/* Preview Header */}
        <div className="p-4 border-b border-gray-200 bg-white">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">Website Preview</h2>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={refreshWebsite}
                className="flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(`/projects/${projectName}`, '_blank')}
                className="flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Open in New Tab
              </Button>
            </div>
          </div>
        </div>

        {/* Iframe */}
        <div className="flex-1 bg-white">
          <iframe
            ref={iframeRef}
            src={`${import.meta.env.VITE_GITHUB_PAGES_URL}/${projectName}`}
            className="w-full h-full border-0"
            title={`${projectName} Preview`}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
