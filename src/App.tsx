import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProductsPage from "./pages/Products";
import PrivacyLayout from "./pages/PrivacyLayout";
import PrivacyLanding from "./pages/PrivacyLanding";
import MonsoonPrivacyPolicy from "./privacy-policies/Monsoon";
import BillBuddyPrivacyPolicy from "./privacy-policies/BillBuddy";
import BillBuddyDeleteAccount from "./privacy-policies/BillBuddyDeleteAccount";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/privacy" element={<PrivacyLayout />}>
            <Route index element={<PrivacyLanding />} />
            <Route path="monsoon" element={<Navigate to="/privacy/monsoon/privacy" replace />} />
            <Route path="monsoon/privacy" element={<MonsoonPrivacyPolicy />} />
            <Route path="bill-buddy" element={<Navigate to="/privacy/bill-buddy/privacy" replace />} />
            <Route path="bill-buddy/privacy" element={<BillBuddyPrivacyPolicy />} />
            <Route path="bill-buddy/delete-account" element={<BillBuddyDeleteAccount />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
