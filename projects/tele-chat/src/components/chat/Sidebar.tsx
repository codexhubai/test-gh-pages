import { useState } from 'react';
import { Chat } from '@/data/chats';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

interface SidebarProps {
  chats: Chat[];
  selectedChatId: string | null;
  onSelectChat: (chatId: string) => void;
}

export const Sidebar = ({ chats, selectedChatId, onSelectChat }: SidebarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredChats = chats.filter(chat => 
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full md:w-80 border-r border-gray-200 dark:border-gray-800 h-full flex flex-col">
      {/* Sidebar Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center">
        <img 
          src="https://storage.googleapis.com/fenado-ai-farm-public/generated/8909da28-76b2-490a-bb96-5433650d5d2d.webp" 
          alt="TeleChat" 
          className="w-8 h-8 mr-3"
        />
        <h1 className="text-xl font-semibold text-blue-600 dark:text-blue-400">TeleChat</h1>
      </div>
      
      {/* Search Bar */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-800">
        <Input
          type="text"
          placeholder="Search chats..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
      </div>
      
      {/* Chat List */}
      <div className="overflow-y-auto flex-1">
        {filteredChats.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            No chats found
          </div>
        ) : (
          filteredChats.map((chat) => (
            <motion.div
              key={chat.id}
              whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectChat(chat.id)}
              className={`p-3 cursor-pointer flex items-center ${
                selectedChatId === chat.id ? 'bg-gray-100 dark:bg-gray-800' : ''
              }`}
            >
              <div className="relative">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={chat.avatar} alt={chat.name} />
                  <AvatarFallback>{chat.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                {chat.online && (
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white dark:border-gray-900"></span>
                )}
              </div>
              
              <div className="ml-3 flex-1 overflow-hidden">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium truncate">{chat.name}</h3>
                  <span className="text-xs text-gray-500">{chat.time}</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <p className={`text-xs truncate ${
                    chat.typing ? 'text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-500'
                  }`}>
                    {chat.typing ? 'typing...' : chat.lastMessage}
                  </p>
                  {chat.unread > 0 && (
                    <Badge className="ml-2 bg-blue-600">{chat.unread}</Badge>
                  )}
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};