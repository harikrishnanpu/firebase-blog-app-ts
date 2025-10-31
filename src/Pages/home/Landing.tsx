import { useNavigate } from 'react-router-dom';
import tree from '../../assets/tree.png';

const LandingPage = () => {

    const navigate = useNavigate();

    return (
        <section className="h-screen px-6 text-center">      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-10 md:mb-14">

          <div className="inline-block mb-4">
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-4 py-2 rounded-full">
              Explore Nature
            </span>
          </div>

                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 leading-tight px-4">
            Where ideas grow as<br className="hidden sm:block" /> 
             freely as the leaves in
            {' '}
            <span className="text-amber-700 bg-clip-text">
              Spring
            </span>{' '}
          </h1>

                    <p className="text-md md:text-sm text-gray-600 italic mb-8 mt-2">
            — Green Mind. <br /> Join our community of nature enthusiasts and share your passion for the environment.
          </p>

          <div className="flex gap-2 justify-center">

          <button 
            onClick={() => navigate('/login')}
            className="group relative cursor-pointer inline-flex items-center gap-2  from-green-600 bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all "
            >
            <span>Create your article</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          
            </div>
            </div>
        </div>
            <img className='w-[300px] md:w-[400px] z-10 absolute bottom-0 right-0' src={tree} alt="Landing page image" />
    </section>
    )

}


export default LandingPage;