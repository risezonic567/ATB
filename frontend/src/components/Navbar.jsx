import React, { useState, useEffect, useRef } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

let navLinks = [
  { name: "Home", href: "/" },
  { name: "Flight Booking", href: "/flight-booking-services" },
  { name: "Hotel Booking", href: "/hotel-booking-services" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "#" },
  { name: "Airline", href: "/airline/all" }, // Updated to point to the main AirlinePage
];

// hello

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
            {navLinks.map((link) =>
              link.name === "Our Services" ? (
                <div key={link.name} className="relative group">
                  <button className="text-gray-700 font-medium hover:text-teal-600">
                    Our Services
                  </button>

                  {/* Hover Dropdown FIX */}
                  <div className="absolute left-0 top-full mt-3 hidden group-hover:block bg-white shadow-lg rounded-xl w-52 border overflow-hidden">
                    {servicesLinks.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block px-4 py-2 text-sm hover:bg-teal-50"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-700 font-medium hover:text-teal-600 whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))
            }
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative" ref={langRef}>
              <button onClick={() => setLangOpen(!langOpen)} className="flex items-center gap-1 text-sm font-semibold text-gray-700">
                {currentLang} <ChevronDown size={14} />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg">
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
      </div>
  

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white border-t transition-all duration-300 ease-in-out ${menuOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden"}`}>
        <div className="px-4 space-y-1">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} onClick={() => setMenuOpen(false)} className="block py-3 text-base font-medium text-gray-700 border-b border-gray-50 last:border-0 hover:text-teal-600">
              {link.name}
            </Link>
          ))}
          <Link to="tel:+1 866-307-5957" className="flex items-center gap-2 text-teal-600 py-3 font-bold">
            <Phone size={18} /> Call Us: +1 866-307-5957
          </Link>
        </div>
      </div>
    </header>
  
   </>
  )
}