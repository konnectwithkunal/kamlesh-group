import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  ChevronLeft,
  Star, 
  Truck, 
  Shield, 
  Phone,
  Mail,
  Upload,
  Pencil,
  Check,
  Minus,
  Plus,
  Share2,
  Heart
} from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { 
  getProductBySlug, 
  getProductsByCategory,
  getCategoryBySlug,
  Product
} from '@/data/corporate';

// Image Gallery Component
const ImageGallery: React.FC<{ images: string[]; productName: string }> = ({ images, productName }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  const handleImageError = (index: number) => {
    setImageErrors(prev => new Set(prev).add(index));
  };

  const getImageSrc = (index: number) => {
    if (imageErrors.has(index)) return '/img/placeholder.png';
    return images[index];
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-white rounded-2xl overflow-hidden border border-gray-100">
        <img
          src={getImageSrc(selectedImage)}
          alt={`${productName} - Image ${selectedImage + 1}`}
          className="w-full h-full object-contain p-6"
          onError={() => handleImageError(selectedImage)}
        />
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded">
          {selectedImage + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
              selectedImage === index 
                ? 'border-[#EE4343] ring-2 ring-[#EE4343]/20' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <img
              src={getImageSrc(index)}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-contain p-1 bg-white"
              onError={() => handleImageError(index)}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

// Quantity Selector Component
const QuantitySelector: React.FC<{
  quantity: number;
  minQty: number;
  onChange: (qty: number) => void;
}> = ({ quantity, minQty, onChange }) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-gray-600 text-sm">Quantity</span>
      <div className="flex items-center border border-gray-200 rounded-lg">
        <button
          onClick={() => onChange(Math.max(minQty, quantity - 1))}
          className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
          disabled={quantity <= minQty}
        >
          <Minus className="w-4 h-4" />
        </button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => onChange(Math.max(minQty, parseInt(e.target.value) || minQty))}
          className="w-16 h-10 text-center border-x border-gray-200 focus:outline-none"
        />
        <button
          onClick={() => onChange(quantity + 1)}
          className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
      <span className="text-xs text-gray-500">
        Min: {minQty} for instant ordering
      </span>
    </div>
  );
};

// Similar Product Card
const SimilarProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Link to={`/corporate-gifting/${product.categorySlug}/${product.slug}`}>
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all group">
        <div className="aspect-square bg-gray-50 relative">
          <img
            src={imageError ? '/img/placeholder.png' : product.images[0]}
            alt={product.name}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform"
            onError={() => setImageError(true)}
          />
        </div>
        <div className="p-4">
          <h4 className="font-medium text-gray-800 line-clamp-1 group-hover:text-[#EE4343] transition-colors">
            {product.name}
          </h4>
          <p className="text-[#EE4343] font-bold mt-1">
            ₹{product.price.toLocaleString()}
            <span className="text-gray-500 text-xs font-normal ml-1">/{product.priceUnit}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

