import React from "react";

export default function VolarisAirlineComparisonCTA() {
  return (
    <div className="bg-[#f8fafc] text-black py-16">
      <div className="max-w-7xl mx-auto px-4 space-y-16">

        {/* COMPARISON SECTION */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A2E48] mb-6 text-center">
            Volaris vs Other Airlines
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Volaris */}
            <div className="p-6 rounded-xl border hover:shadow-xl transition">
              <h3 className="text-lg font-semibold text-[#009689] mb-3">
                Volaris Airlines
              </h3>
              <p className="text-gray-600 text-sm">
                Budget-friendly fares for U.S.–Mexico routes
              </p>
            </div>

            {/* Spirit */}
            <div className="p-6 rounded-xl border hover:shadow-xl transition">
              <h3 className="text-lg font-semibold text-[#009689] mb-3">
                Spirit Airlines
              </h3>
              <p className="text-gray-600 text-sm">
                Similar low-cost model with additional service fees
              </p>
            </div>

            {/* Aeromexico */}
            <div className="p-6 rounded-xl border hover:shadow-xl transition">
              <h3 className="text-lg font-semibold text-[#009689] mb-3">
                Aeromexico Airlines
              </h3>
              <p className="text-gray-600 text-sm">
                More inclusive services with higher pricing
              </p>
            </div>

          </div>

          <p className="mt-6 text-gray-700 text-center">
            Volaris is ideal for travelers looking for affordable international travel without paying for unnecessary extras.
          </p>
        </div>

        {/* CTA SECTION */}
        <div className="bg-gradient-to-r from-[#009689] to-[#1A2E48] text-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Book Volaris Flights at the Best Prices
          </h2>

          <p className="max-w-3xl mx-auto text-gray-100 mb-6">
            Looking for affordable Volaris Airlines flights?{" "}
            <span className="text-green-300 font-bold">
              Airlines Ticket Booking
            </span>{" "}
            helps you compare fares, understand airline policies, and book your trip with confidence. Start planning today.
          </p>

          <button className="bg-teal-600 hover:bg-[#1A2E48] text-white px-6 py-3 rounded-xl font-semibold transition cursor-pointer">
            Search Flights
          </button>
        </div>

        {/* TIPS SECTION */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
          <h2 className="text-xl md:text-2xl font-bold text-[#1A2E48] mb-6">
            BOOKING & MONEY-SAVING TIPS
          </h2>

          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li>✔ Book tickets early for better fares</li>
            <li>✔ Add baggage during booking to avoid higher fees later</li>
            <li>✔ Travel light to reduce extra costs</li>
            <li>✔ Avoid last-minute changes</li>
            <li>✔ Review fare rules carefully before confirming</li>
          </ul>

          <p className="mt-6 text-gray-600">
            At Airlines Ticket Booking, we help you compare fares and find the best travel options.
          </p>
        </div>

      </div>
    </div>
  );
}