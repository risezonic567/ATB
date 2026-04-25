import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AllegiantAirlinesPolicies() {
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

      {/* 🔷 INFO SECTION */}
      <div className="py-16 bg-[#1A2E48] text-white">
        <div className="max-w-7xl mx-auto px-4 space-y-6">

          <h2 className="text-2xl font-bold text-[#009689]">
            About Allegiant Air & Key Information
          </h2>

          <p className="text-gray-300">
            Allegiant Air operates a unique business model compared to traditional airlines. Instead of focusing on major hubs, it connects smaller regional airports directly to tourist destinations.
          </p>

          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Focus on vacation and leisure routes",
              "Lower base fares with optional add-ons",
              "Direct flights from smaller cities",
              "Pay-for-what-you-use pricing model",
            ].map((item, i) => (
              <li key={i} className="bg-white/10 p-4 rounded-xl">● {item}</li>
            ))}
          </ul>

          <p className="text-gray-300">
            This makes Allegiant ideal for travelers looking for simple and low-cost travel options.
          </p>

          <div className="bg-white/10 p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-3">Allegiant Air Key Information</h3>
            <ul className="space-y-2 text-gray-300">
              <li>● Headquarters: Las Vegas, Nevada, USA</li>
              <li>● IATA Code: G4</li>
              <li>● Fleet Size: 120+ aircraft</li>
              <li>● Destinations: 120+ routes</li>
              <li>● Focus Cities: Las Vegas, Orlando, Phoenix, Tampa</li>
            </ul>
          </div>

          <p className="text-gray-400">
            Allegiant primarily serves domestic routes within the United States.
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
    text: "Check Allegiant Air baggage rules, including personal items, carry-on fees, and checked baggage charges."
  },
  {
    title: "Flight Change Policy",
    text: "Learn how to modify your Allegiant booking, including change fees and fare differences."
  },
  {
    title: "Cancellation Policy",
    text: "Understand Allegiant Air cancellation rules and applicable fees."
  },
  {
    title: "Refund Policy",
    text: "Explore refund eligibility, travel credits, and refund timelines."
  }
];

/* 🔷 DETAILED DATA */
const sectionsData = [
  {
    title: "Allegiant Air Baggage Policy",
    text: (
      <>
        <p>The Allegiant Air baggage policy follows a low-cost structure. Only a small personal item is included in the base fare.</p>
        <p>● Carry-on bags require additional payment</p>
        <p>● Checked baggage is charged separately</p>
        <p>● Fees increase if added at the airport</p>
        <p>Travelers can save money by adding baggage during the booking process instead of at the airport.</p>
      </>
    ),
  },
  {
    title: "Allegiant Air Flight Change Policy",
    text: (
      <>
        <p>The Allegiant Air flight change policy allows modifications, but fees usually apply depending on when the change is made.</p>
        <p>Passengers may also need to pay the fare difference if the new flight costs more. Changes made closer to departure are typically more expensive.</p>
      </>
    ),
  },
  {
    title: "Allegiant Air Cancellation Policy",
    text: (
      <>
        <p>Under the Allegiant Air cancellation policy, most tickets are non-refundable.</p>
        <p>● Limited free cancellation window may apply after booking</p>
        <p>● Cancellation fees are common</p>
        <p>● Remaining value may be issued as travel credit</p>
        <p>Canceling early can help retain more value from your ticket.</p>
      </>
    ),
  },
  {
    title: "Allegiant Air Refund Policy",
    text: (
      <>
        <p>The Allegiant Air refund policy is generally restrictive compared to full-service airlines.</p>
        <p>● Refunds are rare for standard tickets</p>
        <p>● Travel credits are the most common option</p>
        <p>● Refunds may be issued if the airline cancels the flight</p>
        <p>Processing times depend on the type of request and payment method.</p>
      </>
    ),
  },
  {
    title: "Allegiant Travel Model",
    text: (
      <>
        <p>Allegiant Air focuses on connecting smaller cities to popular vacation destinations such as Las Vegas, Orlando, and Florida beach locations.</p>
        <p>● Lower ticket prices</p>
        <p>● Fewer connecting flights</p>
        <p>● Convenient leisure travel options</p>
        <p>However, flight frequency may be limited compared to major airlines.</p>
      </>
    ),
  },
  {
    title: "Allegiant Air Seating Options",
    text: (
      <>
        <p>Allegiant offers simple seating choices:</p>
        <p>● Standard seats</p>
        <p>● Preferred seating (extra legroom or location benefits)</p>
        <p>Passengers can select seats during booking for an additional fee.</p>
      </>
    ),
  },
  {
    title: "Allegiant Flight Availability",
    text: (
      <>
        <p>Allegiant flights may not operate daily on all routes. Travelers should plan ahead and check schedules carefully before booking.</p>
      </>
    ),
  },
];