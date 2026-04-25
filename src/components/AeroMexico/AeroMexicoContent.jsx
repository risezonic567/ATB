import React from "react";

export default function AeroMexicoContent() {
  return (
    <div className="bg-white text-black">

      {/* 🔷 Content */}
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-6">
        
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A2E48]">
          Aeromexico Airlines Travel Policies & Booking Guide
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Review Aeromexico baggage allowance, flight changes, cancellations, and refund options before planning your international trip.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Aeromexico Airlines is a leading full-service carrier connecting the United States with major destinations across Mexico, Latin America, and beyond. Known for its reliability and comfortable in-flight experience, Aeromexico offers a more traditional airline service compared to ultra-low-cost carriers.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Understanding{" "}
          <span className="text-teal-600 font-bold">
            Aeromexico Airlines policies
          </span>{" "}
          is important, especially for international travel where baggage rules, ticket flexibility, and refunds may vary. At{" "}
          <span className="font-semibold text-[#009689]">
            Airlines Ticket Booking
          </span>
          , we provide clear and updated travel information so you can plan your journey with confidence.
        </p>

        {/* 🔷 Highlight Box */}
        <div className="bg-[#009689]/10 border-l-4 border-[#009689] p-4 rounded-lg">
          <p className="text-[#1A2E48] font-medium">
            Tip: Aeromexico offers a full-service flying experience with better comfort and connectivity for international travelers.
          </p>
        </div>

        {/* 🔷 CTA */}
        <div className="mt-6">
          <button className="bg-teal-600 hover:bg-[#1A2E48] text-white px-6 py-3 rounded-xl font-semibold transition cursor-pointer">
            Book Flights Now
          </button>
        </div>
      </div>
    </div>
  );
}