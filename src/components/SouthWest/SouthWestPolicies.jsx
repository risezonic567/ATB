import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SouthWestPolicies() {
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
      
     <div className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4">

    <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1A2E48] mb-12">
      Airline Policies Overview
    </h2>

    <div className="grid gap-8 md:grid-cols-2">

      {sectionsData.map((sec, i) => (
        <div
          key={i}
          className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 border border-gray-100"
        >
          {/* Top Label */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-[#009689]">
              Policy {i + 1}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-[#1A2E48] mb-3 group-hover:text-[#009689] transition">
            {sec.title}
          </h3>

          {/* Divider */}
          <div className="w-10 h-1 bg-[#009689] mb-4 rounded"></div>

          {/* Text */}
          <div className="text-gray-600 leading-relaxed space-y-2 text-sm md:text-base">
            {sec.text}
          </div>
        </div>
      ))}

    </div>

  </div>
</div>

      {/* TIPS SECTION */}
      <div className="py-16 bg-[#1A2E48] text-white">
        <div className="max-w-7xl mx-auto px-4">
          
          <h2 className="text-2xl font-bold mb-4 text-[#009689]">
            Booking & Money-Saving Tips
          </h2>

          <p className="mb-6 text-gray-300">
            To get the best value when flying Southwest, consider these tips:
          </p>

          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Book early to secure lower fares",
              "Take advantage of free checked baggage",
              "Monitor fares for price drops and rebook if needed",
              "Use travel credits before expiration",
              "Choose flexible fares for added convenience",
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
            At Airlines Ticket Booking, we help you find the best Southwest deals and manage your bookings easily.
          </p>
        </div>
      </div>
    </div>
  );
}

const sectionsData = [
  {
    title: "Southwest Airlines Baggage Policy",
    img: "https://images.unsplash.com/photo-1581553673739-c4906b5d0de4",
    text: (
      <>
        <p>
          The Southwest Airlines baggage policy is one of the most traveler-friendly in the industry. Passengers can bring:
        </p>
        <ul className="list-disc pl-5">
          <li>Two checked bags for free (within size and weight limits)</li>
          <li>One carry-on bag and one personal item at no extra cost</li>
        </ul>
        <p>
          Additional or oversized baggage may incur fees. This generous allowance makes Southwest a great option for travelers who need extra luggage without additional costs.
        </p>
      </>
    ),
  },
  {
    title: "Southwest Airlines Flight Change Policy",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
    text: (
      <>
        <p>
          The Southwest Airlines flight change policy offers maximum flexibility. Unlike many airlines, Southwest does not charge change fees.
        </p>
        <p>
          Passengers can modify their flight date or time without penalty, but any fare difference must be paid if the new ticket is more expensive.
        </p>
        <p>
          If the new flight is cheaper, the difference may be issued as travel credit.
        </p>
        <p>
          At Airlines Ticket Booking, we recommend taking advantage of this flexibility if your travel plans are uncertain.
        </p>
      </>
    ),
  },
  {
    title: "Southwest Airlines Cancellation Policy",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    text: (
      <>
        <p>Under the Southwest Airlines cancellation policy:</p>
        <ul className="list-disc pl-5">
          <li>Refundable fares are eligible for a full refund</li>
          <li>Non-refundable fares are converted into travel credits</li>
          <li>Cancellations must be made before departure</li>
        </ul>
        <p>
          This flexible policy makes Southwest one of the most customer-friendly airlines in the USA.
        </p>
      </>
    ),
  },
  {
    title: "Southwest Airlines Refund Policy",
    img: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
    text: (
      <>
        <p>The Southwest Airlines refund policy depends on your ticket type:</p>
        <ul className="list-disc pl-5">
          <li>Refundable tickets → full refund to original payment method</li>
          <li>Non-refundable tickets → travel credit for future use</li>
        </ul>
        <p>
          If the airline cancels your flight, you are eligible for a refund or alternative travel options. Refund processing times may vary depending on your payment method.
        </p>
      </>
    ),
  },
  {
    title: "Southwest Airlines Delay & Schedule Changes",
    img: "https://images.unsplash.com/photo-1493238792000-8113da705763",
    text: (
      <>
        <p>In case of delays or schedule changes:</p>
        <ul className="list-disc pl-5">
          <li>Passengers may rebook on the next available flight</li>
          <li>Refunds may be offered for significant disruptions</li>
          <li>Notifications are usually sent via email or SMS</li>
        </ul>
        <p>
          It is always advisable to check your flight status before departure.
        </p>
      </>
    ),
  },
];