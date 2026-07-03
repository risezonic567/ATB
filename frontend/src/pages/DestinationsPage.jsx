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
      <Helmet>
        <title>Book Cheap Flights Online From USA | Airline Ticket Booking </title>
        <meta name="description" content="Book cheap flights online from USA and find last minute airline deals. Compare fares, reserve international & domestic flight tickets easily today worldwide" />
        <link rel="canonical" href="https://www.airlinesticketbooking.com/flight-booking-services" />

        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://www.airlinesticketbooking.com/flight-booking-services#service",
                "serviceType": "Flight Booking Services",
                "name": "Book Cheap Flights Online From USA | Airline Ticket Booking",
                "provider": {
                  "@type": "TravelAgency",
                  "name": "Airline Ticket Booking",
                  "url": "https://www.airlinesticketbooking.com/"
                },
                "url": "https://www.airlinesticketbooking.com/flight-booking-services",
                "image": "https://www.airlinesticketbooking.com/wp-content/uploads/2026/05/airlines-ticket-booking-logo.png",
                "description": "Book cheap flights online from USA and find last minute airline deals. Compare fares, reserve international and domestic flight tickets easily today worldwide.",
                "areaServed": {
                  "@type": "Country",
                  "name": "United States"
                },
                "telephone": "+1-866-307-5957",
                "availableLanguage": "English"
              },
              {
                "@type": "WebPage",
                "@id": "https://www.airlinesticketbooking.com/flight-booking-services#webpage",
                "url": "https://www.airlinesticketbooking.com/flight-booking-services",
                "name": "Book Cheap Flights Online From USA | Airline Ticket Booking",
                "description": "Book cheap flights online from USA and find last minute airline deals. Compare fares, reserve international and domestic flight tickets easily today worldwide.",
                "inLanguage": "en-US",
                "isPartOf": {
                  "@id": "https://www.airlinesticketbooking.com/#website"
                },
                "breadcrumb": {
                  "@id": "https://www.airlinesticketbooking.com/flight-booking-services#breadcrumb"
                },
                "primaryImageOfPage": {
                  "@type": "ImageObject",
                  "url": "https://www.airlinesticketbooking.com/wp-content/uploads/2026/05/airlines-ticket-booking-logo.png"
                }
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
              },
              {
                "@type": "FAQPage",
                "@id": "https://www.airlinesticketbooking.com/flight-booking-services#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How can I book cheap flights online from USA?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You can compare airline fares, find last minute deals and reserve cheap international and domestic flight tickets online from USA."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you provide international and domestic flight booking services?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, affordable international and domestic airline ticket booking services are available for travelers worldwide."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I compare airline ticket fares before booking?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, travelers can compare airline ticket fares, low prices and flight deals before reserving tickets online."
                    }
                  }
                ]
              }
            ]
          }`}
        </script>
      </Helmet>

     
      <div className="relative h-[320px] md:h-[700px] w-full  overflow-hidden">
      
        <img 
          src="/banner/ATB-Three.jpg" 
          alt="Airlines Ticket Booking Banner" 
          className="w-full h-full object-cover object-center opacity-60"
        />
       
        <div className="absolute inset-0  bg-black/30" />
        <h3 className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white">
          Book Cheap Flights Online From USA Last Minute Flight Deals
        </h3>
      </div>

     
      <div className=" bg-white">
        <div className="container mx-auto px-6 max-w-7xl space-y-20">
          
      
          <div className="bg-gray-50 border mt-10 border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block text-[11px] uppercase tracking-widest font-extrabold text-white bg-teal-600 px-3 py-1 rounded">
                Discount US Domestic Flight Booking
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Get Access to Premium Domestic Airfares
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Book flights from airlines offering domestic airfares and get access to one of the largest selection of discount US domestic flights. Whether you’re booking a trip in advance or last minute same day domestic flights, use our real-time booking tool and find the best deals on discount domestic flights.
              </p>
            </div>
            <div className="lg:col-span-4 bg-white border border-gray-200 rounded-2xl p-6 text-center space-y-2 shadow-sm">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Real-Time Search Tool Available</p>
              <p className="text-2xl font-black text-teal-600">Save Up To 40%</p>
              <p className="text-md text-gray-500">On major regional hubs & non-stop coast-to-coast flights.</p>
            </div>
          </div>

         
          <div className="space-y-6">
            <div className="border-l-4 border-teal-600 pl-4">
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                Domestic Flight Booking - All Major US Routes
              </h3>
              <p className="text-md text-gray-500">Select premium discounted pricing segments mapped across the United States.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-white border border-gray-150 rounded-2xl p-6 space-y-3 shadow-sm hover:border-teal-200 transition-all">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest border-b border-gray-100 pb-2 text-teal-600">
                  ★ East Coast & Coastal
                </h4>
                <ul className="space-y-2  text-md font-medium text-gray-600">
                  <li className="hover:text-teal-600 cursor-pointer">• Discount Flights New York to Chicago</li>
                  <li className="hover:text-teal-600 cursor-pointer">• Flights from Boston to DC Washington</li>
                  <li className="hover:text-teal-600 cursor-pointer">• Discount Flights Atlanta to New York</li>
                  <li className="hover:text-teal-600 cursor-pointer">• Discount Flights NYC to Miami</li>
                  <li className="hover:text-teal-600 cursor-pointer">• Discount Flights to New York (Any City)</li>
                  <li className="hover:text-teal-600 cursor-pointer">• Discount Flights to Fort Lauderdale</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-150 rounded-2xl p-6 space-y-3 shadow-sm hover:border-teal-200 transition-all">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest border-b border-gray-100 pb-2 text-teal-600">
                  ★ Midwest & Central
                </h4>
                <ul className="space-y-2 text-md font-medium text-gray-600">
                  <li className="hover:text-teal-600 cursor-pointer">• Discount Flights from Chicago to Las Vegas</li>
                  <li className="hover:text-teal-600 cursor-pointer">• Discount Flights from Houston to New York</li>
                  <li className="hover:text-teal-600 cursor-pointer">• Discount Flights from Dallas to Orlando</li>
                  <li className="hover:text-teal-600 cursor-pointer">• Discount Flights to Chicago</li>
                  <li className="hover:text-teal-600 cursor-pointer">• Discount Flights to Austin Texas</li>
                  <li className="hover:text-teal-600 cursor-pointer">• Discount Flights to Nashville</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-150 rounded-2xl p-6 space-y-3 shadow-sm hover:border-teal-200 transition-all">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest border-b border-gray-100 pb-2 text-teal-600">
                  ★ West Coast & Mountain
                </h4>
                <ul className="space-y-2 text-md font-medium text-gray-600">
                  <li className="hover:text-teal-600 cursor-pointer">• Discount Flights Los Angeles to Las Vegas</li>
                  <li className="hover:text-teal-600 cursor-pointer">• Discount Flights San Francisco to Seattle</li>
                  <li className="hover:text-teal-600 cursor-pointer">• Discount Flights to Los Angeles</li>
                  <li className="hover:text-teal-600 cursor-pointer">• Discount Flights to Denver</li>
                  <li className="hover:text-teal-600 cursor-pointer">• Flights from Denver to Las Vegas</li>
                  <li className="hover:text-teal-600 cursor-pointer">• Discount Flights to Phoenix</li>
                  <li className="hover:text-teal-600 cursor-pointer">• Discount Flights to San Diego</li>
                </ul>
              </div>


              <div className="bg-white border border-gray-150 rounded-2xl p-6 space-y-3 shadow-sm hover:border-teal-200 transition-all">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest border-b border-gray-100 pb-2 text-teal-600">
                  ★ South & Long Distances
                </h4>
                <ul className="space-y-2 text-md font-medium text-gray-600">
                  <li className="hover:text-teal-600 cursor-pointer">• Discount Flights to Miami</li>
                  <li className="hover:text-teal-600 cursor-pointer">• Discount Flights to Orlando</li>
                  <li className="hover:text-teal-600 cursor-pointer">• Discount Flights to Fort Lauderdale</li>
                  <li className="hover:text-teal-600 cursor-pointer">• Discount Flights from Miami to Chicago</li>
                  <li className="hover:text-teal-600 cursor-pointer">• Discount Flights to Honolulu Hawaii</li>
                  <li className="hover:text-teal-600 cursor-pointer">• Flights to Las Vegas (Any City)</li>
                </ul>
              </div>
            </div>
          </div>


          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-1">
              <span className="text-lg font-bold uppercase tracking-wider text-teal-600">Reservation Guide</span>
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight">How to Reserve Domestic Flight Tickets Online</h3>
              <p className="text-lg text-gray-500">A Comprehensive Tutorial for Cheap Airline Travel Inside The USA</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { step: "Step 1", title: "Choose Flight Type", desc: "Go for one-way, round trip, or multi-city booking. Often, round-trip domestic flights discounts turn out to be the cheapest choice." },
                { step: "Step 2", title: "Specify Your Destination", desc: "Type in your departure and arrival point. Our intelligent search system will suggest airports and alternatives that might save you some extra money." },
                { step: "Step 3", title: "Select Dates of Travel", desc: "Use the handy calendar tool to see prices for an entire month. Discovering the cheapest travel days in domestic flights of the USA could cut down your flight cost by 40%." },
                { step: "Step 4", title: "Sort and Filter Options", desc: "Review options ordered by cost/stopovers. Filter by direct routes, departure time, or system preferences like Spirit, Southwest, American, United, Delta, and Frontier." },
                { step: "Step 5", title: "Reserve Your Seats and Upgrades", desc: "Reserve your seats, buy additional luggage allocations, or go premium easily all together at just one checkout landing page." },
                { step: "Step 6", title: "Confirm Booking", desc: "Pay using our secure online gateway for immediate email confirmation. Manage your booking data anytime on your custom AirlinesTicketBooking account page." }
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 space-y-2 hover:bg-white hover:border-gray-200 transition-all duration-200 shadow-sm">
                  <span className="text-[10px] font-black uppercase bg-teal-50 text-teal-700 px-2 py-0.5 rounded">
                    {item.step}
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 pt-1">{item.title}</h4>
                  <p className="text-md text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>


          <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div>
              <span className="text-xl font-bold uppercase tracking-wider text-teal-600">Unified Air Carrier Systems</span>
              <h3 className="text-xl font-bold text-gray-900 tracking-tight">All Big U.S. Domestic Airlines at Once</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: "Discounts Southwest Airlines", desc: "Two free checked bags and no change fees applied on domestic tickets." },
                { label: "Low-cost Frontier USA", desc: "Ultra-low base fares; best if you don’t have much baggage to check down." },
                { label: "Budget Spirit Airlines flights", desc: "Barebones discount airline; exceptional choice if you prefer to travel light." },
                { label: "Cheap American Airlines flights USA", desc: "Offers extensive domestic route coverage and daily service layers on many flights." },
                { label: "Delta Airlines cheap domestic tickets", desc: "Offers reliable structural service and lots of opportunities for saving via sales." },
                { label: "Discounted United Airlines flights", desc: "Offers comprehensive coast-to-coast coverage with discounts on major cities' flights." }
              ].map((airline, idx) => (
                <div key={idx} className="p-4 bg-gray-50 border border-gray-100 rounded-xl space-y-1">
                  <h4 className="text-lg font-bold text-gray-900 text-teal-700">{airline.label}</h4>
                  <p className="text-md text-gray-600 leading-relaxed">{airline.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl border border-gray-200 p-6 sm:p-8 space-y-4">
            <h3 className="text-xl font-bold text-gray-900 tracking-tight">
              International Flight Booking USA – Airlines Ticket Booking
            </h3>
            <p className="text-md text-gray-600 leading-relaxed">
              Besides the premium domestic networks, AirlinesTicketBooking provides you with structured systems to travel outside the USA smoothly:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-medium text-gray-700">
              <div className="p-3 bg-white border border-gray-100 rounded-lg">
                <span className="font-bold text-lg text-gray-900 block mb-1">■ USA to Europe</span>
                Low-cost tickets to London, Paris, Amsterdam, Rome, Frankfurt & more.
              </div>
              <div className="p-3 bg-white border border-gray-100 rounded-lg">
                <span className="font-bold text-lg text-gray-900 block mb-1">■ USA to Canada</span>
                Affordable flights directly to Toronto, Vancouver, Calgary, Montreal.
              </div>
              <div className="p-3 bg-white border border-gray-100 rounded-lg">
                <span className="font-bold text-lg text-gray-900 block mb-1">■ Mexico & Caribbean</span>
                Quick access to Cancun, Punta Cana, Jamaica from major US locations.
              </div>
              <div className="p-3 bg-white border border-gray-100 rounded-lg">
                <span className="font-bold text-lg text-gray-900 block mb-1">■ Asia & Rest of World</span>
                Cheap airlines ticket booking across Asian, Australian, Middle Eastern regions.
              </div>
            </div>
            <p className="text-md text-gray-500 italic pt-2">
              * Contact our custom AirlinesTicketBooking Customer Service for international flights, group bookings & multi city flight configurations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 pt-4 border-t border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 tracking-tight text-center mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4 text-md sm:text-md">
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h4 className="font-bold text-gray-900">How early should I book domestic flights in the USA?</h4>
                <p className="text-gray-600 mt-1 leading-relaxed">The right time to book domestic flights in the USA will be 3 to 8 weeks prior to your planned date of departure. For peak season travel timelines, consider planning at least 2 to 3 months in advance.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h4 className="font-bold text-gray-900">Which day is the cheapest to fly domestically in the USA?</h4>
                <p className="text-gray-600 mt-1 leading-relaxed">Tuesdays and Wednesdays tend to be the cheapest days for flying within USA while Saturday flights could prove to be quite economical too.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h4 className="font-bold text-gray-900">Is same day domestic flight booking possible?</h4>
                <p className="text-gray-600 mt-1 leading-relaxed">Yes, same day domestic flights are listed by our system in real time for immediate bookings by last minute travelers.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* ORIGINAL DESTINATION GRIDS COMPONENT CONTENT */}
      {/* ========================================================================= */}
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
              Book Cheap Flights Online From USA Last Minute Flight Deals
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
            key={activeRegion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {allDestinations[activeRegion].map((city, index) => (
              <motion.a
                key={index}
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

        <section className="from-blue-50 via-white to-indigo-50  px-4 sm:px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-14">
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