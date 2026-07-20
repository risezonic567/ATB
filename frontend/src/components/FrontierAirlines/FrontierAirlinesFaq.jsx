import { useState } from "react";

const faqPart1 = [
  {
    question: "1. frontier airlines cancellation policy ",
    answer:
      "Yes, Frontier Airlines is an ultra-low-cost carrier offering basic fares with optional add-ons.",
  },
  {
    question: "2. frontier airlines cancellation policy 24 hours",
    answer:
      "Frontier keeps base fares low by charging separately for extras like baggage, seat selection, and meals.",
  },
  {
    question: "3. frontier refund policy for delayed flight",
    answer:
      "Yes, carry-on bags usually require an additional fee unless included in your bundle.",
  },
  {
    question: "4. frontier economy bundle cancellation",
    answer:
      "Yes, but fees may apply depending on your fare type and timing of the change.",
  },
  {
    question: "5. frontier cancelled my flight last minute",
    answer:
      "Refunds are limited and depend on ticket type, timing, and airline policies.",
  },
  {
    question: "6. how to avoid frontier cancellation fee ",
    answer:
      "Yes, Frontier Airlines is an ultra-low-cost carrier offering basic fares with optional add-ons.",
  },
  {
    question: "7. can i change my frontier flight for free",
    answer:
      "Frontier keeps base fares low by charging separately for extras like baggage, seat selection, and meals.",
  },
  {
    question: "8. frontier airlines manage booking",
    answer:
      "Yes, carry-on bags usually require an additional fee unless included in your bundle.",
  },
  {
    question: "9. Is Frontier Airlines a low-cost airline?",
    answer:
      "Yes, but fees may apply depending on your fare type and timing of the change.",
  },
  {
    question: "10. Why are Frontier Airlines tickets so cheap?",
    answer:
      "Refunds are limited and depend on ticket type, timing, and airline policies.",
  },
];

const faqPart2 = [
  
  {
    question: "11. Does Frontier refund you if you cancel?",
    answer:
      "Refunds are only available in certain cases like refundable fares or cancellations within 24 hours.",
  },
  {
    question: "12. Can you cancel Frontier without penalty?",
    answer: "Change fees vary based on timing and ticket type.",
  },
  {
    question: "13. Can I cancel my flight and get a full refund?",
    answer:
      "You can access your booking using your confirmation number on the Frontier website.",
  },
  {
    question: "14. Will cancel booking cancel my entire flight on Frontier?",
    answer:
      "Baggage fees vary depending on when you pay and the size of the bag.",
  },
  {
    question : "15. How much does Frontier charge to reschedule a flight?",
    answer:"Frontier Airlines flight change fees vary based on your fare type and how close you are to departure. Some fares are free to change. But passengers will have to pay the difference for the new flight."
  },
  {
    question : "16. Can I get a full refund for a cancelled flight?",
    answer: "You can obtain a full refund for cancelled flights on Frontier when Frontier cancels your flight and/or there is a considerable schedule adjustment and you opt to not fly on the rescheduled flight adjustments."
  },
  {
    question : "17. Can I get a refund on Frontier Airlines?",
    answer: "A considerable number of Frontier Airlines tickets are non-refundable; however, there are some eligible situations when refunds are obtainable, including cancellation within 24 hours of booking (if applicable) and disruptions caused by the airline."
  },
  {
    question : "18. How do I check my Frontier refund status?",
    answer: "To confirm the status of your refund visit the Frontier Airlines website and access 'My Trips.' If you require further assistance you may contact Frontiers customer service."
  },
  {
    question : "19. What are valid reasons to cancel a flight and get a refund?",
    answer : "Flight cancellations are eligible for a refund if they are done within the 24-hour window, if it is an airline-initiated cancellation, delay, or significant schedule change, and unique circumstances as defined in Frontier's policy."
  },
  {
    question : "20. How late is too late to cancel a flight?",
    answer : "Travelers may not cancel flights after the scheduled departure time. If this occurs, you will forfeit the value of the ticket."
  },
];

export default function FrontierAirlinesFaq() {
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
          Frontier Airlines FAQ
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
