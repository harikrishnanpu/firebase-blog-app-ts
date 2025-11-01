import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Button from "../Button/Button";
import treeLeaf from '../../assets/tree-leaf.png';




const Navbar = () => {

    const {user, loading} = useAuth();
    const navigate = useNavigate();

    return (
        <nav className="relative lg:px-20 px-10 py-8 shadow-green-300 shadow-md">
            <div className="flex justify-between items-center w-full">
                
                {/* Logo */}
                <div onClick={()=> navigate('/')} className="logo z-10 w-1/2 cursor-pointer">
                    <h1 className="font-bold text-[24px] text-green-900">{import.meta.env.VITE_APP_NAME}</h1>
                </div>

                <ul className="justify-between space-x-20 hidden lg:flex">
                        <li className="text-green-700 cursor-pointer">Home</li>
                        <li className=" cursor-pointer">Articles</li>
                        <li className=" cursor-pointer">Contact</li>
                </ul>

                {
                    !user && !loading ?
                    <Button href={'/login'} title="Get started" />
                    : <Button href="/logout" title="logout" />
                }

            </div>
            <img className="absolute bottom-0 w-50 left-0 rotate-180 z-0" src={treeLeaf} alt="" />
            <img className="absolute bottom-0 w-70 right-0 z-0" src={treeLeaf} alt="" />
        </nav>
    )
}


export default Navbar;