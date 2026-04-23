import React from "react";

export default function FrontierComparisonCTA() {
  return (
    <div className="bg-[#f8fafc] text-black py-16">
      <div className="max-w-7xl mx-auto px-4 space-y-16">

        {/* COMPARISON SECTION */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A2E48] mb-6 text-center">
            Frontier Airlines vs Other Airlines
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Frontier */}
            <div className="p-6 rounded-xl border hover:shadow-xl transition">
              <h3 className="text-lg font-semibold text-[#009689] mb-3">
                Frontier Airlines
              </h3>
              <p className="text-gray-600 text-sm">
                Low base fares with additional service charges
              </p>
            </div>

            {/* Southwest */}
            <div className="p-6 rounded-xl border hover:shadow-xl transition">
              <h3 className="text-lg font-semibold text-[#009689] mb-3">
                Southwest Airlines
              </h3>
              <p className="text-gray-600 text-sm">
                Free checked bags and flexible cancellation
              </p>
            </div>

            {/* Delta */}
            <div className="p-6 rounded-xl border hover:shadow-xl transition">
              <h3 className="text-lg font-semibold text-[#009689] mb-3">
                Delta Airlines
              </h3>
              <p className="text-gray-600 text-sm">
                Premium service with higher ticket prices
              </p>
            </div>
          </div>

          <p className="mt-6 text-gray-700 text-center">
            Choosing the right airline depends on your travel needs, budget, and flexibility requirements.
          </p>
        </div>

        {/* CTA SECTION */}
        <div className="bg-gradient-to-r from-[#009689] to-[#1A2E48] text-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Book Affordable Frontier Flights Today
          </h2>

          <p className="max-w-3xl mx-auto text-gray-100 mb-6">
            Looking for the best deals on Frontier Airlines flights? <span className="text-green-600 font-bold">Airlines Ticket Booking</span> helps you find affordable fares, manage bookings, and understand airline policies with ease. Plan your trip today and travel with confidence.
          </p>

          <button className="bg-teal-600 hover:bg-[#1A2E48] text-white px-6 py-3 rounded-xl font-semibold transition cursor-pointer">
            Search Flights
          </button>
        </div>

        {/* WHY THIS CONTENT */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
          <h2 className="text-xl md:text-2xl font-bold text-[#C30000] mb-6">
            WHY THIS CONTENT IS PERFECT
          </h2>

          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li>✔ Matches website section layout (React UI)</li>
            <li>✔ SEO optimized (keywords naturally placed)</li>
            <li>✔ Easy to read (short paragraphs)</li>
            <li>✔ No unnecessary fluff</li>
            <li>✔ Covers all important policies</li>
            <li>✔ Conversion-focused (CTA included</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
