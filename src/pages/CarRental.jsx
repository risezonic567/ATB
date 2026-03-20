import React, { useState } from "react";

const carsData = [
  {
    name: "Swift Dzire",
    type: "Sedan",
    seater: 5,
    pricePerDay: 12,
    image:
      "/photos/Swift Dzire.jpg.jpeg",
  },
  {
    name: "Hyundai Creta",
    type: "SUV",
    seater: 5,
    pricePerDay: 13,
    image:
      "/photos/hyundai creta.jpg.jpeg",
  },
  {
    name: "Toyota Fortuner",
    type: "Luxury SUV",
    seater: 7,
    pricePerDay: 16,
    image:
      "/photos/toyota fortuner.jpg.jpeg",
  },
  {
    name: "Maruti Alto",
    type: "Hatchback",
    seater: 4,
    pricePerDay: 11,
    image:
      "/photos/maruti alto.jpg.jpeg",
  },
  {
    name: "Hyundai i20",
    type: "Premium Hatchback",
    seater: 5,
    pricePerDay: 13,
    image:
      "/photos/hyundai creta.jpg.jpeg",
  },
  {
    name: "Honda City",
    type: "Sedan",
    seater: 5,
    pricePerDay: 14,
    image:
      "/photos/honda city.jpg.jpeg",
  },
  {
    name: "Kia Seltos",
    type: "SUV",
    seater: 5,
    pricePerDay: 17,
    image:
      "/photos/kia seltos.jpg.jpeg",
  },
  {
    name: "Mahindra Thar",
    type: "Off-Road SUV",
    seater: 4,
    pricePerDay: 14,
    image:
      "/photos/mahindra thar.jpg.jpeg",
  },
  {
    name: "BMW 5 Series",
    type: "Luxury Sedan",
    seater: 5,
    pricePerDay: 22,
    image:
      "/photos/bmw.jpg.jpeg",
  },
  
];

const reviewsData = [
  {
    name: "Rahul Sharma",
    location: "Delhi, India",
    rating: 5,
    review:
      "Great service! Car was clean and the booking process was super smooth.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Verma",
    location: "Mumbai, India",
    rating: 4,
    review:
      "Affordable prices and good customer support. Will definitely use again.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Amit Singh",
    location: "Bangalore, India",
    rating: 5,
    review:
      "Best car rental experience so far. The UI is very easy to use.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];




export default function CarRental() {
  const [pickupDate, setPickupDate] = useState("");
  const [dropDate, setDropDate] = useState("");
  const [selectedCar, setSelectedCar] = useState(null);

  const days =
    pickupDate && dropDate
      ? Math.max(
          1,
          (new Date(dropDate) - new Date(pickupDate)) /
            (1000 * 60 * 60 * 24)
        )
      : 0;

  const totalPrice =
    selectedCar && days ? selectedCar.pricePerDay * days : 0;

  return (
    <>
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/photos/car-rental.jpg.jpeg')",
    }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Glass Card */}
  <div className="relative z-10 max-w-6xl w-full mx-4">
    <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl shadow-2xl p-6 md:p-10">

      {/* Heading */}
      <div className="text-center text-white mb-10">
        <h1 className="text-3xl md:text-5xl font-bold">
          Rent a Car Anytime, Anywhere
        </h1>
        <p className="mt-3 text-white/80">
          Best prices · Trusted drivers · 24/7 Support
        </p>
      </div>

      {/* Search Bar */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-gray-800">

        <div>
          <label className="text-sm text-white">Pick-up Location</label>
          <input
            type="text"
            placeholder="Enter city"
            className="w-full mt-1 p-3 rounded-xl bg-white/90 outline-none"
          />
        </div>

        <div>
          <label className="text-sm text-white">Pick-up Date</label>
          <input
            type="date"
            className="w-full mt-1 p-3 rounded-xl bg-white/90 outline-none"
          />
        </div>

        <div>
          <label className="text-sm text-white">Drop Date</label>
          <input
            type="date"
            className="w-full mt-1 p-3 rounded-xl bg-white/90 outline-none"
          />
        </div>

        <div>
          <label className="text-sm text-white">Car Type</label>
          <select className="w-full mt-1 p-3 rounded-xl bg-white/90 outline-none">
            <option>Any</option>
            <option>Sedan</option>
            <option>SUV</option>
            <option>Luxury</option>
            <option>Hatchback</option>
          </select>
        </div>

        <div className="flex items-end">
          <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 transition text-white py-3 rounded-xl font-semibold shadow-xl">
            Search Cars
          </button>
        </div>

      </div>
    </div>
  </div>

</section>


    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Available Cars
          </h2>
          <p className="text-gray-600 mt-2">
            Choose the perfect car for your journey
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {carsData.map((car, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="h-full w-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold">
                  {car.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {car.type} · {car.seater} Seater
                </p>

                <p className="mt-3 text-lg font-bold text-blue-600">
                  ${car.pricePerDay} / day
                </p>

                <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-xl hover:bg-green-700 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ratings & Reviews
          </h2>
          <p className="text-gray-600 mt-2">
            What our customers say about us
          </p>

          {/* Overall Rating */}
          <div className="mt-4 flex justify-center items-center gap-2">
            <span className="text-2xl font-bold">4.8</span>
            <div className="flex text-yellow-400 text-xl">
              ★★★★★
            </div>
            <span className="text-gray-500">
              (12,000+ reviews)
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {reviewsData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow"
            >
              {/* User */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {item.location}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${
                      i < item.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 text-sm leading-relaxed">
                “{item.review}”
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition">
            View All Reviews
          </button>
        </div>

      </div>
    </section>
    </>
  );
}
