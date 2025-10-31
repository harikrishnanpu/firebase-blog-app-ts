import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser, signupWithGoogle } from "../../services/authServices";
import { passwordValidator } from "../../utils/validator";
import toast from "react-hot-toast";
import GoogleAuthButton from "../../Components/Button/GoogleBtn";




const SignupPage = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleSignup = async () => {
        try{
            setIsSubmitting(true);
            const isPasswordMatch = passwordValidator(password, confirmPassword);
            if(!isPasswordMatch){
                throw new Error("Passwords do not match");
            }
            const user = await signupUser({email,password});
            console.log(user);
            toast.success("Signup successful!");
            navigate('/');
        }catch(err){
            if(err instanceof Error){
                setError(err.message);
                toast.error(err.message || "Signup failed ! Please try again.");
            }
        }finally{
            setIsSubmitting(false);
            console.log(error)
        }

    }
    
    
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
        <h1 className="font-bold text-3xl text-green-700">#Signup</h1>
        <p className="mt-4 text-gray-500">Root yourself in creativity. Let it flow.</p>
        <div className="flex-col flex space-y-4 mt-6 w-full max-w-sm">
            <input onChange={(e)=> setEmail(e.target.value)} value={email} placeholder="email @s username" className="bg-gray-200 p-2 rounded-sm focus:outline-none outline-none" type="text" />
            <input onChange={(e)=> setPassword(e.target.value)} value={password} placeholder="password" className="bg-gray-200 p-2 rounded-sm focus:outline-none outline-none" type="password" />
            <input onChange={(e)=> setConfirmPassword(e.target.value)} value={confirmPassword} placeholder="confirm password" className="bg-gray-200 p-2 rounded-sm focus:outline-none outline-none" type="password" />
            <button disabled={isSubmitting} onClick={handleSignup} className="bg-green-800 font-bold cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-green-700">{isSubmitting ? 'Loading..' : 'Sign >> up'}</button>
            <GoogleAuthButton disabled={isSubmitting} handler={signupWithGoogle} title="Signup With Google" />
            <p className="text-amber-800 cursor-pointer" onClick={()=> navigate('/login')}>Already have an account ?</p>
        </div>
    </div>

    </section>
    )
}


export default SignupPage;