import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Brand data with logos
const serviceBrands = [
  {
    id: "mug-wale",
    name: "Mug Wale",
    logo: "/img/MUGWALE.png",
    link: "/services?service=mug-wale"
  },
  {
    id: "kamlesh-enterprises",
    name: "Kamlesh Enterprises",
    logo: "/img/KAMLESH.png",
    link: "/services?service=kamlesh-enterprises"
  },
  {
    id: "powerbook",
    name: "Powerbook",
    logo: "/img/POWER.png",
    link: "/services?service=powerbook"
  },
  {
    id: "corporate-gifting",
    name: "Corporate Gifting",
    logo: "/img/CORPORATE.png",
    link: "/services?service=corporate-gifting"
  },
  {
    id: "allure-space",
    name: "Allure Space",
    logo: "/img/ALLURE.png",
    link: "/services?service=allure-space"
  },
  {
    id: "nars-surgicals",
    name: "NARS Surgicals",
    logo: "/img/NARS.png",
    link: "/services?service=nars-surgicals"
  },
];

const Footer = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null);
  const email = "contact@kamleshgroup.com";
  const phone = "+91 9811700286";
  const landlineNumber = "011-403-478-51";

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowCookieBanner(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowCookieBanner(false);
  };

  const handleRejectCookies = () => {
    localStorage.setItem("cookieConsent", "false");
    setShowCookieBanner(false);
  };

  return (
    <footer className="bg-white grid-overlay">
      {/* Cookie consent banner */}
      {showCookieBanner && (
        <div className="bg-gray-100 text-black py-4">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm mb-4 md:mb-0">
              Kamlesh Group uses cookies to analyze traffic to this site.{" "}
              <a href="#" className="underline hover:no-underline text-primary">
                See details.
              </a>
            </p>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleRejectCookies}
                className="bg-[#EF4343] text-white hover:bg-[#f96464] rounded-full"
              >
                No thanks
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={handleAcceptCookies}
                className="bg-[#EF4343] text-white hover:bg-[#f96464] rounded-full"
              >
                OK, got it
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section with Red Grid Background */}
      <section id="contact" aria-label="Contact information" className="bg-primary grid-overlay-light">
        <div className="container mx-auto px-6 py-20 md:py-28 text-center">
          <a
            href={`mailto:${email}`}
            className="inline-block text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white hover:text-white/90 transition-colors"
          >
            {email}
          </a>

          <div className="mx-auto mt-6 h-1 w-40 bg-white" />

          <div className="mt-6 flex flex-col items-center gap-2">
            <p className="text-lg md:text-xl text-white/90">
              Mobile:
              <a
                href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                className="ml-2 text-white font-bold hover:underline"
              >
                {phone}
              </a>
            </p>
            <p className="text-lg md:text-xl text-white/90">
              Landline:
              <a
                href={`tel:${landlineNumber.replace(/[^+\d]/g, "")}`}
                className="ml-2 text-white font-bold hover:underline"
              >
                {landlineNumber}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Main footer content */}
      <section aria-label="Footer navigation" className="bg-white">
        <div className="container mx-auto px-6 py-12 md:py-16">
          {/* Full width about section */}
          <div className="w-full mb-12">
            <img src="/img/colorblack.png" alt="Kamlesh Group Logo" className="h-14 mb-6" />
            <p className="text-gray-700 mb-8 text-xl leading-relaxed text-justify">
              Kamlesh Group is a distinguished and trusted industry leader with over 18 years of excellence in imports, exports, and manufacturing in India. We specialize in delivering premium-quality corporate solutions tailored to meet the evolving needs of modern businesses.
              <br />
              <br />
              Founded by Mr. Hitesh Dhawan, Kamlesh Group was built on a singular vision — uncompromising quality and exceptional service in every order we undertake. This philosophy continues to guide our operations and long-term partnerships.
              <br /> <br />
              We proudly serve an elite clientele that includes Government Offices across India, Multinational Corporations (MNCs), Public Sector Undertakings (PSUs), and reputed NGOs. Our robust distribution ecosystem of 3,500+ authorized distributors in India and overseas ensures seamless reach, reliability, and timely execution at scale.
              <br /><br />
              Renowned as masters in sublimation products, Kamlesh Group is a preferred partner for large-scale and bulk corporate orders, delivering precision-crafted products that reflect brand value, consistency, and sophistication. From concept to execution, we uphold the highest standards of manufacturing excellence, quality control, and customer satisfaction.
              <br /><br />
              With a strong focus on innovation, reliability, and long-term value, Kamlesh Group continues to set benchmarks in the corporate gifting, sublimation printing, and bulk manufacturing industry—both in India and internationally.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors text-xl" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors text-xl" aria-label="Twitter">Twitter</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors text-xl" aria-label="Instagram">Instagram</a>
            </div>
          </div>

          {/* Services and Company sections side by side below */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Services - Updated with hover logos */}
            <nav aria-label="Services" className="relative">
              <h4 className="font-semibold mb-6 text-black text-2xl">Services</h4>

              {/* Logo preview container */}
              <div className="mb-6 h-16 flex items-center justify-start">
                {hoveredBrand && (
                  <img
                    src={serviceBrands.find(b => b.id === hoveredBrand)?.logo}
                    alt={`${serviceBrands.find(b => b.id === hoveredBrand)?.name} logo`}
                    className="h-14 w-auto object-contain animate-fade-in transition-all duration-300"
                    style={{
                      animation: 'fadeIn 0.3s ease-in-out'
                    }}
                  />
                )}
                {!hoveredBrand && (
                  <span className="text-gray-400 text-sm italic">Hover to preview logo</span>
                )}
              </div>

              <ul className="space-y-3">
                {serviceBrands.map((brand) => (
                  <li key={brand.id}>
                    <Link
                      to={brand.link}
                      className="text-gray-700 text-xl hover:text-primary transition-colors duration-200 inline-flex items-center gap-2"
                      onMouseEnter={() => setHoveredBrand(brand.id)}
                      onMouseLeave={() => setHoveredBrand(null)}
                    >
                      {brand.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Company */}
            <nav aria-label="Company">
              <h4 className="font-semibold mb-6 text-black text-2xl">Company</h4>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-700 text-xl hover:text-primary">About us</Link></li>
                <li><Link to="/services" className="text-gray-700 text-xl hover:text-primary">Services</Link></li>
                <li><Link to="/news" className="text-gray-700 text-xl hover:text-primary">Client Showcase</Link></li>
                <li><Link to="/blogs" className="text-gray-700 text-xl hover:text-primary">Blog</Link></li>
              </ul>
            </nav>
          </div>

          <div className="border-t border-gray-300 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2025 Kamlesh Group of Companies. All rights reserved.
            </p>
            <p className="text-gray-600 text-sm">
              ♥️ Made with love by{" "}
              <a
                href="http://www.webalchemy.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary underline"
              >
                webalchemy
              </a>
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-primary text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-primary text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </section>

      {/* Structured data for SEO */}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Kamlesh Group of Companies",
          url: "https://kamleshgroup.in",
          email,
          telephone: phone,
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: phone,
              email,
              contactType: "customer support",
              areaServed: "India",
              availableLanguage: ["English", "Hindi"]
            }
          ]
        })}
      </script>
    </footer>
  );
};

export default Footer;