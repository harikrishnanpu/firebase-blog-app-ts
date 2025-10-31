import { useNavigate } from "react-router-dom";


const BlogCard = ({image, title, href, data }: {image: string, title: string, href: string, data: string}) => {

    const navigate = useNavigate();

    return (
        <div onClick={()=> navigate(href)} className="sm:max-w-3/4 w-full mx-auto flex justify-between items-center gap-4 border-b-2 border-gray-100 rounded-lg p-4 ">
            <div className="text-center items-center flex flex-col justify-center">
            <img className="rounded-sm h-auto sm:w-40 w-100" src={image} alt={title} />
            </div>
            <div className="p-2 items-center">
                <h2 className="font-bold sm:text-xl text-sm">{title}</h2>
                <p className="text-xs sm:text-sm">{data}</p>
            </div>

        </div>

    )

}


export default BlogCard;