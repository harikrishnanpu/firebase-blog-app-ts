import { createBrowserRouter } from "react-router-dom";
import { LoginRoutes } from "./LoginRoutes";
import { MainRoutes } from "./MainRoutes";



const router = createBrowserRouter([LoginRoutes,MainRoutes]);


export default router;