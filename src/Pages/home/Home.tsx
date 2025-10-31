import BlogCard from "../../Components/BlogCard/BlogCard";
import treeLeaf from "../../assets/tree-leaf.png";



const HomePage = () => {

    const blogData = {
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "Understanding React Hooks: A Comprehensive Guide",
        href: "/blog/react-hooks-guide",
        data: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    };

    const blogs = new Array(5).fill(blogData);

    return (
        <section className="relative px-6 text-center py-10 fkex flex-col justify-center items-center">
            <div className="">
                <h1 className='font-bold text-[20px]  text-gray-700'>Look deep into nature, and then you will understand <span className='text-green-700'>Everything.</span> better.</h1>
                <p> — Albert Einstein</p>
            </div>
            
            <div className="mt-10 mx-auto">
                <div className="">
                    <h2 className="mb-4 text-xl font-bold text-left text-amber-900">Recent Blogs:</h2>
                </div>
                {
                    blogs.map((blog) => {
                        return <BlogCard key={blog.title} image={blog.image} href={blog.href} title={blog.title} data={blog.data} />
                    })
                }
            </div>


            <img className="absolute w-60 top-0 right-0 z-0" src={treeLeaf} alt="" />

        </section>
    )

}



export default HomePage;
