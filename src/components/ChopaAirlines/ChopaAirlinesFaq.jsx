import React, { useState } from 'react'

const faqPart1 = [
  {
    question: "1. Which country owns Copa Airlines? ",
    answer:
      "Panama owns Copa Airlines, which is the country's national airline and is based in Panama City. It runs major routes all over North, Central, and South America.",
  },
  {
    question: "2. Can you change your flight date with Copa Airlines?",
    answer:
      
        "Yes, you can change your flight date depending on the fare rules of your ticket. Additional charges or fare differences may apply when making changes.",
      
  },
  {
    question: "3. Does Copa Airlines allow name changes?",
    answer:
      "Copa Airlines does not allow full name changes on tickets after booking.Only minor corrections, such as spelling errors, are usually permitted.",
  },
  {
    question: "4. Can I change my name on a flight already booked?",
    answer:
      "You can request small corrections to your name if there is a mistake.However, tickets cannot be transferred to another passenger.",
  },
  {
    question: "5. How much is the Copa change fee?",
    answer:
      "The change fee varies based on ticket type, route, and timing of the request.It can range from no fee to around $75–$300 plus any fare difference.",
  },
  {
    question: "6. Can I change a flight I already booked?",
    answer:
      "Yes, Copa Airlines allows you to modify an existing booking easily. You can do this online, via customer service, or at the airport.",
  },
  {
    question: "7. How much does it cost to check baggage with Copa Airlines?",
    answer:
      " Checked baggage fees usually start around $30–$40 for the first bag.The second bag may cost approximately $40–$60 depending on the route.",
  },
  {
    question: "8. Does Copa have a senior discount?",
    answer:
      "Copa Airlines does not commonly offer dedicated senior discounts.However, occasional promotions or special fares may be available.",
  },
  {
    question: "9. Can I check in online for Copa Airlines?",
    answer:
      "Yes, online check-in is available through the Copa Airlines website or mobile app.It helps you save time and select seats before arriving at the airport.",
  },
  {
    question: "10. How early can I check in for my flight with Copa Airlines?",
    answer:
      "Online check-in opens 24 hours before your scheduled departure.It typically closes about 1 hour before the flight time..",
  },
];

const faqPart2 = [
  
  
  {
    question: "11. What is the cheapest day to buy Copa Airlines tickets?",
    answer: "Tuesdays and Wednesdays are often considered cheaper for booking flights.However, prices can vary depending on demand and travel season.",
  },
  {
    question: "12. How much does it cost to reschedule your flight?",
    answer:
      "Rescheduling costs depend on your fare type and ticket conditions.Some tickets allow free changes, while others include fees plus fare differences.",
  },
  {
    question: "13. How early should I arrive for a Copa flight?",
    answer:
      "For international flights, arriving 3 hours before departure is recommended.For domestic flights, arriving at least 2 hours early is ideal.",
  },
  {
    question : "14. Is it better to check-in online or at the airport?",
    answer: "Checking in online is usually faster and more convenient.It helps avoid long lines and ensures better seat selection."
  },
  {
    question : "15. Can I cancel a flight 24 hours after booking?",
    answer: "Yes, most bookings can be canceled within 24 hours of purchase.This applies if the ticket meets the airline’s policy conditions."
  },
  {
    question : "16. What is the 24-hour cancellation policy?",
    answer: "You can cancel your booking within 24 hours for a full refund.The booking must be made at least 7 days before departure."
  },
  {
    question : "17. Will I get a full refund if I cancel within 24 hours?",
    answer : "Yes, you are eligible for a full refund if you meet the policy requirements.The refund is typically issued to your original payment method."
  },
  {
    question : "18. How to check Copa flight status?",
    answer : "You can check your flight status on the Copa Airlines website or mobile app.Simply enter your flight number or route details to get updates."
  }
];

function ChopaAirlinesFaq() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [activeSection, setActiveSection] = useState (1);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const data = activeSection === 1 ? faqPart1 : faqPart2
  return (
    <div  className=" bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className='text-center mb-6 font-bold text-3xl'>Chopa Airlines FAQ</h1>

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
                <span className='font-medium'><span className="font-bold text-blue-800">Q.</span>  {faq.question}</span>
                <span className='text-xl'>
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="p-4 pt-0 text-gray-600 text-sm">
                <span className="font-bold text-blue-600">A.</span>{faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChopaAirlinesFaq



