// src/App.tsx

import { Toaster } from "@/components/ui/toaster";
import { ToastProvider } from "@/components/ui/toast";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NarsPage from "./pages/Nars";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import News from "./pages/News";
import People from "./pages/People";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./pages/Services";
import Mugs from "./pages/Mugs";
import MugDetail from "./pages/MugDetail";
import PrintoClone from "./pages/PrintoClone";
import TShirtsPage from "./pages/products/TShirtsPage";

// Corporate Gifting Imports
import CorporateGiftingPage from "./pages/Corporategiftingpage"; // Main Landing Page
import CategoryPage from "./pages/Giftingcategorypage";          // Specific Category List
import GiftingProductPage from "./pages/Giftingproductpage";     // Specific Product Details

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ToastProvider> 
        <Toaster />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/people" element={<People />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/nars" element={<NarsPage />} />
            <Route path="/ke" element={<PrintoClone />} />
            
            {/* --- Corporate Gifting Routes --- */}
            {/* 1. Main Landing Page */}
            <Route path="/corporate-gifting" element={<CorporateGiftingPage />} />
            
            {/* 2. Category Page (e.g., /corporate-gifting/welcome-kits) */}
            <Route path="/corporate-gifting/:categorySlug" element={<CategoryPage />} />
            
            {/* 3. Product Details Page (e.g., /corporate-gifting/welcome-kits/standard-joining-kit) */}
            <Route path="/corporate-gifting/:categorySlug/:productSlug" element={<GiftingProductPage />} />

            <Route path="/products/t-shirts" element={<TShirtsPage />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/mugs" element={<Mugs />} />
            <Route path="/mugs/:id" element={<MugDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ToastProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;