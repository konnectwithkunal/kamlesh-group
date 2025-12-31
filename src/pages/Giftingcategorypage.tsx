// src/pages/Giftingcategorypage.tsx
// Category listing page - shows products for each category

import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  ChevronDown,
  ChevronUp,
  Star, 
  Truck, 
  Shield, 
  Phone,
  Grid3X3,
  List,
  Filter,
  X
} from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import from COMBINED catalog
import { 
  kamleshGroupProducts,
  productCategories,
  getCategoryBySlug,
  UnifiedProduct
} from '../data/kamlesh-group-catalog';

// Helper function to get color hex
const getColorHex = (color: string): string => {
  const colorMap: Record<string, string> = {
    'black': '#000000',
    'white': '#FFFFFF',
    'silver': '#C0C0C0',
    'gold': '#FFD700',
    'golden': '#FFD700',
    'rose gold': '#B76E79',
    'grey': '#808080',
    'gray': '#808080',
    'red': '#EF4444',
    'blue': '#3B82F6',
    'green': '#22C55E',
    'pink': '#EC4899',
    'purple': '#8B5CF6',
    'orange': '#F97316',
    'brown': '#92400E',
    'bronze': '#CD7F32',
    'cream': '#FFFDD0',
    'natural bamboo': '#D4A574',
    'wood': '#DEB887',
    'clear': '#E8E8E8',
  };
  return colorMap[color.toLowerCase()] || '#888888';
};

// Get products for a category page based on slug
const getProductsForCategory = (slug: string): UnifiedProduct[] => {
  const category = getCategoryBySlug(slug);
  if (!category) return [];
  
  // Handle special cases for overlapping category names
  if (slug === 'mobile-stands') {
    return kamleshGroupProducts.filter(p => p.collection === 'premium' && p.category === 'Mobile Stands');
  }
  if (slug === 'mobile-accessories-economical') {
    return kamleshGroupProducts.filter(p => p.collection === 'economical' && p.category === 'Mobile Accessories');
  }
  
  return kamleshGroupProducts.filter(p => p.category === category.name);
};

