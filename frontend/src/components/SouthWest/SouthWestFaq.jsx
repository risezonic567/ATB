import { useState } from "react";

const faqPart1 = [
  {
    question: "1. Can you change passenger names on Southwest Airlines tickets? ",
    answer:
      "No. Southwest does not allow full name changes or the transfer of a ticket to another person.Only minor corrections (like spelling errors) may be possible by contacting support.",
  },
  {
    question: "2. Can I change my name on a flight already booked?",
    answer:
      "You can fix small spelling errors , but you can not reassign the ticket to someone else .Legal name changes may need documentation and approval.",
  },
  {
    question: "3. How to change flight passenger details?",
    answer:
      "Log into your booking on the Southwest website or app and go to 'Manage Reservations'.If you need to correct a name, you’ll have to call customer service directly.",
  },
  {
    question: "4. How do I edit my flight on Southwest?",
    answer:
      "Go to the official site, enter your confirmation number and select 'Change Flight.'Simple online changes to date, time or route.",
  },
  {
    question: "5. Can I change a flight I already booked in Southwest?",
    answer:
      "Yes, Southwest allows you to change your flight anytime before departure.If the new flight is cheaper, you don't pay anything. If it costs more, you only pay the difference.",
  },
  {
    question: "6. How much does Southwest charge to change a flight?",
    answer:
      " Southwest does not charge change fees.You only pay if the new flight is of a different fare.",
  },
  {
    question: "7. Can I change a flight I already booked?",
    answer:
      " Yes, you can change your flight without a fee.Changes must be made before the scheduled departure time.",
  },
  {
    question: "8. How much time before I can reschedule my flight?",
    answer:
      "You may change your Southwest flight any time before your flight departs.There’s no deadline, but the sooner you make changes, the more options you’ll have.",
  },
  {
    question: "9. How long before a flight can you change your flight?",
    answer:
      "Changes are allowed up until 10 minutes before departure.After that it can be a no show depending on fare type.",
  },
  {
    question: "10. How to check flight status for Southwest Airlines?",
    answer:
      "On the official Southwest website, click on “Flight Status.”Enter your route or flight number to receive real-time updates. ",
  },
];

const faqPart2 = [
  
  {
    question: "11. How to check flight status?",
    answer:
      "Log on to the airline’s website or mobile app and select “Flight Status.”Enter flight number or route to view status.",
  },
  {
    question: "12. Can you change a Southwest flight without a fee?",
    answer: "There are no change fees at Southwest.You only pay the difference if the new flight is more expensive.",
  },
  {
    question: "13. Does Southwest still allow free change?",
    answer:
      "Yes, free changes of flight are still part of Southwest's policy.If fares go up, you may have to pay a fare difference surcharge.",
  },
  {
    question: "14. Can I change a flight I already booked?",
    answer:
      "Yes, you can change your booking any time before you leave.No change fees apply under Southwest policy.",
  },
  {
    question : "15. What is Southwest's senior discount policy?",
    answer: "Southwest has limited Senior Fares to those 65+.The fares are refundable, but they may not always be the lowest."
  },
  {
    question : "16. Can I change my seat after booking Southwest?",
    answer: "Southwest uses open seating, so no assigned seats are booked.Depending on your group, you can choose your seat when boarding."
  },
  {
    question : "17. What is Southwest's senior discount policy?",
    answer: "Senior fares are available for travelers aged 65 and older.They offer flexibility but must be selected during booking."
  },
  {
    question : "18. Are they changing seating policy at Southwest airlines?",
    answer : "As of now, Southwest still uses open seating (no assigned seats).However, policies may evolve, so check updates before flying."
  },
  {
    question : "19. What is the best day to book flights on Southwest?",
    answer : "No 'best' days exist, although Tuesday and Wednesday can be very advantageous for finding good deals. You can always benefit from making your arrangements early and taking advantage of sales."
  },
];

export default function SouthWestFaq() {
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
          South West Airlines FAQ
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
