import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { deleteBlog, getUserBlogs } from "../../services/blogServices";
import MyBlogCard from "../../Components/BlogCard/MyBlogCard";
import type { Timestamp } from "firebase/firestore";
import type { Blog } from "../../types/Blog";



const MyBlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const userBlogs = await getUserBlogs();
        setBlogs(userBlogs);
      } catch (err) {
        if(err instanceof Error) toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);


  const handleBlogDelete = (id: string) => {

    async function deleteBlogFunc(id: string){
    try {
      deleteBlog(id);
      setBlogs(blogs.filter((blog) => blog.id !== id));
      toast.success("Blog deleted successfully!");
    } catch (err) {
      if (err instanceof Error) toast.error(err.message);
    }
    }

    const confirm = window.confirm("Are you sure you want to delete this blog?")
    if(!confirm){
        toast.error("Blog deletion cancelled.");
        return;
    }

    deleteBlogFunc(id);

  }

  if (loading)
    return (
      <div className="flex justify-center items-center h-64 text-gray-500 text-lg">
        Loading your blogs...
      </div>
    );

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">


      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-800">My Blogs</h1>
          <p className="text-gray-500 text-sm">published blogs</p>
        </div>

        <button
          onClick={() => navigate("/blog/create")}
          className="bg-green-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-green-700 transition"
        >
          + Blog
        </button>
      </div>


      {blogs.length === 0 ? (
        <div className="text-center text-gray-500 py-20">
          <p className="text-lg">No blogs found.Start wrting</p>
          <button
            onClick={() => navigate("/blog/create")}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Start Writing 
          </button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <MyBlogCard
              key={blog.id}
              title={blog.title}
              content={blog.content}
              createdAt={(blog.createdAt as Timestamp)}
              onEdit={() => navigate(`/blog/edit/${blog.id}`)}
              viewBlog={()=> navigate(`/blog/${blog.id}`)}
              onDelete={()=>handleBlogDelete(blog.id!)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default MyBlogPage;
