import MainLayout from "../Layout/Main";
import HomePage from "../Pages/home/Home";
import AuthRedirect from "../route-guards/AuthGuard";
import CreateBlogPage from "../Pages/Blog/Create";
import MyBlogPage from "../Pages/Blog/MyBlogs";
import EditBlogPage from "../Pages/Blog/Edit";
import BlogPage from "../Pages/Blog/BlogPage";



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
                    element: <CreateBlogPage />
                },
                {
                    path: 'me',
                    element: <MyBlogPage />
                },
                {
                    path: ':id',
                    element: <BlogPage />
                },
                {
                    path: 'edit/:id',
                    element: <EditBlogPage />
                }
            ]
        }
    ]

}

