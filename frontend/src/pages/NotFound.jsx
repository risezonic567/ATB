import React from "react";
import { Link } from "react-router-dom";
import { Plane } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-white px-4">
      <div className="max-w-2xl text-center">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <Plane className="w-14 h-14 text-teal-600" />
        </div>

        {/* 404 Heading */}
        <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable. Let’s help you get back on track and plan your journey.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-teal-600 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-700 transition duration-300"
          >
            Back to Home
          </Link>

          <a
            href="tel:+8663075957"
            className="border border-teal-600 text-teal-600 px-6 py-3 rounded-full font-medium hover:bg-teal-50 transition duration-300"
          >
            Contact Support
          </a>
        </div>

      </div>
    </section>
  );
}