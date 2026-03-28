import React from "react";
import { Phone, MessageCircle, User, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 py-2">
          
          {/* Logo */}
          <div className="flex items-center w-full sm:w-auto justify-between">
            <img src="/ATB-LOGO-PNG.png" alt="ATB" className="h-8" />

            {/* Mobile Chat Icon */}
            <div className="sm:hidden flex gap-2">
              <button className="p-2 border rounded-full">
                <MessageCircle className="w-5 h-5" />
              </button>
              <button className="p-2 border rounded-full">
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col sm:flex-row gap-2 items-center w-full sm:w-auto">
            
            {/* Call Box */}
            <div className="flex items-center gap-2 border border-green-500 rounded-full px-3 py-1 w-full sm:w-auto justify-center sm:justify-start">
              <img
                src="https://i.pravatar.cc/40"
                alt="Agent"
                className="w-7 h-7 rounded-full"
              />

              <div className="text-xs sm:text-sm">
                <p className="font-semibold text-gray-700 hidden sm:block">
                  Book Now - Call us 24/7
                </p>
                <p className="text-green-600 font-bold">
                  <a href="tel:+1-844-821-5950">+1-844-821-5950</a>
                </p>
              </div>

              {/* Mobile Call Icon */}
              <Phone className="w-4 h-4 text-green-600 sm:hidden" />
            </div>

            {/* Desktop Actions */}
            <div className="hidden sm:flex items-center gap-4 text-sm text-gray-700">
              <button className="p-2 border rounded-full hover:bg-gray-100">
                <MessageCircle className="w-5 h-5" />
              </button>

              <button className="flex items-center gap-1 ">
                USD($)
                <ChevronDown className="w-4 h-4" />
              </button>

              <button className="flex items-center gap-1 ">
                <User className="w-5 h-5" />
                Sign In / Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
