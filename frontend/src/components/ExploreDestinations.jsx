import React from "react";
import { Percent, Search, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ExploreDestinations() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  const features = [
    {
      icon: <Percent className="w-6 h-6 text-[#C30000]" />,
      title: "Quick & Easy Flight Booking",
      desc: "Book your domestic or international flights in just a few clicks—fast, simple, and secure.",
    },
    {
      icon: <Search className="w-6 h-6 text-[#1A2E48]" />,
      title: "Unbeatable Airfare Deals",
      desc: "Get exclusive discounts on USA, Europe, and Canada routes with no hidden charges.",
    },
    {
      icon: <Clock className="w-6 h-6 text-[#1A2E48]" />,
      title: "24/7 Travel Assistance",
      desc: "Our dedicated support team is available around the clock to help you plan or modify your trip.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#C30000]" />,
      title: "Top Airlines, Trusted Service",
      desc: "Fly with globally recognized airlines and enjoy smooth, reliable travel every time.",
    },
  ];

  const continents = [
    {
      name: "Rome",
      img: "https://i.postimg.cc/RVX7xtMY/Explore-Your-Dream-Destinations-rome.jpg",
    },
    {
      name: "Las Vegas",
      img: "https://i.postimg.cc/KvJPhTZJ/Explore-Your-Dream-Destinations-las-vegas.jpg",
    },
    {
      name: "London",
      img: "https://i.postimg.cc/9FJdH9W6/Explore-Your-Dream-Destinations-london.jpg",
    },
    {
      name: "New York",
      img: "https://i.postimg.cc/BQMTfFqh/Explore-Your-Dream-Destinations-new-york.jpg",
    },
    {
      name: "Paris",
      img: "https://i.postimg.cc/dt42cCsK/Explore-Your-Dream-Destinations-Paris.jpg",
    },
    {
      name: "Chicago",
      img: "https://i.postimg.cc/YSGq8v2b/Explore-Your-Dream-Destinations-chicago.jpg",
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] text-[#48586D] selection:bg-[#C30000] selection:text-white overflow-hidden">
      {/* TOP HEADING */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center px-4"
      >
        {/* Hidden empty node left untouched to preserve code structure */}
      </motion.div>

      {/* FEATURE CARDS MATRIX */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-6 md:px-12">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(26,46,72,0.05)] hover:border-[#1A2E48] hover:shadow-[0_20px_40px_-15px_rgba(26,46,72,0.1)] transition-all duration-300 text-center flex flex-col items-center justify-start"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-5 border border-slate-100">
              {f.icon}
            </div>
            <h3 className="font-bold text-[#1A2E48] text-base mb-2.5 tracking-tight">{f.title}</h3>
            <p className="text-[#48586D] text-xs sm:text-sm leading-relaxed font-normal">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* DESTINATIONS SECTION HEADING */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="text-center mt-28 mb-14 max-w-3xl mx-auto"
        >
          <span className="text-[#C30000] text-xs font-black uppercase tracking-widest block mb-3">Global Routing</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1A2E48] tracking-tight uppercase mb-4 leading-tight">
            Explore Your Dream Destinations Without Spending a Fortune!
          </h2>
          <div className="w-12 h-0.5 bg-[#C30000] mx-auto mb-5" />
          <p className="text-[#48586D] text-sm sm:text-base font-normal leading-relaxed">
            Discover the most affordable flights to incredible destinations around
            the world. Without compromising your budget, fly to Paris, Singapore,
            Australia & more!
          </p>
        </motion.div>

        {/* DESTINATION GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {continents.map((item, i) => (
            <motion.a
              href="#"
              key={i}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-slate-200/40 h-60 flex flex-col justify-end transition-all duration-300"
            >
              <img
                src={item.img}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Premium dark gradient masking for visibility block */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B131F]/90 via-[#0B131F]/40 to-transparent transition-all duration-300" />
              
              <div className="relative z-10 p-6 flex items-center justify-between w-full">
                <h3 className="text-white font-extrabold text-xl uppercase tracking-wider drop-shadow-md group-hover:text-[#C30000] transition-colors duration-300">
                  {item.name}
                </h3>
                <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 border border-white/10">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* FOOTER ACTION CTA COMPONENT MODULE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-14 text-center"
        >
          <Link to="/tour-packages" className="inline-block">
            <motion.button 
              whileHover={{ scale: 1.03, backgroundColor: "#009689" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#009689] text-white px-8 py-3.5 rounded-xl font-bold tracking-wide shadow-lg shadow-[#C30000]/10 transition-colors duration-300 text-sm inline-flex items-center gap-3 group"
            >
              <span>Popular Destination</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}