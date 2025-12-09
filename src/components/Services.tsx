import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      title: "Sublimation Mugs",
      description: "Our core specialty. We offer a diverse range of high-quality sublimation mugs, perfect for corporate branding, personalized gifts, and promotional campaigns. From classic white to magic color-changing options.",
      subServices: [
        {
          title: "White 11 oz Mugs",
          description: "The industry standard classic white ceramic mug, perfect for vibrant, full-color sublimation prints."
        },
        {
          title: "Color Handle Mugs",
          description: "Dual-tone mugs featuring colored handles and rims to perfectly match your brand's color palette."
        },
        {
          title: "Magic Mugs",
          description: "Black 'Magic' mugs that reveal your custom design or photo only when hot liquid is poured inside."
        },
        {
          title: "Patch Mugs",
          description: "Stylish Black and White patch mugs offering a modern, contrasting aesthetic for your logos."
        }
      ]
    },
    {
      title: "Sublimation Merchandise",
      description: "Beyond mugs, we provide a full suite of sublimation-ready merchandise. Whether for sports events, corporate giveaways, or fashion, our sublimation products ensure long-lasting, high-definition prints.",
      subServices: [
        {
          title: "Sublimation T-Shirts",
          description: "High-quality polyester blend t-shirts designed specifically for durable, full-color sublimation printing."
        },
        {
          title: "Sublimation Bottles",
          description: "Durable aluminum and steel sipper bottles, ideal for sports teams, gyms, and eco-friendly corporate gifts."
        },
        {
          title: "Sublimation Cups",
          description: "Versatile tumblers and cups available in various finishes, ready for your custom artwork."
        },
        {
          title: "Coffee Mugs",
          description: "Standard and custom-shaped coffee mugs for cafes, offices, and daily use."
        }
      ]
    },
    {
      title: "Corporate Gifting",
      description: "Strengthen business relationships and recognize excellence with our premium corporate gifting solutions. We offer a wide array of customizable items suitable for clients, employees, and partners.",
      subServices: [
        {
          title: "Trophies",
          description: "Elegant trophies and awards to recognize achievement, milestones, and excellence within your organization."
        },
        {
          title: "Keychains",
          description: "Custom branded keychains in metal, leather, or plastic – a cost-effective and practical promotional item."
        },
        {
          title: "Pens",
          description: "Premium metal and plastic pens engraved or printed with your company logo for lasting brand recall."
        },
        {
          title: "Bags",
          description: "Functional corporate bags, laptop bags, and totes designed for professionals on the move."
        }
      ]
    },
    {
      title: "Stationery & Powerbooks",
      description: "Equip your team with essential office stationery that combines utility with professional branding. Our Powerbooks and diaries are perfect for the modern professional workspace.",
      subServices: [
        {
          title: "Powerbooks",
          description: "Innovative notebooks with built-in power banks and charging cables – the ultimate utility for professionals."
        },
        {
          title: "Diaries",
          description: "Premium leather and hardbound diaries for organizing schedules, notes, and daily tasks."
        },
        {
          title: "Corporate Notebooks",
          description: "Customized notebooks available in various sizes (A5, B5) and finishes for office use."
        },
        {
          title: "Office Essentials",
          description: "A complete range of branded desk accessories and stationery to unify your office look."
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#EF4343]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Our Services</h2>
          <p className="text-xl md:text-2xl text-white leading-relaxed">
            We deliver specialized Sublimation Printing, Corporate Gifting, and Branding solutions, driven by a commitment to quality and a deep understanding of your business needs.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Main Services - Left Side */}
          <div className="space-y-2">
            {services.map((service, index) => (
              <div key={index}>
                <div 
                  className={`group cursor-pointer p-6 border-b-2 border-white hover:border-white transition-all duration-300 ${
                    selectedService === index ? 'border-white' : 'border-white/40'
                  }`}
                  onClick={() => {
                    // Optional: Navigate to a detailed page if needed
                    // const serviceSlug = service.title.toLowerCase().replace(/\s+/g, '-');
                    // window.location.href = `/services?service=${serviceSlug}`;
                    setSelectedService(index);
                  }}
                  onMouseEnter={() => setSelectedService(index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className={`text-2xl md:text-3xl font-bold transition-all duration-300 ${
                      selectedService === index ? 'text-white translate-x-2' : 'text-white/80 group-hover:text-white group-hover:translate-x-2'
                    }`}>
                      {service.title}
                    </h3>
                    <svg 
                      className={`w-8 h-8 transition-all duration-300 ${
                        selectedService === index ? 'text-white translate-x-2' : 'text-white/60 group-hover:text-white group-hover:translate-x-2'
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

          {/* Sub Services - Right Side */}
          <div className="space-y-6 hidden md:block">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services[selectedService].subServices.map((subService, index) => (
                <div 
                  key={index} 
                  className="group cursor-pointer border-2 border-white p-4 hover:border-black hover:bg-white transition-all duration-300 bg-[#EF4343]"
                  onClick={() => {
                    // Add click handler logic here
                    console.log("Clicked:", subService.title);
                  }}
                >
                  <h4 className="font-bold text-white group-hover:text-[#EF4343] mb-2 text-sm uppercase tracking-wide transition-colors duration-300">
                    {subService.title}
                  </h4>
                  <p className="text-white/90 group-hover:text-[#EF4343]/90 text-sm leading-relaxed transition-colors duration-300">
                    {subService.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;