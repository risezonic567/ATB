import React from "react";

export default function AeroMexicoComparisonCTA() {
  return (
    <div className="bg-[#f8fafc] text-black py-16">
      <div className="max-w-7xl mx-auto px-4 space-y-16">

        {/* COMPARISON SECTION */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A2E48] mb-6 text-center">
            Aeromexico vs Other Airlines
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Aeromexico */}
            <div className="p-6 rounded-xl border hover:shadow-xl transition">
              <h3 className="text-lg font-semibold text-[#009689] mb-3">
                Aeromexico
              </h3>
              <p className="text-gray-600 text-sm">
                Full-service airline with included baggage and comfort
              </p>
            </div>

            {/* Spirit */}
            <div className="p-6 rounded-xl border hover:shadow-xl transition">
              <h3 className="text-lg font-semibold text-[#009689] mb-3">
                Spirit Airlines
              </h3>
              <p className="text-gray-600 text-sm">
                Lower fares but additional service fees
              </p>
            </div>

            {/* Copa */}
            <div className="p-6 rounded-xl border hover:shadow-xl transition">
              <h3 className="text-lg font-semibold text-[#009689] mb-3">
                Copa Airlines
              </h3>
              <p className="text-gray-600 text-sm">
                Strong regional connectivity across the Americas
              </p>
            </div>

          </div>

          <p className="mt-6 text-gray-700 text-center">
            Aeromexico is a suitable choice for travelers looking for a balance of comfort, service, and international connectivity.
          </p>
        </div>

        {/* CTA SECTION */}
        <div className="bg-gradient-to-r from-[#009689] to-[#1A2E48] text-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Book Aeromexico Flights with Confidence
          </h2>

          <p className="max-w-3xl mx-auto text-gray-100 mb-6">
            Find competitive fares and reliable travel options with{" "}
            <span className="text-green-300 font-bold">
              Airlines Ticket Booking
            </span>. Book your Aeromexico flights today and plan your journey with ease.
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
            <li>✔ Book early for international routes</li>
            <li>✔ Choose fare types with included baggage</li>
            <li>✔ Review visa and travel requirements in advance</li>
            <li>✔ Avoid last-minute changes</li>
            <li>✔ Compare fares before confirming</li>
          </ul>

          <p className="mt-6 text-gray-600">
            At Airlines Ticket Booking, we help you find the best options and manage your travel smoothly.
          </p>
        </div>

      </div>
    </div>
  );
}