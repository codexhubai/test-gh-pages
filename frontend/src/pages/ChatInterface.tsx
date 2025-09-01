import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { agentService, RunAgentRequest, RunAgentResponse } from "@/services/agentService";
import { useApiKey } from "@/contexts/ApiKeyContext";
import ChatHeader from "@/components/ChatHeader";
import ChatInput from "@/components/ChatInput";
import MessageComponent from "@/components/Message";
import LoadingMessage from "@/components/LoadingMessage";
import WebsitePreview from "@/components/WebsitePreview";
import { useMessages } from "@/hooks/useMessages";
import { useActiveTasks } from "@/hooks/useActiveTasks";
import { useTaskPolling } from "@/hooks/useTaskPolling";
import { ActiveTask } from "@/components/TaskCard";
import { Message } from "@/components/Message";

const ChatInterface = () => {
  const { projectName } = useParams<{ projectName: string }>();
  const navigate = useNavigate();
  const { apiKey, isApiKeySet } = useApiKey();
  
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  // Custom hooks
  const { messages, messagesEndRef, addMessage, updateMessage } = useMessages(projectName);
  const { activeTasks, addTask, updateTask, removeTask } = useActiveTasks(projectName);

  // Task polling hook
  const { stopPolling } = useTaskPolling({
    activeTasks,
    apiKey,
    onTaskUpdate: updateTask,
    onMessageUpdate: updateMessage,
    onIframeRefresh: () => {
      if (iframeRef.current) {
        iframeRef.current.src = iframeRef.current.src;
      }
    }
  });



  // Redirect to home if no project name
  useEffect(() => {
    if (!projectName) {
      navigate('/');
    }
  }, [projectName, navigate]);

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
      addMessage(errorMessage);
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    addMessage(userMessage);
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
        addTask(newTask);
        addMessage(botMessage);
      } else {
        // No task ID or failed response
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: "I encountered an issue while processing your request. Please try again.",
          sender: 'bot',
          timestamp: new Date()
        };

        addMessage(botMessage);
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
      addMessage(errorMessage);
    } finally {
      setIsLoading(false);
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
      <div className="w-1/4 min-w-[320px] flex flex-col border-r border-gray-200">
        <ChatHeader 
          projectName={projectName} 
          isApiKeySet={isApiKeySet} 
          activeTasks={activeTasks} 
        />

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-6">
            {messages.map((message) => {
              // Find associated task for this message
              const associatedTask = message.taskId ? activeTasks.find(task => task.id === message.taskId) : null;
              
              return (
                <MessageComponent
                  key={message.id}
                  message={message}
                  associatedTask={associatedTask}
                  onRemoveTask={removeTask}
                />
              );
            })}
            
            {isLoading && <LoadingMessage />}
            
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        <ChatInput
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          onSendMessage={handleSendMessage}
          isLoading={isLoading}
          activeTasks={activeTasks}
        />
      </div>

      {/* Website Preview - Right Side */}
      <WebsitePreview projectName={projectName} />
    </div>
  );
};

export default ChatInterface;
