import { useEffect } from 'react';
import Home from "./pages/Home";
import { ThemeProvider } from './components/ui/theme-provider';
import { Toaster } from './components/ui/sonner';

function App() {
  useEffect(() => {
    document.title = "Fresh Grocer - Fresh Food Delivered";
  }, []);

  return (
    <ThemeProvider defaultTheme="light" storageKey="grocery-theme">
      <Home />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;