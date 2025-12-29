import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  Phone, 
  Mail, 
  Gift, 
  Users, 
  Truck,
  Shield,
  Clock,
  CheckCircle,
  Star
} from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Hero Banner Data
const heroBanners = [
  {
    id: 1,
    title: "Hampers That Celebrate New Beginnings",
    subtitle: "Curated hampers designed to delight this New Year.",
    cta: "Browse Hampers",
    link: "#hampers",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1200&q=80",
    gradient: "from-amber-900/80 to-amber-700/60"
  }
];

// Gift Kits Categories
const giftKits = [
  {
    id: 1,
    title: "Employee Engagement Kits",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80",
    link: "/corporate-gifting/employee-engagement-kits"
  },
  {
    id: 2,
    title: "Welcome Kits",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&q=80",
    link: "/corporate-gifting/welcome-kits"
  },
  {
    id: 3,
    title: "Awards & Trophies",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&q=80",
    link: "/corporate-gifting/gift-sets"
  }
];

// Promotional Products
const promotionalProducts = [
  {
    id: 1,
    title: "Sublimation Mugs",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&q=80",
    link: "/corporate-gifting/sublimation-mugs"
  },
  {
    id: 2,
    title: "Drinkware",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    link: "/corporate-gifting/drinkware"
  },
  {
    id: 3,
    title: "Apparel",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80",
    link: "/corporate-gifting/apparel"
  },
  {
    id: 4,
    title: "Gift Sets",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&q=80",
    link: "/corporate-gifting/gift-sets"
  },
  {
    id: 5,
    title: "Desk Accessories",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
    link: "/products/desk-accessories"
  },
  {
    id: 6,
    title: "Pens",
    image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=400&q=80",
    link: "/products/pens"
  },
  {
    id: 7,
    title: "Calendars & Diaries",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=400&q=80",
    link: "/products/calendars"
  },
  {
    id: 8,
    title: "Notebooks",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&q=80",
    link: "/products/notebooks"
  },
  {
    id: 9,
    title: "Photo Frames",
    image: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?w=400&q=80",
    link: "/products/photo-frames"
  },
  {
    id: 10,
    title: "Cushions",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&q=80",
    link: "/products/cushions"
  },
  {
    id: 11,
    title: "Keychains",
    image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=400&q=80",
    link: "/products/keychains"
  },
  {
    id: 12,
    title: "Tote Bags",
    image: "https://images.unsplash.com/photo-1597633425046-08f5110420b5?w=400&q=80",
    link: "/products/tote-bags"
  }
];

// Packaging Products
const packagingProducts = [
  {
    id: 1,
    title: "Gift Boxes",
    image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=400&q=80",
    link: "/products/gift-boxes"
  },
  {
    id: 2,
    title: "Mailer Boxes",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    link: "/products/mailer-boxes"
  },
  {
    id: 3,
    title: "Thank You Cards",
    image: "https://images.unsplash.com/photo-1606567595334-d39972c85dfd?w=400&q=80",
    link: "/products/thank-you-cards"
  },
  {
    id: 4,
    title: "Gift Wrapping Papers",
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=400&q=80",
    link: "/products/wrapping-papers"
  }
];

