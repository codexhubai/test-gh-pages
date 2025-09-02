import { motion } from "framer-motion";

const JournalHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between py-4 px-6 bg-slate-800 text-white rounded-t-lg"
    >
      <div className="flex items-center gap-3">
        <img 
          src="https://storage.googleapis.com/fenado-ai-farm-public/generated/81340584-ca5e-4213-a172-26286e33bf65.webp" 
          alt="Secure Journal" 
          className="w-8 h-8"
        />
        <h1 className="text-xl font-bold">Secure Journal</h1>
      </div>
      <div className="text-sm text-slate-300">
        <span>Encrypted in realtime</span>
      </div>
    </motion.div>
  );
};

export default JournalHeader;