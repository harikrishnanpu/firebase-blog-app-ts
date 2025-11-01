

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { getBlogById } from "../../services/blogServices";
import type { Blog } from "../../types/Blog";


const BlogPage = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        if (!id) return;
        const data = await getBlogById(id);
        setBlog(data as Blog);
      } catch (err) {
        if (err instanceof Error) toast.error(err.message);
    } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-64 text-gray-500 text-lg">
        Loading blog...
      </div>
    );

  if (!blog)
    return (
      <div className="text-center text-gray-500 mt-20">
        <p>Blog not found</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Go Back
        </button>
      </div>
    );

  const formattedDate = blog.createdAt
    ? new Date(blog.createdAt.seconds * 1000).toLocaleDateString()
    : "";

  return (
    <article className="min-h-screen bg-gradient-to-br from-green-50 to-white text-gray-800">

      <div className="relative w-full h-64 sm:h-80 bg-gray-800 text-white flex flex-col justify-center items-center text-center px-4">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-5 left-5 bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm"
        >
          ← Back
        </button>

        <h1 className="text-3xl sm:text-4xl font-extrabold leading-snug max-w-3xl">
          {blog.title}
        </h1>
        <p className="mt-3 text-sm opacity-90">
          By <span className="font-medium">{blog.authorName || "Unknown"}</span> • {formattedDate}
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10 sm:py-16">

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          {blog.content.split("\n").map((para, i) => (
            <p key={i} className="mb-4">
              {para}
            </p>
          ))}
        </div>
      </div>

      <footer className="border-t border-gray-200 mt-10 py-6 text-center text-gray-500 text-sm">
        <p>copyright 2025 Green Mind</p>
      </footer>
    </article>
  );
};

export default BlogPage;
