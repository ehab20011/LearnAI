// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdQaXfNJcVsYJl21goTtTInwxOSwNLREU",
  authDomain: "howtoai-fc469.firebaseapp.com",
  projectId: "howtoai-fc469",
  storageBucket: "howtoai-fc469.appspot.com",
  messagingSenderId: "371121878025",
  appId: "1:371121878025:web:28d33243e7a080b4ef74d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const userDatabase = getAuth(app)