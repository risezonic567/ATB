import React, { useState } from 'react'

const faqPart1 = [
  {
    question: "1. What cities does Allegiant fly into and out of?",
    answer: "",
  },
  {
    question: "2. What is the cheapest day to book flights on Allegiant?",
    answer: "",
  },
  {
    question: "3. What is not allowed on Allegiant airlines?",
    answer: "",
  },
  {
    question: "4. Do you really have to pay for carry-on on Allegiant?",
    answer: "",
  },
  {
    question: "5. How to get 50% off on flight tickets?",
    answer: "",
  },
  {
    question: "6. Which airline has the worst cancellation rate?",
    answer: "",
  },
  {
    question: "7. How do I check in for Allegiant?",
    answer: "",
  },
  {
    question: "8. How do I get my Allegiant boarding pass on my phone?",
    answer: "",
  },
  {
    question: "9. Can I bring a backpack as a personal item on Allegiant?",
    answer: "",
  },
  {
    question: "10. how to cancel allegiant flight online",
    answer: "",
  },
  {
    question: "11. how to cancel allegiant flight online refund",
    answer: "",
  },
  {
    question: "12. how to cancel allegiant flight within 24 hours",
    answer: "",
  },
];

const faqPart2 = [
  
  {
    question: "13. What are the best ways to find Allegiant flight last minute deals?",
    answer: "",
  },
  {
    question: "14. Does Allegiant Air offer last minute discounted flights?",
    answer: "",
  },
  {
    question: "15. How can I change an Allegiant flight after booking?",
    answer: "",
  },
  {
    question: "16. What is the Allegiant Air flight change policy?",
    answer: "",
  },
  {
    question: "17. Does Allegiant charge fees for changing a flight date or time?",
    answer: "",
  },
  {
    question: "18. How much are Allegiant Air baggage fees for carry-on and checked bags?",
    answer: "",
  },
  {
    question: "19. What is included in Allegiant Air’s baggage allowance policy?",
    answer: "",
  },
  {
    question: "20. Can I get a refund if I cancel an Allegiant flight last minute?",
    answer: "",
  },
  {
    question: "21. How do I avoid high baggage fees on Allegiant flights?",
    answer: "",
  },
  {
    question: "22. Is it cheaper to change or cancel an Allegiant flight?",
    answer: "",
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