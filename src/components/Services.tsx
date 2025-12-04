import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      title: "Media Relations",
      description: "In today's fast-paced media landscape, securing coverage for your brand can be a game-changer. At Newsmaker Media Group our expert media relations services are designed to amplify your brand's voice and elevate its visibility.",
      subServices: [
        {
          title: "Media Outreach",
          description: "Building relationships with media outlets and pitching stories."
        },
        {
          title: "Press Release Distribution",
          description: "Distributing press releases to targeted media outlets."
        },
        {
          title: "Story Pitching",
          description: "Pitching stories and ideas to media outlets."
        },
        {
          title: "Media Training",
          description: "Providing media training for clients."
        }
      ]
    },
    {
      title: "Event Management",
      description: "Event management services at Newsmaker Media Group, we specialize in creating unforgettable events that exceed your expectations. Our expert event management services cover every aspect of event planning, from concept to execution.",
      subServices: [
        {
          title: "Event Conceptualization",
          description: "Developing event concepts and themes."
        },
        {
          title: "Event Marketing",
          description: "Promoting events through various marketing channels."
        },
        {
          title: "Venue Management",
          description: "Selecting and managing event venues."
        },
        {
          title: "Logistics Management",
          description: "Managing event logistics, including catering, audio-visual, and more."
        }
      ]
    },
    {
      title: "Crisis Management",
      description: "In today's fast-paced and unpredictable business environment, crises can strike at any moment, threatening your organization's reputation and operations. At Newsmaker Media Group, we understand the importance of effective crisis management.",
      subServices: [
        {
          title: "Online Reputation Management",
          description: "Managing online reputation during crises, including search engine optimization and content creation."
        },
        {
          title: "Crisis Communications Planning",
          description: "Developing crisis communications plans and strategies."
        },
        {
          title: "Social Media Crisis Management",
          description: "Managing social media during crises, including monitoring, response, and mitigation."
        }
      ]
    },
    {
      title: "Content Creation",
      description: "At Newsmaker Media Group, we specialize in creating high-quality content that engages, informs, and inspires audiences. Our expert content creation services cover every aspect of content development, from strategy to execution.",
      subServices: [
        {
          title: "Article Writing",
          description: "Writing high-quality articles for websites, blogs, and more."
        },
        {
          title: "Blog Writing",
          description: "Creating engaging blog content for various industries."
        },
        {
          title: "Content Strategy",
          description: "Developing content strategies for businesses."
        },
        {
          title: "SEO Content",
          description: "Creating SEO-optimized content for websites."
        },
        {
          title: "Content Marketing",
          description: "Developing content marketing strategies for businesses."
        }
      ]
    }
  ];


  return (
    <section id="services" className="py-20 bg-[#EF4343]" >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Services</h2>
          <p className="text-xl md:text-2xl text-white leading-relaxed">
            We deliver Product Marketing, Branding and Interactive Experiences, driven by a deep understanding of the fast-changing marketing landscape and emerging technologies.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Main Services - Left Side */}
          <div className="space-y-2">
            {services.map((service, index) => (
              <div key={index}>
                <div 
                  className={`group cursor-pointer p-6 border-b-2 border-white hover:border-white transition-all duration-300 ${
                    selectedService === index ? 'border-white' : ''
                  }`}
                  onClick={() => {
                    const serviceSlug = service.title.toLowerCase().replace(/\s+/g, '-');
                    window.location.href = `/services?service=${serviceSlug}`;
                  }}
                  onMouseEnter={() => setSelectedService(index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className={`text-2xl md:text-3xl font-bold transition-all duration-300 ${
                      selectedService === index ? 'text-[ffffff] translate-x-2' : 'text-foreground group-hover:text-[primary] group-hover:translate-x-2'
                    }`}>
                      {service.title}
                    </h3>
                    <svg 
                      className={`w-8 h-8 transition-all duration-300 ${
                        selectedService === index ? ' translate-x-2' : 'text-muted-foreground group-hover:text-primary group-hover:translate-x-2'
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
                <div key={index} className="border-2 border-white p-4 hover:border-[000000] transition-all duration-300 bg-[#EF4343]">
                  <h4 className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wide">
                    {subService.title}
                  </h4>
                  <p className="text-white text-sm leading-relaxed">
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