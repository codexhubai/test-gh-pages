import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Context
import { ApiKeyProvider } from "@/contexts/ApiKeyContext";

// Pages
import Home from "./pages/Home";
import ChatInterface from "./pages/ChatInterface";
import ErrorPage from "./pages/ErrorPage";

const queryClient = new QueryClient();

function getRouterBasename(): string {
  // Prefer Vite base if it's a non-root absolute path
  const viteBase = (import.meta as any)?.env?.BASE_URL as string | undefined;
  if (viteBase && viteBase !== "/" && viteBase !== "./") {
    return viteBase;
  }

  const pathname = window.location.pathname;

  // Fallback: if path ends with a slash (likely the site root under a subfolder), use its directory
  if (pathname !== "/" && pathname.endsWith("/")) {
    const trimmed = pathname.replace(/\/+$/, "");
    return trimmed || "/";
  }

  return "/";
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ApiKeyProvider>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter basename={getRouterBasename()}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:projectName" element={<ChatInterface />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ApiKeyProvider>
  </QueryClientProvider>
);

export default App;