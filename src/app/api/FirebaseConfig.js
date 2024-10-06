// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore"; // Import Firestore SDK

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

// Initialize Authentication and Firestore
export const userDatabase = getAuth(app); // User login database
export const db = getFirestore(app); // Firestore instance for your project

// Access your userInfoDatabase collection
export const userInfoDatabaseRef = collection(db, "users"); // Reference to the users collection
