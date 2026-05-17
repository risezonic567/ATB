import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FrontierAirlinesPolicies() {
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
            Booking smartly can help you save more on Frontier flights. Here are some useful tips:
          </p>

          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Book tickets early for lower fares",
              "Add baggage and extras during booking",
              "Avoid last-minute changes to reduce fees",
              "Choose flexible fares if your plans are uncertain",
              "Review fare rules before confirming your booking",
            ].map((tip, i) => (
              <li key={i} className="bg-white/10 p-4 rounded-xl">
                ✔ {tip}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-gray-400">
            At Airlines Ticket Booking, we help you find the best deals so you can travel within your budget.
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
    text: "Understand Frontier Airlines baggage rules, including personal item allowance, carry-on fees, and checked baggage charges. Plan ahead to avoid extra costs at the airport."
  },
  {
    title: "Flight Change Policy",
    text: "Learn how to modify your Frontier flight, check change fees, and understand flexible ticket options to manage your travel plans easily."
  },
  {
    title: "Cancellation Policy",
    text: "Get complete details about Frontier Airlines cancellation rules, including the 24-hour risk-free cancellation and applicable fees."
  },
  {
    title: "Refund Policy",
    text: "Check refund eligibility, travel credit options, and processing timelines based on your ticket type and cancellation conditions."
  }
];

/* 🔷 DETAILED DATA */
const sectionsData = [
  {
    title: "Frontier Airlines Baggage Policy",
    text: (
      <>
        <p>
          The Frontier Airlines baggage policy is designed for budget travelers, where only a personal item is included for free.
        </p>
        <p>
          Carry-on and checked baggage require additional payment, and prices may vary depending on when you purchase them.
        </p>
        <p>
          Passengers are advised to add baggage during booking to save money, as airport fees are usually higher.
        </p>
        <p>
          Always check size and weight limits to avoid extra charges.
        </p>
      </>
    ),
  },
  {
    title: "Frontier Airlines Flight Change Policy",
    text: (
      <>
        <p>
          The Frontier Airlines flight change policy allows passengers to update their travel plans before departure.
        </p>
        <p>
          Changes made well in advance may have no fee, while last-minute changes can include higher charges.
        </p>
        <p>
          Fare differences apply if your new flight is more expensive.
        </p>
        <p>
          Choosing flexible fares can help you change Frontier flight without fee, making it easier to manage unexpected changes.
        </p>
      </>
    ),
  },
  {
    title: "Frontier Airlines Cancellation Policy",
    text: (
      <>
        <p>
          Under the Frontier Airlines cancellation policy, passengers can cancel their flight for free within 24 hours of booking if the departure is at least 7 days away.
        </p>
        <p>
          After this period, cancellation fees may apply.
        </p>
        <p>
          Most tickets are non-refundable, and canceled bookings are often converted into travel credits for future use.
        </p>
      </>
    ),
  },
  {
    title: "Frontier Airlines Refund Policy",
    text: (
      <>
        <p>
          The Frontier Airlines refund policy depends on your ticket type and timing.
        </p>
        <p>
          Full refunds are available within the 24-hour window, while refundable tickets may qualify for cash refunds.
        </p>
        <p>
          For non-refundable tickets, passengers usually receive travel credits after deducting applicable fees.
        </p>
        <p>
          Refunds are also provided if the airline cancels or significantly changes the flight.
        </p>
      </>
    ),
  },
  {
    title: "Frontier Airlines Delay & Schedule Changes",
    text: (
      <>
        <p>
          Flight delays or schedule changes may occur due to operational reasons.
        </p>
        <p>
          In such cases, passengers may be offered an alternative flight or a refund if the change is significant.
        </p>
        <p>
          It is always recommended to check your flight status before departure to stay updated.
        </p>
      </>
    ),
  },
];