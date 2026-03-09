import { Link } from "react-router-dom";
import { Calendar, Clock, Eye } from "lucide-react";

export default function BlogCard({ post }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">

      <img
        src={post.image}
        alt={post.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">

        {/* Category */}
        <span className="text-sm text-blue-600">
          {post.category}
        </span>

        {/* Date */}
        <div className="flex items-center text-gray-500 text-sm mt-1">
          <Calendar className="w-4 h-4 mr-1" />
          {new Date(post.date).toDateString()}
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold mt-2 line-clamp-2">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm mt-2 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Reading Time + Views */}
        <div className="flex items-center justify-between text-gray-500 text-sm mt-3 gap-4">

          <span className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {post.readingTime}
          </span>

          <span className="flex items-center">
            <Eye className="w-4 h-4 mr-1" />
            {post.views}
          </span>

        </div>

        {/* Read More */}
        <Link
          to={`/blog/${post.slug}`}
          className="text-blue-600 font-medium mt-4 inline-block"
        >
          Read More →
        </Link>

      </div>
    </div>
  );
}