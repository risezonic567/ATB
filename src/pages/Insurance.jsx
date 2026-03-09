import React from "react";
import SEO from "../components/SEO";
import { Helmet } from "react-helmet";

export default function Insurance() {
  return (
    <>
      {/* <SEO
        title="International Travel Insurance from USA | Airlines Ticket Booking"
        description="Compare and buy international travel insurance from the USA. Protect your trip with medical, trip delay and cancellation coverage for global travel."
        canonical="https://www.airlinesticketbooking.com/travel-insurance"
      /> */}
      <Helmet>
        <title>International Travel Insurance from USA | Airlines Ticket Booking</title>
        <meta name="description" content="Compare and buy international travel insurance from the USA. Protect your trip with medical, trip delay and cancellation coverage for global travel." />

        <link rel="canonical" href="https://www.airlinesticketbooking.com/travel-insurance" />
        <script type="application/ld+json">
{ `{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "Service",
      "@id": "https://www.airlinesticketbooking.com/travel-insurance#service",
      "name": "International Travel Insurance Services",
      "description": "Comprehensive international travel insurance services to protect travelers from the USA against unexpected medical emergencies, trip cancellations, baggage loss, and travel interruptions. Secure peace of mind with coverage that fits your travel needs.",
      "serviceType": [
        "Travel Insurance",
        "International Travel Insurance",
        "Medical Travel Insurance",
        "Trip Cancellation Coverage",
        "Baggage Loss Protection"
      ],
      "provider": {
        "@id": "https://www.airlinesticketbooking.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://www.airlinesticketbooking.com/travel-insurance",
        "availableLanguage": ["English"]
      }
    },

    {
      "@type": "WebPage",
      "@id": "https://www.airlinesticketbooking.com/travel-insurance#webpage",
      "url": "https://www.airlinesticketbooking.com/travel-insurance",
      "name": "Travel Insurance Services | International Travel Coverage",
      "description": "Get reliable international travel insurance from the USA with coverage for medical emergencies, trip interruptions, baggage loss, and delay protection. Compare plans and secure your travel insurance easily online.",
      "isPartOf": {
        "@id": "https://www.airlinesticketbooking.com/#website"
      },
      "about": {
        "@id": "https://www.airlinesticketbooking.com/#organization"
      },
      "mainEntity": {
        "@id": "https://www.airlinesticketbooking.com/travel-insurance#service"
      },
      "breadcrumb": {
        "@id": "https://www.airlinesticketbooking.com/travel-insurance#breadcrumb"
      },
      "inLanguage": "en-US"
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
    }

  ]
}
  `}
</script>


      </Helmet>
      <section
        className="min-h-[95vh] w-full bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: "url(/photos/travel-insurance.jpg.jpeg)" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 "></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl w-full px-6 text-center ">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 md:p-12 ">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Travel Smart. Travel Insured.
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

              <input
                type="date"
                className="p-3 rounded-lg bg-white/80 outline-none"
              />

              <input
                type="date"
                className="p-3 rounded-lg bg-white/80 outline-none"
              />

              <select className="p-3 rounded-lg bg-white/80 outline-none">
                <option disabled selected>
                  Travellers
                </option>
                <option>1 Traveller</option>
                <option>2 Travellers</option>
                <option>Family</option>
              </select>

              <button className="bg-teal-600 text-white rounded-lg font-semibold">
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

      <section className="bg-gray-50 py-14 px-6 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            International Travel Insurance from the USA
          </h2>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Traveling internationally can be thrilling; however, unexpected
            occurrences such as a medical emergency, trip cancellation, lost
            luggage, or a flight delay can lead to significant anxiety as well
            as financial loss. At Airlines Ticket Booking, we offer dependable,
            affordable international travel insurance options to those traveling
            out of the USA. Our ultimate objective is to provide you with
            protection while you are on vacation and peace of mind while
            traveling.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            No matter if you are traveling for a family vacation, for business,
            going as a student, or staying outside of the US for an extended
            period of time, we have plans that cover unexpected events as well
            as provide coverage for emergency situations… simple to process,
            with defined coverage options and professional service, we will
            ensure that obtaining travel insurance is quick and easy for you.
          </p>

          {/* <div className="flex justify-center">
      <a
        href="tel:+8663075957"
        className="bg-teal-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-teal-700 transition shadow-md"
      >
        Get Covered Today
      </a>
    </div> */}
        </div>
      </section>

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
              <h3 className="font-semibold text-lg mb-2">
                Medical Emergencies
              </h3>
              <p className="text-gray-600 text-sm">
                Covers hospital bills, doctor consultations, and emergency
                treatments abroad.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="text-blue-600 text-3xl mb-4">✈️</div>
              <h3 className="font-semibold text-lg mb-2">Trip Cancellation</h3>
              <p className="text-gray-600 text-sm">
                Get reimbursement if your trip gets cancelled due to unavoidable
                reasons.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="text-blue-600 text-3xl mb-4">🧳</div>
              <h3 className="font-semibold text-lg mb-2">Lost Baggage</h3>
              <p className="text-gray-600 text-sm">
                Compensation for lost or delayed luggage during your journey.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="text-blue-600 text-3xl mb-4">⏱️</div>
              <h3 className="font-semibold text-lg mb-2">Flight Delays</h3>
              <p className="text-gray-600 text-sm">
                Claim expenses caused by long flight delays or missed
                connections.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="text-blue-600 text-3xl mb-4">📄</div>
              <h3 className="font-semibold text-lg mb-2">Passport Loss</h3>
              <p className="text-gray-600 text-sm">
                Assistance and coverage for lost passport and travel documents.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="text-blue-600 text-3xl mb-4">🌍</div>
              <h3 className="font-semibold text-lg mb-2">24x7 Assistance</h3>
              <p className="text-gray-600 text-sm">
                Global support anytime, anywhere during your trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Who Needs International Travel Insurance?
            </h2>

            <p className="text-gray-600 mb-6">
              Travel insurance is highly recommended for:
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ International Travelers</li>
              <li>✔ Corporate & Business Travelers</li>
              <li>✔ Students Studying Abroad</li>
              <li>✔ Senior Travelers</li>
              <li>✔ Families Traveling Overseas</li>
            </ul>

            <p className="text-gray-600 mt-6">
              Many countries require travel insurance as part of the visa
              application process, so it is important to include coverage in
              your travel planning.
            </p>
          </div>

          {/* Right Box */}
          <div className="bg-gray-50 p-10 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Plan Smart. Travel Secure.
            </h3>
            <p className="text-gray-600">
              Adding travel insurance to your trip ensures financial protection,
              medical coverage, and peace of mind while traveling
              internationally.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Choose Your Travel Insurance Plan
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Flexible plans designed for every type of traveler.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
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

              <button className="w-full bg-gray-800 text-white py-3 rounded-lg">
                Buy Basic
              </button>
            </div>

            {/* Standard Plan (Highlighted) */}
            <div className="bg-blue-600 text-white rounded-2xl shadow-lg p-8 text-center scale-105">
              <span className="text-sm bg-white text-blue-600 px-3 py-1 rounded-full">
                Most Popular
              </span>
              <h3 className="text-xl font-semibold mt-4 mb-2">Standard</h3>
              <p className="text-blue-100 mb-4">For regular travelers</p>
              <p className="text-3xl font-bold mb-6">₹1,999</p>

              <ul className="space-y-3 mb-6">
                <li>✔ Medical cover up to $50,000</li>
                <li>✔ Trip cancellation</li>
                <li>✔ Lost baggage</li>
                <li>✔ Flight delays</li>
              </ul>

              <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold">
                Buy Standard
              </button>
            </div>

            {/* Premium Plan */}
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

              <button className="w-full bg-gray-800 text-white py-3 rounded-lg">
                Buy Premium
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            What’s Covered & What’s Not
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Know exactly what your travel insurance includes and excludes before
            you buy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Covered */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                What’s Covered
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>✔ Medical emergencies & hospitalization</li>
                <li>✔ Trip cancellation or interruption</li>
                <li>✔ Lost or delayed baggage</li>
                <li>✔ Flight delays & missed connections</li>
                <li>✔ Passport loss assistance</li>
                <li>✔ Emergency evacuation</li>
              </ul>
            </div>

            {/* Not Covered */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-red-700 mb-4">
                What’s Not Covered
              </h3>
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

      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            How Travel Insurance Works
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Get insured in just 4 simple steps.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-2xl p-6 shadow">
              <div className="text-3xl mb-4">📝</div>
              <h3 className="font-semibold mb-2">Fill Details</h3>
              <p className="text-sm text-gray-600">
                Enter your destination, travel dates and traveller information.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <div className="text-3xl mb-4">📦</div>
              <h3 className="font-semibold mb-2">Choose Plan</h3>
              <p className="text-sm text-gray-600">
                Select the insurance plan that suits your travel needs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <div className="text-3xl mb-4">💳</div>
              <h3 className="font-semibold mb-2">Make Payment</h3>
              <p className="text-sm text-gray-600">
                Pay securely using UPI, cards or net banking.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <div className="text-3xl mb-4">📄</div>
              <h3 className="font-semibold mb-2">Get Policy</h3>
              <p className="text-sm text-gray-600">
                Instantly download your insurance policy on email.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center ">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Get Protected Before You Travel
        </h2>

        <p className="mb-6 max-w-2xl mx-auto">
          Don’t allow unforeseen circumstances to spoil your trip. Secure your
          worldwide travel insurance today through Airlines Ticket Booking and
          enjoy your journey without worry.
        </p>

        <a
          href="tel:+8663075957"
          className="inline-block bg-teal-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition shadow-md"
        >
          Get Insurance Now
        </a>
      </section>
    </>
  );
}
