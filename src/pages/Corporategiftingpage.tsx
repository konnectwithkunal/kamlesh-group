// src/pages/Corporategiftingpage.tsx
// Main Corporate Gifting Landing Page

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ChevronRight,
  Phone, 
  Mail, 
  Gift, 
  Truck,
  Shield,
  Star,
  Package,
  Sparkles
} from 'lucide-react';
import HeaderWhite from '@/components/HeaderWhite';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import from combined catalog
import { 
  productCategories,
  getFeaturedProducts,
  getPremiumProducts,
  getEconomicalProducts,
  getCatalogStats,
  UnifiedProduct
} from '../data/kamlesh-group-catalog';

// Hero Banner Data
const heroBanners = [
  {
    id: 1,
    title: "Premium Corporate Gifting Solutions",
    subtitle: "153+ Products | Premium & Economical Ranges | Custom Branding Available",
    cta: "Explore Catalog",
    link: "#categories",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1200&q=80",
    gradient: "from-gray-900/90 to-gray-800/70"
  }
];

// Get categories by collection
const premiumCats = productCategories.filter(c => c.collection === 'premium');
const economicalCats = productCategories.filter(c => c.collection === 'economical');

// Stats
const stats = getCatalogStats();

// Helper function to get color hex
const getColorHex = (color: string): string => {
  const colorMap: Record<string, string> = {
    'black': '#000000',
    'white': '#FFFFFF',
    'silver': '#C0C0C0',
    'gold': '#FFD700',
    'rose gold': '#B76E79',
    'red': '#EF4444',
    'blue': '#3B82F6',
    'green': '#22C55E',
    'pink': '#EC4899',
  };
  return colorMap[color.toLowerCase()] || '#888888';
};

// Product Card Component
const ProductCard: React.FC<{ product: UnifiedProduct }> = ({ product }) => {
  const [imageError, setImageError] = useState(false);
  const categorySlug = productCategories.find(c => c.name === product.category)?.slug || 'products';
  
  return (
    <Link to={`/corporate-gifting/${categorySlug}/${product.model.toLowerCase().replace(/\s+/g, '-')}`}>
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all group"
      >
        <div className="bg-[#F5F5F5] aspect-square relative">
          <span className="absolute top-2 left-2 px-2 py-1 bg-gray-900 text-white text-xs font-mono rounded z-10">
            {product.model}
          </span>
          {product.collection === 'premium' && (
            <span className="absolute top-2 right-2 px-2 py-1 bg-amber-500 text-white text-xs font-bold rounded z-10">
              PREMIUM
            </span>
          )}
          {product.price && (
            <span className="absolute bottom-2 right-2 px-2 py-1 bg-green-600 text-white text-xs font-bold rounded z-10">
              ₹{typeof product.price === 'number' ? product.price : product.price}
            </span>
          )}
          <img
            src={imageError ? 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80' : product.images.main}
            alt={product.name}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        </div>
        <div className="p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{product.subcategory}</p>
          <h3 className="font-semibold text-gray-900 group-hover:text-[#EE4343] transition-colors line-clamp-2 text-sm">
            {product.name}
          </h3>
          <div className="flex gap-1 mt-2">
            {product.variants.slice(0, 4).map((v, i) => (
              <span 
                key={i}
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: getColorHex(v.color) }}
                title={v.color}
              />
            ))}
            {product.variants.length > 4 && (
              <span className="text-xs text-gray-400">+{product.variants.length - 4}</span>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

// Category Card Component
const CategoryCard: React.FC<{ 
  category: typeof productCategories[0];
  index: number;
}> = ({ category, index }) => {
  const [imageError, setImageError] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link to={`/corporate-gifting/${category.slug}`}>
        <div className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
          <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
            <img
              src={imageError ? 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80' : category.image}
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              onError={() => setImageError(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Badge */}
            <span className={`absolute top-3 right-3 px-3 py-1 text-xs font-bold rounded-full ${
              category.collection === 'premium' 
                ? 'bg-amber-500 text-white' 
                : 'bg-green-500 text-white'
            }`}>
              {category.collection === 'premium' ? 'PREMIUM' : 'VALUE'}
            </span>

            {/* Count */}
            <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 text-gray-900 text-xs font-bold rounded-full">
              {category.count} Products
            </span>
          </div>
          
          <div className="p-5">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#EE4343] transition-colors mb-2">
              {category.name}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2 mb-3">
              {category.description}
            </p>
            <span className="inline-flex items-center text-sm font-medium text-[#EE4343] group-hover:gap-2 transition-all">
              View Products <ChevronRight className="w-4 h-4 ml-1" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Corporategiftingpage: React.FC = () => {
  const featuredProducts = getFeaturedProducts(8);

  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderWhite />
      
      {/* Hero Section */}
      <section className="relative pt-20">
        {heroBanners.map((banner) => (
          <div key={banner.id} className="relative h-[500px] md:h-[600px]">
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${banner.gradient}`} />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-2xl"
                >
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    {banner.title}
                  </h1>
                  <p className="text-xl text-gray-200 mb-8">
                    {banner.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={banner.link}
                      className="px-8 py-4 bg-[#EE4343] text-white font-semibold rounded-xl hover:bg-[#d63a3a] transition-colors"
                    >
                      {banner.cta}
                    </a>
                    <a
                      href="tel:+919876543210"
                      className="px-8 py-4 bg-white/20 backdrop-blur text-white font-semibold rounded-xl hover:bg-white/30 transition-colors flex items-center gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      Get Quote
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{stats.total}+</div>
              <div className="text-gray-400 text-sm">Total Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400">{stats.premium}</div>
              <div className="text-gray-400 text-sm">Premium Range</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">{stats.economical}</div>
              <div className="text-gray-400 text-sm">Economical Range</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">₹{stats.priceRange.min}-{stats.priceRange.max}</div>
              <div className="text-gray-400 text-sm">Price Range</div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Categories Section */}
      <section id="categories" className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span className="text-amber-600 font-semibold text-sm uppercase tracking-wide">Premium Collection</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Corporate Gifting Essentials</h2>
              <p className="text-gray-600 mt-2">Premium metal products with custom branding options</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {premiumCats.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Economical Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Package className="w-5 h-5 text-green-500" />
                <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Value Collection</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Budget-Friendly Options</h2>
              <p className="text-gray-600 mt-2">Quality products at economical prices for bulk gifting</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {economicalCats.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked selection from our premium and economical ranges
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/corporate-gifting/bottles"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
            >
              View All Products
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Kamlesh Group?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your trusted partner for corporate gifting solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Gift, title: "153+ Products", desc: "Wide range of premium & economical gifts" },
              { icon: Star, title: "Custom Branding", desc: "Logo printing on all products" },
              { icon: Truck, title: "Pan India Delivery", desc: "Free shipping on bulk orders" },
              { icon: Shield, title: "Quality Assured", desc: "Premium materials & finishes" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-[#EE4343]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-[#EE4343]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Help Choosing the Perfect Gift?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Our team will help you select the best products for your budget and requirements
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              WhatsApp Us
            </a>
            <a
              href="mailto:sales@kamleshgroup.com"
              className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Inquiry
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Corporategiftingpage;