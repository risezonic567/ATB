import React from "react";

export default function JetBlueAirlineContent() {
  return (
    <div className="bg-white text-black">

      {/* 🔷 Content */}
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-6">
        
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A2E48]">
          JetBlue Airlines Travel Policies, Services & Booking Guide
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Explore JetBlue Airlines booking details, baggage rules, flight policies, and onboard experience before planning your trip.
        </p>

        <p className="text-gray-700 leading-relaxed">
          JetBlue Airlines is a popular U.S.-based carrier known for combining affordable fares with a comfortable flying experience. Unlike many low-cost airlines, JetBlue offers added benefits such as extra legroom, free in-flight entertainment, and Wi-Fi on many routes.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Understanding{" "}
          <span className="text-teal-600 font-bold">
            JetBlue Airlines policies and services
          </span>{" "}
          helps travelers avoid confusion related to baggage, cancellations, and flight changes. At{" "}
          <span className="font-semibold text-[#009689]">
            Airlines Ticket Booking
          </span>
          , we simplify these details so you can plan your journey with clarity and confidence.
        </p>

        {/* 🔷 ABOUT SECTION */}
        <div className="pt-4">
          <h3 className="text-xl font-bold text-[#1A2E48] mb-3">
            ABOUT JETBLUE AIRLINES
          </h3>

          <p className="text-gray-700 leading-relaxed mb-3">
            JetBlue Airlines operates as a hybrid carrier, offering budget-friendly pricing along with premium features. It connects major cities across the United States, the Caribbean, and Latin America.
          </p>

          <p className="text-gray-700 leading-relaxed mb-3">
            JetBlue stands out for:
          </p>

          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Comfortable seating with extra legroom</li>
            <li>Free Wi-Fi (on most flights)</li>
            <li>Customer-friendly travel policies</li>
            <li>Competitive pricing compared to full-service airlines</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mt-3">
            This balance makes JetBlue a strong choice for travelers who want affordability without sacrificing comfort.
          </p>
        </div>

        {/* 🔷 KEY INFO */}
        <div className="pt-4">
          <h3 className="text-xl font-bold text-[#1A2E48] mb-3">
            JETBLUE AIRLINES KEY INFORMATION
          </h3>

          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Headquarters: Long Island City, New York, USA</li>
            <li>IATA Code: B6</li>
            <li>Fleet Size: 250+ aircraft</li>
            <li>Destinations: 100+ routes</li>
            <li>Main Focus Cities: New York (JFK), Boston, Fort Lauderdale, Orlando</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mt-3">
            JetBlue primarily focuses on domestic U.S. travel along with international routes in nearby regions.
          </p>
        </div>

        {/* 🔷 Highlight Box */}
        <div className="bg-[#009689]/10 border-l-4 border-[#009689] p-4 rounded-lg">
          <p className="text-[#1A2E48] font-medium">
            Tip: JetBlue offers extra comfort with budget-friendly fares, making it a great choice for balanced travel experience.
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