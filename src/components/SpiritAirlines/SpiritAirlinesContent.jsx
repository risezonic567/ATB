import React from "react";

export default function SpiritAirlinesContent() {
  return (
    <div className="bg-white text-black">
      
      {/* 🔷 Banner */}
      <div className="relative w-full h-[260px] md:h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd"
          alt="Spirit Airlines"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1A2E48]/70 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-4xl font-bold text-center px-4">
            Spirit Airlines Policies & Booking Guide
          </h1>
        </div>
      </div>

      {/* 🔷 Content */}
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-6">
        
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A2E48]">
          Spirit Airlines Policies & Booking Guide
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Check Spirit Airlines baggage fees, flight change policy,
          cancellation terms, and refund options before booking your flight.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Spirit Airlines is a leading ultra-low-cost carrier in the United
          States, known for offering some of the lowest base fares in the
          industry. However, most additional services such as baggage, seat
          selection, and onboard options come at an extra cost.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Understanding{" "}
          <span className="text-teal-600 font-bold">
            Spirit Airlines policies
          </span>{" "}
          is important to avoid unexpected fees and manage your travel plans
          effectively. At{" "}
          <span className="font-semibold text-[#009689]">
            Airlines Ticket Booking
          </span>
          , we help USA travelers find affordable flights and clearly understand
          airline rules so they can travel with confidence.
        </p>

        {/* 🔷 Highlight Box */}
        <div className="bg-[#009689]/10 border-l-4 border-[#009689] p-4 rounded-lg">
          <p className="text-[#1A2E48] font-medium">
            Tip: Spirit Airlines offers very low base fares, so add extras
            carefully to keep your travel budget under control.
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