import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { ThemeProvider } from './components/ui/theme-provider';
import { Toaster } from './components/ui/sonner';

function getRouterBasename(): string {
  // This is important for GitHub Pages deployment
  const path = window.location.pathname;
  // Extract the first part of the path which would be the repository name in GitHub Pages
  const parts = path.split('/');
  if (parts.length > 1) {
    const possibleRepo = parts[1];
    // If we're in a GitHub Pages environment and there's a repo name, use it as basename
    if (possibleRepo && window.location.hostname.includes('github.io')) {
      return `/${possibleRepo}`;
    }
  }
  return '/';
}

function App() {
  useEffect(() => {
    document.title = "Fresh Grocer - Fresh Food Delivered";
  }, []);

  return (
    <ThemeProvider defaultTheme="light" storageKey="grocery-theme">
      <BrowserRouter basename={getRouterBasename()}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;