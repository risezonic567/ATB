import { useState } from "react";

const faqPart1 = [
  {
    question: "1. Is it possible to reschedule a Spirit flight? ",
    answer:
      "You can change the date of your Spirit flight online through 'My Trips.'All you have to do is enter your booking information and pick a new date or time.",
  },
  {
    question: "2.How much does Spirit charge to change a flight?",
    answer:
      "Depending on when you change your reservation, Spirit may charge a fee.You will also have to pay the difference in fare if the new flight costs more.",
  },
  {
    question: "3. What happens if you miss a flight with Spirit?",
    answer:
      "If you miss your flight, you usually lose your ticket and don't get a refund.You might have to buy a new ticket at the current price.",
  },
  {
    question: "4. Can I change a flight I already booked?",
    answer:
      "Yes, Spirit lets you change your booked flights before you leave.You can do it through the website, an app, or customer service.",
  },
  {
    question: "5. Can I cancel my Spirit flight and get a refund?",
    answer:
      "You can cancel, but you usually get credits instead of cash back.Full refunds are not common unless you meet certain requirements.",
  },
  {
    question: "6. How much does it cost to change my flight?",
    answer:
      "The price depends on when you book and what type of fare you choose.Changes made early are less expensive than changes made at the last minute.",
  },
  {
    question: "7.How much does it charge to change a flight date?",
    answer:
      " Spirit may charge a fee in addition to the price difference.During sales or flexible fares, fees may not be charged.",
  },
  {
    question: "8. Can I reschedule my flight ticket for free?",
    answer:
      " Some fare bundles or deals let you make changes for free.If not, there may be a difference in fees and fares.",
  },
  {
    question: "9.Can I change my name on a Spirit ticket?",
    answer:
      "You can make small changes, like fixing spelling mistakes.In most cases, you can't change your full name or transfer your ticket.",
  },
  {
    question: "10. What was the old name of Spirit Airlines?",
    answer:
      "Charter One Airlines was the first name for Spirit Airlines.In 1992, it changed its name to Spirit Airlines.",
  },
];

const faqPart2 = [
  
  {
    question: "11. How long before a Spirit flight can I check-in?",
    answer:
      "You can check in online 24 hours before your flight.Check-in at the airport usually ends about 45 minutes before your flight.",
  },
  {
    question: "12.How do I get my boarding pass from Spirit Airlines?",
    answer: "During online check-in, you can either download it or print it out.You can also get it through the Spirit app on your phone.",
  },
  {
    question: "13. Can I check-in for Spirit with my phone?",
    answer:
      "The Spirit mobile app makes it easy to check in.Your phone will get a digital boarding pass.",
  },
  {
    question: "14. Does Spirit really charge for carry-on bags?",
    answer:
      "Spirit does charge for carry-on bags, but only if they are not included in your fare.Usually, personal items like a small backpack are free.",
  },
  {
    question : "15. Is it better to check-in online or at the airport?",
    answer: "It costs less and takes less time to check in online.There may be extra fees for services at the airport."
  },
  {
    question : "16. Does Spirit allow free flight changes?",
    answer: "Sometimes, but only if you have a certain fare bundle or promotion.Otherwise, regular change fees may apply."
  },
  {
    question : "17. Can I change my Spirit flight to another date?",
    answer: "Yes, you can change your date before you leave.You might have to pay a fee and the difference in fare."
  },
  {
    question : "18. How much is the cancellation fee for Spirit Airlines?",
    answer : "The cost of canceling a ticket depends on when you do it and what type of ticket you have.Most of the time, you'll get a travel credit after the fees are taken out."
  }
];

export default function SpiritAirlinesFaq() {
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
          Spirit Airlines FAQ
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
