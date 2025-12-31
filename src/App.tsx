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

// Corporate Gifting Imports - YOUR EXACT FILE NAMES
import Corporategiftingpage from "./pages/Corporategiftingpage";   // Main Landing Page
import Giftingcategorypage from "./pages/Giftingcategorypage";     // Category List Page
import Giftingproductpage from "./pages/Giftingproductpage";       // Product Details Page

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
            {/* IMPORTANT: Order matters! More specific routes first, then dynamic routes */}
            
            {/* 1. Main Landing Page - EXACT path, no params */}
            <Route path="/corporate-gifting" element={<Corporategiftingpage />} />
            
            {/* 2. Product Details Page - Most specific (has 2 params) */}
            <Route path="/corporate-gifting/:categorySlug/:productSlug" element={<Giftingproductpage />} />
            
            {/* 3. Category Page - Less specific (has 1 param) */}
            <Route path="/corporate-gifting/:categorySlug" element={<Giftingcategorypage />} />

            {/* --- Product Routes --- */}
            <Route path="/products/t-shirts" element={<TShirtsPage />} />
            
            {/* --- Blog Routes --- */}
            <Route path="/blog/:id" element={<BlogPost />} />
            
            {/* --- Mug Routes --- */}
            <Route path="/mugs" element={<Mugs />} />
            <Route path="/mugs/:id" element={<MugDetail />} />
            
            {/* --- 404 --- */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ToastProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;