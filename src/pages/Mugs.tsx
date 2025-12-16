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
    <div className="min-h-screen bg-white">
      <Header />

      {/* Red Hero Section */}
      <section className="bg-[#EF4343] grid-overlay-light pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-6xl md:text-8xl font-bold mb-8 text-white"
            >
              Mugs
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-xl md:text-2xl text-white max-w-2xl leading-relaxed"
            >
              Discover our premium collection of customizable mugs perfect for any occasion.
              From classic ceramic to modern insulated designs, find the perfect mug for your needs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          {/* Filter/Sort Section */}
          <div className="flex flex-wrap items-center justify-between border-b pb-6 mb-8 gap-4">
            <p className="text-gray-500">
              {mugProducts.length} products
            </p>

            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-black">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px] bg-black text-white border-none rounded-md h-10">
                  <SelectValue placeholder="Featured" />
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {mugProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                className="group cursor-pointer"
                onClick={() => navigate(`/mugs/${product.id}`)}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden bg-[#EAEAEA] rounded-xl mb-4 aspect-square">
                  {/* Default Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      product.hoverImage ? "group-hover:opacity-0" : ""
                    }`}
                  />
                  {/* Hover Image */}
                  {product.hoverImage && (
                    <img
                      src={product.hoverImage}
                      alt={`${product.name} alternate view`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  )}
                </div>

                {/* Product Info */}
                <div>
                  <h3 className="text-base font-semibold text-black group-hover:underline decoration-1 underline-offset-4 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">By Kamlesh Group of Companies</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-bold text-primary">
                        ${product.price}
                      </p>
                      <p className="text-xs text-gray-500">
                        {product.sizes.join(", ")}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-primary group-hover:text-primary/80 transition-colors">
                      View Details →
                    </span>
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
