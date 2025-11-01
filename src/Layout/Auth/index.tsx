import { Outlet, useNavigate } from "react-router-dom"




const Authlayout = () => {

        const navigate = useNavigate();

    return (
        <div>
                <nav className="lg:px-20 px-10 py-8">
        <div className="flex justify-between items-center w-full">
                
                {/* Logo */}
                <div className="logo w-1/2">
                    <h1 onClick={()=> navigate('/')} className="font-bold cursor-pointer text-[24px] text-green-900">{import.meta.env.VITE_APP_NAME}</h1>
                </div>

            </div>
    </nav>
            <Outlet />
        </div>
    )
}

export default Authlayout;