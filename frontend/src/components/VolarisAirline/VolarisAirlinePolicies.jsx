import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VolarisAirlinePolicies() {
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
            Plan your Volaris trip smartly with these useful tips:
          </p>

          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Book tickets early to get lower fares",
              "Purchase baggage in advance to save money",
              "Avoid last-minute changes to reduce fees",
              "Review fare rules carefully before booking",
              "Use travel credits before expiration",
            ].map((tip, i) => (
              <li key={i} className="bg-white/10 p-4 rounded-xl">
                ✔ {tip}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-gray-400">
            At Airlines Ticket Booking, we help you find the best deals and travel smarter with complete policy guidance.
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
    text: "Explore Volaris baggage rules, including personal item limits, carry-on restrictions, and checked baggage fees."
  },
  {
    title: "Flight Change Policy",
    text: "Learn how to modify your Volaris booking, including change charges and fare difference rules."
  },
  {
    title: "Cancellation Policy",
    text: "Understand Volaris cancellation terms and when you may be charged cancellation fees."
  },
  {
    title: "Refund Policy",
    text: "Check refund eligibility, travel credit options, and timelines for different ticket types."
  }
];

/* 🔷 DETAILED DATA */
const sectionsData = [
  {
    title: "Volaris Airlines Baggage Policy",
    text: (
      <>
        <p>
          The Volaris Airlines baggage policy is based on a low-cost model, where only basic allowances are included in the fare.
        </p>
        <p>
          Passengers are typically allowed a limited carry-on option, while additional or heavier baggage requires extra payment.
        </p>
        <p>
          Checked baggage is not always included and must be purchased separately. Fees may vary depending on route, timing, and baggage weight.
        </p>
        <p>
          Booking baggage in advance can help reduce overall travel costs.
        </p>
      </>
    ),
  },
  {
    title: "Volaris Airlines Flight Change Policy",
    text: (
      <>
        <p>
          The Volaris Airlines flight change policy allows passengers to adjust their travel plans, but changes may come with additional fees depending on the ticket type.
        </p>
        <p>
          Passengers must pay any fare difference if the new flight costs more.
        </p>
        <p>
          Changes made closer to the departure date are generally more expensive, so early modifications are recommended.
        </p>
        <p>
          At Airlines Ticket Booking, we advise reviewing fare conditions before booking to ensure flexibility.
        </p>
      </>
    ),
  },
  {
    title: "Volaris Airlines Cancellation Policy",
    text: (
      <>
        <p>
          Under the Volaris Airlines cancellation policy, passengers may cancel their bookings based on fare conditions:
        </p>
        <ul className="list-disc pl-5">
          <li>Free cancellation may be available within a limited time after booking</li>
          <li>Fees apply for cancellations made later</li>
          <li>Most low-cost fares are non-refundable</li>
        </ul>
        <p>
          Canceling your ticket on time helps preserve its value for future use.
        </p>
      </>
    ),
  },
  {
    title: "Volaris Airlines Refund Policy",
    text: (
      <>
        <p>
          The Volaris Airlines refund policy depends on the type of fare purchased.
        </p>
        <p>
          Refundable tickets may qualify for a full or partial refund, while non-refundable fares are typically converted into travel credits.
        </p>
        <p>
          Refunds may also be issued if the airline cancels or significantly changes the flight schedule.
        </p>
        <p>
          Processing times can vary depending on the payment method.
        </p>
      </>
    ),
  },
  {
    title: "Volaris Airlines Schedule Changes",
    text: (
      <>
        <p>
          Flight schedules may be updated due to operational or route-related factors. In such situations:
        </p>
        <ul className="list-disc pl-5">
          <li>Passengers may receive alternative flight options</li>
          <li>Refund or credit options may be available</li>
          <li>Notifications are generally sent via email</li>
        </ul>
        <p>
          Checking your flight details before departure is always recommended.
        </p>
      </>
    ),
  },
];