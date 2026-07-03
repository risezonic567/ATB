import { CheckCircle } from "lucide-react";

export default function WhyVisa() {
  const features = [
    "Expert Visa Assistance",
    "Fast & Hassle-Free Process",
    "100% Document Guidance",
    "Live Application Tracking",
    "Dedicated Customer Support",
    "Trusted by Thousands of Travelers",
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <span className="text-blue-600 font-semibold text-4xl font-semibold uppercase tracking-widest">
            Why ATB?
          </span>

          <p className="mt-6 text-gray-600 font-medium leading-8">
           We provide comprehensive visa assistance & guides you from checking your documents, filling in the application, informing you about the progress of your visa and booking appointments. Our experts will expertly tailor your documents to the specific visa requirements of each destination, making the application process smoother.

          </p>

          {/* Features
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="text-blue-600 w-6 h-6" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div> */}

          {/* Buttons */}
          {/* <div className="flex gap-4 mt-10">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition">
              Apply Now
            </button>

            <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition">
              Contact Us
            </button>
          </div> */}
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src="/images/why-choose-us.jpg" // Replace with your image
            alt="Why Choose Us"
            className="rounded-3xl shadow-2xl w-[600px] h-[340px] border object-cover"
          />
         
        </div>
      </div>
    </section>
  );
}