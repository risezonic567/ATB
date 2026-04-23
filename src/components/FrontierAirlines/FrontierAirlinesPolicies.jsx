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
      
      {/* DETAILED SECTION */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-24">

          {sectionsData.map((sec, i) => (
            <div
              key={i}
              className="timeline-item grid md:grid-cols-2 gap-10 items-center"
            >
              {/* IMAGE */}
              <div
                className={`group relative ${
                  i % 2 !== 0 ? "md:order-2" : ""
                }`}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-[#009689] to-[#1A2E48] rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur-xl"></div>

                <div className="overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={sec.img}
                    alt={sec.title}
                    className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition duration-700"
                  />
                </div>
              </div>

              {/* TEXT */}
              <div className={`${i % 2 !== 0 ? "md:order-1" : ""}`}>
                <span className="text-[#009689] font-semibold text-sm uppercase tracking-wider">
                  Policy {i + 1}
                </span>

                <h3 className="text-2xl md:text-3xl font-bold text-[#1A2E48] mt-2 mb-4">
                  {sec.title}
                </h3>

                <div className="text-gray-700 text-lg leading-relaxed">
                  {sec.text}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* TIPS SECTION */}
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
              <li
                key={i}
                className="bg-white/10 p-4 rounded-xl hover:bg-white/20 transition"
              >
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

const sectionsData = [
  {
    title: "Frontier Airlines Baggage Policy",
    img: "https://images.unsplash.com/photo-1581553673739-c4906b5d0de4",
    text: (
      <>
        <p className="mb-3">
          The Frontier Airlines baggage policy is designed for budget travelers,
          where only a personal item is included for free. Carry-on and checked
          baggage require additional payment, and prices may vary depending on
          when you purchase them.
        </p>
        <p>
          Passengers are advised to add baggage during booking to save money, as
          airport fees are usually higher. Always check size and weight limits to
          avoid extra charges.
        </p>
      </>
    ),
  },
  {
    title: "Frontier Airlines Flight Change Policy",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
    text: (
      <>
        <p className="mb-3">
          The Frontier Airlines flight change policy allows passengers to update
          their travel plans before departure. Changes made well in advance may
          have no fee, while last-minute changes can include higher charges.
        </p>
        <p>
          Fare differences apply if your new flight is more expensive. Choosing
          flexible fares can help you change Frontier flight without fee.
        </p>
      </>
    ),
  },
  {
    title: "Frontier Airlines Cancellation Policy",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    text: (
      <>
        <p className="mb-3">
          Under the Frontier Airlines cancellation policy, passengers can cancel
          their flight for free within 24 hours of booking if the departure is at
          least 7 days away.
        </p>
        <p>
          Most tickets are non-refundable, and canceled bookings are often
          converted into travel credits for future use.
        </p>
      </>
    ),
  },
  {
    title: "Frontier Airlines Refund Policy",
    img: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
    text: (
      <>
        <p className="mb-3">
          The Frontier Airlines refund policy depends on your ticket type and
          timing. Full refunds are available within the 24-hour window.
        </p>
        <p>
          For non-refundable tickets, passengers usually receive travel credits
          after deducting applicable fees.
        </p>
      </>
    ),
  },
  {
    title: "Frontier Airlines Delay & Schedule Changes",
    img: "https://images.unsplash.com/photo-1493238792000-8113da705763",
    text: (
      <>
        <p className="mb-3">
          Flight delays or schedule changes may occur due to operational reasons.
          In such cases, passengers may be offered an alternative flight or a
          refund.
        </p>
        <p>
          It is always recommended to check your flight status before departure.
        </p>
      </>
    ),
  },
];