import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Send,
  Bot,
  User,
  RefreshCw,
  ExternalLink,
  ArrowLeft,
  AlertCircle
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

const ChatInterface = () => {
  const { projectName } = useParams<{ projectName: string }>();
  const navigate = useNavigate();
  const { apiKey, isApiKeySet } = useApiKey();
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTaskId, setActiveTaskId] = useState<string | null>(null);
  const [taskStatus, setTaskStatus] = useState<Task['status'] | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const pollingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
              
              // Update the bot message with the result
              setMessages(prev => prev.map(msg => {
                if (msg.taskId === activeTaskId) {
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
              
              // Clear active task
              setActiveTaskId(null);
              setTaskStatus(null);
              setIsLoading(false);
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

  // Initialize welcome message
  useEffect(() => {
    if (projectName && messages.length === 0) {
      setMessages([{
        id: '1',
        content: `Welcome to your ${projectName} project! I'm here to help you make changes to your website. What would you like to modify?`,
        sender: 'bot',
        timestamp: new Date()
      }]);
    }
  }, [projectName, messages.length]);

  // Redirect to home if no project name
  useEffect(() => {
    if (!projectName) {
      navigate('/');
    }
  }, [projectName, navigate]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading || activeTaskId) return;

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
        // Task started successfully, start polling
        setActiveTaskId(response.task.metadata?.codexTaskId);
        setTaskStatus('pending');
        
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: "I've started processing your request. This may take a few minutes...",
          sender: 'bot',
          timestamp: new Date(),
          taskId: response.task.metadata?.codexTaskId
        };

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
            {messages.map((message) => (
              <motion.div
                key={message.id}
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
            ))}
            
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

            {activeTaskId && taskStatus && (
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
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    <span className="text-sm text-gray-500">
                      Task {taskStatus === 'pending' ? 'queued' : taskStatus === 'in_progress' ? 'in progress' : taskStatus}...
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Task ID: {activeTaskId.slice(0, 8)}...
                  </p>
                </Card>
              </motion.div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="p-4 border-t border-gray-200 bg-white">
          {activeTaskId && (
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
              placeholder={activeTaskId ? "Please wait for the current task to complete..." : "Describe the changes you want to make..."}
              className="flex-1 min-h-[80px] resize-none"
              disabled={isLoading || !!activeTaskId}
              rows={3}
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isLoading || !!activeTaskId}
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
