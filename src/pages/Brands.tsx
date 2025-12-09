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

const Brands = () => {
  const [sortBy, setSortBy] = useState("featured");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const brands = [
    {
      id: 1,
      name: "Epson",
      category: "Printers",
      logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&q=80",
      description: "Leading manufacturer of premium printers and sublimation solutions. Epson offers cutting-edge technology for professional printing needs.",
      products: ["EcoTank Printers", "SureColor Series", "Sublimation Inks"],
      featured: true
    },
    {
      id: 2,
      name: "Roland",
      category: "Equipment",
      logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&q=80",
      description: "Professional printing and cutting equipment trusted by businesses worldwide for exceptional quality and reliability.",
      products: ["Wide Format Printers", "Vinyl Cutters", "UV Printers"],
      featured: true
    },
    {
      id: 3,
      name: "Mimaki",
      category: "Printers",
      logo: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&q=80",
      description: "Advanced digital printing technology leader providing innovative solutions for textile and industrial printing applications.",
      products: ["Textile Printers", "Flatbed Printers", "Cutting Plotters"],
      featured: true
    },
    {
      id: 4,
      name: "Sawgrass",
      category: "Sublimation",
      logo: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&q=80",
      description: "The world's leading sublimation printing solutions provider, offering complete systems and superior quality inks.",
      products: ["Virtuoso Series", "SubliJet-UHD Inks", "ChromaBlast Systems"],
      featured: true
    },
    {
      id: 5,
      name: "Ricoh",
      category: "Equipment",
      logo: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&q=80",
      description: "Industrial printing solutions for commercial and production environments with unmatched reliability and performance.",
      products: ["Production Printers", "Wide Format", "Digital Presses"],
      featured: false
    },
    {
      id: 6,
      name: "Brother",
      category: "Printers",
      logo: "https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=500&q=80",
      description: "Quality printing and labeling solutions known for durability, efficiency, and innovative technology.",
      products: ["Industrial Printers", "Label Printers", "Mobile Solutions"],
      featured: false
    },
    {
      id: 7,
      name: "HP",
      category: "Equipment",
      logo: "https://images.unsplash.com/photo-1585399000684-d2f72660f092?w=500&q=80",
      description: "Wide format printing solutions and latex technology for professional graphics and signage applications.",
      products: ["Latex Printers", "DesignJet Series", "PageWide XL"],
      featured: false
    },
    {
      id: 8,
      name: "Canon",
      category: "Equipment",
      logo: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80",
      description: "Professional imaging equipment and printing systems delivering exceptional quality and color accuracy.",
      products: ["imagePROGRAF", "Production Printers", "Large Format"],
      featured: false
    },
    {
      id: 9,
      name: "Mutoh",
      category: "Printers",
      logo: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&q=80",
      description: "High-performance digital printing solutions for sign graphics, textile, and industrial applications.",
      products: ["ValueJet Series", "Dye Sublimation", "UV Printers"],
      featured: false
    },
    {
      id: 10,
      name: "3M",
      category: "Materials",
      logo: "https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=500&q=80",
      description: "Premium vinyl films, tapes, and substrate materials for professional sign making and vehicle graphics.",
      products: ["Vinyl Films", "Laminating Films", "Reflective Materials"],
      featured: false
    },
    {
      id: 11,
      name: "Avery Dennison",
      category: "Materials",
      logo: "https://images.unsplash.com/photo-1585399000684-d2f72660f092?w=500&q=80",
      description: "Leading manufacturer of pressure-sensitive materials and solutions for visual communications.",
      products: ["Cast Vinyl", "Digital Films", "Specialty Materials"],
      featured: false
    },
    {
      id: 12,
      name: "Stahls'",
      category: "Heat Transfer",
      logo: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80",
      description: "Industry leader in heat printing technology, offering heat presses and transfer materials.",
      products: ["Heat Presses", "CAD-CUT Materials", "Hotronix Presses"],
      featured: false
    }
  ];

  const categories = ["all", "Printers", "Equipment", "Sublimation", "Materials", "Heat Transfer"];

  const filteredBrands = brands.filter(brand =>
    selectedCategory === "all" ? true : brand.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary/10 via-white to-primary/5">
        <div className="container mx-auto px-6">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-bold mb-8 text-black"
          >
            Brands We Offer
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-xl text-gray-700 mb-12 max-w-3xl leading-relaxed"
          >
            We partner with the world's most trusted brands to bring you premium quality products,
            cutting-edge technology, and unmatched reliability for all your printing and sublimation needs.
          </motion.p>

          {/* Filters and Sort */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b pb-6 mb-8">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-black">Category:</span>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat === "all" ? "All Categories" : cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-lg text-gray-600">
                {filteredBrands.length} brand{filteredBrands.length !== 1 ? 's' : ''}
              </p>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-black">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="name">Name: A to Z</SelectItem>
                    <SelectItem value="category">Category</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Brands Grid */}
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredBrands.map((brand) => (
              <motion.div
                key={brand.id}
                variants={fadeInUp}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-primary"
              >
                <div className="relative overflow-hidden bg-gray-100 aspect-video">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                  {brand.featured && (
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-black">
                    {brand.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-primary transition-colors">
                    {brand.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {brand.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-black uppercase tracking-wide">
                      Key Products:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {brand.products.map((product, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 text-center bg-primary/5 rounded-2xl p-12 border-2 border-primary/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              We work with many more brands and can source products specifically for your needs.
              Contact us to discuss your requirements.
            </p>
            <button
              onClick={() => window.location.href = '/contact'}
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Contact Us Today
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Brands;
