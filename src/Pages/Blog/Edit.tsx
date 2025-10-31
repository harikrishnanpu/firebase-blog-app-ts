import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { getBlogById, updateBlog } from "../../services/blogServices";

interface Blog {
  id: string;
  title: string;
  content: string;
}

const EditBlogPage = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  // Fetch existing blog
  useEffect(() => {
    const loadBlog = async () => {
      try {
        if (!id) return;
        const data = await getBlogById(id);
        setBlog(data as Blog);
        setTitle((data as Blog).title);
        setContent((data as Blog).content);
      } catch (err) {
        if (err instanceof Error) toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadBlog();
  }, [id]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("Title and content are required.");
      return;
    }

    setSaving(true);
    try {
      await updateBlog(id!, title, content);
      toast.success("Blog updated successfully! ");
      navigate("/blog/me");
    } catch (err) {
      if (err instanceof Error) toast.error(err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-64 text-gray-500 text-lg">
        Loading blog...
      </div>
    );

  if (!blog)
    return (
      <div className="text-center text-gray-500 mt-20">
        <p>Blog not found.</p>
      </div>
    );

  return (
    <section className="max-w-3xl mx-auto px-6 py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-extrabold text-gray-800">Edit Blog</h1>
        <button
          onClick={() => navigate("/blog/me")}
          className="text-gray-600 hover:text-gray-800 transition"
        >
          ← Back
        </button>
      </div>

      <form
        onSubmit={handleUpdate}
        className="bg-white shadow-lg border border-gray-100 rounded-xl p-6 md:p-8"
      >
        {/* Title Field */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            placeholder="Enter blog title"
            required
          />
        </div>

        {/* Content Field */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={10}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            placeholder="Write your blog content..."
            required
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <button
            type="button"
            onClick={() => navigate("/blog/me")}
            className="w-full sm:w-auto bg-gray-200 text-gray-800 font-semibold px-5 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className={`w-full sm:w-auto bg-green-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-green-700 transition ${
              saving ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {saving ? "Saving..." : "Update Blog"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditBlogPage;
