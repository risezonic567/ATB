import React from "react";
import Form from "./Form";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div
      className="min-h-screen pt-28 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://i.postimg.cc/MKd7JBWh/Banner-final-1.jpg)",
      }}
    >
      <section className="sm:flex sm:justify-evenly p-5 items-center gap-10">
        <Form />

        <div className="rounded-3xl shadow-2xl md:p-10 backdrop-blur-sm border border-gray-200 mx-auto max-w-xl bg-[#1A2E48]/95 text-white p-6 text-xl">
          <h1 className="font-semibold text-2xl mb-4">
            Book Cheap International  & Domestic Flights from USA
          </h1>

          <ul className="space-y-2 list-disc pl-5 text-lg">
            <li>
              Compare fares, choose top-rated airlines, and book your flight 
            </li>

            <li>
              Airlinesticketbooking.com makes travel simple, secure, and
              affordable.
            </li>

            <li>
              Enjoy 24/7 customer support for hassle-free flight assistance
              anytime, anywhere.
            </li>

            <li>
              Unlock exclusive deals and last-minute offers for both domestic
              and international routes.
            </li>
          </ul>

          <p className="text-sm mt-3 opacity-70">*From our partners</p>

          {/* CTA Button */}
          <Link to="/about">
            <button className="mt-6 w-full bg-teal-500 hover:bg-teal-400 text-white  py-3 rounded-xl transition-all duration-300 shadow-lg  hover:scale-105 font-medium">
              About
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}