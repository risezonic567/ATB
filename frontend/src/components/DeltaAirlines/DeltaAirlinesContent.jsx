import React from "react";

export default function DeltaAirlinesContent() {
  return (
    <div className="bg-white text-black">

      {/* 🔷 Content */}
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-6">
        
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A2E48]">
          Delta Airlines Travel Policies, Services & Booking Guide
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Explore Delta Airlines flight booking, baggage rules, policies, and key travel information before planning your trip.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Delta Airlines is one of the most trusted and widely recognized carriers in the United States, offering both domestic and international flight services. With a strong global network, premium travel experience, and reliable operations, Delta has become a preferred choice for millions of travelers.
        </p>

        <p className="text-gray-700 leading-relaxed">
          <>
            Understanding{" "}
            <span className="text-teal-600 font-bold">
              Delta Airlines policies and services
            </span>{" "}
            is essential before booking, especially when it comes to baggage, cancellations, and flight changes. At{" "}
            <span className="font-semibold text-[#009689]">
              Airlines Ticket Booking
            </span>
            , we simplify this information so you can plan your journey without confusion.
          </>
        </p>

        {/* 🔷 Highlight Box */}
        <div className="bg-[#009689]/10 border-l-4 border-[#009689] p-4 rounded-lg">
          <p className="text-[#1A2E48] font-medium">
            Tip: Review fare rules and baggage policies in advance to make the most of Delta’s premium services and avoid unexpected charges.
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