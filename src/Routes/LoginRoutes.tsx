import { lazy, type FC } from "react"



const LoginComponent: FC = lazy(()=> import('../Pages/auth/Login'));
const SignupComponent: FC = lazy(()=> import('../Pages/auth/Signup'));

export const LoginRoutes = {

    path: '/',
    children: [
        {
            path: '/login',
            element: <LoginComponent />
        },
        {
            path: '/signup',
            element: <SignupComponent />
        }
    ],
}