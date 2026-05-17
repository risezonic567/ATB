import React from "react";

export default function ChopaAirlinesContent() {
  return (
    <div className="bg-white text-black">

      {/* 🔷 Content */}
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-6">
        
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A2E48]">
          Copa Airlines Policies & Booking Guide
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Explore Copa Airlines baggage rules, flight change policy, cancellation terms, and refund options before booking your trip.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Copa Airlines is a leading international airline based in Panama, known for its reliable service and strong connectivity across North, Central, and South America. It offers a balance of comfort, efficiency, and competitive pricing for both domestic and international travelers.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Understanding{" "}
          <span className="text-teal-600 font-bold">
            Copa Airlines policies
          </span>{" "}
          including baggage allowance, flight changes, cancellations, and refunds is essential for a smooth travel experience. At{" "}
          <span className="font-semibold text-[#009689]">
            Airlines Ticket Booking
          </span>
          , we help USA travelers access clear airline information and book flights with confidence.
        </p>

        {/* 🔷 Highlight Box */}
        <div className="bg-[#009689]/10 border-l-4 border-[#009689] p-4 rounded-lg">
          <p className="text-[#1A2E48] font-medium">
            Tip: Always review Copa Airlines baggage and fare rules in advance to avoid unexpected charges and ensure a smooth journey.
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