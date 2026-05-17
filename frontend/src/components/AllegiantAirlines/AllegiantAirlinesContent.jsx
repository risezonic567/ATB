import React from "react";

export default function AllegiantAirlinesContent() {
  return (
    <div className="bg-white text-black">

      {/* 🔷 Content */}
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-6">
        
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A2E48]">
          Allegiant Air Airlines Travel Policies, Services & Booking Guide
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Check Allegiant Air baggage rules, flight changes, cancellations, and booking details before planning your trip.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Allegiant Air is a U.S.-based ultra-low-cost airline focused on providing affordable travel options, especially for leisure destinations. It connects smaller cities to popular vacation spots, making it a convenient choice for budget-conscious travelers.
        </p>

        <p className="text-gray-700 leading-relaxed">
          <>
            Understanding{" "}
            <span className="text-teal-600 font-bold">
              Allegiant Air Airlines policies
            </span>{" "}
            and services is important before booking, as many features such as baggage, seat selection, and changes come with additional costs. At{" "}
            <span className="font-semibold text-[#009689]">
              Airlines Ticket Booking
            </span>
            , we help you understand these details clearly so you can plan your travel without surprises.
          </>
        </p>

        {/* 🔷 Highlight Box */}
        <div className="bg-[#009689]/10 border-l-4 border-[#009689] p-4 rounded-lg">
          <p className="text-[#1A2E48] font-medium">
            Tip: Always review airline policies before booking to avoid hidden charges and unexpected costs.
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