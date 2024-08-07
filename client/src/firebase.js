// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-cdff5.firebaseapp.com",
  projectId: "mern-auth-cdff5",
  storageBucket: "mern-auth-cdff5.appspot.com",
  messagingSenderId: "555001745981",
  appId: "1:555001745981:web:0dcfedd45d817bb1de9054"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);