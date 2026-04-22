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

  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");
  const langRef = useRef(null);

  const languages = [
    { name: "English", code: "en", label: "EN" },
    { name: "Spanish", code: "es", label: "ES" },
  ];

  const handleLangChange = (langCode) => {
    const value = `/en/${langCode}`;

    document.cookie = `googtrans=${value}; path=/`;
    document.cookie = `googtrans=${value}; path=/; domain=.${window.location.hostname}`;

    window.location.reload();
  };

  useEffect(() => {
  // Load script once
  if (!document.getElementById("google-translate-script")) {
    const script = document.createElement("script");
    script.id = "google-translate-script";
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

  // Fix banner forcefully (fallback)
  const interval = setInterval(() => {
    const el = document.querySelector("body > .skiptranslate");
    if (el) el.style.display = "none";
    document.body.style.top = "0px";
  }, 500);

  // Set current language
  const match = document.cookie.match(/googtrans=\/en\/(\w+)/);
  if (match) {
    const lang = languages.find((l) => l.code === match[1]);
    if (lang) setCurrentLang(lang.label);
  }

  // Outside click
  const handleClickOutside = (e) => {
    if (langRef.current && !langRef.current.contains(e.target)) {
      setLangOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    clearInterval(interval);
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b">
      
      <div
        id="google_translate_element"
        style={{ visibility: "hidden", position: "absolute", zIndex: -1 }}
      ></div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">

          <Link to="/" className="flex items-center">
            <img
              src="https://i.postimg.cc/TP6w89Pc/ATB-LOGO-PNG.png"
              alt="logo"
              className="h-10 md:h-12"
            />
          </Link>

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
                <Link key={link.name} to={link.href} className="hover:text-teal-600">
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">

            {/* 🌐 Language */}
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
                      onClick={() => handleLangChange(lang.code)}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm"
                    >
                      {lang.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="tel:+1 866-307-5957"
              className="hidden md:flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-full"
            >
              <Phone size={18} />
              <span className="text-sm font-semibold">
                +1 866-307-5957
              </span>
            </Link>

            <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU SAME */}
      <div className={`lg:hidden bg-white border-t ${menuOpen ? "max-h-[600px] py-4" : "max-h-0 overflow-hidden"}`}>
        <div className="px-4 space-y-3">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className="block py-3">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}