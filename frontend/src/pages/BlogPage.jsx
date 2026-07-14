import React from "react";
import { motion } from "framer-motion";
import { Bookmark } from "lucide-react";
import { blogPosts } from "../data/blogData";
import BlogCard from "../components/blog/BlogCard";
import { Helmet } from "react-helmet";

export default function BlogPage() {
  // --- YE LINE ADD KARI HAI ---
  // Isse naye blog upar aa jayenge
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

  const blogListSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["CollectionPage", "Blog"],
        "@id": "https://www.airlinesticketbooking.com/blog#blogpage",
        "url": "https://www.airlinesticketbooking.com/blog",
        "name": "Travel Blog | Flight Booking, Visa & Travel Guides",
        "description": "Explore Airlines ticket booking travel blog for flight booking tips, airline fare insights, visa guidance, travel insurance advice and budget travel ideas.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://www.airlinesticketbooking.com/#website"
        },
        "breadcrumb": {
          "@id": "https://www.airlinesticketbooking.com/blog#breadcrumb"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.airlinesticketbooking.com/#website",
        "url": "https://www.airlinesticketbooking.com/",
        "name": "Airline Ticket Booking",
        "description": "Book cheap domestic and international flights instantly.",
        "publisher": {
          "@id": "https://www.airlinesticketbooking.com/#organization"
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
        "telephone": "+1-866-307-5957",
        "email": "Support@airlinesticketbooking.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "17662 Irvine Blvd, Suite 9",
          "addressLocality": "Tustin",
          "addressRegion": "CA",
          "postalCode": "92780",
          "addressCountry": "US"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.airlinesticketbooking.com/blog#breadcrumb",
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
            "name": "Blog",
            "item": "https://www.airlinesticketbooking.com/blog"
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Travel Blog | Flight Booking, Visa & Travel Guides</title>
        <meta name="description" content="Explore Airlines ticket booking travel blog for flight booking tips, airline fare insights, visa guidance, travel insurance advice and budget travel ideas." />
        <link rel="canonical" href="https://www.airlinesticketbooking.com/blog" />

        {/* Schema data injected inside Helmet */}
        <script type="application/ld+json">
          {JSON.stringify(blogListSchema)}
        </script>
      </Helmet>

      <div className="py-24 md:py-5 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Travel Blog — Flight Booking Tips & Travel Guides
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto flex items-center justify-center gap-2">
              <Bookmark className="w-6 h-6 text-teal-600" />
              Expert guides and money-saving tips.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* --- YAHAN CHANGE KIYA HAI --- */}
              {sortedPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}

            </div>
          </div>

          {/* CTA Section (Wahi hai jo aapka pehle tha) */}
          <div className="text-center mt-16 p-8 bg-white rounded-xl shadow-inner">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Ready to book your dream flight?
            </h2>
            <a href="/" className="inline-block bg-teal-600 text-white px-8 py-3 rounded-full font-semibold">
              Start Your Flight Search
            </a>
          </div>

        </div>
      </div>
    </>
  );
}