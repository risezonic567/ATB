import React, { useState } from 'react'

const faqPart1 = [
    {
        question:"1. How to check in online for Volaris?",
        answer:"Check in on Volaris’ website or mobile app with your reservation code.You can check in online before you go and download your boarding pass."
    },
    {
        question:"2. How early can I check in Volaris?",
        answer:"Check-in opens usually 72 hours before domestic flights and 24 hours before international flights. For most routes it closes 1 hour before departure."
    },
    {
        question:"3. Do I check in 24 hours before a flight?",
        answer:"Yes, for international flights with Volaris check-in opens usually 24 hours before departure. For domestic flights, check-in may open as early as 72 hours before departure."
    },
    {
        question:"4. What days are Volaris flights cheaper?",
        answer:"Flights are cheaper on Tuesdays, Wednesdays and Saturdays. The best pricing is best avoided on weekends and holidays.  "
    },
    {
        question:"5. Is Volaris still flying to the USA?",
        answer:"Yes, Volaris flies many routes from Mexico to the United States.Availability is dependent on route schedules and demand."
    },
    {
        question:"6.How to check status of Volaris flight?",
        answer:"Go to the Volaris Website or App and look up “Flight Status”.Enter your flight number or route details for live updates."
    },
    {
        question:"7.How do I contact Volaris?",
        answer:"Volaris customer service phone number and online chat support Volaris.They also respond on social media."
    },
    {
        question:"8.How do I check my flight bookings?",
        answer:"Log on to the Volaris website or app with your reservation code. You can see, manage or change your booking details."
    },
    {
        question:"9. What is the best time to buy Volaris tickets?",
        answer: "Book tickets 3-6 weeks in advance for the best fares. “The prices tend to be lower during early bookings and sales events."
    },
    {
        question:"10.Can I reschedule my flight with Volaris?",
        answer:"Yes, Volaris allows you to change your flight online or via support.Additional fees may apply based on fare type and timing."
    }
]

const faqPart2 = [
    {
        question:"11.Can I change a flight I already booked?",
        answer: "Yes, you can make changes online under “My Trips”.You might have to pay a fare difference and a change fee."
    },
    {
        question:"12. How much is it to change a flight to a different date?",
        answer: "Charges differ by route, time and type of ticket.Change fee and fare difference will apply."
    },
    {
        question:"13. Do I get a refund if I cancel my flight with Volaris?",
        answer:"Refunds will be subject to the fare rules of your ticket.Some fares are credited rather than refunded in cash."
    },
    {
        question:"14. Do I have to pay for a carry-on bag with Volaris?",
        answer: " Base fares may not include a full carry on allowance. If you have a ticket, you may have to pay an extra amount as per your ticket."
    },
    {
        question:"15. Is it possible to get deals on last-minute flights?",
        answer: "Yes, but not guaranteed prices could be higher.Look for sales, or flexible dates to improve your odds."
    },
    {
        question:"16. How can I get my Volaris tickets cheaper?",
        answer:"Book early, travel midweek, use promo codes and sales.Sign up for alerts for discounts and flash deals. "
    },
    {
        question:"17. When is the best time to purchase Volaris tickets?",
        answer:"Usually the best time is 1–2 months before you travel.To get the best fares, avoid peak season."
    },
    {
        question:"18. Can I book a one way flight?",
        answer:"Yes Volaris, makes it easy to book one way tickets.You can book them online without limits."
    },
    {
        question:"19 .How much cheaper are one-way flights?",
        answer:"Flights that go one way can be cheaper, especially on a low-cost airline.But round trips can be better value sometimes"
    },
    {
        question:"20. How much will extra baggage cost?",
        answer:"The price of extra baggage depends on its weight, the route and when you add it.You can usually save money by pre-paying online, rather than at the airport.  "
    }
]

function VolarisAirlineFaq() {
   const [activeIndex, setActiveIndex] = useState(null);  //Yahan null rakhne ka matlab hai: "Abhi kuch bhi select nahi hua hai."
      // console.log("null", activeIndex);
      
      const [activeSection, setActiveSection] = useState (1); //Yeh yaad rakhta hai ki hum Part 1 dekh rahe hain ya Part 2.
  
      const toggleFAQ = (alreadyOpen) => {
          setActiveIndex(activeIndex === alreadyOpen ? null : alreadyOpen);
      };
  
      const data = activeSection === 1 ? faqPart1 : faqPart2
    return (
      <div  className=" bg-gray-100 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className='text-center mb-6 font-bold text-3xl'>Aero Mexico Airlines FAQ</h1>
  
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
                  <span className='font-medium'><span className="font-bold text-blue-800">Q.</span>{faq.question}</span>
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

export default VolarisAirlineFaq
