import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  PlaneTakeoff,
  MapPin,
  Phone,
  CheckCircle,
  Globe2,
  CheckCircle2,
} from "lucide-react";

import { Helmet } from "react-helmet";

// const flightSchema = {
//     "@context": "https://schema.org",
//   "@graph": [

//     {
//       "@type": "Service",
//       "@id": "https://www.airlinesticketbooking.com/flight-booking-services#service",
//       "name": "Flight Booking Services",
//       "description": "Professional flight booking services from the USA offering affordable domestic and international airline ticket reservations, competitive airfare deals, personalized support and secure online booking.",
//       "serviceType": [
//         "Domestic Flight Booking",
//         "International Flight Booking",
//         "Cheap Flight Deals",
//         "Last Minute Flight Booking",
//         "Multi-City Flight Booking"
//       ],
//       "provider": {
//         "@id": "https://www.airlinesticketbooking.com/#organization"
//       },
//       "areaServed": {
//         "@type": "Country",
//         "name": "United States"
//       },
//       "availableChannel": {
//         "@type": "ServiceChannel",
//         "serviceUrl": "https://www.airlinesticketbooking.com/flight-booking-services",
//         "availableLanguage": ["English"]
//       }
//     },

//     {
//       "@type": "WebPage",
//       "@id": "https://www.airlinesticketbooking.com/flight-booking-services#webpage",
//       "url": "https://www.airlinesticketbooking.com/flight-booking-services",
//       "name": "Flight Booking Services from USA | Airline Ticket Booking",
//       "description": "Book affordable domestic & international flights from the USA. Explore flight booking services, compare fares and get expert support from a trusted travel agency.",
//       "isPartOf": {
//         "@id": "https://www.airlinesticketbooking.com/#website"
//       },
//       "about": {
//         "@id": "https://www.airlinesticketbooking.com/#organization"
//       },
//       "mainEntity": {
//         "@id": "https://www.airlinesticketbooking.com/flight-booking-services#service"
//       },
//       "breadcrumb": {
//         "@id": "https://www.airlinesticketbooking.com/flight-booking-services#breadcrumb"
//       },
//       "inLanguage": "en-US"
//     },

//     {
//       "@type": "BreadcrumbList",
//       "@id": "https://www.airlinesticketbooking.com/flight-booking-services#breadcrumb",
//       "itemListElement": [
//         {
//           "@type": "ListItem",
//           "position": 1,
//           "name": "Home",
//           "item": "https://www.airlinesticketbooking.com/"
//         },
//         {
//           "@type": "ListItem",
//           "position": 2,
//           "name": "Flight Booking Services",
//           "item": "https://www.airlinesticketbooking.com/flight-booking-services"
//         }
//       ]
//     }

//   ]
// }


// Consolidated Destination Data
const allDestinations = {
  USA: [
    {
      name: "New York",
      img: "/photos/New York.jpeg",
      desc: "The city that never sleeps, with unbeatable airfare deals.",
    },
    {
      name: "Los Angeles",
      img: "/photos/Los Angeles.jpg.jpeg",
      desc: "Fly to the West Coast for Hollywood glamour and beautiful beaches.",
    },
    {
      name: "Chicago",
      img: "/photos/Chicago.jpg.jpeg",
      desc: "Experience the Windy City's architecture and culinary scene.",
    },
    {
      name: "Las Vegas",
      img: "/photos/Las Vegas.jpg.jpeg",
      desc: "Find cheap flights for your desert entertainment escape.",
    },
    {
      name: "Washington D.C.",
      img: "/photos/Washington D.C.jpg.jpeg",
      desc: "The nation's capital, rich in history and culture.",
    },
    {
      name: "San Francisco",
      img: "/photos/San Francisco.jpg.jpeg",
      desc: "Gateway to Northern California and the Golden Gate.",
    },
  ],
  Europe: [
    {
      name: "London",
      img: "/photos/London.jpeg",
      desc: "Book your flight to the heart of the UK.",
    },
    {
      name: "Paris",
      img: "/photos/Paris..jpeg",
      desc: "Romantic flights to the City of Light.",
    },
    {
      name: "Rome",
      img: "/photos/Rome.jpg.jpeg",
      desc: "Ancient history and modern wonders await.",
    },
    {
      name: "Barcelona",
      img: "/photos/Barcelona.jpg.jpeg",
      desc: "Sun, art, and Spanish culture—all in one trip.",
    },
    {
      name: "Berlin",
      img: "/photos/Berlin.jpg.jpeg",
      desc: "Discover Germany's vibrant, historic capital.",
    },
    {
      name: "Venice",
      img: "/photos/Venice.jpg.jpeg",
      desc: "Affordable travel to the city on the water.",
    },
  ],
  Canada: [
    {
      name: "Toronto",
      img: "/photos/Toronto.jpg.jpeg",
      desc: "Canada's largest city and cultural hub.",
    },
    {
      name: "Vancouver",
      img: "/photos/Vancouver.jpg.jpeg",
      desc: "Coastal mountains and metropolitan charm.",
    },
    {
      name: "Montreal",
      img: "/photos/Montreal.jpg.jpeg",
      desc: "North America's taste of Europe.",
    },
  ],
};

