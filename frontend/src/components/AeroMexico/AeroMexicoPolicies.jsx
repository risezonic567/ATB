import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AeroMexicoPolicies() {
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
    text: "Explore Aeromexico baggage allowance, including cabin baggage, checked luggage benefits, and excess baggage charges."
  },
  {
    title: "Flight Change Policy",
    text: "Learn how to modify your Aeromexico booking, including change flexibility and fare difference rules."
  },
  {
    title: "Cancellation Policy",
    text: "Understand Aeromexico cancellation terms based on fare types and ticket conditions."
  },
  {
    title: "Refund Policy",
    text: "Check refund eligibility, travel credit options, and processing timelines for different bookings."
  }
];

/* 🔷 DETAILED DATA */
const sectionsData = [
  {
    title: "Aeromexico Airlines Baggage Policy",
    text: (
      <>
        <p>The Aeromexico Airlines baggage policy is generally more inclusive compared to low-cost airlines.</p>
        <p>Most fares, especially on international routes, include both carry-on and checked baggage.</p>
        <p>Passengers are typically allowed one carry-on bag along with a personal item, while checked baggage allowance depends on the fare class.</p>
        <p>Additional fees may apply for extra or overweight bags.</p>
        <p>Travelers should always verify baggage details during booking to avoid unnecessary charges at the airport.</p>
      </>
    ),
  },
  {
    title: "Aeromexico Airlines Flight Change Policy",
    text: (
      <>
        <p>The Aeromexico Airlines flight change policy provides moderate flexibility depending on your ticket type.</p>
        <p>Some fares allow changes with minimal or no fees, while others may include restrictions.</p>
        <p>Passengers may need to pay the fare difference if the new flight costs more.</p>
        <p>Making changes early is usually more cost-effective and offers better availability.</p>
        <p>At Airlines Ticket Booking, we recommend selecting flexible fares if your travel dates are not fixed.</p>
      </>
    ),
  },
  {
    title: "Aeromexico Airlines Cancellation Policy",
    text: (
      <>
        <p>Under the Aeromexico Airlines cancellation policy, cancellation rules depend on the fare purchased.</p>
        <p>Certain tickets allow free cancellation within a limited time frame, while others may involve fees.</p>
        <p>Canceling before departure is important, as unused tickets may lose value if not managed properly.</p>
        <p>Flexible fares generally provide better cancellation options.</p>
      </>
    ),
  },
  {
    title: "Aeromexico Airlines Refund Policy",
    text: (
      <>
        <p>The Aeromexico Airlines refund policy varies based on ticket conditions.</p>
        <p>Refundable tickets are eligible for direct refunds to the original payment method.</p>
        <p>Non-refundable fares usually result in travel credits that can be used for future bookings.</p>
        <p>Refunds may also be issued if the airline makes significant changes or cancels the flight.</p>
        <p>Processing timelines can vary depending on the payment method and request type.</p>
      </>
    ),
  },
  {
    title: "Aeromexico Airlines Schedule Adjustments",
    text: (
      <>
        <p>Flight schedules may change due to operational or international travel factors. In such cases:</p>
        <ul className="list-disc pl-5">
          <li>Passengers may receive rebooking options</li>
          <li>Refunds or credits may be available</li>
          <li>Notifications are typically sent in advance</li>
        </ul>
        <p>Checking flight status before departure is always recommended.</p>
      </>
    ),
  },
];