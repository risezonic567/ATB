import { useState } from "react";

const faqPart1 = [
  {
    question: "1. Does United offer discounts for seniors?",
    answer: "No, United does not have senior discounts.",
  },
  {
    question: "2. How to check flight booking online?",
    answer: "Go to airlinesticketbooking.com→My trips→Enter confirmation number and last name.",
  },
  {
    question: "3. How to get United Airlines flights cheaper?",
    answer: "Use low fare calendar, book early and be flexible with dates",
  },
  {
    question: "4. What is the cheapest day to fly with United Airlines?",
    answer: "  Usually Tuesday or Wednesday (domestic) and Friday (for international)",
  },
  {
    question: "5. How to get 50% off on flight tickets?",
    answer: "It is very rare to get a 50% off on tickets but if you are lucky you can achieve this through flash sales.",
  },
  {
    question: "6. Does United offer discounts on flights?",
    answer: "Yes, but only through sales, promo codes or Mileage Plus deals.",
  },
  {
    question: "7. Do flight prices go down every Tuesday?",
    answer: "Not Guaranteed, but it is cheaper in the middle of the week, but it depends on demand.",
  },
  {
    question: "8. What is the cheapest time to book flights with United?",
    answer: "6-8 weeks for domestic trips and 2-3 months for international.",
  },
  {
    question: "9. Can we track live flight status?",
    answer: " Yes, via United app, website or Flightaware.",
  },
  {
    question: "10. Which airline to stay away from?",
    answer: "Spirit Airlines, Ryanair and Viva Aerobus often rank lowest for passenger services.",
  },
];

const faqPart2 = [
  {
    question: "11. How do I get my boarding pass for United?",
    answer: "Online Check-in (24 hrs before), United app or the airport.",
  },
  {
    question: "12. How many bags can I bring for free on United Airlines?",
    answer: "One carry-on and One personal item.",
  },
  {
    question: "13. How much does United charge for a checked bag?",
    answer: "$40-$50 for first bag, $55-$60 for second, and it increases accordingly for every extra.",
  },
  {
    question: "14. What are the new rules for carry-on luggage in 2026?",
    answer: "Carry-on size should be 22×14×9 inch, Personal item should be 17×10×9 inch, Basic economy allows one personal item only.",
  },
  {
    question: "15. Can you reschedule United flights?",
    answer: "Yes, you can reschedule. Most tickets can be resceduled.",
  },
  {
    question: "16. Can I change a flight I already booked?",
    answer: "Yes, you can.. There are options in the united website or app to change the flight you book with necessary consequences.",
  },
  {
    question: "17. How much is a flight change on United Airlines?",
    answer: "No change  Fee, you only have to pay the fare difference. It can be changed on the same day but it will charge you $75.,"
  },
  {
    question: "18. Does United Airlines do one-way flights?",
    answer: "Yes, one-way tickets are available.",
  },
  {
    question: "19. Can I just book a one-way flight?",
    answer: "Yes, it is possible to book an one-way ticket with United.",
  },
  {
    question: "20. Is it cheaper to buy one-way airline tickets?",
    answer: "Sometimes, it depends on the situation but in domestic flights, the tickets gets cheaper. But round-trip is usually cheaper friendly.",
  },
];

export default function UnitedAirlinesFaq() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSection, setActiveSection] = useState(1);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const data = activeSection === 1 ? faqPart1 : faqPart2;

  return (  
    <div className=" bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center ">
          United Airlines FAQ
        </h2>

        {/* SWITCH BUTTONS */}
        <div className="flex justify-center gap-4 mb-6 ">
          <button
            onClick={() => {
              setActiveSection(1);
              setActiveIndex(null);
            }}
            className={`px-4 py-2 rounded-lg cursor-pointer font-semibold ${
              activeSection === 1
                ? "bg-blue-600 text-white "
                : "bg-white border"
            }`}
          >
            FAQ (Part 1)
          </button>

          <button
            onClick={() => {
              setActiveSection(2);
              setActiveIndex(null);
            }}
            className={`px-4 py-2 rounded-lg cursor-pointer font-semibold ${
              activeSection === 2 ? "bg-blue-600 text-white" : "bg-white border"
            }`}
          >
            FAQ (Part 2)
          </button>
        </div>

        {/* FAQ LIST */}
        <div className="grid md:grid-cols-2 gap-4">
          {data.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-4 flex justify-between items-center "
              >
                <span className="font-medium"><span className="font-bold text-blue-800">Q.</span>  {faq.question}</span>
                <span className="text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-gray-600 text-sm leading-relaxed flex gap-2 animate-fadeIn">
                    <span className="font-bold text-emerald-600 shrink-0">A.</span>
                    <span>{faq.answer}</span>
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
