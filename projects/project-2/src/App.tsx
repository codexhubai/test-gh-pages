import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import ClientDashboard from "./pages/ClientDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import UploadData from "./pages/UploadData";
import Analytics from "./pages/Analytics";
import DatasetDetail from "./pages/DatasetDetail";
import AdminSettings from "./pages/AdminSettings";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ComponentDemo from "./pages/ComponentDemo";
import ErrorPage from "./pages/ErrorPage";

const queryClient = new QueryClient();

function getRouterBasename(): string {
  // Prefer Vite base if it's a non-root absolute path
  const viteBase = (import.meta as any)?.env?.BASE_URL as string | undefined;
  if (viteBase && viteBase !== "/" && viteBase !== "./") {
    return viteBase;
  }

  const pathname = window.location.pathname;

  // Known route patterns from this app (excluding the implicit catch-all)
  const routePaths = [
    "/login",
    "/client-dashboard",
    "/admin-dashboard",
    "/admin",
    "/upload-data",
    "/analytics",
    "/admin-settings",
    "/dataset/:id",
    "/about",
    "/contact",
    "/components",
    "/", // keep last for lowest priority
  ];

  // Try to find the longest matching route suffix and use the prefix as basename
  const sorted = [...routePaths].sort((a, b) => b.length - a.length);
  for (const route of sorted) {
    const routePattern = route
      .replace(/^\//, "")
      .replace(/:[^/]+/g, "[^/]+")
      .replace(/\//g, "\\/");
    const regex = new RegExp(`(?:^|\\/)${routePattern}\\/?$`);
    const match = pathname.match(regex);
    if (match) {
      const index = pathname.search(regex);
      const base = pathname.slice(0, index);
      return base || "/";
    }
  }

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
          <Route path="/login" element={<Login />} />
          <Route path="/client-dashboard" element={<ClientDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin" element={<Login role="seller" />} />
          <Route path="/upload-data" element={<UploadData />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/admin-settings" element={<AdminSettings />} />
          <Route path="/dataset/:id" element={<DatasetDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/components" element={<ComponentDemo />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;