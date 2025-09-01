import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import CartPage from "./pages/CartPage";

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
    <TooltipProvider>
      <Toaster />
      <ThemeSwitcher />
      <BrowserRouter basename={getRouterBasename()}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;