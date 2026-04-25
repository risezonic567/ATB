import { useState } from "react";

const faqPart1 = [
  {
    question: "1. Why are JetBlue flights being canceled? ",
    answer:
      "Weather, technical problems, or not having enough crew can all cause flights to be cancelled.Air traffic control rules and problems with operations can also cause problems.",
  },
  {
    question: "2. How much does it cost to change a plane ticket on JetBlue?",
    answer:
      "JetBlue doesn't charge extra fees for most fares, but they do charge extra for some.Depending on the rules for the tickets, Basic Blue fares may have limits.",
  },
  {
    question: "3. Can I reschedule a flight with JetBlue?",
    answer:
      "You can change your flight online or by calling customer service.You can change your plans before you leave, but only if the fare rules let you.",
  },
  {
    question: "4. Can I change my JetBlue flight for free?",
    answer:
      "Yes, most tickets don't cost anything to change.You only have to pay the difference if the new flight is more expensive.",
  },
  {
    question: "5. How to check flight status with JetBlue?",
    answer:
      "Go to the official website or app and type in the details of your flight.You can also track by route or flight number.",
  },
  {
    question: "6. How many bags can you take on JetBlue for free?",
    answer:
      " One carry-on and one personal item are free on most fares. Checked bags usually cost extra unless included in your fare.",
  },
  {
    question: "7. What size luggage is allowed on JetBlue?",
    answer:
      " Carry-on must fit in overhead bins (22 x 14 x 9 inches approx.).Personal items must fit under the seat.",
  },
  {
    question: "8. How much does JetBlue charge for a checked bag?",
    answer:
      " First checked bag typically costs around $35.Second bag may cost around $45, depending on route.",
  },
  {
    question: "9. How much does JetBlue charge for baggage?",
    answer:
      " Fees vary by fare type and route. Extra or overweight bags cost significantly more.",
  },
  {
    question: "10. Do JetBlue prices go down on Tuesdays?",
    answer:
      " Sometimes airlines change fares early in the week.But the price changes with the demand, not just the day.",
  },
];

const faqPart2 = [
  
  {
    question: "11. Can I get a full refund from JetBlue?",
    answer:
      " Refunds are available for tickets that are refundable.Travel credits are generally given for non-refundable fares.",
  },
  {
    question: "12. What is the $25 service fee for JetBlue?",
    answer: " This fee may be applied when booking or changing by phone.This charge is seldom applied to online transactions",
  },
  {
    question: "13. How to get the best price on JetBlue?",
    answer:
      " Book early, be flexible on dates and use fare alertsGet the latest promos and deals.",
  },
  {
    question: "14. What is the promo code for JetBlue 26%?",
    answer:
      " Promo codes are different and are issued during promotions. Check current offers on official email or website.",
  },
  {
    question : "15. How to get a discount on JetBlue?",
    answer: "Join TrueBlue rewards and email alerts.Use sales, promo codes & flexible travel dates."
  },
  {
    question : "16. Does JetBlue ever lower prices?",
    answer: "Prices can go down, yes, depending on how much people want the item and how many other people are selling it.Prices change a lot, so keep an eye on them."
  },
  {
    question : "17. Can I change a flight I already booked on JetBlue?",
    answer: " Yes, changes can be made easily online. Different ticket types may have different prices."
  },
  {
    question : "18. How much does it cost to change a JetBlue flight?",
    answer : " Most changes are free of charge. You only pay if the new fare is more expensive."
  },
  {
    question : "19. How much does JetBlue charge to change flights?",
    answer : " JetBlue generally does not charge change fees. Fare difference applies if applicable."
  },
  {
    question : "20. What is the cheapest day to book a flight with JetBlue?",
    answer : " There is no fixed cheapest day.Sometimes, booking in the middle of the week gets you better deals."
  },
];

export default function JetBlueAirlineFAQ() {
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
          Jet Blue Airlines FAQ
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
