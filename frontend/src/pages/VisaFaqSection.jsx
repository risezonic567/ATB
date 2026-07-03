import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "1.How can I contact visa customer service?",
    answer:
      "Our Visa Customer Service team can help you with any of your visa related questions, application advice, documentation or status updates. Our travel experts will be in touch as soon as possible. Contact us via our website contact page, telephone support or by submitting an online enquiry.",
  },
  {
    question: "2. What documents are required for travel visa services?",
    answer:
      "It totally depends on the type of visa services you are applying for and the country you're going to.You will be asked to present some documents . These include -Passports:Visa application formTravel plans: Passport size photos,proof of accommodation and finance papers.",
  },
  {
    question: "3.How long does visa processing take?",
    answer:
      "Yes. We will keep you informed of the progress of your visa application once it has been lodged. We also help you to understand the latest updates, and expected processing time frames when available.",
  },
  {
    question: "4. Can I apply for a tourist visa online?",
    answer:
      "Yes. ATB helps with the application for e-visas to a number of destinations. Apply online Send your papers Expert help with your visa application process It will make your travel plans easy and comfortable.",
  },
  {
    question: "5. What if my visa application is rejected?",
    answer:
      "In case of refusal of your visa application, our specialists will explain to you the reason mentioned by the embassy or consulate. It depends on the particular situation and we can let you know if there is a necessity to reapply for a visa and what corrections and/or supporting documents are required.",
  },
  {
    question: "6. Can I track my visa application status?",
    answer:
      "Yes, Our company keeps our customers informed of the status of visa application once it has been submitted.",
  },
];

export default function VisaFaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            FAQ
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 mt-4">
            Find answers to the most common questions about our visa services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left p-6"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-gray-600 leading-7">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}