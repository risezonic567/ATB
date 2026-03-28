import React, { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

// Main nav links
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Flight Booking", href: "/flight-booking-services" },
  { name: "Hotel Booking", href: "/hotel-booking-services" },
  { name: "Tour Packages", href: "/tour&packages" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "#" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact-us" },
];

// Services dropdown links
const servicesLinks = [
  { name: "Visa Services", href: "/visa-service" },
  { name: "Travel Insurance", href: "/travel-insurance" },
  { name: "Car Rental", href: "/car-rental-services" },
  
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 w-full z-50 shadow-lg bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              className="h-12 md:h-14"
              src="https://i.postimg.cc/TP6w89Pc/ATB-LOGO-PNG.png"
              alt="Airlines Ticket Booking Logo"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8 items-center">
            {navLinks.map((link) =>
              link.name === "Our Services" ? (
                <div key={link.name} className="relative">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="text-gray-700 font-medium text-base hover:text-teal-600"
                  >
                    Our Services
                  </button>

                  {servicesOpen && (
                    <div className="absolute top-full mt-3 bg-white shadow-xl rounded-xl w-48 border overflow-hidden">
                      {servicesLinks.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          onClick={() => setServicesOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-700 font-medium text-base hover:text-teal-600 transition-colors"
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Call & Mobile Button */}
          <div className="flex items-center gap-4">
            <Link
              to="tel:+1-844-821-5950"
              className="hidden sm:flex items-center gap-2 bg-teal-600 text-white font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-teal-700"
            >
              <Phone className="h-5 w-5" />
              <span className="hidden md:inline text-sm">
                +1-844-821-5950
              </span>
              <span className="inline md:hidden text-sm">
                Call Us
              </span>
            </Link>

            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-700 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-gray-50 border-t border-gray-100 px-4 pb-4">
          <ul className="space-y-2">
            {navLinks.map((link) =>
              link.name === "Our Services" ? (
                <li key={link.name}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex justify-between w-full p-3 text-lg font-medium text-gray-800 rounded-lg hover:bg-teal-100"
                  >
                    Our Services
                    <span>{servicesOpen ? "−" : "+"}</span>
                  </button>

                  {servicesOpen && (
                    <div className="pl-6 space-y-2">
                      {servicesLinks.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          onClick={toggleMenu}
                          className="block text-gray-700 py-2"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ) : (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={toggleMenu}
                    className="block w-full p-3 text-lg font-medium text-gray-800 rounded-lg hover:bg-teal-100"
                  >
                    {link.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
