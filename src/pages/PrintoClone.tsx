import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, Star, ChevronDown, ChevronRight, Phone, MessageCircle, Truck, RefreshCw, HelpCircle, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

// Types for product data
interface Product {
  id: number;
  title: string;
  price: string;
  unit: string;
  image: string;
  tag?: string;
  specs: string[];
}

interface CategorySection {
  title: string;
  description: string;
  products: Product[];
}

const PrintoClone: React.FC = () => {
  // Mock Data based on the actual Printo page content
  const heroData = {
    title: "Wear Your Story with Custom Apparel",
    subtitle: "Make your wardrobe as unique as you! Personalized apparel that keeps your favourite moments close.",
    image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=2069&auto=format&fit=crop" // Placeholder for hero
  };

  const categories = [
    { name: "Round Neck T-Shirts", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60" },
    { name: "Polo T-Shirts", img: "https://images.unsplash.com/photo-1626245052309-906967735390?w=500&auto=format&fit=crop&q=60" },
    { name: "Hoodies", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format&fit=crop&q=60" },
    { name: "Caps", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&auto=format&fit=crop&q=60" },
  ];

  const hoodiesSection: CategorySection = {
    title: "Custom Sweatshirts and Hoodies",
    description: "Make every layer speak your brand's vibe with custom hoodies designed for comfort and impact. From high-quality custom hoodie printing to premium custom embroidered hoodies, we bring your brand to life stitch by stitch.",
    products: [
      {
        id: 1,
        title: "Eco Classic High Neck Jacket",
        price: "₹1153",
        unit: "for 1 Jacket",
        image: "https://printo-s3.dietpixels.net/Eco-jacket_1762369165.jpg", // Actual URL found
        specs: ["320GSM Recycled Cotton Blend", "French Terry Inner", "Classic High-neck Silhouette"]
      },
      {
        id: 2,
        title: "Ultra Premium Hoodie",
        price: "₹1516",
        unit: "for 1 Hoodie",
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&auto=format&fit=crop&q=60",
        tag: "Bestseller",
        specs: ["320 GSM Premium Cotton Blend", "Superior French Terry Inner", "Bio-washed & Pre-shrunk"]
      },
      {
        id: 3,
        title: "Eco Classic Hoodie",
        price: "₹897",
        unit: "for 1 Hoodie",
        image: "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=500&auto=format&fit=crop&q=60",
        specs: ["320 GSM French Terry", "Sanitized Recycled Blend", "Durable Zip & Hood"]
      },
      {
        id: 4,
        title: "High Neck Zipper Jacket",
        price: "₹1533",
        unit: "for 1 Jacket",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop&q=60",
        specs: ["320 GSM PolyCotton", "Soft French Terry Lining", "Printing & Embroidery options"]
      }
    ]
  };

  const polosSection: CategorySection = {
    title: "Custom Polo T-shirts",
    description: "Boost your brand's visibility with custom polo t-shirt printing that delivers style and substance. Whether you need custom polo t-shirts for your team, logo printed polo t-shirts for giveaways, or corporate polo t-shirts to unify your office look, we've got it covered.",
    products: [
      {
        id: 5,
        title: "Ultra Premium Polo",
        price: "₹975",
        unit: "for 1 Tshirt",
        image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=500&auto=format&fit=crop&q=60",
        specs: ["260 GSM Premium Pique Knit", "Smart Contrast Plackets", "Bio-washed & Pre-shrunk"]
      },
      {
        id: 6,
        title: "Cotton Premium Polo",
        price: "₹807",
        unit: "for 1 Tshirt",
        image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&auto=format&fit=crop&q=60",
        specs: ["200 GSM Honeycomb Knit", "Super Soft Cotton", "Pre-shrunk for True Fit"]
      },
      {
        id: 7,
        title: "Dry Fit Polo",
        price: "₹838",
        unit: "for 1 T-shirt",
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500&auto=format&fit=crop&q=60",
        specs: ["160 gsm Dot-Knit Polyester", "Breathable, Quick-Dry", "Built for Sports & Active Wear"]
      },
      {
        id: 8,
        title: "Eco Classic Polo",
        price: "₹576",
        unit: "for 1 Tshirt",
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=60",
        specs: ["240 GSM eco-Pique knit", "Never Dyed - Recycled Blend", "Natural Tone Finish"]
      }
    ]
  };

  const roundNeckSection: CategorySection = {
    title: "Custom Round Neck T-shirts",
    description: "Looking to make your brand wearable? Our custom t-shirt printing service brings your vision to life - be it for startup launches, team events, or college fests. From round neck t-shirt printing to eco-friendly t-shirt printing, choose materials and methods that match your values.",
    products: [
      {
        id: 9,
        title: "Eco Classic Round Neck",
        price: "₹369",
        unit: "for 1 Tshirt",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60",
        specs: ["180 GSM Recycled Yarn Knit", "GRS Certified & Pre-Shrunk", "Stretch Rib & Shaped Fit"]
      },
      {
        id: 10,
        title: "Cotton Premium Round Neck",
        price: "₹489",
        unit: "for 1 Tshirt",
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format&fit=crop&q=60",
        specs: ["180 GSM Combed Cotton", "Pre-Shrunk & Bio-Washed", "Shaped Body Fit"]
      },
      {
        id: 11,
        title: "Dry Fit Round Neck",
        price: "₹576",
        unit: "for 1 T-shirt",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&auto=format&fit=crop&q=60",
        specs: ["160 gsm Dot-Knit Polyester", "Breathable, Quick-Dry", "Built for Sports & Active Wear"]
      }
    ]
  };

  const capsSection: CategorySection = {
    title: "Custom Caps",
    description: "Whether you're suiting up your delivery crew, planning a high-energy sports day, or building the perfect welcome pack, our range of custom caps has you covered literally. From stylish piping caps to classic embroidered caps.",
    products: [
      {
        id: 12,
        title: "Customized Line stitching caps",
        price: "₹203",
        unit: "each for 50 Caps",
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&auto=format&fit=crop&q=60",
        specs: ["100% Cotton | Line Stitch", "Custom Embroidery Finish", "MOQ: 50 Units"]
      },
      {
        id: 13,
        title: "Customized Piping caps",
        price: "₹203",
        unit: "each for 50 Caps",
        image: "https://images.unsplash.com/photo-1556306535-38febf6782e7?w=500&auto=format&fit=crop&q=60",
        specs: ["100% Cotton | Two-Tone", "Embroidery Ready", "Velcro Fit"]
      },
      {
        id: 14,
        title: "Customized Classic Caps",
        price: "₹329",
        unit: "for 5 Caps",
        image: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=500&auto=format&fit=crop&q=60",
        specs: ["100% Cotton", "Digital Print Velcro Strap", "MOQ: 5 Units"]
      }
    ]
  };

  const faqs = [
    { q: "Can I print just one t-shirt for personal use?", a: "You sure can! Start from just 1 unit perfect for gifts, small events, or trying out a new design before going big with bulk t-shirt printing." },
    { q: "How long does it take to get my custom apparel delivered?", a: "Standard delivery takes 3–5 business days, and if you're in a hurry, you can opt for Express Delivery or Store Pickup at select locations." },
    { q: "Can I upload my own design, or do you offer templates?", a: "You can do both! Upload your own logo/artwork or choose from ready-to-go templates. Need help? Our design team can assist you with edits too." },
    { q: "Do you offer eco-friendly apparel options?", a: "Yes, we do! Our Eco-Classic T-Shirts and Hoodies are made using recycled cotton blends, perfect for businesses that want to go green while staying stylish." },
  ];

  const ProductCard = ({ product }: { product: Product }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden group">
      <div className="relative h-64 overflow-hidden bg-gray-50">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        {product.tag && (
          <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
            {product.tag}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 text-lg mb-1">{product.title}</h3>
        <ul className="text-xs text-gray-500 mb-3 space-y-1">
          {product.specs.slice(0, 2).map((spec, idx) => (
            <li key={idx} className="flex items-center">
              <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>{spec}
            </li>
          ))}
        </ul>
        <div className="flex items-end justify-between mt-4">
          <div>
            <span className="text-lg font-bold text-gray-900">{product.price}</span>
            <span className="text-xs text-gray-500 ml-1">{product.unit}</span>
          </div>
          <button className="text-blue-600 text-sm font-medium hover:text-blue-800 flex items-center">
            View Details <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen flex flex-col">
      
      {/* Top Banner */}
      <div className="bg-[#5c2d91] text-white text-xs py-2 px-4 text-center">
        4 Hrs Express Delivery now in Bengaluru, Hyderabad, Chennai & Delhi
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Menu className="md:hidden text-gray-600" />
            <a href="/" className="text-2xl font-bold text-[#5c2d91] flex items-center gap-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png" alt="Printo Logo" className="h-8 w-auto hidden" /> {/* Placeholder for logo if direct link fails */}
              <span className="tracking-tighter">printo</span>
            </a>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8 relative">
            <input 
              type="text" 
              placeholder="Search for products..." 
              className="w-full border border-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:border-[#5c2d91] text-sm"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <div className="hidden md:flex items-center gap-1 cursor-pointer hover:text-[#5c2d91]">
              <Truck size={18} />
              <span>Track Order</span>
            </div>
            <div className="hidden md:flex items-center gap-1 cursor-pointer hover:text-[#5c2d91]">
              <User size={18} />
              <span>Log In</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#5c2d91]">
              <ShoppingCart size={18} />
              <span className="hidden md:inline">Cart (0)</span>
            </div>
          </div>
        </div>
        
        {/* Navigation Links */}
        <div className="border-t border-gray-100 hidden md:block">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-8 text-sm font-medium py-3 text-gray-700">
              <a href="#" className="hover:text-[#5c2d91]">Home</a>
              <a href="#" className="hover:text-[#5c2d91] text-[#5c2d91]">T-Shirts</a>
              <a href="#" className="hover:text-[#5c2d91]">Mugs</a>
              <a href="#" className="hover:text-[#5c2d91]">Photo Books</a>
              <a href="#" className="hover:text-[#5c2d91]">Stationery</a>
              <a href="#" className="hover:text-[#5c2d91]">Corporate Gifts</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-3 text-xs text-gray-500">
          Home / <span className="text-gray-900">T-Shirts</span>
        </div>

        {/* Hero Section */}
        <section className="relative bg-white mb-8">
          <div className="container mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">{heroData.title}</h1>
              <p className="text-lg text-gray-600 mb-8">{heroData.subtitle}</p>
              <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
                {categories.map((cat, idx) => (
                  <div key={idx} className="flex flex-col items-center min-w-[80px] cursor-pointer group">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#5c2d91] transition-all mb-2">
                      <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xs font-semibold text-center">{cat.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-lg h-64 md:h-96 w-full">
              <img src={heroData.image} alt="Hero" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Product Sections */}
        {[hoodiesSection, polosSection, roundNeckSection, capsSection].map((section, idx) => (
          <section key={idx} className="container mx-auto px-4 mb-16">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{section.title}</h2>
              <p className="text-gray-600 max-w-3xl text-sm md:text-base leading-relaxed">{section.description}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {section.products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        ))}

        {/* Unlock Possibilities */}
        <section className="bg-[#f3f4f6] py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-8">Unlock endless possibilities with Custom Apparel</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['Custom Dry-Fit T-shirts', 'Sustainable T-shirts', 'Staff Wears', 'Bulk T-shirts', 'Employee Kits'].map((item, i) => (
                <span key={i} className="bg-white px-6 py-3 rounded-full shadow-sm text-sm font-medium hover:shadow-md cursor-pointer transition-shadow">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Bulk Orders */}
        <section className="bg-[#5c2d91] text-white py-12">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:w-2/3">
              <h2 className="text-3xl font-bold mb-2">Bulk Orders</h2>
              <h3 className="text-xl font-semibold mb-4">Need Help With Custom Polo T-Shirts for Your Team?</h3>
              <p className="opacity-90 mb-6">Our experts are here to support you! Get volume pricing, logo advice, and print file support.</p>
              <ul className="list-disc list-inside opacity-80 text-sm space-y-1 mb-6">
                <li>Guidance on choosing polo types & printing options.</li>
                <li>Volume pricing for custom polo shirts with logos.</li>
              </ul>
              <button className="bg-white text-[#5c2d91] px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors">
                Talk To Us
              </button>
            </div>
            <div className="md:w-1/3 flex justify-center">
               <img src="https://images.unsplash.com/photo-1556742049-09329e2e2a6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Support" className="rounded-full w-48 h-48 object-cover border-4 border-white/20" />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-[#5c2d91] flex-shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-sm text-gray-600 ml-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section className="bg-white py-12 border-t border-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold">Customer Reviews</h2>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex text-yellow-400"><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" className="text-yellow-400/50" /></div>
                  <span className="font-semibold">4.5 star rating</span>
                  <span className="text-gray-400 text-sm">(7 Reviews)</span>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Kashish Parpiani", date: "Sat, 19 Apr", text: "Great quality print. Good quality shirt. And very grateful for on-time delivery as requested." },
                { name: "Vishal Somai", date: "Mon, 21 Apr", text: "Good!" },
                { name: "David Spooner", date: "Sat, 17 May", text: "Good!" }
              ].map((review, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center gap-2 mb-3">
                     <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center font-bold text-gray-600">{review.name[0]}</div>
                     <div>
                       <p className="text-sm font-bold">{review.name}</p>
                       <p className="text-xs text-gray-400">{review.date}</p>
                     </div>
                  </div>
                  <div className="flex text-yellow-400 text-xs mb-2"><Star fill="currentColor" size={12} /><Star fill="currentColor" size={12} /><Star fill="currentColor" size={12} /><Star fill="currentColor" size={12} /><Star fill="currentColor" size={12} /></div>
                  <p className="text-gray-700 text-sm">"{review.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 text-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold text-lg mb-4 text-[#a855f7]">Our Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Corporate Gifts</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-[#a855f7]">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Business Solutions</a></li>
                <li><a href="#" className="hover:text-white">Find Stores</a></li>
                <li><a href="#" className="hover:text-white">My Account</a></li>
                <li><a href="#" className="hover:text-white">Track Order</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-[#a855f7]">Important Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Delivery & Return Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-[#a855f7]">Connect with Us</h4>
              <div className="flex gap-4 mb-6">
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#5c2d91]"><Instagram size={18} /></a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#5c2d91]"><Facebook size={18} /></a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#5c2d91]"><Twitter size={18} /></a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#5c2d91]"><Linkedin size={18} /></a>
              </div>
              <p className="text-gray-500 text-xs">
                © 2025 Printo Document Services Pvt. Ltd. <br/> All Rights Reserved.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
             <div className="flex items-center gap-2">
               <span className="font-bold text-xl tracking-tighter">printo</span>
               <span className="text-xs text-gray-500">India's most trusted Print & Gifting Brand</span>
             </div>
             <div className="flex gap-2 text-gray-500 text-xs">
               <span>Bangalore</span> | <span>Gurgaon</span> | <span>New Delhi</span> | <span>Chennai</span> | <span>Hyderabad</span> | <span>Pune</span>
             </div>
          </div>
        </div>
      </footer>
      
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 bg-[#25d366] text-white p-4 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform z-50">
        <MessageCircle size={24} />
      </div>

    </div>
  );
};

export default PrintoClone;