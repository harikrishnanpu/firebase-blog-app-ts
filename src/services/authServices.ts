
import { auth } from '../config/firebase.Config';
import {type User} from '../types/User';
import { createUserWithEmailAndPassword } from 'firebase/auth';


export const signupUser = async ({email, password}: User)  => {
    try{
        const userCredential = await createUserWithEmailAndPassword(auth,email,password);
        return userCredential.user;
    }catch(err){
        if(err instanceof Error){
            throw new Error(err.message)
        }
    }
}