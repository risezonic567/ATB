import React, { useState } from "react";
import { Helmet } from "react-helmet";

export default function Insurance() {
  // Accordion state: Ismein open question ka index store hoga (e.g., 'q1', 'q5')
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <>
      <Helmet>
        <title>International Travel Insurance from USA | Airlines Ticket Booking</title>
        <meta name="description" content="Compare and buy international travel insurance from the USA. Protect your trip with medical, trip delay, and cancellation coverage for global travel protection." />
        <link rel="canonical" href="https://www.airlinesticketbooking.com/travel-insurance" />

        <script type="application/ld+json">
{`{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.airlinesticketbooking.com/travel-insurance#service",
      "serviceType": "International Travel Insurance Services",
      "name": "International Travel Insurance from USA | Airlines Ticket Booking",
      "provider": {
        "@type": "TravelAgency",
        "name": "Airline Ticket Booking",
        "url": "https://www.airlinesticketbooking.com/"
      },
      "url": "https://www.airlinesticketbooking.com/travel-insurance",
      "image": "https://www.airlinesticketbooking.com/wp-content/uploads/2026/05/airlines-ticket-booking-logo.png",
      "description": "Compare and buy international travel insurance from the USA. Protect your trip with medical, trip delay and cancellation coverage for global travel protection.",
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "telephone": "+1-866-307-5957",
      "availableLanguage": "English"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.airlinesticketbooking.com/travel-insurance#webpage",
      "url": "https://www.airlinesticketbooking.com/travel-insurance",
      "name": "International Travel Insurance from USA | Airlines Ticket Booking",
      "description": "Compare and buy international travel insurance from the USA. Protect your trip with medical, trip delay and cancellation coverage for global travel protection.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.airlinesticketbooking.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.airlinesticketbooking.com/travel-insurance#breadcrumb"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.airlinesticketbooking.com/wp-content/uploads/2026/05/airlines-ticket-booking-logo.png"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.airlinesticketbooking.com/travel-insurance#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.airlinesticketbooking.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Travel Insurance",
          "item": "https://www.airlinesticketbooking.com/travel-insurance"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.airlinesticketbooking.com/travel-insurance#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does international travel insurance cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "International travel insurance can provide coverage for medical emergencies, trip delays, cancellations, baggage protection and other travel-related risks."
          }
        },
        {
          "@type": "Question",
          "name": "Can I buy travel insurance for international trips from USA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, travelers can compare and purchase international travel insurance plans from the USA for global trip protection."
          }
        },
        {
          "@type": "Question",
          "name": "Why is travel insurance important for global travel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Travel insurance helps protect travelers against unexpected medical expenses, cancellations, delays and travel emergencies during international trips."
          }
        }
      ]
    }
  ]
}`}
        </script>
      </Helmet>

      {/* Banner Section */}
      <section
        className="min-h-[95vh] w-full bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: "url(/photos/travel-insurance.jpg.jpeg)" }}
      >
        <div className="absolute inset-0 bg-black/50 "></div>
        <div className="relative z-10 max-w-6xl w-full px-6 text-center ">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 md:p-12 ">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              International Travel Insurance for USA Travelers
            </h1>
            <p className="text-white/90 mb-8 ">
              Get comprehensive travel insurance for medical emergencies, trip
              cancellations, lost baggage, and more — all in just 2 minutes.
            </p>

            {/* Form */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <input
                type="text"
                placeholder="Destination"
                className="p-3 rounded-lg bg-white/80 outline-none"
              />
              <input type="date" className="p-3 rounded-lg bg-white/80 outline-none" />
              <input type="date" className="p-3 rounded-lg bg-white/80 outline-none" />
              <select className="p-3 rounded-lg bg-white/80 outline-none">
                <option disabled selected>
                  Travellers
                </option>
                <option>1 Traveller</option>
                <option>2 Travellers</option>
                <option>Family</option>
              </select>
              <button className="bg-blue-600 text-white rounded-lg font-semibold">
                Get Free Quote
              </button>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap gap-6 mt-6 text-white/90 text-sm">
              <span>✔ 24x7 Global Assistance</span>
              <span>✔ Cashless Hospitalization</span>
              <span>✔ Instant Policy</span>
              <span>✔ No Hidden Charges</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Added Section */}
      <section className="py-12 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          
          {/* Intro Heading */}
          <div className="text-center md:text-left max-w-4xl">
            <h2 className="text-3xl font-bold mb-2">Travel Insurance for USA travelers-</h2>
            <p className="text-xl text-blue-600 font-semibold mb-4">‘Travel smarter with worldwide coverage’</p>
            <p className="text-gray-600 leading-relaxed">
              Are you planning a trip to the USA for business, leisure, study or visiting family? When you get the right international travel insurance, you will have financial coverage for anything that can happen while you are on the go. Medical emergencies, flight delays, lost luggage or trip cancellations can happen at any time. Therefore, international travel insurance is a must for every trip abroad. Our worldwide travel insurance policies are designed to give you total peace of mind with trustworthy cover from the moment you leave on your trip until you return home safe and sound. First time flyer or a frequent traveler, we assist you to fly with confidence & comfort.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-2">Benefits of choosing the Comprehensive Travel Insurance Plan-</h3>
            <p className="text-gray-600 mb-6">The advantage of the best international travel insurance plan is that you will have an effortless flight from the time you leave to the time you land. Advantages of the best travel insurance plans include:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg text-blue-600 mb-1">Coverage for Medical Emergency:</h4>
                <p className="text-sm text-gray-600">Covers for hospitalization, medical evacuation, and any illness that may arise in the course of your travels, including coronavirus.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-blue-600 mb-1">Trip Cancellation & Interruption:</h4>
                <p className="text-sm text-gray-600">Covers for any loss in the event of cancellation due to an emergency.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-blue-600 mb-1">Lost Baggage & Passport:</h4>
                <p className="text-sm text-gray-600">Helps in recovering lost baggage/passport.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-blue-600 mb-1">Personal Liability:</h4>
                <p className="text-sm text-gray-600">Covers for accidental damage.</p>
              </div>
            </div>
          </div>

          {/* Emergency & Business Travel */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">Emergency Travel Insurance for Unforeseen Incidents-</h3>
              <p className="text-sm text-gray-600 mb-4">Travel arrangements can be disrupted by illnesses, accidents, or other emergencies that may arise. The emergency travel insurance offered by us will ensure your security in an unexpected situation.</p>
              <h4 className="font-semibold mb-2 text-sm text-gray-700">Features of our insurance cover include:</h4>
              <ul className="space-y-1 text-sm text-gray-600 list-disc list-inside">
                <li>Emergency hospitalization</li>
                <li>Ambulance coverage</li>
                <li>Evacuation services</li>
                <li>Emergency dental care</li>
                <li>Emergency family travel assistance</li>
                <li>Repatriation assistance</li>
              </ul>
              <p className="text-xs text-blue-600 font-medium mt-4">At any point of time while traveling in the USA, our emergency assistance team will be available round-the-clock.</p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">Travel Accident Insurance for Business Travelers</h3>
              <p className="text-sm text-gray-600 mb-4">There are a number of risk factors associated with travels for business such as meetings, conferences, exhibitions and international assignments. The travel accident insurance scheme we offer will provide you protection in case of accidental injury, disability and travel disruption during your business travels.</p>
              <h4 className="font-semibold mb-2 text-sm text-gray-700">Some of the major benefits offered are:</h4>
              <ul className="space-y-1 text-sm text-gray-600 list-disc list-inside">
                <li>Benefits In Case of Accidental Death</li>
                <li>Coverage For Permanent Disabilities</li>
                <li>Medical Expenses</li>
                <li>Insurance Against Damage To Your Business Equipment</li>
                <li>Protection Against Travel Delays</li>
                <li>Emergency Evacuation Assistance</li>
              </ul>
              <p className="text-xs text-blue-600 font-medium mt-4">Our business travel accident insurance gives you the freedom to travel internationally without any worry.</p>
            </div>
          </div>

          {/* Travel Protection & Trip Insurance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-2">Travel Protection Plans For Complete Peace of Mind</h3>
              <p className="text-sm text-gray-600 mb-4">A good travel protection plan not only offers you health protection but also insures you against other travel losses. Right from planning your flights till you reach the end of your journey everything is taken care of.</p>
              <h4 className="font-semibold mb-2 text-sm text-gray-700">Some of the travel protection plans offered by us are:</h4>
              <ul className="space-y-1 text-sm text-gray-600 list-none">
                <li>✔ Trip Cancellation</li>
                <li>✔ Curtailing Of Your Trip</li>
                <li>✔ Delay Or Missing Of Flights</li>
                <li>✔ Losing Money On Your Hotel Booking</li>
                <li>✔ Travel Delay Insurance</li>
                <li>✔ Emergency Assistance Services</li>
              </ul>
              <p className="text-xs text-gray-500 mt-4">Regardless of whether you travel alone, with your family or for your work, these protection plans can help you to save you from any kind of financial surprises.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-2">Trip Insurance Protection For Every Journey</h3>
              <p className="text-sm text-gray-600 mb-4">For every international trip, you require trip insurance which will keep you secure both financially and in terms of health.</p>
              <h4 className="font-semibold mb-2 text-sm text-gray-700">Some of the advantages are:</h4>
              <ul className="space-y-1 text-sm text-gray-600 list-none">
                <li>✔ Affordable Premiums</li>
                <li>✔ Customizable Insurance Plans</li>
                <li>✔ Cashless Hospital Network</li>
                <li>✔ Worldwide Emergency Assistance</li>
                <li>✔ Quick Claim Settlement</li>
                <li>✔ Convenient Documentation Process</li>
              </ul>
              <p className="text-xs text-gray-500 mt-4">Complete travel insurance protection makes sure that you travel safely and securely.</p>
            </div>
          </div>

          {/* Flight Travel Insurance & Target Audience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-2">Flight Travel Insurance For Hassle Free Flights</h3>
              <p className="text-sm text-gray-600 mb-4">Air travel is uncertain to a great extent. The flight travel insurance plan we offer will protect you from any kind of disruption during your air travels.</p>
              <h4 className="font-semibold mb-2 text-sm text-gray-700">It can cover the following:</h4>
              <ul className="space-y-1 text-sm text-gray-600 list-disc list-inside">
                <li>Cancellation Of Flights</li>
                <li>Compensation For Delay In Your Flight</li>
                <li>Missing Flight Connections</li>
                <li>Loss Of Checked Luggage</li>
                <li>Delayed Luggage</li>
                <li>Personal Accident During Flights</li>
              </ul>
              <p className="text-xs text-blue-600 font-medium mt-4">In case of delay in your flight or lost luggage, we will make sure that your travel continues seamlessly.</p>
            </div>

            <div className="border border-gray-200 p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-2">Who Should Buy a Trip Insurance Plan for International Travels?</h3>
              <p className="text-sm text-gray-600 mb-4">Our international trip insurance is perfect for the following people:</p>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 font-medium">
                <div>• Vacation Travelers</div>
                <div>• Corporate Travelers</div>
                <div>• Abroad Students</div>
                <div>• US Vacationers</div>
                <div>• Solo Travelers</div>
                <div>• Seniors</div>
                <div>• Frequent Flyers</div>
              </div>
              <p className="text-xs text-gray-500 mt-6">No matter what the reason for your travel, selecting an insurance policy will protect you financially.</p>
            </div>
          </div>

          {/* Final Intro Callout */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Why do you need our travel insurance for your trip abroad?</h3>
            <p className="text-sm text-blue-800 mb-6">We want to make your foreign travels safe and hassle-free.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h4 className="font-bold text-blue-700 mb-1">Global Coverage</h4>
                <p className="text-xs text-gray-600">Affordable insurance and 24 hour emergency support.</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h4 className="font-bold text-blue-700 mb-1">Claims Made Easier</h4>
                <p className="text-xs text-gray-600">Coverage Types & Dependable Help structured for fast processing.</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h4 className="font-bold text-blue-700 mb-1">Complete Protection</h4>
                <p className="text-xs text-gray-600">Against all medical and travel-related emergencies. Suitable for commercial and recreational use.</p>
              </div>
            </div>
            <p className="text-sm text-blue-900 font-semibold mt-6">We hope to continue to provide you with suitable international travel insurance.</p>
          </div>

        </div>
      </section>

      {/* Why Do You Need Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Why Do You Need Travel Insurance?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Unexpected situations can happen anytime during your trip. Our
            travel insurance keeps you financially protected wherever you go.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="text-blue-600 text-3xl mb-4">🩺</div>
              <h3 className="font-semibold text-lg mb-2">Medical Emergencies</h3>
              <p className="text-gray-600 text-sm">Covers hospital bills, doctor consultations, and emergency treatments abroad.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="text-blue-600 text-3xl mb-4">✈️</div>
              <h3 className="font-semibold text-lg mb-2">Trip Cancellation</h3>
              <p className="text-gray-600 text-sm">Get reimbursement if your trip gets cancelled due to unavoidable reasons.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="text-blue-600 text-3xl mb-4">🧳</div>
              <h3 className="font-semibold text-lg mb-2">Lost Baggage</h3>
              <p className="text-gray-600 text-sm">Compensation for lost or delayed luggage during your journey.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="text-blue-600 text-3xl mb-4">⏱️</div>
              <h3 className="font-semibold text-lg mb-2">Flight Delays</h3>
              <p className="text-gray-600 text-sm">Claim expenses caused by long flight delays or missed connections.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="text-blue-600 text-3xl mb-4">📄</div>
              <h3 className="font-semibold text-lg mb-2">Passport Loss</h3>
              <p className="text-gray-600 text-sm">Assistance and coverage for lost passport and travel documents.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="text-blue-600 text-3xl mb-4">🌍</div>
              <h3 className="font-semibold text-lg mb-2">24x7 Assistance</h3>
              <p className="text-gray-600 text-sm">Global support anytime, anywhere during your trip.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Travel Insurance Plan Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Choose Your Travel Insurance Plan</h2>
          <p className="text-center text-gray-600 mb-12">Flexible plans designed for every type of traveler.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow p-8 text-center">
              <h3 className="text-xl font-semibold mb-2">Basic</h3>
              <p className="text-gray-500 mb-4">For short trips</p>
              <p className="text-3xl font-bold mb-6">₹999</p>
              <ul className="text-gray-600 space-y-3 mb-6">
                <li>✔ Medical cover up to $10,000</li>
                <li>✔ Trip cancellation</li>
                <li>✔ Lost baggage</li>
                <li>✖ Adventure sports</li>
              </ul>
              <button className="w-full bg-gray-800 text-white py-3 rounded-lg">Buy Basic</button>
            </div>

            <div className="bg-blue-600 text-white rounded-2xl shadow-lg p-8 text-center scale-105">
              <span className="text-sm bg-white text-blue-600 px-3 py-1 rounded-full">Most Popular</span>
              <h3 className="text-xl font-semibold mt-4 mb-2">Standard</h3>
              <p className="text-blue-100 mb-4">For regular travelers</p>
              <p className="text-3xl font-bold mb-6">₹1,999</p>
              <ul className="space-y-3 mb-6">
                <li>✔ Medical cover up to $50,000</li>
                <li>✔ Trip cancellation</li>
                <li>✔ Lost baggage</li>
                <li>✔ Flight delays</li>
              </ul>
              <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold">Buy Standard</button>
            </div>

            <div className="bg-white rounded-2xl shadow p-8 text-center">
              <h3 className="text-xl font-semibold mb-2">Premium</h3>
              <p className="text-gray-500 mb-4">For international trips</p>
              <p className="text-3xl font-bold mb-6">₹3,499</p>
              <ul className="text-gray-600 space-y-3 mb-6">
                <li>✔ Medical cover up to $100,000</li>
                <li>✔ All Standard benefits</li>
                <li>✔ Adventure sports</li>
                <li>✔ Priority support</li>
              </ul>
              <button className="w-full bg-gray-800 text-white py-3 rounded-lg">Buy Premium</button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Covered & What's Not */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">What’s Covered & What’s Not</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Know exactly what your travel insurance includes and excludes before you buy.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-green-700 mb-4">What’s Covered</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✔ Medical emergencies & hospitalization</li>
                <li>✔ Trip cancellation or interruption</li>
                <li>✔ Lost or delayed baggage</li>
                <li>✔ Flight delays & missed connections</li>
                <li>✔ Passport loss assistance</li>
                <li>✔ Emergency evacuation</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-red-700 mb-4">What’s Not Covered</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✖ Pre-existing medical conditions</li>
                <li>✖ Injuries under alcohol or drugs</li>
                <li>✖ Self-inflicted injuries</li>
                <li>✖ High-risk adventure sports</li>
                <li>✖ War or terrorism-related incidents</li>
                <li>✖ Travel against government advice</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How Travel Insurance Works */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">How Travel Insurance Works</h2>
          <p className="text-center text-gray-600 mb-12">Get insured in just 4 simple steps.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-2xl p-6 shadow">
              <div className="text-3xl mb-4">📝</div>
              <h3 className="font-semibold mb-2">Fill Details</h3>
              <p className="text-sm text-gray-600">Enter your destination, travel dates and traveller information.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow">
              <div className="text-3xl mb-4">📦</div>
              <h3 className="font-semibold mb-2">Choose Plan</h3>
              <p className="text-sm text-gray-600">Select the insurance plan that suits your travel needs.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow">
              <div className="text-3xl mb-4">💳</div>
              <h3 className="font-semibold mb-2">Make Payment</h3>
              <p className="text-sm text-gray-600">Pay securely using UPI, cards or net banking.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow">
              <div className="text-3xl mb-4">📄</div>
              <h3 className="font-semibold mb-2">Get Policy</h3>
              <p className="text-sm text-gray-600">Instantly download your insurance policy on email.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DYNAMIC TWO-COLUMN ACCORDION FAQS SECTION */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">FAQs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 items-start">
            
            {/* COLUMN 1 (Questions 1 to 5) */}
            <div className="space-y-4">
              {[
                { id: "q1", q: "1. Can I buy travel insurance once I book my travels?", a: "Yes. You can always purchase international travel insurance after booking your trips but it's recommended that you purchase insurance early to get full benefits of the insurance, such as trip cancellations, interruptions, and emergencies prior to departure." },
                { id: "q2", q: "2. When is the best time to purchase international travel insurance?", a: "The best time to buy travel insurance is right after confirming your travels. Purchase of travel insurance will protect your travel investments from any kind of unexpected event prior to and during your travels." },
                { id: "q3", q: "3. What is the best travel insurance for international travels?", a: "The best travel insurance is the one that will fit your travel requirements. The policy will have to offer medical coverage, cancellation and interruption, baggage and other necessary features. ATB will help you choose the right policy for you." },
                { id: "q4", q: "4. Is travel insurance applicable to medical emergencies abroad?", a: "Yes. Most international travel insurance policies provide coverage for emergency medical expenses, hospitalization, doctor consultations, evacuation, and other medical emergencies that could arise during your travel to another country. This depends on the insurance policy you choose." },
                { id: "q5", q: "5. How do I make a travel insurance claim?", a: "Just contact your insurance provider and report the problem, fill the claim form and attach all necessary documents like medical report, bills, police reports and tickets." }
              ].map((faq) => (
                <div key={faq.id} className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50 shadow-sm ">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-950 hover:bg-gray-100 transition duration-200 outline-none" 
                  >
                    <span>{faq.q}</span>
                    <span className="text-blue-600 font-bold ml-2">
                      {openFaq === faq.id ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      openFaq === faq.id ? "max-h-48 border-t border-gray-200" : "max-h-0"
                    }`}
                  >
                    <p className="p-4 text-gray-600 text-sm bg-white leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* COLUMN 2 (Questions 6 to 10) */}
            <div className="space-y-4">
              {[
                { id: "q6", q: "6. Which is the best international travel insurance?", a: "The best travel insurance is the one that will fit your travel requirements. The policy will have to offer medical coverage, cancellation and interruption, baggage and other necessary features. ATB will help you choose the right policy for you." },
                { id: "q7", q: "7. How can I purchase my international travel insurance?", a: "Purchasing international travel insurance online is very simple. You just need duly to give your travel details, compare policies, choose the policy that best fits you, pay for the policy and get the policy in an instant in your e-mail." },
                { id: "q8", q: "8. Is travel insurance mandatory for international travels?", a: "It really depends on the country you wish to visit. There are some countries that mandate travelers to possess a valid travel insurance as part of the visa requirement, whereas there are some countries which do not have such mandates. But having travel insurance is strongly suggested to cover any unforeseen costs that can occur." },
                { id: "q9", q: "9. What is covered in an international travel insurance plan?", a: "In general, the coverage in an international travel insurance plan will include emergency medical treatment, hospitalization, trip cancellation/interruption insurance, baggage loss/delay, lost passport assistance, personal liability, emergency evacuation, and worldwide 24-hour travel assistance. This list will differ according to the insurance plan chosen." },
                { id: "q10", q: "10. How much would international travel insurance cost?", a: "The cost of the international travel insurance depends upon various factors, such as the travel destination, the length of the travel, age of the traveler, coverage amount, and other additional options. ATB provides cheap travel insurance plans with various coverage options." }
              ].map((faq) => (
                <div key={faq.id} className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50 shadow-sm">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-950 hover:bg-gray-100 transition duration-200 outline-none"
                  >
                    <span>{faq.q}</span>
                    <span className="text-blue-600 font-bold ml-2">
                      {openFaq === faq.id ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      openFaq === faq.id ? "max-h-48 border-t border-gray-200" : "max-h-0"
                    }`}
                  >
                    <p className="p-4 text-gray-600 text-sm bg-white leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}