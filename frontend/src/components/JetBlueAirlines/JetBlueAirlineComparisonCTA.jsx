import React from "react";

export default function JetBlueAirlineComparisonCTA() {
  return (
    <div className="bg-[#f8fafc] text-black py-16">
      <div className="max-w-7xl mx-auto px-4 space-y-16">

        {/* COMPARISON SECTION */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A2E48] mb-6 text-center">
            JetBlue vs Other Airlines
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            
            {/* JetBlue */}
            <div className="p-6 rounded-xl border hover:shadow-xl transition">
              <h3 className="text-lg font-semibold text-[#009689] mb-3">
                JetBlue Airlines
              </h3>
              <p className="text-gray-600 text-sm">
                Comfort + affordability balance
              </p>
            </div>

            {/* Spirit */}
            <div className="p-6 rounded-xl border hover:shadow-xl transition">
              <h3 className="text-lg font-semibold text-[#009689] mb-3">
                Spirit Airlines
              </h3>
              <p className="text-gray-600 text-sm">
                Lowest fares with extra service charges
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
            JetBlue is ideal for travelers who want better comfort without paying premium airline prices.
          </p>
        </div>

        {/* CTA SECTION */}
        <div className="bg-gradient-to-r from-[#009689] to-[#1A2E48] text-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Book JetBlue Airlines Flights Today
          </h2>

          <p className="max-w-3xl mx-auto text-gray-100 mb-6">
            Looking for affordable yet comfortable flights?{" "}
            <span className="text-green-300 font-bold">
              Airlines Ticket Booking
            </span>{" "}
            helps you compare JetBlue fares, understand policies, and book your journey with confidence.
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
            <li>✔ Book early for lower fares</li>
            <li>✔ Choose the right fare type for flexibility</li>
            <li>✔ Review baggage rules before booking</li>
            <li>✔ Use travel credits before expiration</li>
            <li>✔ Compare routes and travel dates</li>
          </ul>

          <p className="mt-6 text-gray-600">
            At Airlines Ticket Booking, we help you find the best deals and manage your bookings easily.
          </p>
        </div>

      </div>
    </div>
  );
}