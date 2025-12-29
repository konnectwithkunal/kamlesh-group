import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
} from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeaderWhite from '@/components/HeaderWhite';
import { 
  getProductsByCategory, 
  getCategoryBySlug, 
  giftingCategories,
  Product,
  Category
} from '@/data/corporate-gifting-products';

// Product Card Component - Printo Style
const ProductCard: React.FC<{ product: Product; viewMode: 'grid' | 'list' }> = ({ product, viewMode }) => {
  const [imageError, setImageError] = useState(false);

  if (viewMode === 'list') {
    return (
      <Link to={`/corporate-gifting/${product.categorySlug}/${product.slug}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row group"
        >
          {/* Image */}
          <div className="md:w-64 flex-shrink-0 relative">
            {product.isNew && (
              <span className="absolute top-3 right-3 z-10 px-3 py-1.5 bg-purple-600 text-white text-xs font-bold rounded-md shadow-lg">
                NEW
              </span>
            )}
            {product.isFeatured && !product.isNew && (
              <span className="absolute top-3 right-3 z-10 px-3 py-1.5 bg-[#EE4343] text-white text-xs font-bold rounded-md shadow-lg">
                FEATURED
              </span>
            )}
            <div className="aspect-square md:h-full relative overflow-hidden bg-[#F5F5F5]">
              <img
                src={imageError ? '/img/placeholder.png' : product.images[0]}
                alt={product.name}
                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                onError={() => setImageError(true)}
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#EE4343] transition-colors">
              {product.name}
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {product.shortDescription}
            </p>
            
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
              <span className="text-gray-500 text-sm">each for {product.minOrderQty} {product.priceUnit}s</span>
            </div>
          </div>
        </motion.div>
      </Link>
    );
  }

  // Grid View - Printo Style Card with Border
  return (
    <Link to={`/corporate-gifting/${product.categorySlug}/${product.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group cursor-pointer bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
      >
        {/* Image Container - Light Gray Background like Printo */}
        <div className="bg-[#F5F5F5] aspect-square relative">
          {/* NEW Badge - Top Right, Purple like Printo */}
          {product.isNew && (
            <span className="absolute top-3 right-3 z-10 px-4 py-1.5 bg-purple-600 text-white text-sm font-bold rounded-md shadow-lg">
              NEW
            </span>
          )}
          {product.isFeatured && !product.isNew && (
            <span className="absolute top-3 right-3 z-10 px-4 py-1.5 bg-[#EE4343] text-white text-sm font-bold rounded-md shadow-lg">
              FEATURED
            </span>
          )}
          <img
            src={imageError ? '/img/placeholder.png' : product.images[0]}
            alt={product.name}
            className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
            onError={() => setImageError(true)}
          />
        </div>

        {/* Content - Centered Text Below Image with White Background */}
        <div className="text-center py-5 px-4 bg-white">
          <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#EE4343] transition-colors text-base md:text-lg">
            {product.name}
          </h3>
          <p className="text-gray-800">
            <span className="font-bold text-lg">₹{product.price.toLocaleString()}</span>
            <span className="text-gray-500 text-sm ml-2">each for {product.minOrderQty} {product.priceUnit}s</span>
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

// FAQ Accordion
const FAQItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void }> = ({
  question,
  answer,
  isOpen,
  onClick
}) => (
  <div className="border-b border-gray-200">
    <button
      onClick={onClick}
      className="w-full py-4 flex items-center justify-between text-left hover:text-[#EE4343] transition-colors"
    >
      <span className="font-medium text-gray-800 pr-4">{question}</span>
      {isOpen ? (
        <ChevronUp className="w-5 h-5 text-[#EE4343] flex-shrink-0" />
      ) : (
        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
      )}
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden"
        >
          <p className="pb-4 text-gray-600 leading-relaxed">{answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// Main Category Page Component
const CategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('default');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const category = getCategoryBySlug(categorySlug || '');
  const products = getProductsByCategory(categorySlug || '');

  // Sort products
  const sortedProducts = useMemo(() => {
    const sorted = [...products];
    switch (sortBy) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Featured first
        sorted.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }
    return sorted;
  }, [products, sortBy]);

  // FAQ data based on category
  const faqs = [
    {
      question: `Do you offer bulk discounts on ${category?.name}?`,
      answer: "Yes! We offer volume-based discounts on all our products. The more you order, the better the price. Contact our sales team for custom quotes on large orders."
    },
    {
      question: "Can I customize these products with my company logo?",
      answer: "Absolutely! All our products can be customized with your company logo, brand colors, and messaging. We offer various printing methods including sublimation, embroidery, and laser engraving."
    },
    {
      question: "What is the minimum order quantity?",
      answer: "Minimum order quantities vary by product and are listed on each product page. For most items, MOQ starts at 5-10 units. Contact us for smaller quantities."
    },
    {
      question: "How long does delivery take?",
      answer: "Standard delivery takes 5-7 business days. Express delivery options are available for select cities. Custom orders may require additional time for production."
    },
    {
      question: "Do you provide samples before bulk orders?",
      answer: "Yes, we can provide samples for quality assessment before you place bulk orders. Sample costs are adjusted against your final order."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, UPI, credit/debit cards, and corporate purchase orders for established accounts."
    }
  ];

  if (!category) {
    return (
      <>
        <div className="bg-white"><Header /></div>
        <div className="min-h-screen flex items-center justify-center mt-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Category Not Found</h1>
            <Link to="/corporate-gifting" className="text-[#EE4343] hover:underline">
              Browse all categories
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="bg-white">
        <HeaderWhite />
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb - Fixed height spacing for header (pt-24 = 96px for proper header clearance) */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-full mx-auto px-20 py-4 pt-24">
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link to="/" className="hover:text-[#EE4343]">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/corporate-gifting" className="hover:text-[#EE4343]">Corporate Gifting</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-800 font-medium">{category.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                {category.name}
              </h1>
              <p className="text-gray-600 text-lg">
                {category.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* All Products Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            {/* Section Header with Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <h2 className="text-2xl font-bold text-gray-800">
                All {category.name}
              </h2>
              <div className="flex items-center gap-4">
                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#EE4343]"
                >
                  <option value="default">Sort by: Default</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name</option>
                </select>

                {/* View Toggle */}
                <div className="flex items-center bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm text-[#EE4343]' : 'text-gray-500'}`}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm text-[#EE4343]' : 'text-gray-500'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            <div className={
              viewMode === 'grid' 
                ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8'
                : 'flex flex-col gap-4'
            }>
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} viewMode={viewMode} />
              ))}
            </div>
          </div>
        </section>

        {/* Related Categories */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {giftingCategories
                .filter(c => c.slug !== categorySlug)
                .slice(0, 4)
                .map((cat) => (
                  <Link 
                    key={cat.id}
                    to={`/corporate-gifting/${cat.slug}`}
                    className="group"
                  >
                    <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                      <img 
                        src={cat.image} 
                        alt={cat.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white font-semibold">{cat.name}</h3>
                        <p className="text-white/80 text-sm">{cat.productCount} Products</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="grid md:grid-cols-2 gap-x-8">
                <div>
                  {faqs.slice(0, 3).map((faq, index) => (
                    <FAQItem
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openFAQ === index}
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    />
                  ))}
                </div>
                <div>
                  {faqs.slice(3).map((faq, index) => (
                    <FAQItem
                      key={index + 3}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openFAQ === index + 3}
                      onClick={() => setOpenFAQ(openFAQ === index + 3 ? null : index + 3)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

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

        {/* SEO Content */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Premium {category.name} for Corporate Gifting
            </h2>
            <div className="prose prose-gray max-w-none text-sm">
              <p className="text-gray-600 leading-relaxed mb-4">
                At Kamlesh Group, we offer premium {category.name.toLowerCase()} that are perfect for corporate gifting, 
                employee appreciation, and promotional events. With over 18 years of experience in the industry, 
                we understand what makes a corporate gift memorable and impactful.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our {category.name.toLowerCase()} can be fully customized with your company logo, brand colors, 
                and messaging. Whether you need products for a small team or thousands of employees, 
                we offer competitive pricing with volume discounts.
              </p>
              <p className="text-gray-600 leading-relaxed">
                All our products are quality-assured and come with reliable Pan India delivery. 
                Contact our team for custom quotes, samples, or any questions about our {category.name.toLowerCase()}.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default CategoryPage;