import { useState } from "react";

const faqPart1 = [
  {
    question: "1. Does United offer discounts for seniors?",
    answer: "",
  },
  {
    question: "2. How to check flight booking online?",
    answer: "",
  },
  {
    question: "3. How to get United Airlines flights cheaper?",
    answer: "",
  },
  {
    question: "4. What is the cheapest day to fly with United Airlines?",
    answer: "",
  },
  {
    question: "5. How to get 50% off on flight tickets?",
    answer: "",
  },
  {
    question: "6. Does United offer discounts on flights?",
    answer: "",
  },
  {
    question: "7. Do flight prices go down every Tuesday?",
    answer: "",
  },
  {
    question: "8. What is the cheapest time to book flights with United?",
    answer: "",
  },
  {
    question: "9. Can we track live flight status?",
    answer: "",
  },
  {
    question: "10. Which airline to stay away from?",
    answer: "",
  },
];

const faqPart2 = [
  {
    question: "11. How do I get my boarding pass for United?",
    answer: "",
  },
  {
    question: "12. How many bags can I bring for free on United Airlines?",
    answer: "",
  },
  {
    question: "13. How much does United charge for a checked bag?",
    answer: "",
  },
  {
    question: "14. What are the new rules for carry-on luggage in 2026?",
    answer: "",
  },
  {
    question: "15. Can you reschedule United flights?",
    answer: "",
  },
  {
    question: "16. Can I change a flight I already booked?",
    answer: "",
  },
  {
    question: "17. How much is a flight change on United Airlines?",
    answer: "",
  },
  {
    question: "18. Does United Airlines do one-way flights?",
    answer: "",
  },
  {
    question: "19. Can I just book a one-way flight?",
    answer: "",
  },
  {
    question: "20. Is it cheaper to buy one-way airline tickets?",
    answer: "",
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
          Spirit Airlines FAQ
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
