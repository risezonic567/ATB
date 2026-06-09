import React from "react";
import { PlaneTakeoff, RotateCcw, CreditCard, Undo2, Plane, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function WorldwideDestinations() {
  const destinations = [
    {
      name: "Barcelona",
      img: "https://i.postimg.cc/X7VfPL02/Worldwide-Destinations-barcelona.jpg",
    },
    {
      name: "Berlin",
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

  const benefits = [
    {
      icon: <CreditCard className="w-5 h-5 text-[#C30000]" />,
      text: "Easy Bookings",
    },
    {
      icon: <RotateCcw className="w-5 h-5 text-[#1A2E48]" />,
      text: "Cheapest Airfare",
    },
    {
      icon: <PlaneTakeoff className="w-5 h-5 text-[#1A2E48]" />,
      text: "Flexible Changes",
    },
    {
      icon: <Undo2 className="w-5 h-5 text-[#C30000]" />,
      text: "Fast Cancellations",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-24 text-[#48586D] selection:bg-[#C30000] selection:text-white">
      {/* 60% Dominant Premium Subtle Gradient Overlay Canvas */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#1A2E48]/5 via-[#48586D]/5 to-[#0B131F]/5 pointer-events-none"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        style={{ backgroundSize: "200% 200%" }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Elegant Atmospheric Kinetic Vectors */}
      <motion.div
        className="absolute left-10 top-20 text-[#1A2E48] opacity-[0.07] pointer-events-none hidden lg:block"
        animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Plane size={80} strokeWidth={1} />
      </motion.div>

      <motion.div
        className="absolute right-12 top-1/3 text-[#C30000] opacity-[0.05] pointer-events-none hidden lg:block"
        animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <Plane size={60} strokeWidth={1} />
      </motion.div>

      {/* 🌍 SECTION 1: WORLDWIDE DESTINATIONS MATRIX */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 text-center relative z-10 mb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#C30000] text-xs font-black uppercase tracking-widest block mb-3">Continental Gateways</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1A2E48] tracking-tight uppercase mb-4 leading-tight">
            Top Flight Routes from the USA to Europe & Canada
          </h2>
          <div className="w-12 h-0.5 bg-[#C30000] mx-auto mb-5" />
          <p className="text-[#48586D] text-sm sm:text-base font-light leading-relaxed">
            Discover the most popular air routes at unbeatable prices. Fly from
            major U.S. cities to top European and Canadian destinations without
            overspending.
          </p>
        </motion.div>

        {/* Structural Circle Bubble Array Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {destinations.map((city, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <motion.div
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border-4 border-white relative group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img
                  src={city.img}
                  alt={city.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#1A2E48]/10 group-hover:bg-transparent transition-colors duration-300" />
              </motion.div>
              <p className="font-bold text-[#1A2E48] text-sm sm:text-base mt-4 tracking-tight">{city.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Structural Action Hook Block */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/flight-booking-services" className="inline-block">
            <motion.button 
              whileHover={{ scale: 1.03, backgroundColor: "#009689" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#009689] text-white px-8 py-3.5 rounded-xl font-bold tracking-wide shadow-lg shadow-[#C30000]/10 transition-colors duration-300 text-sm inline-flex items-center gap-3 group"
            >
              <span>Flight Deal</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* ✈ SECTION 2: CHOOSE PLATFORM VALUE EDITORIAL */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 relative z-10">
        <div className="bg-white rounded-3xl border border-slate-200/60 p-8 md:p-12 lg:p-16 shadow-[0_4px_30px_-4px_rgba(26,46,72,0.03)] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT INTERACTIVE CONTENT MODULE (30% Secondary Weight Focus) */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase font-black tracking-widest text-[#C30000] mb-3">
              Choosing Airlines Ticket Booking
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 text-[#1A2E48] tracking-tight uppercase leading-tight">
              Your Path to Affordable Flights & Dream Vacations
            </h2>

            <p className="text-[#48586D] text-sm sm:text-base mb-8 leading-relaxed font-light">
              Finding great flight deals has never been this easy! With Airlines
              Ticket Booking, you can explore worldwide destinations and book
              flights at unbeatable prices in just a few clicks. Whether you’re
              flying across the USA or to Europe and Canada, enjoy the lowest
              fares, flexible booking options, and trusted service—all in one
              place.
            </p>

            {/* BENEFITS MODULE ARRAY */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3.5 border border-slate-100 rounded-xl px-4 py-3.5 bg-[#F8FAFC] transition-all duration-300"
                  whileHover={{
                    y: -2,
                    borderColor: "#1A2E48",
                    boxShadow: "0 10px 25px -10px rgba(26,46,72,0.08)"
                  }}
                >
                  <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center border border-slate-200/40">
                    {b.icon}
                  </div>
                  <span className="font-bold text-sm text-[#1A2E48] tracking-tight">{b.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT ASYMMETRIC VISUAL WRAPPER */}
          <motion.div
            className="lg:col-span-5 grid grid-cols-1 gap-6 w-full h-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="overflow-hidden rounded-2xl border border-slate-200/50 shadow-sm relative group h-56 sm:h-64 lg:h-52 xl:h-56">
              <motion.img
                src="https://i.postimg.cc/xdchzHjk/Your-Path-to-the-Best-Flight-Deals-1.jpg"
                alt="Airport Traveler"
                className="w-full h-full object-cover object-center transform group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#1A2E48]/5 group-hover:bg-transparent transition-colors duration-300" />
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200/50 shadow-sm relative group h-56 sm:h-64 lg:h-52 xl:h-56">
              <motion.img
                src="https://i.postimg.cc/VNdpCMsN/Your-Path-to-the-Best-Flight-Deals-2.jpg"
                alt="Airplane in Sky"
                className="w-full h-full object-cover object-center transform group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#0B131F]/5 group-hover:bg-transparent transition-colors duration-300" />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}