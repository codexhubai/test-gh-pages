import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface JournalComposerProps {
  onAddEntry: (title: string, content: string) => void;
}

const JournalComposer = ({ onAddEntry }: JournalComposerProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [expanded, setExpanded] = useState(false);

  const handleSubmit = () => {
    if (title.trim() && content.trim()) {
      onAddEntry(title.trim(), content.trim());
      setTitle("");
      setContent("");
      setExpanded(false);
    }
  };

  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="mb-6"
    >
      <Card className="p-4 shadow-md">
        <div className="space-y-3">
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <Textarea
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Entry title"
                className="resize-none mb-2 text-lg font-medium"
                rows={1}
              />
            </motion.div>
          )}

          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onFocus={() => !expanded && setExpanded(true)}
            placeholder={expanded ? "What's on your mind?" : "Write a new journal entry..."}
            className={`resize-none transition-all ${expanded ? 'min-h-[120px]' : 'h-12'}`}
          />

          {expanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-end gap-2"
            >
              <Button 
                variant="outline" 
                onClick={() => {
                  setExpanded(false);
                  setTitle("");
                  setContent("");
                }}
              >
                Cancel
              </Button>
              <Button 
                onClick={handleSubmit}
                disabled={!title.trim() || !content.trim()}
              >
                Save Entry
              </Button>
            </motion.div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default JournalComposer;