"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { userDatabase, userInfoDatabaseRef } from "../api/FirebaseConfig"; // Import your Firebase config
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; // Firestore functions

export default function LoginPage() {
  const [isSignIn, setIsSignIn] = useState(true); // State for Sign In/Sign Up toggle
  const [errorMessage, setErrorMessage] = useState(""); // Error message state
  const router = useRouter(); // For navigation

  // Handle form submission for both Sign In and Sign Up
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    const email = e.target.email.value.trim();
    const password = e.target.password?.value?.trim();
    const firstName = e.target.firstName?.value?.trim();
    const lastName = e.target.lastName?.value?.trim();

    if (!email || !password) {
      setErrorMessage("Please enter both email and password");
      return;
    }

    try {
      if (!isSignIn) {
        // Sign Up logic
        const authData = await createUserWithEmailAndPassword(
          userDatabase,
          email,
          password
        );
        
        // Get User UID from Firebase Auth response
        const userUID = authData.user.uid;

        // Store additional user data in Firestore (userInfoDatabaseRef)
        await setDoc(doc(userInfoDatabaseRef, userUID), {
          firstName: firstName,
          lastName: lastName,
          email: email,
          userUID: userUID,
          copilot_exp: 0,
          gpt_exp: 0,
          notebook_lm_exp: 0,
          gemini_exp: 0,
        });

        console.log("User successfully signed up and data stored");
        router.push("/dashboard");
      } else {
        // Sign In logic
        const authData = await signInWithEmailAndPassword(
          userDatabase,
          email,
          password
        );
        console.log("User successfully signed in");
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error during authentication:", error.message);

      // Handle Firebase authentication errors
      switch (error.code) {
        case "auth/invalid-email":
          setErrorMessage("Invalid email address format.");
          break;
        case "auth/user-disabled":
          setErrorMessage("User account is disabled.");
          break;
        case "auth/user-not-found":
          setErrorMessage("No user found with this email.");
          break;
        case "auth/wrong-password":
          setErrorMessage("Incorrect password.");
          break;
        case "auth/email-already-in-use":
          setErrorMessage("Email is already in use.");
          break;
        case "auth/weak-password":
          setErrorMessage("Password is too weak.");
          break;
        default:
          setErrorMessage("An error occurred. Please try again.");
          break;
      }
    }
  };

  // Toggle between Sign In and Sign Up
  const toggleSignInSignUp = () => {
    setIsSignIn(!isSignIn);
    setErrorMessage(""); // Clear error message when toggling
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        {errorMessage && (
          <div className="text-red-500 text-sm text-center mb-4">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isSignIn && (
            <>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="firstName"
                placeholder="First Name"
                type="text"
              />
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="lastName"
                placeholder="Last Name"
                type="text"
              />
            </>
          )}
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="email"
            placeholder="E-mail"
            type="email"
          />
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="password"
            type="password"
            placeholder="Password"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <p className="text-center mt-4">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}
          <button
            type="button"
            onClick={toggleSignInSignUp}
            className="text-blue-500 font-semibold hover:underline ml-1"
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
}
