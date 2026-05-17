import React from "react";
import { Percent, Search, Clock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ExploreDestinations() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  const features = [
    {
      icon: <Percent className="w-6 h-6 text-blue-600" />,
      title: "Quick & Easy Flight Booking",
      desc: "Book your domestic or international flights in just a few clicks—fast, simple, and secure.",
    },
    {
      icon: <Search className="w-6 h-6 text-indigo-600" />,
      title: "Unbeatable Airfare Deals",
      desc: "Get exclusive discounts on USA, Europe, and Canada routes with no hidden charges.",
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-600" />,
      title: "24/7 Travel Assistance",
      desc: "Our dedicated support team is available around the clock to help you plan or modify your trip.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-pink-600" />,
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
    <section className="py-20 bg-white">
      {/* TOP HEADING */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center px-4"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
          Fly to Your Favorite Destinations at Unbeatable Prices!
        </h2>
        <p className="text-gray-600 mb-14 leading-relaxed max-w-3xl mx-auto text-lg">
          Discover cheap flights from the USA to Europe and Canada with top
          airlines. Enjoy smooth booking, flexible fares, and travel without
          breaking your budget.
        </p>
      </motion.div>

      {/* FEATURE CARDS */}
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: i * 0.15 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl p-6 border border-gray-100 transition-all duration-300 text-center"
          >
            <div className="flex justify-center mb-4">{f.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* DESTINATIONS SECTION HEADING */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center mt-20 mb-10 px-4"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Explore Your Dream Destinations Without Spending a Fortune!
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover the most affordable flights to incredible destinations around
          the world. Without compromising your budget, fly to Paris, Singapore,
          Australia & more!
        </p>
      </motion.div>

      {/* DESTINATION GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {continents.map((item, i) => (
          <motion.a
            href="#"
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ scale: 1.05 }}
            className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all"></div>
            <h3 className="absolute inset-0 flex items-center justify-center text-white font-extrabold text-2xl uppercase tracking-wide drop-shadow-lg">
              {item.name}
            </h3>
          </motion.a>
        ))}
      </div>
      <Link to="/tour-packages">
        <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full block mx-auto mt-10">
        Popular Destination
      </button>
      </Link>
    </section>
  );
}
