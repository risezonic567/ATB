import React, { useState } from 'react'

const faqPart1 = [
  {
    question: "1. How can I get cheaper Delta flights?",
    answer:
      "Book early, travel on weekdays, and use fare alerts to find out when there are price reductions. This can save you money. When booking your tickets with Delta, the best way to save is to join their frequent flyer program; check the seasonal deals they have for flights.",
  },
  {
    question: "2. How to get 50% off on flight tickets?",
    answer:
      "Most airlines will also have deep discounts during their sales events, including but not limited to: promotional deals (like the one offered), reward point redemption opportunities or via travel agents. If you are flexible with your travel dates, you are more likely to get lower fares.",
  },
  {
    question: "3. How do I get a copy of my Delta ticket?",
    answer:
      "You can print or download your e-ticket from the “My Trips” section of Delta’s website by entering your confirmation number and last name.",
  },
  {
    question: "4. Do airlines offer senior discounts?",
    answer:
      "Some airlines offer discounts to seniors for certain routes, but it’s not always guaranteed, so you should contact the airline directly or check with a travel agent to see if they have any specials available.",
  },
  {
    question: "5. How do I check on a Delta flight status?",
    answer:
      "The best way to find a flight status update for Delta Air Lines is by visiting their website and using either the flight number or the departure date. The airline’s website or mobile app will allow you to do a live tracking of your flight.",
  },
  {
    question: "6. How to check the status of a flight?",
    answer:
      "To reach Delta for customer support, you can either call customer service, use the online chat function on the website, or find assistance in the support area of the Delta Air Lines website.",
  },
  {
    question: "7. How do I contact Delta about a reservation?",
    answer:
      "Delta provides customer support through several different means — like phone, with a mobile app (using the messaging feature), via their social media accounts, or with a live chat via their website.",
  },
  {
    question: "8. How can I communicate with Delta?",
    answer:
      "Delta offers support via phone, mobile app messaging, social media, and live chat options available on their official website.",
  },
  {
    question: "9. How can I get a discount on Delta flights?",
    answer:
      "Use SkyMiles rewards, credit card travel benefits, student or military offers, and monitor promotional sales for discounted fares.",
  },
  {
    question: "10. How many bags does Delta allow for free?",
    answer:
      "Most Delta passengers can bring one carry-on bag and one personal item free of charge. Free checked bags depend on ticket type and membership status.",
  },
];

const faqPart2 = [
  {
    question: "11. What is the new Delta rule for checked bags?",
    answer:
      "Checked bag rules vary by route and fare class, including size and weight limits. Extra fees may apply for overweight or additional baggage.",
  },
  {
    question: "12. How to check a Delta flight?",
    answer:
      "You can check your Delta flight details online through the “My Trips” section using your booking confirmation number and last name.",
  },
  {
    question: "13. How do I find my Delta itinerary?",
    answer:
      "Log in to your SkyMiles account or access “My Trips” on Delta Air Lines to view your complete itinerary.",
  },
  {
    question: "14. How do I check my flight bookings?",
    answer:
      "Visit the airline’s booking management page and enter your confirmation code and surname to view your reservations.",
  },
  {
    question: "15. Does Delta Air Lines do international flights?",
    answer:
      "Yes, Delta Air Lines operates international flights to destinations across Europe, Asia, Africa, Latin America, and more.",
  },
  {
    question: "16. Do you really need to arrive 3 hours before an international flight?",
    answer:
      "Yes, arriving 3 hours early is recommended for international flights to allow enough time for check-in, security, and immigration procedures.",
  },
  {
    question: "17. How do I contact Delta about a reservation?",
    answer:
      "You can reach Delta reservations support through phone, online chat, or customer service options available on their official website.",
  },
  {
    question: "18. What is the 45 minute rule for Delta?",
    answer:
      "Delta generally requires passengers to check in and complete baggage drop at least 45 minutes before domestic flight departure.",
  },
  {
    question: "19. How many classes are offered by Delta?",
    answer:
      "Delta offers multiple cabin classes including Basic Economy, Main Cabin, Comfort+, First Class, Premium Select, and Delta One on select routes.",
  },
  {
    question: "20. How is Delta's frequent flyer program beneficial to the passenger?",
    answer:
      "Delta SkyMiles allows passengers to earn miles on flights and purchases, which can be redeemed for tickets, upgrades, hotel stays, and other travel benefits.",
  },
];

function DeltaAirlinesFaq() {
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
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-gray-600 text-sm leading-relaxed flex gap-2 animate-fadeIn">
                    <span className="font-bold text-emerald-600 shrink-0">A.</span>
                    <span>{faq.answer}</span>
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DeltaAirlinesFaq