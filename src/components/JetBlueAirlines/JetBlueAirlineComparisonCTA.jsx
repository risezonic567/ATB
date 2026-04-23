import React from "react";

export default function JetBlueAirlineComparisonCTA() {
  return (
    <div className="bg-[#f8fafc] text-black py-16">
      <div className="max-w-7xl mx-auto px-4 space-y-16">

        {/* COMPARISON SECTION */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A2E48] mb-6 text-center">
            Southwest vs Other Airlines
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Southwest */}
            <div className="p-6 rounded-xl border hover:shadow-xl transition">
              <h3 className="text-lg font-semibold text-[#009689] mb-3">
                Southwest Airlines
              </h3>
              <p className="text-gray-600 text-sm">
                Free checked bags and no change fees
              </p>
            </div>

            {/* Frontier */}
            <div className="p-6 rounded-xl border hover:shadow-xl transition">
              <h3 className="text-lg font-semibold text-[#009689] mb-3">
                Frontier Airlines
              </h3>
              <p className="text-gray-600 text-sm">
                Lower base fares but additional service charges
              </p>
            </div>

            {/* Delta */}
            <div className="p-6 rounded-xl border hover:shadow-xl transition">
              <h3 className="text-lg font-semibold text-[#009689] mb-3">
                Delta Airlines
              </h3>
              <p className="text-gray-600 text-sm">
                Premium experience with higher pricing
              </p>
            </div>
          </div>

          <p className="mt-6 text-gray-700 text-center">
            Southwest is ideal for travelers looking for flexibility and value without hidden fees.
          </p>
        </div>

        {/* CTA SECTION */}
        <div className="bg-gradient-to-r from-[#009689] to-[#1A2E48] text-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Book Southwest Flights with Confidence
          </h2>

          <p className="max-w-3xl mx-auto text-gray-100 mb-6">
            Looking for affordable and flexible Southwest Airlines flights?{" "}
            <span className="text-green-300 font-bold">
              Airlines Ticket Booking
            </span>{" "}
            helps you compare fares, understand airline policies, and book with ease. 
            Start planning your trip today.
          </p>

          <button className="bg-teal-600 hover:bg-[#1A2E48] text-white px-6 py-3 rounded-xl font-semibold transition cursor-pointer">
            Search Flights
          </button>
        </div>

      </div>
    </div>
  );
}