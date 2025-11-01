import { useNavigate } from "react-router-dom";


const Button = ({href,title} : {href: string, title: string}) => {

    const navigate = useNavigate();

    return (
            <div className="w-auto z-10">
                <button onClick={()=> navigate(href)} className="bg-green-800 font-bold cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-green-700">{title}</button>
            </div>
    )

}

export default Button;