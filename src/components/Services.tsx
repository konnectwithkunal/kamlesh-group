// src/components/Services.tsx

import { useState } from "react";

const Services = () => {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      title: "Mug Wale",
      description: "Our core specialty. We offer a diverse range of high-quality sublimation mugs, perfect for corporate branding, personalized gifts, and promotional campaigns.",
      subServices: [
        {
          title: "White 11 oz Mugs",
          description: "The industry standard classic white ceramic mug, perfect for vibrant, full-color sublimation prints.",
          tagline: "Classic ceramic",
          subtitle: "sublimation ready",
          image: "/mug-images/1_h.jpg"
        },
        {
          title: "Color Handle Mugs",
          description: "Dual-tone mugs featuring colored handles and rims to perfectly match your brand's color palette.",
          tagline: "Dual tone",
          subtitle: "color matching",
          image: "/mug-images/2_h.jpg"
        },
        {
          title: "Magic Mugs",
          description: "Black 'Magic' mugs that reveal your custom design or photo only when hot liquid is poured inside.",
          tagline: "Heat reveal",
          subtitle: "color changing",
          image: "/mug-images/7_h.jpg"
        },
        {
          title: "Patch Mugs",
          description: "Stylish Black and White patch mugs offering a modern, contrasting aesthetic for your logos.",
          tagline: "Modern style",
          subtitle: "contrast design",
          image: "/mug-images/12_h.jpg"
        }
      ]
    },
    {
  title: "Kamlesh Enterprises",
  description: "Your one-stop destination for premium sublimation-ready apparel. From polyester t-shirts to nylon wear, we offer high-quality blank garments perfect for custom printing with 18+ years of expertise.",
  subServices: [
    {
      title: "Sublimation Polyester T-Shirts",
      description: "Premium 180 GSM polyester t-shirts with round neck design. Available in sizes XS to XXL, perfect for vibrant full-color sublimation printing.",
      tagline: "180 GSM",
      subtitle: "vibrant prints",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/9/FZ/NP/ZP/13813473/sublimation-polyester-t-shirts-500x500.png"
    },
   
    {
      title: "Sublimation Collar Matty T-Shirt",
      description: "Professional polo neck t-shirts in 180 GSM polyester. Available in 5 colors - Black, White, Grey, Yellow & Maroon. Sizes 36 to 44.",
      tagline: "Polo neck",
      subtitle: "professional look",
      image: "https://5.imimg.com/data5/SELLER/Default/2025/1/482994330/GV/RI/HF/13813473/sublimation-t-shirt-500x500.jpeg"
    },
    {
      title: "Sublimation Blank T-Shirt",
      description: "Versatile blank t-shirts in both polo and round neck styles. Dryfit polyester 180 GSM available in 9 colours with pocket options.",
      tagline: "Multi-style",
      subtitle: "9 colours available",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/5/309211234/LY/ZG/ZM/13813473/whatsapp-image-2023-05-19-at-10-31-34-am-500x500.jpeg"
    },
    {
      title: "Cotton Feel T-Shirt",
      description: "Sublimation cotton feel t-shirts with 160 GSM fabric. Soft touch with excellent print quality. Available in Pink, Blue, Green, Yellow and White.",
      tagline: "160 GSM",
      subtitle: "soft cotton feel",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/2/394647934/JM/WO/AI/13813473/whatsapp-image-2024-02-09-at-3-30-18-pm-1-500x500.jpeg"
    },
   
  ]
},
    {
      title: "Powerbook",
      description: "Strengthen business relationships with our premium corporate gifting solutions for clients, employees, and partners.",
      subServices: [
        {
          title: "Premium Trophies",
          description: "Elegant trophies and awards to recognize achievement, milestones, and excellence within your organization.",
          tagline: "Corporate",
          subtitle: "gifting natural",
          image: "/img/powerbook_1.jpeg"
        },
        {
          title: "Branded Keychains",
          description: "Custom branded keychains in metal, leather, or plastic – a cost-effective and practical promotional item.",
          tagline: "Brand recall",
          subtitle: "practical gifts",
          image: "/img/powerbook_2.jpeg"
        },
        {
          title: "Luxury Pens",
          description: "Premium metal and plastic pens engraved or printed with your company logo for lasting brand recall.",
          tagline: "Executive style",
          subtitle: "lasting impression",
          image: "/img/powerbook_3.jpeg"
        },
        {
          title: "Professional Bags",
          description: "Functional corporate bags, laptop bags, and totes designed for professionals on the move.",
          tagline: "Professional",
          subtitle: "on the move",
          image: "/img/powerbook_4.jpeg"
        }
      ]
    },
    {
      title: "Corporate Gifting",
      description: "Equip your team with essential office stationery that combines utility with professional branding.",
      subServices: [
        {
          title: "Powerbooks",
          description: "Innovative notebooks with built-in power banks and charging cables – the ultimate utility for professionals.",
          tagline: "Tech enabled",
          subtitle: "power on go",
          image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&q=80"
        },
        {
          title: "Diaries",
          description: "Premium leather and hardbound diaries for organizing schedules, notes, and daily tasks.",
          tagline: "Premium leather",
          subtitle: "daily planner",
          image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&q=80"
        },
        {
          title: "Corporate Notebooks",
          description: "Customized notebooks available in various sizes (A5, B5) and finishes for office use.",
          tagline: "Custom sizes",
          subtitle: "office essentials",
          image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&q=80"
        },
        {
          title: "Office Essentials",
          description: "A complete range of branded desk accessories and stationery to unify your office look.",
          tagline: "Desk ready",
          subtitle: "unified branding",
          image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&q=80"
        }
      ]
    },
    {
      title: "Allure Space",
      description: "A multidisciplinary architecture and design practice crafting sustainable, innovative, and aesthetically profound environments.",
      subServices: [
        {
          title: "Architectural Design",
          description: "Comprehensive structural planning and building design, ranging from luxury residences to commercial complexes.",
          tagline: "Visionary",
          subtitle: "structural excellence",
          image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&q=80" // Modern Building structure
        },
        {
          title: "Interior Architecture",
          description: "Bespoke spatial planning that harmonizes functionality with luxury aesthetics for immersive experiences.",
          tagline: "Sophisticated",
          subtitle: "spatial harmony",
          image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80" // Modern Interior
        },
        {
          title: "Commercial Spaces",
          description: "Strategic design for offices, retail, and hospitality sectors tailored to enhance brand identity and workflow.",
          tagline: "Functional",
          subtitle: "business environments",
          image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80" // Corporate Office
        },
        {
          title: "Turnkey Projects",
          description: "End-to-end project execution from conceptualization to handover, ensuring precision and quality.",
          tagline: "Seamless",
          subtitle: "concept to reality",
          image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80" // Construction/Architecture planning
        }
      ]
},
   {
      title: "NARS Surgicals", 
      description: "Premium disposable surgical gowns and medical fabrics engineered with Bodyguard Plus Technology for maximum protection.",
      subServices: [
        {
          title: "Surgical Gowns",
          description: "Standard and reinforced gowns meeting AAMI Levels 2, 3, & 4 standards for critical zones.",
          tagline: "Maximum Protection",
          subtitle: "Bodyguard Plus Tech",
          image: "/img/nar.jpg"
        },
        {
          title: "Laminated Fabrics",
          description: "Impervious fabric technology providing the highest fluid and microbial barrier against blood-borne pathogens.",
          tagline: "Viral Barrier",
          subtitle: "Impervious & Safe",
          image: "/img/laminate.png"
        },
        {
          title: "Biodegradable PPE",
          description: "Oxo-biodegradable options that are 100% recyclable and degrade within 70 hours of exposure.",
          tagline: "Eco-Conscious",
          subtitle: "Reduced Pollution",
          image: "/img/bio.png"
        },
        {
          title: "Antimicrobial Tech",
          description: "Advanced fabrics with active additives that resist bacteria, fungi, and algae with >95% reduction.",
          tagline: "Germ Defense",
          subtitle: "Active Protection",
          image: "/img/anti.png"
        }
      ]
}
  ];

  return (
    <section id="services" className="py-20 bg-[#EF4343]">
      <div className="container mx-auto px-8 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 mb-16 items-start">
          {/* Left - Title (40% = 2/5) */}
          <div className="md:col-span-2">
            <h2 className="text-4xl md:text-5xl text-center lg:text-7xl text-white">Our Services</h2>
          </div>

          {/* Right - Description (60% = 3/5) */}
          <div className="md:col-span-3">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed pl-20 pr-10 text-center">
              <span className="text-5xl md:text-6xl lg:text-3xl font-bold float-left mt-[-8px] leading-none">W</span>
              e deliver specialized Sublimation Printing, Corporate Gifting, and Branding solutions, driven by a commitment to quality and a deep understanding of your business needs.
            </p>
          </div>
        </div>

        {/* 40/60 Split Grid */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 mb-16">

          {/* Main Services - Left Side (40% = 2/5) */}
          <div className="lg:col-span-2 space-y-1">
            {services.map((service, index) => (
              <div key={index}>
                <div
                  className={`group cursor-pointer py-8 px-4 border-b-2 transition-all duration-300 ${selectedService === index
                      ? 'border-white'
                      : 'border-white/40 hover:border-white'
                    }`}
                  onClick={() => setSelectedService(index)}
                  onMouseEnter={() => setSelectedService(index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl md:text-2xl font-bold transition-all duration-300 ${selectedService === index
                        ? 'text-white translate-x-2'
                        : 'text-white/80 group-hover:text-white group-hover:translate-x-2'
                      }`}>
                      {service.title}
                    </h3>
                    <svg
                      className={`w-6 h-6 transition-all duration-300 ${selectedService === index
                          ? 'text-white translate-x-2'
                          : 'text-white/60 group-hover:text-white group-hover:translate-x-2'
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sub Services - Right Side (60% = 3/5) with Images */}
          <div className="lg:col-span-3 hidden md:block pl-20 pr-10">
            <div className="grid grid-cols-2 gap-5">
              {services[selectedService].subServices.map((subService, index) => (
                <div
                  key={index}
                  className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-3"
                  onClick={() => console.log("Clicked:", subService.title)}
                >
                  {/* Image with Overlay Card */}
                  <div className="relative h-40 rounded-xl overflow-hidden">
                    {/* Background Image */}
                    <img
                      src={subService.image}
                      alt={subService.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Dark Overlay - REMOVED */}
                    {/* Content on top of image - REMOVED */}
                  </div>

                  {/* White Content Container */}
                  <div className="pt-4 pb-2 px-1">
                    <h4 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide">
                      {subService.title}
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
                      {subService.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Sub Services */}
          <div className="lg:col-span-3 md:hidden space-y-4">
            {services[selectedService].subServices.map((subService, index) => (
              <div
                key={index}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg p-3"
              >
                {/* Image with Overlay - Mobile */}
                <div className="relative h-32 rounded-xl overflow-hidden">
                  <img
                    src={subService.image}
                    alt={subService.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Dark Overlay - REMOVED */}
                  {/* Content on top of image - REMOVED */}
                </div>

                <div className="pt-3 pb-1 px-1">
                  <h4 className="font-bold text-gray-900 mb-1 text-sm uppercase tracking-wide">
                    {subService.title}
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {subService.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;