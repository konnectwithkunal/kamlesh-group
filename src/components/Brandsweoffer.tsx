// src/components/BrandsWeOffer.tsx

import React from 'react';
import { motion, useInView } from 'framer-motion';

// DEFINING THE DATA
// I have mapped these based on the filenames in your screenshots.
// Note: I handled the specific extensions you showed (safari.avif, rare-rabbit.jpeg, prestige.jpeg)
const brandCategories = [
  {
    id: 'apparel',
    title: "Apparel & Fashion",
    color: "#16a34a",
    brands: [
      { name: "Raymond", logo: "/brands/raymond.png" }, // Assuming png
      { name: "Allen Solly", logo: "/brands/allen-solly.png" },
      { name: "Van Heusen", logo: "/brands/van-heusen.png" },
      { name: "U.S. Polo Assn.", logo: "/brands/us-polo.png" },
      { name: "Nike", logo: "/brands/nike.png" },
      { name: "Adidas", logo: "/brands/adidas.png" },
      { name: "Puma", logo: "/brands/puma.png" },
      { name: "Reebok", logo: "/brands/reebok.png" },
      { name: "United Colors of Benetton", logo: "/brands/bennition.png" }, // Filename from screenshot
      { name: "Pepe Jeans", logo: "/brands/pepe-jeans.png" },
      { name: "Indian Terrain", logo: "/brands/indian-terrain.png" },
      { name: "Flying Machine", logo: "/brands/flying.png" },
      { name: "ColorPlus", logo: "/brands/color-plus.png" },
      { name: "Global Desi", logo: "/brands/globaldesi.png" },
      { name: "BIBA", logo: "/brands/biba.png" },
      { name: "Label Ritu Kumar", logo: "/brands/rk.png" }, // Filename from screenshot
      { name: "Rare Rabbit", logo: "/brands/rare-rabbit.jpeg" }, // Note: .jpeg extension
      { name: "ASICS", logo: "/brands/asics.png" },
      { name: "Jack & Jones", logo: "/brands/jacknjones.png" }
    ]
  },
  {
    id: 'bags',
    title: "Bags & Luggage",
    color: "#0ea5e9",
    brands: [
      { name: "American Tourister", logo: "/brands/american-tourister.png" },
      { name: "Samsonite", logo: "/brands/samsonite.png" },
      { name: "Delsey", logo: "/brands/delsey.png" },
      { name: "Skybags", logo: "/brands/skybags.png" },
      { name: "Swiss Military", logo: "/brands/swiss-military.png" },
      { name: "TUMI", logo: "/brands/tumi.png" },
      { name: "Ducati", logo: "/brands/ducati.png" },
      { name: "Wildcraft", logo: "/brands/wildcraft.png" },
      { name: "Safari", logo: "/brands/safari.avif" } // Note: .avif extension
    ]
  },
  {
    id: 'pens',
    title: "Premium Pens & Writing",
    color: "#8b5cf6",
    brands: [
      { name: "Mont Blanc", logo: "/brands/idsXqKXPat_1767788576075.png" }, // Assuming the unique ID file is Mont Blanc or similar
      { name: "Parker", logo: "/brands/parker.png" },
      { name: "Cross", logo: "/brands/cross.png" },
      { name: "Sheaffer", logo: "/brands/sheffer.png" }, // Filename from screenshot
      { name: "Waterman", logo: "/brands/waterman.png" },
      { name: "Lamy", logo: "/brands/lamy.png" },
      { name: "Faber-Castell", logo: "/brands/faber-castell.png" },
      { name: "Cerruti 1881", logo: "/brands/cerruti.png" }
    ]
  },
  {
    id: 'electronics',
    title: "Electronics & Appliances",
    color: "#f59e0b",
    brands: [
      { name: "Philips", logo: "/brands/philips.png" },
      { name: "Dyson", logo: "/brands/dyson.png" },
      { name: "Sharp", logo: "/brands/sharp.png" },
      { name: "Amazon", logo: "/brands/amazon.png" },
      { name: "Honeywell", logo: "/brands/honeywell.png" },
      { name: "Prestige", logo: "/brands/prestige.jpeg" }, // Note: .jpeg extension
      { name: "Milton", logo: "/brands/milton.png" },
      { name: "Borosil", logo: "/brands/borosil.png" }
    ]
  },
  {
    id: 'automobile',
    title: "Automobile",
    color: "#dc2626",
    brands: [
      { name: "Citroen", logo: "/brands/citroen.png" }
    ]
  },
  {
    id: 'drinkware',
    title: "Drinkware & Bottles",
    color: "#06b6d4",
    brands: [
      { name: "Tupperware", logo: "/brands/tupperware.png" },
      { name: "Cello", logo: "/brands/cello.png" },
      { name: "Nayasa", logo: "/brands/nayasa.png" },
      { name: "Wonderchef", logo: "/brands/wonderchef.png" },
      { name: "Signoraware", logo: "/brands/singoraware.png" } // Filename from screenshot
    ]
  }
];

