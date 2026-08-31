import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { PlaneTakeoff, MapPin } from "lucide-react";

import destinationData from "../data/destinationData";

export default function DestinationDetails() {
    const { slug } = useParams();

    const destination = destinationData.find(
        (item) => item.slug === slug
    );

    if (!destination) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center px-6">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Destination Not Found
                    </h1>

                    <p className="text-gray-600 mb-6">
                        Sorry, we couldn't find this destination.
                    </p>

                    <Link
                        to="/destinations"
                        className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700"
                    >
                        Back to Destinations
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>
                    Cheap Flights to {destination.name} | Airline Ticket Booking
                </title>

                <meta
                    name="description"
                    content={`Book cheap flights to ${destination.name}. Find affordable airfare deals and convenient flight booking options with Airline Ticket Booking.`}
                />

                <link
                    rel="canonical"
                    href={`https://www.airlinesticketbooking.com/destinations/${destination.slug}`}
                />
            </Helmet>

            {/* <section className="relative h-[350px] md:h-[500px] w-full overflow-hidden">
        <img
          src={destination.img}
          alt={`Flights to ${destination.name}`}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <div className="flex items-center justify-center gap-2 text-white mb-4">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">
                {destination.region}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Cheap Flights to {destination.name}
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mt-4">
              {destination.desc}
            </p>
          </div>
        </div>
      </section> */}

            <main className="max-w-7xl mx-auto px-6 py-16">

                <div className="mb-8 text-sm text-gray-500">
                    <Link
                        to="/"
                        className="hover:text-teal-600"
                    >
                        Home
                    </Link>

                    <span className="mx-2">/</span>

                    <Link
                        to="/flight-booking-services"
                        className="hover:text-teal-600"
                    >
                        Destinations
                    </Link>

                    <span className="mx-2">/</span>

                    <span className="text-gray-900">
                        {destination.name}
                    </span>
                </div>

                <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    <div>
                        <img
                            src={destination.img}
                            alt={destination.name}
                            className="w-full h-[350px] object-cover rounded-3xl shadow-lg"
                        />
                    </div>

                    <div>
                        <span className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full font-semibold text-sm">
                            <PlaneTakeoff className="w-4 h-4" />
                            {destination.region}
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-5 mb-5">
                            {destination.name}
                        </h2>

                        {/* <p className="text-gray-600 text-lg leading-relaxed">
              {destination.desc}
            </p> */}

                        


                        <Link to="/flight-booking-services">
                            <button
                                className="mt-7 bg-teal-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-teal-700 transition"
                            >
                                Search Flights
                            </button>
                        </Link>
                    </div>

                </section>

                <div
                            className="prose prose-lg mt-5 max-w-none text-gray-600"
                            dangerouslySetInnerHTML={{
                                __html: destination.desc,
                            }}
                        />


                {/* <section className="mt-20 bg-gray-50 rounded-3xl p-8 md:p-12">

          <h2 className="text-3xl font-bold text-gray-900 mb-5">
            Flights to {destination.name}
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Plan your journey to {destination.name} with reliable
            flight booking assistance. Whether you're travelling for
            business, vacation, or a short trip, you can explore
            different airfare options and choose a flight that fits
            your travel requirements.
          </p>

        </section> */}

            </main>
        </>
    );
}