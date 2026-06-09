import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, PhoneCall } from "lucide-react";

const faqs = [
  {
    question: "How do I search for flights on ATB?",
    answer:
      "Enter your origin, destination, travel dates and passengers in our search bar. Apply filters to refine your results.",
  },
  {
    question: "Can I hold a booking before payment?",
    answer:
      "Yes! ATB allows you to hold selected fares for 10–30 minutes depending on availability.",
  },
  {
    question: "What payment methods does ATB accept?",
    answer:
      "We accept UPI, debit/credit cards, net banking, and digital wallets based on your region.",
  },
  {
    question: "How can I change or cancel my booking?",
    answer:
      "Go to ‘My Bookings’, select your ticket, and choose change or cancel. Refunds depend on airline fare rules.",
  },
  {
    question: "What is the baggage allowance?",
    answer:
      "Each airline has its own baggage rules. You can check details during booking or in your ticket summary.",
  },
  {
    question: "Can I add meals or choose seats?",
    answer:
      "Yes! You can add meals, seat selection, and extra baggage during booking or later under Manage Booking.",
  },
];

export default function ATBFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Asymmetrically split arrays evenly to create columns
  const leftColumnFaqs = faqs.slice(0, 3);
  const rightColumnFaqs = faqs.slice(3, 6);

  const renderFaqCard = (faq, index) => {
    const isOpen = openIndex === index;
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05, duration: 0.5 }}
        className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden h-fit ${
          isOpen 
            ? "border-[#1A2E48] shadow-[0_15px_30px_-10px_rgba(26,46,72,0.08)]" 
            : "border-slate-200/70 shadow-[0_4px_20px_-4px_rgba(26,46,72,0.03)] hover:border-slate-300"
        }`}
      >
        <button
          onClick={() => toggleFAQ(index)}
          className="w-full flex justify-between items-center p-5 text-left transition-colors duration-200 focus:outline-none group"
        >
          <div className="flex items-start gap-3.5 pr-2">
            <HelpCircle className={`w-4 h-4 mt-1 flex-shrink-0 transition-colors duration-300 ${isOpen ? "text-[#C30000]" : "text-[#1A2E48]/70"}`} strokeWidth={2} />
            <span className={`font-bold text-sm sm:text-base tracking-tight transition-colors duration-300 ${isOpen ? "text-[#1A2E48]" : "text-[#1A2E48]/90"}`}>
              {faq.question}
            </span>
          </div>
          
          <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 border ${
            isOpen 
              ? "bg-[#1A2E48] border-[#1A2E48] text-white rotate-180" 
              : "bg-slate-50 border-slate-100 text-[#48586D] group-hover:bg-slate-100"
          }`}>
            <ChevronDown className="w-3.5 h-3.5" />
          </div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <div className="px-5 pb-5 ml-7 text-xs sm:text-sm text-[#48586D] font-light leading-relaxed border-t border-slate-50 pt-3">
                {faq.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <section className="relative py-24 bg-[#F8FAFC] text-[#48586D] selection:bg-[#C30000] selection:text-white overflow-hidden min-h-screen flex items-center">
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/dots.png')] opacity-[0.04] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Editorial Responsive Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#C30000] text-xs font-black uppercase tracking-widest block mb-3">FAQ Database</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1A2E48] tracking-tight uppercase mb-4 leading-tight">
            ATB – Frequently Asked Questions
          </h2>
          <div className="w-12 h-0.5 bg-[#C30000] mx-auto mb-5" />
          <p className="text-[#48586D] text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Find quick answers about booking configurations, transactional gateways, baggage regulations, and structural flight modifications.
          </p>
        </motion.div>

        {/* 2-Column Split Balanced Architecture Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left Column (Questions 1 - 3) */}
          <div className="space-y-4">
            {leftColumnFaqs.map((faq, index) => renderFaqCard(faq, index))}
          </div>

          {/* Right Column (Questions 4 - 6) */}
          <div className="space-y-4">
            {rightColumnFaqs.map((faq, index) => renderFaqCard(faq, index + 3))}
          </div>
        </div>

        {/* Corporate Communication Footer Link Module */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-14"
        >
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200/60 shadow-sm text-xs sm:text-sm font-medium">
            <span className="text-[#48586D]">Can't find your question?</span>
            <a 
              href="tel:+8663075957" 
              className="text-[#009689] hover:text-[#1A2E48] font-bold tracking-tight inline-flex items-center gap-1.5 transition-colors duration-200 ml-1 group"
            >
              <PhoneCall className="w-3.5 h-3.5 transform group-hover:scale-110 transition-transform" />
              <span>Contact Support</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}