import { Outlet, useNavigate } from "react-router-dom"

import treeLeaf from '../../assets/tree-leaf.png';



const Authlayout = () => {

        const navigate = useNavigate();

    return (
        <div>
                <nav className="relative lg:px-20 px-10 py-8">
        <div className="flex justify-between items-center w-full">
                
                {/* Logo */}
                <div className="logo w-1/2">
                    <h1 onClick={()=> navigate('/')} className="font-bold cursor-pointer text-[24px] text-green-900">{import.meta.env.VITE_APP_NAME}</h1>
                </div>

            </div>
                        <img className="absolute bottom-[-80px] w-100 right-0 z-0" src={treeLeaf} alt="" />

    </nav>
            <Outlet />
        </div>
    )
}

export default Authlayout;