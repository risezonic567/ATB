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

  return (
    <>
      <Helmet>
        <title>Travel Blog | Flight Booking, Visa & Travel Guides</title>
        <meta name="description" content="Explore travel blog for flight tips, visa guidance and more." />
        <link rel="canonical" href="https://www.airlinesticketbooking.com/blog" />
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
              Travel Smarter, Not Harder
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