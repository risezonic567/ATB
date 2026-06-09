import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function SocialsSection() {
  const socials = [
    {
      name: "Facebook",
      icon: <FaFacebookF className="w-4 h-4 text-[#1A2E48]" />,
      title: "Top Airlines & Routes",
      img: "https://i.postimg.cc/pXMhrbYn/Connect-with-us-in-our-Socials-y-all-2.jpg",
      text: "Fly confidently with leading carriers and enjoy access to major domestic and international routes. Whether it’s a quick getaway or a long adventure, we make every flight smooth and convenient.",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="w-4 h-4 text-[#C30000]" />,
      title: "Fast & Secure Booking",
      img: "https://i.postimg.cc/ryrRqFW6/Connect-with-us-in-our-Socials-y-all-3.jpg",
      text: "Book your flight in just a few clicks with our user-friendly platform. Your payments are safe, your data is protected, and your confirmation arrives instantly—no waiting, no hassle.",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="w-4 h-4 text-[#1A2E48]" />,
      title: "24/7 Travel Support",
      img: "https://i.postimg.cc/8PgJcQBv/Connect-with-us-in-our-Socials-y-all-4.jpg",
      text: "Our expert support team is available around the clock to assist you before, during, and after your trip. From booking guidance to travel updates, we’re here whenever you need us.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#F8FAFC] text-[#48586D] selection:bg-[#C30000] selection:text-white overflow-hidden">
      {/* Structural Pattern Background Layer */}
      <div className="absolute left-0 top-0 w-64 h-64 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/dots.png')] opacity-10 pointer-events-none mix-blend-multiply" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 xl:px-24 text-center">
        {/* Editorial Architecture Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#C30000] text-xs font-black uppercase tracking-widest block mb-3">Service Value</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1A2E48] tracking-tight uppercase mb-4 leading-tight">
            Why Travelers Choose Airlines Ticket Booking
          </h2>
          <div className="w-12 h-0.5 bg-[#C30000] mx-auto mb-5" />
          <p className="text-[#48586D] text-sm sm:text-base font-normal leading-relaxed">
            See what makes us the preferred choice for thousands of U.S. flyers traveling domestically and abroad.
          </p>
        </motion.div>

        {/* Unified Editorial Grid Component */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-stretch">
          {socials.map((social, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(26,46,72,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(26,46,72,0.1)] hover:border-slate-300 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Image Framing */}
              <div className="relative w-full h-52 overflow-hidden group">
                <img
                  src={social.img}
                  alt={social.name}
                  className="object-cover w-full h-full transform group-hover:scale-103 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-[#1A2E48]/5 group-hover:bg-transparent transition-colors duration-300" />
                
                {/* Repositioned Structural Network Icon Anchor */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-sm border border-slate-200/40 flex items-center justify-center shadow-sm">
                  {social.icon}
                </div>
              </div>

              {/* Information Typographic Box */}
              <div className="p-6 text-left flex-1 flex flex-col justify-start">
                <h3 className="text-[#1A2E48] font-bold text-base mb-3 tracking-tight">
                  {social.title}
                </h3>
                <p className="text-[#48586D] text-xs sm:text-sm leading-relaxed font-normal">
                  {social.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 10% Branding Corporate CTA Element */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link to="/contact-us" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: "#009689" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#009689] text-white px-8 py-3.5 rounded-xl font-bold tracking-wide shadow-lg shadow-[#C30000]/10 transition-colors duration-300 text-sm inline-flex items-center gap-3 group"
            >
              <span>Call Us</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}