import { lazy } from "react";


const MainLayout = lazy(() => import("../Layout/Main/index"));
const HomePage = lazy(() => import("../Pages/home/Home"));
const AuthRedirect = lazy(() => import("../route-guards/AuthGuard"));
const CreateBlogPage = lazy(() => import("../Pages/Blog/Create"));
const MyBlogPage = lazy(() => import("../Pages/Blog/MyBlogs"));
const EditBlogPage = lazy(() => import("../Pages/Blog/Edit"));
const BlogPage = lazy(() => import("../Pages/Blog/BlogPage"));
const BlogGuard = lazy(() => import("../route-guards/BlogGuard"));


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

