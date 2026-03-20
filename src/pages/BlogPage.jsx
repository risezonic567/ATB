import React from "react";
import { motion } from "framer-motion";
import { Bookmark } from "lucide-react";
import { blogPosts } from "../data/blogData";
import BlogCard from "../components/blog/BlogCard";
import { Helmet } from "react-helmet";

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Travel Blog | Flight Booking, Visa & Travel Guides</title>
        <meta
          name="description"
          content="Explore Airlines ticket booking travel blog for flight booking tips, airline fare insights, visa guidance, travel insurance advice and budget travel ideas."
        />
        <link
          rel="canonical"
          href="https://www.airlinesticketbooking.com/blog"
        />
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
              Expert guides, destination reviews, and money-saving tips from our travel team.
            </p>

          </motion.div>

          
          <div className="max-w-7xl mx-auto px-4 py-16">

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {blogPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}

            </div>

          </div>

          {/* CTA */}
          <div className="text-center mt-16 p-8 bg-white rounded-xl shadow-inner">

            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Ready to book your dream flight?
            </h2>

            <p className="text-lg text-gray-600 mb-4">
              Don't just read about the world—experience it. Find your best deal now.
            </p>

            <a
              href="/"
              className="inline-block bg-teal-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-teal-700 transition-all text-lg"
            >
              Start Your Flight Search
            </a>

          </div>

        </div>

      </div>
    </>
  );
}