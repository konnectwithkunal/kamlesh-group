import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; 


const Footer = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const email = "Team@newsmakermediagroup.com";
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
          Newsmaker Media Group serves cookies to analyse traffic to this site.{" "}
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

  {/* Get in touch CTA */}
  <section aria-label="Get in touch" className="bg-primary grid-overlay-light">
    <div className="container mx-auto px-6 py-20 md:py-28 text-center">
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-8">
        Let us get your brand noticed
      </h2>
      <Button asChild className="bg-black text-white rounded-full px-6 py-6 text-lg md:text-xl font-semibold hover:bg-black/80">
        <a href={`mailto:${email}`} aria-label="Get in touch via email">
          <span className="inline-flex items-center gap-3">
            Get in touch
            <ArrowRight className="size-5" />
          </span>
        </a>
      </Button>
    </div>
  </section>

  {/* Contact section */}
  <section id="contact" aria-label="Contact information" className="bg-white">
    <div className="container mx-auto px-6 py-16 md:py-24 text-center ">
      <a
        href={`mailto:${email}`}
        className="inline-block text-xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black"
      >
        {email}
      </a>
      <div className="mx-auto mt-3 h-1 w-40 bg-primary" />
      <p className="mt-6 text-lg text-gray-600">
        Or call us at
        <a href={`tel:${phone.replace(/[^+\d]/g, "")}`} className="ml-2 text-black hover:text-primary transition-colors">
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
          <img src="/img/colorblack.png" alt="Newsmakermedia Logo" className="h-14 mb-6" />
          <p className="text-gray-700 mb-8 max-w-md text-xl leading-relaxed">
           Newsmaker Media Group is a full-service communications consultancy built for the evolving media landscape. Founded with a vision to bring authenticity and agility into the PR and marketing ecosystem, we help brands tell stories that resonate, engage, and influence.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-primary transition-colors text-xl" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors text-xl" aria-label="Twitter">Twitter</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors text-xl" aria-label="Instagram">Instagram</a>
          </div>
        </div>

        {/* Services */}
        <nav aria-label="Services">
          <h4 className="font-semibold mb-6 text-black text-2xl">Services</h4>
          <ul className="space-y-3">
            <li><Link to="/services?service=media-relations" className="text-gray-700 text-xl hover:text-primary">Media Relations</Link></li>
            <li><Link to="/services?service=event-management" className="text-gray-700 text-xl hover:text-primary">Event Management</Link></li>
            <li><Link to="/services?service=crisis-management" className="text-gray-700 text-xl hover:text-primary">Crisis Management</Link></li>
            <li><Link to="/services?service=content-creation" className="text-gray-700 text-xl hover:text-primary">Content Creation</Link></li>
          </ul>
        </nav>

        {/* Company */}
        <nav aria-label="Company">
          <h4 className="font-semibold mb-6 text-black text-2xl">Company</h4>
          <ul className="space-y-3">
            <li><Link to="/" className="text-gray-700 text-xl hover:text-primary">About us</Link></li>
            <li><Link to="/services" className="text-gray-700 text-xl hover:text-primary">Services</Link></li>
            <li><Link to="/people" className="text-gray-700 text-xl hover:text-primary">People</Link></li>
            <li><Link to="/news" className="text-gray-700 text-xl hover:text-primary">Client Showcase</Link></li>
            <li><Link to="/blogs" className="text-gray-700 text-xl hover:text-primary">Blog</Link></li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-gray-300 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2025 Newsmaker Media Group. All rights reserved.
            </p>
            {/* --- Start of new code --- */}
            <p className="text-gray-600 text-sm">
              ♥️ Made with love by{" "}
              <a
                href="http://www.webalchemy.co.in/" // Change this to the actual URL for webalchemy
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary underline"
              >
                webalchemy
              </a>
            </p>
            {/* --- End of new code --- */}
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
          name: "Toaster",
          url: "https://toaster.co",
          email,
          telephone: "+15550101234",
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+15550101234",
              email,
              contactType: "customer support",
              areaServed: "Global",
              availableLanguage: ["English"]
            }
          ]
        })}
      </script>
    </footer>
  );
};

export default Footer;