import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { formatDistanceToNow } from "date-fns";

interface JournalEntryProps {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  onUpdate: (id: string, title: string, content: string) => void;
  onDelete: (id: string) => void;
}

const JournalEntry = ({
  id,
  title: initialTitle,
  content: initialContent,
  createdAt,
  onUpdate,
  onDelete
}: JournalEntryProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  const handleSave = () => {
    onUpdate(id, title, content);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTitle(initialTitle);
    setContent(initialContent);
    setIsEditing(false);
  };

  const timeAgo = formatDistanceToNow(createdAt, { addSuffix: true });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="overflow-hidden">
        <div className="p-4">
          {isEditing ? (
            <div className="space-y-4">
              <Textarea
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Entry title"
                className="text-lg font-semibold resize-none"
                rows={1}
              />
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="What's on your mind?"
                className="min-h-[120px] resize-none"
              />
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button onClick={handleSave}>Save</Button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold">{title}</h3>
                <span className="text-xs text-slate-500">{timeAgo}</span>
              </div>
              <p className="whitespace-pre-wrap">{content}</p>
              <div className="flex justify-end gap-2 mt-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setIsEditing(true)}
                >
                  Edit
                </Button>
                <Button 
                  variant="destructive" 
                  size="sm" 
                  onClick={() => onDelete(id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default JournalEntry;