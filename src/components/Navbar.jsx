import React, { useState, useEffect, useRef } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Flight Booking", href: "/flight-booking-services" },
  { name: "Hotel Booking", href: "/hotel-booking-services" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "#" },
];

const servicesLinks = [
  { name: "Visa Services", href: "/visa-service" },
  { name: "Travel Insurance", href: "/travel-insurance" },
  { name: "Car Rental", href: "/car-rental-services" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // 🌐 Google Translate States
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");
  const langRef = useRef(null);

  const languages = [
    { name: "English", code: "en", label: "EN" },
    { name: "Spanish", code: "es", label: "ES" },
  ];

  // 🌐 Change Language
  const handleLangChange = (langCode, label) => {
    document.cookie = `googtrans=/en/${langCode}; path=/`;
    window.location.reload();
  };

  useEffect(() => {
    // Load Google Script once
    if (!window.googleTranslateElementInit) {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,es",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    // Set current language from cookie
    const match = document.cookie.match(/googtrans=\/en\/(\w+)/);
    if (match) {
      const lang = languages.find((l) => l.code === match[1]);
      if (lang) setCurrentLang(lang.label);
    }

    // Close dropdown on outside click
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
      
      {/* Hidden Google Element */}
      <div
        id="google_translate_element"
        style={{ visibility: "hidden", position: "absolute", zIndex: -1 }}
      ></div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src="https://i.postimg.cc/TP6w89Pc/ATB-LOGO-PNG.png"
              alt="logo"
              className="h-10 md:h-12"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-7 font-medium text-gray-700">
            {navLinks.map((link) => {
              if (link.name === "Our Services") {
                return (
                  <div key={link.name} className="relative group">
                    <button className="flex cursor-pointer items-center gap-1 hover:text-teal-600">
                      Our Services
                      <ChevronDown size={18} />
                    </button>

                    <div className="absolute left-0 bg-white shadow-lg rounded-lg w-52 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition">
                      {servicesLinks.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="block px-4 py-4 text-sm hover:bg-teal-50 hover:text-teal-600"
                        >
                          {service.name}
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
                  className="hover:text-teal-600 transition"
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* 🌐 Language Dropdown */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-sm font-semibold text-gray-700"
              >
                {currentLang}
                <ChevronDown size={14} />
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg">
                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      onClick={() => handleLangChange(lang.code, lang.label)}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm"
                    >
                      {lang.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* CALL BUTTON */}
            <Link
              to="tel:+1 866-307-5957"
              className="hidden md:flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition"
            >
              <Phone size={18} />
              <span className="text-sm font-semibold">
                +1 866-307-5957
              </span>
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              className="lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU (UNCHANGED) */}
      <div
        className={`lg:hidden bg-white border-t transition-all duration-300 ${
          menuOpen ? "max-h-[600px] py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="px-4 space-y-3">
          {navLinks.map((link) => {
            if (link.name === "Our Services") {
              return (
                <div key={link.name}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex justify-between w-full text-left py-3 text-gray-800 font-medium"
                  >
                    Our Services
                    <ChevronDown
                      size={18}
                      className={`${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {servicesOpen && (
                    <div className="pl-4 space-y-2">
                      {servicesLinks.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          onClick={() => setMenuOpen(false)}
                          className="block text-gray-600 py-2"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-gray-800 font-medium"
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}