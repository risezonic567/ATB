import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Globe, Clock } from "lucide-react";
import { Plane, Hotel, ShieldCheck, Car } from "lucide-react";
import { CheckCircle } from "lucide-react";
import SEO from "../components/SEO";
import { Helmet } from "react-helmet";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutPage() {
  // Reusing the feature icons for consistency
  const coreValues = [
    {
      icon: <Globe className="w-8 h-8 text-teal-600" />,
      title: "Global Reach",
      desc: "Connecting you to over 500+ worldwide destinations with ease.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Unbeatable Value",
      desc: "We guarantee the lowest fares without compromising on service or quality.",
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-600" />,
      title: "24/7 Support",
      desc: "Our dedicated travel experts are always available for hassle-free assistance.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Airlines Ticket Booking USA - Trusted Travel Service</title>
        <meta name="description" content=" about Airline Ticket Booking USA  offering cheap international flights, airline tickets, USA to India flights, domestic airfare deals, and vacation packages." />
        <link rel="canonical" href="https://www.airlinesticketbooking.com/about" />

        <script type="application/ld+json">
{`{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "AboutPage",
      "@id": "https://www.airlinesticketbooking.com/about#aboutpage",
      "url": "https://www.airlinesticketbooking.com/about",
      "name": "About Airline Ticket Booking USA - Trusted Travel Service",
      "description": "About Airline Ticket Booking USA offering cheap international flights, airline tickets, USA to India flights, domestic airfare deals and vacation packages.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.airlinesticketbooking.com/#website"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.airlinesticketbooking.com/wp-content/uploads/2026/05/airlines-ticket-booking-logo.png"
      },
      "breadcrumb": {
        "@id": "https://www.airlinesticketbooking.com/about#breadcrumb"
      }
    },

    {
      "@type": "Organization",
      "@id": "https://www.airlinesticketbooking.com/#organization",
      "name": "Airline Ticket Booking",
      "alternateName": "Airlines Ticket Booking",
      "url": "https://www.airlinesticketbooking.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.airlinesticketbooking.com/wp-content/uploads/2026/05/airlines-ticket-booking-logo.png",
        "width": 1280,
        "height": 720
      },
      "image": "https://www.airlinesticketbooking.com/wp-content/uploads/2026/05/airlines-ticket-booking-logo.png",
      "description": "Airline Ticket Booking USA provides cheap international flights, domestic airfare deals, airline tickets, USA to India flights and affordable vacation packages worldwide.",
      "telephone": "+1-866-307-5957",
      "email": [
        "Support@airlinesticketbooking.com",
        "airlinesticketbooking4@gmail.com"
      ],
      "sameAs": [
        "https://www.facebook.com/airlinesticketbooking1/",
        "https://www.instagram.com/airlinesticketbooking/",
        "https://www.linkedin.com/company/airlines-ticket-booking1/",
        "https://www.pinterest.com/airlinesticketbooking/",
        "https://www.youtube.com/@airlinesticketbooking1"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "17662 Irvine Blvd, Suite 9",
        "addressLocality": "Tustin",
        "addressRegion": "CA",
        "postalCode": "92780",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-866-307-5957",
        "contactType": "customer support",
        "areaServed": "US",
        "availableLanguage": [
          "English"
        ]
      }
    },

    {
      "@type": "WebPage",
      "@id": "https://www.airlinesticketbooking.com/about#webpage",
      "url": "https://www.airlinesticketbooking.com/about",
      "name": "About Airline Ticket Booking USA - Trusted Travel Service",
      "description": "About Airline Ticket Booking USA offering cheap international flights, airline tickets, USA to India flights, domestic airfare deals and vacation packages.",
      "inLanguage": "en-US"
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.airlinesticketbooking.com/about#breadcrumb",
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
          "name": "About",
          "item": "https://www.airlinesticketbooking.com/about"
        }
      ]
    }

  ]
}`}
</script>
      </Helmet>     

      <motion.div initial="hidden" animate="show" variants={containerVariants}>
        {/* 1. Hero Section: Company Identity */}
        <div
          className="pt-72 pb-24 bg-cover bg-center text-white "
          style={{
            backgroundImage:
              "url(https://i.postimg.cc/HkRLv3XR/about-banner.png)",
          }}
        >
          <div className="container mx-auto px-6 text-center rounded-xl">
            <motion.h1
              variants={itemVariants}
              className="text-5xl font-extrabold mb-4"
            >
              About Airline Ticket Booking USA & Travel Services
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl max-w-3xl mx-auto"
            >
              At Airlines Ticket Booking, we are dedicated to making your dream
              vacation an affordable reality.
            </motion.p>
          </div>
        </div>

        {/* --- DYNAMIC UPDATED CONTENT AFTER BANNER --- */}
        
        {/* Intro Text Section */}
        <section className="py-16 bg-gray-50 text-gray-800">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 text-gray-900">
              About AirlinesTicketBooking – Making Flying Affordable for All Americans
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-gray-600 mb-4">
              The idea behind AirlinesTicketBooking is based on a very simple principle: every American has the right to enjoy the lowest prices on domestic flights without having to pay anything extra to travel agents or spending countless hours searching through numerous websites. At AirlinesTicketBooking, we offer you all the best discount domestic airline tickets through all top airlines in the USA.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-gray-600 font-semibold text-teal-600">
              We have helped hundreds of thousands of travelers across the United States to book the cheapest flights in just a few clicks since the time of our foundation.
            </motion.p>
          </div>
        </section>

        {/* OUR STORY */}
       <section className="py-16 bg-white text-gray-800">
  <div className="container mx-auto px-6 max-w-5xl space-y-16">
    
    <motion.h2 
      variants={itemVariants} 
      className="text-3xl font-bold text-center uppercase tracking-wide mb-6 text-gray-900"
    >
      OUR STORY
    </motion.h2>

    {/* ROW 1: Left Image & Right Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left Image */}
      <motion.div variants={itemVariants}>
        <img
          src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=600"
          alt="Flight taking off"
          className="rounded-2xl shadow-xl object-cover w-full h-80"
        />
      </motion.div>
      
      {/* Right Text */}
      <motion.div variants={itemVariants} className="text-base space-y-4 leading-relaxed text-gray-600">
        <p>
          The inspiration behind AirlinesTicketBooking was born out of a basic inconvenience: it was difficult to locate cheap domestic flights USA. Pricing information was confusing, there was no fast way to compare, and most importantly, there was a lack of any customer support services at other booking websites.
        </p>
        <p>
          With years of experience working in the travel sector, our founders decided to create something unique – a booking website where real customers can purchase cheap domestic flights USA quickly.
        </p>
      </motion.div>
    </div>

    {/* ROW 2: Left Content & Right Image */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left Text (Mobile par upar dikhane ke liye order-2 md:order-1 lagaya hai) */}
      <motion.div variants={itemVariants} className="text-base space-y-4 leading-relaxed text-gray-600 order-2 md:order-1">
        <p>
          Compare Southwest Airlines' cheap domestic flights against Delta's domestic flights offers, and receive assistance from a live operator whenever needed.
        </p>
        <p>
          At present, AirlinesTicketBooking is one of the top sites for travel lovers who use it to book same-day domestic flights for business trips as well as cheap domestic flights to such destinations as Hawaii or Orlando. We operate thousands of domestic routes in the USA and have even extended our services to airlines ticket booking USA to Europe and airlines ticket booking USA to Canada.
        </p>
      </motion.div>

      {/* Right Image (Mobile par text ke niche series me aane ke liye order-1 md:order-2 lagaya hai) */}
      <motion.div variants={itemVariants} className="order-1 md:order-2">
        <img
          src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=600"
          alt="A group of people collaborating on a travel plan"
          className="rounded-2xl shadow-xl object-cover w-full h-80"
        />
      </motion.div>
    </div>

  </div>
</section>

        {/* OUR MISSION */}
        <section className="py-16 bg-gray-50 text-gray-800">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center uppercase tracking-wide mb-6 text-gray-900">
              OUR MISSION
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-center text-gray-700 font-medium mb-8">
              To ensure every American citizen gets to enjoy affordable and hassle-free air travel experience.
            </motion.p>
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <p className="font-semibold mb-4 text-gray-800">This we achieve through:</p>
              <ul className="space-y-3 text-gray-600 list-none pl-0">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Giving instant access to affordable flights of all major airlines</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Offering affordable pricing without the surprise charges</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Equipping customers with advice on how to book US domestic flights at AirlinesTicketBooking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Providing unparalleled AirlinesTicketBooking customer service round the clock</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Developing technology to enable customers to search for the cheapest US domestic airlines.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* WHAT MAKES US UNIQUE */}
        <section className="py-16 bg-white text-gray-800">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-2xl font-semibold text-[#C30000] uppercase tracking-wider">What makes us unique?</h2>
              <h3 className="text-4xl font-bold text-gray-900 mt-2">Why Travellers Choose AirlinesTicketBooking?</h3>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={itemVariants} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-xs">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Airline Coverage</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We provide comprehensive coverage for all leading US airlines including Southwest Airlines, American Airlines, Delta Airlines, United Airlines, Spirit Airlines, Frontier Airlines, Alaska Airlines, JetBlue, and Hawaiian Airlines. This means you get a proper market comparison when searching with us.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-xs">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Human-Powered Support</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Unlike fully automated booking platforms that cannot solve issues for you, AirlinesTicketBooking offers genuine customer support through phone, chat, and email contact. Our AirlinesTicketBooking phone number will connect you with one of our flight specialists.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-xs">
                <h4 className="text-xl font-bold text-gray-900 mb-2">No Secrets</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We think that full price disclosure is the only way to go. At AirlinesTicketBooking, you see everything up front including total costs and all taxes applied.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-xs">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Unbeatable Deals</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Thanks to our connections with travel wholesale agencies and partner airlines, we can provide cheap flights to Miami, cheap flights to Las Vegas, NYC to Miami flights, and many others that would otherwise be invisible to your regular search engine searches.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-xs md:col-span-2">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Education & Insights</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Apart from booking, our purpose is also to make you an educated customer. Learn the best times to book USA domestic flights and how to do last minute USA domestic flights with our help of blog posts and fare alerts.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* OUR VALUES */}
        <section className="py-16 bg-gray-50 text-gray-800">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center uppercase tracking-wide mb-12 text-gray-900">
              OUR VALUES
            </motion.h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { title: "Honesty", text: "We give you the honest truth, even if that means we aren’t your cheapest choice." },
                { title: "Accessibility", text: "Exceptional journeys shouldn’t only be available to customers paying for the best service." },
                { title: "Reliability", text: "Every reservation made using AirlinesTicketBooking is guaranteed with our team's backing." },
                { title: "Innovation", text: "We are always looking to make improvements to our system for better search results." },
                { title: "Community", text: "We care about our passengers more than the money we exchange with them." }
              ].map((val, idx) => (
                <motion.div key={idx} variants={itemVariants} className="bg-white p-6 rounded-xl shadow-xs border-t-4 border-blue-500">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{val.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{val.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT AIRLINESTICKETBOOKING */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <motion.h2 variants={itemVariants} className="text-3xl font-bold uppercase tracking-wide mb-4">
              CONTACT AIRLINESTICKETBOOKING
            </motion.h2>
            <motion.p variants={itemVariants} className="text-blue-200 mb-8 max-w-xl mx-auto">
              Have questions? Want to book over the phone? Our travel experts are ready.
            </motion.p>
            <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-md max-w-2xl mx-auto p-8 rounded-2xl border border-white/20 text-left space-y-4">
              <p className="text-lg flex flex-wrap justify-between border-b border-white/10 pb-2">
                <span className="font-semibold text-blue-300">AirlinesTicketBooking Contact Number:</span> 
                <span className="font-bold">+(866)307-5957</span>
              </p>
              <p className="text-lg flex flex-wrap justify-between border-b border-white/10 pb-2">
                <span className="font-semibold text-blue-300">Email:</span> 
                <span className="">support@airlinesticketbooking.com</span>
              </p>
              <p className="text-lg flex flex-wrap justify-between border-b border-white/10 pb-2">
                <span className="font-semibold text-blue-300">Website:</span> 
                <span className="">www.airlinesticketbooking.com</span>
              </p>
              <p className="text-lg flex flex-wrap justify-between">
                <span className="font-semibold text-blue-300">Available:</span> 
                <span>24/7 - 365 days a year.</span>
              </p>
            </motion.div>
          </div>
        </section>

      </motion.div>
    </>
  );
}