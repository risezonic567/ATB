import React, { useState, useEffect, useRef } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Flight Booking", href: "/flight-booking-services" },
  { name: "Hotel Booking", href: "/hotel-booking-services" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "#" },
  { name: "Airline", href: "/airline/all" }, // Updated to point to the main AirlinePage
];

// hello

const servicesLinks = [
  { name: "Visa Services", href: "/visa-service" },
  { name: "Travel Insurance", href: "/travel-insurance" },
  { name: "Car Rental", href: "/car-rental-services" },
];

const airlines = [
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
  { name: "Allegiant Air Airlines", slug: "alaska-air" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");
  const langRef = useRef(null);

  const languages = [
    { name: "English", code: "en", label: "EN" },
    { name: "Spanish", code: "es", label: "ES" },
  ];

  const handleLangChange = (langCode) => {
    document.cookie = `googtrans=/en/${langCode}; path=/`;
    document.cookie = `googtrans=/en/${langCode}; domain=.${window.location.hostname}; path=/`;
    window.location.reload();
  };

  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    addScript.async = true;
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", includedLanguages: "en,es", autoDisplay: false },
        "google_translate_element"
      );
    };

    const match = document.cookie.match(/googtrans=\/en\/(\w+)/);
    if (match) {
      const lang = languages.find((l) => l.code === match[1]);
      if (lang) setCurrentLang(lang.label);
    }

    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b">
      <div id="google_translate_element" style={{ visibility: "hidden", position: "absolute", zIndex: -1 }}></div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="https://i.postimg.cc/TP6w89Pc/ATB-LOGO-PNG.png" alt="logo" className="h-10 md:h-12" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 font-medium text-gray-700">
            {navLinks.map((link) => {
              if (link.name === "Our Services") {
                return (
                  <div key={link.name} className="relative group">
                    <button className="flex items-center gap-1 hover:text-teal-600 py-2">
                      Our Services <ChevronDown size={18} />
                    </button>
                    <div className="absolute left-0 bg-white shadow-lg rounded-lg w-52 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
                      {servicesLinks.map((service) => (
                        <Link key={service.name} to={service.href} className="block px-4 py-3 text-sm hover:bg-teal-50 hover:text-teal-600">
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              if (link.name === "Airline") {
                return (
                  <div key={link.name} className="relative group">
                    {/* Airline click par page khulega, hover par list */}
                    <Link to={link.href} className="flex items-center gap-1 hover:text-teal-600 py-2">
                      Airline <ChevronDown size={18} />
                    </Link>
                    <div className="absolute left-0 mt-0 w-56 bg-white shadow-xl rounded-xl opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50 max-h-[400px] overflow-y-auto">
                      {airlines.map((item) => (
                        <Link key={item.name} to={`/airline/${item.slug}`} className="block px-4 py-3 text-sm hover:bg-teal-500 hover:text-white transition">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link key={link.name} to={link.href} className="hover:text-teal-600 py-2">
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
  );
}