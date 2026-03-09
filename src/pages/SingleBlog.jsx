import { useParams } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import { Calendar } from "lucide-react";

export default function SingleBlog() {

  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <h2 className="text-center py-20">Blog Not Found</h2>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        {post.title}
      </h1>

      {/* Date */}
      <div className="flex items-center text-gray-500 mb-6">
        <Calendar className="w-4 h-4 mr-2" />
        {new Date(post.date).toDateString()}
      </div>

      {/* Image */}
      <img
        src={post.image}
        alt={post.title}
        className="w-full rounded-xl mb-8"
      />

      {/* Content */}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

    </div>
  );
}