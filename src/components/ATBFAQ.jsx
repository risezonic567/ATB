import React, { useState } from "react";

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

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-6">
                    ATB – Frequently Asked Questions
                </h2>
                <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
                    Find quick answers about booking, payments, baggage, and flight changes.
                </p>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border rounded-xl bg-white shadow-sm overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-5 text-left"
                            >
                                <span className="text-lg font-medium">{faq.question}</span>
                                <span className="text-xl">
                                    {openIndex === index ? "−" : "+"}
                                </span>
                            </button>

                            {/* Accordion Panel */}
                            {openIndex === index && (
                                <div className="p-5 pt-0 text-gray-600">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <p className="text-center text-gray-500 mt-12 text-sm">
                    Can't find your question?
                    <a href="tel:+8663075957" className="text-blue-600 font-semibold ml-1">
                        Contact Support
                    </a>
                </p>
            </div>
        </div>
    );
}
