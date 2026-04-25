import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ChopaAirlinesPolicies() {
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

      {/* 🔷 POLICY CARDS */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1A2E48] mb-10">
            Airline Policies Overview
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {policyCards.map((card, i) => (
              <div key={i} className="p-6 rounded-2xl border bg-gray-50 hover:shadow-xl transition">
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
              <div key={i} className="timeline-item group bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border">

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

    </div>
  );
}

/* 🔷 POLICY CARDS */
const policyCards = [
  {
    title: "Baggage Policy",
    text: "Learn about Copa Airlines baggage allowance, including carry-on rules, checked baggage limits, and excess baggage fees."
  },
  {
    title: "Flight Change Policy",
    text: "Understand how to modify your Copa Airlines booking, including change fees and fare differences."
  },
  {
    title: "Cancellation Policy",
    text: "Check Copa Airlines cancellation rules, including eligibility for cancellation and applicable charges."
  },
  {
    title: "Refund Policy",
    text: "Get details on refund eligibility, travel credits, and processing timelines based on ticket type."
  }
];

/* 🔷 DETAILED DATA */
const sectionsData = [
  {
    title: "Copa Airlines Baggage Policy",
    text: (
      <>
        <p>The Copa Airlines baggage policy allows passengers to carry both cabin and checked baggage depending on their fare type.</p>
        <ul className="list-disc pl-5">
          <li>Carry-On: One carry-on bag and one personal item included</li>
          <li>Checked Baggage: Included in many fare types, especially for international routes</li>
          <li>Excess Baggage: Additional fees apply for extra or overweight luggage</li>
        </ul>
        <p>Passengers should always check baggage limits before travel to avoid additional charges at the airport.</p>
      </>
    ),
  },
  {
    title: "Copa Airlines Flight Change Policy",
    text: (
      <>
        <p>The Copa Airlines flight change policy provides flexibility for passengers who need to modify their travel plans.</p>
        <ul className="list-disc pl-5">
          <li>Changes may be allowed depending on fare type</li>
          <li>Change fees may apply for certain tickets</li>
          <li>Fare difference must be paid if the new ticket is more expensive</li>
        </ul>
        <p>Flexible or higher fare classes usually offer better change options with fewer restrictions.</p>
        <p>At Airlines Ticket Booking, we recommend reviewing fare conditions before booking to ensure flexibility.</p>
      </>
    ),
  },
  {
    title: "Copa Airlines Cancellation Policy",
    text: (
      <>
        <p>Under the Copa Airlines cancellation policy, passengers can cancel their bookings based on fare conditions:</p>
        <ul className="list-disc pl-5">
          <li>Free cancellation may be available within 24 hours of booking</li>
          <li>Cancellation fees apply for non-flexible fares</li>
          <li>Refund eligibility depends on ticket type</li>
        </ul>
        <p>It is important to cancel flights before departure to retain any remaining ticket value.</p>
      </>
    ),
  },
  {
    title: "Copa Airlines Refund Policy",
    text: (
      <>
        <p>The Copa Airlines refund policy varies depending on the type of ticket purchased:</p>
        <ul className="list-disc pl-5">
          <li>Refundable tickets → eligible for full or partial refund</li>
          <li>Non-refundable tickets → may receive travel credit</li>
          <li>Refunds available if the airline cancels or significantly changes the flight</li>
        </ul>
        <p>Refund processing times may vary depending on the payment method used.</p>
      </>
    ),
  },
  {
    title: "Copa Airlines Delay & Schedule Changes",
    text: (
      <>
        <p>Copa Airlines may adjust flight schedules due to operational reasons. In such cases:</p>
        <ul className="list-disc pl-5">
          <li>Passengers may receive alternative flight options</li>
          <li>Refunds may be offered for major changes</li>
          <li>Notifications are typically sent via email or SMS</li>
        </ul>
        <p>Passengers should always check their flight status before departure.</p>
      </>
    ),
  },
];