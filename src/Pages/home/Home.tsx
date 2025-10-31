import { useEffect, useState } from "react";
import BlogCard from "../../Components/BlogCard/BlogCard";
import { getAllBlogs } from "../../services/blogServices";
import type { Blog } from "../../types/Blog";
import { useNavigate } from "react-router-dom";



const HomePage = () => {

    const [blogs, setBlogs] = useState<Array<Blog>>([])
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchBlogs = async () => {
            try{
                const blogs = await getAllBlogs();
                setBlogs(blogs as Array<Blog>);
            }catch(err){
                console.log(err);
            }
        }

        fetchBlogs();
    })

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
            onClick={() => navigate('/blog/me')}
            className="group relative cursor-pointer inline-flex items-center gap-2  from-green-600 bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all "
          >
            <span>My Account</span>
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

        <div className="absolute top-20 right-4 md:right-12 opacity-10 pointer-events-none">
          <svg className="w-40 md:w-60 h-40 md:h-60 text-green-600" viewBox="0 0 200 200" fill="currentColor">
            <path d="M100,20 Q120,40 130,70 Q140,100 130,130 Q120,160 100,180 Q80,160 70,130 Q60,100 70,70 Q80,40 100,20 Z" />
            <path d="M100,20 Q90,50 85,80 Q80,110 85,140 Q90,170 100,180" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>

      </div>

      <style>
        {`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}
      </style>
    </section>
    )

}



export default HomePage;
