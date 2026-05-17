import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mountain, Users, Plane, Star, Filter } from "lucide-react";

import { Helmet } from "react-helmet";

const packagesData = [
  {
    id: 1,
    name: "Luxury European Capitals Tour",
    price: 2999,
    category: "Luxury",
    duration: 10,
    img: "https://www.luxurygold.com/media/epsotnsb/czech-republic-luxury-tours-travel-guide.jpeg?center=0.4923572164072419%2C0.500010000200004&format=webp&mode=crop&width=900&height=600&quality=80",
    rating: 5.0,
    popular: true,
  },
  {
    id: 2,
    name: "Budget-Friendly Asia Explorer",
    price: 999,
    category: "Budget",
    duration: 7,
    img: "https://www.hindustantimes.com/ht-img/img/2025/07/03/550x309/Screenshot_2025-07-03_150459_1751535319094_1751535330793.png",
    rating: 4.2,
    popular: false,
  },
  {
    id: 3,
    name: "North American Family Getaway",
    price: 1850,
    category: "Family",
    duration: 5,
    img: "https://www.travelandleisure.com/thmb/2P5V1BlrWY0AF1ZGggtcV7XlMbc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-four-seasons-resort-orlando-at-walt-disney-world-resort-USFAMRESORTS0324-dfd4be173ce9417fa7d8869c13550bca.jpg",
    rating: 4.8,
    popular: true,
  },
  {
    id: 4,
    name: "Solo South America Adventure",
    price: 1499,
    category: "Solo",
    duration: 8,
    img: "https://thegreenvoyage.com/wp-content/uploads/2024/01/shutterstock_1585486450-1.jpg",
    rating: 4.5,
    popular: false,
  },
  {
    id: 5,
    name: "Canadian Rockies Hiking Trip",
    price: 2200,
    category: "Adventure",
    duration: 6,
    img: "https://canadianrockieshiking.com/wp-content/uploads/2015/09/Specialty-Program-Scrambling-2-Homepage-Slider-Size.jpg",
    rating: 4.9,
    popular: true,
  },
];

