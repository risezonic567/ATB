import React from "react";

export default function FrontierAirlinesContent() {
  return (
    <div className="bg-white text-black">
      
      {/* 🔷 Banner */}
      <div className="relative w-full h-[260px] md:h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
          alt="Frontier Airlines"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1A2E48]/70 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-4xl font-bold text-center px-4">
            Frontier Airlines Policies & Booking Guide
          </h1>
        </div>
      </div>

      {/* 🔷 Content */}
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-6">
        
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A2E48]">
          Frontier Airlines Policies & Booking Guide
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Check Frontier Airlines baggage rules, flight change policy,
          cancellation terms, and refund options before booking your flight.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Frontier Airlines is one of the leading ultra-low-cost carriers in the
          United States, known for offering budget-friendly fares across domestic
          and international destinations. While ticket prices are affordable,
          many additional services such as baggage, seat selection, and flight
          changes come with extra charges.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Understanding <span className="text-teal-600 font-bold">Frontier Airlines policies</span> is essential to avoid
          unexpected fees and manage your travel plans smoothly. At{" "}
          <span className="font-semibold text-[#009689]">
            Airlines Ticket Booking
          </span>
          , we help travelers across the USA with accurate airline information
          and affordable booking solutions so you can travel smarter and
          stress-free.
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