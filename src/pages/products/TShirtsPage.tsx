import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Filter,
  Grid3X3,
  List,
  Phone,
  Mail,
  Check,
  X,
  Star,
  Truck,
  Shield,
  Package
} from 'lucide-react';

// ==========================================
// IMPORT HEADER & FOOTER
// ==========================================
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import News from "@/components/News";

// ==========================================
// IMPORT THE SCRAPED DATA
// ==========================================
import { products, categories, subCategories, Product, Category, SubCategory } from '@/data/samplescrapedata';


// Sidebar Content Component with expandable sub-categories
const SidebarContent: React.FC<{
  categories: Category[];
  subCategories: SubCategory[];
  selectedCategory: string;
  selectedSubCategory: string | null;
  onCategorySelect: (id: string) => void;
  onSubCategorySelect: (id: string | null) => void;
}> = ({ categories, subCategories, selectedCategory, selectedSubCategory, onCategorySelect, onSubCategorySelect }) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('sublimation-t-shirts');

  const toggleExpand = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <>
      {/* Category Header */}
      <div className="p-4 border-b border-[#E8E4DC]">
        <h2 className="text-lg font-bold text-[#2D2A26] flex items-center gap-2">
          <Filter className="w-5 h-5 text-[#C17F59]" />
          Sublimation T-Shirts
        </h2>
        <p className="text-sm text-[#6B6560] mt-1">
          {products.length} Products
        </p>
      </div>

      {/* Categories List */}
      <nav className="p-2">
        {categories.map((category) => (
          <div key={category.id}>
            {/* Main Category Button */}
            <button
              onClick={() => {
                if (category.id === 'all') {
                  onCategorySelect('all');
                  onSubCategorySelect(null);
                } else {
                  toggleExpand(category.id);
                  onCategorySelect(category.id);
                  onSubCategorySelect(null);
                }
              }}
              className={`
                w-full flex items-center justify-between p-3 rounded-lg mb-1
                transition-all duration-200 group
                ${(selectedCategory === category.id && !selectedSubCategory)
                  ? 'bg-[#C17F59] text-white'
                  : 'hover:bg-[#F5F3EF] text-[#4A4541]'
                }
              `}
            >
              <span className="flex items-center gap-2">
                {category.id !== 'all' ? (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${expandedCategory === category.id ? 'rotate-0' : '-rotate-90'
                      }`}
                  />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
                <span className="text-sm font-medium">{category.name}</span>
              </span>
              <span className={`
                text-xs px-2 py-0.5 rounded-full
                ${(selectedCategory === category.id && !selectedSubCategory)
                  ? 'bg-white/20 text-white'
                  : 'bg-[#E8E4DC] text-[#6B6560]'
                }
              `}>
                {category.count}
              </span>
            </button>

            {/* Sub-categories (expandable) */}
            {category.id !== 'all' && (
              <AnimatePresence>
                {expandedCategory === category.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 space-y-1 mb-2">
                      {subCategories.map((subCat) => (
                        <button
                          key={subCat.id}
                          onClick={() => {
                            onCategorySelect(category.id);
                            onSubCategorySelect(subCat.id);
                          }}
                          className={`
                            w-full flex items-center justify-between p-2.5 rounded-lg text-left
                            transition-all duration-200
                            ${selectedSubCategory === subCat.id
                              ? 'bg-[#C17F59]/10 text-[#C17F59] border-l-2 border-[#C17F59]'
                              : 'hover:bg-[#F5F3EF] text-[#6B6560] hover:text-[#2D2A26]'
                            }
                          `}
                        >
                          <span className="text-sm">{subCat.name}</span>
                          <span className={`
                            text-xs px-1.5 py-0.5 rounded-full
                            ${selectedSubCategory === subCat.id
                              ? 'bg-[#C17F59]/20 text-[#C17F59]'
                              : 'bg-[#E8E4DC] text-[#6B6560]'
                            }
                          `}>
                            {subCat.count}
                          </span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        ))}
      </nav>

      {/* Contact Info */}
      <div className="p-4 mt-4 border-t border-[#E8E4DC]">
        <h4 className="font-semibold text-[#2D2A26] mb-3">Need Help?</h4>
        <div className="space-y-2 text-sm">
          <a href="tel:+919811700286" className="flex items-center gap-2 text-[#6B6560] hover:text-[#C17F59] transition-colors">
            <Phone className="w-4 h-4" />
            +91 9811700286
          </a>
          <a href="mailto:contact@kamleshgroup.in" className="flex items-center gap-2 text-[#6B6560] hover:text-[#C17F59] transition-colors">
            <Mail className="w-4 h-4" />
            contact@kamleshgroup.in
          </a>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="p-4 border-t border-[#E8E4DC]">
        <div className="grid grid-cols-2 gap-2">
          {[
            { icon: Truck, text: "Pan India Delivery" },
            { icon: Shield, text: "Quality Assured" },
            { icon: Package, text: "Bulk Orders" },
            { icon: Star, text: "18+ Years" },
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-1.5 text-xs text-[#6B6560] bg-[#F5F3EF] p-2 rounded-lg">
              <badge.icon className="w-3.5 h-3.5 text-[#C17F59]" />
              {badge.text}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// Sidebar Filter Component
const Sidebar: React.FC<{
  categories: Category[];
  subCategories: SubCategory[];
  selectedCategory: string;
  selectedSubCategory: string | null;
  onCategorySelect: (id: string) => void;
  onSubCategorySelect: (id: string | null) => void;
  isOpen: boolean;
  onClose: () => void;
}> = ({ categories, subCategories, selectedCategory, selectedSubCategory, onCategorySelect, onSubCategorySelect, isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <motion.aside
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-0 left-0 h-full w-[300px] bg-white z-50 border-r border-[#E8E4DC] shadow-lg overflow-y-auto lg:hidden"
      >
        <div className="flex items-center justify-between p-4 border-b border-[#E8E4DC]">
          <h3 className="font-semibold text-[#2D2A26]">Filter Products</h3>
          <button onClick={onClose} className="p-2 hover:bg-[#F5F3EF] rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>
        <SidebarContent
          categories={categories}
          subCategories={subCategories}
          selectedCategory={selectedCategory}
          selectedSubCategory={selectedSubCategory}
          onCategorySelect={(id) => {
            onCategorySelect(id);
          }}
          onSubCategorySelect={(id) => {
            onSubCategorySelect(id);
            if (id) onClose();
          }}
        />
      </motion.aside>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-[300px] flex-shrink-0 bg-white border border-[#E8E4DC] rounded-xl h-fit sticky top-6">
        <SidebarContent
          categories={categories}
          subCategories={subCategories}
          selectedCategory={selectedCategory}
          selectedSubCategory={selectedSubCategory}
          onCategorySelect={onCategorySelect}
          onSubCategorySelect={onSubCategorySelect}
        />
      </aside>
    </>
  );
};

// Product Card Component
const ProductCard: React.FC<{
  product: Product;
  index: number;
  viewMode: 'grid' | 'list';
}> = ({ product, index, viewMode }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [imageError, setImageError] = useState<Set<number>>(new Set());

  const handleImageError = (imgIndex: number) => {
    setImageError(prev => new Set(prev).add(imgIndex));
  };

  const getImageSrc = (imgIndex: number) => {
    if (imageError.has(imgIndex) || !product.images[imgIndex]) {
      return '/img/placeholder-tshirt.png';
    }
    return product.images[imgIndex];
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  // List View
  if (viewMode === 'list') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
        className="bg-white rounded-xl border border-[#E8E4DC] overflow-hidden hover:shadow-lg transition-shadow"
      >
        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="lg:w-[320px] xl:w-[380px] p-4 flex-shrink-0">
            <div className="relative aspect-square bg-[#F5F3EF] rounded-lg overflow-hidden">
              <img
                src={getImageSrc(selectedImage)}
                alt={product.name}
                className="w-full h-full object-contain"
                onError={() => handleImageError(selectedImage)}
              />

              {/* Image Navigation */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full shadow-md flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-[#2D2A26]" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full shadow-md flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-[#2D2A26]" />
                  </button>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                    {selectedImage + 1} / {product.images.length}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                {product.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${selectedImage === i
                      ? 'border-[#C17F59] shadow-md'
                      : 'border-transparent hover:border-[#E8E4DC]'
                      }`}
                  >
                    <img
                      src={getImageSrc(i)}
                      alt={`${product.name} ${i + 1}`}
                      className="w-full h-full object-contain bg-[#F5F3EF]"
                      onError={() => handleImageError(i)}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="flex-1 p-4 lg:p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                {product.featured && (
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-[#C17F59] text-white rounded-full mb-2">
                    Featured
                  </span>
                )}
                <h3 className="text-xl font-bold text-[#2D2A26] mb-2">{product.name}</h3>
                <p className="text-sm text-[#6B6560]">{product.description}</p>
              </div>
              <div className="text-right ml-4">
                <p className="text-3xl font-bold text-[#C17F59]">₹{product.price}</p>
                <p className="text-sm text-[#6B6560]">per {product.priceUnit}</p>
                {product.minOrderQty && (
                  <p className="text-xs text-[#6B6560] mt-1 bg-[#F5F3EF] px-2 py-1 rounded-md inline-block">
                    Min Order: {product.minOrderQty} pcs
                  </p>
                )}
              </div>
            </div>

            {/* ALL Specs */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
              {product.specs.map((spec, i) => (
                <div key={i} className="bg-[#F5F3EF] rounded-lg px-3 py-2.5">
                  <p className="text-xs text-[#6B6560] mb-0.5">{spec.label}</p>
                  <p className="text-sm font-semibold text-[#2D2A26]">{spec.value}</p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 mt-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 py-3 bg-[#C17F59] text-white rounded-lg font-semibold hover:bg-[#A66B48] transition-colors text-base"
              >
                Get Best Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 border-2 border-[#C17F59] text-[#C17F59] rounded-lg font-medium hover:bg-[#C17F59] hover:text-white transition-colors flex items-center justify-center"
              >
                <Phone className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  // Grid View
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-xl border border-[#E8E4DC] overflow-hidden group hover:shadow-xl transition-all duration-300"
    >
      <div className="relative">
        {product.featured && (
          <span className="absolute top-3 left-3 z-10 px-2.5 py-1 text-xs font-medium bg-[#C17F59] text-white rounded-full">
            Featured
          </span>
        )}
        {product.inStock ? (
          <span className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-green-500 text-white rounded-full">
            <Check className="w-3 h-3" /> In Stock
          </span>
        ) : (
          <span className="absolute top-3 right-3 z-10 px-2.5 py-1 text-xs font-medium bg-red-500 text-white rounded-full">
            Out of Stock
          </span>
        )}

        <div className="aspect-[4/3] bg-[#F5F3EF] overflow-hidden relative">
          <img
            src={getImageSrc(selectedImage)}
            alt={product.name}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
            onError={() => handleImageError(selectedImage)}
          />

          {product.images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full shadow-md flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-5 h-5 text-[#2D2A26]" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full shadow-md flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-5 h-5 text-[#2D2A26]" />
              </button>
            </>
          )}
        </div>

        {product.images.length > 1 && (
          <div className="flex gap-2 p-3 bg-white border-t border-[#E8E4DC]">
            {product.images.slice(0, 5).map((_, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`w-14 h-14 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${selectedImage === i
                  ? 'border-[#C17F59] shadow-sm'
                  : 'border-[#E8E4DC] hover:border-[#C17F59]/50'
                  }`}
              >
                <img
                  src={getImageSrc(i)}
                  alt={`${product.name} ${i + 1}`}
                  className="w-full h-full object-contain bg-[#F5F3EF]"
                  onError={() => handleImageError(i)}
                />
              </button>
            ))}
            {product.images.length > 5 && (
              <div className="w-14 h-14 flex-shrink-0 rounded-lg bg-[#F5F3EF] border-2 border-[#E8E4DC] flex items-center justify-center text-xs font-medium text-[#6B6560]">
                +{product.images.length - 5}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-bold text-[#2D2A26] text-lg mb-1 group-hover:text-[#C17F59] transition-colors">
          {product.name}
        </h3>

        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-bold text-[#C17F59]">₹{product.price}</span>
          <span className="text-sm text-[#6B6560]">/ {product.priceUnit}</span>
        </div>

        {/* ALL Specs */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {product.specs.map((spec, i) => (
            <div key={i} className="bg-[#F5F3EF] rounded-lg px-3 py-2">
              <p className="text-xs text-[#6B6560]">{spec.label}</p>
              <p className="text-sm font-semibold text-[#2D2A26] truncate">{spec.value}</p>
            </div>
          ))}
        </div>

        {product.minOrderQty && (
          <p className="text-xs text-[#6B6560] mb-4 bg-[#FFF8F5] border border-[#C17F59]/20 px-3 py-2 rounded-lg">
            <span className="font-medium">Min Order:</span> {product.minOrderQty} {product.priceUnit}s
          </p>
        )}

        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 py-3 bg-[#C17F59] text-white rounded-lg font-semibold text-sm hover:bg-[#A66B48] transition-colors flex items-center justify-center gap-2"
          >
            Get Best Quote
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 border-2 border-[#E8E4DC] rounded-lg hover:border-[#C17F59] hover:text-[#C17F59] transition-colors flex items-center justify-center"
          >
            <Phone className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
};

// Main Page Component
const TShirtsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  // Read subcategory from URL query parameter on mount
  useEffect(() => {
    const subParam = searchParams.get('sub');
    if (subParam) {
      // Verify it's a valid subcategory
      const validSubCat = subCategories.find(sc => sc.id === subParam);
      if (validSubCat) {
        setSelectedSubCategory(subParam);
        setSelectedCategory('sublimation-t-shirts'); // Set parent category when subcategory is selected
      }
    }
  }, [searchParams]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = products;

    // Filter by sub-category first if selected
    if (selectedSubCategory) {
      result = result.filter(p => p.subCategory === selectedSubCategory);
    }
    // Otherwise filter by main category
    else if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'featured':
      default:
        result = [...result].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return result;
  }, [selectedCategory, selectedSubCategory, sortBy]);

  // Get current filter name for display
  const getCurrentFilterName = () => {
    if (selectedSubCategory) {
      const subCat = subCategories.find(c => c.id === selectedSubCategory);
      return subCat?.name || '';
    }
    const cat = categories.find(c => c.id === selectedCategory);
    return cat?.name || '';
  };

  return (
    <>
      {/* Site Header with white background */}
      <div className="bg-white">
        <Header />
      </div>

      <div className="min-h-screen bg-[#FAF9F7]">

        {/* Page Title Section - Added mt-20 for spacing below fixed header */}
        <div className="bg-gradient-to-r from-[#C17F59]/10 to-[#E8E4DC]/30 border-b border-[#E8E4DC] mt-20">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#2D2A26] mb-2">
              Kamlesh Enterprises
            </h1>
            <p className="text-[#6B6560] max-w-2xl">
              Offering you a complete choice of products including sublimation polyester t-shirts,
              plain sublimation nylon t-shirts, sublimation blank t-shirts, and more.
              Premium quality for custom printing.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex gap-6">
            {/* Sidebar */}
            <Sidebar
              categories={categories}
              subCategories={subCategories}
              selectedCategory={selectedCategory}
              selectedSubCategory={selectedSubCategory}
              onCategorySelect={setSelectedCategory}
              onSubCategorySelect={setSelectedSubCategory}
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
            />

            {/* Products Grid */}
            <main className="flex-1 min-w-0">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 bg-white p-4 rounded-xl border border-[#E8E4DC]">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setSidebarOpen(true)}
                    className="lg:hidden flex items-center gap-2 px-4 py-2 bg-[#F5F3EF] rounded-lg text-sm font-medium text-[#2D2A26]"
                  >
                    <Filter className="w-4 h-4" />
                    Filters
                  </button>

                  <p className="text-sm text-[#6B6560]">
                    Showing <span className="font-semibold text-[#2D2A26]">{filteredProducts.length}</span> products
                    {(selectedCategory !== 'all' || selectedSubCategory) && (
                      <span> in <span className="font-semibold text-[#C17F59]">{getCurrentFilterName()}</span></span>
                    )}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 bg-[#F5F3EF] border border-[#E8E4DC] rounded-lg text-sm text-[#2D2A26] focus:outline-none focus:ring-2 focus:ring-[#C17F59]"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Name</option>
                  </select>

                  <div className="flex items-center bg-[#F5F3EF] rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm text-[#C17F59]' : 'text-[#6B6560] hover:text-[#2D2A26]'
                        }`}
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm text-[#C17F59]' : 'text-[#6B6560] hover:text-[#2D2A26]'
                        }`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Products */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedCategory}-${selectedSubCategory}-${viewMode}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={
                    viewMode === 'grid'
                      ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'
                      : 'flex flex-col gap-6'
                  }
                >
                  {filteredProducts.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      index={index}
                      viewMode={viewMode}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Empty State */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <Package className="w-16 h-16 text-[#E8E4DC] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-[#2D2A26] mb-2">No products found</h3>
                  <p className="text-[#6B6560] mb-4">Try selecting a different category</p>
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedSubCategory(null);
                    }}
                    className="px-6 py-2 bg-[#C17F59] text-white rounded-lg hover:bg-[#A66B48] transition-colors"
                  >
                    View All Products
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>

        {/* CTA Section */}
        <section className="bg-[#2D2A26] py-12 mt-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need Bulk Orders or Custom Printing?
            </h2>
            <p className="text-[#A9A5A0] mb-6 max-w-2xl mx-auto">
              Special pricing available for orders of 50+ units. Contact us for a custom quote!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+919811700286"
                className="flex items-center gap-2 px-6 py-3 bg-[#C17F59] text-white rounded-lg font-medium hover:bg-[#A66B48] transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now: +91 9811700286
              </a>
              <a
                href="mailto:kamleshgroupexports@gmail.com"
                className="flex items-center gap-2 px-6 py-3 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Send Inquiry
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Our Showcase Section */}
      <News />

      {/* Site Footer */}
      <Footer />
    </>
  );
};

export default TShirtsPage;