import MainLayout from "../Layout/Main";
import Home from "../Pages/home/Home";




export const MainRoutes = {

    path: '/',
    element: <MainLayout />,
    children: [
        {
            index: true,
            element: <Home />
        }
    ]

}

