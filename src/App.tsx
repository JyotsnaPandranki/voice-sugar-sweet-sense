
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RecordPage from "./pages/RecordPage";
import HistoryPage from "./pages/HistoryPage";
import LearnPage from "./pages/LearnPage";
import ProfilePage from "./pages/ProfilePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

const queryClient = new QueryClient();

// Layout component that includes the header on all pages
const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>{children}</main>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route 
            path="/record" 
            element={
              <Layout>
                <RecordPage />
              </Layout>
            } 
          />
          <Route 
            path="/history" 
            element={
              <Layout>
                <HistoryPage />
              </Layout>
            } 
          />
          <Route 
            path="/learn" 
            element={
              <Layout>
                <LearnPage />
              </Layout>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <Layout>
                <ProfilePage />
              </Layout>
            } 
          />
          <Route 
            path="/privacy-policy" 
            element={
              <Layout>
                <PrivacyPolicy />
              </Layout>
            } 
          />
          <Route 
            path="/terms-of-service" 
            element={
              <Layout>
                <TermsOfService />
              </Layout>
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
