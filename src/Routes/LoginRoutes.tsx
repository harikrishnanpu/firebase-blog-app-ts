import { lazy, type FC } from "react"

const Authlayout = lazy(() => import("../Layout/Auth"));
const LoginGuard = lazy(() => import("../route-guards/LoginGuard"));
const LoginComponent: FC = lazy(()=> import('../Pages/auth/Login'));
const SignupComponent: FC = lazy(()=> import('../Pages/auth/Signup'));
const LogoutComponent: FC = lazy(()=> import('../Pages/auth/Logout'));


export const LoginRoutes = {
    path: '/',
    element: <Authlayout/>,
    children: [
        {
            path: '/login',
            element: <LoginGuard component={<LoginComponent />} />
        },
        {
            path: '/signup',
            element: <LoginGuard component={<SignupComponent />} />
        },
        {
            path: '/logout',
            element: <LogoutComponent  />
        }
    ],
}