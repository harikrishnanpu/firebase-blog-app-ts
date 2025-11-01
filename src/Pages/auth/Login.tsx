import { useNavigate } from "react-router-dom";
import GoogleAuthButton from "../../Components/Button/GoogleBtn";
import { signupWithGoogle, singInUser } from "../../services/authServices";
import { useState } from "react";
import toast from "react-hot-toast";




const LoginPage = () => {


    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();


    const handleSingIn = async () => {
        try{
            setIsSubmitting(true);
            const user = await singInUser({email, password});
            console.log(user);
            toast.success('Logged in successfully');
            navigate('/')
        }catch(err){
            if(err instanceof Error){
                setError(err.message);
                console.log(error);
                toast.error(err.message);
            }
        }finally{
            setIsSubmitting(false);
        }
    }

    return (
    <section>

    <div className="flex flex-col justify-center items-center h-[80vh]">
        <h1 className="font-bold text-3xl text-green-700">Log {'>>'} in</h1>
        <p className="mt-4 text-gray-500">Grow your thoughts. Refresh your world.</p>
        <div className="flex-col flex space-y-4 mt-6 w-full max-w-sm">
            <input onChange={(e)=> setEmail(e.target.value)} value={email} placeholder="username" className="bg-gray-200 p-2 rounded-sm focus:outline-none outline-none" type="text" />
            <input onChange={(e)=> setPassword(e.target.value)} value={password} placeholder="password" className="bg-gray-200 p-2 rounded-sm focus:outline-none outline-none" type="password" />
            <button disabled={isSubmitting} onClick={handleSingIn} className="bg-green-800 font-bold cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-green-700">{isSubmitting ? 'Loading...' : 'Login'}</button>
            <GoogleAuthButton disabled={isSubmitting} handler={signupWithGoogle} title="Sign in with Google" />
            <p className="text-amber-800 cursor-pointer" onClick={()=> navigate('/signup')}>Don't have an account ?</p>
        </div>
    </div>

    </section>
    )
}


export default LoginPage;