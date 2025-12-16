import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { fadeInUp } from "../animation/variants";
import { mugProducts } from "../data/mugProducts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Mugs = () => {
  const [sortBy, setSortBy] = useState("featured");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-white">
        <div className="container mx-auto px-6">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-bold mb-8 text-black capitalize"
          >
            Mugs
          </motion.h1>

          {/* Sort By Filter */}
          <div className="flex items-center justify-between border-b pb-6 mb-8">
            <p className="text-lg text-gray-600">
              {mugProducts.length} products
            </p>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-black">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name">Name: A to Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Subheading */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-xl text-gray-700 mb-12 max-w-3xl"
          >
            Discover our premium collection of customizable mugs perfect for any occasion.
            From classic ceramic to modern insulated designs, find the perfect mug for your needs.
          </motion.p>

          {/* Product Grid */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {mugProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                className="group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                onClick={() => navigate(`/mugs/${product.id}`)}
              >
                <div className="relative overflow-hidden bg-gray-100 aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-black group-hover:text-primary transition-colors duration-300 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">By Kamlesh Group of Companies</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xl font-bold text-primary">
                        ${product.price}
                      </p>
                      <p className="text-xs text-gray-500">
                        {product.sizes.join(", ")}
                      </p>
                    </div>
                    <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                      View Details →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mugs;