const regions = ["USA", "Europe", "Canada"];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function DestinationsPage() {
  const [activeRegion, setActiveRegion] = useState("USA");

  return (
    <>
      {/* <SEO 
      title='Book affordable Flights from USA | Airlines Ticket Booking'
      description='Search and book affordable domestic and international flights from the USA. Compare airline fares, get exclusive flight deals and reserve tickets easily online.'
      canonical='https://www.airlinesticketbooking.com/flight-booking-services'
      
      /> */}
      <Helmet>
        <title>Book affordable Flights from USA | Airlines Ticket Booking</title>
        <meta name="description" content="Search and book affordable domestic and international flights from the USA. Compare airline fares, get exclusive flight deals and reserve tickets easily online." />
        <link rel="canonical" href="https://www.airlinesticketbooking.com/flight-booking-services" />
        <script type="application/ld+json">
{ `{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "Service",
      "@id": "https://www.airlinesticketbooking.com/flight-booking-services#service",
      "name": "Flight Booking Services",
      "description": "Professional flight booking services from the USA offering affordable domestic and international airline ticket reservations, competitive airfare deals, personalized support and secure online booking.",
      "serviceType": [
        "Domestic Flight Booking",
        "International Flight Booking",
        "Cheap Flight Deals",
        "Last Minute Flight Booking",
        "Multi-City Flight Booking"
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
        "serviceUrl": "https://www.airlinesticketbooking.com/flight-booking-services",
        "availableLanguage": ["English"]
      }
    },

    {
      "@type": "WebPage",
      "@id": "https://www.airlinesticketbooking.com/flight-booking-services#webpage",
      "url": "https://www.airlinesticketbooking.com/flight-booking-services",
      "name": "Flight Booking Services from USA | Airline Ticket Booking",
      "description": "Book affordable domestic & international flights from the USA. Explore flight booking services, compare fares and get expert support from a trusted travel agency.",
      "isPartOf": {
        "@id": "https://www.airlinesticketbooking.com/#website"
      },
      "about": {
        "@id": "https://www.airlinesticketbooking.com/#organization"
      },
      "mainEntity": {
        "@id": "https://www.airlinesticketbooking.com/flight-booking-services#service"
      },
      "breadcrumb": {
        "@id": "https://www.airlinesticketbooking.com/flight-booking-services#breadcrumb"
      },
      "inLanguage": "en-US"
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.airlinesticketbooking.com/flight-booking-services#breadcrumb",
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
          "name": "Flight Booking Services",
          "item": "https://www.airlinesticketbooking.com/flight-booking-services"
        }
      ]
    }

  ]
} `}
</script>


      </Helmet>
      <div className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
              Professional Flight Booking Services for Domestic & International
              Travel
            </h1>
            <p className="text-xl text-gray-600 max-w-7xl mx-auto flex items-center justify-center gap-2">
              Explore the Need reliable booking services for travel within the
              USA? We provide a service to help you book cheap airlines flying
              to/from any destination in the USA, whether it is for a business
              trip, family vacation, or short-notice trip, We provide all the
              help necessary to get the best airfare possible for your trip.
            </p>
          </motion.div>

          {/* Region Tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-gray-100 p-2 rounded-full shadow-inner">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setActiveRegion(region)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2
                                    ${
                                      activeRegion === region
                                        ? "bg-teal-600 text-white shadow-lg"
                                        : "text-gray-700 hover:bg-white hover:text-teal-700"
                                    }`}
                >
                  <MapPin className="w-5 h-5" /> {region}
                </button>
              ))}
            </div>
          </div>

          {/* Destinations Grid */}
          <motion.div
            key={activeRegion} // Key changes to trigger animation when region tab switches
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {allDestinations[activeRegion].map((city, index) => (
              <motion.a
                key={index}
                href={`/flights?to=${city.name.replace(/\s/g, "+")}`} // Link back to the flight form
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                }}
                className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100 block group"
              >
                <div className="relative h-48">
                  <img
                    src={city.img}
                    alt={city.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-teal-700/50 transition-colors flex items-center justify-center">
                    <PlaneTakeoff className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {city.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{city.desc}</p>
                  <span className="mt-3 inline-block text-teal-600 font-semibold text-sm">
                    Explore Flights →
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* <div className="text-center mt-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg text-gray-700 max-w-xl mx-auto"
          >
            Can't find your destination? Call us now for exclusive routes and
            private deals!
          </motion.p>
          <motion.a
            href="tel:+8663075957"
            className="mt-6 inline-block bg-teal-700 text-white px-8 py-3 rounded-full font-semibold shadow-xl hover:bg-teal-800 transition-all text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="inline-block w-5 h-5 mr-2" /> Call +8663075957
          </motion.a>
        </div> */}
        </div>
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Book Cheap Domestic Flights Across the USA
              </h2>
              <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                Our discounted rate program offers exclusive benefits for
                booking domestic flights across major U.S. metropolitan cities —
                including New York City, Los Angeles, San Francisco, and
                Washington, D.C.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                "One-way and round-trip tickets",
                "Last-minute flight deals",
                "Flexible departure dates",
                "Budget class & first-class options available",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-teal-600 mt-1 " />
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className=" from-blue-50 via-white to-indigo-50  px-4 sm:px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-14">
              <div className="flex justify-center mb-4">
                {/* <Globe2 className="w-10 h-10 text-indigo-600" /> */}
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Affordable International Flight Booking Services
              </h2>

              <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                Planning to travel abroad? We offer competitive international
                flight options from major U.S. airports to top destinations
                across Europe, Asia, and beyond. Enjoy great pricing, reliable
                service, smooth connections, and complete support throughout
                your journey.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                "International flights — One-way & Return options",
                "Multi-city trip planning",
                "Special fares for students & business travelers",
                "Schedule change & travel disruption support",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-indigo-600 mt-1" />
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-6 px-4 sm:px-6 lg:px-20 mt-8">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why Choose Our Flight Booking Services?
              </h2>
              <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                Choosing the right travel partner makes all the difference. Our
                airline reservation service is designed to be cost-effective,
                dependable, and simple for every traveler.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
              {[
                {
                  title: "Competitive & Transparent Airfare",
                  desc: "We work hard to secure competitive airfares for domestic and international travel with clear, honest pricing — no hidden surprises.",
                },
                {
                  title: "Domestic & International Expertise",
                  desc: "From flights across America to global destinations, our experts find the best airline connections, schedules, and travel options.",
                },
                {
                  title: "Easy & Secure Booking Process",
                  desc: "Our streamlined booking system ensures a smooth, safe, and hassle-free experience from search to confirmation.",
                },
                {
                  title: "Personalized Travel Assistance",
                  desc: "Whether it's last-minute bookings or itinerary changes, our specialists guide you every step of the way.",
                },
                {
                  title: "Flexible Travel Options",
                  desc: "Choose one-way, return, or multi-city flights tailored to your travel style and budget preferences.",
                },
                {
                  title: "Dedicated Customer Support",
                  desc: "Our support team is available before, during, and after your booking to answer all your travel-related questions.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* <CheckCircle2 className="w-6 h-6 text-teal-600 mt-1" /> */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
