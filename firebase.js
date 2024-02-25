// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_GOOGLE_KEY,
  authDomain: "dating-auth-607fa.firebaseapp.com",
  projectId: "dating-auth-607fa",
  storageBucket: "dating-auth-607fa.appspot.com",
  messagingSenderId: "262247543005",
  appId: "1:262247543005:web:0addfccd167c3512d1eb34"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);