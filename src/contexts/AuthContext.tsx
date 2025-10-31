import { createContext } from "react";
import type { UserContextType } from "../types/UserContext";




export const AuthContext = createContext<UserContextType>({
    user: null,
    loading: true
});
