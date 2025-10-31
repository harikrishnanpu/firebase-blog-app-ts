import { useNavigate } from 'react-router-dom';
import tree from '../../assets/tree.png';

const LandingPage = () => {

    const navigate = useNavigate();

    return (
        <section className="h-screen px-6 text-center py-20">
            <div className="z-40">
                <h1 className='font-bold text-[40px] text-gray-700'>Where ideas grow as freely as the leaves in <span className='text-green-700'>Spring.</span></h1>
                <p className='mt-4 text-gray-600'>Join our community of nature enthusiasts and share your passion for the environment.</p>
                <div className="">
                    <button onClick={()=> navigate('/login')} className="bg-green-800 mt-5 font-bold cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-green-700">Write your article !</button>
                </div>
            </div>
            <img className='w-[300px] md:w-[400px]  z-10 absolute bottom-0 right-0' src={tree} alt="" />
        </section>
    )

}


export default LandingPage;