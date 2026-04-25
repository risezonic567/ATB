import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DeltaAirlinesPolicies() {
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
    text: "Check Delta baggage allowance, including carry-on rules, checked baggage fees, and size limits."
  },
  {
    title: "Flight Change Policy",
    text: "Learn how to modify your Delta booking with flexible change options."
  },
  {
    title: "Cancellation Policy",
    text: "Understand Delta cancellation rules and ticket flexibility options."
  },
  {
    title: "Refund Policy",
    text: "Explore refund eligibility, eCredits, and refund timelines."
  }
];

/* 🔷 DETAILED DATA */
const sectionsData = [
  {
    title: "About Delta Airlines",
    text: (
      <>
        <p>Delta Airlines is a major U.S.-based airline headquartered in Atlanta, Georgia. It operates thousands of flights daily, connecting passengers to hundreds of destinations across multiple continents.</p>
        <p>With a strong reputation in the aviation industry, Delta is known for:</p>
        <ul className="list-disc pl-5">
          <li>Extensive domestic and international route network</li>
          <li>High operational reliability</li>
          <li>Premium cabin experiences</li>
          <li>Strong customer service support</li>
        </ul>
        <p>This makes Delta a solid choice for both business and leisure travelers.</p>
      </>
    ),
  },
  {
    title: "Delta Airlines Key Information",
    text: (
      <>
        <ul className="list-disc pl-5">
          <li>Headquarters: Atlanta, Georgia, USA</li>
          <li>IATA Code: DL</li>
          <li>Fleet Size: 800+ aircraft</li>
          <li>Destinations: 300+ worldwide</li>
          <li>Main Hub: Hartsfield–Jackson Atlanta International Airport</li>
        </ul>
        <p>Delta operates across North America, Europe, Asia, and beyond, making it one of the largest airlines globally.</p>
      </>
    ),
  },
  {
    title: "Delta Airlines Baggage Policy",
    text: (
      <>
        <p>The Delta Airlines baggage policy allows passengers to carry one carry-on bag and one personal item free of charge.</p>
        <p>Checked baggage usually comes with an additional fee unless included in your fare or loyalty benefits.</p>
        <p>Overweight or extra bags may incur higher charges, so reviewing baggage limits before travel is recommended.</p>
      </>
    ),
  },
  {
    title: "Delta Airlines Flight Change Policy",
    text: (
      <>
        <p>The Delta Airlines flight change policy is designed with flexibility in mind.</p>
        <p>Most tickets allow changes without a standard change fee, although fare differences still apply.</p>
        <p>Same-day flight changes may also be available depending on seat availability and ticket type.</p>
      </>
    ),
  },
  {
    title: "Delta Airlines Cancellation Policy",
    text: (
      <>
        <p>Under the Delta Airlines cancellation policy, passengers can cancel their bookings based on fare conditions:</p>
        <ul className="list-disc pl-5">
          <li>Refundable tickets → full refund</li>
          <li>Non-refundable tickets → eCredits</li>
          <li>Cancellation must be done before departure</li>
        </ul>
        <p>This flexibility makes Delta a reliable option for travelers with changing plans.</p>
      </>
    ),
  },
  {
    title: "Delta Airlines Refund Policy",
    text: (
      <>
        <p>The Delta Airlines refund policy depends on your ticket type.</p>
        <p>Refundable fares are eligible for direct refunds, while non-refundable tickets typically provide travel credits.</p>
        <p>Refunds may also be issued if the airline cancels or significantly changes your flight.</p>
      </>
    ),
  },
  {
    title: "Delta Airlines Pet Policy",
    text: (
      <>
        <p>Delta allows small pets to travel in the cabin on select flights.</p>
        <p>Pets must be kept in an approved carrier that fits under the seat.</p>
        <p>Additional fees apply, and rules may vary depending on destination.</p>
        <p>It is always recommended to check pet travel guidelines before booking.</p>
      </>
    ),
  },
  {
    title: "Delta Airlines Cabin Classes",
    text: (
      <>
        <p>Delta offers multiple cabin classes to suit different traveler needs:</p>
        <ul className="list-disc pl-5">
          <li>Delta One (Premium international experience)</li>
          <li>First Class</li>
          <li>Delta Comfort+</li>
          <li>Main Cabin</li>
          <li>Basic Economy</li>
        </ul>
        <p>Each cabin provides a different level of comfort, flexibility, and pricing.</p>
      </>
    ),
  },
  {
    title: "Delta Airlines Schedule & Network Strength",
    text: (
      <p>
        Delta operates thousands of flights daily, offering strong connectivity across major cities worldwide. Its large network ensures better availability and flexible travel options.
      </p>
    ),
  },
];