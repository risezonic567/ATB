import React, { useState } from 'react'

const faqPart1 = [
    {
        question:"1. How far in advance can you check in for an Aeromexico flight?",
        answer:"You can check in online for most flights up to 24 hours before you leave.It might open up as early as 48 hours before international flights."
    },
    {
        question:"2. Can I Change My Last Name On Aeromexico Ticket?",
        answer:"You can make small changes, like fixing typos.You usually can't change your full name or give your ticket to someone else."
    },
    {
        question:"3. How much would it cost to change the date of your flight?",
        answer:"The costs depend on the route and the kind of fare. Some flexible tickets let you change your mind for free, but basic fares charge you to do so."
    },
    {
        question:"4. Is Aeromexico fully refundable?",
        answer:"Depending on the type of ticket and fare rules, you may or may not get your money back.You can get your money back for flexible fares, but not for basic fares.  "
    },
    {
        question:"5. How much baggage is allowed on Aeromexico?",
        answer:"Your fare class will determine how much carry-on and checked baggage you can bring. Most of the time, there is one personal item and one carry-on."
    },
    {
        question:"6. Can I take a backpack and a carry-on on Aeromexico?",
        answer:"Yes, you can bring a backpack and a carry-on bag with you.Both need to be the right size and weight."
    },
    {
        question:"7. How much is a checked bag fee usually?",
        answer:"The fees depend on the cost of the trip and the type of fare. The first bag usually costs between $25 and $60."
    },
    {
        question:"8. How many hours before Aeromexico check in?",
        answer:"You can check in online between 24 and 48 hours before your flight. Most of the time, check-in at the airport starts three hours before international flights. "
    },
    {
        question:"9. Can I choose my seat on Aeromexico?",
        answer: "Yes, you can pick your seat when you book or check in.Some seats may cost more."
    },
    {
        question:"10. Can I check in at the airport with Aeromexico?",
        answer:"Yes, everyone who is flying can check in at the airport. Get there early to avoid delays, especially for international flights."
    }
]

const faqPart2 = [
    {
        question:"11. Can I change my name on an already booked flight?",
        answer: "You can only change your name a little bit.Changing a passenger's full name is usually not allowed."
    },
    {
        question:"12. Can you change a name on an Aeromexico ticket?",
        answer: "Aeromexico only lets you change the spelling a little bit.You can't give your ticket to someone else.  "
    },
    {
        question:"13. Guidance on the 24-hour reservation requirement",
        answer:"You can change or cancel your ticket within 24 hours of buying it.This usually only works if the flight is at least a week away."
    },
    {
        question:"14. What is the cancellation policy for Aeromexico flights?",
        answer: "The rules for cancelling depend on what kind of ticket you bought.Some tickets let you get your money back, but others may charge fees."
    },
    {
        question:"15. What is the 45 minute rule for Delta?",
        answer: "You have to check in at least 45 minutes before your flight leaves if you are flying within the U.S.For international flights, you need to check in earlier."
    },
    {
        question:"16. Is it worth upgrading from economy to Premium Economy?",
        answer:"In Premium Economy, you get more legroom, better food, and faster service.It's worth it for comfort on long flights. "
    },
    {
        question:"17. How can I check if my flight is on schedule?",
        answer:"Check the status of your flight online or in the airline app.Use your flight number or booking reference to track updates."
    },
    {
        question:"18.Do you get free meals on Aeromexico?",
        answer:"Meals are usually included on international flights. Smaller domestic flights, though, may have snacks."
    },
    {
        question:"19.Does Aeromexico give senior discounts?",
        answer:"Senior discounts not always a sure thing.Occasional deals are available, depending on the route and time of year."
    },
    {
        question:"20.Can I change a flight I already booked?",
        answer:"Can I amend my booking? Yes, you can change your booking if the fare rules permit.Changes fees and fare differences may apply. "
    }
]

function AeroMexicoComparisonFaq() {
    const [activeIndex, setActiveIndex] = useState(null);  //Yahan null rakhne ka matlab hai: "Abhi kuch bhi select nahi hua hai."
    // console.log("null", activeIndex);
    
    const [activeSection, setActiveSection] = useState (1);

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

export default AeroMexicoComparisonFaq
