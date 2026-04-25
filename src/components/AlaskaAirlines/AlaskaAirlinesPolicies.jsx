import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AlaskaAirlinesPolicies() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".timeline-item");

    sections.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "top 60%",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <div ref={sectionRef} className="bg-[#f8fafc] text-black overflow-hidden">

      {/* 🔷 POLICY CARDS SECTION */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1A2E48] mb-10">
            Airline Policies Overview
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {policyCards.map((card, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border bg-gray-50 hover:shadow-xl transition"
              >
                <h3 className="text-lg font-semibold text-[#009689] mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* 🔷 DETAILED SECTION */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1A2E48] mb-12">
            Detailed Policy Guide
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {sectionsData.map((sec, i) => (
              <div
                key={i}
                className="timeline-item group bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-[#009689]">
                    Policy {i + 1}
                  </span>
                  <span className="text-xs text-gray-400">#{i + 1}</span>
                </div>

                <h3 className="text-xl font-bold text-[#1A2E48] mb-3 group-hover:text-[#009689]">
                  {sec.title}
                </h3>

                <div className="w-10 h-1 bg-[#009689] mb-4 rounded"></div>

                <div className="text-gray-600 text-sm md:text-base space-y-2">
                  {sec.text}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* 🔷 TIPS SECTION */}
      <div className="py-16 bg-[#1A2E48] text-white">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-2xl font-bold mb-4 text-[#009689]">
            Booking & Money-Saving Tips
          </h2>

          <p className="mb-6 text-gray-300">
            Booking smartly can help you save more on Alaska Airlines flights. Here are some useful tips:
          </p>

          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Book tickets early for better fares",
              "Choose the right fare type for flexibility",
              "Check baggage rules before booking",
              "Use travel credits before expiration",
              "Compare multiple routes and travel dates",
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
      </div>
    </div>
  );
}

/* 🔷 POLICY CARDS DATA */
const policyCards = [
  {
    title: "Baggage Policy",
    text: "Check Alaska Airlines baggage allowance, including carry-on rules, checked baggage fees, and restrictions."
  },
  {
    title: "Flight Change Policy",
    text: "Learn how to modify your Alaska Airlines booking with flexible change options."
  },
  {
    title: "Cancellation Policy",
    text: "Understand Alaska Airlines cancellation rules and ticket flexibility."
  },
  {
    title: "Refund Policy",
    text: "Explore refund eligibility, travel credits, and processing timelines."
  }
];

/* 🔷 DETAILED DATA */
const sectionsData = [
  {
    title: "About Alaska Airlines",
    text: (
      <>
        <p>
          Alaska Airlines stands out for its customer-first approach and consistent service quality. It is especially popular among travelers flying within the western United States, including routes to Alaska, California, and the Pacific Northwest.
        </p>
        <p>Key highlights include:</p>
        <ul className="list-disc pl-5">
          <li>Strong presence on West Coast routes</li>
          <li>High customer satisfaction ratings</li>
          <li>Competitive pricing with good service value</li>
          <li>Reliable on-time performance</li>
        </ul>
        <p>
          Alaska Airlines is ideal for travelers looking for dependable service without premium pricing.
        </p>
      </>
    ),
  },
  {
    title: "Alaska Airlines Key Information",
    text: (
      <>
        <ul className="list-disc pl-5">
          <li>Headquarters: Seattle, Washington, USA</li>
          <li>IATA Code: AS</li>
          <li>Fleet Size: 300+ aircraft</li>
          <li>Destinations: 100+ routes</li>
          <li>Main Hubs: Seattle, Portland, Los Angeles, San Francisco</li>
        </ul>
        <p>
          The airline focuses heavily on domestic U.S. routes with select international destinations.
        </p>
      </>
    ),
  },
  {
    title: "Alaska Airlines Baggage Policy",
    text: (
      <>
        <p>
          The Alaska Airlines baggage policy allows passengers to bring one carry-on bag and one personal item free of charge.
        </p>
        <p>
          Checked baggage may require an additional fee depending on the ticket type. Certain fare classes and loyalty members may receive additional baggage benefits.
        </p>
        <p>
          Passengers are advised to review baggage limits during booking to avoid extra costs.
        </p>
      </>
    ),
  },
  {
    title: "Alaska Airlines Flight Change Policy",
    text: (
      <>
        <p>
          The Alaska Airlines flight change policy offers flexibility for travelers who need to adjust their plans. Many tickets allow changes without a standard change fee, though fare differences may apply.
        </p>
        <p>
          Making changes in advance is usually more cost-effective and provides better flight options.
        </p>
      </>
    ),
  },
  {
    title: "Alaska Airlines Cancellation Policy",
    text: (
      <>
        <p>Under the Alaska Airlines cancellation policy, passengers can cancel their bookings based on fare conditions:</p>
        <ul className="list-disc pl-5">
          <li>Refundable tickets → eligible for full refund</li>
          <li>Non-refundable tickets → converted into travel credits</li>
          <li>Cancellation must be completed before departure</li>
        </ul>
        <p>
          This flexible policy helps travelers manage unexpected changes easily.
        </p>
      </>
    ),
  },
  {
    title: "Alaska Airlines Refund Policy",
    text: (
      <>
        <p>
          The Alaska Airlines refund policy depends on the fare type. Refundable tickets allow direct refunds, while non-refundable fares usually provide travel credits for future use.
        </p>
        <p>
          Refunds may also be issued if the airline cancels or significantly changes your flight.
        </p>
      </>
    ),
  },
  {
    title: "Alaska Airlines Route Strength",
    text: (
      <>
        <p>
          Alaska Airlines is especially strong in West Coast connectivity, offering frequent flights between major cities like Seattle, Los Angeles, and San Francisco.
        </p>
        <p>
          It is also a preferred airline for travel to Alaska and nearby regions, making it a reliable choice for both business and leisure routes in these areas.
        </p>
      </>
    ),
  },
  {
    title: "Alaska Airlines Cabin Classes",
    text: (
      <>
        <ul className="list-disc pl-5">
          <li>First Class</li>
          <li>Premium Class (extra legroom)</li>
          <li>Main Cabin</li>
          <li>Saver Fare (budget-friendly option)</li>
        </ul>
        <p>
          Each option provides different pricing, comfort levels, and flexibility.
        </p>
      </>
    ),
  },
  {
    title: "Alaska Airlines Flight Availability",
    text: (
      <>
        <p>
          Alaska Airlines operates frequent flights on key domestic routes, offering good availability and convenient schedules for travelers.
        </p>
      </>
    ),
  },
];