import React, { useState } from 'react'

const faqPart1 = [
  {
    question: "1. What cities does Allegiant fly into and out of?",
    answer: "It flies over 100 U.S. airports, mostly smaller regional ones and leisure spots like Las Vegas, Orlando, Phoenix, etc.",
  },
  {
    question: "2. What is the cheapest day to book flights on Allegiant?",
    answer: "Usually weekdays like tuesdays or wednesdays.",
  },
  {
    question: "3. What is not allowed on Allegiant airlines?",
    answer: "Like any other airline it does not allow hazardous items (explosives, flammables, aerosols, lithium batteries in checked bags).",
  },
  {
    question: "4. Do you really have to pay for carry-on on Allegiant?",
    answer: "Yes, you must pay for carry-ons ($10–$75 depending on route/timing). ",
  },
  {
    question: "5. How to get 50% off on flight tickets?",
    answer: "No standard 50% discount; only flash sales, bundles, or military perks.",
  },
  {
    question: "6. Which airline has the worst cancellation rate?",
    answer: "Spirit and Allegiant often rank among the highest in this list.",
  },
  {
    question: "7. How do I check in for Allegiant?",
    answer: "Online/app check-in from 24 hrs to 45 mins before departure. ",
  },
  {
    question: "8. How do I get my Allegiant boarding pass on my phone?",
    answer: "Use Allegiant’s mobile app for a digital pass (free). ",
  },
  {
    question: "9. Can I bring a backpack as a personal item on Allegiant?",
    answer: "Yes, if it fits under the seat (max 8×14×18 in). ",
  },
  {
    question: "10. how to cancel allegiant flight online",
    answer: "Use “Manage Travel” on Allegiant’s website.",
  },
  {
    question: "11. how to cancel allegiant flight online refund",
    answer: "",
  },
  {
    question: "12. how to cancel allegiant flight within 24 hours",
    answer: "Go to the Allegiant airline website and go to “my flights” there will be a cancellation option.",
  },
];

const faqPart2 = [
  
  {
    question: "13. What are the best ways to find Allegiant flight last minute deals?",
    answer: "Check Allegiant’s “Last Minute Flight Deals” page in the website.",
  },
  {
    question: "14. Does Allegiant Air offer last minute discounted flights?",
    answer: "Sometimes offered, but it is limited.",
  },
  {
    question: "15. How can I change an Allegiant flight after booking?",
    answer: "It is possible through the “Manage Travel” option in the Allegiant website.",
  },
  {
    question: "16. What is the Allegiant Air flight change policy?",
    answer: "With Trip Flex: free one-time change up to 1 hr before departure. Without it: fees apply. ",
  },
  {
    question: "17. Does Allegiant charge fees for changing a flight date or time?",
    answer: "About $25 per person per segment + the fare difference.",
  },
  {
    question: "18. How much are Allegiant Air baggage fees for carry-on and checked bags?",
    answer: "Carry-on: $10–$75. Checked: $18–$50 at booking, $75 at airport ",
  },
  {
    question: "19. What is included in Allegiant Air’s baggage allowance policy?",
    answer: "One free personal item; carry-on and checked bags cost extra and charges extra fees.",
  },
  {
    question: "20. Can I get a refund if I cancel an Allegiant flight last minute?",
    answer: "No, unless Allegiant cancels the flight. ",
  },
  {
    question: "21. How do I avoid high baggage fees on Allegiant flights?",
    answer: "Prepay online, travel with only a personal item, or qualify for military free bags. ",
  },
  {
    question: "22. Is it cheaper to change or cancel an Allegiant flight?",
    answer: "Usually cheaper to change than cancel in Allegiant flight. (especially with Trip Flex). ",
  },
];

function AllegiantAirlinesFaq() {
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
        <h2 className='text-center mb-6 font-bold text-3xl'>Chopa Airlines FAQ</h2>

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

export default AllegiantAirlinesFaq