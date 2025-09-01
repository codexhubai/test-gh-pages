import { useState, useRef, useEffect } from 'react';
import { Chat } from '@/data/chats';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageBubble } from './MessageBubble';
import { motion } from 'framer-motion';

interface ChatWindowProps {
  selectedChat: Chat | null;
}

export const ChatWindow = ({ selectedChat }: ChatWindowProps) => {
  const [messageText, setMessageText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of chat on load and when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedChat?.messages]);

  const handleSendMessage = () => {
    if (messageText.trim() === '') return;
    
    // In a real app, we would send the message to the server here
    // For now we'll just clear the input
    setMessageText('');
  };

  if (!selectedChat) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="text-center"
        >
          <img 
            src="https://storage.googleapis.com/fenado-ai-farm-public/generated/8909da28-76b2-490a-bb96-5433650d5d2d.webp" 
            alt="TeleChat Logo" 
            className="w-20 h-20 mx-auto mb-4 opacity-50"
          />
          <h2 className="text-xl font-medium text-gray-500">Select a chat to start messaging</h2>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col h-full">
      {/* Chat Header */}
      <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800 flex items-center">
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={selectedChat.avatar} alt={selectedChat.name} />
            <AvatarFallback>{selectedChat.name.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-sm font-medium">{selectedChat.name}</h2>
            <p className="text-xs text-gray-500">
              {selectedChat.typing ? 'typing...' : (selectedChat.online ? 'online' : 'last seen recently')}
            </p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto">
          {selectedChat.messages.map(message => (
            <MessageBubble key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full text-gray-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
              <line x1="9" y1="9" x2="9.01" y2="9"></line>
              <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full text-gray-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
          </Button>
          <Input 
            className="mx-3 rounded-full"
            placeholder="Write a message..."
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button
            variant={messageText.trim() ? "default" : "ghost"}
            size="icon"
            className="rounded-full"
            onClick={handleSendMessage}
            disabled={!messageText.trim()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};