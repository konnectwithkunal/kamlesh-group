import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../animation/variants";
import { useNavigate } from "react-router-dom";

const Brands = () => {
  const navigate = useNavigate();

  const brands = [
    {
      id: 1,
      name: "Epson",
      logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80",
      description: "Premium printers and sublimation solutions"
    },
    {
      id: 2,
      name: "Roland",
      logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80",
      description: "Professional printing equipment"
    },
    {
      id: 3,
      name: "Mimaki",
      logo: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&q=80",
      description: "Advanced digital printing technology"
    },
    {
      id: 4,
      name: "Sawgrass",
      logo: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&q=80",
      description: "Sublimation printing leader"
    },
    {
      id: 5,
      name: "Ricoh",
      logo: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&q=80",
      description: "Industrial printing solutions"
    },
    {
      id: 6,
      name: "Brother",
      logo: "https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=400&q=80",
      description: "Quality printing and labeling"
    },
    {
      id: 7,
      name: "HP",
      logo: "https://images.unsplash.com/photo-1585399000684-d2f72660f092?w=400&q=80",
      description: "Wide format printing solutions"
    },
    {
      id: 8,
      name: "Canon",
      logo: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&q=80",
      description: "Professional imaging equipment"
    }
  ];

  return (
    <section className="py-20 bg-white" id="brands">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6"
          >
            Brands We Offer
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-700 max-w-3xl mx-auto mb-8"
          >
            We partner with the world's leading brands to deliver premium quality products and exceptional printing solutions for your business needs.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {brands.map((brand) => (
            <motion.div
              key={brand.id}
              variants={fadeInUp}
              className="group relative bg-gray-50 rounded-lg p-8 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-primary"
              onClick={() => navigate("/brands")}
            >
              <div className="aspect-square relative overflow-hidden rounded-lg mb-4">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2 group-hover:text-primary transition-colors">
                {brand.name}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {brand.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={() => navigate("/brands")}
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            View All Brands
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
