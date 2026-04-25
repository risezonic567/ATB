import React from "react";

export default function AllegiantAirlinesComparisonCTA() {
  return (
    <div className="bg-[#f8fafc] text-black py-16">
      <div className="max-w-7xl mx-auto px-4 space-y-16">

        {/* BOOKING & TIPS SECTION */}
        <div className="bg-[#1A2E48] text-white rounded-2xl p-8 md:p-12 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#009689]">
            Booking & Money-Saving Tips
          </h2>

          <p className="mb-6 text-gray-300">
            To save more when flying Allegiant:
          </p>

          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Book early for the lowest fares",
              "Add baggage during booking to avoid higher fees",
              "Travel light to reduce extra costs",
              "Avoid last-minute changes",
              "Check route availability in advance",
            ].map((tip, i) => (
              <li key={i} className="bg-white/10 p-4 rounded-xl">
                ✔ {tip}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-gray-400">
            At Airlines Ticket Booking, we help you find the best deals and manage your bookings easily.
          </p>
        </div>

        {/* COMPARISON SECTION */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A2E48] mb-6 text-center">
            Allegiant Air vs Other Airlines
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-6 rounded-xl border hover:shadow-xl transition">
              <h3 className="text-lg font-semibold text-[#009689] mb-3">
                Allegiant Air
              </h3>
              <p className="text-gray-600 text-sm">
                Ultra-low-cost with limited routes
              </p>
            </div>

            <div className="p-6 rounded-xl border hover:shadow-xl transition">
              <h3 className="text-lg font-semibold text-[#009689] mb-3">
                Spirit Airlines
              </h3>
              <p className="text-gray-600 text-sm">
                Similar pricing model with more frequent flights
              </p>
            </div>

            <div className="p-6 rounded-xl border hover:shadow-xl transition">
              <h3 className="text-lg font-semibold text-[#009689] mb-3">
                Delta Airlines
              </h3>
              <p className="text-gray-600 text-sm">
                Premium service with higher pricing
              </p>
            </div>

          </div>

          <p className="mt-6 text-gray-700 text-center">
            Allegiant is best for travelers who prioritize low fares and direct leisure routes.
          </p>
        </div>

        {/* CTA SECTION */}
        <div className="bg-gradient-to-r from-[#009689] to-[#1A2E48] text-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Book Allegiant Air Flights at the Best Prices
          </h2>

          <p className="max-w-3xl mx-auto text-gray-100 mb-6">
            Looking for budget-friendly travel options?{" "}
            <span className="text-green-600 font-bold">
              Airlines Ticket Booking
            </span>{" "}
            helps you compare Allegiant fares, understand policies, and book your trip with confidence.
          </p>

          <button className="bg-teal-600 hover:bg-[#1A2E48] text-white px-6 py-3 rounded-xl font-semibold transition cursor-pointer">
            Search Flights
          </button>
        </div>

      </div>
    </div>
  );
}