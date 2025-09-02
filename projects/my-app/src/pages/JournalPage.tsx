import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import JournalHeader from '@/components/journal/JournalHeader';
import JournalAuth from '@/components/journal/JournalAuth';
import JournalComposer from '@/components/journal/JournalComposer';
import JournalEntry from '@/components/journal/JournalEntry';
import useJournal from '@/hooks/useJournal';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { LogOutIcon, AlertCircleIcon } from 'lucide-react';

const JournalPage = () => {
  const { 
    entries, 
    isAuthenticated, 
    isFirstTime,
    authenticate, 
    addEntry, 
    updateEntry, 
    deleteEntry,
    logout
  } = useJournal();

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  // Handle authentication
  const handleAuthenticate = (password: string) => {
    setIsAuthenticating(true);
    
    try {
      const success = authenticate(password);
      
      if (success) {
        toast.success(isFirstTime 
          ? "Journal created successfully!" 
          : "Journal unlocked successfully!");
      } else {
        toast.error("Authentication failed. Please check your password.");
      }
    } catch (error) {
      toast.error("Authentication failed. Please check your password.");
    } finally {
      setIsAuthenticating(false);
    }
  };

  // Handle adding a new entry
  const handleAddEntry = (title: string, content: string) => {
    addEntry(title, content);
    toast.success("Journal entry added!");
  };

  // Handle updating an entry
  const handleUpdateEntry = (id: string, title: string, content: string) => {
    updateEntry(id, title, content);
    toast.success("Journal entry updated!");
  };

  // Handle deleting an entry
  const handleDeleteEntry = (id: string) => {
    deleteEntry(id);
    toast.success("Journal entry deleted!");
  };

  // Handle logout
  const handleLogout = () => {
    logout();
    toast.info("Logged out successfully");
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
      <div className="container max-w-3xl mx-auto px-4 py-8">
        <JournalHeader />
        
        <div className="mt-4 bg-white dark:bg-slate-900 rounded-b-lg shadow-lg">
          {/* Authentication Screen */}
          {!isAuthenticated ? (
            <div className="p-6">
              <JournalAuth 
                onAuthenticate={handleAuthenticate} 
                isFirstTime={isFirstTime} 
              />
            </div>
          ) : (
            <div className="p-6">
              {/* Journal Interface */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">My Journal</h2>
                
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <LogOutIcon className="w-4 h-4 mr-2" />
                      Logout
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Logging out will secure your journal. You'll need your password to access it again.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleLogout}>
                        Logout
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
              
              {/* New Entry Composer */}
              <JournalComposer onAddEntry={handleAddEntry} />
              
              {/* Journal Entries List */}
              {entries.length > 0 ? (
                <ScrollArea className="h-[60vh] pr-4">
                  <div className="space-y-4">
                    <AnimatePresence initial={false}>
                      {entries.map((entry) => (
                        <motion.div
                          key={entry.id}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <JournalEntry
                            id={entry.id}
                            title={entry.title}
                            content={entry.content}
                            createdAt={entry.createdAt}
                            onUpdate={handleUpdateEntry}
                            onDelete={handleDeleteEntry}
                          />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </ScrollArea>
              ) : (
                <div className="text-center py-12 text-slate-500 dark:text-slate-400">
                  <div className="inline-flex p-4 bg-slate-100 dark:bg-slate-800 rounded-full mb-4">
                    <AlertCircleIcon className="w-6 h-6" />
                  </div>
                  <p>No journal entries yet. Write your first one above!</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JournalPage;