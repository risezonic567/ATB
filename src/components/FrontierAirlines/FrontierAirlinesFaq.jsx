import { useState } from "react";

const faqPart1 = [
  {
    question: "frontier airlines cancellation policy ",
    answer:
      "Yes, Frontier Airlines is an ultra-low-cost carrier offering basic fares with optional add-ons.",
  },
  {
    question: "frontier airlines cancellation policy 24 hours",
    answer:
      "Frontier keeps base fares low by charging separately for extras like baggage, seat selection, and meals.",
  },
  {
    question: "frontier refund policy for delayed flight",
    answer:
      "Yes, carry-on bags usually require an additional fee unless included in your bundle.",
  },
  {
    question: "frontier economy bundle cancellation",
    answer:
      "Yes, but fees may apply depending on your fare type and timing of the change.",
  },
  {
    question: "frontier cancelled my flight last minute",
    answer:
      "Refunds are limited and depend on ticket type, timing, and airline policies.",
  },
  {
    question: "how to avoid frontier cancellation fee ",
    answer:
      "Yes, Frontier Airlines is an ultra-low-cost carrier offering basic fares with optional add-ons.",
  },
  {
    question: "can i change my frontier flight for free",
    answer:
      "Frontier keeps base fares low by charging separately for extras like baggage, seat selection, and meals.",
  },
  {
    question: "frontier airlines manage booking",
    answer:
      "Yes, carry-on bags usually require an additional fee unless included in your bundle.",
  },
  {
    question: "Is Frontier Airlines a low-cost airline?",
    answer:
      "Yes, but fees may apply depending on your fare type and timing of the change.",
  },
  {
    question: "Why are Frontier Airlines tickets so cheap?",
    answer:
      "Refunds are limited and depend on ticket type, timing, and airline policies.",
  },
];

const faqPart2 = [
  
  {
    question: "Does Frontier refund you if you cancel?",
    answer:
      "Refunds are only available in certain cases like refundable fares or cancellations within 24 hours.",
  },
  {
    question: "Can you cancel Frontier without penalty?",
    answer: "Change fees vary based on timing and ticket type.",
  },
  {
    question: "Can I cancel my flight and get a full refund?",
    answer:
      "You can access your booking using your confirmation number on the Frontier website.",
  },
  {
    question: "Will cancel booking cancel my entire flight on Frontier?",
    answer:
      "Baggage fees vary depending on when you pay and the size of the bag.",
  },
  {
    question : "How much does Frontier charge to reschedule a flight?"
  },
  {
    question : "Can I get a full refund for a cancelled flight?"
  },
  {
    question : "Can I get a refund on Frontier Airlines?"
  },
  {
    question : "How do I check my Frontier refund status?"
  },
  {
    question : "What are valid reasons to cancel a flight and get a refund?"
  },
  {
    question : "How late is too late to cancel a flight?"
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
        <h1 className="text-3xl font-bold mb-6 text-center ">
          Frontier Airlines FAQ
        </h1>

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
                <div className="p-4 pt-0 text-gray-600 text-sm">
                  <span className="font-bold text-blue-600">A.</span> {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
