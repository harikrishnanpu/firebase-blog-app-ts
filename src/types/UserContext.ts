import type { User } from "firebase/auth";

export interface UserContextType {
    user: User | null; 
    loading: boolean;
}