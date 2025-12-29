import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const email = "contact@kamleshgroup.in";
  const phone = "+91 9819416689";

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
          
          <p className="mt-6 text-lg md:text-xl text-white/90">
            Or call us at
            <a 
              href={`tel:${phone.replace(/[^+\d]/g, "")}`} 
              className="ml-2 text-white font-bold hover:underline"
            >
              {phone}
            </a>
          </p>
        </div>
      </section>

      {/* Main footer content */}
      <section aria-label="Footer navigation" className="bg-white">
        <div className="container mx-auto px-6 py-12 md:py-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <img src="/img/colorblack.png" alt="Kamlesh Group Logo" className="h-14 mb-6" />
              <p className="text-gray-700 mb-8 max-w-md text-xl leading-relaxed">
                Kamlesh Group is a diversified conglomerate committed to excellence in manufacturing, sublimation printing, and corporate gifting. We deliver high-quality, customized solutions that help businesses build a lasting brand identity through premium merchandise.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-primary transition-colors text-xl" aria-label="LinkedIn">LinkedIn</a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors text-xl" aria-label="Twitter">Twitter</a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors text-xl" aria-label="Instagram">Instagram</a>
              </div>
            </div>

            {/* Services - Updated */}
            <nav aria-label="Services">
              <h4 className="font-semibold mb-6 text-black text-2xl">Services</h4>
              <ul className="space-y-3">
                <li><Link to="/services?service=mug-wale" className="text-gray-700 text-xl hover:text-primary">Mug Wale</Link></li>
                <li><Link to="/services?service=kamlesh-enterprises" className="text-gray-700 text-xl hover:text-primary">Kamlesh Enterprises</Link></li>
                <li><Link to="/services?service=powerbook" className="text-gray-700 text-xl hover:text-primary">Powerbook</Link></li>
                <li><Link to="/services?service=corporate-gifting" className="text-gray-700 text-xl hover:text-primary">Corporate Gifting</Link></li>
                <li><Link to="/services?service=allure-space" className="text-gray-700 text-xl hover:text-primary">Allure Space</Link></li>
                <li><Link to="/services?service=nars-surgicals" className="text-gray-700 text-xl hover:text-primary">NARS Surgicals</Link></li>
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