import { useState } from "react";
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

  const mugProducts = [
    {
      id: 1,
      name: "Ceramic Mugs (11oz\\15oz\\20oz)",
      image: "https://printify.com/cdn-cgi/image/width=320,quality=90,format=avif/https://images.printify.com/api/catalog/66dae136fc79245ff401e2c5.jpg",
      hoverImage: "https://printify.com/cdn-cgi/image/width=320,quality=90,format=avif/https://images.printify.com/api/catalog/66d6f521b03e7e858b0c89f6.jpg"
    },
    {
      id: 2,
      name: "Two-Tone Coffee Mug, 11oz",
      image: "https://printify.com/cdn-cgi/image/width=320,quality=90,format=avif/https://images.printify.com/api/catalog/66d88b702b79a14b010f9033.jpg",
      hoverImage: "https://printify.com/cdn-cgi/image/width=320,quality=90,format=avif/https://images.printify.com/api/catalog/66d88b6f3e7448d5f80acb13.jpg"
    },
    {
      id: 3,
      name: "Black Coffee Cup, 11oz",
      image: "https://printify.com/cdn-cgi/image/width=320,quality=90,format=avif/https://images.printify.com/api/catalog/66d59099145f601bbe0df503.jpg",
      hoverImage: "https://printify.com/cdn-cgi/image/width=320,quality=90,format=avif/https://images.printify.com/api/catalog/66d590985a89615b7f0cf626.jpg"
    },
    {
      id: 4,
      name: "Colorful Mugs, 11oz",
      image: "https://printify.com/cdn-cgi/image/width=320,quality=90,format=avif/https://images.printify.com/api/catalog/66d1c18a9722d8c74d080ba9.jpg",
      hoverImage: "https://printify.com/cdn-cgi/image/width=320,quality=90,format=avif/https://images.printify.com/api/catalog/66d1c189795f4d42d40e31ea.jpg"
    },
    {
      id: 5,
      name: "Accent Mugs, 11oz",
      image: "https://printify.com/cdn-cgi/image/width=320,quality=90,format=avif/https://images.printify.com/api/catalog/66cdb3dcaf9e7dd2e20af443.jpg",
      hoverImage: "https://printify.com/cdn-cgi/image/width=320,quality=90,format=avif/https://images.printify.com/api/catalog/66f51ab0528b1c85ba01e493.jpg"
    },
    {
      id: 6,
      name: "Heart-Shaped Mug",
      image: "https://printify.com/cdn-cgi/image/width=320,quality=90,format=avif/https://images.printify.com/api/catalog/66cf273e4946a53c0d08e834.jpg",
      hoverImage: "https://printify.com/cdn-cgi/image/width=320,quality=90,format=avif/https://images.printify.com/api/catalog/66cf273c4946a53c0d08e833.jpg"
    },
    {
      id: 7,
      name: "Magic Mug",
      image: "https://printify.com/cdn-cgi/image/width=320,quality=90,format=avif/https://images.printify.com/api/catalog/66d06f3e1f66afa463006102.jpg",
      hoverImage: "https://printify.com/cdn-cgi/image/width=320,quality=90,format=avif/https://images.printify.com/api/catalog/66d06f401f66afa463006103.jpg"
    },
    {
      id: 8,
      name: "Latte Mug, 12oz",
      image: "https://printify.com/cdn-cgi/image/width=320,quality=90,format=avif/https://images.printify.com/api/catalog/66cd880123cb8ec974071c46.jpg",
      hoverImage: "https://printify.com/cdn-cgi/image/width=320,quality=90,format=avif/https://images.printify.com/api/catalog/66cd87ff9debc007dc092902.jpg"
    },
    {
      id: 9,
      name: "Color-Changing Mug, 11oz",
      image: "https://printify.com/cdn-cgi/image/width=320,quality=90,format=avif/https://images.printify.com/api/catalog/66d5917d454c143567072543.jpg",
      hoverImage: "https://printify.com/cdn-cgi/image/width=320,quality=90,format=avif/https://images.printify.com/api/catalog/66d5917c9bcb23130900a2a4.jpg"
    },
    {
      id: 10,
      name: "Mason Jar",
      image: "https://printify.com/cdn-cgi/image/width=320,quality=90,format=avif/https://images.printify.com/api/catalog/66cc71d3d0f7f62df0037b98.jpg",
      hoverImage: "https://printify.com/cdn-cgi/image/width=320,quality=90,format=avif/https://images.printify.com/api/catalog/66cc71d24ba8f64842057242.jpg"
    },
    {
      id: 11,
      name: "Frosted Glass Mug",
      image: "https://printify.com/cdn-cgi/image/width=320,quality=90,format=avif/https://images.printify.com/api/catalog/66d577c16a5e4d4516004be8.jpg",
      hoverImage: "https://printify.com/cdn-cgi/image/width=320,quality=90,format=avif/https://images.printify.com/api/catalog/66d577c06a5e4d4516004be7.jpg"
    },
    {
      id: 12,
      name: "White Ceramic Mug, 11oz and 15oz",
      image: "https://printify.com/cdn-cgi/image/width=320,quality=90,format=avif/https://images.printify.com/api/catalog/66cda8ab4b912339550e2f02.jpg",
      hoverImage: "https://printify.com/cdn-cgi/image/width=320,quality=90,format=avif/https://images.printify.com/api/catalog/66cda8aa743d7f18ad0b2a83.jpg"
    },
    {
      id: 13,
      name: "Accent Coffee Mug (11, 15oz)",
      image: "https://printify.com/cdn-cgi/image/width=320,quality=90,format=avif/https://images.printify.com/api/catalog/66d6f97d50ee8a97570253e3.jpg",
      hoverImage: null 
    },
    {
      id: 14,
      name: "Ceramic Mug, (11oz, 15oz)",
      image: "https://printify.com/cdn-cgi/image/width=320,quality=90,format=avif/https://images.printify.com/api/catalog/66d94e6bab0893d4fe01b186.jpg",
      hoverImage: null 
    },
    {
      id: 15,
      name: "Black Mug (11oz, 15oz)",
      image: "https://printify.com/cdn-cgi/image/width=320,quality=90,format=avif/https://images.printify.com/api/catalog/66cc8b04c77dfeb419012646.jpg",
      hoverImage: "https://printify.com/cdn-cgi/image/width=320,quality=90,format=avif/https://images.printify.com/api/catalog/66cc8afaa8cab123e602b234.jpg"
    },
    {
      id: 16,
      name: "Tapered Glass Mug, 15.5 oz (Engraving)",
      image: "https://printify.com/cdn-cgi/image/width=320,quality=90,format=avif/https://images.printify.com/api/catalog/6931a308ca89167bd1096702.jpg",
      hoverImage: "https://printify.com/cdn-cgi/image/width=320,quality=90,format=avif/https://images.printify.com/api/catalog/6931a30393146626640e3e42.jpg"
    },
    {
      id: 17,
      name: "Sipper Glass with Straw, 16oz (Engraving)",
      image: "https://printify.com/cdn-cgi/image/width=320,quality=90,format=avif/https://images.printify.com/api/catalog/6874c127e1230089bb0e1c82.jpg",
      hoverImage: "https://printify.com/cdn-cgi/image/width=320,quality=90,format=avif/https://images.printify.com/api/catalog/688a250b23b511052d039f42.jpg"
    },
    {
      id: 18,
      name: "Frosted Glass Beer Mug",
      image: "https://printify.com/cdn-cgi/image/width=320,quality=90,format=avif/https://images.printify.com/api/catalog/66d58bd77af6f80eef04b33e.jpg",
      hoverImage: "https://printify.com/cdn-cgi/image/width=320,quality=90,format=avif/https://images.printify.com/api/catalog/66d58bd57dd31e0a3b0ecd13.jpg"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Existing Header Component */}
      <Header />

      {/* Red Hero Section */}
      <section className="bg-[#EF4343] grid-overlay-light pt-20 pb-20">
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
                {/* Product Title */}
                <h3 className="text-base font-semibold text-black group-hover:underline decoration-1 underline-offset-4">
                  {product.name}
                </h3>
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