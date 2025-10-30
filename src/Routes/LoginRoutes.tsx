import { lazy, type FC } from "react"



const LoginComponent: FC = lazy(()=> import('../Pages/auth/Login'));

export const LoginRoutes = {

    path: '/',
    children: [
        {
            path: '/login',
            element: <LoginComponent />
        }
    ],
}