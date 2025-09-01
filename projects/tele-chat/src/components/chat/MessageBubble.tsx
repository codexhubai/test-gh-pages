import { Message } from '@/data/chats';
import { motion } from 'framer-motion';

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble = ({ message }: MessageBubbleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'} mb-3`}
    >
      <div
        className={`max-w-[75%] px-4 py-2 rounded-2xl ${
          message.isOwn
            ? 'bg-blue-500 text-white rounded-br-none'
            : 'bg-gray-100 dark:bg-gray-800 rounded-bl-none'
        }`}
      >
        <p className="text-sm">{message.text}</p>
        <div className={`flex text-xs mt-1 ${message.isOwn ? 'justify-end text-blue-100' : 'text-gray-500'}`}>
          <span>{message.time}</span>
          {message.isOwn && (
            <span className="ml-2">
              {message.status === 'sent' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block w-3 h-3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              )}
              {message.status === 'delivered' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block w-3 h-3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              )}
              {message.status === 'read' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block w-3 h-3">
                  <path d="M18 6L7 17L2 12"></path>
                  <path d="M22 10L13 19L11 17"></path>
                </svg>
              )}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};