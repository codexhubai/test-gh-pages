import { useState, useEffect, useRef } from 'react';
import { Message } from '@/components/Message';

export const useMessages = (projectName: string | undefined) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize welcome message and check for existing tasks
  useEffect(() => {
    if (projectName && messages.length === 0) {
      // Check for existing task in localStorage
      const existingTaskData = localStorage.getItem(`codexhub_task_${projectName}`);
      
      if (existingTaskData) {
        try {
          const taskData = JSON.parse(existingTaskData);
          
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

  const addMessage = (message: Message) => {
    setMessages(prev => [...prev, message]);
  };

  const updateMessage = (taskId: string, content: string) => {
    setMessages(prev => prev.map(msg => {
      if (msg.taskId === taskId) {
        return {
          ...msg,
          content: content
        };
      }
      return msg;
    }));
  };

  return {
    messages,
    messagesEndRef,
    addMessage,
    updateMessage
  };
};
