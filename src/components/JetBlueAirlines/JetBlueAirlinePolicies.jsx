import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function JetBlueAirlinePolicies() {
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

    </div>
  );
}

/* 🔷 POLICY CARDS DATA */
const policyCards = [
  {
    title: "Baggage Policy",
    text: "Check JetBlue baggage allowance, including carry-on eligibility, checked baggage fees, and restrictions."
  },
  {
    title: "Flight Change Policy",
    text: "Learn how to modify your JetBlue booking with flexible change options."
  },
  {
    title: "Cancellation Policy",
    text: "Understand JetBlue cancellation rules and travel credit policies."
  },
  {
    title: "Refund Policy",
    text: "Explore refund eligibility and timelines based on your ticket type."
  }
];

/* 🔷 DETAILED DATA */
const sectionsData = [
  {
    title: "JetBlue Airlines Baggage Policy",
    text: (
      <>
        <p>The JetBlue Airlines baggage policy depends on the fare type you choose.</p>
        <p>Most fares include a carry-on bag and a personal item, while checked baggage may require an additional fee.</p>
        <p>Basic fare options may have restrictions on carry-on allowances, so it’s important to review baggage details before confirming your booking.</p>
      </>
    ),
  },
  {
    title: "JetBlue Airlines Flight Change Policy",
    text: (
      <>
        <p>The JetBlue Airlines flight change policy is designed to be flexible for travelers.</p>
        <p>Many fare types allow changes without a standard change fee.</p>
        <p>Passengers may need to pay the fare difference if the new flight is more expensive.</p>
        <p>Same-day changes may also be available based on seat availability.</p>
      </>
    ),
  },
  {
    title: "JetBlue Airlines Cancellation Policy",
    text: (
      <>
        <p>Under the JetBlue Airlines cancellation policy, most tickets can be canceled without heavy penalties, depending on the fare type.</p>
        <p>Non-refundable tickets are usually converted into travel credits, which can be used for future bookings.</p>
      </>
    ),
  },
  {
    title: "JetBlue Airlines Refund Policy",
    text: (
      <>
        <p>The JetBlue Airlines refund policy varies by ticket type.</p>
        <p>Refundable fares are eligible for a full refund to the original payment method.</p>
        <p>Non-refundable fares typically provide credits, while refunds may also be issued in cases of airline cancellations or major schedule changes.</p>
      </>
    ),
  },
  {
    title: "JetBlue Onboard Experience",
    text: (
      <>
        <p>JetBlue is known for offering a better onboard experience compared to many budget airlines:</p>
        <ul className="list-disc pl-5">
          <li>Free high-speed Wi-Fi on most flights</li>
          <li>Complimentary snacks and beverages</li>
          <li>Seatback entertainment screens on select aircraft</li>
          <li>Extra legroom compared to standard economy seats</li>
        </ul>
        <p>These features make JetBlue a preferred option for comfort-focused travelers.</p>
      </>
    ),
  },
  {
    title: "JetBlue Cabin Classes",
    text: (
      <>
        <p>JetBlue offers multiple seating options:</p>
        <ul className="list-disc pl-5">
          <li>Mint (Premium experience on select routes)</li>
          <li>Even More Space (extra legroom seats)</li>
          <li>Core (standard economy seating)</li>
          <li>Basic fare options (budget-friendly)</li>
        </ul>
        <p>Each option provides different levels of comfort and pricing flexibility.</p>
      </>
    ),
  },
  {
    title: "JetBlue Network & Schedule",
    text: (
      <p>
        JetBlue operates frequent flights across major U.S. cities and nearby international destinations. Its strong network ensures good availability and competitive pricing for travelers.
      </p>
    ),
  },
];