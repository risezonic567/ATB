import React, { useState, useEffect, useRef } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

let navLinks = [
  { name: "Home", href: "/" },
  { name: "Flight Booking", href: "/flight-booking-services" },
  { name: "Hotel Booking", href: "/hotel-booking-services" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "#", hasDropdown: true },
  { name: "Airline", href: "/airline/all", hasDropdown: true },
];

let servicesLinks = [
  { name: "Visa Services", href: "/visa-service" },
  { name: "Travel Insurance", href: "/travel-insurance" },
  { name: "Car Rental", href: "/car-rental-services" },
];

let airlines = [
  { name: "Frontier Airlines", slug: "frontier" },
  { name: "Jet Blue Airlines", slug: "jet-blue" },
  { name: "South West Airline", slug: "south-west" },
  { name: "Spirit Airlines", slug: "spirit" },
  { name: "Copa Airlines", slug: "copa" },
  { name: "Aero Mexico Airlines", slug: "aero-mexico" },
  { name: "Volaris Airlines", slug: "volaris" },
  { name: "Delta Airlines", slug: "delta" },
  { name: "United Airlines", slug: "united" },
  { name: "Alaska Airlines", slug: "alaska" },
  { name: "Allegiant Airlines", slug: "allegiant" },
];

export default function Navbar() {
  let [menuOpen, setMenuOpen] = useState(false);
  let [langOpen, setLangOpen] = useState(false);
  let [currentLang, setCurrentLang] = useState("EN");
  
  // Mobile sub-menus toggles
  let [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  let [mobileAirlinesOpen, setMobileAirlinesOpen] = useState(false);
  
  let langRef = useRef(null);

  let languages = [
    { name: "English", code: "en", label: "EN" },
    { name: "Spanish", code: "es", label: "ES" },
  ];

  let handleLangChange = (langCode) => {
    document.cookie = `googtrans=/en/${langCode}; path=/`;
    document.cookie = `googtrans=/en/${langCode}; domain=.${window.location.hostname}; path=/`;
    window.location.reload();
  };

  useEffect(() => {
    let addScript = document.createElement("script");
    addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    addScript.async = true;
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", includedLanguages: "en,es", autoDisplay: false },
        "google_translate_element"
      );
    };

    let match = document.cookie.match(/googtrans=\/en\/(\w+)/);
    if (match) {
      let lang = languages.find((l) => l.code === match[1]);
      if (lang) setCurrentLang(lang.label);
    }

    let handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md border-b">
        <div id="google_translate_element" style={{ visibility: "hidden", position: "absolute", zIndex: -1 }}></div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <img
                className="h-10 sm:h-11 md:h-12 object-contain"
                src="https://i.postimg.cc/TP6w89Pc/ATB-LOGO-PNG.png"
                alt="Logo"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => {
                if (link.name === "Our Services") {
                  return (
                    <div key={link.name} className="relative group py-2">
                      <button className="flex items-center gap-1 text-gray-700 font-medium hover:text-teal-600">
                        Our Services <ChevronDown size={14} />
                      </button>
                      {/* Hover Dropdown */}
                      <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-xl w-40 border overflow-hidden z-50">
                        {servicesLinks.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                if (link.name === "Airline") {
                  return (
                    <div key={link.name} className="relative group py-2">
                      <Link to="/airline/all" className="flex items-center gap-1 text-gray-700 font-medium hover:text-teal-600">
                        Airline <ChevronDown size={14} />
                      </Link>
                      {/* Hover Dropdown with Max Height & Scrollbar for 11 airlines */}
                      <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-xl w-56 border overflow-y-auto max-h-80 z-50">
                        {airlines.map((airline) => (
                          <Link
                            key={airline.slug}
                            to={`/airline/${airline.slug}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                          >
                            {airline.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-gray-700 font-medium hover:text-teal-600 whitespace-nowrap"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <div className="relative" ref={langRef}>
                <button onClick={() => setLangOpen(!langOpen)} className="flex items-center gap-1 text-sm font-semibold text-gray-700">
                  {currentLang} <ChevronDown size={14} />
                </button>
                {langOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg z-50">
                    {languages.map((lang) => (
                      <div key={lang.code} onClick={() => handleLangChange(lang.code)} className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm">
                        {lang.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Phone Button */}
              <Link to="tel:+1 866-307-5957" className="hidden md:flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition">
                <Phone size={18} />
                <span className="text-sm font-semibold">+1 866-307-5957</span>
              </Link>

              {/* Mobile Toggle */}
              <button className="lg:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div> {/* Fixed closing div tag here */}

        {/* Mobile Menu */}
        <div className={`lg:hidden bg-white border-t transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? "max-h-[85vh] py-4 overflow-y-auto" : "max-h-0"}`}>
          <div className="px-4 space-y-1">
            {navLinks.map((link) => {
              if (link.name === "Our Services") {
                return (
                  <div key={link.name} className="border-b border-gray-50">
                    <button 
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)} 
                      className="flex items-center justify-between w-full py-3 text-base font-medium text-gray-700 hover:text-teal-600"
                    >
                      <span>Our Services</span>
                      <ChevronDown size={16} className={`transform transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mobileServicesOpen && (
                      <div className="pl-4 pb-2 bg-gray-50 rounded-lg space-y-1">
                        {servicesLinks.map((service) => (
                          <Link key={service.name} to={service.href} onClick={() => setMenuOpen(false)} className="block py-2 text-sm text-gray-600 hover:text-teal-600">
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (link.name === "Airline") {
                return (
                  <div key={link.name} className="border-b border-gray-50">
                    <button 
                      onClick={() => setMobileAirlinesOpen(!mobileAirlinesOpen)} 
                      className="flex items-center justify-between w-full py-3 text-base font-medium text-gray-700 hover:text-teal-600"
                    >
                      <span>Airlines</span>
                      <ChevronDown size={16} className={`transform transition-transform ${mobileAirlinesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mobileAirlinesOpen && (
                      <div className="pl-4 pb-2 bg-gray-50 rounded-lg max-h-60 overflow-y-auto space-y-1">
                        <Link to="/airline/all" onClick={() => setMenuOpen(false)} className="block py-2 text-sm font-semibold text-teal-600">
                          All Airlines
                        </Link>
                        {airlines.map((airline) => (
                          <Link key={airline.slug} to={`/airline/${airline.slug}`} onClick={() => setMenuOpen(false)} className="block py-2 text-sm text-gray-600 hover:text-teal-600">
                            {airline.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link key={link.name} to={link.href} onClick={() => setMenuOpen(false)} className="block py-3 text-base font-medium text-gray-700 border-b border-gray-50 last:border-0 hover:text-teal-600">
                  {link.name}
                </Link>
              );
            })}
            
            <Link to="tel:+1 866-307-5957" className="flex items-center gap-2 text-teal-600 py-3 font-bold">
              <Phone size={18} /> Call Us: +1 866-307-5957
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}