import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB5kRSp8vpbunTCG8OnEL5PA1rblJQyOwE",
  authDomain: "react-blog-app-ts-37ebb.firebaseapp.com",
  projectId: "react-blog-app-ts-37ebb",
  storageBucket: "react-blog-app-ts-37ebb.firebasestorage.app",
  messagingSenderId: "848419562767",
  appId: "1:848419562767:web:315b05344ad42d86dd0a7a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);