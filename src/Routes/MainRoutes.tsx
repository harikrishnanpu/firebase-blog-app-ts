import MainLayout from "../Layout/Main";
import HomePage from "../Pages/home/Home";
import AuthRedirect from "../route-guards/AuthGuard";
import CreateBlogPage from "../Pages/Blog/Create";
import MyBlogPage from "../Pages/Blog/MyBlogs";
import EditBlogPage from "../Pages/Blog/Edit";
import BlogPage from "../Pages/Blog/BlogPage";
import BlogGuard from "../route-guards/BlogGuard";



export const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            index: true,
            element: <AuthRedirect />
        },
        {
            path: '/home',
            element: <HomePage />
        },
        {
            path: '/blog',
            children: [
                {
                    path: 'create',
                    element: <BlogGuard component={<CreateBlogPage />} />
                },
                {
                    path: 'me',
                    element: <BlogGuard component={<MyBlogPage />} />
                },
                {
                    path: ':id',
                    element: <BlogGuard component={<BlogPage />} />
                },
                {
                    path: 'edit/:id',
                    element: <BlogGuard component={<EditBlogPage />} />
                }
            ]
        }
    ]

}