// Get all brands flattened for the marquee
const allBrands = brandCategories.flatMap(cat =>
  cat.brands.map(brand => ({ ...brand, category: cat.id, color: cat.color }))
);

// --- COMPONENTS ---


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
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Adjust speed for desktop (slower) vs mobile (faster)
  const actualSpeed = isDesktop ? speed * 2.5 : speed;

  return (
    <div className="overflow-hidden py-4 relative">
      {/* Gradient masks for smooth fade in/out */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-8 md:gap-12"
        animate={{
          x: direction === 'left' ? ['0%', '-33.33%'] : ['-33.33%', '0%']
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: actualSpeed,
            ease: 'linear'
          }
        }}
      >
        {duplicatedBrands.map((brand, index) => (
          <div
            key={`${brand.name}-${index}`}
            className="flex-shrink-0 flex items-center justify-center min-w-[100px] h-16 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-full w-auto object-contain max-h-12"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const BrandCard = ({
  brand,
  index,
  isInView
}: {
  brand: { name: string; logo: string };
  index: number;
  isInView: boolean;
}) => (
  <motion.div
    className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex items-center justify-center h-[100px] hover:shadow-lg hover:border-[#EE4343]/30 transition-all duration-300 group cursor-pointer relative overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.3, delay: index * 0.02 }}
    whileHover={{ y: -4, scale: 1.02 }}
  >
    <img
      src={brand.logo}
      alt={brand.name}
      className="max-h-[60px] max-w-[90%] w-auto h-auto object-contain filter grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-300"
      loading="lazy"
    />
  </motion.div>
);

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
      className="mb-12"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-6">
        <span
          className="w-1.5 h-8 rounded-full"
          style={{ backgroundColor: category.color }}
        />
        <h3 className="text-xl md:text-2xl font-bold text-gray-800">
          {category.title}
        </h3>
        <span className="text-sm font-medium px-2 py-1 bg-gray-100 rounded-full text-gray-500">
          {category.brands.length}
        </span>
      </div>

      {/* Brands Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {category.brands.map((brand, brandIndex) => (
          <BrandCard
            key={brand.name}
            brand={brand}
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
      <div className="mb-16 md:mb-24 bg-white border-y border-gray-100 py-4">
        <MarqueeRow brands={row1} direction="left" speed={3} />
        <MarqueeRow brands={row2} direction="right" speed={4} />
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
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl shadow-2xl shadow-gray-200">
            <div className="text-white text-center sm:text-left">
              <p className="font-bold text-xl mb-1">Looking for a specific brand?</p>
              <p className="text-gray-400 text-sm">We can source almost any brand for your corporate needs</p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#EE4343] text-white font-medium rounded-full hover:bg-[#d63a3a] transition-all duration-300 whitespace-nowrap shadow-lg shadow-red-900/20"
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