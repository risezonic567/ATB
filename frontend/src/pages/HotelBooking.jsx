import React, { useState } from "react";
import { ShieldCheck, Wallet, Headphones, Clock } from "lucide-react";
import {
  Wifi,Utensils,Dumbbell,Car,Waves,Coffee,Tv, ChevronDown
} from "lucide-react";
import { Helmet } from "react-helmet";

export default function HotelBooking() {
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [open, setOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const destinations = [
  {
    city: "Dubai",
    country: "UAE",
    image:
      "/photos/Dubai.jpg.jpeg",
  },
  {
    city: "Paris",
    country: "France",
    image:
      "/photos/Paris.jpg.jpeg",
  },
  {
    city: "Bali",
    country: "Indonesia",
    image:
      "/photos/Bali.jpg.jpeg",
  },
  {
    city: "New York",
    country: "USA",
    image:
      "/photos/london.jpg.jpeg",
  },
  {
    city: "Maldives",
    country: "Maldives",
    image:
      "/photos/maldives.jpg.jpeg",
  },
  {
    city: "London",
    country: "UK",
    image:
      "/photos/london.jpg.jpeg",
  },
];

const amenities = [
  {
    icon: <Wifi size={36} className="text-blue-600" />,
    title: "Free High-Speed WiFi",
    desc: "Stay connected with complimentary internet access.",
  },
  {
    icon: <Utensils size={36} className="text-orange-600" />,
    title: "Restaurant & Dining",
    desc: "Enjoy world-class cuisine from top chefs.",
  },
  {
    icon: <Dumbbell size={36} className="text-green-600" />,
    title: "Fitness Center",
    desc: "Fully equipped gym for your daily workouts.",
  },
  {
    icon: <Car size={36} className="text-purple-600" />,
    title: "Free Parking",
    desc: "Convenient and secure parking space available.",
  },
  {
    icon: <Waves size={36} className="text-cyan-600" />,
    title: "Swimming Pool",
    desc: "Relax and unwind in our luxury pool.",
  },
  {
    icon: <Coffee size={36} className="text-yellow-600" />,
    title: "Complimentary Breakfast",
    desc: "Start your day with delicious meals.",
  },
  {
    icon: <ShieldCheck size={36} className="text-red-600" />,
    title: "24/7 Security",
    desc: "Round-the-clock safety and surveillance.",
  },
  {
    icon: <Tv size={36} className="text-indigo-600" />,
    title: "Smart TV",
    desc: "Enjoy entertainment with premium channels.",
  },
];

const deals = [
  {
    title: "Flat 30% Off on Luxury Hotels",
    desc: "Valid for international bookings only",
    price: "From $41.1/night",
    image:
      "/photos/luxary-vila-1.jfif",
    badge: "30% OFF",
  },
  {
    title: "Weekend Special Deals",
    desc: "Save big on short trips",
    price: "From $37.5/night",
    image:
      "/photos/luxy-hotel-1.jfif",
    badge: "HOT DEAL",
  },
  {
    title: "Honeymoon Packages",
    desc: "Romantic stays with premium benefits",
    price: "From $110.2/night",
    image:
      "/photos/luxaru-hotel-2.jfif",
    badge: "LIMITED",
  },
];

  const features = [
  {
    icon: <ShieldCheck size={40} className="text-blue-600" />,
    title: "Secure & Safe Payments",
    desc: "All transactions are protected with industry-grade encryption and secure gateways.",
  },
  {
    icon: <Wallet size={40} className="text-green-600" />,
    title: "Best Price Guarantee",
    desc: "We compare prices across multiple platforms to give you the lowest fares possible.",
  },
  {
    icon: <Headphones size={40} className="text-purple-600" />,
    title: "24/7 Customer Support",
    desc: "Our travel experts are available round the clock to assist you anytime.",
  },
  {
    icon: <Clock size={40} className="text-orange-600" />,
    title: "Fast & Easy Booking",
    desc: "Book your flights and hotels in just a few clicks with our smooth interface.",
  },
];

  return (
    <>
    <section className="relative w-full h-screen flex items-center justify-center py-10">
      <Helmet>
        <title>Book Cheap Hotels Online Affordable Luxury Hotel Deals</title>
        <meta name="description" content="Book cheap hotels, luxury hotel rooms, airport stays, and last minute hotel deals online for domestic and international travel at affordable prices." />
        <link rel="canonical" href="https://www.airlinesticketbooking.com/hotel-booking-services" />

        <script type="application/ld+json">
{`{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "Service",
      "@id": "https://www.airlinesticketbooking.com/hotel-booking-services#service",
      "serviceType": "Hotel Booking Services",
      "name": "Book Cheap Hotels Online Affordable Luxury Hotel Deals",
      "provider": {
        "@type": "TravelAgency",
        "name": "Airline Ticket Booking",
        "url": "https://www.airlinesticketbooking.com/"
      },
      "url": "https://www.airlinesticketbooking.com/hotel-booking-services",
      "image": "https://www.airlinesticketbooking.com/wp-content/uploads/2026/05/airlines-ticket-booking-logo.png",
      "description": "Book cheap hotels, luxury hotel rooms, airport stays and last minute hotel deals online for domestic and international travel at affordable prices.",
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "telephone": "+1-866-307-5957",
      "availableLanguage": "English"
    },

    {
      "@type": "WebPage",
      "@id": "https://www.airlinesticketbooking.com/hotel-booking-services#webpage",
      "url": "https://www.airlinesticketbooking.com/hotel-booking-services",
      "name": "Book Cheap Hotels Online Affordable Luxury Hotel Deals",
      "description": "Book cheap hotels, luxury hotel rooms, airport stays and last minute hotel deals online for domestic and international travel at affordable prices.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.airlinesticketbooking.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.airlinesticketbooking.com/hotel-booking-services#breadcrumb"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.airlinesticketbooking.com/wp-content/uploads/2026/05/airlines-ticket-booking-logo.png"
      }
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.airlinesticketbooking.com/hotel-booking-services#breadcrumb",
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
          "name": "Hotel Booking Services",
          "item": "https://www.airlinesticketbooking.com/hotel-booking-services"
        }
      ]
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.airlinesticketbooking.com/hotel-booking-services#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How can I book cheap hotels online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can compare affordable hotel prices, luxury hotel rooms and last minute hotel deals online for domestic and international travel."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer airport hotel booking services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, airport hotel stays and affordable hotel booking services are available for travelers worldwide."
          }
        },
        {
          "@type": "Question",
          "name": "Can I find luxury hotel deals online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, travelers can book luxury hotel rooms, budget hotels and discounted hotel deals online at affordable prices."
          }
        },
        {
          "@type": "Question",
          "name": "Is it possible to book a hotel and flights in combination?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, AirlinesTicketBooking helps its clients make reservations for flights plus hotels. Booking in combination is always cheaper than doing it separately."
          }
        },
        {
          "@type": "Question",
          "name": "Do Hotels listed by AirlinesTicketBooking guarantee the rate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Certainly, AirlinesTicketBooking guarantees that the rate you get from us is the best one out there. Should you discover a lower rate within 24 hours after your booking, let AirlinesTicketBooking customer support know and they will ensure you get the better deal."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if I have to cancel my reservation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In many cases, the reservation made at AirlinesTicketBooking comes with a no-cancelation fee. Check the terms before making your booking."
          }
        }
      ]
    }

  ]
}`}
</script>
      </Helmet>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/photos/Hotel-booking.jpg.jpeg)",
        }}
       />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Glass Card */}
      <div className="relative z-10 max-w-6xl w-full mx-4">
        <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl shadow-2xl p-6 md:p-10">
          
          {/* Heading */}
          <div className="text-center text-white mb-10">
            <h1 className="text-3xl md:text-5xl font-bold">
             Book Cheap Hotels Online Find Affordable Luxury Hotel Deals
            </h1>
            <p className="mt-3 text-white/80">
              Premium stays · Best prices · Trusted by 10M+ travellers
            </p>
          </div>

          {/* Search Form */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 text-gray-800 ">
            
            {/* City */}
            <div className="md:col-span-2">
              <label className="text-sm text-white">Destination</label>
              <input
                type="text"
                placeholder="City or Hotel"
                className="w-full mt-1 p-3 rounded-xl bg-white/80 outline-none"
              />
            </div>

            {/* Check-in */}
            <div>
              <label className="text-sm text-white">Check-in</label>
              <input
                type="date"
                className="w-full mt-1 p-3 rounded-xl bg-white/80 outline-none"
              />
            </div>

            {/* Check-out */}
            <div>
              <label className="text-sm text-white">Check-out</label>
              <input
                type="date"
                className="w-full mt-1 p-3 rounded-xl bg-white/80 outline-none"
              />
            </div>

            {/* Rooms & Guests Dropdown */}
            <div className="relative">
              <label className="text-sm text-white">Rooms & Guests</label>
              <div
                onClick={() => setOpen(!open)}
                className="w-full mt-1 p-3 rounded-xl bg-white/80 cursor-pointer"
              >
                {rooms} Room · {adults} Adults · {children} Children
              </div>

              {open && (
                <div className="absolute mt-2 w-full bg-white rounded-xl shadow-xl p-4 space-y-3 z-20">
                  {[
                    ["Rooms", rooms, setRooms, 1],
                    ["Adults", adults, setAdults, 1],
                    ["Children", children, setChildren, 0],
                  ].map(([label, value, setter, min], i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span>{label}</span>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setter(Math.max(min, value - 1))}
                          className="w-7 h-7 bg-gray-200 rounded-full"
                        >
                          -
                        </button>
                        <span>{value}</span>
                        <button
                          onClick={() => setter(value + 1)}
                          className="w-7 h-7 bg-gray-200 rounded-full"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Budget */}
            <div>
              <label className="text-sm text-white">Budget</label>
              <select className="w-full mt-1 p-3 rounded-xl bg-white/80 outline-none">
                <option>Any</option>
                <option>₹2,000</option>
                <option>₹5,000</option>
                <option>₹10,000</option>
                <option>₹20,000+</option>
              </select>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <button className="bg-linear-to-r from-[#009689] to-[#009689] hover:scale-105 transition text-white px-12 py-4 rounded-2xl text-lg font-semibold shadow-xl">
              Search Hotels
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* CONTENT SECTION */}
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Best Hotels USA | Save With Affordable Accommodations</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            You've booked your flights – it’s time to get affordable accommodations. <strong>Book your perfect hotels with AirlinesTicketBooking</strong> that provides you a large number of rooms around the world. Whether you require budget hotel rooms, motels or luxurious resorts, we offer all of them with discounts and offers. You can save further by booking your hotel rooms alongside <strong>our cheapest USA flights.</strong>
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 mb-12 border border-gray-100">
          <h3 className="text-2xl font-bold mb-6 text-[#C30000]">Why Should You Book Hotel Rooms through AIRLINESTICKETBOOKING.COM?</h3>
          <h4 className="text-xl font-semibold mb-4 ">Incredible Options in One Place</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0 text-gray-600">
            <li className="flex items-start gap-2"><span className="text-blue-600 text-xl font-bold">•</span><div><strong>Incredible Hotel Selections</strong> – Choose between Marriott, Hilton, Hyatt, IHG, Wyndham, independent hotels, boutique hotels, vacation rentals, and many others.</div></li>
            <li className="flex items-start gap-2"><span className="text-blue-600 text-xl font-bold">•</span><div><strong>Cheapest Guarantee</strong> – Bookings with us guarantee that we offer the best prices on our website, or else we match them.</div></li>
            <li className="flex items-start gap-2"><span className="text-blue-600 text-xl font-bold">•</span><div><strong>Flight & Hotel Packages</strong> – Pair your <strong>cheap domestic flights</strong> with hotel bookings to save up to 30% in packages.</div></li>
            <li className="flex items-start gap-2"><span className="text-blue-600 text-xl font-bold">•</span><div><strong>Free Cancellation Policies</strong> – Thousands of hotel rooms with a flexible policy ensure you book with ease.</div></li>
            <li className="flex items-start gap-2"><span className="text-blue-600 text-xl font-bold">•</span><div><strong>Authentic Guest Reviews</strong> – Get insights based on real experiences of actual travelers through our reviews.</div></li>
            <li className="flex items-start gap-2"><span className="text-blue-600 text-xl font-bold">•</span><div><strong>Immediate Confirmations</strong> – Instant confirmation of your booking straight into your inbox.</div></li>
          </ul>
        </div>

        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-gray-900">Top US Hotel Destinations</h3>
            <p className="text-[#C30000] font-medium mt-1">Get the Cheapest Hotels Where America is Going</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Las Vegas, Nevada</h4>
              <p className="text-sm text-gray-600 leading-relaxed">The entertainment city that never sleeps is calling. Save money by making reservations at hotels both on the Strip and nearby. Great complement to our <strong>cheap flights to Las Vegas</strong> or <strong>cheap flights from Chicago to Las Vegas</strong> offers. Whether you prefer luxurious casino hotels or more affordable hotels right next to all the fun, there's something for every budget in Las Vegas.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Miami and Fort Lauderdale, Florida</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Great weather, great beaches, and great hotel savings. Book hotels along Miami Beach, in trendy Wynwood or the Upper East Side, or even family hotels near the airport. Combine your hotel booking with <strong>cheap flights NYC to Miami</strong> or <strong>cheap flights to Fort Lauderdale</strong>.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-2">New York City, New York</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Book your NYC hotel through AirlinesTicketBooking at the lowest prices anywhere. Great for visitors taking <strong>cheap flights to New York</strong> or <strong>cheap flights New York to Chicago</strong>.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Chicago, Illinois</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Choose a hotel in the Loop, the Magnificent Mile, or popular areas such as River North and Wicker Park. Combine with <strong>discount flights to Chicago</strong> for unbeatable savings.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Orlando, Florida</h4>
              <p className="text-sm text-gray-600 leading-relaxed">The theme park capital of the United States. Reserve hotels near Disney World, Universal Studios, and SeaWorld at bargain prices, leaving money left for the attractions. Ideal with <strong>flights from Dallas to Orlando</strong> or <strong>cheap flights to Orlando</strong> offers.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Denver, Colorado</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Base for the Rocky Mountains. Affordable hotels in Denver downtown or mountain lodges. Accompanied by <strong>cheap flights to Denver</strong> to explore the Rocky Mountains.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Nashville, Tennessee</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Hotel deals in Music City – from honky-tonk hotel rooms to boutique accommodations in the Gulch. Accompanied by <strong>cheap flights to Nashville</strong> for a country music trip.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Austin, Texas</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Affordable hotel accommodation in the weirdest city. Trendy hotels in Downtown Austin, the Domain, and South Congress. Accompanied by <strong>cheap flights to Austin Texas</strong> for an ideal Texas experience.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Honolulu, Hawaii</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Budget beach hotels, all-inclusive resorts, and economical studio apartments on Oahu island. Make your Hawaiian vacation possible combined with <strong>cheap flights to Honolulu Hawaii</strong>.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 md:col-span-2 lg:col-span-3">
              <h4 className="text-lg font-bold text-gray-900 mb-2">San Diego & Los Angeles, California</h4>
              <p className="text-sm text-gray-600 leading-relaxed">From beachside hotels in Pacific Beach to boutique properties in Hollywood, California offers endless options. Combine with <strong>cheap flights to Los Angeles</strong> or <strong>cheap flights to San Diego</strong> for ultimate West Coast value.</p>
            </div>
          </div>
        </div>

        <div className="bg-indigo-900 text-white rounded-3xl p-6 md:p-10 shadow-xl mb-12">
          <h3 className="text-2xl font-bold mb-2">FLIGHT & HOTEL PACKAGES – GET THE MOST SAVINGS!</h3>
          <p className="text-indigo-200 mb-6 font-medium">Combination Travel Offers via AirlinesTicketBooking Packages</p>
          <p className="mb-4 text-sm opacity-90">One of the best <strong>flight reservation tips for domestic flights in USA</strong> is that you combine your flights and hotel stay while booking through AirlinesTicketBooking:</p>
          <ul className="space-y-2 text-sm opacity-95 pl-4 list-disc">
            <li>Save up to 30% from separate bookings</li>
            <li>Get special discount rates only offered in packages</li>
            <li>Manage all travel arrangements in one single interface</li>
            <li>Single confirmation for the whole travel arrangement</li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl border border-gray-200 p-6 md:p-10 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">HOW TO BOOK YOUR HOTEL</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center"><div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">1</div><p className="text-sm font-semibold text-gray-800">Destination search</p><p className="text-xs text-gray-500 mt-1">Specify by location or hotel name</p></div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center"><div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">2</div><p className="text-sm font-semibold text-gray-800">Enter travel date</p><p className="text-xs text-gray-500 mt-1">Instant check of availability</p></div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center"><div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">3</div><p className="text-sm font-semibold text-gray-800">Select filter options</p><p className="text-xs text-gray-500 mt-1">Star ratings, price range, facilities like pool, gym, free breakfast etc.</p></div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center"><div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">4</div><p className="text-sm font-semibold text-gray-800">Check ratings</p><p className="text-xs text-gray-500 mt-1">Authentic guest ratings and reviews</p></div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center"><div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">5</div><p className="text-sm font-semibold text-gray-800">Make your payment</p><p className="text-xs text-gray-500 mt-1">Pay safely online for booking confirmation.</p></div>
          </div>
        </div>
      </div>
    </section>

  <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Book With Us?
          </h2>
          <p className="text-gray-600 mt-2">
            Trusted by thousands of travelers for seamless experiences
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl shadow hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h4 className="font-semibold text-lg mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Popular Destinations
          </h2>
          <p className="text-gray-600 mt-2">
            Explore the most loved travel destinations worldwide
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {destinations.map((item, index) => (
            <div
              key={index}
              className="group relative  border rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.city}
                className="w-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

              {/* Text */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">{item.city}</h3>
                <p className="text-sm opacity-90">{item.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

     <section className="py-5 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold  ">
              Deals & Offers
            </h2>
            <p className="text-gray-600 mt-2">
              Grab the best offers before they're gone
            </p>
          </div>
          <button className="mt-4 md:mt-0 text-blue-600 font-semibold hover:underline">
            View All Deals →
          </button>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                {deal.badge}
              </div>

              {/* Image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h4 className="font-semibold text-lg mb-1">
                  {deal.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {deal.desc}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold text-blue-600">
                    {deal.price}
                  </span>
                  <button className="bg-[#009689] text-white px-4 py-2 rounded-xl text-sm hover:bg-blue-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Premium Amenities
          </h2>
          <p className="text-gray-600 mt-2">
            Everything you need for a comfortable stay
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl shadow bg-gray-50 hover:bg-white hover:shadow-xl transition text-center"
            >
              <div className="flex justify-center mb-4 group-hover:scale-110 transition">
                {item.icon}
              </div>
              <h4 className="font-semibold mb-1">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>

    <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">
    
    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold">
        What Our Customers Say
      </h2>
      <p className="text-gray-600 mt-2">
        Real experiences from real travelers
      </p>
    </div>

    {/* Reviews Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Review Card */}
      {[
        {
          name: "Rahul Sharma",
          location: "Delhi, India",
          review:
            "Amazing experience! The hotel booking was smooth and I got the best price compared to other platforms.",
          rating: 5,
          image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
          name: "Priya Verma",
          location: "Mumbai, India",
          review:
            "Customer support is really helpful. They resolved my issue within minutes. Highly recommended!",
          rating: 5,
          image: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
          name: "Amit Singh",
          location: "Bangalore, India",
          review:
            "Loved the UI and easy booking process. The deals section saved me a lot of money.",
          rating: 4,
          image: "https://randomuser.me/api/portraits/men/76.jpg",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-2xl shadow "
        >
          {/* User */}
          <div className="flex items-center gap-4 mb-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold">{item.name}</h4>
              <p className="text-sm text-gray-500">{item.location}</p>
            </div>
          </div>

          {/* Stars */}
          <div className="flex mb-3">
            {[...Array(5)].map((_,i) => (
              <span
                key={i}
                className={`text-lg ${
                  i < item.rating ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>

          {/* Review */}
          <p className="text-gray-600 text-sm leading-relaxed">
            “{item.review}”
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

    {/* DYNAMIC FAQ ACCORDION SECTION */}
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">FAQs – HOTEL RESERVATION</h2>
          <p className="text-gray-500 mt-2">Frequently Asked Questions about our Hotel Booking Services</p>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "Is it possible to book a hotel and flights in combination?",
              a: "Yes, AirlinesTicketBooking helps its clients make reservations for flights plus hotels. Booking in combination is always cheaper than doing it separately."
            },
            {
              q: "Do Hotels listed by AirlinesTicketBooking guarantee the rate?",
              a: "Certainly, AirlinesTicketBooking guarantees that the rate you get from us is the best one out there. Should you discover a lower rate within 24 hours after your booking, let AirlinesTicketBooking customer support know and they will ensure you get the better deal."
            },
            {
              q: "What should I do if I have to cancel my reservation?",
              a: "In many cases, the reservation made at AirlinesTicketBooking comes with a no-cancelation fee. Check the terms before making your booking."
            },
            {
              q: "How can I book cheap hotels online?",
              a: "You can compare affordable hotel prices, luxury hotel rooms and last minute hotel deals online for domestic and international travel."
            },
            {
              q: "Do you offer airport hotel booking services?",
              a: "Yes, airport hotel stays and affordable hotel booking services are available for travelers worldwide."
            },
            {
              q: "Can I find luxury hotel deals online?",
              a: "Yes, travelers can book luxury hotel rooms, budget hotels and discounted hotel deals online at affordable prices."
            }
          ].map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden shadow-xs">
              <button
                className="w-full flex justify-between items-center p-5 text-left bg-gray-50 hover:bg-gray-100/70 transition font-semibold text-gray-800"
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              >
                <span>{faq.q}</span>
                <ChevronDown className={`transform transition-transform duration-300 text-gray-500 ${activeFaq === idx ? "rotate-180" : ""}`} size={20} />
              </button>
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeFaq === idx ? "max-h-40 border-t border-gray-200" : "max-h-0"}`}>
                <p className="p-5 text-sm text-gray-600 leading-relaxed bg-white">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    </>
  );
}