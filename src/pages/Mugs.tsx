import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { fadeInUp } from "../animation/variants";
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

  const mugProducts = [
    {
      id: 1,
      name: "White Glossy Mug",
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&q=80",
      price: 12.99,
      sizes: ["11oz", "15oz"],
    },
    {
      id: 2,
      name: "Black Matte Mug",
      image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=500&q=80",
      price: 14.99,
      sizes: ["11oz", "15oz"],
    },
    {
      id: 3,
      name: "Ceramic Coffee Mug",
      image: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=500&q=80",
      price: 11.99,
      sizes: ["11oz", "15oz"],
    },
    {
      id: 4,
      name: "Travel Mug",
      image: "https://images.unsplash.com/photo-1534256516093-ce5437f92d7b?w=500&q=80",
      price: 18.99,
      sizes: ["16oz", "20oz"],
    },
    {
      id: 5,
      name: "Stainless Steel Mug",
      image: "https://images.unsplash.com/photo-1565696157652-bbb07261ce33?w=500&q=80",
      price: 16.99,
      sizes: ["11oz", "15oz"],
    },
    {
      id: 6,
      name: "Color Changing Mug",
      image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=500&q=80",
      price: 15.99,
      sizes: ["11oz"],
    },
    {
      id: 7,
      name: "Enamel Camping Mug",
      image: "https://images.unsplash.com/photo-1578297886026-f7b34e8e2b5c?w=500&q=80",
      price: 13.99,
      sizes: ["12oz"],
    },
    {
      id: 8,
      name: "Two-Tone Mug",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&q=80",
      price: 12.99,
      sizes: ["11oz", "15oz"],
    },
    {
      id: 9,
      name: "Frosted Glass Mug",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80",
      price: 14.49,
      sizes: ["11oz", "15oz"],
    },
    {
      id: 10,
      name: "Classic White Mug",
      image: "https://images.unsplash.com/photo-1514315384763-ba401779410f?w=500&q=80",
      price: 10.99,
      sizes: ["11oz", "15oz"],
    },
    {
      id: 11,
      name: "Insulated Tumbler",
      image: "https://images.unsplash.com/photo-1584557091304-1c0d0b3e6c0e?w=500&q=80",
      price: 19.99,
      sizes: ["20oz", "30oz"],
    },
    {
      id: 12,
      name: "Vintage Style Mug",
      image: "https://images.unsplash.com/photo-1571863533956-01c88e79957e?w=500&q=80",
      price: 13.49,
      sizes: ["11oz", "15oz"],
    },
  ];

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
