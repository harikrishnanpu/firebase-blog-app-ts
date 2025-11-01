import { useEffect, useState } from "react";
import BlogCard from "../../Components/BlogCard/BlogCard";
import { getAllBlogs } from "../../services/blogServices";
import type { Blog } from "../../types/Blog";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";



const HomePage = () => {

    const [blogs, setBlogs] = useState<Array<Blog>>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();
    const {user} = useAuth();

    useEffect(()=>{
      const fetchBlogs = async () => {
        try{
              setLoading(true);
                const blogs = await getAllBlogs();
                setBlogs(blogs as Array<Blog>);
            }catch(err){
                console.log(err);
            }finally{
                setLoading(false);
            }
        }

        fetchBlogs();
    },[]);

    if(!user){
      navigate('/login');
      return;
    }

    if(loading){
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600"></div>
        </div>
      )
    }

    return (

<section className="relative min-h-screen overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-10 md:mb-14">

          <div className="inline-block mb-4">
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-4 py-2 rounded-full">
              Explore Nature
            </span>
          </div>
          
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 leading-tight px-4">
            Look deep into nature, and then<br className="hidden sm:block" /> 
            you will understand{' '}
            <span className="text-amber-700 bg-clip-text">
              Everything
            </span>{' '}
            better.
          </h1>
          
          <p className="text-md md:text-sm text-gray-600 italic mb-8 mt-2">
            — Albert Einstein
          </p>
          

          <div className="flex gap-2 justify-center">

          <button 
            onClick={() => navigate('/blog/me')}
            className="group relative cursor-pointer inline-flex items-center gap-2  from-green-600 bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all "
            >
            <span>View My Blogs</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          <button 
            onClick={() => navigate('/blog/create')}
            className="group relative cursor-pointer inline-flex items-center gap-2  from-green-600 bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all "
          >
            <span>Create Article</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          
            </div>

        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-green-700 rounded"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Recent Blogs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs?.map((blog) => (
              <BlogCard 
                key={blog.title}
                href={blog.href}
                title={blog.title}
                content={blog.content}
              />
            ))}
          </div>

        </div>

      </div>

    </section>
    )

}



export default HomePage;