// Product Card Component
const ProductCard: React.FC<{ 
  product: UnifiedProduct; 
  viewMode: 'grid' | 'list';
  categorySlug: string;
}> = ({ product, viewMode, categorySlug }) => {
  const [imageError, setImageError] = useState(false);
  const productSlug = product.model.toLowerCase().replace(/\s+/g, '-');

  if (viewMode === 'list') {
    return (
      <Link to={`/corporate-gifting/${categorySlug}/${productSlug}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row group"
        >
          <div className="md:w-64 flex-shrink-0 relative">
            <span className="absolute top-3 left-3 z-10 px-2 py-1 bg-gray-900 text-white text-xs font-mono rounded">
              {product.model}
            </span>
            {product.collection === 'premium' && (
              <span className="absolute top-3 right-3 z-10 px-2 py-1 bg-amber-500 text-white text-xs font-bold rounded">
                PREMIUM
              </span>
            )}
            <div className="aspect-square md:h-full relative overflow-hidden bg-[#F5F5F5]">
              <img
                src={imageError ? 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80' : product.images.main}
                alt={product.name}
                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                onError={() => setImageError(true)}
              />
            </div>
          </div>
          <div className="flex-1 p-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                {product.subcategory}
              </span>
              {product.price && (
                <span className="text-xs font-bold text-green-600">
                  ₹{typeof product.price === 'number' ? product.price : product.price}
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#EE4343] transition-colors">
              {product.name}
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {product.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {product.features.slice(0, 3).map((feature, idx) => (
                <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  {feature.length > 30 ? feature.slice(0, 30) + '...' : feature}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Colors:</span>
              <div className="flex gap-1">
                {product.variants.map((variant, idx) => (
                  <span 
                    key={idx}
                    className="w-5 h-5 rounded-full border border-gray-300"
                    style={{ backgroundColor: getColorHex(variant.color) }}
                    title={variant.color}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    );
  }

  // Grid View
  return (
    <Link to={`/corporate-gifting/${categorySlug}/${productSlug}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group cursor-pointer bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
      >
        <div className="bg-[#F5F5F5] aspect-square relative">
          <span className="absolute top-3 left-3 z-10 px-2 py-1 bg-gray-900 text-white text-xs font-mono rounded">
            {product.model}
          </span>
          
          {product.collection === 'premium' ? (
            <span className="absolute top-3 right-3 z-10 px-2 py-1 bg-amber-500 text-white text-xs font-bold rounded">
              PREMIUM
            </span>
          ) : product.variants.length > 2 && (
            <span className="absolute top-3 right-3 z-10 px-2 py-1 bg-purple-600 text-white text-xs font-bold rounded">
              {product.variants.length} COLORS
            </span>
          )}

          {product.price && (
            <span className="absolute bottom-3 right-3 z-10 px-2 py-1 bg-green-600 text-white text-xs font-bold rounded">
              ₹{typeof product.price === 'number' ? product.price : product.price}
            </span>
          )}

          {product.customization?.logoPrinting && (
            <span className="absolute bottom-3 left-3 z-10 px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded">
              LOGO PRINTING
            </span>
          )}

          <img
            src={imageError ? 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80' : product.images.main}
            alt={product.name}
            className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
            onError={() => setImageError(true)}
          />
        </div>

        <div className="p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            {product.subcategory}
          </p>
          <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-[#EE4343] transition-colors line-clamp-2">
            {product.name}
          </h3>
          
          {product.specifications?.material && (
            <div className="text-xs text-gray-500 mb-3">
              <span>Material: {product.specifications.material}</span>
            </div>
          )}
          {product.specifications?.capacity && (
            <div className="text-xs text-gray-500 mb-3">
              <span>Capacity: {product.specifications.capacity}</span>
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              {product.variants.slice(0, 4).map((variant, idx) => (
                <span 
                  key={idx}
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: getColorHex(variant.color) }}
                  title={variant.color}
                />
              ))}
              {product.variants.length > 4 && (
                <span className="text-xs text-gray-400">+{product.variants.length - 4}</span>
              )}
            </div>
            <span className="text-xs text-[#EE4343] font-medium">View Details →</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

// Filter Sidebar Component
const FilterSidebar: React.FC<{
  subcategories: string[];
  selectedSubcategory: string | null;
  onSelectSubcategory: (sub: string | null) => void;
  priceRanges?: { min: number; max: number; label: string }[];
  selectedPriceRange: string | null;
  onSelectPriceRange: (range: string | null) => void;
}> = ({ 
  subcategories, 
  selectedSubcategory, 
  onSelectSubcategory,
  priceRanges,
  selectedPriceRange,
  onSelectPriceRange
}) => {
  const [showSubcategories, setShowSubcategories] = useState(true);
  const [showPriceRanges, setShowPriceRanges] = useState(true);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 sticky top-24">
      <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Filter className="w-4 h-4" />
        Filters
      </h3>

      <div className="mb-6">
        <button 
          onClick={() => setShowSubcategories(!showSubcategories)}
          className="w-full flex items-center justify-between text-sm font-semibold text-gray-700 mb-3"
        >
          Subcategory
          {showSubcategories ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {showSubcategories && (
          <div className="space-y-2 max-h-64 overflow-y-auto">
            <button
              onClick={() => onSelectSubcategory(null)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                selectedSubcategory === null 
                  ? 'bg-[#EE4343] text-white' 
                  : 'hover:bg-gray-100 text-gray-600'
              }`}
            >
              All Subcategories
            </button>
            {subcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => onSelectSubcategory(sub)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  selectedSubcategory === sub 
                    ? 'bg-[#EE4343] text-white' 
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}
      </div>

      {priceRanges && priceRanges.length > 0 && (
        <div className="mb-6">
          <button 
            onClick={() => setShowPriceRanges(!showPriceRanges)}
            className="w-full flex items-center justify-between text-sm font-semibold text-gray-700 mb-3"
          >
            Price Range
            {showPriceRanges ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {showPriceRanges && (
            <div className="space-y-2">
              <button
                onClick={() => onSelectPriceRange(null)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  selectedPriceRange === null 
                    ? 'bg-[#EE4343] text-white' 
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                All Prices
              </button>
              {priceRanges.map((range) => (
                <button
                  key={range.label}
                  onClick={() => onSelectPriceRange(range.label)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    selectedPriceRange === range.label 
                      ? 'bg-[#EE4343] text-white' 
                      : 'hover:bg-gray-100 text-gray-600'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {(selectedSubcategory || selectedPriceRange) && (
        <button
          onClick={() => {
            onSelectSubcategory(null);
            onSelectPriceRange(null);
          }}
          className="w-full py-2 text-sm text-[#EE4343] font-medium hover:bg-red-50 rounded-lg transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );
};

// Main Page Component
const Giftingcategorypage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'name' | 'model' | 'price'>('model');

  // Get category info
  const categoryInfo = useMemo(() => {
    return getCategoryBySlug(categorySlug || '');
  }, [categorySlug]);

  // Get products for this category
  const categoryProducts = useMemo(() => {
    if (!categorySlug) return [];
    return getProductsForCategory(categorySlug);
  }, [categorySlug]);

  // Get unique subcategories
  const subcategories = useMemo(() => {
    const subs = new Set(categoryProducts.map(p => p.subcategory).filter(Boolean));
    return Array.from(subs) as string[];
  }, [categoryProducts]);

  // Price ranges for economical products
  const priceRanges = useMemo(() => {
    const hasEconomical = categoryProducts.some(p => p.collection === 'economical');
    if (!hasEconomical) return [];
    return [
      { min: 0, max: 100, label: 'Under ₹100' },
      { min: 100, max: 200, label: '₹100 - ₹200' },
      { min: 200, max: 300, label: '₹200 - ₹300' },
      { min: 300, max: 500, label: '₹300 - ₹500' },
      { min: 500, max: 10000, label: 'Above ₹500' },
    ];
  }, [categoryProducts]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let products = [...categoryProducts];

    if (selectedSubcategory) {
      products = products.filter(p => p.subcategory === selectedSubcategory);
    }

    if (selectedPriceRange && priceRanges.length > 0) {
      const range = priceRanges.find(r => r.label === selectedPriceRange);
      if (range) {
        products = products.filter(p => {
          if (!p.price) return false;
          const price = typeof p.price === 'number' ? p.price : parseInt(String(p.price).split(' ')[0]);
          return price >= range.min && price <= range.max;
        });
      }
    }

    if (sortBy === 'name') {
      products.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'price') {
      products.sort((a, b) => {
        const priceA = typeof a.price === 'number' ? a.price : parseInt(String(a.price || '0').split(' ')[0]);
        const priceB = typeof b.price === 'number' ? b.price : parseInt(String(b.price || '0').split(' ')[0]);
        return priceA - priceB;
      });
    } else {
      products.sort((a, b) => a.model.localeCompare(b.model));
    }

    return products;
  }, [categoryProducts, selectedSubcategory, selectedPriceRange, priceRanges, sortBy]);

  const categoryName = categoryInfo?.name || categorySlug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Products';
  const categoryDescription = categoryInfo?.description || `Browse our collection of ${categoryName.toLowerCase()}`;
  const isEconomical = categoryInfo?.collection === 'economical';

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className={`pt-24 pb-8 ${isEconomical ? 'bg-gradient-to-r from-green-900 to-green-700' : 'bg-gradient-to-r from-gray-900 to-gray-800'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/corporate-gifting" className="hover:text-white transition-colors">Corporate Gifting</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{categoryName}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              {categoryName}
            </h1>
            {isEconomical ? (
              <span className="px-3 py-1 bg-green-500 text-white text-sm font-bold rounded-full">
                VALUE RANGE
              </span>
            ) : (
              <span className="px-3 py-1 bg-amber-500 text-white text-sm font-bold rounded-full">
                PREMIUM
              </span>
            )}
          </div>
          <p className="text-gray-300 text-lg max-w-2xl">
            {categoryDescription}
          </p>

          <div className="flex flex-wrap gap-6 mt-8">
            <div className="flex items-center gap-2 text-white">
              <span className="text-2xl font-bold">{categoryProducts.length}</span>
              <span className="text-gray-400">Products</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <span className="text-2xl font-bold">{subcategories.length}</span>
              <span className="text-gray-400">Subcategories</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <Shield className="w-5 h-5" />
              <span>Logo Printing Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <FilterSidebar
                subcategories={subcategories}
                selectedSubcategory={selectedSubcategory}
                onSelectSubcategory={setSelectedSubcategory}
                priceRanges={priceRanges}
                selectedPriceRange={selectedPriceRange}
                onSelectPriceRange={setSelectedPriceRange}
              />
            </aside>

            <div className="flex-1">
              <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">
                    Showing <strong>{filteredProducts.length}</strong> products
                  </span>
                  
                  <div className="flex flex-wrap gap-2">
                    {selectedSubcategory && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-sm rounded-full">
                        {selectedSubcategory}
                        <button onClick={() => setSelectedSubcategory(null)}>
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}
                    {selectedPriceRange && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-sm rounded-full">
                        {selectedPriceRange}
                        <button onClick={() => setSelectedPriceRange(null)}>
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as 'name' | 'model' | 'price')}
                    className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#EE4343]"
                  >
                    <option value="model">Sort by Model</option>
                    <option value="name">Sort by Name</option>
                    {isEconomical && <option value="price">Sort by Price</option>}
                  </select>

                  <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-gray-900 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                    >
                      <Grid3X3 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-gray-900 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className={
                viewMode === 'grid' 
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' 
                  : 'space-y-4'
              }>
                {filteredProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    viewMode={viewMode}
                    categorySlug={categorySlug || 'products'}
                  />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <div className="text-gray-400 mb-4">
                    <Filter className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your filters or browse all products</p>
                  <button
                    onClick={() => {
                      setSelectedSubcategory(null);
                      setSelectedPriceRange(null);
                    }}
                    className="px-6 py-2 bg-[#EE4343] text-white rounded-lg hover:bg-[#d63a3a] transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Truck, title: "Pan India Delivery", desc: "Free shipping on bulk orders" },
              { icon: Shield, title: "Quality Assured", desc: "Premium materials only" },
              { icon: Star, title: "Logo Printing", desc: "Custom branding available" },
              { icon: Phone, title: "Bulk Enquiry", desc: "Call: +91 98XXX XXXXX" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4">
                <div className="p-3 bg-gray-100 rounded-xl">
                  <item.icon className="w-6 h-6 text-[#EE4343]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Giftingcategorypage;