// FAQ Data
const faqData = [
  {
    question: "What are some examples of corporate gifts?",
    answer: "Welcome kits for new employees, customized awards and trophies, branded drinkware like sublimation mugs and bottles, personalized t-shirts, backpacks, calendars and diaries, notebooks, keychains, photo frames, cushions, and much more."
  },
  {
    question: "Why is corporate gifting important?",
    answer: "Corporate gifting gives you a competitive edge in the business world. Research shows that 66% of recipients recall a brand after receiving a promotional gift. A well-thought-out corporate gift helps you stand apart from competitors, maintain healthy relationships with clients, attract new clients, increase sales, and impress existing customers."
  },
  {
    question: "How will I benefit by sending personalised corporate gifts to my clients?",
    answer: "With a well-timed & personalised corporate gift, let your clients know you value their business. The right corporate gift will turn your clients into brand evangelists. Studies show that consumers with an emotional connection to a brand have a 306% higher lifetime value."
  },
  {
    question: "How Can We Motivate Employees With Corporate Gifts?",
    answer: "A motivated employee is a happy employee. When you appreciate the contributions of your employees through corporate gifts, you create a positive environment where morale is high and performances are great. You can reach your business goals faster with a motivated team."
  },
  {
    question: "Can corporate gifting benefit your business?",
    answer: "Yes! It's a great way to show you care about your clients, customers, and employees. Whether it's gaining the trust of a new client, motivating your employees, Diwali gifts, or showing appreciation for professional relationships - corporate gifts help you strike the right chord."
  },
  {
    question: "Why choose Kamlesh Group for corporate gifting?",
    answer: "With 18+ years of experience, Kamlesh Group is the trusted choice for corporate gifting needs. We offer premium sublimation products, customized merchandise, Pan India delivery, bulk order discounts, and dedicated customer support. Our quality-assured products help build lasting brand impressions."
  }
];

// Features/Benefits
const features = [
  {
    icon: Gift,
    title: "Branded Gifting",
    description: "Custom logo printing on all your corporate gifts and merchandise"
  },
  {
    icon: Shield,
    title: "Assured Quality",
    description: "18+ years of expertise delivering premium quality products"
  },
  {
    icon: Users,
    title: "Seamless Experience",
    description: "Dedicated account manager for personalized service"
  },
  {
    icon: Star,
    title: "Competitive Pricing",
    description: "Best pricing for bulk orders with volume discounts"
  },
  {
    icon: Truck,
    title: "Pan India Delivery",
    description: "Reliable delivery anywhere across the country"
  }
];

// Product Card Component
const ProductCard: React.FC<{ product: typeof promotionalProducts[0]; index: number }> = ({ product, index }) => {
  return (
    <motion.a
      href={product.link}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group block"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div className="aspect-square overflow-hidden bg-gray-50">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="font-semibold text-gray-800 group-hover:text-[#EE4343] transition-colors">
            {product.title}
          </h3>
        </div>
      </div>
    </motion.a>
  );
};

// FAQ Accordion Component
const FAQAccordion: React.FC<{ faq: typeof faqData[0]; isOpen: boolean; onClick: () => void }> = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="w-full py-4 flex items-center justify-between text-left hover:text-[#EE4343] transition-colors"
      >
        <span className="font-medium text-gray-800 pr-4">{faq.question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#EE4343] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-4 text-gray-600 leading-relaxed">{faq.answer}</p>
      </motion.div>
    </div>
  );
};

