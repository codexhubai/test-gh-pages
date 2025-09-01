import { useState } from 'react';
import { Sidebar } from '@/components/chat/Sidebar';
import { ChatWindow } from '@/components/chat/ChatWindow';
import { chats } from '@/data/chats';
import { motion } from 'framer-motion';

const Home = () => {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const selectedChat = selectedChatId ? chats.find(chat => chat.id === selectedChatId) || null : null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col bg-white dark:bg-gray-950"
    >
      <header className="bg-blue-600 dark:bg-blue-800 text-white p-3 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
        <h1 className="text-lg font-semibold">TeleChat</h1>
      </header>

      <main className="flex-1 flex flex-col md:flex-row h-[calc(100vh-56px)]">
        <Sidebar 
          chats={chats} 
          selectedChatId={selectedChatId} 
          onSelectChat={setSelectedChatId} 
        />
        <ChatWindow selectedChat={selectedChat} />
      </main>
    </motion.div>
  );
};

export default Home;