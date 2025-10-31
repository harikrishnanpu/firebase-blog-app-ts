import { useNavigate } from "react-router-dom";
import GoogleAuthButton from "../../Components/Button/GoogleBtn";
import { signupWithGoogle } from "../../services/authServices";




const LoginPage = () => {

    const navigate = useNavigate();

    return (
    <section>

    <nav className="lg:px-20 px-10 py-8">
        <div className="flex justify-between items-center w-full">
                
                {/* Logo */}
                <div className="logo w-1/2">
                    <h1 onClick={()=> navigate('/')} className="font-bold cursor-pointer text-[24px] text-green-900">{import.meta.env.VITE_APP_NAME}</h1>
                </div>

            </div>
    </nav>

    <div className="flex flex-col justify-center items-center h-[80vh]">
        <h1 className="font-bold text-3xl text-green-700">Log {'>>'} in</h1>
        <p className="mt-4 text-gray-500">Grow your thoughts. Refresh your world.</p>
        <div className="flex-col flex space-y-4 mt-6 w-full max-w-sm">
            <input placeholder="username" className="bg-gray-200 p-2 rounded-sm focus:outline-none outline-none" type="text" />
            <input placeholder="password" className="bg-gray-200 p-2 rounded-sm focus:outline-none outline-none" type="password" />
            <button className="bg-green-800 font-bold cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-green-700">Login</button>
            <GoogleAuthButton handler={signupWithGoogle} title="Sign in with Google" />
            <p className="text-amber-800 cursor-pointer" onClick={()=> navigate('/signup')}>Don't have an account ?</p>
        </div>
    </div>

    </section>
    )
}


export default LoginPage;