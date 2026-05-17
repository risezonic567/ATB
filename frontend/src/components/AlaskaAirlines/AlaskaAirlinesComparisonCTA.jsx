import React from "react";

export default function AlaskaAirlinesComparisonCTA() {
  return (
    <div className="bg-[#f8fafc] text-black py-16">
      <div className="max-w-7xl mx-auto px-4 space-y-16">

        {/* BOOKING TIPS SECTION */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A2E48] mb-6 text-center">
            Booking & Money-Saving Tips
          </h2>

          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Book early for lower fares",
              "Choose flexible fares if plans may change",
              "Review baggage inclusion before booking",
              "Use travel credits before expiration",
              "Compare travel dates for better deals",
            ].map((tip, i) => (
              <li key={i} className="bg-gray-100 p-4 rounded-xl">
                ✔ {tip}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-gray-700 text-center">
            At <span className="font-semibold text-[#009689]">Airlines Ticket Booking</span>, we help you find the best fares and manage your bookings easily.
          </p>
        </div>

        {/* COMPARISON SECTION */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A2E48] mb-6 text-center">
            Alaska Airlines vs Other Airlines
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-6 rounded-xl border hover:shadow-xl transition">
              <h3 className="text-lg font-semibold text-[#009689] mb-3">
                Alaska Airlines
              </h3>
              <p className="text-gray-600 text-sm">
                Strong West Coast network with good service value
              </p>
            </div>

            <div className="p-6 rounded-xl border hover:shadow-xl transition">
              <h3 className="text-lg font-semibold text-[#009689] mb-3">
                United Airlines
              </h3>
              <p className="text-gray-600 text-sm">
                Larger global network
              </p>
            </div>

            <div className="p-6 rounded-xl border hover:shadow-xl transition">
              <h3 className="text-lg font-semibold text-[#009689] mb-3">
                Southwest Airlines
              </h3>
              <p className="text-gray-600 text-sm">
                Free baggage and flexible policies
              </p>
            </div>

          </div>

          <p className="mt-6 text-gray-700 text-center">
            Alaska Airlines is ideal for travelers looking for reliable domestic travel with good service quality.
          </p>
        </div>

        {/* CTA SECTION */}
        <div className="bg-gradient-to-r from-[#009689] to-[#1A2E48] text-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Book Alaska Airlines Flights with Confidence
          </h2>

          <p className="max-w-3xl mx-auto text-gray-100 mb-6">
            Looking for reliable and affordable travel options?{" "}
            <span className="text-green-400 font-bold">Airlines Ticket Booking</span> helps you compare Alaska Airlines fares, understand policies, and book your journey with ease.
          </p>

          <button className="bg-teal-600 hover:bg-[#1A2E48] text-white px-6 py-3 rounded-xl font-semibold transition cursor-pointer">
            Search Flights
          </button>
        </div>

      </div>
    </div>
  );
}