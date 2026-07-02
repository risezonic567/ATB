import React, { useState } from 'react'

const faqPart1 = [
  {
    question: "1. Does Alaska Airlines offer a senior discount for seniors?",
    answer: "No. Alaska Airlines does not offer a standard senior discount. However, seniors can still save through sales, Mileage Plan rewards, companion fares, and seasonal promotions.",
  },
  {
    question: "2. How to check Alaska Airlines flight status?",
    answer: "Visit the Alaska Airlines website or mobile app, then enter your flight number or departure and arrival cities to view real-time flight status.",
  },
  {
    question: "3. Which airline to stay away from?",
    answer: "No airline should be avoided outright. Your experience depends on the route, aircraft, weather, and service. It's better to compare recent reviews, on-time performance, and safety records before booking.",
  },
  {
    question: "4. What is the richest airline in the US?",
    answer: "Delta Air Lines is generally considered the largest and one of the most financially successful U.S. airlines based on revenue and market value.",
  },
  {
    question: "5. Who has the best economy seats?",
    answer: "Many travelers rate JetBlue, Alaska Airlines, and Delta Air Lines highly for economy-class comfort.",
  },
  {
    question: "6. How to get cheaper Alaska Airlines flights?",
    answer: "Book several weeks in advance.Be flexible with travel dates.Sign up for fare alerts.Watch for seasonal sales.",
  },
  {
    question: "7. What is the 3-1-1 rule on Alaska Airlines?",
    answer: "It is the TSA (Transportation Security Administration) liquid rule:3.4-ounce (100 ml) containers or smaller.1 quart-sized clear bag.1 bag per passenger.",
  },
  {
    question: "8. Can I bring two carry-on bags in Alaska?",
    answer: "Yes. Most passengers may bring:One carry-on bag.One personal item (such as a purse, backpack, or laptop bag).",
  },
  {
    question: "9. What toiletries are not allowed on a plane?",
    answer: "Liquids over 3.4 oz (100 ml) in carry-on bags are generally not allowed. Aerosols and flammable toiletries may also be restricted.",
  },
  {
    question: "10. How do I check in for my Alaska Airlines flight?",
    answer: "You can check online and use the web.Through the Alaska Airlines mobile app.At an airport kiosk.At the check-in counter.",
  },
];

const faqPart2 = [
  {
    question: "11. Can a purse be a personal item in Alaska?",
    answer: "Yes. A purse counts as your personal item if it fits under the seat in front of you.",
  },
  {
    question: "12. Is it better to check-in online or at the airport?",
    answer: "Online check-in is usually better because it saves time, lets you select available seats, and reduces waiting at the airport.",
  },
  {
    question: "13. How early does baggage need to be checked in Alaska?",
    answer: "Alaska Airlines generally recommends checking bags at least 45 minutes before domestic flights and 60 minutes before international flights.",
  },
  {
    question: "14. What is the weight limit for checked luggage on Alaska Airlines?",
    answer: "Standard checked baggage must weigh 50 lb (23 kg) or less. Bags weighing 51–100 lb incur overweight fees.",
  },
  {
    question:
      "15. What is the cancellation policy of Alaska Airlines for refundable and non-refundable tickets?",
    answer: "Refundable tickets: Can usually be canceled for a full refund.Non-refundable tickets: Typically receive travel credit instead of a cash refund, depending on the fare rules. Saver fares have additional restrictions.",
  },
  {
    question:
      "16. Can I get a full refund if I cancel my Alaska Airlines flight within 24 hours?",
    answer: "Yes. If you book directly with Alaska Airlines, you can generally receive a full refund by canceling within 24 hours of booking, provided the booking qualifies under the airline's 24-hour policy.",
  },
  {
    question:
      "17. Can I change my Alaska Airlines flight on the same day without paying a fee?",
    answer: "it depends on your fare type and Mileage Plan status. Some elite members receive free same-day changes, while many other passengers pay a same-day change fee if eligible. Saver fares have significant restrictions.",
  },
  {
    question:
      "18. Is it cheaper to book Alaska Airlines flights early in the morning or late at night?",
    answer: "No. Ticket prices are based on demand rather than the time of day you book. Booking well in advance and being flexible with travel dates usually saves more.",
  },
  {
    question:
      "19. Does Alaska Airlines offer last-minute flight deals on all routes?",
    answer: "No. Last-minute deals are not available on every route and depend on seat availability and demand.",
  },
  {
    question:
      "20. Are Alaska Airlines flights cheaper closer to the departure date?",
    answer: "Usually not. In most cases, fares increase as the departure date approaches. Booking early generally offers the best price",
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
        <h2 className='text-center mb-6 font-bold text-3xl'>Alaska Airlines FAQ</h2>

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