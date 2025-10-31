import { useNavigate } from "react-router-dom";
import type { Blog } from "../../types/Blog";


const BlogCard = ({ title, href, content }: Blog) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(href as string)}
      className="group cursor-pointer bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-sm border border-gray-100"
    >
      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-lg md:text-xl text-gray-800 group-hover:text-green-600 transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-sm md:text-base text-gray-600 line-clamp-2">
          {content.slice(0, 80)}...
        </p>
        <div className="flex items-center gap-2 text-green-600 font-medium text-sm">
          <span>Read more</span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};


export default BlogCard;