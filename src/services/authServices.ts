
import { auth } from '../config/firebase.Config';
import {type User} from '../types/User';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


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


export const signupWithGoogle = async () => {
  try {

    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup(auth, provider);
    return result.user; 


  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
  }
};

