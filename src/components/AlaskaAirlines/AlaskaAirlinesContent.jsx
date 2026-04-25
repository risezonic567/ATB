import React from "react";

export default function AlaskaAirlinesContent() {
  return (
    <div className="bg-white text-black">

      {/* 🔷 Content */}
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-6">
        
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A2E48]">
          Alaska Airlines Travel Policies, Services & Booking Guide
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Explore Alaska Airlines booking details, baggage rules, flight policies, and travel options before planning your trip.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Alaska Airlines is a well-established U.S. carrier known for its strong customer satisfaction, reliable service, and extensive coverage across the West Coast and beyond. With a reputation for value and comfort, Alaska Airlines offers a balanced travel experience for both domestic and international passengers.
        </p>

        <p className="text-gray-700 leading-relaxed">
          <>
            Understanding{" "}
            <span className="text-teal-600 font-bold">
              Alaska Airlines policies and services
            </span>{" "}
            is essential before booking, especially for baggage rules, cancellations, and flight changes. At{" "}
            <span className="font-semibold text-[#009689]">
              Airlines Ticket Booking
            </span>
            , we help travelers access clear and accurate information to plan their trips smoothly.
          </>
        </p>

        {/* 🔷 Highlight Box */}
        <div className="bg-[#009689]/10 border-l-4 border-[#009689] p-4 rounded-lg">
          <p className="text-[#1A2E48] font-medium">
            Tip: Review airline policies in advance to avoid unexpected fees and ensure a smooth travel experience.
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