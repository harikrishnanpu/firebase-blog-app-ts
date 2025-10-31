import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../../services/blogServices";


const BlogCreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("Title and content are required.");
      return;
    }

    setLoading(true);
    try {
      const blogId = await createBlog(title, content);
      toast.success("Blog created successfully!");
      navigate(`/blog/${blogId}`);
    } catch (err) {
      if (err instanceof Error) toast.error(err.message);
      else toast.error("Failed to create blog.");
    } finally {
      setLoading(false);
    }

  };

  return (
    <section className="max-w-2xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Create New Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter blog title"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={10}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Write your blog content..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-green-600 text-white font-bold py-2 rounded-lg hover:bg-green-700 transition ${
            loading ? "opacity-60 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Loading..." : "Publish Blog"}
        </button>
      </form>
    </section>
  );
};

export default BlogCreatePage;