// Main Page Component
const CorporateGiftingPage: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <>
      <div className="bg-white">
        <Header />
      </div>

      <div className="min-h-screen bg-white">
        {/* Hero Banner */}
        <section className="relative mt-20">
          <div className="relative h-[400px] md:h-[500px] overflow-hidden">
            <img
              src={heroBanners[0].image}
              alt={heroBanners[0].title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${heroBanners[0].gradient}`} />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="max-w-xl"
                >
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    {heroBanners[0].title}
                  </h1>
                  <p className="text-white/90 text-lg mb-6">
                    {heroBanners[0].subtitle}
                  </p>
                  <a
                    href={heroBanners[0].link}
                    className="inline-block px-8 py-3 bg-[#EE4343] text-white font-semibold rounded-full hover:bg-[#d63939] transition-colors"
                  >
                    {heroBanners[0].cta}
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Gift Kits Section */}
        <section className="py-12 px-4 md:px-6 bg-gradient-to-b from-purple-50/50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {giftKits.map((kit, index) => (
                <motion.a
                  key={kit.id}
                  href={kit.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg"
                >
                  <img
                    src={kit.image}
                    alt={kit.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {kit.title}
                    </h3>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Promotional Products Section */}
        <section className="py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
            >
              Promotional Products
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {promotionalProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Custom Packaging Section */}
        <section className="py-16 px-4 md:px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12"
            >
              Custom Packaging and Accessories to elevate every Gift
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {packagingProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Bulk Corporate Gifting CTA */}
        <section className="py-16 px-4 md:px-6 bg-gradient-to-r from-amber-50 to-orange-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80"
                  alt="Bulk Corporate Gifting"
                  className="rounded-2xl shadow-xl"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#EE4343]"
              >
                <span className="text-[#EE4343] font-semibold text-sm">Corporate Gifting Solutions</span>
                <p className="text-gray-500 text-sm mb-4">One stop solution for all your custom gifts</p>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Bulk Corporate Gifting
                </h3>
                <p className="text-gray-600 mb-6">
                  Looking to order different products with customization? We've got everything you need to take your gift-giving to the next level!
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    Our expert team will help you design & choose the product.
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    Dedicated account manager to help you find the best fit!
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    Easy ordering process & post ordering support.
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    We deliver our promises anywhere on time.
                  </li>
                </ul>
                <a
                  href="#contact"
                  className="inline-block px-8 py-3 bg-[#EE4343] text-white font-semibold rounded-full hover:bg-[#d63939] transition-colors"
                >
                  Contact us
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-x-8">
              <div>
                {faqData.slice(0, 3).map((faq, index) => (
                  <FAQAccordion
                    key={index}
                    faq={faq}
                    isOpen={openFAQ === index}
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  />
                ))}
              </div>
              <div>
                {faqData.slice(3).map((faq, index) => (
                  <FAQAccordion
                    key={index + 3}
                    faq={faq}
                    isOpen={openFAQ === index + 3}
                    onClick={() => setOpenFAQ(openFAQ === index + 3 ? null : index + 3)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 md:px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full shadow-md flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-[#EE4343]" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                  <p className="text-gray-500 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Gifting Made Simple Section */}
        <section className="py-16 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Corporate Gifting Made Simple with Custom Branding
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Corporate gifting is more than just a gesture—it's an opportunity to strengthen relationships, boost employee morale, and leave a lasting impression on clients and partners. At Kamlesh Group, we offer a wide range of custom-branded corporate gifts tailored to suit every occasion, from employee onboarding to client appreciation.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Personalized Gift Hampers & Kits</h3>
                  <p className="text-gray-600">
                    Welcome new employees with customized joining kits or celebrate milestones with employee engagement kits. Our thoughtfully curated gift hampers make every moment special, whether it's a festival, work anniversary, or corporate event.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Branded Apparel & Merchandise</h3>
                  <p className="text-gray-600">
                    Give your team a polished, professional look with custom sublimation t-shirts, caps, and bags. Whether for daily wear, events, or corporate outings, branded apparel helps reinforce your company identity and unity.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Premium Sublimation Products</h3>
                  <p className="text-gray-600">
                    From mugs to photo frames, cushions to keychains—our sublimation products offer vibrant, long-lasting prints that make your brand stand out. Perfect for promotional giveaways and corporate gifts.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Recognition & Awards</h3>
                  <p className="text-gray-600">
                    Celebrate achievements with premium awards and trophies customized with your logo and message. From employee recognition to corporate achievements, our range of awards adds a personal touch to every celebration.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Office & Stationery Essentials</h3>
                  <p className="text-gray-600">
                    Stay top of mind with practical yet stylish custom-branded pens, notebooks, desktop organizers, and diaries through our Powerbook range. These everyday essentials not only enhance productivity but also serve as a constant reminder of your brand's presence.
                  </p>
                </div>

                <p className="text-gray-700 font-medium mt-8">
                  Whether you're welcoming new employees, rewarding your team, or building stronger client relationships, Kamlesh Group's custom corporate gifts ensure that every gesture is meaningful. Explore our collection and make every gift count!
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default CorporateGiftingPage;