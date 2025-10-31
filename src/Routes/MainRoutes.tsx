import MainLayout from "../Layout/Main";
import HomePage from "../Pages/home/Home";
import AuthRedirect from "../route-guards/AuthGuard";



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
        }
    ]

}