const categories = ["All", "Luxury", "Budget", "Family", "Adventure", "Solo"];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function TourPackagesPage() {
  const [filter, setFilter] = useState("All");

  const filteredPackages = packagesData.filter((pkg) =>
    filter === "All" ? true : pkg.category === filter,
  );

  const getIcon = (category) => {
    switch (category) {
      case "Luxury":
        return <Star className="w-5 h-5" />;
      case "Budget":
        return <Plane className="w-5 h-5" />;
      case "Family":
        return <Users className="w-5 h-5" />;
      case "Adventure":
        return <Mountain className="w-5 h-5" />;
      default:
        return <Plane className="w-5 h-5" />;
    }
  };

 

  return (
    <>
      <Helmet>
        <title>Affordable Tour Packages from USA | Holiday Deals</title>

        <meta
          name="description"
          content="Discover affordable holiday and tour packages from the USA with Airlines Ticket Booking. Explore flights, hotels, car rentals, and tours at affordable prices."
        />

      <link rel="canonical" href="https://www.airlinesticketbooking.com/tour-packages" />

        <script type="application/ld+json">
          {`{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.airlinesticketbooking.com/tour-packages#service",
      "name": "Tour Packages from USA",
      "description": "Explore affordable domestic and international tour packages, custom vacation deals, family holiday trips, and exclusive itinerary planning from a trusted USA travel agency.",
      "serviceType": [
        "International Tour Packages",
        "Domestic Tour Packages",
        "Custom Vacation Packages",
        "Family Holiday Packages",
        "Group & Solo Travel Packages"
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
        "serviceUrl": "https://www.airlinesticketbooking.com/tour-packages",
        "availableLanguage": ["English"]
      }
    },

    {
      "@type": "WebPage",
      "@id": "https://www.airlinesticketbooking.com/tour-packages#webpage",
      "url": "https://www.airlinesticketbooking.com/tour-packages",
      "name": "Tour Packages from USA | Affordable Vacation Deals",
      "description": "Discover affordable domestic and international tour packages, customizable vacation deals, and expert travel planning from a trusted USA travel agency. Compare popular itineraries and book your next adventure.",
      "isPartOf": {
        "@id": "https://www.airlinesticketbooking.com/#website"
      },
      "about": {
        "@id": "https://www.airlinesticketbooking.com/#organization"
      },
      "mainEntity": {
        "@id": "https://www.airlinesticketbooking.com/tour-packages#service"
      },
      "breadcrumb": {
        "@id": "https://www.airlinesticketbooking.com/tour-packages#breadcrumb"
      },
      "inLanguage": "en-US"
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.airlinesticketbooking.com/tour-packages#breadcrumb",
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
          "name": "Tour Packages",
          "item": "https://www.airlinesticketbooking.com/tour-packages"
        }
      ]
    }

  ]
}
  `}
        </script>
      </Helmet>
      <div className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto px-6 lg:px-12 py-10 text-center"
          >
            {/* Heading */}
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-8">
             Affordable Holiday & Tour Packages from USA
            </h1>

            {/* Sub Content Wrapper */}
            <div className="space-y-6 text-gray-600 text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              <p>
                Looking to book your next holiday? Explore our wide range of
                travel packages designed for families, couples, solo travelers,
                groups, and adventure seekers. Our bundled deals combine
                airfare, accommodation, car rentals, excursions, and optional
                travel insurance — all at competitive prices.
              </p>

              <p>
                Whether you are planning a luxury getaway in Europe, an
                adventure in Asia, a relaxing beach vacation, or a family road
                trip across Canada and the USA, our experienced travel
                consultants guide you at every step to create a memorable and
                affordable journey.
              </p>

              <p>
                As a USA-based travel agency, we understand modern travel needs.
                That’s why we provide flexible booking options, transparent
                pricing, and personalized support from start to finish.
              </p>

              <p>
                Discover exclusive deals and customizable tour packages tailored
                to your preferences and budget. Start planning today and travel
                with confidence and peace of mind.
              </p>
            </div>

            {/* Optional CTA */}
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-block bg-teal-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-teal-700 transition shadow-md"
              >
                Explore Packages
              </a>
            </div>
          </motion.div>

          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 p-4 bg-gray-100 rounded-xl mb-12 shadow-inner"
          >
            <Filter className="w-6 h-6 text-gray-500 hidden sm:block mt-2" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2
                                ${
                                  filter === cat
                                    ? "bg-teal-600 text-white shadow-md"
                                    : "bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-700"
                                }`}
              >
                {getIcon(cat)}
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Packages Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPackages.map((pkg, index) => (
              <motion.a
                key={pkg.id}
                href={`/packages/${pkg.id}`} // Link to a detail page
                variants={cardVariants}
                initial="hidden"
                animate="show"
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                }}
                className="bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-100 block"
              >
                <div className="relative h-60">
                  <img
                    src={pkg.img}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                  {pkg.popular && (
                    <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      POPULAR
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="flex items-center text-yellow-500 mb-3">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="text-gray-600 text-sm font-medium">
                      {pkg.rating} Rating ({pkg.duration} Days)
                    </span>
                  </div>
                  <div className="flex justify-between items-end">
                    <p className="text-sm text-gray-500">Starting From</p>
                    <p className="text-3xl font-extrabold text-teal-600">
                      ${pkg.price}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}

            {filteredPackages.length === 0 && (
              <div className="lg:col-span-3 text-center p-10 text-gray-600 bg-gray-50 rounded-lg">
                No packages found for the selected category.
              </div>
            )}
          </div>

          <section className="bg-gray-50 py-14 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Section Heading */}
              <div className="text-center mb-10">
                <h2 className="text-xl md:text-xl font-semibold text-gray-900">
                  Why Choose Our Tour Packages?
                </h2>
                <p className="mt-3 text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Airlines Ticket Booking offers affordable and thoughtfully
                  designed tour packages focused on comfort, value, and
                  unforgettable travel experiences. Whether you're planning a
                  family vacation, romantic getaway, or adventure trip — we
                  handle every detail with professionalism.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Transparent & Affordable Pricing
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    No hidden fees. No surprise charges. Just honest pricing
                    designed to fit every budget.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Fully Customizable Packages
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Domestic or international — customize flights, hotels,
                    tours, and activities based on your preferences.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Easy & Secure Booking
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Simple booking process with secure payments and complete
                    peace of mind.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Expert Travel Assistance
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Experienced travel consultants help you plan the perfect
                    itinerary from start to finish.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Flexible Travel Options
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Perfect solutions for individuals, couples, families, and
                    group travelers.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    24/7 Customer Support
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Dedicated assistance available before and during your trip
                    whenever you need it.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
                Customized Tour Packages Tailored to You
              </h2>

              <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
                Looking for an experience that is uniquely yours? We’re able to
                help you design custom tour packages that work for you—your
                schedule, your budget, and your personal preferences.
              </p>

              <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
                All of our travel specialists create itineraries that meet or
                exceed your expectations, whether it’s a romantic getaway, group
                travel, or corporate travel; we will make sure your trip is
                smooth and memorable from beginning to end.
              </p>
            </div>
          </section>

          <section className="bg-gray-50 py-14 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
                Plan Your Dream Vacation Today
              </h2>

              <p className="mt-5 text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                Looking to see where your next trip can take you? To book the
                best holiday, find out about different domestic and
                international vacation packages and learn more about your
                budget-friendly travel options by contacting one of King's
                experienced consultants.
              </p>

              <p className="mt-4 text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                You can contact us by either calling or filling out the inquiry
                form directly to get started planning your next vacation.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
