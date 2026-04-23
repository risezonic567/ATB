import React from "react";

export default function JetBlueAirlineContent() {
  return (
    <div className="bg-white text-black">
      
      {/* 🔷 Banner */}
      <div className="relative w-full h-[260px] md:h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
          alt="Southwest Airlines"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1A2E48]/70 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-4xl font-bold text-center px-4">
            Southwest Airlines Policies & Booking Guide
          </h1>
        </div>
      </div>

      {/* 🔷 Content */}
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-6">
        
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A2E48]">
          Southwest Airlines Policies & Booking Guide
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Explore Southwest Airlines baggage rules, flight change policy,
          cancellation terms, and refund options before booking your trip.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Southwest Airlines is one of the most popular carriers in the United
          States, known for its customer-friendly policies and flexible travel
          options. Unlike many airlines, Southwest offers benefits such as free
          checked baggage and no change fees, making it a preferred choice for
          budget-conscious travelers.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Understanding{" "}
          <span className="text-teal-600 font-bold">
            Southwest Airlines policies
          </span>{" "}
          helps you make the most of these benefits while avoiding confusion
          during booking or travel. At{" "}
          <span className="font-semibold text-[#009689]">
            Airlines Ticket Booking
          </span>
          , we provide clear and updated airline information so travelers across
          the USA can plan their trips with confidence.
        </p>

        {/* 🔷 Highlight Box */}
        <div className="bg-[#009689]/10 border-l-4 border-[#009689] p-4 rounded-lg">
          <p className="text-[#1A2E48] font-medium">
            Tip: Southwest allows free checked bags and no change fees, so take
            advantage of flexible booking options.
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