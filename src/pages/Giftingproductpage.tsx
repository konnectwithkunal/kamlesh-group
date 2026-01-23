// src/pages/Giftingproductpage.tsx
// Product detail page using unified kamlesh-group-catalog.ts data

import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  ChevronLeft,
  Star,
  Truck,
  Shield,
  Phone,
  Mail,
  Check,
  Package,
  Palette,
  Ruler,
  Scale,
  Layers,
  Share2,
  Heart,
  MessageCircle
} from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import from UNIFIED catalog
import {
  kamleshGroupProducts,
  getProductByModel,
  getRelatedProducts,
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
    'gradient multi': '#667eea',
    'multicolor': '#888888',
    'multicolour': '#888888',
    'mix': '#888888',
  };
  return colorMap[color.toLowerCase()] || '#888888';
};

// Image Gallery Component - Updated to handle optional gallery array
const ImageGallery: React.FC<{ product: UnifiedProduct }> = ({ product }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [imageError, setImageError] = useState(false);

  const images = useMemo(() => {
    const imgs = [product.images.main];

    // Add gallery images if they exist
    if (product.images.gallery && Array.isArray(product.images.gallery)) {
      imgs.push(...product.images.gallery);
    }

    // Add other image types if they exist
    if (product.images.lifestyle) imgs.push(product.images.lifestyle);
    if (product.images.packaging) imgs.push(product.images.packaging);
    if (product.images.variants && Array.isArray(product.images.variants)) {
      imgs.push(...product.images.variants);
    }

    return imgs;
  }, [product]);

  const fallbackImage = product.collection === 'premium'
    ? 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80'
    : 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80';

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-[#F5F5F5] rounded-2xl overflow-hidden">
        {/* Model Badge */}
        <span className="absolute top-4 left-4 z-10 px-3 py-1.5 bg-gray-900 text-white text-sm font-mono rounded-lg">
          {product.model}
        </span>

        {/* Collection Badge */}
        {product.collection === 'premium' ? (
          <span className="absolute top-4 right-4 z-10 px-3 py-1.5 bg-amber-500 text-white text-sm font-bold rounded-lg">
            PREMIUM
          </span>
        ) : (
          <span className="absolute top-4 right-4 z-10 px-3 py-1.5 bg-green-600 text-white text-sm font-bold rounded-lg">
            VALUE
          </span>
        )}

        {/* Price Badge */}
        {product.price && (
          <span className="absolute bottom-4 right-4 z-10 px-3 py-1.5 bg-green-600 text-white text-sm font-bold rounded-lg">
            ₹{typeof product.price === 'number' ? product.price : product.price}
          </span>
        )}

        <AnimatePresence mode="wait">
          <motion.img
            key={activeImage}
            src={imageError ? fallbackImage : images[activeImage]}
            alt={`${product.name} - View ${activeImage + 1}`}
            className="w-full h-full object-contain p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onError={() => setImageError(true)}
          />
        </AnimatePresence>

        {/* Navigation Arrows - Only show if multiple images */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => setActiveImage(prev => prev === 0 ? images.length - 1 : prev - 1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveImage(prev => prev === images.length - 1 ? 0 : prev + 1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Image Counter - Only show if multiple images */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-4 z-10 px-3 py-1.5 bg-black/70 text-white text-sm font-medium rounded-lg">
            {activeImage + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Strip - Only show if multiple images */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(idx)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${activeImage === idx
                ? 'border-[#EE4343] ring-2 ring-[#EE4343]/20'
                : 'border-gray-200 hover:border-gray-300'
                }`}
              aria-label={`View image ${idx + 1}`}
            >
              <img
                src={img}
                alt={`${product.name} thumbnail ${idx + 1}`}
                className="w-full h-full object-contain bg-gray-100 p-2"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = fallbackImage;
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Color Selector Component
const ColorSelector: React.FC<{
  variants: UnifiedProduct['variants'];
  selected: number;
  onSelect: (index: number) => void;
}> = ({ variants, selected, onSelect }) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700">Available Colors</span>
        <span className="text-sm text-gray-500">{variants.length} options</span>
      </div>
      <div className="flex flex-wrap gap-3">
        {variants.map((variant, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(idx)}
            className={`group relative flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all ${selected === idx
              ? 'border-[#EE4343] bg-red-50'
              : 'border-gray-200 hover:border-gray-300'
              }`}
          >
            <span
              className="w-5 h-5 rounded-full border border-gray-300 shadow-sm"
              style={{ backgroundColor: getColorHex(variant.color) }}
            />
            <span className="text-sm font-medium text-gray-700 capitalize">
              {variant.color}
            </span>
            {selected === idx && (
              <Check className="w-4 h-4 text-[#EE4343]" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

// Specifications Table
const SpecificationsTable: React.FC<{ product: UnifiedProduct }> = ({ product }) => {
  const specs = product.specifications;
  if (!specs) return null;

  const specItems = [
    { icon: Ruler, label: 'Dimensions', value: specs.height && specs.length ? `${specs.height} × ${specs.length} × ${specs.width || 'N/A'}` : null },
    { icon: Scale, label: 'Weight', value: specs.weight },
    { icon: Layers, label: 'Material', value: specs.material },
    { icon: Package, label: 'Capacity', value: specs.capacity },
    { icon: Package, label: 'Includes', value: specs.includes },
  ].filter(item => item.value);

  if (specItems.length === 0) return null;

  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Specifications</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {specItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-lg">
              <item.icon className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">{item.label}</p>
              <p className="text-sm font-medium text-gray-900">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Related Products Component
const RelatedProducts: React.FC<{ product: UnifiedProduct; categorySlug: string }> = ({ product, categorySlug }) => {
  const relatedProducts = useMemo(() => getRelatedProducts(product, 4), [product]);

  if (relatedProducts.length === 0) return null;

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((relatedProduct) => (
            <Link
              key={relatedProduct.id}
              to={`/corporate-gifting/${categorySlug}/${relatedProduct.model.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className="aspect-square bg-[#F5F5F5] relative">
                  <span className="absolute top-2 left-2 px-2 py-1 bg-gray-900 text-white text-xs font-mono rounded z-10">
                    {relatedProduct.model}
                  </span>
                  {relatedProduct.price && (
                    <span className="absolute bottom-2 right-2 px-2 py-1 bg-green-600 text-white text-xs font-bold rounded z-10">
                      ₹{typeof relatedProduct.price === 'number' ? relatedProduct.price : relatedProduct.price}
                    </span>
                  )}
                  <img
                    src={relatedProduct.images.main}
                    alt={relatedProduct.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80';
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 text-sm line-clamp-2 group-hover:text-[#EE4343] transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <div className="flex gap-1 mt-2">
                    {relatedProduct.variants.slice(0, 3).map((v, i) => (
                      <span
                        key={i}
                        className="w-3 h-3 rounded-full border border-gray-300"
                        style={{ backgroundColor: getColorHex(v.color) }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Product Detail Page
const Giftingproductpage: React.FC = () => {
  const { categorySlug, productSlug } = useParams<{ categorySlug: string; productSlug: string }>();
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(100);

  // Find product by model/slug
  const product = useMemo(() => {
    if (!productSlug) return null;
    return getProductByModel(productSlug);
  }, [productSlug]);

  // Get category info
  const categoryInfo = useMemo(() => {
    if (!categorySlug) return null;
    return getCategoryBySlug(categorySlug);
  }, [categorySlug]);

  // If product not found
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-24 md:pt-32 pb-20 text-center">
          <div className="max-w-md mx-auto px-4">
            <Package className="w-20 h-20 text-gray-300 mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-8">
              Sorry, we couldn't find the product you're looking for. It may have been removed or the link is incorrect.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Looking for: {productSlug}
            </p>
            <Link
              to="/corporate-gifting"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#EE4343] text-white font-semibold rounded-xl hover:bg-[#d63a3a] transition-colors"
            >
              Browse All Products
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const categoryName = categoryInfo?.name || product.category;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb - Added pt-20 md:pt-24 for header spacing */}
      <div className="bg-gray-50 border-b border-gray-100 pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-900 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link to="/corporate-gifting" className="text-gray-500 hover:text-gray-900 transition-colors">
              Corporate Gifting
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link
              to={`/corporate-gifting/${categorySlug}`}
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              {categoryName}
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">{product.model}</span>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Gallery */}
            <div>
              <ImageGallery product={product} />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Title & Model */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-gray-500 uppercase tracking-wide">{product.subcategory}</span>
                  {product.collection === 'premium' ? (
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-bold rounded">PREMIUM</span>
                  ) : (
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded">VALUE</span>
                  )}
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <p className="text-gray-600">
                  {product.description}
                </p>
              </div>

              {/* Price (if available) */}
              {product.price && (
                <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-green-700">
                      ₹{typeof product.price === 'number' ? product.price : product.price}
                    </span>
                    <span className="text-sm text-green-600">per piece</span>
                  </div>
                  {product.ctnPacking && (
                    <p className="text-sm text-green-600 mt-1">Packing: {product.ctnPacking}</p>
                  )}
                </div>
              )}

              {/* Color Selector */}
              <ColorSelector
                variants={product.variants}
                selected={selectedColor}
                onSelect={setSelectedColor}
              />

              {/* Features */}
              {product.features.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-gray-700">Key Features</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="p-1 bg-green-100 rounded-full mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Specifications */}
              <SpecificationsTable product={product} />

              {/* Customization */}
              {product.customization && (
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Palette className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold text-blue-900">Customization Available</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {product.customization.logoPrinting && (
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                        Logo Printing
                      </span>
                    )}
                    {product.customization.branding && (
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                        Custom Branding
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-gray-700">Quantity (Minimum 100 pieces)</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-200 rounded-lg">
                    <button
                      onClick={() => setQuantity(prev => Math.max(100, prev - 50))}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(100, parseInt(e.target.value) || 100))}
                      className="w-20 text-center border-x border-gray-200 py-2 focus:outline-none"
                    />
                    <button
                      onClick={() => setQuantity(prev => prev + 50)}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm text-gray-500">pieces</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={`https://wa.me/919811700286?text=Hi, I'm interested in ${product.name} (${product.model}) - Quantity: ${quantity} pieces, Color: ${product.variants[selectedColor].color}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Inquiry
                </a>
                <a
                  href={`mailto:sales@kamleshgroup.com?subject=Inquiry: ${product.name} (${product.model})&body=Hi,%0D%0A%0D%0AI'm interested in ${product.name} (Model: ${product.model}).%0D%0A%0D%0AQuantity: ${quantity} pieces%0D%0AColor: ${product.variants[selectedColor].color}%0D%0A%0D%0APlease share the pricing and availability.`}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Email Inquiry
                </a>
              </div>

              {/* Quick Actions */}
              <div className="flex items-center gap-4 pt-2">
                <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors">
                  <Heart className="w-5 h-5" />
                  <span className="text-sm">Save</span>
                </button>
                <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span className="text-sm">Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Truck, title: "Pan India Delivery", desc: "Free on bulk orders" },
              { icon: Shield, title: "Quality Assured", desc: "Premium materials" },
              { icon: Star, title: "Logo Printing", desc: "Custom branding" },
              { icon: Phone, title: "Support", desc: "+91 9811700286" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <item.icon className="w-5 h-5 text-[#EE4343]" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <RelatedProducts product={product} categorySlug={categorySlug || 'products'} />

      <Footer />
    </div>
  );
};

export default Giftingproductpage;