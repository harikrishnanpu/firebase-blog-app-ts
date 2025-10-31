import React, { useEffect, useState } from "react";
import type { UserContextType } from "../types/UserContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase.Config";
import { AuthContext } from "./AuthContext";



export const AuthProvider: React.FC<{ children: React.ReactNode }> =  ({children}) => {
    const [user, setUser] = useState<UserContextType["user"] | null>(null);
    const [loading, setLoading] = React.useState<boolean>(true);

    useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth, (usr) => {
            setUser(usr);
            setLoading(false);
        });
    return () => unsubscribe();
    },[]);

    return (
        <AuthContext.Provider value={{user,loading}}>
            {children}
        </AuthContext.Provider>
    )

}
