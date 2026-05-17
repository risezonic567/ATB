import React from "react";
import { PlaneTakeoff, RotateCcw, CreditCard, Undo2 } from "lucide-react";
import { motion } from "framer-motion";
import { Plane } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function WorldwideDestinations() {
  const destinations = [
    {
      name: "Barcelona ",
      img: "https://i.postimg.cc/X7VfPL02/Worldwide-Destinations-barcelona.jpg",
    },
    {
      name: "Berlin ",
      img: "https://i.postimg.cc/028Y4nqV/Worldwide-Destinations-berlin.jpg",
    },
    {
      name: "San Francisco",
      img: "https://i.postimg.cc/GhcFfK1N/Worldwide-Destinations-san-fransisco.jpg",
    },
    {
      name: "Venice",
      img: "https://i.postimg.cc/dtq2f6Km/Worldwide-Destinations-venice.jpg",
    },
    {
      name: "Washington",
      img: "https://i.postimg.cc/4NJ60PTq/Worldwide-Destinations-washington.jpg",
    },
    {
      name: "Los Angeles",
      img: "https://i.postimg.cc/KYkvQ1cC/Worldwide-Destinations-los-angeles.jpg",
    },
  ];
  // https://postimg.cc/gallery/fRNFXmD
  const benefits = [
    {
      icon: <CreditCard className="w-5 h-5 text-teal-600" />,
      text: "Easy Bookings",
    },
    {
      icon: <RotateCcw className="w-5 h-5 text-teal-600" />,
      text: "Cheapest Airfare",
    },
    {
      icon: <PlaneTakeoff className="w-5 h-5 text-teal-600" />,
      text: "Flexible Changes",
    },
    {
      icon: <Undo2 className="w-5 h-5 text-teal-600" />,
      text: "Fast Cancellations",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* ✨ Parallax Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-teal-400/10 to-indigo-700/10"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        style={{ backgroundSize: "200% 200%" }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* 🛩 Floating Airplane Icons */}
      <motion.div
        className="absolute left-10 top-20 opacity-25"
        animate={{ y: [0, -20, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Plane size={60} />
      </motion.div>

      <motion.div
        className="absolute right-12 bottom-24 opacity-20"
        animate={{ y: [0, 20, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Plane size={45} />
      </motion.div>

      {/* 🌍 WORLDWIDE DESTINATIONS */}
      <div className="py-20 text-center relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Top Flight Routes from the USA to Europe & Canada
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Discover the most popular air routes at unbeatable prices. Fly from
          major U.S. cities to top European and Canadian destinations without
          overspending.
        </motion.p>

        {/* Destination Bubbles */}
        <div className="flex flex-wrap justify-center gap-8 mb-10 px-6">
          {destinations.map((city, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <motion.div
                className="w-28 h-28 rounded-full overflow-hidden shadow-md border-4 border-white mx-auto mb-3"
                whileHover={{ scale: 1.08, rotate: 2 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img
                  src={city.img}
                  alt={city.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <p className="font-semibold text-gray-800">{city.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Call Button */}
        {/* <motion.a href="tel:+8663075957">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-teal-700 text-white px-10 py-3 rounded-full font-semibold shadow-lg hover:bg-teal-800 transition-all"
          >
            Call Us
          </motion.button>
        </motion.a> */}
        <Link to="/flight-booking-services">
            <button className="text-white bg-teal-600  hover:transition-all duration-300 p-3  rounded-4xl hover:scale-115">Flight Deal</button>
        </Link>
        
      </div>

      {/* ✈ Choosing Airlines Ticket Booking Section */}
      <div className="bg-white relative z-10 py-20 px-6 md:px-16 lg:px-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="italic text-gray-700 mb-2">
              Choosing Airlines Ticket Booking
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
              Your Path to Affordable Flights & Dream Vacations
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Finding great flight deals has never been this easy! With Airlines
              Ticket Booking, you can explore worldwide destinations and book
              flights at unbeatable prices in just a few clicks. Whether you’re
              flying across the USA or to Europe and Canada, enjoy the lowest
              fares, flexible booking options, and trusted service—all in one
              place.
            </p>

            {/* BENEFITS GRID */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 bg-gray-50 hover:shadow-lg transition-all"
                  whileHover={{
                    scale: 1.03,
                    backgroundColor: "rgba(0,0,0,0.03)",
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {b.icon}
                  <span className="font-medium text-gray-800">{b.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGES */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.img
              src="https://i.postimg.cc/xdchzHjk/Your-Path-to-the-Best-Flight-Deals-1.jpg"
              alt="Airport Traveler"
              className="rounded-br-4xl object-cover w-full h-64 md:h-72 shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            />

            <motion.img
              src="https://i.postimg.cc/VNdpCMsN/Your-Path-to-the-Best-Flight-Deals-2.jpg"
              alt="Airplane in Sky"
              className="rounded-br-4xl object-cover w-full h-64 md:h-72 shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
