import React from 'react';
import { motion, useInView } from 'framer-motion';

// Data for the brands section
const brands = [
  { name: "Mug Wale", link: "/mugs" },
  { name: "Corporate Gifting", link: "#" },
  { name: "KE Garments", link: "#" },
  { name: "Powerbook", link: "#" },
  { name: "Allure Space", link: "#", hasDot: true },
  { name: "Nars", link: "#", hasDot: true },
];

function About() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Reusable small arrow SVG for links
  const SmallArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );

  // Main navigation arrow SVG for the brands bar
  const NavArrowIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
  );

  return (
    <div id="about" className=" w-full bg-white relative grid-mob-light overflow-hidden flex flex-col justify-center">
      <motion.section
        ref={ref}
        className="w-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col justify-center py-20"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        
        {/* --- BLOCK 1: HEADING --- */}
        <motion.div
          className="w-full flex-none mb-4 md:mb-8"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal leading-none text-gray-800 text-left bg-transparent">
            Kamlesh Group of Companies
          </h1>
        </motion.div>


        {/* --- BLOCK 2: BRANDS --- */}
        <motion.div
          // UPDATED: Changed border-y to border-y-2 (thicker) and border-gray-200 to border-gray-300 (darker)
          className="w-full flex-none flex items-center justify-between border-y-2 border-gray-300 py-3 md:py-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
         

          <div className="flex-1 flex items-center justify-around overflow-x-auto mx-4 px-2 no-scrollbar">
            {brands.map((brand, index) => (
              <a
                key={index}
                href={brand.link}
                // ADDED: group (for hover targeting), hover:scale-105 (bigger), transition-all
                className="group flex items-center text-lg md:text-2xl font-medium text-gray-900 hover:text-black transition-all duration-300 ease-in-out hover:scale-105 whitespace-nowrap mx-4 cursor-pointer"
              >
                {/* MODIFIED: The dot is now always present in code but hidden (opacity-0) until hover (opacity-100) */}
                <span className="w-2 h-2 md:w-[10px] md:h-[10px] bg-gray-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                
                {brand.name}
                
                {/* Optional: You can also make the arrow appear/move on hover if desired, but kept simple for now */}
                
              </a>
            ))}
          </div>

         
        </motion.div>


        {/* --- BLOCK 3: ARROW (LEFT) & TEXT (RIGHT) --- */}
        <div className="flex-1 flex flex-col md:flex-row items-start gap-8 md:gap-4">
          
          {/* LEFT: Moving Arrow */}
          <motion.div
            className="w-24 md:w-32 flex-none mt-2" 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              animate={{ x: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-16 h-8 md:w-24 md:h-12 text-black"
            >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-full h-full"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
            </motion.div>
          </motion.div>

          {/* RIGHT: Body Text */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-xl md:text-2xl font-normal leading-relaxed text-gray-800">
                Kamlesh Group Brands - "Kamlesh Group is a diversified conglomerate with a rich history of innovation and excellence across various industries. We are committed to delivering high-quality products and services through our distinct brands, each a leader in its respective field. Our vision is to continually expand our horizons, fostering growth and creating value for our customers and stakeholders."
            </p>
          </motion.div>
        </div>

      </motion.section>
      
      <style jsx>{`
        /* UPDATED: Increased opacity from 0.04 to 0.08 for better visibility */
        .grid-mob-light {
          background-image: linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px);
          background-size: 40px 40px; 
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default About;