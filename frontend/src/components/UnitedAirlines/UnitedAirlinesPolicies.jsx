import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function UnitedAirlinesPolicies() {
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
    text: "Check United Airlines baggage allowance, including carry-on rules, checked baggage fees, and restrictions."
  },
  {
    title: "Flight Change Policy",
    text: "Learn how to modify your United booking with flexible change options."
  },
  {
    title: "Cancellation Policy",
    text: "Understand United Airlines cancellation rules and ticket flexibility."
  },
  {
    title: "Refund Policy",
    text: "Explore refund eligibility, travel credits, and processing timelines."
  }
];

/* 🔷 DETAILED DATA */
const sectionsData = [
  {
    title: "About United Airlines",
    text: (
      <>
        <p>
          United Airlines is recognized for its global connectivity and frequent flight options across major destinations worldwide. It operates a large fleet and serves hundreds of cities across multiple continents.
        </p>
        <p>Key highlights of United Airlines include:</p>
        <ul className="list-disc pl-5">
          <li>Extensive international route network</li>
          <li>Strong presence in major U.S. hubs</li>
          <li>Flexible booking options</li>
          <li>Business and premium travel services</li>
        </ul>
        <p>
          United is particularly popular among travelers who prioritize connectivity and schedule availability.
        </p>
      </>
    ),
  },
  {
    title: "United Airlines Key Information",
    text: (
      <>
        <ul className="list-disc pl-5">
          <li>Headquarters: Chicago, Illinois, USA</li>
          <li>IATA Code: UA</li>
          <li>Fleet Size: 900+ aircraft</li>
          <li>Destinations: 300+ worldwide</li>
          <li>Major Hubs: Chicago, Newark, Houston, Denver, San Francisco</li>
        </ul>
        <p>
          United Airlines operates one of the largest networks in the aviation industry, making it ideal for global travel.
        </p>
      </>
    ),
  },
  {
    title: "United Airlines Baggage Policy",
    text: (
      <>
        <p>
          The United Airlines baggage policy allows passengers to bring one carry-on bag and one personal item on most fares. However, basic economy tickets may have stricter rules regarding carry-on allowances.
        </p>
        <p>
          Checked baggage is generally not included in lower fare types and may require an additional fee. Travelers should review baggage details during booking to avoid extra charges.
        </p>
      </>
    ),
  },
  {
    title: "United Airlines Flight Change Policy",
    text: (
      <>
        <p>
          The United Airlines flight change policy provides flexibility depending on the fare type. Many standard tickets allow changes without a change fee, although fare differences still apply.
        </p>
        <p>
          Same-day flight changes may also be available for eligible passengers, making it easier to adjust travel plans when needed.
        </p>
      </>
    ),
  },
  {
    title: "United Airlines Cancellation Policy",
    text: (
      <>
        <p>Under the United Airlines cancellation policy, passengers can cancel their flights based on ticket conditions:</p>
        <ul className="list-disc pl-5">
          <li>Refundable tickets → eligible for full refund</li>
          <li>Non-refundable tickets → converted into travel credits</li>
          <li>Cancellation must be completed before departure</li>
        </ul>
        <p>
          United offers reasonable flexibility for travelers with changing schedules.
        </p>
      </>
    ),
  },
  {
    title: "United Airlines Refund Policy",
    text: (
      <>
        <p>
          The United Airlines refund policy depends on your ticket type. Refundable fares allow direct refunds, while non-refundable fares usually result in future travel credits.
        </p>
        <p>
          Refunds may also be issued if the airline cancels or significantly changes your flight schedule.
        </p>
      </>
    ),
  },
  {
    title: "United Global Network Advantage",
    text: (
      <>
        <p>
          One of United’s biggest strengths is its global network. The airline connects major cities across North America, Europe, Asia, and other regions.
        </p>
        <p>This makes United a strong option for:</p>
        <ul className="list-disc pl-5">
          <li>International travel</li>
          <li>Business trips</li>
          <li>Multi-city itineraries</li>
        </ul>
        <p>
          Its partnerships and alliances further expand travel options for passengers.
        </p>
      </>
    ),
  },
  {
    title: "United Airlines Cabin Classes",
    text: (
      <>
        <ul className="list-disc pl-5">
          <li>Polaris Business Class (long-haul premium experience)</li>
          <li>First Class</li>
          <li>Economy Plus (extra legroom)</li>
          <li>Main Cabin</li>
          <li>Basic Economy</li>
        </ul>
        <p>
          Each class provides different levels of comfort, flexibility, and pricing.
        </p>
      </>
    ),
  },
  {
    title: "United Airlines Flight Availability",
    text: (
      <>
        <p>
          United operates frequent daily flights, especially from its major hubs. This allows passengers to choose from multiple schedules and travel times.
        </p>
      </>
    ),
  },
];