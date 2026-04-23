import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SpiritAirlinesPolicies() {
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
              <div className={`group relative ${i % 2 !== 0 ? "md:order-2" : ""}`}>
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

                <div className="text-gray-700 text-lg leading-relaxed space-y-3">
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
            To save money when flying with Spirit Airlines:
          </p>

          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Book tickets early for the lowest fares",
              "Add baggage during booking to reduce fees",
              "Avoid last-minute changes or cancellations",
              "Travel light to avoid baggage costs",
              "Review fare rules carefully before booking",
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
            At Airlines Ticket Booking, we help you find the best deals and manage your bookings easily.
          </p>
        </div>
      </div>
    </div>
  );
}

const sectionsData = [
  {
    title: "Spirit Airlines Baggage Policy",
    img: "https://images.unsplash.com/photo-1581553673739-c4906b5d0de4",
    text: (
      <>
        <p>
          The Spirit Airlines baggage policy follows a low-cost model where only a personal item is included for free. Carry-on and checked bags require additional payment.
        </p>
        <ul className="list-disc pl-5">
          <li>Personal Item: Free (small bag under the seat)</li>
          <li>Carry-On Bag: Paid</li>
          <li>Checked Baggage: Additional fees apply</li>
        </ul>
        <p>
          Baggage fees are usually lower when purchased during booking and higher at the airport. Travelers should always review size and weight limits to avoid extra charges.
        </p>
      </>
    ),
  },
  {
    title: "Spirit Airlines Flight Change Policy",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
    text: (
      <>
        <p>
          The Spirit Airlines flight change policy allows passengers to modify their bookings, but fees may apply depending on when the change is made.
        </p>
        <ul className="list-disc pl-5">
          <li>Changes made well in advance may have lower fees</li>
          <li>Last-minute changes usually cost more</li>
          <li>Fare difference applies if the new ticket is more expensive</li>
        </ul>
        <p>
          Flexible travel options may be available for passengers who want to avoid change fees.
        </p>
        <p>
          At Airlines Ticket Booking, we recommend making changes as early as possible to save money.
        </p>
      </>
    ),
  },
  {
    title: "Spirit Airlines Cancellation Policy",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    text: (
      <>
        <p>Under the Spirit Airlines cancellation policy, passengers can cancel their flights under the following conditions:</p>
        <ul className="list-disc pl-5">
          <li>Free cancellation within 24 hours of booking (if booked at least 7 days before departure)</li>
          <li>After 24 hours → cancellation fees apply</li>
          <li>Most tickets are non-refundable</li>
        </ul>
        <p>
          Canceled tickets are usually converted into travel credits for future use.
        </p>
      </>
    ),
  },
  {
    title: "Spirit Airlines Refund Policy",
    img: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
    text: (
      <>
        <p>The Spirit Airlines refund policy depends on ticket type and timing:</p>
        <ul className="list-disc pl-5">
          <li>Full refund available within the 24-hour window</li>
          <li>Refundable options may qualify for cash refunds</li>
          <li>Non-refundable tickets → travel credit (after fees)</li>
          <li>Refunds provided if the airline cancels the flight</li>
        </ul>
        <p>
          Refund processing time varies depending on the payment method used.
        </p>
      </>
    ),
  },
  {
    title: "Spirit Airlines Delay & Schedule Changes",
    img: "https://images.unsplash.com/photo-1493238792000-8113da705763",
    text: (
      <>
        <p>Flight delays or schedule changes may occur due to operational reasons. In such cases:</p>
        <ul className="list-disc pl-5">
          <li>Passengers may be offered an alternative flight</li>
          <li>Refunds may be available for significant changes</li>
          <li>Notifications are usually provided via email or SMS</li>
        </ul>
      </>
    ),
  },
];