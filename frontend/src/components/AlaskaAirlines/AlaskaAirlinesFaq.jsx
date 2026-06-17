import React, { useState } from 'react'

const faqPart1 = [
  {
    question: "1. Does Alaska Airlines offer a senior discount for seniors?",
    answer: "",
  },
  {
    question: "2. How to check Alaska Airlines flight status?",
    answer: "",
  },
  {
    question: "3. Which airline to stay away from?",
    answer: "",
  },
  {
    question: "4. What is the richest airline in the US?",
    answer: "",
  },
  {
    question: "5. Who has the best economy seats?",
    answer: "",
  },
  {
    question: "6. How to get cheaper Alaska Airlines flights?",
    answer: "",
  },
  {
    question: "7. What is the 3-1-1 rule on Alaska Airlines?",
    answer: "",
  },
  {
    question: "8. Can I bring two carry-on bags in Alaska?",
    answer: "",
  },
  {
    question: "9. What toiletries are not allowed on a plane?",
    answer: "",
  },
  {
    question: "10. How do I check in for my Alaska Airlines flight?",
    answer: "",
  },
];

const faqPart2 = [
  {
    question: "11. Can a purse be a personal item in Alaska?",
    answer: "",
  },
  {
    question: "12. Is it better to check-in online or at the airport?",
    answer: "",
  },
  {
    question: "13. How early does baggage need to be checked in Alaska?",
    answer: "",
  },
  {
    question: "14. What is the weight limit for checked luggage on Alaska Airlines?",
    answer: "",
  },
  {
    question:
      "15. What is the cancellation policy of Alaska Airlines for refundable and non-refundable tickets?",
    answer: "",
  },
  {
    question:
      "16. Can I get a full refund if I cancel my Alaska Airlines flight within 24 hours?",
    answer: "",
  },
  {
    question:
      "17. Can I change my Alaska Airlines flight on the same day without paying a fee?",
    answer: "",
  },
  {
    question:
      "18. Is it cheaper to book Alaska Airlines flights early in the morning or late at night?",
    answer: "",
  },
  {
    question:
      "19. Does Alaska Airlines offer last-minute flight deals on all routes?",
    answer: "",
  },
  {
    question:
      "20. Are Alaska Airlines flights cheaper closer to the departure date?",
    answer: "",
  },
];

function AlaskaAirlinesFaq() {
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

export default AlaskaAirlinesFaq