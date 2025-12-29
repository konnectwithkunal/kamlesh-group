// src/components/BrandsWeOffer.tsx

import React from 'react';
import { motion, useInView } from 'framer-motion';

// Brand data organized by category
const brandCategories = [
  {
    id: 'apparel',
    title: "Apparel & Fashion",
    color: "#16a34a",
    brands: [
      "Raymond", "Allen Solly", "Van Heusen", "U.S. Polo Assn.", 
      "Nike", "Adidas", "Puma", "Reebok", "United Colors of Benetton", 
      "Pepe Jeans", "Indian Terrain", "Flying Machine", "ColorPlus", 
      "Global Desi", "BIBA", "Label Ritu Kumar", "Rare Rabbit", "ASICS", "Jack & Jones"
    ]
  },
  {
    id: 'bags',
    title: "Bags & Luggage",
    color: "#0ea5e9",
    brands: [
      "American Tourister", "Samsonite", "Delsey", "Skybags", 
      "Swiss Military", "TUMI", "Baggallini", "Ducati", "Wildcraft", "Safari"
    ]
  },
  {
    id: 'pens',
    title: "Premium Pens & Writing",
    color: "#8b5cf6",
    brands: [
      "Mont Blanc", "Parker", "Cross", "Sheaffer", 
      "Waterman", "Lamy", "Faber-Castell", "Cerruti 1881"
    ]
  },
  {
    id: 'electronics',
    title: "Electronics & Appliances",
    color: "#f59e0b",
    brands: [
      "Philips", "Dyson", "Sharp", "Amazon", 
      "Honeywell", "Milton", "Borosil", "Prestige"
    ]
  },
  {
    id: 'drinkware',
    title: "Drinkware & Bottles",
    color: "#06b6d4",
    brands: [
      "Milton", "Borosil", "Tupperware", "Cello", 
      "Nayasa", "Wonderchef", "Signoraware"
    ]
  }
];

// Get all brands flattened
const allBrands = brandCategories.flatMap(cat => 
  cat.brands.map(brand => ({ name: brand, category: cat.id, color: cat.color }))
);

// Marquee row component
const MarqueeRow = ({ 
  brands, 
  direction = 'left', 
  speed = 30 
}: { 
  brands: typeof allBrands; 
  direction?: 'left' | 'right'; 
  speed?: number;
}) => {
  const duplicatedBrands = [...brands, ...brands, ...brands];
  
  return (
    <div className="overflow-hidden py-3 relative">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex gap-4 md:gap-6"
        animate={{
          x: direction === 'left' ? ['0%', '-33.33%'] : ['-33.33%', '0%']
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear'
          }
        }}
      >
        {duplicatedBrands.map((brand, index) => (
          <div
            key={`${brand.name}-${index}`}
            className="flex-shrink-0 px-5 py-3 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all duration-300 cursor-pointer group"
          >
            <span className="text-sm md:text-base font-semibold text-gray-700 group-hover:text-gray-900 whitespace-nowrap transition-colors">
              {brand.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// Brand card component
const BrandCard = ({ 
  name, 
  index, 
  isInView 
}: { 
  name: string; 
  index: number; 
  isInView: boolean;
}) => (
  <motion.div
    className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex items-center justify-center min-h-[70px] hover:shadow-lg hover:border-[#EE4343]/30 transition-all duration-300 group cursor-pointer"
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.3, delay: index * 0.02 }}
    whileHover={{ y: -4, scale: 1.02 }}
  >
    <span className="text-sm md:text-base font-semibold text-gray-600 group-hover:text-gray-900 text-center transition-colors">
      {name}
    </span>
  </motion.div>
);

// Category section component
const CategorySection = ({ 
  category, 
  index 
}: { 
  category: typeof brandCategories[0]; 
  index: number;
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className="mb-10"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-5">
        <span 
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: category.color }}
        />
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">
          {category.title}
        </h3>
        <span className="text-sm text-gray-400">
          ({category.brands.length} brands)
        </span>
      </div>

      {/* Brands Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 md:gap-4">
        {category.brands.map((brand, brandIndex) => (
          <BrandCard 
            key={brand} 
            name={brand} 
            index={brandIndex}
            isInView={isInView}
          />
        ))}
      </div>
    </motion.div>
  );
};

function BrandsWeOffer() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Split brands for marquee rows
  const row1 = allBrands.slice(0, Math.ceil(allBrands.length / 2));
  const row2 = allBrands.slice(Math.ceil(allBrands.length / 2));

  return (
    <section 
      id="brands" 
      className="w-full bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 overflow-hidden"
      ref={ref}
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 bg-[#EE4343]/10 text-[#EE4343] text-sm font-medium rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Premium Partnerships
          </motion.span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Brands We <span className="text-[#EE4343]">Offer</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Partner with world-renowned brands for sublimation, corporate gifting, 
            and promotional merchandise solutions.
          </p>
        </motion.div>
      </div>

      {/* Infinite Marquee - Full Width */}
      <div className="mb-12 md:mb-16">
        <MarqueeRow brands={row1} direction="left" speed={45} />
        <MarqueeRow brands={row2} direction="right" speed={40} />
      </div>

      {/* Category Sections */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {brandCategories.map((category, index) => (
          <CategorySection 
            key={category.id} 
            category={category} 
            index={index}
          />
        ))}

        {/* Stats Grid */}
        <motion.div
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { number: "50+", label: "Partner Brands", icon: "🏷️" },
            { number: "1000+", label: "Products Available", icon: "📦" },
            { number: "100%", label: "Authentic Products", icon: "✓" },
            { number: "Pan India", label: "Delivery Network", icon: "🚚" }
          ].map((stat) => (
            <motion.div 
              key={stat.label}
              className="text-center p-5 md:p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              whileHover={{ y: -4 }}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-xl md:text-3xl font-bold text-[#EE4343] mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl">
            <div className="text-white text-center sm:text-left">
              <p className="font-semibold text-lg">Looking for a specific brand?</p>
              <p className="text-gray-400 text-sm">We can source any brand for your corporate needs</p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#EE4343] text-white font-medium rounded-full hover:bg-[#d63a3a] transition-colors duration-300 whitespace-nowrap"
            >
              Request Brand
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default BrandsWeOffer;