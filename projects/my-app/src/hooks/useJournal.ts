import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { encryptData, decryptData, hashPassword } from '@/utils/encryption';

// Types
export interface JournalEntry {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
}

interface EncryptedJournalState {
  entries: string; // Encrypted string of entries
  passwordHash: string;
}

const LOCAL_STORAGE_KEY = 'secure_journal_data';

export const useJournal = () => {
  // State for authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [masterPassword, setMasterPassword] = useState<string>('');
  
  // State for journal entries
  const [entries, setEntries] = useState<JournalEntry[]>([]);

  // Check if this is first time use
  useEffect(() => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedData) {
      setIsFirstTime(false);
    }
  }, []);

  // Authentication function
  const authenticate = (password: string) => {
    try {
      if (isFirstTime) {
        // First time setup - create new encrypted journal
        const emptyJournal: JournalEntry[] = [];
        const encrypted = encryptData(emptyJournal, password);
        
        const newState: EncryptedJournalState = {
          entries: encrypted,
          passwordHash: hashPassword(password)
        };
        
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newState));
        
        setEntries(emptyJournal);
        setMasterPassword(password);
        setIsAuthenticated(true);
        setIsFirstTime(false);
      } else {
        // Existing journal - attempt to decrypt
        const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
        
        if (storedData) {
          const parsedData: EncryptedJournalState = JSON.parse(storedData);
          
          // First verify the password hash
          if (hashPassword(password) !== parsedData.passwordHash) {
            throw new Error('Incorrect password');
          }
          
          // Then decrypt the entries
          const decryptedEntries = decryptData(parsedData.entries, password);
          
          // Convert string dates back to Date objects
          const processedEntries = decryptedEntries.map((entry: any) => ({
            ...entry,
            createdAt: new Date(entry.createdAt)
          }));
          
          setEntries(processedEntries);
          setMasterPassword(password);
          setIsAuthenticated(true);
        }
      }
      return true;
    } catch (error) {
      console.error('Authentication error:', error);
      return false;
    }
  };

  // Save encrypted journal data to localStorage
  const saveJournal = (updatedEntries: JournalEntry[]) => {
    if (!masterPassword) return;
    
    try {
      const encrypted = encryptData(updatedEntries, masterPassword);
      
      const stateToSave: EncryptedJournalState = {
        entries: encrypted,
        passwordHash: hashPassword(masterPassword)
      };
      
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(stateToSave));
    } catch (error) {
      console.error('Error saving journal:', error);
    }
  };

  // Add a new entry
  const addEntry = (title: string, content: string) => {
    const newEntry: JournalEntry = {
      id: uuidv4(),
      title,
      content,
      createdAt: new Date()
    };
    
    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    saveJournal(updatedEntries);
  };

  // Update an existing entry
  const updateEntry = (id: string, title: string, content: string) => {
    const updatedEntries = entries.map(entry => 
      entry.id === id 
        ? { ...entry, title, content } 
        : entry
    );
    
    setEntries(updatedEntries);
    saveJournal(updatedEntries);
  };

  // Delete an entry
  const deleteEntry = (id: string) => {
    const updatedEntries = entries.filter(entry => entry.id !== id);
    setEntries(updatedEntries);
    saveJournal(updatedEntries);
  };

  // Log out
  const logout = () => {
    setIsAuthenticated(false);
    setMasterPassword('');
    setEntries([]);
  };

  return {
    entries,
    isAuthenticated,
    isFirstTime,
    authenticate,
    addEntry,
    updateEntry,
    deleteEntry,
    logout
  };
};

export default useJournal;