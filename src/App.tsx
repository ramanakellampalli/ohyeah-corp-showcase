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
import SkipQVendorPrivacyPolicy from "./privacy-policies/SkipQVendor";
import SkipQCustomerPrivacyPolicy from "./privacy-policies/SkipQCustomer";

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
            <Route path="monsoon" element={<Navigate to="/privacy/monsoon/policy" replace />} />
            <Route path="monsoon/policy" element={<MonsoonPrivacyPolicy />} />
            <Route path="bill-buddy" element={<Navigate to="/privacy/bill-buddy/policy" replace />} />
            <Route path="bill-buddy/policy" element={<BillBuddyPrivacyPolicy />} />
            <Route path="bill-buddy/delete-account" element={<BillBuddyDeleteAccount />} />
            <Route path="skipq-vendor" element={<Navigate to="/privacy/skipq-vendor/policy" replace />} />
            <Route path="skipq-vendor/policy" element={<SkipQVendorPrivacyPolicy />} />
            <Route path="skipq" element={<Navigate to="/privacy/skipq/policy" replace />} />
            <Route path="skipq/policy" element={<SkipQCustomerPrivacyPolicy />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
