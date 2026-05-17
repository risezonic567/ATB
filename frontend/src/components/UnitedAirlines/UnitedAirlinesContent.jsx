import React from "react";

export default function UnitedAirlinesContent() {
  return (
    <div className="bg-white text-black">

      {/* 🔷 Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-6">
        
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A2E48]">
          United Airlines Travel Policies, Services & Booking Guide
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Explore United Airlines booking details, baggage rules, flight policies, 
          and travel options before planning your trip.
        </p>

        <p className="text-gray-700 leading-relaxed">
          United Airlines is one of the largest carriers in the United States, 
          offering extensive domestic and international flight services. With a 
          strong global presence and a wide route network, United is a preferred 
          choice for both business and leisure travelers.
        </p>

        <p className="text-gray-700 leading-relaxed">
          <>
            Understanding <span className="text-teal-600 font-bold">United Airlines policies and services</span> is 
            important before booking, especially when it comes to baggage rules, 
            ticket flexibility, and refunds. At{" "}
            <span className="font-semibold text-[#009689]">
              Airlines Ticket Booking
            </span>
            , we provide clear and easy-to-understand information to help you 
            travel without hassle.
          </>
        </p>

        {/* 🔷 Highlight Box */}
        <div className="bg-[#009689]/10 border-l-4 border-[#009689] p-4 rounded-lg">
          <p className="text-[#1A2E48] font-medium">
            Tip: Always review airline policies before booking to avoid hidden
            charges and last-minute surprises.
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