import React from "react";

export default function VolarisAirlineContent() {
  return (
    <div className="bg-white text-black">

      {/* 🔷 Content */}
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-6">
        
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A2E48]">
          Volaris Airlines Travel Policies & Booking Guide
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Check Volaris baggage rules, flight changes, cancellation terms, and refund options before planning your trip.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Volaris Airlines is a popular low-cost carrier connecting the United States with Mexico and other Latin American destinations. Known for its affordable fares and flexible travel options, Volaris is a preferred choice for travelers looking for budget-friendly international flights.
        </p>

        <p className="text-gray-700 leading-relaxed">
          <>
            Understanding{" "}
            <span className="text-teal-600 font-bold">
              Volaris Airlines policies
            </span>{" "}
            is important to avoid unexpected fees related to baggage, flight changes, and cancellations. At{" "}
            <span className="font-semibold text-[#009689]">
              Airlines Ticket Booking
            </span>
            , we help USA travelers find the best deals while clearly understanding airline rules for a smooth and hassle-free travel experience.
          </>
        </p>

        {/* 🔷 Highlight Box */}
        <div className="bg-[#009689]/10 border-l-4 border-[#009689] p-4 rounded-lg">
          <p className="text-[#1A2E48] font-medium">
            Tip: Always review baggage rules and fare conditions before booking to avoid extra charges and travel disruptions.
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