// Main Product Page Component
const GiftingProductPage: React.FC = () => {
  const { categorySlug, productSlug } = useParams<{ categorySlug: string; productSlug: string }>();
  const [quantity, setQuantity] = useState(5);
  const [activeTab, setActiveTab] = useState('overview');

  const product = getProductBySlug(categorySlug || '', productSlug || '');
  const category = getCategoryBySlug(categorySlug || '');
  const similarProducts = getProductsByCategory(categorySlug || '')
    .filter(p => p.slug !== productSlug)
    .slice(0, 5);

  // Update quantity to min order qty when product loads
  React.useEffect(() => {
    if (product) {
      setQuantity(product.minOrderQty);
    }
  }, [product]);

  if (!product || !category) {
    return (
      <>
        <div className="bg-white"><Header /></div>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
            <Link to="/corporate-gifting" className="text-[#EE4343] hover:underline">
              Browse all products
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const totalPrice = product.price * quantity;

  return (
    <>
      <div className="bg-white">
        <Header />
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-4 mt-16">
            <nav className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
              <Link to="/" className="hover:text-[#EE4343]">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/corporate-gifting" className="hover:text-[#EE4343]">Corporate Gifting</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to={`/corporate-gifting/${categorySlug}`} className="hover:text-[#EE4343]">
                {category.name}
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-800 font-medium">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* Product Section */}
        <section className="py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left - Image Gallery */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <ImageGallery images={product.images} productName={product.name} />
              </motion.div>

              {/* Right - Product Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                {/* Title & Share */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                      {product.name}
                    </h1>
                    {product.isNew && (
                      <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">
                        NEW ARRIVAL
                      </span>
                    )}
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <Share2 className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                {/* Short Description */}
                <p className="text-gray-600">
                  {product.shortDescription}
                </p>

                {/* Specs List */}
                <ul className="space-y-2">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                      <span>
                        <strong className="text-gray-700">{spec.label}:</strong>{' '}
                        <span className="text-gray-600">{spec.value}</span>
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Quantity Selector */}
                <div className="pt-4 border-t border-gray-200">
                  <QuantitySelector
                    quantity={quantity}
                    minQty={product.minOrderQty}
                    onChange={setQuantity}
                  />
                </div>

                {/* Price */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-[#EE4343]">
                      ₹{totalPrice.toLocaleString()}
                    </span>
                    <span className="text-gray-500">inclusive of all taxes</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    for {quantity} Qty (₹{product.price.toLocaleString()} / {product.priceUnit})
                  </p>
                  <p className="text-sm text-blue-600 mt-2 cursor-pointer hover:underline">
                    Buy in bulk and save 💰
                  </p>
                </div>

                {/* Delivery Estimate */}
                <div className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl">
                  <Truck className="w-6 h-6 text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-800">Estimate Delivery</p>
                    <p className="text-sm text-gray-500">Enter pincode for delivery estimate</p>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Pincode"
                    maxLength={6}
                    className="ml-auto w-28 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#EE4343]"
                  />
                </div>

                {/* CTA Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-[#EE4343] text-[#EE4343] font-semibold rounded-xl hover:bg-[#EE4343]/5 transition-colors">
                    <Upload className="w-5 h-5" />
                    Upload your Files
                  </button>
                  <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors">
                    <Pencil className="w-5 h-5" />
                    Create your Design
                  </button>
                </div>

                {/* Contact for Bulk */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4">
                  <p className="font-semibold text-gray-800 mb-2">Need bulk orders or custom quote?</p>
                  <div className="flex flex-wrap gap-4">
                    <a href="tel:+919876543210" className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#EE4343]">
                      <Phone className="w-4 h-4" />
                      +91 98765 43210
                    </a>
                    <a href="mailto:sales@kamleshgroup.com" className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#EE4343]">
                      <Mail className="w-4 h-4" />
                      sales@kamleshgroup.com
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Delivery Banner */}
        <section className="py-6 bg-gradient-to-r from-purple-600 to-indigo-600">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white">
              <div className="flex items-center gap-4">
                <Truck className="w-10 h-10" />
                <div>
                  <h3 className="text-xl font-bold">Fast Delivery</h3>
                  <p className="text-white/80">Pan India delivery within 5-7 business days</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <p className="text-2xl font-bold">18+</p>
                  <p className="text-xs text-white/80">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">10K+</p>
                  <p className="text-xs text-white/80">Happy Clients</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">100%</p>
                  <p className="text-xs text-white/80">Quality Assured</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Tabs */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Tab Headers */}
            <div className="flex border-b border-gray-200 mb-8">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-6 py-3 font-medium transition-colors relative ${
                  activeTab === 'overview' 
                    ? 'text-[#EE4343]' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Overview
                {activeTab === 'overview' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EE4343]" />
                )}
              </button>
            </div>

            {/* Tab Content */}
            <div className="max-w-4xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {product.name} - Product Details
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-bold text-gray-800 mb-4">Key Features & Advantages</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications Table */}
              <div>
                <h3 className="font-bold text-gray-800 mb-4">Specifications</h3>
                <div className="bg-gray-50 rounded-xl overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      {product.specs.map((spec, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-4 py-3 font-medium text-gray-700 w-1/3">
                            {spec.label}
                          </td>
                          <td className="px-4 py-3 text-gray-600">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Similar Products */}
        {similarProducts.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Similar Products</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {similarProducts.map((prod) => (
                  <SimilarProductCard key={prod.id} product={prod} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Trust Badges */}
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Star, title: "Google Reviews", subtitle: "4.5 star customer rating" },
                { icon: Truck, title: "Pan India Delivery", subtitle: "Delivery anywhere in India" },
                { icon: Shield, title: "Quality Guaranteed", subtitle: "Free replacement if defective" },
                { icon: Phone, title: "Support", subtitle: "Talk to us today!" }
              ].map((badge, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
                    <badge.icon className="w-8 h-8 text-[#EE4343]" />
                  </div>
                  <h4 className="font-semibold text-gray-800">{badge.title}</h4>
                  <p className="text-gray-500 text-sm">{badge.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default GiftingProductPage;