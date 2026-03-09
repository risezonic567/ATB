import React, { useState } from "react";
import {
  ShieldCheck,
  CalendarDays,
  DollarSign,
  Car,
  MapPin,
  Headphones,
} from "lucide-react";
import { Helmet } from "react-helmet";

const carsData = [
  {
    name: "Swift Dzire",
    type: "Sedan",
    seater: 5,
    pricePerDay: 12,
    image: "/photos/Swift Dzire.jpg.jpeg",
  },
  {
    name: "Hyundai Creta",
    type: "SUV",
    seater: 5,
    pricePerDay: 13,
    image: "/photos/hyundai creta.jpg.jpeg",
  },
  {
    name: "Toyota Fortuner",
    type: "Luxury SUV",
    seater: 7,
    pricePerDay: 16,
    image: "/photos/toyota fortuner.jpg.jpeg",
  },
  {
    name: "Maruti Alto",
    type: "Hatchback",
    seater: 4,
    pricePerDay: 11,
    image: "/photos/maruti alto.jpg.jpeg",
  },
  {
    name: "Hyundai i20",
    type: "Premium Hatchback",
    seater: 5,
    pricePerDay: 13,
    image: "/photos/hyundai creta.jpg.jpeg",
  },
  {
    name: "Honda City",
    type: "Sedan",
    seater: 5,
    pricePerDay: 14,
    image: "/photos/honda city.jpg.jpeg",
  },
  {
    name: "Kia Seltos",
    type: "SUV",
    seater: 5,
    pricePerDay: 17,
    image: "/photos/kia seltos.jpg.jpeg",
  },
  {
    name: "Mahindra Thar",
    type: "Off-Road SUV",
    seater: 4,
    pricePerDay: 14,
    image: "/photos/mahindra thar.jpg.jpeg",
  },
  {
    name: "BMW 5 Series",
    type: "Luxury Sedan",
    seater: 5,
    pricePerDay: 22,
    image: "/photos/bmw.jpg.jpeg",
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
    review: "Best car rental experience so far. The UI is very easy to use.",
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
          (new Date(dropDate) - new Date(pickupDate)) / (1000 * 60 * 60 * 24),
        )
      : 0;

  const totalPrice = selectedCar && days ? selectedCar.pricePerDay * days : 0;

  return (
    <>
      {/* <SEO
        title="Car Rental Services in USA | Airlines ticket booking"
        description="Book affordable car rental services across the USA with flexible options and airport pickup from Airlines ticket booking  . Compare rates and reserve your ride easily online."
        canonical="https://www.airlinesticketbooking.com/car-rental-services"
      /> */}
      <Helmet>
        <title>Car Rental Services in USA | Airlines ticket booking</title>
        <meta
          name="description"
          content="Book affordable car rental services across the USA with flexible options and airport pickup from Airlines ticket booking  . Compare rates and reserve your ride easily online."
        />
        <link
          rel="canonical"
          href="https://www.airlinesticketbooking.com/car-rental-services"
        />

        <script type="application/ld+json">
{ `{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "Service",
      "@id": "https://www.airlinesticketbooking.com/car-rental-services#service",
      "name": "Car Rental Services in USA",
      "description": "Affordable and flexible car rental services in the USA providing airport pickup, budget and luxury vehicles, short-term and long-term rental options with easy online reservations and personalized support.",
      "serviceType": [
        "Car Rental Services",
        "Airport Car Rental",
        "Economy Car Rental",
        "Luxury Car Rental",
        "Long-Term Car Rental"
      ],
      "provider": {
        "@id": "https://www.airlinesticketbooking.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://www.airlinesticketbooking.com/car-rental-services",
        "availableLanguage": ["English"]
      }
    },

    {
      "@type": "WebPage",
      "@id": "https://www.airlinesticketbooking.com/car-rental-services#webpage",
      "url": "https://www.airlinesticketbooking.com/car-rental-services",
      "name": "Car Rental Services in USA | Affordable Car Hire",
      "description": "Book affordable car rental services across the USA. Choose from economy, luxury, and long-term car options with flexible rental terms and expert travel support.",
      "isPartOf": {
        "@id": "https://www.airlinesticketbooking.com/#website"
      },
      "about": {
        "@id": "https://www.airlinesticketbooking.com/#organization"
      },
      "mainEntity": {
        "@id": "https://www.airlinesticketbooking.com/car-rental-services#service"
      },
      "breadcrumb": {
        "@id": "https://www.airlinesticketbooking.com/car-rental-services#breadcrumb"
      },
      "inLanguage": "en-US"
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.airlinesticketbooking.com/car-rental-services#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.airlinesticketbooking.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Car Rental Services",
          "item": "https://www.airlinesticketbooking.com/car-rental-services",
        }
      ]
    }

  ]
} `}
</script>

      </Helmet>
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        
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
                <button className="w-full  bg-teal-600  hover:scale-105 transition text-white py-3 rounded-xl font-semibold shadow-xl">
                  Search Cars
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Affordable Car Rental Services in the USA – Airport & Long-Term
                Rentals
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Looking for a dependable and cost-effective way to rent a vehicle
              in the United States? We provide convenient airport-to-airport
              rentals and flexible long-term car rental options across major
              U.S. cities.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Whether you need a short-term airport pickup, a weekly rental, or
              a long-term vehicle for business or extended stay, we offer
              solutions tailored to your travel needs.
            </p>

            <div className="mt-8">
              {/* <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition duration-300">
                Book Your Rental Car
              </button> */}
            </div>
          </div>

          {/* Right Feature Card */}
          <div className="bg-white p-10 rounded-3xl shadow-xl">
            <MapPin className="w-12 h-12 text-blue-600 mb-6" />

            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Our Car Rental Benefits
            </h3>

            <ul className="space-y-4 text-gray-700 leading-relaxed">
              <li className="flex gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-600 mt-1" />
                Wide range of vehicles – Economy, Standard, SUVs & Luxury
              </li>
              <li className="flex gap-3">
                <CalendarDays className="w-5 h-5 text-blue-600 mt-1" />
                Flexible short-term and monthly rental plans
              </li>
              <li className="flex gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-600 mt-1" />
                Transparent pricing with no hidden fees
              </li>
              <li className="flex gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-600 mt-1" />
                Dedicated customer support across the USA
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className=" bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Available Cars</h2>
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
                  <h3 className="text-xl font-semibold">{car.name}</h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {car.type} · {car.seater} Seater
                  </p>

                  <p className="mt-3 text-lg font-bold text-blue-600">
                    ${car.pricePerDay} / day
                  </p>

                  <button className="mt-4 w-full bg-teal-600 text-white py-2 rounded-xl hover:bg-teal-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Car Rental Services?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choosing the right vehicle rental partner can make your U.S. travel
            smooth, convenient, and stress-free. Here’s why travelers trust us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <DollarSign className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Competitive Rental Rates
            </h3>
            <p className="text-gray-600">
              Affordable daily, weekly, and long-term rental pricing to suit
              every budget.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <Car className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Wide Vehicle Selection
            </h3>
            <p className="text-gray-600">
              Choose from economy cars, SUVs, luxury vehicles, and
              family-friendly options.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <MapPin className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Airport Pickup & Drop-off
            </h3>
            <p className="text-gray-600">
              Convenient rental services available at major U.S. airports.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <ShieldCheck className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
            <p className="text-gray-600">
              No hidden fees. What you see is exactly what you pay.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <Car className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Online Booking</h3>
            <p className="text-gray-600">
              Simple, secure booking process with full assistance if required.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <Headphones className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Dedicated Customer Support
            </h3>
            <p className="text-gray-600">
              Friendly support team available before, during, and after your
              rental.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Airport Car Rental Services Across the USA
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Rent your vehicle directly from major U.S. airports and avoid
              travel delays. Our airport rental services provide quick access to
              reliable vehicles for business and leisure travelers.
            </p>
            <p className="text-gray-600">
              Choose from economy, standard, and premium models — all available
              with fast pickup and smooth drop-off options.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <ul className="space-y-4 text-gray-700">
              <li>✔ Available at major U.S. airports</li>
              <li>✔ Fast pickup & drop-off</li>
              <li>✔ Business & leisure options</li>
              <li>✔ Transparent rental policies</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Flexible Car Rental Options for Every Need
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Economy */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">
              Economy & Budget Rentals
            </h3>
            <p className="text-gray-600">
              Affordable, reliable cars ideal for students, solo travelers, and
              short city trips. Flexible stay options with competitive pricing
              across the USA.
            </p>
          </div>

          {/* Luxury */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">
              Luxury & Premium Rentals
            </h3>
            <p className="text-gray-600">
              Travel in comfort with premium sedans and SUVs. Perfect for
              corporate trips, events, and VIP transportation needs.
            </p>
          </div>

          {/* Long Term */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">
              Long-Term & Monthly Rentals
            </h3>
            <p className="text-gray-600">
              Cost-effective long-term solutions with flexible contracts and
              better rates for extended stays and business relocations.
            </p>
          </div>
        </div>
      </section>

      <section className=" bg-white">
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
              <div className="flex text-yellow-400 text-xl">★★★★★</div>
              <span className="text-gray-500">(12,000+ reviews)</span>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {reviewsData.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow">
                {/* User */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.location}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < item.rating ? "text-yellow-400" : "text-gray-300"
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

          {/* <div className="text-center mt-10">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition">
              View All Reviews
            </button>
          </div> */}
        </div>
      </section>

      <section className="py-10 px-6 text-center bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Book Your Car Rental Today
        </h2>

        <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600">
          Reserve your vehicle now and enjoy a smooth, comfortable travel
          experience anywhere in the United States.
        </p>

        <a
          href="tel:+8663075957"
          className="inline-block bg-teal-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-teal-700 transition duration-300 shadow-lg"
        >
          Call Now
        </a>
      </section>
    </>
  );
}
