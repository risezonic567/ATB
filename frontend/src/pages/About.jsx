import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Globe, Clock } from "lucide-react";
import { Plane, Hotel, ShieldCheck, Car } from "lucide-react";
import { CheckCircle } from "lucide-react";
import SEO from "../components/SEO";
import { Helmet } from "react-helmet";



const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutPage() {
  // Reusing the feature icons for consistency
  const coreValues = [
    {
      icon: <Globe className="w-8 h-8 text-teal-600" />,
      title: "Global Reach",
      desc: "Connecting you to over 500+ worldwide destinations with ease.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Unbeatable Value",
      desc: "We guarantee the lowest fares without compromising on service or quality.",
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-600" />,
      title: "24/7 Support",
      desc: "Our dedicated travel experts are always available for hassle-free assistance.",
    },
  ];

  return (
    <>
     
      <Helmet>
        <title>About Airlines Ticket Booking USA - Trusted Travel Service</title>
        <meta name="description" content=" about Airline Ticket Booking USA  offering cheap international flights, airline tickets, USA to India flights, domestic airfare deals, and vacation packages." />
       <link rel="canonical" href="https://www.airlinesticketbooking.com/about" />

     <script type="application/ld+json">
{`{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "AboutPage",
      "@id": "https://www.airlinesticketbooking.com/about#aboutpage",
      "url": "https://www.airlinesticketbooking.com/about",
      "name": "About Airline Ticket Booking USA - Trusted Travel Service",
      "description": "About Airline Ticket Booking USA offering cheap international flights, airline tickets, USA to India flights, domestic airfare deals and vacation packages.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.airlinesticketbooking.com/#website"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.airlinesticketbooking.com/wp-content/uploads/2026/05/airlines-ticket-booking-logo.png"
      },
      "breadcrumb": {
        "@id": "https://www.airlinesticketbooking.com/about#breadcrumb"
      }
    },

    {
      "@type": "Organization",
      "@id": "https://www.airlinesticketbooking.com/#organization",
      "name": "Airline Ticket Booking",
      "alternateName": "Airlines Ticket Booking",
      "url": "https://www.airlinesticketbooking.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.airlinesticketbooking.com/wp-content/uploads/2026/05/airlines-ticket-booking-logo.png",
        "width": 1280,
        "height": 720
      },
      "image": "https://www.airlinesticketbooking.com/wp-content/uploads/2026/05/airlines-ticket-booking-logo.png",
      "description": "Airline Ticket Booking USA provides cheap international flights, domestic airfare deals, airline tickets, USA to India flights and affordable vacation packages worldwide.",
      "telephone": "+1-866-307-5957",
      "email": [
        "Support@airlinesticketbooking.com",
        "airlinesticketbooking4@gmail.com"
      ],
      "sameAs": [
        "https://www.facebook.com/airlinesticketbooking1/",
        "https://www.instagram.com/airlinesticketbooking/",
        "https://www.linkedin.com/company/airlines-ticket-booking1/",
        "https://www.pinterest.com/airlinesticketbooking/",
        "https://www.youtube.com/@airlinesticketbooking1"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "17662 Irvine Blvd, Suite 9",
        "addressLocality": "Tustin",
        "addressRegion": "CA",
        "postalCode": "92780",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-866-307-5957",
        "contactType": "customer support",
        "areaServed": "US",
        "availableLanguage": [
          "English"
        ]
      }
    },

    {
      "@type": "WebPage",
      "@id": "https://www.airlinesticketbooking.com/about#webpage",
      "url": "https://www.airlinesticketbooking.com/about",
      "name": "About Airline Ticket Booking USA - Trusted Travel Service",
      "description": "About Airline Ticket Booking USA offering cheap international flights, airline tickets, USA to India flights, domestic airfare deals and vacation packages.",
      "inLanguage": "en-US"
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.airlinesticketbooking.com/about#breadcrumb",
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
          "name": "About",
          "item": "https://www.airlinesticketbooking.com/about"
        }
      ]
    }

  ]
}`}
</script>
      </Helmet>     

      <motion.div initial="hidden" animate="show" variants={containerVariants}>
        {/* 1. Hero Section: Company Identity */}
        <div
          className="pt-72 pb-24 bg-cover bg-center text-white "
          style={{
            backgroundImage:
              "url(https://i.postimg.cc/HkRLv3XR/about-banner.png)",
          }}
        >
          <div className="container mx-auto px-6 text-center rounded-xl">
            <motion.h1
              variants={itemVariants}
              className="text-5xl font-extrabold mb-4"
            >
              About Airline Ticket Booking USA & Travel Services
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl max-w-3xl mx-auto"
            >
              At Airlines Ticket Booking, we are dedicated to making your dream
              vacation an affordable reality.
            </motion.p>
          </div>
        </div>

        {/* 2. Our Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The Airlines Ticket Booking Story
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Born from a passion for travel and a commitment to
                affordability, we strive to remove the financial barriers to
                exploring the world.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div
                variants={itemVariants}
                className="text-lg text-gray-700 space-y-6 leading-relaxed"
              >
                <p>
                  Since our founding, Airlines Ticket Booking has grown to
                  become a trusted source for discounted international and
                  domestic flights. We partner directly with major airlines,
                  allowing us to secure exclusive deals that traditional booking
                  sites often overlook. Our focus is simple: **deliver the best
                  value, reliably and securely.**
                </p>
                <p>
                  Our team of seasoned travel professionals works tirelessly to
                  ensure every interaction, from the first search to landing at
                  your destination, is seamless. We believe that booking a
                  flight should be as exciting as the trip itself.
                </p>
                <p className="font-semibold text-teal-700">
                  Travel more, pay less. That's the Airlines Ticket Booking
                  promise.
                </p>
              </motion.div>
              <motion.img
                variants={itemVariants}
                src="https://www.cleartrip.com/collections/wp-content/uploads/2019/06/flight-booking-5.jpg"
                alt="A group of people collaborating on a travel plan"
                className="rounded-2xl shadow-2xl object-cover w-full h-80"
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            {/* Section Heading */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Our Mission & Vision
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                We are committed to making travel simple, affordable, and
                reliable for everyone.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission Card */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The goal of our company is to provide affordable and
                  convenient ways to travel for all people. We offer competitive
                  airfare pricing with complete transparency. Our secure and
                  efficient booking process ensures a smooth experience. We also
                  provide personalized assistance both in the U.S. and
                  internationally to support your travel needs. Our mission is
                  to deliver a dependable and enjoyable journey.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We strive to become a trusted travel agency across the United
                  States and worldwide. By delivering superior service and
                  intelligent booking solutions, we aim to simplify travel for
                  our customers. Our goal is to build long-term relationships
                  based on trust while continuously growing and maintaining
                  affordable, reliable travel options.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Core Values Section */}
        {/* <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-teal-500 transform hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

        <section className="relative py-20 px-4 sm:px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900">
                Why Choose Airlines Ticket Booking?
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
                Experience seamless travel planning with competitive pricing and
                trusted support.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Great airline ticket prices, both local and international",
                "Personalized travel assistance",
                "Safe and secure booking process",
                "24/7 dedicated customer support",
                "Complete travel solutions — flights, hotels, visa, insurance & car rental",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/70 backdrop-blur-md p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="">
                      <CheckCircle className="w-7 h-7 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900">
                Complete Travel Services Under One Roof
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
                Everything you need for a smooth and stress-free journey.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Flight Booking */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
                <Plane className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Flight Booking</h3>
                <p className="text-gray-600 leading-relaxed">
                  The best prices for domestic and international airline
                  tickets.
                </p>
              </div>

              {/* Hotel Booking */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
                <Hotel className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Hotel Booking</h3>
                <p className="text-gray-600 leading-relaxed">
                  Stay comfortably anywhere in the world at affordable prices.
                </p>
              </div>

              {/* Visa Assistance */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
                <Globe className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Visa Assistance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional guidance and help applying for travel visas.
                </p>
              </div>

              {/* Travel Insurance */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
                <ShieldCheck className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Travel Insurance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Protection against unexpected situations during your trip.
                </p>
              </div>

              {/* Car Rental */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
                <Car className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Car Rental Services
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Convenient and budget-friendly rental options for your
                  journey.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5 px-4 sm:px-6 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full backdrop-blur-md">
                <ShieldCheck className="w-10 h-10" />
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-bold mb-6">Our Commitment to You</h2>

            {/* Description */}
            <p className="text-lg leading-relaxed">
              We are committed to delivering high-quality customer service while
              maintaining complete transparency and affordability. Every booking
              is handled with care to ensure your travel experience remains
              smooth and hassle-free — from departure to your safe return home.
            </p>
          </div>
        </section>

        <section className="relative py-20 px-4 sm:px-6 lg:px-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Start Planning Your Journey Today
            </h2>

            {/* Description */}
            <p className="text-lg sm:text-xl  max-w-3xl mx-auto leading-relaxed">
              Ready to book your next trip? Contact our travel specialists now
              and let us help you find the best available rates and seamless
              travel arrangements tailored to your needs.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
              {/* <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
        Contact Us
      </button> */}

              {/* <button className="border border-white text-blue-500 font-semibold px-8 py-3 rounded-full shadow transition duration-300">
        Get a Quote
      </button> */}
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
